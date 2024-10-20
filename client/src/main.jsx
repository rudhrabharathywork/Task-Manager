import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/index.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import TaskManager from "./pages/Task Manager";
import AuthLayout from "./layouts/AuthLayout";
import RootLayout from "./layouts/RootLayout";
import App from "./App";
import Page404 from "./pages/Page404";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products /> },
      { path: "/page404", element: <Page404 /> },
      {
        path: "/",
        element: <AuthLayout />,
        children: [{ path: "/taskmanager", element: <TaskManager /> }],
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <App>
    <RouterProvider router={router} />
  </App>
);
