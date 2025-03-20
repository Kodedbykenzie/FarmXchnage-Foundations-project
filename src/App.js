import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail'; // Import ProductDetail component

import Login from './pages/Login';
import FarmerDashboard from './pages/FarmerDashboard'; // Placeholder for Farmer Dashboard
import BuyerDashboard from './pages/BuyerDashboard'; // Placeholder for Buyer Dashboard
import HomePage from './pages/HomePage'; // Import HomePage component
import ProductListing from './pages/ProductListing'; // Import ProductListing component

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} /> // Updated to HomePage
                <Route path="/farmer-dashboard" component={FarmerDashboard} />
                <Route path="/buyer-dashboard" component={BuyerDashboard} />
                <Route path="/product-detail" component={ProductDetail} /> // Add route for product detail
                <Route path="/product-listing" component={ProductListing} /> // Add route for product listing
            </Switch>
        </Router>
    );
};

export default App;
