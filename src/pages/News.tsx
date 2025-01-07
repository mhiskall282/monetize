import React from 'react';
import Card from '../components/ui/Card';

const newsItems = [
  {
    id: 1,
    title: 'MonetizeAI Partners with Leading Tech Companies',
    content: 'Strategic partnerships to enhance AI model distribution...',
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
  },
  {
    id: 2,
    title: 'New Blockchain Features Released',
    content: 'Enhanced security and transparency for AI model transactions...',
    date: '2024-03-03',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0'
  }
];

export default function News() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.content}</p>
                <span className="text-sm text-gray-500">
                  {new Date(item.date).toLocaleDateString()}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}