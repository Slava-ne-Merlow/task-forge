"""Production seed: realistic tasks with consistent activity logs."""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))

from datetime import datetime, timedelta, timezone
from database import Base, SessionLocal, engine
from models import (
    Project, Task, TaskLog, TaskPriority,
    TaskStatus, Team, TeamMember, TeamRole, User,
)
from auth_utils import hash_password

Base.metadata.create_all(bind=engine)
db = SessionLocal()


def dt(days_ago, hour=10, minute=0):
    return datetime.now(timezone.utc) - timedelta(days=days_ago) + timedelta(hours=hour, minutes=minute)


def get_or_create_user(email, name):
    u = db.query(User).filter(User.email == email).first()
    if not u:
        u = User(email=email, name=name, hashed_password=hash_password("password123"))
        db.add(u); db.flush()
    return u


def get_or_create_team(name):
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
        p = Project(name=name, description=description,
                    team_id=team.id, created_by_id=creator.id)
        db.add(p); db.flush()
    return p


def make_task(project, creator, title, assignee=None,
              status=TaskStatus.TODO, priority=TaskPriority.MEDIUM,
              deadline_days=None, estimated=None, description=None,
              created_days_ago=14):
    if db.query(Task).filter_by(project_id=project.id, title=title).first():
        return None
    dl = (datetime.now(timezone.utc) + timedelta(days=deadline_days)) if deadline_days is not None else None
    t = Task(
        project_id=project.id, title=title, description=description,
        assignee_id=assignee.id if assignee else None,
        created_by_id=creator.id, deadline=dl,
        estimated_hours=estimated, status=status, priority=priority,
        created_at=dt(created_days_ago),
    )
    db.add(t); db.flush()
    return t


def log(task, user, action, description, hours=None, days_ago=0, hour=11):
    db.add(TaskLog(
        task_id=task.id, user_id=user.id, action=action,
        hours=hours, description=description,
        created_at=dt(days_ago, hour=hour),
    ))


def setup_in_progress(task, assignee, started_days_ago, log_entries):
    task.started_at = dt(started_days_ago)
    task.status = TaskStatus.IN_PROGRESS
    log(task, assignee, "status_change", "Moved to In Progress",
        days_ago=started_days_ago, hour=9)
    total = 0.0
    for hours, desc, d in log_entries:
        log(task, assignee, "log", desc, hours=hours, days_ago=d, hour=15)
        total += hours
    task.logged_hours = total


def setup_review(task, assignee, started_days_ago, review_days_ago, log_entries):
    setup_in_progress(task, assignee, started_days_ago, log_entries)
    task.status = TaskStatus.REVIEW
    log(task, assignee, "status_change", "Moved to Review",
        days_ago=review_days_ago, hour=17)


def setup_done(task, assignee, approver, started_days_ago, review_days_ago, done_days_ago, log_entries):
    setup_review(task, assignee, started_days_ago, review_days_ago, log_entries)
    task.status = TaskStatus.DONE
    log(task, approver, "approve", "Approved and marked as Done",
        days_ago=done_days_ago, hour=10)


# ── Users ──────────────────────────────────────────────────────────────────────
alice   = get_or_create_user("alice@taskforge.dev",   "Alice Owner")
bob     = get_or_create_user("bob@taskforge.dev",     "Bob Lead")
charlie = get_or_create_user("charlie@taskforge.dev", "Charlie Dev")
diana   = get_or_create_user("diana@taskforge.dev",   "Diana Dev")
eve     = get_or_create_user("eve@taskforge.dev",     "Eve Owner")
frank   = get_or_create_user("frank@taskforge.dev",   "Frank Lead")
grace   = get_or_create_user("grace@taskforge.dev",   "Grace Dev")

# ── Teams ─────────────────────────────────────────────────────────────────────
team1 = get_or_create_team("Frontend Squad")
add_member(team1, alice,   TeamRole.OWNER)
add_member(team1, bob,     TeamRole.LEAD)
add_member(team1, charlie, TeamRole.DEVELOPER)
add_member(team1, diana,   TeamRole.DEVELOPER)

