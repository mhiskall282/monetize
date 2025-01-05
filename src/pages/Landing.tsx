import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div 
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1620712943543-bcc4688e7485)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 pt-32">
          <div className="flex items-center mb-8">
            <Brain className="w-12 h-12 text-gold mr-4" />
            <h1 className="text-6xl font-bold">Monetize</h1>
          </div>
          
          <p className="text-3xl font-light mb-8 max-w-2xl leading-relaxed">
            Transform your AI innovations into revenue. Upload, share, and monetize
            your machine learning models on the premier AI marketplace.
          </p>
          
          <div className="flex space-x-6">
            <Button
              variant="primary"
              icon={<ArrowRight className="w-5 h-5" />}
              className="text-lg px-8 py-3"
              onClick={() => window.location.href = '/marketplace'}
            >
              Explore Models
            </Button>
            <Button
              variant="outline"
              className="text-lg px-8 py-3"
              onClick={() => window.location.href = '/upload'}
            >
              Upload Your Model
            </Button>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-gold">
                Secure Transactions
              </h3>
              <p className="text-gray-300">
                Smart contract-powered licensing and secure payment processing for
                your valuable AI models.
              </p>
            </div>
            <div className="bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-gold">
                Global Reach
              </h3>
              <p className="text-gray-300">
                Connect with AI developers and businesses worldwide. Expand your
                market reach instantly.
              </p>
            </div>
            <div className="bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-gold">
                Fair Revenue
              </h3>
              <p className="text-gray-300">
                Earn more from your AI models with our competitive revenue sharing
                model and transparent pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}