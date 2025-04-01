from fastapi import APIRouter, Depends
from fastapi_users import FastAPIUsers
from fastapi_users.authentication import AuthenticationBackend, BearerTransport, JWTStrategy
from fastapi_users.db import SQLAlchemyUserDatabase
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import sessionmaker
from ..models import User
from ..database import engine, Base, SessionLocal

SECRET = "SECRET_KEY"

# Define the transport (how tokens are sent)
bearer_transport = BearerTransport(tokenUrl="auth/jwt/login")

# Define the JWT strategy
def get_jwt_strategy() -> JWTStrategy:
    return JWTStrategy(secret=SECRET, lifetime_seconds=3600)

# Wrap the JWT strategy in an AuthenticationBackend
auth_backend = AuthenticationBackend(
    name="jwt",
    transport=bearer_transport,
    get_strategy=get_jwt_strategy,
)

# Dependency to get the database session
def get_async_session() -> AsyncSession:
    async_session = sessionmaker(
        engine, class_=AsyncSession, expire_on_commit=False
    )
    async with async_session() as session:
        yield session

# Dependency to get the user database
async def get_user_db(session: AsyncSession = Depends(get_async_session)):
    yield SQLAlchemyUserDatabase(session, User)

# Initialize FastAPI Users
fastapi_users = FastAPIUsers[User, int](
    get_user_db,
    [auth_backend],  # Pass the authentication backend here
)

# Create the auth router
router = APIRouter()
router.include_router(fastapi_users.get_auth_router(auth_backend))
router.include_router(fastapi_users.get_register_router())