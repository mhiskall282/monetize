import React from 'react';
import { Download } from 'lucide-react';
import { Model } from '../types';

interface ModelCardProps {
  model: Model;
}

export default function ModelCard({ model }: ModelCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img 
        src={model.imageUrl} 
        alt={model.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
        <p className="text-gray-600 mb-4">{model.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-black">
            ${model.price.toLocaleString()}
          </span>
          <button className="bg-black text-gold px-4 py-2 rounded-md flex items-center hover:bg-gray-900 transition">
            <Download className="w-4 h-4 mr-2" />
            Download
          </button>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>{model.category}</span>
          <span>⭐ {model.rating}</span>
          <span>{model.downloads} downloads</span>
        </div>
      </div>
    </div>
  );
}