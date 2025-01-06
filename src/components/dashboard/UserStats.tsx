import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Download, DollarSign, Star, Clock } from 'lucide-react';
import Card from '../ui/Card';

const earningsData = [
  { month: 'Jan', earnings: 2400 },
  { month: 'Feb', earnings: 1398 },
  { month: 'Mar', earnings: 9800 },
  { month: 'Apr', earnings: 3908 },
  { month: 'May', earnings: 4800 },
  { month: 'Jun', earnings: 3800 },
];

export default function UserStats() {
  const stats = [
    {
      title: 'Total Downloads',
      value: '2,345',
      icon: <Download className="w-6 h-6 text-gold" />,
      change: '+12%'
    },
    {
      title: 'Total Earnings',
      value: '$12,456',
      icon: <DollarSign className="w-6 h-6 text-gold" />,
      change: '+25%'
    },
    {
      title: 'Average Rating',
      value: '4.8',
      icon: <Star className="w-6 h-6 text-gold" />,
      change: '+5%'
    },
    {
      title: 'Active Models',
      value: '8',
      icon: <Clock className="w-6 h-6 text-gold" />,
      change: '+2'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-black/5 rounded-lg">{stat.icon}</div>
              <span className="text-sm text-green-500">{stat.change}</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-6">Monthly Earnings</h3>
        <BarChart width={600} height={300} data={earningsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="earnings" fill="#FFD700" />
        </BarChart>
      </Card>
    </div>
  );
}