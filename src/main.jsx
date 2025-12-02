import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import { StrictMode } from "react";
import LoadingFallback from "./Componentes/UI/LoadingFallback";
import "./App.css";

// Import network optimizer to reduce critical path
// Network optimization - temporarily disabled for debugging
// import { networkOptimizer } from './utils/networkOptimizer.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={<LoadingFallback />}
    />
  </StrictMode>
);

// Network optimizer will auto-initialize when imported

// Silence console output in production
if (process.env.NODE_ENV === 'production') {
  console.error = () => { };
  console.warn = () => { };
}

// Register service worker for critical resource caching
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.warn('SW registration failed: ', registrationError);
      });
  });
}