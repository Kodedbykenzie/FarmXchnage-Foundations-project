import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Mock order data
const orders = [
  { id: 1, customer: 'John Doe', product: 'Tomatoes', quantity: 50, total: 50000, status: 'Delivered' },
  { id: 2, customer: 'Jane Smith', product: 'Potatoes', quantity: 30, total: 30000, status: 'Shipped' },
  { id: 3, customer: 'Alice Johnson', product: 'Carrots', quantity: 20, total: 20000, status: 'Pending' },
  { id: 4, customer: 'Bob Brown', product: 'Bananas', quantity: 40, total: 40000, status: 'Delivered' },
  { id: 5, customer: 'Charlie Davis', product: 'Oranges', quantity: 25, total: 25000, status: 'Shipped' },
];

export function FarmerOrders() {
  // Handle exporting orders
  const handleExportOrders = () => {
    alert('Orders exported successfully!');
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Orders</h1>
        <button
          onClick={handleExportOrders}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Export Orders
        </button>
      </div>

      {/* Orders Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Order List</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Total (RWF)</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>{order.total.toLocaleString()}</TableCell>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}