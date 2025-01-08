import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, LogIn, UserPlus } from 'lucide-react';
import Button from '../ui/Button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('user') || localStorage.getItem('isAdmin');

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAdmin');
    navigate('/');
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-200 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`fixed right-0 top-0 h-full w-64 bg-black transform transition-transform duration-200 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-end">
          <button onClick={onClose} className="text-white hover:text-gold">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="px-4 py-2">
          <Link
            to="/marketplace"
            className="block py-3 text-white hover:text-gold transition-colors"
            onClick={onClose}
          >
            Marketplace
          </Link>
          <Link
            to="/features"
            className="block py-3 text-white hover:text-gold transition-colors"
            onClick={onClose}
          >
            Features
          </Link>
          <Link
            to="/about"
            className="block py-3 text-white hover:text-gold transition-colors"
            onClick={onClose}
          >
            About
          </Link>
          <Link
            to="/blog"
            className="block py-3 text-white hover:text-gold transition-colors"
            onClick={onClose}
          >
            Blog
          </Link>
          <Link
            to="/docs"
            className="block py-3 text-white hover:text-gold transition-colors"
            onClick={onClose}
          >
            Documentation
          </Link>
          <Link
            to="/community"
            className="block py-3 text-white hover:text-gold transition-colors"
            onClick={onClose}
          >
            Community
          </Link>
          <Link
            to="/donate"
            className="block py-3 text-white hover:text-gold transition-colors"
            onClick={onClose}
          >
            Donate
          </Link>

          <div className="mt-4 space-y-2 px-2">
            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="block py-2 text-white hover:text-gold"
                  onClick={onClose}
                >
                  Dashboard
                </Link>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="secondary"
                  className="w-full"
                  icon={<LogIn className="w-4 h-4" />}
                  onClick={() => {
                    navigate('/signin');
                    onClose();
                  }}
                >
                  Sign In
                </Button>
                <Button
                  variant="primary"
                  className="w-full"
                  icon={<UserPlus className="w-4 h-4" />}
                  onClick={() => {
                    navigate('/signup');
                    onClose();
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}