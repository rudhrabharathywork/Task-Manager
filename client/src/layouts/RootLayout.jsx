import { ClerkProvider } from "@clerk/clerk-react";
import { Outlet, useNavigate, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk publishable key");
}

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <Navbar />
      <Outlet />
    </ClerkProvider>
  );
}
