import React from 'react';
import { Users, ShoppingBag, DollarSign, TrendingUp } from 'lucide-react';
const stats = [{
  name: 'Total Users',
  value: '1,234',
  change: '+12%',
  icon: <Users className="h-6 w-6 text-blue-600" />
}, {
  name: 'Active Products',
  value: '456',
  change: '+23%',
  icon: <ShoppingBag className="h-6 w-6 text-green-600" />
}, {
  name: 'Total Revenue',
  value: '$12,345',
  change: '+8%',
  icon: <DollarSign className="h-6 w-6 text-amber-600" />
}, {
  name: 'Growth Rate',
  value: '25%',
  change: '+4%',
  icon: <TrendingUp className="h-6 w-6 text-purple-600" />
}];
const recentActivities = [{
  id: 1,
  user: 'John Farmer',
  action: 'added new product',
  item: 'Organic Tomatoes',
  time: '2 minutes ago'
}, {
  id: 2,
  user: 'Business Corp',
  action: 'placed order',
  item: 'Fresh Vegetables Bundle',
  time: '5 minutes ago'
}, {
  id: 3,
  user: 'Sarah Farmer',
  action: 'updated profile',
  item: '',
  time: '10 minutes ago'
}];
export function AdminDashboard() {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          Dashboard Overview
        </h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Generate Report
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(stat => <div key={stat.name} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-500">
                  {stat.name}
                </h3>
                <div className="mt-2 flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                  <span className="ml-2 text-sm font-medium text-green-600">
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">{stat.icon}</div>
            </div>
          </div>)}
      </div>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
          <div className="mt-6 flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              {recentActivities.map(activity => <li key={activity.id} className="py-5">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {activity.user}
                      </p>
                      <p className="text-sm text-gray-500">
                        {activity.action} {activity.item}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-sm text-gray-500">
                      {activity.time}
                    </div>
                  </div>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>;
}