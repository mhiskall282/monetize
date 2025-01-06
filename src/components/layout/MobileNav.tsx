import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
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
            to="/pricing"
            className="block py-3 text-white hover:text-gold transition-colors"
            onClick={onClose}
          >
            Pricing
          </Link>
          <Link
            to="/team"
            className="block py-3 text-white hover:text-gold transition-colors"
            onClick={onClose}
          >
            Team
          </Link>
          <Link
            to="/contact"
            className="block py-3 text-white hover:text-gold transition-colors"
            onClick={onClose}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}