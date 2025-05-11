
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, FilePresentation } from 'lucide-react';
import { cn } from '@/lib/utils';
import NavbarAdminLink from '../NavbarAdminLink';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-10 py-4',
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="text-lg md:text-xl font-display font-bold">
          <span className="gradient-text">DT&I EEE A</span>
        </NavLink>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={({ isActive }) => cn('nav-link', isActive && 'active')}>
            Home
          </NavLink>
          <NavLink to="/teams" className={({ isActive }) => cn('nav-link', isActive && 'active')}>
            Teams
          </NavLink>
          <NavLink to="/presentations" className={({ isActive }) => cn('nav-link', isActive && 'active')}>
            <span className="flex items-center gap-1">
              <FilePresentation size={16} />
              Presentations
            </span>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => cn('nav-link', isActive && 'active')}>
            About
          </NavLink>
          <NavbarAdminLink />
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 animate-slide-down">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <NavLink to="/" className={({ isActive }) => cn('nav-link', isActive && 'active')}>
              Home
            </NavLink>
            <NavLink to="/teams" className={({ isActive }) => cn('nav-link', isActive && 'active')}>
              Teams
            </NavLink>
            <NavLink to="/presentations" className={({ isActive }) => cn('nav-link', isActive && 'active')}>
              <span className="flex items-center gap-1">
                <FilePresentation size={16} />
                Presentations
              </span>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => cn('nav-link', isActive && 'active')}>
              About
            </NavLink>
            {/* Admin link removed from mobile menu */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