team2 = get_or_create_team("Backend Core")
add_member(team2, eve,   TeamRole.OWNER)
add_member(team2, frank, TeamRole.LEAD)
add_member(team2, grace, TeamRole.DEVELOPER)
add_member(team2, bob,   TeamRole.DEVELOPER)
db.flush()

# ═══════════════════════════════════════════════════════════════════
# FRONTEND SQUAD — Design System
# ═══════════════════════════════════════════════════════════════════
ds = upsert_project(team1, alice, "Design System",
                    "Shared component library and Storybook-based style guide")

t = make_task(ds, bob, "Set up Storybook", assignee=bob,
              estimated=4, priority=TaskPriority.HIGH,
              deadline_days=-12, created_days_ago=20)
if t:
    log(t, bob, "claim", "Claimed the task", days_ago=19, hour=9)
    setup_done(t, bob, alice, 19, 18, 17, [
        (2.0, "Installed Storybook, configured webpack for Angular", 19),
        (1.5, "Added initial stories for typography tokens", 18),
        (0.5, "Fixed HMR issues and wrote README", 18),
    ])

t = make_task(ds, bob, "Token palette — colours and typography", assignee=charlie,
              estimated=6, priority=TaskPriority.HIGH,
              deadline_days=-8, created_days_ago=18)
if t:
    log(t, charlie, "claim", "Claimed the task", days_ago=17, hour=9)
    setup_done(t, charlie, alice, 17, 15, 14, [
        (2.5, "Extracted all colour variables from Figma, mapped to CSS custom props", 17),
        (2.0, "Typography scale: heading H1–H6, body variants defined", 16),
        (1.0, "Reviewed with designer, tweaked contrast ratios for WCAG AA", 15),
    ])

t = make_task(ds, bob, "Button component", assignee=charlie,
              estimated=8, priority=TaskPriority.MEDIUM,
              deadline_days=3, created_days_ago=10,
              description="Primary, secondary, ghost, destructive variants. Must include Storybook story.")
if t:
    log(t, charlie, "claim", "Claimed the task", days_ago=9, hour=9)
    setup_in_progress(t, charlie, 9, [
        (3.0, "Scaffolded ButtonComponent with all variants and size props", 9),
        (2.0, "Added disabled, loading states and keyboard navigation", 8),
    ])

t = make_task(ds, bob, "Input / Textfield component", assignee=diana,
              estimated=10, priority=TaskPriority.MEDIUM,
              deadline_days=5, created_days_ago=8,
              description="Floating label, error state, prefix/suffix slots.")
if t:
    log(t, diana, "claim", "Claimed the task", days_ago=7, hour=10)
    setup_in_progress(t, diana, 7, [
        (2.0, "Base input wrapper and floating label CSS implemented", 7),
        (2.0, "Added validation error display and helper text slot", 6),
    ])

make_task(ds, bob, "Modal & Drawer component",
          estimated=8, priority=TaskPriority.LOW,
          deadline_days=14, created_days_ago=5,
          description="Backdrop, focus-trap, ESC-close, accessible role=dialog.")

make_task(ds, bob, "Write Storybook docs for all components",
          estimated=5, priority=TaskPriority.LOW,
          deadline_days=20, created_days_ago=5,
          description="Each component needs args table, usage example and design rationale.")

# ═══════════════════════════════════════════════════════════════════
# FRONTEND SQUAD — Dashboard v2
# ═══════════════════════════════════════════════════════════════════
dash = upsert_project(team1, alice, "Dashboard v2",
                      "Full redesign of the main analytics dashboard")

t = make_task(dash, bob, "UX audit of current dashboard", assignee=bob,
              estimated=3, priority=TaskPriority.HIGH,
              deadline_days=-15, created_days_ago=25)
