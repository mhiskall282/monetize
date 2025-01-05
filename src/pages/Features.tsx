import React from 'react';
import { Brain, Bot, Cpu, Network, Lock, Globe } from 'lucide-react';
import Card from '../components/ui/Card';

const features = [
  {
    icon: <Brain className="w-8 h-8 text-gold" />,
    title: 'Advanced AI Models',
    description: 'Access state-of-the-art AI models for various applications'
  },
  {
    icon: <Bot className="w-8 h-8 text-gold" />,
    title: 'Machine Learning',
    description: 'Cutting-edge ML algorithms and pre-trained models'
  },
  {
    icon: <Network className="w-8 h-8 text-gold" />,
    title: 'Blockchain Security',
    description: 'Decentralized model ownership and secure transactions'
  },
  {
    icon: <Cpu className="w-8 h-8 text-gold" />,
    title: 'Smart Contracts',
    description: 'Automated licensing and revenue distribution'
  },
  {
    icon: <Lock className="w-8 h-8 text-gold" />,
    title: 'Secure Storage',
    description: 'Encrypted model storage with blockchain verification'
  },
  {
    icon: <Globe className="w-8 h-8 text-gold" />,
    title: 'Global Access',
    description: 'Worldwide marketplace for AI/ML models'
  }
];

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Platform Features</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}