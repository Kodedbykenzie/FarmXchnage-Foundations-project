import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';

// Mock product data for approval
const pendingProducts = [
  { id: 1, name: 'Fresh Tomatoes', farmer: 'John Doe', quantityKg: 50, pricePerKg: 1000 },
  { id: 2, name: 'Organic Potatoes', farmer: 'Jane Smith', quantityKg: 30, pricePerKg: 800 },
  { id: 3, name: 'Sweet Carrots', farmer: 'Alice Johnson', quantityKg: 20, pricePerKg: 1200 },
];

export function ProductApprovals() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  // Handle product selection
  const handleSelectProduct = (productId: number) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  // Handle approving selected products
  const handleApproveProducts = () => {
    if (selectedProducts.length === 0) {
      alert('Please select at least one product to approve.');
      return;
    }
    alert(`Approved products: ${selectedProducts.join(', ')}`);
    setSelectedProducts([]); // Clear selection
  };

  // Handle rejecting selected products
  const handleRejectProducts = () => {
    if (selectedProducts.length === 0) {
      alert('Please select at least one product to reject.');
      return;
    }
    alert(`Rejected products: ${selectedProducts.join(', ')}`);
    setSelectedProducts([]); // Clear selection
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Product Approvals</h1>
        <div className="flex space-x-4">
          <button
            onClick={handleApproveProducts}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Approve Selected
          </button>
          <button
            onClick={handleRejectProducts}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Reject Selected
          </button>
        </div>
      </div>

      {/* Pending Products Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Pending Products</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Select</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Farmer</TableCell>
                <TableCell>Quantity (kg)</TableCell>
                <TableCell>Price per kg (RWF)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pendingProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => handleSelectProduct(product.id)}
                    />
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.farmer}</TableCell>
                  <TableCell>{product.quantityKg}</TableCell>
                  <TableCell>{product.pricePerKg.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}