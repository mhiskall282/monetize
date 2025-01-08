import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, LifeBuoy, Headphones, FileQuestion } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Card from '../components/ui/Card';

const supportOptions = [
  {
    icon: <MessageCircle className="w-8 h-8 text-gold" />,
    title: 'Live Chat Support',
    description: 'Get instant help from our support team',
    availability: '24/7',
    responseTime: 'Average response time: 2 minutes'
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-gold" />,
    title: 'Technical Support',
    description: 'Expert assistance for technical issues',
    availability: 'Mon-Fri, 9AM-6PM WAT',
    responseTime: 'Response within 4 hours'
  },
  {
    icon: <Headphones className="w-8 h-8 text-gold" />,
    title: 'Customer Service',
    description: 'General inquiries and account support',
    availability: 'Mon-Sat, 8AM-8PM WAT',
    responseTime: 'Response within 24 hours'
  },
  {
    icon: <FileQuestion className="w-8 h-8 text-gold" />,
    title: 'Documentation',
    description: 'Comprehensive guides and FAQs',
    availability: 'Available 24/7',
    responseTime: 'Self-service'
  }
];

const faqItems = [
  {
    question: 'How do I get started with MonetizeAI?',
    answer: 'Sign up for an account, verify your email, and you can start exploring or uploading AI models immediately.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit cards, PayPal, and various cryptocurrency payments including ETH and BTC.'
  },
  {
    question: 'How is the revenue share calculated?',
    answer: 'Model creators receive 80% of the sale price, while 20% goes to platform maintenance and development.'
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ContactForm />
          <ContactInfo />
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Support Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{option.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="mt-auto">
                    <p className="text-sm font-medium text-gold">{option.availability}</p>
                    <p className="text-sm text-gray-500">{option.responseTime}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}