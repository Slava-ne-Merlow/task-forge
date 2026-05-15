from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session, joinedload

from database import get_db
from dependencies import get_current_user
from models import Project, Task, TaskLog, TaskPriority, TaskStatus, Team, TeamMember, TeamRole, User
from schemas import (
    AssigneeOut, ProjectCreate, ProjectOut,
    TaskCreate, TaskDetailOut, TaskLogCreate, TaskLogOut, TaskOut,
    TaskRejectRequest, TaskUpdate,
)

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
    t = db.query(Task).options(joinedload(Task.assignee)).filter(Task.id == task_id).first()
    if not t:
        raise HTTPException(status_code=404, detail="Task not found")
    return t


def _assignee_out(user: User | None) -> AssigneeOut | None:
    if not user:
        return None
    return AssigneeOut(id=user.id, name=user.name, email=user.email)


def _log_out(log: TaskLog) -> TaskLogOut:
    return TaskLogOut(
        id=log.id,
        user=AssigneeOut(id=log.user.id, name=log.user.name, email=log.user.email),
        action=log.action,
        hours=log.hours,
        description=log.description,
        created_at=log.created_at,
    )


def _task_out(task: Task) -> TaskOut:
    return TaskOut(
        id=task.id,
        project_id=task.project_id,
        title=task.title,
        description=task.description,
        status=task.status,
        priority=task.priority,
        assignee=_assignee_out(task.assignee),
        deadline=task.deadline,
        estimated_hours=task.estimated_hours,
        logged_hours=task.logged_hours,
        started_at=task.started_at,
        created_at=task.created_at,
    )


