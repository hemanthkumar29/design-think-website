
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Cache busting setup
const APP_VERSION = '1.0.0'; // Update this when making significant changes
const LAST_VERSION_KEY = 'app_version';

// Check if app version has changed
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
    window.location.reload(true);
  } else if (!lastVersion) {
    // First visit, just set the version
    localStorage.setItem(LAST_VERSION_KEY, APP_VERSION);
  }
};

// Run version check
checkForUpdates();

// Set up auto-check for updates every 5 minutes
let lastUpdateCheck = Date.now();
const AUTO_CHECK_INTERVAL = 5 * 60 * 1000; // 5 minutes

window.addEventListener('focus', () => {
  // Check for updates when tab gets focus if it's been long enough
  if (Date.now() - lastUpdateCheck > AUTO_CHECK_INTERVAL) {
    fetch(`/version.json?nocache=${Date.now()}`)
      .then(response => response.json())
      .then(data => {
        if (data.version !== APP_VERSION) {
          window.location.reload(true);
        }
        lastUpdateCheck = Date.now();
      })
      .catch(() => {
        // Silently fail on error
        lastUpdateCheck = Date.now();
      });
  }
});

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);
root.render(<App />);
