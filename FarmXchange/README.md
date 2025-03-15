# FarmXchange

FarmXchange is an e-commerce platform that connects farmers directly with customers, enabling them to sell agricultural products without intermediaries. This project consists of a backend built with FastAPI and a frontend developed using React.

## Project Structure

The project is organized into two main directories: `backend` and `frontend`.

### Backend

The backend is built using FastAPI and SQLAlchemy. It includes the following components:

- **app/**: Contains the main application code.
  - **__init__.py**: Initializes the app package.
  - **main.py**: Entry point of the backend application.
  - **models.py**: Defines the database models.
  - **schemas.py**: Defines Pydantic models for data validation.
  - **crud.py**: Contains CRUD operations for the database.
  - **database.py**: Sets up the database connection.
  - **routers/**: Contains API route definitions.
    - **items.py**: API routes related to products.

- **requirements.txt**: Lists the dependencies required for the backend application.
- **README.md**: Documentation for the backend, including setup instructions and API usage.

### Frontend

The frontend is developed using React. It includes the following components:

- **public/**: Contains static files.
  - **index.html**: Main HTML file for the React application.

- **src/**: Contains the source code for the React application.
  - **App.js**: Main component that sets up routing.
  - **index.js**: Entry point for the React application.
  - **components/**: Contains reusable components.
    - **Header.js**: Header component.
    - **Footer.js**: Footer component.
    - **ProductList.js**: Component to display a list of products.
  - **pages/**: Contains page components.
    - **HomePage.js**: Landing page component.
    - **ProductPage.js**: Component to display product details.
  - **services/**: Contains API call functions.
    - **api.js**: Functions for making API calls to the backend.
  - **styles/**: Contains CSS styles.
    - **App.css**: Styles for the React application.

### Installation and Setup

1. **Backend Setup**:
   - Navigate to the `backend` directory.
   - Install the required dependencies using:
     ```
     pip install -r requirements.txt
     ```
   - Run the backend server using:
     ```
     uvicorn app.main:app --reload
     ```

2. **Frontend Setup**:
   - Navigate to the `frontend` directory.
   - Install the required dependencies using:
     ```
     npm install
     ```
   - Start the frontend application using:
     ```
     npm start
     ```

### API Documentation

Refer to the backend `README.md` for detailed API usage instructions.

### Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.