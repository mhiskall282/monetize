import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Card from '../ui/Card';

const performanceData = [
  { name: 'Jan', accuracy: 85, latency: 120 },
  { name: 'Feb', accuracy: 88, latency: 115 },
  { name: 'Mar', accuracy: 87, latency: 118 },
  { name: 'Apr', accuracy: 89, latency: 110 },
  { name: 'May', accuracy: 91, latency: 105 },
  { name: 'Jun', accuracy: 92, latency: 100 },
];

interface ModelAnalyticsProps {
  modelId: string;
}

export default function ModelAnalytics({ modelId }: ModelAnalyticsProps) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-6">Model Performance Analytics</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-medium mb-4">Performance Metrics</h4>
          <LineChart width={500} height={300} data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="accuracy" stroke="#FFD700" />
            <Line type="monotone" dataKey="latency" stroke="#82ca9d" />
          </LineChart>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-2">Key Metrics</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/5 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Average Accuracy</p>
                <p className="text-2xl font-bold text-gold">88.67%</p>
              </div>
              <div className="bg-black/5 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Average Latency</p>
                <p className="text-2xl font-bold text-gold">111ms</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-2">Usage Statistics</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/5 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Total Downloads</p>
                <p className="text-2xl font-bold text-gold">1,234</p>
              </div>
              <div className="bg-black/5 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-gold">567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}