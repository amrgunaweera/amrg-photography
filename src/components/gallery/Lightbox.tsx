import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { PortfolioItem } from '../../data/portfolio';

interface LightboxProps {
  items: PortfolioItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex]);

  const next = () => onNavigate((currentIndex + 1) % items.length);
  const prev = () => onNavigate((currentIndex - 1 + items.length) % items.length);

  if (!isOpen) return null;

  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      >
        {/* Header */}
        <div className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
          <div className="text-white/60 font-medium tracking-widest text-sm">
            {currentIndex + 1} / {items.length}
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-white/60 hover:text-white transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation Left */}
        <button 
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 md:left-10 p-4 text-white/50 hover:text-white transition-colors z-50"
        >
          <ChevronLeft size={40} strokeWidth={1} />
        </button>

        {/* Image */}
        <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center p-4 md:p-20" onClick={onClose}>
          <motion.img
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-w-full max-h-full object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Caption */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-10 left-0 right-0 text-center pointer-events-none"
          >
            <h3 className="text-white text-2xl font-heading mb-1">{currentItem.title}</h3>
            <span className="text-brand-gold text-xs uppercase tracking-widest">{currentItem.category}</span>
          </motion.div>
        </div>

        {/* Navigation Right */}
        <button 
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 md:right-10 p-4 text-white/50 hover:text-white transition-colors z-50"
        >
          <ChevronRight size={40} strokeWidth={1} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
