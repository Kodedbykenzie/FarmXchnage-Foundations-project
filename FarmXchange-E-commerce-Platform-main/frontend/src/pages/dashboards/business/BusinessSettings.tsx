import React from 'react';
export function BusinessSettings() {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Save Changes
        </button>
      </div>
      {/* Placeholder content */}
      <p className="text-gray-600">Settings content coming soon...</p>
    </div>;
}