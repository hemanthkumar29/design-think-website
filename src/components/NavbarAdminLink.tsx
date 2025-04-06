
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

    // Set up a key sequence detector (Alt+A+D+M+I+N)
    const secretCode = ['Alt', 'a', 'd', 'm', 'i', 'n'];
    let keySequence: string[] = [];
    
    const keyHandler = (event: KeyboardEvent) => {
      // Add the key to the sequence
      if (event.key === 'Alt') {
        keySequence = ['Alt'];
      } else if (keySequence.length > 0) {
        keySequence.push(event.key.toLowerCase());
        
        // Check if the full sequence has been entered
        const isFullSequenceMatch = 
          keySequence.length === secretCode.length &&
          keySequence.every((key, index) => key === secretCode[index]);
          
        if (isFullSequenceMatch) {
          setShowAdminLink(true);
          sessionStorage.setItem('adminLinkActivated', 'true');
        }
      }
    };
    
    window.addEventListener('keydown', keyHandler);
    
    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
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
