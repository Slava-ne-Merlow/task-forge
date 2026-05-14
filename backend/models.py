import uuid
from datetime import datetime, timezone
from enum import Enum as PyEnum

from sqlalchemy import DateTime, ForeignKey, String
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


class Team(Base):
    __tablename__ = "teams"

    id: Mapped[str] = mapped_column(String, primary_key=True, default=new_uuid)
    name: Mapped[str] = mapped_column(String, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)

    members: Mapped[list["TeamMember"]] = relationship("TeamMember", back_populates="team")
    invitations: Mapped[list["Invitation"]] = relationship("Invitation", back_populates="team")


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
