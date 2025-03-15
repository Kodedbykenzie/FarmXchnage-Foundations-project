# FarmXchange Backend

## Overview
FarmXchange is an e-commerce platform that connects farmers directly with customers, enabling them to sell agricultural products without intermediaries. This backend service is built using FastAPI and provides the necessary APIs for the frontend application.

## Project Structure
The backend is organized as follows:

```
backend/
├── app/
│   ├── __init__.py          # Initializes the app package
│   ├── main.py              # Entry point of the FastAPI application
│   ├── models/              # Contains data models for the application
│   │   └── __init__.py
│   ├── routers/             # Defines API routes for the application
│   │   └── __init__.py
│   ├── schemas/             # Contains Pydantic schemas for data validation
│   │   └── __init__.py
│   └── database.py          # Database connection logic
├── requirements.txt         # Lists dependencies for the backend
└── README.md                # Documentation for the backend
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

## Usage
- The API endpoints can be accessed at `http://127.0.0.1:8000/docs` for interactive documentation provided by FastAPI.
- You can use the endpoints to manage products, orders, and user accounts.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.