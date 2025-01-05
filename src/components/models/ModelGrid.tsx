import React from 'react';
import { Model } from '../../types';
import ModelCard from './ModelCard';

interface ModelGridProps {
  models: Model[];
  onModelDownload?: (model: Model) => void;
}

export default function ModelGrid({ models, onModelDownload }: ModelGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {models.map((model) => (
        <ModelCard
          key={model.id}
          model={model}
          onDownload={onModelDownload}
        />
      ))}
    </div>
  );
}