if t:
    log(t, bob, "claim", "Claimed the task", days_ago=24, hour=9)
    setup_done(t, bob, alice, 24, 23, 22, [
        (1.5, "Recorded user sessions, identified 7 pain points", 24),
        (1.0, "Comparative analysis with competitor dashboards", 23),
        (0.5, "Wrote audit report with recommendations", 23),
    ])

t = make_task(dash, bob, "Wireframes — overview page", assignee=bob,
              estimated=4, priority=TaskPriority.HIGH,
              deadline_days=-10, created_days_ago=22)
if t:
    log(t, bob, "claim", "Claimed the task", days_ago=21, hour=9)
    setup_done(t, bob, alice, 21, 19, 18, [
        (2.0, "Low-fi wireframes for 3 dashboard layouts, shared in Figma", 21),
        (1.5, "Incorporated feedback: moved KPI cards to top strip", 20),
        (0.5, "Final hi-fi mockup approved by stakeholder", 19),
    ])

t = make_task(dash, bob, "Implement chart components", assignee=charlie,
              estimated=12, priority=TaskPriority.CRITICAL,
              deadline_days=-1, created_days_ago=14,
              description="Line, bar, pie charts using Recharts. Unit tests for data transform helpers required.")
if t:
    log(t, charlie, "claim", "Claimed the task", days_ago=13, hour=9)
    setup_review(t, charlie, 13, 1, [
        (3.0, "Integrated Recharts, base LineChart with mock data", 13),
        (2.5, "BarChart and PieChart done, added responsive container", 12),
        (3.0, "Data transform helpers: normalization, date bucketing", 11),
        (2.0, "Unit tests for transforms — 18 tests, all passing", 10),
        (1.5, "Fixed tooltip formatting, axis labels, dark mode colours", 9),
    ])

t = make_task(dash, bob, "Responsive layout — tablet breakpoint", assignee=diana,
              estimated=6, priority=TaskPriority.MEDIUM,
              deadline_days=4, created_days_ago=10)
if t:
    log(t, diana, "claim", "Claimed the task", days_ago=9, hour=10)
    setup_in_progress(t, diana, 9, [
        (2.0, "Grid breakpoints defined, sidebar collapses at 768px", 9),
        (1.5, "KPI strip reflows to 2-col on tablet", 8),
    ])

make_task(dash, bob, "Filters sidebar",
          estimated=5, priority=TaskPriority.MEDIUM,
          deadline_days=8, created_days_ago=5,
          description="Date range picker, multi-select for team/project, debounced search.")

make_task(dash, bob, "Performance audit (Lighthouse)",
          estimated=3, priority=TaskPriority.LOW,
          deadline_days=15, created_days_ago=5)

t = make_task(dash, bob, "Fix date-picker timezone bug", assignee=charlie,
              estimated=2, priority=TaskPriority.CRITICAL,
              deadline_days=-3, created_days_ago=7,
              description="Dates shift -1 day for users east of UTC. moment.utc() missing in 3 places.")
if t:
    log(t, charlie, "claim", "Claimed the task", days_ago=6, hour=9)
    t.started_at = dt(6, hour=9)
    t.status = TaskStatus.IN_PROGRESS
    log(t, charlie, "status_change", "Moved to In Progress", days_ago=6, hour=9)
    log(t, charlie, "log",
        "Reproduced: system TZ UTC+5 shifts date -1 day. moment.utc() missing in DatePickerService",
        hours=1.0, days_ago=6, hour=14)
    log(t, charlie, "log",
        "Fixed: replaced moment() with moment.utc() in 3 places, added regression tests UTC±12",
        hours=1.0, days_ago=5, hour=11)
    t.logged_hours = 2.0
    log(t, charlie, "status_change", "Moved to Review", days_ago=5, hour=12)
    t.status = TaskStatus.REVIEW
    log(t, alice, "approve",
        "Approved — tests pass, verified in prod with VPN on UTC+9",
        days_ago=5, hour=15)
    t.status = TaskStatus.DONE

