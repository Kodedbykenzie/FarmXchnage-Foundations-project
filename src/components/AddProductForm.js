import React, { useState } from 'react';

const AddProductForm = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [quantityAvailable, setQuantityAvailable] = useState(0);
    const [pricePerUnit, setPricePerUnit] = useState(0);
    const [productImage, setProductImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement product submission logic here
        console.log({
            productName,
            productDescription,
            quantityAvailable,
            pricePerUnit,
            productImage,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Product Name:</label>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Product Description:</label>
                <textarea
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Quantity Available:</label>
                <input
                    type="number"
                    value={quantityAvailable}
                    onChange={(e) => setQuantityAvailable(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Price per Unit:</label>
                <input
                    type="number"
                    value={pricePerUnit}
                    onChange={(e) => setPricePerUnit(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Upload Image:</label>
                <input
                    type="file"
                    onChange={(e) => setProductImage(e.target.files[0])}
                    required
                />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;
