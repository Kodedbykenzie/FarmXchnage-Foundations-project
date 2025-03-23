import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
export function HeroSection() {
  return <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] mix-blend-overlay opacity-20"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Farm Fresh Products Direct To Your Doorstep
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            FarmXchange connects farmers directly with customers, eliminating
            intermediaries and ensuring fresher products at better prices.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium flex items-center transition-all transform hover:scale-105">
              Shop Products
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/signup?role=farmer" className="bg-white hover:bg-gray-100 text-green-800 px-6 py-3 rounded-lg font-medium transition-all">
              Become a Seller
            </Link>
          </div>
        </div>
      </div>
      {/* Wave effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#f9fafb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>;
}