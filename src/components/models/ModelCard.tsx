import React from 'react';
import { Download, Star } from 'lucide-react';
import { Model } from '../../types';
import { formatCurrency, formatNumber } from '../../utils/formatters';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface ModelCardProps {
  model: Model;
  onDownload?: (model: Model) => void;
}

export default function ModelCard({ model, onDownload }: ModelCardProps) {
  return (
    <Card className="transition-transform hover:scale-105">
      <img 
        src={model.imageUrl} 
        alt={model.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold">{model.name}</h3>
          <span className="flex items-center text-sm text-gray-600">
            <Star className="w-4 h-4 text-gold mr-1" fill="currentColor" />
            {model.rating}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{model.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">
            {formatCurrency(model.price)}
          </span>
          <Button
            variant="secondary"
            icon={<Download className="w-4 h-4" />}
            onClick={() => onDownload?.(model)}
          >
            Download
          </Button>
        </div>
        
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>{model.category}</span>
          <span>{formatNumber(model.downloads)} downloads</span>
        </div>
      </div>
    </Card>
  );
}