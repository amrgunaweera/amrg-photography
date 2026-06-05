import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { motion, AnimatePresence } from 'motion/react';
import type { PortfolioItem } from '../../data/portfolio';
import { LazyImage } from '../ui/LazyImage';
import { Lightbox } from './Lightbox';

interface MasonryGalleryProps {
  items: PortfolioItem[];
}

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({ items }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  if (items.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-text-secondary text-lg">No images found for this category.</p>
      </div>
    );
  }

  return (
    <>
      <AnimatePresence mode="popLayout">
        <motion.div layout className="w-full">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}>
            <Masonry gutter="24px">
              {items.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="group relative overflow-hidden bg-gray-200 dark:bg-gray-800 cursor-pointer mb-6"
                  onClick={() => openLightbox(index)}
                >
                  <div className={`w-full ${item.aspectRatio === 'portrait' ? 'aspect-[3/4]' : item.aspectRatio === 'landscape' ? 'aspect-[4/3]' : 'aspect-square'}`}>
                    <LazyImage 
                      src={item.imageUrl} 
                      alt={item.title} 
                      imageClassName="transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.category}
                    </span>
                    <h3 className="text-white text-xl font-heading transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>
      </AnimatePresence>

      <Lightbox 
        items={items}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentIndex}
      />
    </>
  );
};
