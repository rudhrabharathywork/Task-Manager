import { useAuth } from "@clerk/clerk-react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthLayout() {
  const { userId, isLoaded } = useAuth();

  console.log("Auth status - isLoaded:", isLoaded, "userId:", userId);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!userId) {
    return <Navigate to="/page404" />;
  }

  return <Outlet />;
}
