from sqlalchemy import Column, Integer, String, Float
from database import Base

class Product(Base):
    __tablename__ = 'products'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    price = Column(Float)
    quantity = Column(Integer)
    farmer_id = Column(Integer)  # Assuming a foreign key to a Farmer model

class Farmer(Base):
    __tablename__ = 'farmers'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    location = Column(String)
    contact_info = Column(String)  # Could be a phone number or email

class Order(Base):
    __tablename__ = 'orders'

    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer)  # Assuming a foreign key to a Product model
    quantity = Column(Integer)
    customer_id = Column(Integer)  # Assuming a foreign key to a Customer model

class Customer(Base):
    __tablename__ = 'customers'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    phone = Column(String)  # Optional contact method