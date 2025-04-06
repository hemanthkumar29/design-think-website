
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const NavbarAdminLink = () => {
  return (
    <Link
      to="/admin"
      className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
      aria-label="Admin"
    >
      <Shield className="h-4 w-4" />
      <span className="hidden md:inline">Admin</span>
    </Link>
  );
};

export default NavbarAdminLink;
