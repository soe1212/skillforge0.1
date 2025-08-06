import React, { useState } from 'react';
import { Filter, X, ChevronDown, Star, Clock, DollarSign, Users } from 'lucide-react';

interface CourseFiltersProps {
  onFiltersChange: (filters: any) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const CourseFilters: React.FC<CourseFiltersProps> = ({ onFiltersChange, isOpen, onToggle }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    level: [],
    duration: [],
    price: [],
    rating: 0,
    features: []
  });

  const filterOptions = {
    level: ['Beginner', 'Intermediate', 'Advanced', 'All Levels'],
    duration: ['0-2 hours', '3-6 hours', '7-17 hours', '17+ hours'],
    price: ['Free', 'Paid', 'Under ₹2000', '₹2000-₹5000', '₹5000+'],
    features: ['Subtitles', 'Quizzes', 'Coding Exercises', 'Practice Tests', 'Certificate']
  };

  const handleFilterChange = (category: string, value: string) => {
    const newFilters = { ...selectedFilters };
    const categoryFilters = newFilters[category as keyof typeof newFilters] as string[];
    
    if (categoryFilters.includes(value)) {
      newFilters[category as keyof typeof newFilters] = categoryFilters.filter(item => item !== value) as any;
    } else {
      newFilters[category as keyof typeof newFilters] = [...categoryFilters, value] as any;
    }
    
    setSelectedFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      level: [],
      duration: [],
      price: [],
      rating: 0,
      features: []
    };
    setSelectedFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <Filter className="w-4 h-4 mr-2" />
        Filters
      </button>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Filter className="w-5 h-5 mr-2" />
          Filters
        </h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={clearAllFilters}
            className="text-sm text-purple-600 hover:underline"
          >
            Clear all
          </button>
          <button
            onClick={onToggle}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3 flex items-center">
          <Star className="w-4 h-4 mr-2" />
          Rating
        </h4>
        <div className="space-y-2">
          {[4.5, 4.0, 3.5, 3.0].map((rating) => (
            <label key={rating} className="flex items-center">
              <input
                type="radio"
                name="rating"
                checked={selectedFilters.rating === rating}
                onChange={() => setSelectedFilters({ ...selectedFilters, rating })}
                className="mr-2"
              />
              <div className="flex items-center">
                <div className="flex items-center mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-700">{rating} & up</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Level Filter */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Level</h4>
        <div className="space-y-2">
          {filterOptions.level.map((level) => (
            <label key={level} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedFilters.level.includes(level)}
                onChange={() => handleFilterChange('level', level)}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">{level}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Duration Filter */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3 flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          Duration
        </h4>
        <div className="space-y-2">
          {filterOptions.duration.map((duration) => (
            <label key={duration} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedFilters.duration.includes(duration)}
                onChange={() => handleFilterChange('duration', duration)}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">{duration}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3 flex items-center">
          <DollarSign className="w-4 h-4 mr-2" />
          Price
        </h4>
        <div className="space-y-2">
          {filterOptions.price.map((price) => (
            <label key={price} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedFilters.price.includes(price)}
                onChange={() => handleFilterChange('price', price)}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">{price}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Features Filter */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">Features</h4>
        <div className="space-y-2">
          {filterOptions.features.map((feature) => (
            <label key={feature} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedFilters.features.includes(feature)}
                onChange={() => handleFilterChange('features', feature)}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">{feature}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseFilters;