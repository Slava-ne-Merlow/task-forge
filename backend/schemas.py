from datetime import datetime
from typing import Any

from pydantic import BaseModel, ConfigDict, EmailStr
from pydantic.alias_generators import to_camel

from models import TeamRole


class CamelModel(BaseModel):
    """Base model: reads snake_case attrs from ORM, serialises as camelCase JSON."""

    model_config = ConfigDict(
        alias_generator=to_camel,
        populate_by_name=True,
        from_attributes=True,
    )

    def model_dump(self, **kwargs: Any) -> dict[str, Any]:
        kwargs.setdefault("by_alias", True)
        return super().model_dump(**kwargs)

    def model_dump_json(self, **kwargs: Any) -> str:
        kwargs.setdefault("by_alias", True)
        return super().model_dump_json(**kwargs)


class UserOut(CamelModel):
    id: str
    email: str
    name: str
    created_at: datetime


class RegisterRequest(BaseModel):
    email: EmailStr
    name: str
    password: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(CamelModel):
    access_token: str
    token_type: str = "bearer"
    user: UserOut


class TeamCreate(BaseModel):
    name: str


class TeamOut(CamelModel):
    id: str
    name: str
    created_at: datetime
    my_role: TeamRole


class MemberOut(CamelModel):
    id: str
    user: UserOut
    role: TeamRole
    joined_at: datetime


class RoleUpdate(BaseModel):
    role: TeamRole


class InvitationOut(CamelModel):
    id: str
    token: str
    team_id: str
    team_name: str
    created_by: UserOut
    expires_at: datetime
    used_at: datetime | None = None


class InvitationCreate(BaseModel):
    expires_hours: int = 72


# ── Projects ──────────────────────────────────────────────────────────────────

class ProjectCreate(BaseModel):
    name: str
    description: str | None = None


class ProjectOut(CamelModel):
    id: str
    name: str
    description: str | None = None
    team_id: str
    created_at: datetime
    task_count: int = 0


# ── Tasks ─────────────────────────────────────────────────────────────────────

class AssigneeOut(CamelModel):
    id: str
    name: str
    email: str


class TaskOut(CamelModel):
    id: str
    project_id: str
    title: str
    description: str | None = None
    status: str
    priority: str
    assignee: AssigneeOut | None = None
    deadline: datetime | None = None
    estimated_hours: float | None = None
    logged_hours: float = 0.0
    created_at: datetime


class TaskCreate(BaseModel):
    title: str
    description: str | None = None
    assignee_id: str | None = None
    deadline: datetime | None = None
    estimated_hours: float | None = None
    priority: str = "medium"


class TaskUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    status: str | None = None
    priority: str | None = None
    assignee_id: str | None = None
    deadline: datetime | None = None
    estimated_hours: float | None = None
    logged_hours: float | None = None
