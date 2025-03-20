import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
export function Breadcrumb() {
  const location = useLocation();
  const {
    user
  } = useAuth();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  const getBreadcrumbText = (segment: string) => {
    // Convert path segment to display text
    return segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
  };
  return <nav className="flex items-center space-x-2 text-sm text-gray-500">
      <Link to={`/${user?.role}`} className="flex items-center hover:text-gray-700">
        <Home className="w-4 h-4" />
      </Link>
      {pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
      const isLast = index === pathSegments.length - 1;
      return <Fragment key={path}>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {isLast ? <span className="font-medium text-gray-900">
                {getBreadcrumbText(segment)}
              </span> : <Link to={path} className="hover:text-gray-700">
                {getBreadcrumbText(segment)}
              </Link>}
          </Fragment>;
    })}
    </nav>;
}