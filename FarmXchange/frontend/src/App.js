import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/products" exact component={ProductList} />
                    <Route path="/products/:id" component={ProductDetail} />
                    <Route path="/cart" component={Cart} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;