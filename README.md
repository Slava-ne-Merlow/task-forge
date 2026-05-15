# TaskForge — Система управления задачами для команды

Веб-приложение для распределения задач внутри команды с отслеживанием времени и прогресса.

**Деплой:** http://31.177.82.157

---

## Стек

| Слой | Технология |
|---|---|
| Frontend | Angular 21, TaigaUI 5, NgRx Signal Store |
| Backend | Python 3.14, FastAPI, SQLAlchemy, SQLite |
| Auth | JWT (Bearer), localStorage |
| CI/CD | GitHub Actions → VPS (Ubuntu 26.04), nginx |

---

## Функциональность

- **Авторизация** — регистрация, вход, JWT-сессия, инвайты по ссылке
- **Команды** — создание, приглашение участников, управление ролями (Owner / Lead / Developer)
- **Проекты** — Owner создаёт проекты в рамках команды
- **Канбан-доска** — 4 статуса: Todo → In Progress → Review → Done
- **Задачи** — исполнитель, дедлайн, приоритет, оценка часов, лог работы
- **Доска** — поиск по названию, фильтр по приоритету и исполнителю, сортировка
- **История задачи** — все события: claim, work log, status change, approve/reject
- **Мои задачи** — личный дашборд со статистикой, поиском и сортировкой
- **Мои проекты** — все проекты пользователя одним списком

### Роли и права

| Действие | Owner | Lead | Developer |
|---|:---:|:---:|:---:|
| Создание проекта | ✅ | ❌ | ❌ |
| Приглашение участников | ✅ | ✅ | ❌ |
| Создание задач | ✅ | ✅ | ❌ |
| Назначение исполнителя | ✅ | ✅ | ❌ |
| Взять задачу на себя | ✅ | ✅ | ✅ |
| Изменение статуса своей задачи | ✅ | ✅ | ✅ |
| Лог работы | ✅ | ✅ | ✅ |
| Апрув/отклонение Review | ✅ | ✅ | ❌ |
| Управление ролями | ✅ | ❌ | ❌ |

---

## Запуск локально

### Требования
- Python 3.11+
- Node.js 22+
- npm 10+

### Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload       # http://localhost:8000
```

Тестовые данные:
```bash
python3 prod_seed.py
```

### Frontend

```bash
cd frontend
npm install
ng serve                        # http://localhost:4200
```

### Тестовые аккаунты (пароль у всех: `password123`)

| Email | Роль |
|---|---|
| alice@taskforge.dev | Owner — Frontend Squad |
| bob@taskforge.dev | Lead — Frontend Squad, Dev — Backend Core |
| charlie@taskforge.dev | Developer — Frontend Squad |
| diana@taskforge.dev | Developer — Frontend Squad |
| eve@taskforge.dev | Owner — Backend Core |
| frank@taskforge.dev | Lead — Backend Core |
| grace@taskforge.dev | Developer — Backend Core |

---

## Структура проекта

```
TaskForge/
├── backend/               # FastAPI-приложение
│   ├── main.py
│   ├── models.py          # SQLAlchemy модели
│   ├── schemas.py         # Pydantic схемы (camelCase)
│   ├── auth_utils.py      # JWT, bcrypt
│   ├── dependencies.py    # get_current_user
│   └── routers/
│       ├── auth.py
│       ├── teams.py
│       ├── invitations.py
│       └── projects.py    # проекты + задачи + логи
│
└── frontend/              # Angular 21-приложение
    └── src/app/
        ├── core/
        │   ├── auth/      # AuthStore, guard, interceptor, TokenService
        │   ├── api/       # ApiService
        │   └── models/    # интерфейсы TypeScript
        ├── features/
        │   ├── auth/      # login, register, invite-accept
        │   ├── teams/     # team-list, team-settings, TeamsStore
        │   ├── projects/  # project-list, project-board, task-detail, ProjectsStore
        │   ├── dashboard/ # task-dashboard (мои задачи)
        │   └── my-projects/
        └── shared/
            └── components/
                ├── shell/      # навигация, хедер
                └── task-card/  # переиспользуемая карточка задачи
```

---

## API

Документация: http://31.177.82.157/api/docs

Основные эндпоинты:

```
POST /auth/register          Регистрация
POST /auth/login             Вход
GET  /auth/me                Текущий пользователь

GET  /teams                  Список команд
POST /teams                  Создать команду
GET  /teams/{id}/members     Участники команды
POST /teams/{id}/invitations Создать инвайт

GET  /teams/{id}/projects    Проекты команды
POST /teams/{id}/projects    Создать проект
GET  /projects/{id}/tasks    Задачи проекта
POST /projects/{id}/tasks    Создать задачу

PATCH /tasks/{id}            Обновить задачу (статус, поля)
POST  /tasks/{id}/claim      Взять задачу на себя
POST  /tasks/{id}/logs       Залогировать работу
POST  /tasks/{id}/approve    Одобрить (Lead/Owner)
POST  /tasks/{id}/reject     Отклонить с комментарием

GET /me/tasks                Мои задачи
GET /me/projects             Все мои проекты
```

---

## CI/CD

При пуше в `main`:
1. Сборка Angular (production build)
2. Деплой backend через rsync (без БД и кэша)
3. Деплой frontend (статика в nginx)
4. Перезапуск systemd-сервиса uvicorn
5. Health-check `GET /api/health`
