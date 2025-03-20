import React from 'react';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to FarmX</h1>
            <p>Your go-to platform for buying and selling farm-fresh produce.</p>
            <section id="search" className="search">
                <input type="text" placeholder="Search for products..." />
                <button className="btn">Search</button>
            </section>
        </div>
    );
};

export default HomePage;

