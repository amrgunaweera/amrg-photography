import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { LazyImage } from '../ui/LazyImage';
import { getFeaturedWork } from '../../data/portfolio';

export const FeaturedWork: React.FC = () => {
  const featuredWork = getFeaturedWork().slice(0, 6);

  return (
    <section className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Selected Works" 
          subtitle="Portfolio" 
          align="center" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
          {featuredWork.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden aspect-[4/5] bg-gray-200 dark:bg-gray-800 cursor-pointer"
            >
              <LazyImage 
                src={item.imageUrl} 
                alt={item.title} 
                imageClassName="transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.category}
                </span>
                <h3 className="text-white text-2xl font-heading transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button to="/portfolio" variant="primary">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};
