from fastapi import FastAPI
from .routers import some_router  # Import your routers here

app = FastAPI()

# Include routers
app.include_router(some_router)

@app.get("/")
def read_root():
    return {"message": "Welcome to FarmXchange API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)