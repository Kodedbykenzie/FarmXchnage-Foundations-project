
import React, { useState } from 'react';

export function FarmerSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    language: 'English',
  });

  const handleSave = () => {
    // Simulate saving settings
    alert('Settings saved successfully!');
  };

  interface Settings {
    emailNotifications: boolean;
    smsNotifications: boolean;
    language: string;
  }

  const handleChange = (field: keyof Settings, value: Settings[keyof Settings]) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <button
          onClick={handleSave}
          className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Save Changes
        </button>
      </div>

      {/* Settings Form */}
      <div className="space-y-6">
        {/* Email Notifications */}
        <div className="flex justify-between items-center">
          <label className="text-gray-700 font-medium">Email Notifications</label>
          <input
            type="checkbox"
            checked={settings.emailNotifications}
            onChange={(e) => handleChange('emailNotifications', e.target.checked)}
            className="w-6 h-6 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
          />
        </div>

        {/* SMS Notifications */}
        <div className="flex justify-between items-center">
          <label className="text-gray-700 font-medium">SMS Notifications</label>
          <input
            type="checkbox"
            checked={settings.smsNotifications}
            onChange={(e) => handleChange('smsNotifications', e.target.checked)}
            className="w-6 h-6 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
          />
        </div>

        {/* Language Selection */}
        <div className="flex justify-between items-center">
          <label className="text-gray-700 font-medium">Preferred Language</label>
          <select
            value={settings.language}
            onChange={(e) => handleChange('language', e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Kinyarwanda">Kinyarwanda</option>
          </select>
        </div>
      </div>
    </div>
  );
}
