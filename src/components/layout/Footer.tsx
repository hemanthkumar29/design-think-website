
import React from 'react';
import { NavLink } from 'react-router-dom';
import FooterAdminLink from '../FooterAdminLink';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Handler for copyright text clicks to activate admin link
  const handleCopyrightClick = () => {
    // Increment the click counter
    const currentClicks = parseInt(sessionStorage.getItem('adminClickCounter') || '0', 10);
    const newClickCount = currentClicks + 1;
    sessionStorage.setItem('adminClickCounter', newClickCount.toString());
    
    // Reset counter after 3 seconds of inactivity
    setTimeout(() => {
      if (parseInt(sessionStorage.getItem('adminClickCounter') || '0', 10) === newClickCount) {
        sessionStorage.setItem('adminClickCounter', '0');
      }
    }, 3000);
  };

  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <NavLink to="/" className="text-lg font-display font-bold">
              <span className="gradient-text">DT&I EEE A</span>
            </NavLink>
            <p className="text-sm text-muted-foreground max-w-xs">
              Design Thinking & Innovation in Electrical & Electronic Engineering Department A
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                Home
              </NavLink>
              <NavLink to="/teams" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                Teams
              </NavLink>
              <NavLink to="/about" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                About
              </NavLink>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">Contact</h3>
            <p className="text-sm text-foreground/80">
              For inquiries, please contact your department coordinator.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p 
            className="text-sm text-muted-foreground cursor-default" 
            onClick={handleCopyrightClick}
          >
            © {currentYear} Hemanth Kumar Chandaka. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Developed by Hemanth Kumar - Department of EEE - II Year
          </p>
          <FooterAdminLink />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
