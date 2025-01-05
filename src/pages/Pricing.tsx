import React from 'react';
import { Check } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const plans = [
  {
    name: 'Basic',
    price: 49,
    features: [
      'Access to basic AI models',
      'Standard support',
      'Basic analytics',
      'Community access'
    ]
  },
  {
    name: 'Pro',
    price: 99,
    popular: true,
    features: [
      'Access to all AI models',
      'Priority support',
      'Advanced analytics',
      'API access',
      'Custom licensing'
    ]
  },
  {
    name: 'Enterprise',
    price: 299,
    features: [
      'Custom AI model development',
      '24/7 dedicated support',
      'Full analytics suite',
      'White-label options',
      'Custom integration',
      'SLA guarantee'
    ]
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-6 ${
                plan.popular ? 'border-2 border-gold' : ''
              }`}
            >
              {plan.popular && (
                <span className="bg-gold text-black px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-gold mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? 'primary' : 'secondary'}
                className="w-full"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}