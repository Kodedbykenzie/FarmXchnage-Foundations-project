import React from 'react';

import React from 'react';
import { useHistory } from 'react-router-dom';

const ProductBrowse = ({ products }) => {
    const history = useHistory();

    return (
        <div className="product-browse">
            <h2>Available Products</h2>
            <div className="product-list">
                {products.map((product, index) => (
                    <div key={index} className="product-item">
                        <img src={URL.createObjectURL(product.productImage)} alt={product.productName} />
                        <h3>{product.productName}</h3>
                        <p>{product.productDescription}</p>
                        <p>Price: ${product.pricePerUnit}</p>
                        <button onClick={() => history.push(`/product/${index}`)}>View Details</button>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductBrowse;
