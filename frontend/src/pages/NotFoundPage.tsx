import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Typography } from "@material-tailwind/react";
export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full space-y-8 text-center">
        {/* Animated 404 Number */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse absolute w-64 h-64 bg-green-100 rounded-full opacity-20" />
          </div>
          <svg
            className="mx-auto h-48 w-48 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="text-6xl font-bold"
              fill="currentColor"
            >
              404
            </text>
          </svg>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Oops! Lost in the Fields
          </h1>
          <p className="text-xl text-gray-600">
            The page you're looking for seems to have been harvested or never planted.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            ← Return to Home
          </Link>
          <span className="text-gray-500">or</span>
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search our farm..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="absolute right-3 top-3 text-gray-400 hover:text-green-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Additional Help */}
        <p className="text-gray-500 mt-8">
          Still lost? Contact our farm support at{' '}
          <a href="mailto:support@farmxchange.com" className="text-green-600 hover:underline">
            support@farmxchange.com
          </a>
        </p>
      </div>
    </div>
  );
}