import React from 'react';

import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
    const location = useLocation();
    const { product } = location.state;

    return ( 
        <div className="product-detail">
            <h2>{product.productName}</h2>
            <p>{product.productDescription}</p>
            <p>Price: ${product.pricePerUnit}</p>
            {product.productImage && <img src={URL.createObjectURL(product.productImage)} alt={product.productName} />}
            <button>Add to Cart</button>
        </div>
    );
};



export default ProductDetail;
