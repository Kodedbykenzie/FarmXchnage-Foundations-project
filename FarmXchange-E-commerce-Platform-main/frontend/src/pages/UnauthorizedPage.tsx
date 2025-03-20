import { Link } from 'react-router-dom';

export function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">403 - Access Denied</h1>
      <p className="text-lg mb-8">
        You don't have permission to view this page
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Return to Home
      </Link>
    </div>
  );
}