import React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardSidebar } from '../components/dashboard/DashboardSidebar';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';

export function DashboardLayout() {
  return (
    <div className="dashboard-container flex h-screen bg-gray-100">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <DashboardHeader onMenuClick={() => console.log('Menu clicked')} />

        {/* Main Content Area */}
        <main className="dashboard-main flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}