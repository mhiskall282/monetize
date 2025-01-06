import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu } from 'lucide-react';
import ConnectWallet from '../blockchain/ConnectWallet';
import MobileNav from './MobileNav';

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="bg-black py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Brain className="w-8 h-8 text-gold" />
          <span className="text-2xl font-bold text-gold">Monetize</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/marketplace"
            className="text-white hover:text-gold transition-colors"
          >
            Marketplace
          </Link>
          <Link
            to="/features"
            className="text-white hover:text-gold transition-colors"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="text-white hover:text-gold transition-colors"
          >
            Pricing
          </Link>
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