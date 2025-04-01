from fastapi import FastAPI
from .routes import auth, products  # Relative import# Absolute import (correct if in backend/app/)
from app.database import Base, engine  # Absolute import (correct if in backend/app/)

# Create database tables
Base.metadata.create_all(bind=engine)

# Initialize FastAPI app
app = FastAPI(
    title="E-commerce API",
    description="API for managing products and user authentication",
    version="1.0.0",
    contact={
        "name": "Your Name",
        "email": "your@email.com",
        "url": "https://your-website.com"
    },
    license={
        "name": "MIT License",
        "url": "https://opensource.org/licenses/MIT"
    }
)

# Include routes
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(products.router, prefix="/products", tags=["products"])
