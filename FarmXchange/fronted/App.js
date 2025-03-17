import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our E-Commerce Website</h1>
      </header>
      <main>
        <h2>Featured Products</h2>
        {/* Add product listings or other content here */}
      </main>
      <footer>
        <p>&copy; 2025 E-Commerce Website. All rights reserved.</p>
      </footer>
      <style>
        {`
          .App {
            text-align: center;
          }
          .App-header {
            background-color: #282c34;
            padding: 20px;
            color: white;
          }
          main {
            padding: 20px;
          }
        `}
      </style>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
