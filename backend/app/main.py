from fastapi import FastAPI
from app.database import Base, engine
from app.routes import auth, products  # ✅ Absolute import

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

# Root endpoint to prevent 404 errors
@app.get("/")
def read_root():
    return {"message": "Welcome to the E-commerce API! Check /docs for available endpoints."}

# Include authentication and product routes
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(products.router, prefix="/products", tags=["products"])
