import React, { useState } from 'react';
import { Search } from 'lucide-react';
import ModelGrid from '../components/models/ModelGrid';
import ModelFilters from '../components/models/ModelFilters';
import Input from '../components/ui/Input';
import { mockModels } from '../data/mockData';
import { Model } from '../types';

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const handleModelDownload = (model: Model) => {
    // Implement download logic
    console.log('Downloading model:', model.name);
  };

  const filteredModels = mockModels.filter(model => {
    const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         model.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || model.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">AI Model Marketplace</h1>
          
          <div className="relative mb-6">
            <Input
              type="text"
              placeholder="Search models..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12"
            />
            <Search className="absolute left-4 top-3 text-gray-400" />
          </div>

          <ModelFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onSortChange={setSortBy}
          />
        </div>

        <ModelGrid
          models={filteredModels}
          onModelDownload={handleModelDownload}
        />
      </div>
    </div>
  );
}