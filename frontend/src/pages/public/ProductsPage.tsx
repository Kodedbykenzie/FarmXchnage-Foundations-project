import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Typography } from "@material-tailwind/react";
export function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    sortBy: 'price',
    sortOrder: 'asc',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/products', {
        params: {
          page: currentPage,
          category: filters.category,
          priceRange: filters.priceRange,
          sortBy: filters.sortBy,
          sortOrder: filters.sortOrder,
        },
      });
      interface ProductsResponse {
        products: Product[];
        totalPages: number;
      }

      const data = response.data as ProductsResponse;
      setProducts(data.products);
      setTotalPages(data.totalPages);
      setError(null);
    } catch (err) {
      setError('Failed to fetch products. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage, filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };


  interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  }

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      {/* Filter and Sort Section */}
      <div className="mb-6 flex flex-wrap gap-4">
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">All Categories</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="grains">Grains</option>
        </select>

        <select
          name="priceRange"
          value={filters.priceRange}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">All Prices</option>
          <option value="0-10">$0 - $10</option>
          <option value="10-50">$10 - $50</option>
          <option value="50-100">$50 - $100</option>
        </select>

        <select
          name="sortBy"
          value={filters.sortBy}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>

        <select
          name="sortOrder"
          value={filters.sortOrder}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Loading and Error States */}
      {loading && <p className="text-gray-600">Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold">${product.price}</p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 border rounded ${
              currentPage === page ? 'bg-green-500 text-white' : 'bg-white'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}