# ═══════════════════════════════════════════════════════════════════
# BACKEND CORE — API v2
# ═══════════════════════════════════════════════════════════════════
api = upsert_project(team2, eve, "API v2",
                     "REST API rewrite: OpenAPI spec, improved auth, cursor pagination")

t = make_task(api, frank, "Design endpoint schema", assignee=frank,
              estimated=5, priority=TaskPriority.HIGH,
              deadline_days=-18, created_days_ago=28)
if t:
    log(t, frank, "claim", "Claimed the task", days_ago=27, hour=9)
    setup_done(t, frank, eve, 27, 25, 24, [
        (2.0, "Drafted OpenAPI spec for /auth, /teams, /projects, /tasks endpoints", 27),
        (2.0, "Added pagination contracts, error schemas, auth flows", 26),
        (1.5, "Feedback: versioning prefix, snake_case→camelCase in responses", 25),
    ])

t = make_task(api, frank, "JWT refresh token flow", assignee=frank,
              estimated=4, priority=TaskPriority.HIGH,
              deadline_days=-12, created_days_ago=22)
if t:
    log(t, frank, "claim", "Claimed the task", days_ago=21, hour=9)
    setup_done(t, frank, eve, 21, 19, 18, [
        (2.0, "Refresh token rotation, 7d TTL, stored hashed in DB", 21),
        (1.5, "Added /auth/refresh endpoint, revocation on logout", 20),
        (1.0, "Integration tests: rotation, concurrent requests, revoked token rejection", 19),
    ])

t = make_task(api, frank, "Rate limiting middleware", assignee=grace,
              estimated=6, priority=TaskPriority.HIGH,
              deadline_days=3, created_days_ago=10,
              description="Sliding window 100 req/min per IP. Redis-backed for multi-instance support.")
if t:
    log(t, grace, "claim", "Claimed the task", days_ago=9, hour=9)
    setup_in_progress(t, grace, 9, [
        (2.0, "SlowAPI integration, fixed-window limiter working in dev", 9),
        (1.5, "Switched to Redis-backed sliding window, handles burst correctly", 8),
    ])

t = make_task(api, frank, "OpenAPI / Swagger docs", assignee=bob,
              estimated=4, priority=TaskPriority.MEDIUM,
              deadline_days=5, created_days_ago=8)
if t:
    log(t, bob, "claim", "Claimed the task", days_ago=7, hour=10)
    setup_in_progress(t, bob, 7, [
        (1.0, "Added docstrings to all auth endpoints, Swagger UI at /docs", 7),
        (1.5, "Tagged all routes, added example request/response bodies", 6),
    ])

make_task(api, frank, "Pagination — cursor-based",
          estimated=5, priority=TaskPriority.MEDIUM,
          deadline_days=10, created_days_ago=6,
          description="Replace offset pagination on /projects and /tasks with cursor.")

make_task(api, frank, "Integration test suite",
          estimated=8, priority=TaskPriority.HIGH,
          deadline_days=12, created_days_ago=6,
          description="Cover all auth + team + project + task endpoints with pytest + httpx.")

t = make_task(api, frank, "Fix N+1 query on /teams endpoint", assignee=grace,
              estimated=2, priority=TaskPriority.CRITICAL,
              deadline_days=-2, created_days_ago=8,
              description="SQLAlchemy lazy-loads members per team. ~200ms overhead in prod. Use joinedload.")
if t:
    log(t, grace, "claim", "Claimed the task", days_ago=7, hour=9)
    t.started_at = dt(7, hour=9)
    t.status = TaskStatus.IN_PROGRESS
    log(t, grace, "status_change", "Moved to In Progress", days_ago=7, hour=9)
    log(t, grace, "log",
        "Profiled with py-spy: N+1 on TeamMember. Added joinedload(Team.members) in list_teams",
        hours=1.0, days_ago=7, hour=14)
    log(t, grace, "log",
        "Response time 340ms → 18ms for 12 teams. Test asserting query count ≤ 2 added",
        hours=1.5, days_ago=6, hour=10)
    t.logged_hours = 2.5
    log(t, grace, "status_change", "Moved to Review", days_ago=6, hour=11)
    t.status = TaskStatus.REVIEW
    log(t, frank, "approve",
        "Approved — query count confirmed, perf test passing in CI",
        days_ago=5, hour=14)
    t.status = TaskStatus.DONE

