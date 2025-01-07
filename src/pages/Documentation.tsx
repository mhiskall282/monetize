import React from 'react';
import { Book, Code, Terminal, GitBranch } from 'lucide-react';
import Card from '../components/ui/Card';

export default function Documentation() {
  const sections = [
    {
      title: 'Getting Started',
      icon: <Book className="w-8 h-8 text-gold" />,
      items: [
        'Platform Overview',
        'Quick Start Guide',
        'Authentication',
        'Model Integration'
      ]
    },
    {
      title: 'API Reference',
      icon: <Code className="w-8 h-8 text-gold" />,
      items: [
        'REST API Endpoints',
        'WebSocket Events',
        'Error Handling',
        'Rate Limits'
      ]
    },
    {
      title: 'Smart Contracts',
      icon: <Terminal className="w-8 h-8 text-gold" />,
      items: [
        'Contract Architecture',
        'Model Ownership',
        'Payment System',
        'Security Features'
      ]
    },
    {
      title: 'Integration Guides',
      icon: <GitBranch className="w-8 h-8 text-gold" />,
      items: [
        'Web Integration',
        'Mobile SDK',
        'Cloud Deployment',
        'Model Versioning'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Documentation</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section) => (
            <Card key={section.title} className="p-6">
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-2xl font-bold ml-4">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-600 hover:text-gold cursor-pointer">
                    <span className="mr-2">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}