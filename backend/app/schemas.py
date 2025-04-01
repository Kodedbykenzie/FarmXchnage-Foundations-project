from pydantic import BaseModel, EmailStr

class UserRead(BaseModel):
    id: int
    email: EmailStr

class UserCreate(BaseModel):
    email: EmailStr
    password: str

class Product(BaseModel):
    id: int
    name: str
    description: str
    price: float

class ProductCreate(BaseModel):
    name: str
    description: str
    price: float
