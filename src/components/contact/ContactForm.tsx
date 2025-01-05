import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
      
      <Input
        label="Name"
        type="text"
        placeholder="Your name"
        required
      />
      
      <Input
        label="Email"
        type="email"
        placeholder="your@email.com"
        required
      />
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
          rows={5}
          placeholder="Your message"
          required
        />
      </div>

      <Button type="submit" variant="primary" className="w-full">
        Send Message
      </Button>
    </form>
  );
}