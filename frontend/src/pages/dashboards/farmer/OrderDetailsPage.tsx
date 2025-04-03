// src/pages/dashboards/farmer/OrderDetailsPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { TruckIcon, CurrencyDollarIcon, UserIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { Button, Card, Typography } from "@material-tailwind/react";
export function OrderDetailsPage() {
  const { orderId } = useParams<{ orderId: string }>();

  // Mock order data
  const order = {
    id: orderId,
    items: [
      { product: 'Organic Maize', quantity: '50kg', price: 150000, status: 'Shipped' },
      { product: 'Arabica Coffee', quantity: '20kg', price: 450000, status: 'Pending' }
    ],
    buyer: 'AgroBusiness Ltd',
    total: 600000,
    deliveryDate: '2024-03-25',
    paymentStatus: 'Paid',
    deliveryAddress: 'Kampala Industrial Park, Warehouse 12'
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Order #{order.id}</h1>
        <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full">
          {order.items[0].status}
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Order Items */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Products Ordered</h2>
          {order.items.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{item.product}</h3>
                  <p className="text-gray-600">{item.quantity}</p>
                </div>
                <span className="text-green-600">UGX {item.price.toLocaleString()}</span>
              </div>
            </div>
          ))}
          <div className="pt-4 font-bold flex justify-between">
            <span>Total:</span>
            <span className="text-green-600">UGX {order.total.toLocaleString()}</span>
          </div>
        </div>

        {/* Order Metadata */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <UserIcon className="h-6 w-6 text-green-600 mt-1" />
            <div>
              <h3 className="font-medium mb-1">Buyer Information</h3>
              <p className="text-gray-600">{order.buyer}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CalendarIcon className="h-6 w-6 text-green-600 mt-1" />
            <div>
              <h3 className="font-medium mb-1">Delivery Schedule</h3>
              <p className="text-gray-600">
                {new Date(order.deliveryDate).toLocaleDateString('en-UG', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <TruckIcon className="h-6 w-6 text-green-600 mt-1" />
            <div>
              <h3 className="font-medium mb-1">Delivery Address</h3>
              <p className="text-gray-600">{order.deliveryAddress}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CurrencyDollarIcon className="h-6 w-6 text-green-600 mt-1" />
            <div>
              <h3 className="font-medium mb-1">Payment Status</h3>
              <span className={`px-2 py-1 rounded ${order.paymentStatus === 'Paid' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'}`}>
                {order.paymentStatus}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Print Invoice
        </button>
        <button className="px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-50">
          Contact Buyer
        </button>
      </div>
    </div>
  );
}