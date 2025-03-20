import React, { useState } from 'react';
import AddProductForm from '../components/AddProductForm';

const FarmerDashboard = () => {
    const [products, setProducts] = useState([]);

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    return (
        <div>
            <h2>Farmer Dashboard</h2>
            <p>Welcome, Farmer! Here you can manage your products.</p>
            <AddProductForm onAddProduct={handleAddProduct} />
            <h3>Your Products</h3>
            <div className="product-list">
                {products.map((product, index) => (
                    <div key={index} className="product-item">
                        <h4>{product.productName}</h4>
                        <p>{product.productDescription}</p>
                        <p>Quantity: {product.quantityAvailable}</p>
                        <p>Price: ${product.pricePerUnit}</p>
                        {product.productImage && <img src={URL.createObjectURL(product.productImage)} alt={product.productName} />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FarmerDashboard;
