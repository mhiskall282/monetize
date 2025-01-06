import React from 'react';
import { Edit, Trash2, Eye } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { mockModels } from '../../data/mockData';

export default function UserModels() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Your Models</h3>
        <Button variant="primary">Upload New Model</Button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Model Name</th>
              <th className="text-left py-3">Category</th>
              <th className="text-left py-3">Downloads</th>
              <th className="text-left py-3">Revenue</th>
              <th className="text-left py-3">Status</th>
              <th className="text-left py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockModels.map((model) => (
              <tr key={model.id} className="border-b">
                <td className="py-3">{model.name}</td>
                <td className="py-3">{model.category}</td>
                <td className="py-3">{model.downloads}</td>
                <td className="py-3">${(model.price * model.downloads).toLocaleString()}</td>
                <td className="py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Active
                  </span>
                </td>
                <td className="py-3">
                  <div className="flex space-x-2">
                    <button className="p-1 hover:text-gold">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:text-gold">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}