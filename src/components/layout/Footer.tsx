import React from 'react';
import { Brain, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="w-6 h-6 text-gold" />
              <span className="text-xl font-bold text-gold">Monetize</span>
            </div>
            <p className="text-gray-400">
              The premier marketplace for AI and ML models.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/marketplace" className="text-gray-400 hover:text-gold">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-gold">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-gold">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/docs" className="text-gray-400 hover:text-gold">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-gold">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-gold">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/blackstechafrica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/blackstechafrica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/company/blackstechafrica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Monetize. All rights reserved.
            </p>
            <p className="text-gray-400 mt-2 md:mt-0">
              Developed by{' '}
              <a
                href="https://blackstechafrica.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-yellow-500"
              >
                Blacks Tech Africa
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}