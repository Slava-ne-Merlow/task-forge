from datetime import datetime

from pydantic import BaseModel, EmailStr

from models import TeamRole


class UserOut(BaseModel):
    id: str
    email: str
    name: str
    created_at: datetime

    model_config = {"from_attributes": True}


class RegisterRequest(BaseModel):
    email: EmailStr
    name: str
    password: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserOut


class TeamCreate(BaseModel):
    name: str


class TeamOut(BaseModel):
    id: str
    name: str
    created_at: datetime
    my_role: TeamRole

    model_config = {"from_attributes": True}


class MemberOut(BaseModel):
    id: str
    user: UserOut
    role: TeamRole
    joined_at: datetime

    model_config = {"from_attributes": True}


class RoleUpdate(BaseModel):
    role: TeamRole


class InvitationOut(BaseModel):
    id: str
    token: str
    team_id: str
    team_name: str
    created_by: UserOut
    expires_at: datetime
    used_at: datetime | None = None

    model_config = {"from_attributes": True}


class InvitationCreate(BaseModel):
    expires_hours: int = 72


class AcceptInvitationRequest(BaseModel):
    name: str | None = None
    password: str | None = None
