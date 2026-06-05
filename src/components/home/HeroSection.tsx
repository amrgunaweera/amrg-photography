import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Wedding Photography" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 z-20 text-center flex flex-col items-center mt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand-gold uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6 block"
        >
          Nature & Travel Photography
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Capturing the <br className="md:hidden" />
          <span className="italic font-light">World's</span> Wonders
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 font-light"
        >
          Specializing in majestic landscapes, intimate macro details, and profound visual storytelling across the globe.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Button to="/portfolio" size="lg" className="px-10">
            View Portfolio
          </Button>
          <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black">
            Inquire for Prints
          </Button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-white/60 text-xs uppercase tracking-widest mb-2 font-medium">Scroll Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-brand-gold" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};
