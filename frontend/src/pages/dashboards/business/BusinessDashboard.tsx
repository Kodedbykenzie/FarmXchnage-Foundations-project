import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Button, Card, Typography } from "@material-tailwind/react";
// Mock data for sales and orders
const salesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 2000 },
];

const ordersData = [
  { id: 1, product: 'Tomatoes', quantity: 50, status: 'Delivered', total: 50000 },
  { id: 2, product: 'Potatoes', quantity: 30, status: 'Shipped', total: 30000 },
  { id: 3, product: 'Carrots', quantity: 20, status: 'Pending', total: 20000 },
];

export function BusinessDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Business Dashboard</h1>

      {/* Sales Overview Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sales Overview</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
        <TableContainer component={Paper} className="shadow-md">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Total (RWF)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ordersData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'Shipped'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell>{order.total.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Inventory Summary Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Inventory Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Total Products</h3>
            <p className="text-2xl font-bold">120</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Low Stock Items</h3>
            <p className="text-2xl font-bold">8</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Out of Stock</h3>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <button className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Add New Product
          </button>
          <button className="bg-green-500 text-white p-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            View Sales Report
          </button>
          <button className="bg-purple-500 text-white p-4 rounded-lg shadow-md hover:bg-purple-600 transition duration-300">
            Manage Inventory
          </button>
          <button className="bg-red-500 text-white p-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}