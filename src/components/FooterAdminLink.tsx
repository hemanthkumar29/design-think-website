
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

    // Check if the NavbarAdminLink has been activated
    const checkAdminLinkInterval = setInterval(() => {
      const adminLinkActivated = sessionStorage.getItem('adminLinkActivated');
      if (adminLinkActivated === 'true') {
        setShowAdminLink(true);
        clearInterval(checkAdminLinkInterval);
      }
    }, 1000);
    
    return () => clearInterval(checkAdminLinkInterval);
  }, [isAuthenticated]);

  if (!showAdminLink) return null;

  return (
    <div className="text-sm text-center text-muted-foreground mt-6">
      <Link to={adminPath} className="hover:text-foreground transition-colors">
        {adminLabel}
      </Link>
    </div>
  );
};

export default FooterAdminLink;
