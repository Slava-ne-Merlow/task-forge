"""Seed script: creates 2 teams with users across all roles."""
import sys
sys.path.insert(0, '.')

from database import Base, SessionLocal, engine
from models import Invitation, Team, TeamMember, TeamRole, User
from auth_utils import hash_password, create_access_token
from datetime import datetime, timedelta, timezone

Base.metadata.create_all(bind=engine)
db = SessionLocal()


def get_or_create_user(email, name, password):
    u = db.query(User).filter(User.email == email).first()
    if not u:
        u = User(email=email, name=name, hashed_password=hash_password(password))
        db.add(u)
        db.flush()
    return u


def get_or_create_team(name):
    t = db.query(Team).filter(Team.name == name).first()
    if not t:
        t = Team(name=name)
        db.add(t)
        db.flush()
    return t


def add_member(team, user, role):
    existing = db.query(TeamMember).filter(
        TeamMember.team_id == team.id, TeamMember.user_id == user.id
    ).first()
    if not existing:
        db.add(TeamMember(team_id=team.id, user_id=user.id, role=role))


# ── Team 1: Frontend Squad ────────────────────────────────────────────────────
alice   = get_or_create_user("alice@taskforge.dev",   "Alice Owner",   "password123")
bob     = get_or_create_user("bob@taskforge.dev",     "Bob Lead",      "password123")
charlie = get_or_create_user("charlie@taskforge.dev", "Charlie Dev",   "password123")
diana   = get_or_create_user("diana@taskforge.dev",   "Diana Dev",     "password123")

team1 = get_or_create_team("Frontend Squad")
add_member(team1, alice,   TeamRole.OWNER)
add_member(team1, bob,     TeamRole.LEAD)
add_member(team1, charlie, TeamRole.DEVELOPER)
add_member(team1, diana,   TeamRole.DEVELOPER)

# ── Team 2: Backend Core ──────────────────────────────────────────────────────
eve    = get_or_create_user("eve@taskforge.dev",   "Eve Owner",    "password123")
frank  = get_or_create_user("frank@taskforge.dev", "Frank Lead",   "password123")
grace  = get_or_create_user("grace@taskforge.dev", "Grace Dev",    "password123")

team2 = get_or_create_team("Backend Core")
add_member(team2, eve,   TeamRole.OWNER)
add_member(team2, frank, TeamRole.LEAD)
add_member(team2, grace, TeamRole.DEVELOPER)
# Bob is also a developer in team2
add_member(team2, bob,   TeamRole.DEVELOPER)

db.commit()

# ── Print tokens ──────────────────────────────────────────────────────────────
users = [
    ("alice",   alice),
    ("bob",     bob),
    ("charlie", charlie),
    ("diana",   diana),
    ("eve",     eve),
    ("frank",   frank),
    ("grace",   grace),
]

print("\n=== Seed complete ===\n")
print(f"{'Name':<20} {'Email':<32} {'Password':<14} Token (first 40 chars)")
print("-" * 110)
for label, u in users:
    token = create_access_token(u.id)
    print(f"{u.name:<20} {u.email:<32} {'password123':<14} {token[:40]}...")

print("\n── Teams ──")
print(f"  Team 1: {team1.name}  (id={team1.id})")
print(f"    Owner:     alice@taskforge.dev")
print(f"    Lead:      bob@taskforge.dev")
print(f"    Developer: charlie@taskforge.dev, diana@taskforge.dev")
print(f"  Team 2: {team2.name}  (id={team2.id})")
print(f"    Owner:     eve@taskforge.dev")
print(f"    Lead:      frank@taskforge.dev")
print(f"    Developer: grace@taskforge.dev, bob@taskforge.dev")
print()

db.close()
