import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: <Mail className="w-6 h-6 text-gold" />,
    title: 'Email',
    details: 'contact@monetize.ai',
    link: 'mailto:contact@monetize.ai'
  },
  {
    icon: <Phone className="w-6 h-6 text-gold" />,
    title: 'Phone',
    details: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: <MapPin className="w-6 h-6 text-gold" />,
    title: 'Location',
    details: 'Lagos, Nigeria'
  },
  {
    icon: <Clock className="w-6 h-6 text-gold" />,
    title: 'Business Hours',
    details: 'Mon - Fri: 9AM - 5PM WAT'
  }
];

export default function ContactInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="mt-1">{item.icon}</div>
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-gray-600 hover:text-gold transition-colors"
                >
                  {item.details}
                </a>
              ) : (
                <p className="text-gray-600">{item.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          {/* Add social media links here */}
        </div>
      </div>
    </div>
  );
}