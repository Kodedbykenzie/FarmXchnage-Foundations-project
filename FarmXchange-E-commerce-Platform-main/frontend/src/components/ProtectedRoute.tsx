import { useAuth } from '../contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  role?: 'admin' | 'farmer' | 'business';
}

export function ProtectedRoute({ role }: ProtectedRouteProps) {
  const { user, isAuthenticated } = useAuth();
  console.log('User:', user);
  console.log('Is Authenticated:', isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  if (role && user?.role !== role) {
    return <Navigate to="/" replace />;
  }

  // Use Outlet instead of children for nested routes
  return <Outlet />;
}