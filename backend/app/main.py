from fastapi import FastAPI
from app.routes import auth, products  # Absolute import (correct if in backend/app/)
from app.database import Base, engine  # Absolute import (correct if in backend/app/)

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Include routes
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(products.router, prefix="/products", tags=["products"])
