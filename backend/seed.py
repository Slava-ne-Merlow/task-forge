"""Seed script: teams, users, projects and tasks."""
import sys
sys.path.insert(0, '.')

from database import Base, SessionLocal, engine
from models import Project, Task, TaskPriority, TaskStatus, Team, TeamMember, TeamRole, User
from auth_utils import create_access_token, hash_password
from datetime import datetime, timedelta, timezone

Base.metadata.create_all(bind=engine)
db = SessionLocal()

now = datetime.now(timezone.utc)


def upsert_user(email, name, password):
    u = db.query(User).filter(User.email == email).first()
    if not u:
        u = User(email=email, name=name, hashed_password=hash_password(password))
        db.add(u); db.flush()
    return u


def upsert_team(name):
    t = db.query(Team).filter(Team.name == name).first()
    if not t:
        t = Team(name=name); db.add(t); db.flush()
    return t


def add_member(team, user, role):
    if not db.query(TeamMember).filter_by(team_id=team.id, user_id=user.id).first():
        db.add(TeamMember(team_id=team.id, user_id=user.id, role=role))


def upsert_project(team, creator, name, description=None):
    p = db.query(Project).filter_by(team_id=team.id, name=name).first()
    if not p:
        p = Project(name=name, description=description, team_id=team.id, created_by_id=creator.id)
        db.add(p); db.flush()
    return p


def add_task(project, creator, title, assignee=None, status=TaskStatus.TODO,
             priority=TaskPriority.MEDIUM, deadline_days=None,
             estimated=None, logged=0.0, description=None):
    if db.query(Task).filter_by(project_id=project.id, title=title).first():
        return
    deadline = (now + timedelta(days=deadline_days)) if deadline_days is not None else None
    db.add(Task(
        project_id=project.id,
        title=title,
        description=description,
        assignee_id=assignee.id if assignee else None,
        created_by_id=creator.id,
        status=status,
        priority=priority,
        deadline=deadline,
        estimated_hours=estimated,
        logged_hours=logged,
    ))


# ─────────────────────────────────────────────
# Users
# ─────────────────────────────────────────────
alice   = upsert_user("alice@taskforge.dev",   "Alice Owner",   "password123")
bob     = upsert_user("bob@taskforge.dev",     "Bob Lead",      "password123")
charlie = upsert_user("charlie@taskforge.dev", "Charlie Dev",   "password123")
diana   = upsert_user("diana@taskforge.dev",   "Diana Dev",     "password123")
eve     = upsert_user("eve@taskforge.dev",     "Eve Owner",     "password123")
frank   = upsert_user("frank@taskforge.dev",   "Frank Lead",    "password123")
grace   = upsert_user("grace@taskforge.dev",   "Grace Dev",     "password123")

# ─────────────────────────────────────────────
# Team 1: Frontend Squad
# ─────────────────────────────────────────────
team1 = upsert_team("Frontend Squad")
add_member(team1, alice,   TeamRole.OWNER)
add_member(team1, bob,     TeamRole.LEAD)
add_member(team1, charlie, TeamRole.DEVELOPER)
add_member(team1, diana,   TeamRole.DEVELOPER)
db.flush()

# Project 1.1 — Design System
ds = upsert_project(team1, alice, "Design System",
                    "Shared component library and style guide")
add_task(ds, bob, "Set up Storybook",
         assignee=bob, status=TaskStatus.DONE,
         priority=TaskPriority.HIGH, deadline_days=-5,
         estimated=4, logged=4.5)
add_task(ds, bob, "Token palette — colours and typography",
         assignee=charlie, status=TaskStatus.DONE,
         priority=TaskPriority.HIGH, deadline_days=-3,
         estimated=6, logged=5.5)
add_task(ds, bob, "Button component",
         assignee=charlie, status=TaskStatus.IN_PROGRESS,
         priority=TaskPriority.MEDIUM, deadline_days=3,
         estimated=8, logged=3.0)
add_task(ds, bob, "Input / Textfield component",
         assignee=diana, status=TaskStatus.IN_PROGRESS,
         priority=TaskPriority.MEDIUM, deadline_days=5,
         estimated=10, logged=2.0)
add_task(ds, bob, "Modal & Drawer component",
         assignee=diana, status=TaskStatus.TODO,
         priority=TaskPriority.LOW, deadline_days=14,
         estimated=8, logged=0)
add_task(ds, bob, "Write Storybook docs for all components",
         assignee=charlie, status=TaskStatus.TODO,
         priority=TaskPriority.LOW, deadline_days=20,
         estimated=5, logged=0)

# Project 1.2 — Dashboard v2
dash = upsert_project(team1, alice, "Dashboard v2",
                      "Redesign of the main analytics dashboard")
add_task(dash, bob, "UX audit of current dashboard",
         assignee=bob, status=TaskStatus.DONE,
         priority=TaskPriority.HIGH, deadline_days=-10,
         estimated=3, logged=3.5)
add_task(dash, bob, "Wireframes — overview page",
         assignee=bob, status=TaskStatus.DONE,
         priority=TaskPriority.HIGH, deadline_days=-6,
         estimated=4, logged=4.0)
add_task(dash, bob, "Implement chart components",
         assignee=charlie, status=TaskStatus.REVIEW,
         priority=TaskPriority.HIGH, deadline_days=2,
         estimated=12, logged=11.0,
         description="Use Recharts. Needs unit tests for data transforms.")
