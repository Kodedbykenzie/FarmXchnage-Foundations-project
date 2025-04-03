import React, { useState, useEffect } from 'react';
import { Button, Card, Typography } from "@material-tailwind/react";
export function ProductManagement() {
  const [isLoading, setIsLoading] = useState(true);
  interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    category: string;
  }

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simulate loading products from an API
    setTimeout(() => {
      setProducts([
        {
          id: 'PROD-001',
          name: 'Organic Tomatoes',
          price: 500,
          stock: 100,
          category: 'Vegetables',
        },
        {
          id: 'PROD-002',
          name: 'Maize Flour',
          price: 1200,
          stock: 50,
          category: 'Grains',
        },
        {
          id: 'PROD-003',
          name: 'Sweet Potatoes',
          price: 300,
          stock: 200,
          category: 'Roots',
        },
      ]);
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading delay
  }, []);

  const handleAddProduct = () => {
    alert('Add Product functionality coming soon!');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
        <button
          onClick={handleAddProduct}
          className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Add New Product
        </button>
      </div>

      {/* Loading State */}
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse flex items-center justify-between bg-gray-100 rounded-lg p-4"
            >
              <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
              <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
              <div className="w-1/6 h-4 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        // Product List
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Your Products</h2>
          <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-700">RWF {product.price}</p>
                <p className="text-sm text-gray-500">Stock: {product.stock}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Placeholder for Future Features */}
      {!isLoading && products.length === 0 && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <p className="text-gray-500">No products available. Add your first product!</p>
        </div>
      )}
    </div>
  );
}