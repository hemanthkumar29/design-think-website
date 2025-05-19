
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Cache busting setup with performance improvements
const APP_VERSION = '1.0.0'; // Update this when making significant changes
const LAST_VERSION_KEY = 'app_version';
const LAST_CHECK_KEY = 'last_update_check';
const AUTO_CHECK_INTERVAL = 5 * 60 * 1000; // 5 minutes

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

// Check if app version has changed - optimized version
const checkForUpdates = () => {
  const lastVersion = localStorage.getItem(LAST_VERSION_KEY);
  
  if (lastVersion && lastVersion !== APP_VERSION) {
    // Version changed, clear cache and reload
    localStorage.setItem(LAST_VERSION_KEY, APP_VERSION);
    
    // Clear caches if browser supports it
    if ('caches' in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name);
        });
      });
    }
    
    // Force reload from server
    window.location.reload();
  } else if (!lastVersion) {
    // First visit, just set the version
    localStorage.setItem(LAST_VERSION_KEY, APP_VERSION);
  }
};

// More efficient update checker that doesn't block rendering
const setupUpdateChecker = () => {
  // Check for updates initially after a short delay to not block rendering
  setTimeout(checkForUpdates, 1000);
  
  // Set up focus event listener for update checks
  window.addEventListener('focus', () => {
    const now = Date.now();
    const lastCheck = parseInt(localStorage.getItem(LAST_CHECK_KEY) || '0', 10);
    
    // Check for updates when tab gets focus if it's been long enough
    if (now - lastCheck > AUTO_CHECK_INTERVAL) {
      // Use requestIdleCallback for better performance when available
      if (window.requestIdleCallback) {
        window.requestIdleCallback(() => {
          performUpdateCheck();
        });
      } else {
        setTimeout(performUpdateCheck, 200);
      }
    }
  });
};

// Separate function for the actual update check
const performUpdateCheck = () => {
  fetch(`/version.json?nocache=${Date.now()}`)
    .then(response => response.json())
    .then(data => {
      if (data.version !== APP_VERSION) {
        window.location.reload();
      }
      localStorage.setItem(LAST_CHECK_KEY, Date.now().toString());
    })
    .catch(() => {
      // Silently fail on error
      localStorage.setItem(LAST_CHECK_KEY, Date.now().toString());
    });
};

// Initialize performance optimizations
preloadResources();
setupUpdateChecker();

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
