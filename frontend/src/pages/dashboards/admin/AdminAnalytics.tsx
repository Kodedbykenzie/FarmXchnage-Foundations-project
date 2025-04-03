import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Button, Card, Typography } from "@material-tailwind/react";

// Mock data for sales and user activity
const salesData = [
  { month: 'Jan', sales: 4000, users: 120 },
  { month: 'Feb', sales: 3000, users: 90 },
  { month: 'Mar', sales: 2000, users: 80 },
];

const topProducts = [
  { id: 1, name: 'Fresh Tomatoes', sales: 50000, quantity: 100 },
  { id: 2, name: 'Organic Potatoes', sales: 40000, quantity: 80 },
  { id: 3, name: 'Sweet Carrots', sales: 30000, quantity: 60 },
  { id: 4, name: 'Ripe Bananas', sales: 25000, quantity: 50 },
  { id: 5, name: 'Juicy Oranges', sales: 20000, quantity: 40 },
];

export function AdminAnalytics() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
        <div className="flex space-x-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Export Report
          </button>
        </div>
      </div>

      {/* Sales and User Activity Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Sales and User Activity</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" name="Sales (RWF)" />
            <Bar dataKey="users" fill="#82ca9d" name="Active Users" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top Products Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Top Performing Products</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Total Sales (RWF)</TableCell>
                <TableCell>Quantity Sold</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.sales.toLocaleString()}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
          <p className="text-2xl font-bold">RWF 1,200,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
          <p className="text-2xl font-bold">320</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Active Users</h3>
          <p className="text-2xl font-bold">150</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Products Listed</h3>
          <p className="text-2xl font-bold">45</p>
        </div>
      </div>
    </div>
  );
}