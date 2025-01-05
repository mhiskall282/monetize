import { Model, User } from '../types';

export const mockModels: Model[] = [
  {
    id: '1',
    name: 'AutoVision Pro',
    description: 'Advanced computer vision model for autonomous vehicles',
    price: 2999.99,
    category: 'Computer Vision',
    rating: 4.8,
    downloads: 1250,
    author: 'AI Labs Inc',
    createdAt: '2024-01-15',
    imageUrl: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023'
  },
  {
    id: '2',
    name: 'NLP Master',
    description: 'State-of-the-art natural language processing model',
    price: 1999.99,
    category: 'NLP',
    rating: 4.6,
    downloads: 890,
    author: 'Language AI',
    createdAt: '2024-02-01',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    id: '3',
    name: 'DroneAI',
    description: 'Drone control and navigation AI system',
    price: 3499.99,
    category: 'Robotics',
    rating: 4.9,
    downloads: 650,
    author: 'RoboTech',
    createdAt: '2024-02-15',
    imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e'
  }
];

export const mockUser: User = {
  id: '1',
  name: 'John Developer',
  email: 'john@example.com',
  models: mockModels.slice(0, 2),
  earnings: 25000,
  joinedAt: '2023-12-01'
};