def _task_detail_out(task: Task) -> TaskDetailOut:
    logs = [_log_out(log) for log in task.logs]
    return TaskDetailOut(
        id=task.id,
        project_id=task.project_id,
        title=task.title,
        description=task.description,
        status=task.status,
        priority=task.priority,
        assignee=_assignee_out(task.assignee),
        deadline=task.deadline,
        estimated_hours=task.estimated_hours,
        logged_hours=task.logged_hours,
        started_at=task.started_at,
        created_at=task.created_at,
        logs=logs,
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


def _utcnow():
    from datetime import datetime, timezone
    return datetime.now(timezone.utc)


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
    project = Project(name=body.name, description=body.description, team_id=team_id, created_by_id=current_user.id)
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


@router.get("/me/projects", response_model=list[ProjectOut])
def my_projects(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """All projects in all teams the current user belongs to."""
    memberships = db.query(TeamMember).filter(TeamMember.user_id == current_user.id).all()
    team_ids = [m.team_id for m in memberships]
    projects = db.query(Project).filter(Project.team_id.in_(team_ids)).all()
    return [_project_out(p, db) for p in projects]


# ── Task endpoints ────────────────────────────────────────────────────────────

@router.get("/projects/{project_id}/tasks", response_model=list[TaskOut])
def list_tasks(
    project_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    project = _require_project(db, project_id)
    _require_team_member(db, project.team_id, current_user.id)
    tasks = db.query(Task).options(joinedload(Task.assignee)).filter(Task.project_id == project_id).all()
    return [_task_out(t) for t in tasks]


@router.get("/tasks/{task_id}", response_model=TaskDetailOut)
def get_task_detail(
    task_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    task = db.query(Task).options(
        joinedload(Task.assignee),
        joinedload(Task.logs).joinedload(TaskLog.user),
    ).filter(Task.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    project = _require_project(db, task.project_id)
    _require_team_member(db, project.team_id, current_user.id)
    return _task_detail_out(task)


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
        if not db.query(TeamMember).filter_by(team_id=project.team_id, user_id=body.assignee_id).first():
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


@router.post("/tasks/{task_id}/claim", response_model=TaskOut)
def claim_task(
    task_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Any team member can claim an unassigned task."""
    task = _require_task(db, task_id)
    project = _require_project(db, task.project_id)
    _require_team_member(db, project.team_id, current_user.id)
    if task.assignee_id:
        raise HTTPException(status_code=400, detail="Task is already assigned")
    task.assignee_id = current_user.id
    db.add(TaskLog(task_id=task.id, user_id=current_user.id, action="claim",
                   description=f"Claimed the task"))
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
        old_status = task.status
        new_status = body.status

        # Review → Done is only allowed via /approve endpoint
        if old_status == TaskStatus.REVIEW and new_status == TaskStatus.DONE:
            raise HTTPException(
                status_code=403,
                detail="Tasks in Review must be approved by an Owner or Lead"
            )

        # Developer can only change status of tasks assigned to them
        if member.role == TeamRole.DEVELOPER:
            if task.assignee_id != current_user.id:
                raise HTTPException(
                    status_code=403,
                    detail="Developers can only move tasks assigned to them"
                )

        if new_status != old_status:
            if new_status == TaskStatus.IN_PROGRESS and not task.started_at:
                task.started_at = _utcnow()
                db.add(TaskLog(task_id=task.id, user_id=current_user.id, action="status_change",
                               description="Moved to In Progress"))
            else:
                label = new_status.replace("_", " ").title()
                db.add(TaskLog(task_id=task.id, user_id=current_user.id, action="status_change",
                               description=f"Moved to {label}"))
            task.status = new_status

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
            task.assignee_id = body.assignee_id if body.assignee_id else None
        if body.deadline is not None:
            task.deadline = body.deadline
        if body.estimated_hours is not None:
            task.estimated_hours = body.estimated_hours

    db.commit()
    db.refresh(task)
    return _task_out(task)


@router.post("/tasks/{task_id}/logs", response_model=TaskLogOut, status_code=status.HTTP_201_CREATED)
def add_task_log(
    task_id: str,
    body: TaskLogCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Log work on a task (assignee or team member)."""
    task = _require_task(db, task_id)
    project = _require_project(db, task.project_id)
    _require_team_member(db, project.team_id, current_user.id)
    if task.assignee_id and task.assignee_id != current_user.id:
        raise HTTPException(status_code=403, detail="Only the assignee can log work")
    if task.status not in (TaskStatus.IN_PROGRESS, TaskStatus.REVIEW):
        raise HTTPException(status_code=400, detail="Can only log work on in-progress or review tasks")

    log = TaskLog(
        task_id=task.id,
        user_id=current_user.id,
        action="log",
        hours=body.hours,
        description=body.description,
    )
    db.add(log)
    if body.hours:
        task.logged_hours = (task.logged_hours or 0) + body.hours
    db.commit()
    db.refresh(log)
    return _log_out(log)


@router.post("/tasks/{task_id}/approve", response_model=TaskOut)
def approve_task(
    task_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Lead or Owner approves a REVIEW task → DONE."""
    task = _require_task(db, task_id)
    project = _require_project(db, task.project_id)
    member = _require_team_member(db, project.team_id, current_user.id)
    if member.role not in (TeamRole.OWNER, TeamRole.LEAD):
        raise HTTPException(status_code=403, detail="Only Owner or Lead can approve tasks")
    if task.status != TaskStatus.REVIEW:
        raise HTTPException(status_code=400, detail="Task must be in Review status to approve")
    task.status = TaskStatus.DONE
    db.add(TaskLog(task_id=task.id, user_id=current_user.id, action="approve",
                   description="Approved and marked as Done"))
    db.commit()
    db.refresh(task)
    return _task_out(task)


@router.post("/tasks/{task_id}/reject", response_model=TaskOut)
def reject_task(
    task_id: str,
    body: TaskRejectRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Lead or Owner rejects a REVIEW task → back to IN_PROGRESS."""
    task = _require_task(db, task_id)
    project = _require_project(db, task.project_id)
    member = _require_team_member(db, project.team_id, current_user.id)
    if member.role not in (TeamRole.OWNER, TeamRole.LEAD):
        raise HTTPException(status_code=403, detail="Only Owner or Lead can reject tasks")
    if task.status != TaskStatus.REVIEW:
        raise HTTPException(status_code=400, detail="Task must be in Review status to reject")
    task.status = TaskStatus.IN_PROGRESS
    db.add(TaskLog(task_id=task.id, user_id=current_user.id, action="reject",
                   description=body.comment))
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
    tasks = db.query(Task).options(joinedload(Task.assignee)).filter(Task.assignee_id == current_user.id).all()
    return [_task_out(t) for t in tasks]
