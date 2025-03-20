import React, { useState } from 'react';
import ProductBrowse from '../components/ProductBrowse';


const BuyerDashboard = () => {
const [products, setProducts] = useState([
    {
        productName: 'Fresh Corn',
        productDescription: 'Delicious and sweet fresh corn.',
        pricePerUnit: 19.99,
        productImage: null, // Placeholder for image
    },
    {
        productName: 'Organic Tomatoes',
        productDescription: 'Juicy organic tomatoes.',
        pricePerUnit: 29.99,
        productImage: null, // Placeholder for image
    },
    {
        productName: 'Fresh Carrots',
        productDescription: 'Crisp and fresh carrots.',
        pricePerUnit: 34.99,
        productImage: null, // Placeholder for image
    },
]);


    return (
        <div>
            <h2>Buyer Dashboard</h2>
            <p>Welcome, Buyer! Here you can browse available products.</p>
            <ProductBrowse products={products} />

        </div>
    );
};

export default BuyerDashboard;
