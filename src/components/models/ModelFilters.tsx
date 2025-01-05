import React from 'react';
import { ModelCategory } from '../../types';
import Select from '../ui/Select';

interface ModelFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
}

export default function ModelFilters({
  selectedCategory,
  onCategoryChange,
  onSortChange,
}: ModelFiltersProps) {
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Computer Vision', label: 'Computer Vision' },
    { value: 'Natural Language Processing', label: 'NLP' },
    { value: 'Robotics', label: 'Robotics' },
    { value: 'Generative AI', label: 'Generative AI' },
    { value: 'Reinforcement Learning', label: 'Reinforcement Learning' },
  ];

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'recent', label: 'Recently Added' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <Select
        className="md:w-48"
        options={categories}
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        label="Category"
      />
      <Select
        className="md:w-48"
        options={sortOptions}
        onChange={(e) => onSortChange(e.target.value)}
        label="Sort by"
      />
    </div>
  );
}