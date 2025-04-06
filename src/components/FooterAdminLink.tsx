
import React from 'react';
import { Link } from 'react-router-dom';

const FooterAdminLink = () => {
  return (
    <div className="text-sm text-center text-muted-foreground mt-6">
      <Link to="/admin" className="hover:text-foreground transition-colors">
        Admin Login
      </Link>
    </div>
  );
};

export default FooterAdminLink;
