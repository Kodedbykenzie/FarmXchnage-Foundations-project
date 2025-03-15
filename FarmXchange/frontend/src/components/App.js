import React from 'react';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to FarmXchange</h1>
                <p>Your online marketplace for fresh agricultural products.</p>
            </header>
            <main>
                <h2>Featured Products</h2>
                {/* Add components for displaying products here */}
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} FarmXchange. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;