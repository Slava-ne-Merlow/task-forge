import uuid
from datetime import datetime, timezone
from enum import Enum as PyEnum

from sqlalchemy import DateTime, Float, ForeignKey, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from database import Base


def utcnow() -> datetime:
    return datetime.now(timezone.utc)


def new_uuid() -> str:
    return str(uuid.uuid4())


class TeamRole(str, PyEnum):
    OWNER = "owner"
    LEAD = "lead"
    DEVELOPER = "developer"


class TaskStatus(str, PyEnum):
    TODO = "todo"
    IN_PROGRESS = "in_progress"
    REVIEW = "review"
    DONE = "done"


class TaskPriority(str, PyEnum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class User(Base):
    __tablename__ = "users"

    id: Mapped[str] = mapped_column(String, primary_key=True, default=new_uuid)
    email: Mapped[str] = mapped_column(String, unique=True, index=True, nullable=False)
    name: Mapped[str] = mapped_column(String, nullable=False)
    hashed_password: Mapped[str] = mapped_column(String, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)

    memberships: Mapped[list["TeamMember"]] = relationship("TeamMember", back_populates="user")
    sent_invitations: Mapped[list["Invitation"]] = relationship(
        "Invitation", foreign_keys="Invitation.created_by_id", back_populates="created_by"
    )
    assigned_tasks: Mapped[list["Task"]] = relationship("Task", foreign_keys="Task.assignee_id", back_populates="assignee")


class Team(Base):
    __tablename__ = "teams"

    id: Mapped[str] = mapped_column(String, primary_key=True, default=new_uuid)
    name: Mapped[str] = mapped_column(String, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)

    members: Mapped[list["TeamMember"]] = relationship("TeamMember", back_populates="team")
    invitations: Mapped[list["Invitation"]] = relationship("Invitation", back_populates="team")
    projects: Mapped[list["Project"]] = relationship("Project", back_populates="team")


class TeamMember(Base):
    __tablename__ = "team_members"

    id: Mapped[str] = mapped_column(String, primary_key=True, default=new_uuid)
    team_id: Mapped[str] = mapped_column(String, ForeignKey("teams.id"), nullable=False)
    user_id: Mapped[str] = mapped_column(String, ForeignKey("users.id"), nullable=False)
    role: Mapped[TeamRole] = mapped_column(String, nullable=False)
    joined_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)

    team: Mapped["Team"] = relationship("Team", back_populates="members")
    user: Mapped["User"] = relationship("User", back_populates="memberships")


class Invitation(Base):
    __tablename__ = "invitations"

    id: Mapped[str] = mapped_column(String, primary_key=True, default=new_uuid)
    team_id: Mapped[str] = mapped_column(String, ForeignKey("teams.id"), nullable=False)
    token: Mapped[str] = mapped_column(String, unique=True, index=True, nullable=False, default=new_uuid)
    created_by_id: Mapped[str] = mapped_column(String, ForeignKey("users.id"), nullable=False)
    used_by_id: Mapped[str | None] = mapped_column(String, ForeignKey("users.id"), nullable=True)
    expires_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    used_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)

    team: Mapped["Team"] = relationship("Team", back_populates="invitations")
    created_by: Mapped["User"] = relationship(
        "User", foreign_keys=[created_by_id], back_populates="sent_invitations"
    )


class Project(Base):
    __tablename__ = "projects"

    id: Mapped[str] = mapped_column(String, primary_key=True, default=new_uuid)
    name: Mapped[str] = mapped_column(String, nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    team_id: Mapped[str] = mapped_column(String, ForeignKey("teams.id"), nullable=False)
    created_by_id: Mapped[str] = mapped_column(String, ForeignKey("users.id"), nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)

    team: Mapped["Team"] = relationship("Team", back_populates="projects")
    tasks: Mapped[list["Task"]] = relationship("Task", back_populates="project")


class Task(Base):
    __tablename__ = "tasks"

    id: Mapped[str] = mapped_column(String, primary_key=True, default=new_uuid)
    project_id: Mapped[str] = mapped_column(String, ForeignKey("projects.id"), nullable=False)
    title: Mapped[str] = mapped_column(String, nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    assignee_id: Mapped[str | None] = mapped_column(String, ForeignKey("users.id"), nullable=True)
    created_by_id: Mapped[str] = mapped_column(String, ForeignKey("users.id"), nullable=False)
    deadline: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    estimated_hours: Mapped[float | None] = mapped_column(Float, nullable=True)
    logged_hours: Mapped[float] = mapped_column(Float, default=0.0)
    status: Mapped[TaskStatus] = mapped_column(String, default=TaskStatus.TODO)
    priority: Mapped[TaskPriority] = mapped_column(String, default=TaskPriority.MEDIUM)
    started_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)

    project: Mapped["Project"] = relationship("Project", back_populates="tasks")
    assignee: Mapped["User | None"] = relationship("User", foreign_keys=[assignee_id], back_populates="assigned_tasks")
    logs: Mapped[list["TaskLog"]] = relationship("TaskLog", back_populates="task", order_by="TaskLog.created_at")


class TaskLog(Base):
    __tablename__ = "task_logs"

    id: Mapped[str] = mapped_column(String, primary_key=True, default=new_uuid)
    task_id: Mapped[str] = mapped_column(String, ForeignKey("tasks.id"), nullable=False)
    user_id: Mapped[str] = mapped_column(String, ForeignKey("users.id"), nullable=False)
    # action: "log" | "claim" | "start" | "approve" | "reject" | "status_change"
    action: Mapped[str] = mapped_column(String, nullable=False, default="log")
    hours: Mapped[float | None] = mapped_column(Float, nullable=True)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)

    task: Mapped["Task"] = relationship("Task", back_populates="logs")
    user: Mapped["User"] = relationship("User")
