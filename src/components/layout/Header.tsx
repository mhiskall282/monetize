import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, Menu, LogIn, UserPlus } from 'lucide-react';
import ConnectWallet from '../blockchain/ConnectWallet';
import MobileNav from './MobileNav';
import Button from '../ui/Button';

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('user') || localStorage.getItem('isAdmin');

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAdmin');
    navigate('/');
  };

  return (
    <header className="bg-black py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Brain className="w-8 h-8 text-gold" />
          <span className="text-2xl font-bold text-gold">Monetize</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/marketplace" className="text-white hover:text-gold">Marketplace</Link>
          <Link to="/features" className="text-white hover:text-gold">Features</Link>
          <Link to="/about" className="text-white hover:text-gold">About</Link>
          <Link to="/blog" className="text-white hover:text-gold">Blog</Link>
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="text-white hover:text-gold">Dashboard</Link>
              <Button variant="secondary" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Button 
                variant="secondary" 
                icon={<LogIn className="w-4 h-4" />}
                onClick={() => navigate('/signin')}
              >
                Sign In
              </Button>
              <Button 
                variant="primary" 
                icon={<UserPlus className="w-4 h-4" />}
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </Button>
            </>
          )}
          <ConnectWallet />
        </nav>

        <button
          className="md:hidden text-white hover:text-gold"
          onClick={() => setIsMobileNavOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        <MobileNav
          isOpen={isMobileNavOpen}
          onClose={() => setIsMobileNavOpen(false)}
        />
      </div>
    </header>
  );
}