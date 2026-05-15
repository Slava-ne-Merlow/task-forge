from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from database import get_db
from dependencies import get_current_user
from models import Project, Task, TaskPriority, TaskStatus, Team, TeamMember, TeamRole, User
from schemas import AssigneeOut, ProjectCreate, ProjectOut, TaskCreate, TaskOut, TaskUpdate

router = APIRouter(tags=["projects"])


# ── Helpers ───────────────────────────────────────────────────────────────────

def _require_team_member(db: Session, team_id: str, user_id: str) -> TeamMember:
    m = db.query(TeamMember).filter(
        TeamMember.team_id == team_id, TeamMember.user_id == user_id
    ).first()
    if not m:
        raise HTTPException(status_code=403, detail="Not a team member")
    return m


def _require_project(db: Session, project_id: str) -> Project:
    p = db.query(Project).filter(Project.id == project_id).first()
    if not p:
        raise HTTPException(status_code=404, detail="Project not found")
    return p


def _require_task(db: Session, task_id: str) -> Task:
    t = db.query(Task).filter(Task.id == task_id).first()
    if not t:
        raise HTTPException(status_code=404, detail="Task not found")
    return t


def _task_out(task: Task) -> TaskOut:
    assignee = None
    if task.assignee:
        assignee = AssigneeOut(
            id=task.assignee.id,
            name=task.assignee.name,
            email=task.assignee.email,
        )
    return TaskOut(
        id=task.id,
        project_id=task.project_id,
        title=task.title,
        description=task.description,
        status=task.status,
        priority=task.priority,
        assignee=assignee,
        deadline=task.deadline,
        estimated_hours=task.estimated_hours,
        logged_hours=task.logged_hours,
        created_at=task.created_at,
    )


def _project_out(project: Project, db: Session) -> ProjectOut:
    task_count = db.query(Task).filter(Task.project_id == project.id).count()
    return ProjectOut(
        id=project.id,
        name=project.name,
        description=project.description,
        team_id=project.team_id,
        created_at=project.created_at,
        task_count=task_count,
    )


# ── Project endpoints ─────────────────────────────────────────────────────────

@router.get("/teams/{team_id}/projects", response_model=list[ProjectOut])
def list_projects(
    team_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    _require_team_member(db, team_id, current_user.id)
    projects = db.query(Project).filter(Project.team_id == team_id).all()
    return [_project_out(p, db) for p in projects]


@router.post("/teams/{team_id}/projects", response_model=ProjectOut, status_code=status.HTTP_201_CREATED)
def create_project(
    team_id: str,
    body: ProjectCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    team = db.query(Team).filter(Team.id == team_id).first()
    if not team:
        raise HTTPException(status_code=404, detail="Team not found")
    member = _require_team_member(db, team_id, current_user.id)
    if member.role != TeamRole.OWNER:
        raise HTTPException(status_code=403, detail="Only Owner can create projects")

    project = Project(
        name=body.name,
        description=body.description,
        team_id=team_id,
        created_by_id=current_user.id,
    )
    db.add(project)
    db.commit()
    db.refresh(project)
    return _project_out(project, db)


@router.get("/projects/{project_id}", response_model=ProjectOut)
def get_project(
    project_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    project = _require_project(db, project_id)
    _require_team_member(db, project.team_id, current_user.id)
    return _project_out(project, db)


# ── Task endpoints ────────────────────────────────────────────────────────────

@router.get("/projects/{project_id}/tasks", response_model=list[TaskOut])
def list_tasks(
    project_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    project = _require_project(db, project_id)
    _require_team_member(db, project.team_id, current_user.id)
    tasks = db.query(Task).filter(Task.project_id == project_id).all()
    return [_task_out(t) for t in tasks]


@router.post("/projects/{project_id}/tasks", response_model=TaskOut, status_code=status.HTTP_201_CREATED)
def create_task(
    project_id: str,
    body: TaskCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    project = _require_project(db, project_id)
    member = _require_team_member(db, project.team_id, current_user.id)
    if member.role == TeamRole.DEVELOPER:
        raise HTTPException(status_code=403, detail="Only Owner or Lead can create tasks")

    if body.assignee_id:
        assignee_member = db.query(TeamMember).filter(
            TeamMember.team_id == project.team_id,
            TeamMember.user_id == body.assignee_id,
        ).first()
        if not assignee_member:
            raise HTTPException(status_code=400, detail="Assignee is not a team member")

    priority = body.priority if body.priority in [p.value for p in TaskPriority] else TaskPriority.MEDIUM
    task = Task(
        project_id=project_id,
        title=body.title,
        description=body.description,
        assignee_id=body.assignee_id,
        deadline=body.deadline,
        estimated_hours=body.estimated_hours,
        priority=priority,
        created_by_id=current_user.id,
    )
    db.add(task)
    db.commit()
    db.refresh(task)
    return _task_out(task)


@router.patch("/tasks/{task_id}", response_model=TaskOut)
def update_task(
    task_id: str,
    body: TaskUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    task = _require_task(db, task_id)
    project = _require_project(db, task.project_id)
    member = _require_team_member(db, project.team_id, current_user.id)

    can_edit_all = member.role in (TeamRole.OWNER, TeamRole.LEAD)

    if body.status is not None and body.status in [s.value for s in TaskStatus]:
        task.status = body.status
    if body.logged_hours is not None:
        task.logged_hours = body.logged_hours

    if can_edit_all:
        if body.title is not None:
            task.title = body.title
        if body.description is not None:
            task.description = body.description
        if body.priority is not None and body.priority in [p.value for p in TaskPriority]:
            task.priority = body.priority
        if body.assignee_id is not None:
            if body.assignee_id == "":
                task.assignee_id = None
            else:
                assignee_member = db.query(TeamMember).filter(
                    TeamMember.team_id == project.team_id,
                    TeamMember.user_id == body.assignee_id,
                ).first()
                if not assignee_member:
                    raise HTTPException(status_code=400, detail="Assignee is not a team member")
                task.assignee_id = body.assignee_id
        if body.deadline is not None:
            task.deadline = body.deadline
        if body.estimated_hours is not None:
            task.estimated_hours = body.estimated_hours

    db.commit()
    db.refresh(task)
    return _task_out(task)


@router.delete("/tasks/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_task(
    task_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    task = _require_task(db, task_id)
    project = _require_project(db, task.project_id)
    member = _require_team_member(db, project.team_id, current_user.id)
    if member.role == TeamRole.DEVELOPER:
        raise HTTPException(status_code=403, detail="Only Owner or Lead can delete tasks")
    db.delete(task)
    db.commit()


@router.get("/me/tasks", response_model=list[TaskOut])
def my_tasks(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """All tasks assigned to the current user across all teams."""
    tasks = db.query(Task).filter(Task.assignee_id == current_user.id).all()
    return [_task_out(t) for t in tasks]
