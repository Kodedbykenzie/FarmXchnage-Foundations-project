import React from 'react';
import { StarIcon, ShoppingCartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Card, Typography } from "@material-tailwind/react";
const products = [{
  id: 1,
  name: 'Organic Tomatoes',
  price: 2.99,
  unit: 'kg',
  rating: 4.8,
  image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  farmer: 'Green Valley Farm'
}, {
  id: 2,
  name: 'Fresh Carrots',
  price: 1.75,
  unit: 'bunch',
  rating: 4.5,
  image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  farmer: 'Sunrise Organics'
}, {
  id: 3,
  name: 'Free Range Eggs',
  price: 4.25,
  unit: 'dozen',
  rating: 4.9,
  image: 'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  farmer: 'Happy Hen Farm'
}, {
  id: 4,
  name: 'Raw Honey',
  price: 7.5,
  unit: 'jar',
  rating: 4.7,
  image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  farmer: 'Bee Happy Apiaries'
}];
export function FeaturedProducts() {
  return <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover fresh, high-quality produce directly from local farmers
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => <Link to={`/products/${product.id}`} key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Fresh
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">
                    {product.farmer}
                  </span>
                  <div className="flex items-center">
                    <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm ml-1">{product.rating}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-1 text-gray-800">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-green-700 font-bold">
                    ${product.price}{' '}
                    <span className="text-sm text-gray-500 font-normal">
                      / {product.unit}
                    </span>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors">
                    <ShoppingCartIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </Link>)}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-colors inline-block">
            View All Products
          </Link>
        </div>
      </div>
    </section>;
}