# FarmXchange Backend Documentation

## Overview
FarmXchange is an e-commerce platform designed to connect farmers directly with customers, allowing them to sell agricultural products without intermediaries. This backend service is built using FastAPI and SQLAlchemy, providing a robust API for managing agricultural products.

## Project Structure
The backend is organized into the following structure:

```
backend/
├── app/
│   ├── __init__.py          # Initializes the app package
│   ├── main.py              # Entry point of the FastAPI application
│   ├── models.py            # Database models using SQLAlchemy
│   ├── schemas.py           # Pydantic models for data validation
│   ├── crud.py              # CRUD operations for database interactions
│   ├── database.py          # Database connection and session management
│   └── routers/
│       └── items.py         # API routes related to items
├── requirements.txt          # List of dependencies
└── README.md                 # Documentation for the backend
```

## Setup Instructions

1. **Clone the Repository**
   ```
   git clone https://github.com/yourusername/FarmXchange.git
   cd FarmXchange/backend
   ```

2. **Create a Virtual Environment**
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**
   ```
   pip install -r requirements.txt
   ```

4. **Run the Application**
   ```
   uvicorn app.main:app --reload
   ```

   The application will be running at `http://127.0.0.1:8000`.

## API Usage

### Endpoints

- **GET /items/**: Retrieve a list of all items.
- **POST /items/**: Create a new item.
- **GET /items/{item_id}**: Retrieve a specific item by ID.
- **PUT /items/{item_id}**: Update an existing item by ID.
- **DELETE /items/{item_id}**: Delete an item by ID.

### Example Request

To create a new item, send a POST request to `/items/` with the following JSON body:

```json
{
  "name": "Tomatoes",
  "price": 2.5,
  "quantity": 100
}
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.