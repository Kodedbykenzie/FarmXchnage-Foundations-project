import React, { useState } from 'react';
import { Menu, Bell, ChevronDown, Search } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { SearchBar } from './SearchBar';
import { NotificationDropdown } from './NotificationDropdown';
import { Breadcrumb } from './common/Breadcrumb';
import { Button, Card, Typography } from "@material-tailwind/react";
type DashboardHeaderProps = {
  onMenuClick: () => void;
};
export function DashboardHeader({
  onMenuClick
}: DashboardHeaderProps) {
  const {
    user,
    signOut
  } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  return <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="flex flex-col">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center flex-1">
            <button onClick={onMenuClick} className="p-2 rounded-md text-gray-400 lg:hidden hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
              <Menu className="h-6 w-6" />
            </button>
            <div className="ml-4 flex-1 max-w-2xl">
              <SearchBar />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <NotificationDropdown />
            <div className="relative">
              <button onClick={() => setShowProfileMenu(!showProfileMenu)} className="flex items-center space-x-3 focus:outline-none">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">
                    {user?.name[0]}
                  </span>
                </div>
                <div className="hidden md:flex md:items-center">
                  <span className="text-sm font-medium text-gray-700">
                    {user?.name}
                  </span>
                  <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
                </div>
              </button>
              {showProfileMenu && <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Your Profile
                    </a>
                    <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Settings
                    </a>
                    <button onClick={signOut} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Sign out
                    </button>
                  </div>
                </div>}
            </div>
          </div>
        </div>
        <div className="px-4 py-2 border-t border-gray-100">
          <Breadcrumb />
        </div>
      </div>
    </header>;
}