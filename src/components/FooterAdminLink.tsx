
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FooterAdminLink = () => {
  const [showAdminLink, setShowAdminLink] = useState(false);
  const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
  const adminPath = isAuthenticated ? '/admin/dashboard' : '/admin';
  const adminLabel = isAuthenticated ? 'Admin Dashboard' : 'Admin Login';

  useEffect(() => {
    // Show if already authenticated
    if (isAuthenticated) {
      setShowAdminLink(true);
      return;
    }

    // Check if the admin link has been activated already
    const adminLinkActivated = sessionStorage.getItem('adminLinkActivated');
    if (adminLinkActivated === 'true') {
      setShowAdminLink(true);
      return;
    }

    // Check at component mount
    const checkAdminLinkInterval = setInterval(() => {
      const adminLinkActivated = sessionStorage.getItem('adminLinkActivated');
      if (adminLinkActivated === 'true') {
        setShowAdminLink(true);
        clearInterval(checkAdminLinkInterval);
      }
    }, 1000);
    
    return () => clearInterval(checkAdminLinkInterval);
  }, [isAuthenticated]);

  const handleCopyrightClick = () => {
    // Increment the click counter
    const currentClicks = parseInt(sessionStorage.getItem('adminClickCounter') || '0', 10);
    const newClickCount = currentClicks + 1;
    sessionStorage.setItem('adminClickCounter', newClickCount.toString());
    
    // Check if we've reached the threshold (5 clicks)
    if (newClickCount >= 5) {
      setShowAdminLink(true);
      sessionStorage.setItem('adminLinkActivated', 'true');
    }
    
    // Reset counter after 3 seconds of inactivity
    setTimeout(() => {
      if (parseInt(sessionStorage.getItem('adminClickCounter') || '0', 10) === newClickCount) {
        sessionStorage.setItem('adminClickCounter', '0');
      }
    }, 3000);
  };

  return (
    <div className="text-sm text-center text-muted-foreground mt-6">
      {showAdminLink ? (
        <Link to={adminPath} className="hover:text-foreground transition-colors">
          {adminLabel}
        </Link>
      ) : null}
      {/* Hidden trigger element */}
      <span 
        className="cursor-default inline-block" 
        onClick={handleCopyrightClick}
        aria-hidden="true"
      >
        {/* This is an invisible element that responds to clicks */}
      </span>
    </div>
  );
};

export default FooterAdminLink;
