
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Preload critical resources
const preloadResources = () => {
  // Preload common images and fonts
  const resourcesToPreload = [
    // Add paths to critical images/fonts
    '/favicon.ico'
  ];
  
  resourcesToPreload.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.woff2') ? 'font' : 'image';
    if (resource.endsWith('.woff2')) {
      link.setAttribute('crossorigin', 'anonymous');
    }
    document.head.appendChild(link);
  });
};

// Initialize performance optimizations
preloadResources();

// Mount the application with optimizations
const mountApp = () => {
  const rootElement = document.getElementById("root");
  if (!rootElement) throw new Error('Root element not found');
  
  const root = createRoot(rootElement);
  root.render(<App />);
};

// Use requestIdleCallback to mount when browser is idle, or setTimeout as fallback
if (window.requestIdleCallback) {
  window.requestIdleCallback(mountApp);
} else {
  setTimeout(mountApp, 1);
}
