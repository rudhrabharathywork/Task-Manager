import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/styles/index.css';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import TaskManager from './pages/TaskManager';
import AuthLayout from './layouts/Authlayout';
import RootLayout from './layouts/RootLayout';
import App from './App';



const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/products', element: <Products /> },
      {
        element: <AuthLayout />,
        children: [
          { path: '/taskmanager', element: <TaskManager /> },
        ],
      },
    ],
  },
  { path: '/', element: <Home /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);
