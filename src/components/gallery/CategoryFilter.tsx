import React from 'react';
import { motion } from 'motion/react';
import type { Category } from '../../data/portfolio';

interface CategoryFilterProps {
  categories: Category[] | ['All'];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory
}) => {
  const allCategories = ['All', ...categories];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`relative px-4 py-2 text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
            activeCategory === category 
              ? 'text-brand-gold' 
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          {category}
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};