add_task(dash, bob, "Responsive layout — tablet breakpoint",
         assignee=diana, status=TaskStatus.IN_PROGRESS,
         priority=TaskPriority.MEDIUM, deadline_days=4,
         estimated=6, logged=1.5)
add_task(dash, bob, "Filters sidebar",
         assignee=diana, status=TaskStatus.TODO,
         priority=TaskPriority.MEDIUM, deadline_days=8,
         estimated=5, logged=0)
add_task(dash, bob, "Performance audit (Lighthouse)",
         status=TaskStatus.TODO, priority=TaskPriority.LOW,
         deadline_days=15, estimated=3, logged=0)
# Overdue task
add_task(dash, bob, "Fix date-picker timezone bug",
         assignee=charlie, status=TaskStatus.IN_PROGRESS,
         priority=TaskPriority.CRITICAL, deadline_days=-2,
         estimated=2, logged=1.0,
         description="Dates shift by one day for users in UTC+X. Reproduce with system TZ set.")

# ─────────────────────────────────────────────
# Team 2: Backend Core
# ─────────────────────────────────────────────
team2 = upsert_team("Backend Core")
add_member(team2, eve,   TeamRole.OWNER)
add_member(team2, frank, TeamRole.LEAD)
add_member(team2, grace, TeamRole.DEVELOPER)
add_member(team2, bob,   TeamRole.DEVELOPER)
db.flush()

# Project 2.1 — API v2
api = upsert_project(team2, eve, "API v2",
                     "New REST API with OpenAPI spec and improved auth")
add_task(api, frank, "Design endpoint schema",
         assignee=frank, status=TaskStatus.DONE,
         priority=TaskPriority.HIGH, deadline_days=-14,
         estimated=5, logged=6.0)
add_task(api, frank, "JWT refresh token flow",
         assignee=frank, status=TaskStatus.DONE,
         priority=TaskPriority.HIGH, deadline_days=-10,
         estimated=4, logged=4.5)
add_task(api, frank, "Rate limiting middleware",
         assignee=grace, status=TaskStatus.IN_PROGRESS,
         priority=TaskPriority.HIGH, deadline_days=3,
         estimated=6, logged=2.0)
add_task(api, frank, "OpenAPI / Swagger docs",
         assignee=bob, status=TaskStatus.IN_PROGRESS,
         priority=TaskPriority.MEDIUM, deadline_days=5,
         estimated=4, logged=1.0)
add_task(api, frank, "Pagination — cursor-based",
         assignee=grace, status=TaskStatus.TODO,
         priority=TaskPriority.MEDIUM, deadline_days=10,
         estimated=5, logged=0)
add_task(api, frank, "Integration test suite",
         assignee=grace, status=TaskStatus.TODO,
         priority=TaskPriority.HIGH, deadline_days=12,
         estimated=8, logged=0,
         description="Cover all auth + team + project endpoints.")
# Overdue
add_task(api, frank, "Fix N+1 query on /teams endpoint",
         assignee=grace, status=TaskStatus.REVIEW,
         priority=TaskPriority.CRITICAL, deadline_days=-1,
         estimated=2, logged=2.5,
         description="SQLAlchemy lazy-loads members for every team. Add joinedload.")

# Project 2.2 — Infrastructure
infra = upsert_project(team2, eve, "Infrastructure",
                       "CI/CD pipelines, Docker setup, monitoring")
add_task(infra, frank, "Dockerise all services",
         assignee=frank, status=TaskStatus.DONE,
         priority=TaskPriority.HIGH, deadline_days=-20,
         estimated=6, logged=7.0)
add_task(infra, frank, "GitHub Actions — lint + test pipeline",
         assignee=bob, status=TaskStatus.DONE,
         priority=TaskPriority.HIGH, deadline_days=-12,
         estimated=4, logged=3.5)
add_task(infra, frank, "Staging deployment to Fly.io",
         assignee=frank, status=TaskStatus.IN_PROGRESS,
         priority=TaskPriority.HIGH, deadline_days=6,
         estimated=5, logged=2.0)
add_task(infra, frank, "Sentry error tracking setup",
         assignee=grace, status=TaskStatus.TODO,
         priority=TaskPriority.MEDIUM, deadline_days=9,
         estimated=3, logged=0)
add_task(infra, frank, "Uptime monitoring — Grafana dashboard",
         status=TaskStatus.TODO,
         priority=TaskPriority.LOW, deadline_days=18,
         estimated=4, logged=0)

db.commit()

# ─────────────────────────────────────────────
# Output
# ─────────────────────────────────────────────
users = [alice, bob, charlie, diana, eve, frank, grace]
print("\n=== Seed complete ===\n")
print(f"{'Name':<20} {'Email':<32} {'Password'}")
print("-" * 64)
for u in users:
    print(f"{u.name:<20} {u.email:<32} password123")

print("\n── Frontend Squad ──")
for proj in [ds, dash]:
    count = db.query(Task).filter_by(project_id=proj.id).count()
    print(f"  [{count} tasks] {proj.name}")

print("\n── Backend Core ──")
for proj in [api, infra]:
    count = db.query(Task).filter_by(project_id=proj.id).count()
    print(f"  [{count} tasks] {proj.name}")

db.close()
