import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, Package, Users, BarChart3, Settings, MessageSquare, Wallet, Bell, HelpCircle, FileText, Store, CheckSquare } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
type NavItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
};
const adminNavItems: NavItem[] = [{
  name: 'Dashboard',
  path: '/admin',
  icon: <LayoutDashboard className="w-5 h-5" />
}, {
  name: 'User Management',
  path: '/admin/users',
  icon: <Users className="w-5 h-5" />
}, {
  name: 'Product Approvals',
  path: '/admin/approvals',
  icon: <CheckSquare className="w-5 h-5" />
}, {
  name: 'Analytics',
  path: '/admin/analytics',
  icon: <BarChart3 className="w-5 h-5" />
}, {
  name: 'Reports',
  path: '/admin/reports',
  icon: <FileText className="w-5 h-5" />
}, {
  name: 'Settings',
  path: '/admin/settings',
  icon: <Settings className="w-5 h-5" />
}];
const farmerNavItems: NavItem[] = [{
  name: 'Dashboard',
  path: '/farmer',
  icon: <LayoutDashboard className="w-5 h-5" />
}, {
  name: 'Products',
  path: '/farmer/products',
  icon: <Package className="w-5 h-5" />
}, {
  name: 'Orders',
  path: '/farmer/orders',
  icon: <ShoppingBag className="w-5 h-5" />
}, {
  name: 'Wallet',
  path: '/farmer/wallet',
  icon: <Wallet className="w-5 h-5" />
}, {
  name: 'Messages',
  path: '/farmer/messages',
  icon: <MessageSquare className="w-5 h-5" />
}, {
  name: 'Settings',
  path: '/farmer/settings',
  icon: <Settings className="w-5 h-5" />
}];
const businessNavItems: NavItem[] = [{
  name: 'Dashboard',
  path: '/business',
  icon: <LayoutDashboard className="w-5 h-5" />
}, {
  name: 'Marketplace',
  path: '/business/marketplace',
  icon: <Store className="w-5 h-5" />
}, {
  name: 'My Orders',
  path: '/business/orders',
  icon: <ShoppingBag className="w-5 h-5" />
}, {
  name: 'Wallet',
  path: '/business/wallet',
  icon: <Wallet className="w-5 h-5" />
}, {
  name: 'Messages',
  path: '/business/messages',
  icon: <MessageSquare className="w-5 h-5" />
}, {
  name: 'Settings',
  path: '/business/settings',
  icon: <Settings className="w-5 h-5" />
}];
export function DashboardSidebar() {
  const {
    user
  } = useAuth();
  const location = useLocation();
  const navItems = user?.role === 'admin' ? adminNavItems : user?.role === 'farmer' ? farmerNavItems : businessNavItems;
  return <div className="bg-white w-64 min-h-screen border-r border-gray-200">
      <div className="p-4">
        <Link to="/" className="text-2xl font-bold text-green-700">
          Farm<span className="text-amber-600">Xchange</span>
        </Link>
      </div>
      <nav className="mt-8">
        <div className="px-4 mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Main Menu
          </p>
        </div>
        {navItems.map(item => {
        const isActive = location.pathname === item.path;
        return <Link key={item.path} to={item.path} className={`flex items-center px-4 py-3 text-sm ${isActive ? 'text-green-600 bg-green-50 border-r-4 border-green-600' : 'text-gray-700 hover:bg-gray-50'}`}>
              <span className={`${isActive ? 'text-green-600' : 'text-gray-400'}`}>
                {item.icon}
              </span>
              <span className="ml-3">{item.name}</span>
            </Link>;
      })}
        <div className="px-4 mt-8 mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Support
          </p>
        </div>
        <Link to="/help" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
          <HelpCircle className="w-5 h-5 text-gray-400" />
          <span className="ml-3">Help Center</span>
        </Link>
        <Link to="/notifications" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
          <Bell className="w-5 h-5 text-gray-400" />
          <span className="ml-3">Notifications</span>
        </Link>
      </nav>
    </div>;
}