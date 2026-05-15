from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine
from routers import auth, invitations, projects, teams

Base.metadata.create_all(bind=engine)

app = FastAPI(title="TaskForge API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:4200",
        "http://31.177.82.157",
        "http://31.177.82.157:80",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(teams.router)
app.include_router(invitations.router)
app.include_router(projects.router)


@app.get("/health")
def health():
    return {"status": "ok"}
