import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CategoryFilter } from '../components/gallery/CategoryFilter';
import { MasonryGallery } from '../components/gallery/MasonryGallery';
import { getPortfolioByCategory, portfolioData } from '../data/portfolio';
import type { Category } from '../data/portfolio';

export const PortfolioPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  
  // Extract unique categories from data
  const categories = Array.from(new Set(portfolioData.map(item => item.category))) as Category[];
  
  // Determine active category from URL or default to 'All'
  const initialCategory = category && categories.includes(category as Category) ? category : 'All';
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  
  useEffect(() => {
    document.title = "Portfolio | AMRG Photography";
  }, []);

  // Update active category if URL changes
  useEffect(() => {
    if (category && categories.includes(category as Category)) {
      setActiveCategory(category);
    } else if (!category) {
      setActiveCategory('All');
    }
  }, [category, categories]);

  const handleSelectCategory = (newCategory: string) => {
    setActiveCategory(newCategory);
    if (newCategory === 'All') {
      navigate('/portfolio');
    } else {
      navigate(`/portfolio/${newCategory}`);
    }
  };

  const filteredItems = getPortfolioByCategory(activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Portfolio" 
          subtitle="Selected Works"
          align="center"
          className="mb-12"
        />
        
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />
        
        <div className="mt-12">
          <MasonryGallery items={filteredItems} />
        </div>
      </div>
    </div>
  );
};
