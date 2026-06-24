import React from 'react';
import { Navigate, Outlet, createBrowserRouter } from 'react-router';
import { useAuth } from './context/authContext';
import { StorePage } from './components/StorePage/StorePage';
import { AdminPage } from './components/AdminPage/AdminPage';
import { LoginPage } from './components/LoginPage/LoginPage';

const ProtectedRoute = () => {
  const { usr } = useAuth();

  if (!usr || !usr.isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <StorePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/admin',
        element: <AdminPage />,
      },
    ],
  },
  {
    path: '*',
    element: <h2>404 Not Found</h2>,
  },
]);