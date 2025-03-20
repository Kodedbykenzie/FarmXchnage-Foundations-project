import React from 'react';
import ProductBrowse from '../components/ProductBrowse';

const ProductListing = () => {
    // Placeholder for product data
    const products = [
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
    ];

    return (
        <div>
            <h2>Available Products</h2>
            <ProductBrowse products={products} />
        </div>
    );
};

export default ProductListing;

