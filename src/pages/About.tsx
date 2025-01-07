import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Award, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">About MonetizeAI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering AI innovation through decentralized collaboration and fair monetization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To create a thriving ecosystem where AI developers can share their innovations
              and be fairly compensated for their contributions to the field of artificial intelligence.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              A world where AI development is democratized, accessible, and rewards innovation
              through transparent and fair mechanisms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="w-12 h-12 text-gold mb-4" />
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p className="text-gray-600">
              Committed to maintaining the highest standards in AI model quality and security.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="w-12 h-12 text-gold mb-4" />
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-gray-600">
              Building a strong community of AI developers and enthusiasts.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Globe className="w-12 h-12 text-gold mb-4" />
            <h3 className="text-xl font-bold mb-2">Global Impact</h3>
            <p className="text-gray-600">
              Making AI accessible to developers worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}