import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthLayout() {
  const { userId, isLoaded } = useAuth();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    if (!userId) {
      setIsRedirecting(true);
    }
  }, [isLoaded, userId]);

  if (isRedirecting) {
    return <Navigate to="/page404" />;
  }
  return <Outlet />;
}
