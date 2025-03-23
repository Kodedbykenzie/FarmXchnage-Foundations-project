import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 inline-block">
              Farm<span className="text-amber-500">Xchange</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Connecting farmers directly with customers for fresher products
              and better prices.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {['Vegetables', 'Fruits', 'Dairy', 'Grains', 'Meat'].map(category => <li key={category}>
                    <Link to={`/products?category=${category.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                      {category}
                    </Link>
                  </li>)}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mr-3 text-gray-400 mt-0.5" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start">
                <MailIcon className="h-5 w-5 mr-3 text-gray-400 mt-0.5" />
                <a href="mailto:support@farmxchange.com" className="text-gray-400 hover:text-white transition-colors">
                  support@farmxchange.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-3 text-gray-400 mt-0.5" />
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  123 Farm Road, Agritown, Country
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} FarmXchange. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}