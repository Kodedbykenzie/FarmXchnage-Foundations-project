import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchIcon, ShoppingCartIcon, UserIcon, MenuIcon, XIcon, LogOutIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button, Card, Typography } from "@material-tailwind/react";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    user,
    signOut,
    isAuthenticated
  } = useAuth();
  const navigate = useNavigate();
  const getDashboardLink = () => {
    if (!user) return '/signin';
    return `/${user.role}`;
  };
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-green-700">
            Farm<span className="text-amber-600">Xchange</span>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
            Home
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-green-600 transition-colors">
            Products
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">
            How It Works
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">
            About
          </Link>
        </nav>
        {/* Search & Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input type="text" placeholder="Search products..." className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          {isAuthenticated ? <div className="flex items-center space-x-4">
              {user?.role === 'business' && <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
                </button>}
              <Link to={getDashboardLink()} className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <UserIcon className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <button onClick={signOut} className="flex items-center space-x-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                <LogOutIcon className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </div> : <button onClick={() => navigate('/signin')} className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              <UserIcon className="h-5 w-5" />
              <span>Sign In</span>
            </button>}
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon className="h-6 w-6 text-gray-700" /> : <MenuIcon className="h-6 w-6 text-gray-700" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-3 pb-3">
            <Link to="/" className="py-2 text-gray-700 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" className="py-2 text-gray-700 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link to="/how-it-works" className="py-2 text-gray-700 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </Link>
            <Link to="/about" className="py-2 text-gray-700 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <div className="relative mt-2">
              <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
              <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            {isAuthenticated ? <>
                <Link to={getDashboardLink()} className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors" onClick={() => setIsMenuOpen(false)}>
                  <UserIcon className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
                <button onClick={() => {
            signOut();
            setIsMenuOpen(false);
          }} className="flex items-center justify-center space-x-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  <LogOutIcon className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </> : <Link to="/signin" className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors" onClick={() => setIsMenuOpen(false)}>
                <UserIcon className="h-5 w-5" />
                <span>Sign In</span>
              </Link>}
          </div>
        </div>}
    </header>;
}