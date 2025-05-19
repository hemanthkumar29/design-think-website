
import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import CacheBuster from "./components/ui/CacheBuster";
import { Skeleton } from "@/components/ui/skeleton";

// App version - update when making changes
const APP_VERSION = '1.0.0';

// Lazy load non-critical pages
const Teams = lazy(() => import("./pages/Teams"));
const TeamDetail = lazy(() => import("./pages/TeamDetail"));
const Presentations = lazy(() => import("./pages/Presentations"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Admin = lazy(() => import("./pages/Admin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

// Import Admin context
import { AdminProvider } from "./context/AdminContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Create a client outside of the render function
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Add cache busting to API queries by default
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (replacing cacheTime)
    },
  },
});

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="space-y-4 w-full max-w-md">
      <Skeleton className="h-8 w-3/4 mx-auto" />
      <Skeleton className="h-64 w-full" />
      <div className="grid grid-cols-3 gap-2">
        <Skeleton className="h-8" />
        <Skeleton className="h-8" />
        <Skeleton className="h-8" />
      </div>
      <Skeleton className="h-32 w-full" />
    </div>
  </div>
);

// Define App as a proper React function component
function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <AdminProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <CacheBuster version={APP_VERSION} />
              <BrowserRouter>
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/teams" element={<Teams />} />
                    <Route path="/team/:id" element={<TeamDetail />} />
                    <Route path="/presentations" element={<Presentations />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route 
                      path="/admin/dashboard" 
                      element={
                        <ProtectedRoute>
                          <AdminDashboard />
                        </ProtectedRoute>
                      } 
                    />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </BrowserRouter>
            </TooltipProvider>
          </AdminProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
