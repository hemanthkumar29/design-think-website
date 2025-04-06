
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const NavbarAdminLink = () => {
  const [showAdminLink, setShowAdminLink] = useState(false);
  const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
  const adminPath = isAuthenticated ? '/admin/dashboard' : '/admin';
  const adminLabel = isAuthenticated ? 'Dashboard' : 'Admin';

  useEffect(() => {
    // Check if user is already authenticated
    if (isAuthenticated) {
      setShowAdminLink(true);
      sessionStorage.setItem('adminLinkActivated', 'true');
      return;
    }

    // Check for session storage setting
    const adminLinkActivated = sessionStorage.getItem('adminLinkActivated');
    if (adminLinkActivated === 'true') {
      setShowAdminLink(true);
      return;
    }

    // Simple tap/click counter for activation (5 rapid clicks on the footer copyright text)
    const activationCounter = parseInt(sessionStorage.getItem('adminClickCounter') || '0', 10);
    if (activationCounter >= 5) {
      setShowAdminLink(true);
      sessionStorage.setItem('adminLinkActivated', 'true');
    }
  }, [isAuthenticated]);
  
  if (!showAdminLink) return null;

  return (
    <Link
      to={adminPath}
      className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
      aria-label={adminLabel}
    >
      <Shield className="h-4 w-4" />
      <span className="hidden md:inline">{adminLabel}</span>
    </Link>
  );
};

export default NavbarAdminLink;
