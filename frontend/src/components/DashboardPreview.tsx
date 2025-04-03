import React from 'react';
import { Link } from 'react-router-dom';
import { BarChartIcon, UsersIcon, ShoppingBagIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button, Card, Typography } from "@material-tailwind/react";
export function DashboardPreview() {
  const {
    isAuthenticated,
    user
  } = useAuth();
  const getButtonProps = (role: 'farmer' | 'business' | 'admin') => {
    if (!isAuthenticated) {
      return {
        to: '/signup',
        text: role === 'farmer' ? 'Become a Seller' : role === 'business' ? 'Register as Business' : 'Admin Access'
      };
    }
    if (user?.role === role) {
      return {
        to: `/${role}`,
        text: 'Go to Dashboard'
      };
    }
    return {
      to: '/signin',
      text: role === 'farmer' ? 'Become a Seller' : role === 'business' ? 'Register as Business' : 'Admin Access'
    };
  };
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Powerful Dashboards
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized tools for farmers, businesses, and administrators
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Farmer Dashboard */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2">
            <div className="h-3 bg-green-600"></div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <ShoppingBagIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Farmer Dashboard
              </h3>
              <p className="text-gray-600 mb-6">
                List products, track sales, and manage your farm business all in
                one place.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Product management
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Order tracking
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Sales analytics
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Wallet & transactions
                </li>
              </ul>
              <Link to={getButtonProps('farmer').to} className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors inline-block text-center">
                {getButtonProps('farmer').text}
              </Link>
            </div>
          </div>
          {/* Business Dashboard */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2">
            <div className="h-3 bg-amber-500"></div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <UsersIcon className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Business Dashboard
              </h3>
              <p className="text-gray-600 mb-6">
                Purchase wholesale products directly from farmers at competitive
                prices.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  Bulk ordering
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  Order history
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  Payment management
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  Direct messaging
                </li>
              </ul>
              <Link to={getButtonProps('business').to} className="w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-lg font-medium transition-colors inline-block text-center">
                {getButtonProps('business').text}
              </Link>
            </div>
          </div>
          {/* Admin Dashboard */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2">
            <div className="h-3 bg-blue-600"></div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <BarChartIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Admin Dashboard
              </h3>
              <p className="text-gray-600 mb-6">
                Comprehensive tools to manage the marketplace and ensure quality
                control.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  User management
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Product approvals
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Dispute resolution
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Analytics & reporting
                </li>
              </ul>
              <Link to={getButtonProps('admin').to} className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors inline-block text-center">
                {getButtonProps('admin').text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
}