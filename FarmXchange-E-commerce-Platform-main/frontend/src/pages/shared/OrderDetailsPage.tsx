import React from 'react';
import { useParams } from 'react-router-dom';

export function OrderDetailsPage() {
  const { orderId } = useParams<{ orderId: string }>();

  // Mock order data
  const order = {
    id: orderId,
    items: [
      { product: 'Organic Tomatoes', quantity: 2, price: 15.99 },
      { product: 'Fresh Carrots', quantity: 5, price: 8.50 }
    ],
    total: 24.49,
    status: 'Delivered'
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Order #{order.id}</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          {order.items.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <div className="flex justify-between">
                <span>{item.product}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
              <div className="text-gray-600">Quantity: {item.quantity}</div>
            </div>
          ))}
          
          <div className="pt-4 font-bold flex justify-between">
            <span>Total:</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
          
          <div className="mt-6">
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
              {order.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}