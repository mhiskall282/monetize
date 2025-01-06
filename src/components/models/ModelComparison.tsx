import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Card from '../ui/Card';

const comparisonData = [
  {
    name: 'Model A',
    accuracy: 92,
    latency: 100,
    size: 75,
  },
  {
    name: 'Model B',
    accuracy: 88,
    latency: 120,
    size: 60,
  },
  {
    name: 'Model C',
    accuracy: 85,
    latency: 90,
    size: 85,
  },
];

export default function ModelComparison() {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-6">Model Comparison</h3>
      
      <div className="overflow-x-auto">
        <BarChart width={600} height={300} data={comparisonData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="accuracy" fill="#FFD700" />
          <Bar dataKey="latency" fill="#82ca9d" />
          <Bar dataKey="size" fill="#8884d8" />
        </BarChart>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {comparisonData.map((model) => (
          <div key={model.name} className="bg-black/5 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{model.name}</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600">Accuracy:</span>
                <span className="font-medium">{model.accuracy}%</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Latency:</span>
                <span className="font-medium">{model.latency}ms</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Size:</span>
                <span className="font-medium">{model.size}MB</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
}