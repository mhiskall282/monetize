import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedModels from '../components/home/FeaturedModels';
import { motion } from 'framer-motion';
import { Brain, Shield, Zap, Users } from 'lucide-react';

export default function Landing() {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-gold" />,
      title: 'Advanced AI Models',
      description: 'Access state-of-the-art AI models for various applications'
    },
    {
      icon: <Shield className="w-12 h-12 text-gold" />,
      title: 'Secure Transactions',
      description: 'Blockchain-powered security for all model transactions'
    },
    {
      icon: <Zap className="w-12 h-12 text-gold" />,
      title: 'Fast Integration',
      description: 'Quick and easy integration with your existing projects'
    },
    {
      icon: <Users className="w-12 h-12 text-gold" />,
      title: 'Community Driven',
      description: 'Join a thriving community of AI developers and enthusiasts'
    }
  ];

  return (
    <div className="bg-black">
      <HeroSection />
      
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-900 p-8 rounded-lg"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedModels />
    </div>
  );
}