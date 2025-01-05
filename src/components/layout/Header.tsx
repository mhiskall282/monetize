import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Upload, User, Search } from 'lucide-react';
import ConnectWallet from '../blockchain/ConnectWallet';

export default function Header() {
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
          <Link
            to="/upload"
            className="flex items-center text-white hover:text-gold transition-colors"
          >
            <Upload className="w-4 h-4 mr-1" />
            Upload
          </Link>
          <Link
            to="/profile"
            className="text-white hover:text-gold transition-colors"
          >
            <User className="w-5 h-5" />
          </Link>
          <ConnectWallet />
        </nav>
      </div>
    </header>
  );
}