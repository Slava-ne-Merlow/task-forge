from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from database import get_db
from dependencies import get_current_user
from models import Team, TeamMember, TeamRole, User
from schemas import MemberOut, RoleUpdate, TeamCreate, TeamOut, UserOut

router = APIRouter(prefix="/teams", tags=["teams"])


def _get_member(db: Session, team_id: str, user_id: str) -> TeamMember | None:
    return (
        db.query(TeamMember)
        .filter(TeamMember.team_id == team_id, TeamMember.user_id == user_id)
        .first()
    )


def _require_team(db: Session, team_id: str) -> Team:
    team = db.query(Team).filter(Team.id == team_id).first()
    if not team:
        raise HTTPException(status_code=404, detail="Team not found")
    return team


def _require_member(db: Session, team_id: str, user_id: str) -> TeamMember:
    m = _get_member(db, team_id, user_id)
    if not m:
        raise HTTPException(status_code=403, detail="Not a team member")
    return m


@router.get("", response_model=list[TeamOut])
def list_teams(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    memberships = (
        db.query(TeamMember).filter(TeamMember.user_id == current_user.id).all()
    )
    result = []
    for m in memberships:
        team = m.team
        result.append(
            TeamOut(
                id=team.id,
                name=team.name,
                created_at=team.created_at,
                my_role=m.role,
            )
        )
    return result


@router.post("", response_model=TeamOut, status_code=status.HTTP_201_CREATED)
def create_team(
    body: TeamCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    team = Team(name=body.name)
    db.add(team)
    db.flush()

    membership = TeamMember(team_id=team.id, user_id=current_user.id, role=TeamRole.OWNER)
    db.add(membership)
    db.commit()
    db.refresh(team)

    return TeamOut(id=team.id, name=team.name, created_at=team.created_at, my_role=TeamRole.OWNER)


@router.get("/{team_id}", response_model=TeamOut)
def get_team(
    team_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    team = _require_team(db, team_id)
    member = _require_member(db, team_id, current_user.id)
    return TeamOut(id=team.id, name=team.name, created_at=team.created_at, my_role=member.role)


@router.get("/{team_id}/members", response_model=list[MemberOut])
def list_members(
    team_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    _require_team(db, team_id)
    _require_member(db, team_id, current_user.id)

    members = db.query(TeamMember).filter(TeamMember.team_id == team_id).all()
    return [
        MemberOut(
            id=m.id,
            user=UserOut.model_validate(m.user),
            role=m.role,
            joined_at=m.joined_at,
        )
        for m in members
    ]


@router.patch("/{team_id}/members/{user_id}/role", response_model=MemberOut)
def update_member_role(
    team_id: str,
    user_id: str,
    body: RoleUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    _require_team(db, team_id)
    actor = _require_member(db, team_id, current_user.id)

    if actor.role != TeamRole.OWNER:
        raise HTTPException(status_code=403, detail="Only Owner can change roles")

    if body.role == TeamRole.OWNER:
        raise HTTPException(status_code=400, detail="Cannot assign Owner role via this endpoint")

    target = _get_member(db, team_id, user_id)
    if not target:
        raise HTTPException(status_code=404, detail="Member not found")
    if target.user_id == current_user.id:
        raise HTTPException(status_code=400, detail="Cannot change your own role")

    target.role = body.role
    db.commit()
    db.refresh(target)

    return MemberOut(
        id=target.id,
        user=UserOut.model_validate(target.user),
        role=target.role,
        joined_at=target.joined_at,
    )


@router.delete("/{team_id}/members/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
def remove_member(
    team_id: str,
    user_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    _require_team(db, team_id)
    actor = _require_member(db, team_id, current_user.id)

    if actor.role != TeamRole.OWNER:
        raise HTTPException(status_code=403, detail="Only Owner can remove members")

    target = _get_member(db, team_id, user_id)
    if not target:
        raise HTTPException(status_code=404, detail="Member not found")
    if target.user_id == current_user.id:
        raise HTTPException(status_code=400, detail="Cannot remove yourself")

    db.delete(target)
    db.commit()
