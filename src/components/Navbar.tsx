import React from 'react';
import { Search, Upload, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gold">
          Monetize
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/marketplace" className="text-white hover:text-gold transition">
            Marketplace
          </Link>
          <Link to="/upload" className="flex items-center text-white hover:text-gold transition">
            <Upload className="w-4 h-4 mr-1" />
            Upload
          </Link>
          <Link to="/profile" className="text-white hover:text-gold transition">
            <User className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}