# ═══════════════════════════════════════════════════════════════════
# BACKEND CORE — Infrastructure
# ═══════════════════════════════════════════════════════════════════
infra = upsert_project(team2, eve, "Infrastructure",
                       "Docker setup, CI/CD pipelines, monitoring and alerting")

t = make_task(infra, frank, "Dockerise all services", assignee=frank,
              estimated=6, priority=TaskPriority.HIGH,
              deadline_days=-25, created_days_ago=35)
if t:
    log(t, frank, "claim", "Claimed the task", days_ago=34, hour=9)
    setup_done(t, frank, eve, 34, 32, 31, [
        (2.5, "Multistage Dockerfile for backend: build + slim runtime image (87MB)", 34),
        (2.0, "docker-compose.yml with backend, nginx, postgres services", 33),
        (1.5, "Health checks, restart policies, volume mounts for persistent data", 32),
    ])

t = make_task(infra, frank, "GitHub Actions — lint + test + deploy pipeline", assignee=bob,
              estimated=4, priority=TaskPriority.HIGH,
              deadline_days=-14, created_days_ago=22)
if t:
    log(t, bob, "claim", "Claimed the task", days_ago=21, hour=9)
    setup_done(t, bob, eve, 21, 19, 18, [
        (1.5, "Lint and build jobs: ESLint, Angular production build", 21),
        (1.0, "Test job: backend pytest, frontend unit tests", 20),
        (1.0, "Deploy job: rsync to VPS, systemctl restart, health check", 19),
    ])

t = make_task(infra, frank, "Staging deployment to Fly.io", assignee=frank,
              estimated=5, priority=TaskPriority.HIGH,
              deadline_days=6, created_days_ago=12,
              description="Staging env on Fly.io. Auto-deploy on push to develop branch.")
if t:
    log(t, frank, "claim", "Claimed the task", days_ago=11, hour=9)
    t.started_at = dt(11, hour=9)
    t.status = TaskStatus.IN_PROGRESS
    log(t, frank, "status_change", "Moved to In Progress", days_ago=11, hour=9)
    log(t, frank, "log",
        "fly.toml configured, app created. First deploy succeeded but DB not persisting between restarts",
        hours=2.0, days_ago=11, hour=16)
    log(t, frank, "status_change", "Moved to Review", days_ago=10, hour=12)
    t.status = TaskStatus.REVIEW
    log(t, eve, "reject",
        "Need persistent volume for SQLite. Also: staging must use separate DB from prod. Please fix both.",
        days_ago=9, hour=14)
    t.status = TaskStatus.IN_PROGRESS
    log(t, frank, "status_change", "Moved back to In Progress after rejection", days_ago=9, hour=15)
    log(t, frank, "log",
        "Attached Fly.io volume for SQLite data dir. Separate staging DB via env vars",
        hours=2.0, days_ago=7, hour=15)
    t.logged_hours = 4.0

make_task(infra, frank, "Sentry error tracking setup",
          estimated=3, priority=TaskPriority.MEDIUM,
          deadline_days=9, created_days_ago=5,
          description="DSN via env var, source maps for frontend, release tracking.")

make_task(infra, frank, "Uptime monitoring — Grafana dashboard",
          estimated=4, priority=TaskPriority.LOW,
          deadline_days=18, created_days_ago=5,
          description="Track API response times, error rates, CPU/memory per service.")

db.commit()
print("Seed complete!")
print(f"  Frontend Squad: {db.query(Task).join(Project).filter(Project.team_id == team1.id).count()} tasks")
print(f"  Backend Core:   {db.query(Task).join(Project).filter(Project.team_id == team2.id).count()} tasks")
print(f"  Total logs:     {db.query(TaskLog).count()}")
db.close()
