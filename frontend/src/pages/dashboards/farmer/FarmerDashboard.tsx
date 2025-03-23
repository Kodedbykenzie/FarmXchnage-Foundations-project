import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export function FarmerDashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Maize', price: 1200, quantity: 50, description: 'Fresh harvested maize' },
    { id: 2, name: 'Tomatoes', price: 800, quantity: 30, description: 'Organic tomatoes' }
  ]);

  const [orders] = useState([
    { id: 101, product: 'Maize', quantity: 5, total: 6000, status: 'Pending' },
    { id: 102, product: 'Tomatoes', quantity: 10, total: 8000, status: 'Shipped' }
  ]);

  const salesData = [
    { month: 'Jan', sales: 65 },
    { month: 'Feb', sales: 59 },
    { month: 'Mar', sales: 80 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-green-700">Welcome to Your Farm Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Add New Product
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Total Products</h3>
          <p className="text-2xl font-bold text-green-600">{products.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Pending Orders</h3>
          <p className="text-2xl font-bold text-yellow-600">{orders.filter(o => o.status === 'Pending').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-500 text-sm">Monthly Revenue</h3>
          <p className="text-2xl font-bold text-blue-600">RWF 1,240,000</p>
        </div>
      </div>

      {/* Sales Analytics */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
        <BarChart width={500} height={300} data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#3B82F6" />
        </BarChart>
      </div>

      {/* Product Management */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Products</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Product</th>
                <th className="text-left py-3">Price</th>
                <th className="text-left py-3">Stock</th>
                <th className="text-left py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} className="border-b">
                  <td className="py-3">{product.name}</td>
                  <td className="py-3">RWF {product.price}</td>
                  <td className="py-3">{product.quantity} kg</td>
                  <td className="py-3 space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">Edit</button>
                    <button className="text-red-500 hover:text-red-700">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Management */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Order ID</th>
                <th className="text-left py-3">Product</th>
                <th className="text-left py-3">Quantity</th>
                <th className="text-left py-3">Total</th>
                <th className="text-left py-3">Status</th>
                <th className="text-left py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} className="border-b">
                  <td className="py-3">#{order.id}</td>
                  <td className="py-3">{order.product}</td>
                  <td className="py-3">{order.quantity} kg</td>
                  <td className="py-3">RWF {order.total}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-sm ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <button className="text-green-500 hover:text-green-700">Update Status</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


export default FarmerDashboard;