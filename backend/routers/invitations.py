from datetime import datetime, timedelta, timezone

from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session

from auth_utils import create_access_token, hash_password
from database import get_db
from dependencies import get_current_user
from models import Invitation, Team, TeamMember, TeamRole, User
from schemas import InvitationCreate, InvitationOut, TokenResponse, UserOut

router = APIRouter(tags=["invitations"])


class InvitationRegisterRequest(BaseModel):
    email: EmailStr
    name: str
    password: str


def _as_utc(dt: datetime) -> datetime:
    return dt.replace(tzinfo=timezone.utc) if dt.tzinfo is None else dt


def _get_valid_invitation(db: Session, token: str) -> Invitation:
    inv = db.query(Invitation).filter(Invitation.token == token).first()
    if not inv:
        raise HTTPException(status_code=404, detail="Invitation not found")
    if inv.used_at is not None:
        raise HTTPException(status_code=410, detail="Invitation already used")
    if _as_utc(inv.expires_at) < datetime.now(timezone.utc):
        raise HTTPException(status_code=410, detail="Invitation expired")
    return inv


def _invitation_out(inv: Invitation, db: Session) -> InvitationOut:
    team = db.query(Team).filter(Team.id == inv.team_id).first()
    creator = db.query(User).filter(User.id == inv.created_by_id).first()
    return InvitationOut(
        id=inv.id,
        token=inv.token,
        team_id=inv.team_id,
        team_name=team.name,
        created_by=UserOut.model_validate(creator),
        expires_at=inv.expires_at,
        used_at=inv.used_at,
    )


@router.post(
    "/teams/{team_id}/invitations",
    response_model=InvitationOut,
    status_code=status.HTTP_201_CREATED,
)
def create_invitation(
    team_id: str,
    body: InvitationCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    team = db.query(Team).filter(Team.id == team_id).first()
    if not team:
        raise HTTPException(status_code=404, detail="Team not found")

    member = (
        db.query(TeamMember)
        .filter(TeamMember.team_id == team_id, TeamMember.user_id == current_user.id)
        .first()
    )
    if not member:
        raise HTTPException(status_code=403, detail="Not a team member")
    if member.role not in (TeamRole.OWNER, TeamRole.LEAD):
        raise HTTPException(status_code=403, detail="Only Owner or Lead can invite")

    inv = Invitation(
        team_id=team_id,
        created_by_id=current_user.id,
        expires_at=datetime.now(timezone.utc) + timedelta(hours=body.expires_hours),
    )
    db.add(inv)
    db.commit()
    db.refresh(inv)
    return _invitation_out(inv, db)


@router.get("/invitations/{token}", response_model=InvitationOut)
def get_invitation(token: str, db: Session = Depends(get_db)):
    inv = _get_valid_invitation(db, token)
    return _invitation_out(inv, db)


@router.post(
    "/invitations/{token}/register",
    response_model=TokenResponse,
    status_code=status.HTTP_201_CREATED,
)
def register_via_invitation(
    token: str,
    body: InvitationRegisterRequest,
    db: Session = Depends(get_db),
):
    """Register a new user and add them to the team in one step."""
    inv = _get_valid_invitation(db, token)
    team = db.query(Team).filter(Team.id == inv.team_id).first()

    if db.query(User).filter(User.email == body.email).first():
        raise HTTPException(status_code=400, detail="Email already registered")

    user = User(email=body.email, name=body.name, hashed_password=hash_password(body.password))
    db.add(user)
    db.flush()

    db.add(TeamMember(team_id=team.id, user_id=user.id, role=TeamRole.DEVELOPER))
    inv.used_by_id = user.id
    inv.used_at = datetime.now(timezone.utc)

    db.commit()
    db.refresh(user)

    return TokenResponse(
        access_token=create_access_token(user.id),
        user=UserOut.model_validate(user),
    )


@router.post("/invitations/{token}/join", status_code=status.HTTP_200_OK)
def join_via_invitation(
    token: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Add an already-authenticated user to the team."""
    inv = _get_valid_invitation(db, token)
    team = db.query(Team).filter(Team.id == inv.team_id).first()

    already_member = (
        db.query(TeamMember)
        .filter(TeamMember.team_id == team.id, TeamMember.user_id == current_user.id)
        .first()
    )
    if already_member:
        raise HTTPException(status_code=400, detail="Already a member of this team")

    db.add(TeamMember(team_id=team.id, user_id=current_user.id, role=TeamRole.DEVELOPER))
    inv.used_by_id = current_user.id
    inv.used_at = datetime.now(timezone.utc)

    db.commit()
    return {"message": f"Joined team {team.name}"}
