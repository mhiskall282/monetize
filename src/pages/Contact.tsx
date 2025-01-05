import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}