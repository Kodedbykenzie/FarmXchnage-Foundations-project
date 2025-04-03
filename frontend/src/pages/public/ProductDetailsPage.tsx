import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Typography } from "@material-tailwind/react";
export function ProductDetailsPage() {
  const { productId } = useParams<{ productId: string }>();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg h-96 animate-pulse" />
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-4">Product {productId}</h1>
            <p className="text-gray-600 mb-6">Fresh agricultural product description</p>
            
            <div className="space-y-4">
              <div>
                <span className="font-semibold">Price:</span>
                <span className="ml-2 text-green-600">$12.99/kg</span>
              </div>
              <div>
                <span className="font-semibold">Farm:</span>
                <span className="ml-2">Green Valley Farms</span>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}