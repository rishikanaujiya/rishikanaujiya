import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create a React Query client
const queryClient = new QueryClient();

const App = (): ReactElement => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {/* Global toast notifications */}
          <Sonner position="top-right" />

          {/* Router */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* Catch-all route for 404 pages */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
