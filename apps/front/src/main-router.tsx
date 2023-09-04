import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './app/login/login.component';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login"></Navigate>,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
