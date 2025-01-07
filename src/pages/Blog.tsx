import React from 'react';
import Card from '../components/ui/Card';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI Marketplaces',
    excerpt: 'Exploring how decentralized platforms are reshaping AI distribution...',
    author: 'John Doe',
    date: '2024-03-01',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: 2,
    title: 'Building Ethical AI Models',
    excerpt: 'Best practices for developing responsible AI solutions...',
    author: 'Jane Smith',
    date: '2024-02-28',
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Latest Updates</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}