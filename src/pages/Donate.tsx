import React from 'react';
import { Heart, Award, Users } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Donate() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us democratize AI development and create opportunities for developers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center">
            <Heart className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Support Innovation</h3>
            <p className="text-gray-600">Fund groundbreaking AI research and development</p>
          </Card>
          <Card className="p-6 text-center">
            <Award className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Enable Education</h3>
            <p className="text-gray-600">Provide resources for AI education initiatives</p>
          </Card>
          <Card className="p-6 text-center">
            <Users className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Build Community</h3>
            <p className="text-gray-600">Support developer meetups and events</p>
          </Card>
        </div>

        <Card className="p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Make a Donation</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[10, 25, 50].map((amount) => (
              <Button
                key={amount}
                variant="outline"
                className="text-xl py-4"
              >
                ${amount}
              </Button>
            ))}
          </div>
          <Button variant="primary" className="w-full mb-4">
            Custom Amount
          </Button>
          <p className="text-sm text-gray-500 text-center">
            All donations are secured by blockchain technology
          </p>
        </Card>
      </div>
    </div>
  );
}