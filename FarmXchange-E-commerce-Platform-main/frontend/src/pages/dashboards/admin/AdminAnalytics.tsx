import React from 'react';
export function AdminAnalytics() {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
        <div className="flex space-x-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Export Report
          </button>
        </div>
      </div>
      {/* Placeholder content */}
      <p className="text-gray-600">Analytics content coming soon...</p>
    </div>;
}