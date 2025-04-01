from fastapi import FastAPI
from app.routes import auth, products  # Absolute import
from app.database import Base, engine  # Absolute import
from backend.app.routes import auth, products

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Include routes
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(products.router, prefix="/products", tags=["products"])
