import React, { useEffect, useState, useRef } from 'react';
import { Bell, Check, X } from 'lucide-react';
type Notification = {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  time: string;
  read: boolean;
};
const mockNotifications: Notification[] = [{
  id: '1',
  title: 'New Order',
  message: 'You have received a new order #123',
  type: 'info',
  time: '2 minutes ago',
  read: false
}, {
  id: '2',
  title: 'Product Approved',
  message: 'Your product "Organic Tomatoes" has been approved',
  type: 'success',
  time: '1 hour ago',
  read: false
}, {
  id: '3',
  title: 'Payment Failed',
  message: 'Payment for order #456 has failed',
  type: 'error',
  time: '2 hours ago',
  read: true
}];
export function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const unreadCount = notifications.filter(n => !n.read).length;
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? {
      ...n,
      read: true
    } : n));
  };
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({
      ...n,
      read: true
    })));
  };
  const removeNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };
  return <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="relative p-2 text-gray-400 hover:text-gray-500 focus:outline-none">
        <Bell className="h-6 w-6" />
        {unreadCount > 0 && <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />}
      </button>
      {isOpen && <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900">
                Notifications
              </h3>
              {unreadCount > 0 && <button onClick={markAllAsRead} className="text-xs text-green-600 hover:text-green-700">
                  Mark all as read
                </button>}
            </div>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? <div className="p-4 text-center text-sm text-gray-500">
                No notifications
              </div> : notifications.map(notification => <div key={notification.id} className={`p-4 border-b border-gray-100 last:border-0 ${!notification.read ? 'bg-gray-50' : ''}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {notification.title}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {notification.message}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        {notification.time}
                      </p>
                    </div>
                    <div className="ml-4 flex items-center space-x-2">
                      {!notification.read && <button onClick={() => markAsRead(notification.id)} className="text-green-600 hover:text-green-700">
                          <Check className="h-4 w-4" />
                        </button>}
                      <button onClick={() => removeNotification(notification.id)} className="text-gray-400 hover:text-gray-500">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>)}
          </div>
          <div className="p-4 border-t border-gray-200">
            <a href="/notifications" className="block text-center text-sm text-green-600 hover:text-green-700">
              View all notifications
            </a>
          </div>
        </div>}
    </div>;
}