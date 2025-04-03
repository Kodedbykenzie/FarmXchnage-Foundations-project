import React, { useState } from 'react';
import { BellIcon, CheckCircleIcon, TruckIcon, CurrencyDollarIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Button, Card, Typography } from "@material-tailwind/react";

type Notification = {
  id: string;
  type: 'order' | 'payment' | 'system' | 'message';
  title: string;
  content: string;
  timestamp: string;
  read: boolean;
  action?: string;
};

export function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'order',
      title: 'New Order Received',
      content: 'Order #1234 for 50kg of Maize from Green Valley Farms',
      timestamp: '2h ago',
      read: false,
      action: '/orders/1234'
    },
    {
      id: '2',
      type: 'payment',
      title: 'Payment Received',
      content: 'UGX 1,250,000 payment confirmed for Order #1234',
      timestamp: '4h ago',
      read: true
    },
    {
      id: '3',
      type: 'system',
      title: 'System Maintenance',
      content: 'Scheduled maintenance on Sunday 3:00 AM - 5:00 AM EAT',
      timestamp: '1d ago',
      read: false
    }
  ]);

  const [activeTab, setActiveTab] = useState<'all' | 'unread'>('all');

  const markAsRead = (id: string) => {
    setNotifications(notifs =>
      notifs.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifs => notifs.filter(n => n.id !== id));
  };

  const getNotificationIcon = (type: Notification['type']) => {
    const iconClass = 'h-6 w-6 mr-4';
    switch (type) {
      case 'order':
        return <TruckIcon className={`${iconClass} text-green-600`} />;
      case 'payment':
        return <CurrencyDollarIcon className={`${iconClass} text-blue-600`} />;
      case 'system':
        return <ExclamationTriangleIcon className={`${iconClass} text-yellow-600`} />;
      case 'message':
        return <BellIcon className={`${iconClass} text-purple-600`} />;
      default:
        return <BellIcon className={`${iconClass} text-gray-600`} />;
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <BellIcon className="h-8 w-8 text-green-600 mr-4" />
        <h1 className="text-2xl font-bold">Notifications</h1>
        <div className="ml-auto flex gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'all' ? 'bg-green-100 text-green-700' : 'text-gray-600'}`}
          >
            All ({notifications.length})
          </button>
          <button
            onClick={() => setActiveTab('unread')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'unread' ? 'bg-green-100 text-green-700' : 'text-gray-600'}`}
          >
            Unread ({notifications.filter(n => !n.read).length})
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {notifications
          .filter(n => activeTab === 'all' || !n.read)
          .map(notification => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg border ${!notification.read ? 'bg-white border-green-200' : 'bg-gray-50 border-gray-200'}`}
            >
              <div className="flex items-start">
                {getNotificationIcon(notification.type)}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{notification.title}</h3>
                    <span className="text-sm text-gray-500">{notification.timestamp}</span>
                  </div>
                  <p className="text-gray-600 mt-1">{notification.content}</p>
                  {notification.action && (
                    <a
                      href={notification.action}
                      className="inline-block mt-2 text-green-600 hover:text-green-700 text-sm"
                    >
                      View Order →
                    </a>
                  )}
                </div>
                <div className="ml-4 flex gap-2">
                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="text-gray-400 hover:text-green-600"
                      title="Mark as read"
                    >
                      <CheckCircleIcon className="h-5 w-5" />
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="text-gray-400 hover:text-red-600"
                    title="Delete"
                  >
                    <span className="sr-only">Delete</span>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}

        {notifications.length === 0 && (
          <div className="text-center py-12">
            <BellIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No notifications yet</p>
          </div>
        )}
      </div>
    </div>
  );
}