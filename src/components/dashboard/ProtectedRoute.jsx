import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function ProtectedRoute({ children, role }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/dashboard/login" replace />;
  }

  if (role && user.role !== role) {
    const redirect = user.role === 'admin' ? '/dashboard/admin' : '/dashboard/client';
    return <Navigate to={redirect} replace />;
  }

  return children;
}
