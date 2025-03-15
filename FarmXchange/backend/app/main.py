from fastapi import FastAPI
from .routers import items
from .database import engine
from . import models

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(items.router)