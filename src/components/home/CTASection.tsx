import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Mountains Landscape" 
          className="w-full h-full object-cover grayscale opacity-50"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-brand-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4 block"
        >
          Availability for 2026 / 2027
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight"
        >
          Let's Create Something <br />
          <span className="italic font-light">Beautiful</span> Together
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-white/80 mb-12 max-w-2xl mx-auto"
        >
          Now accepting inquiries for fine art print acquisitions, travel commissions, and upcoming workshops. I take on a limited number of projects each year to ensure the highest quality experience.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button to="/contact" size="lg" className="px-12 bg-brand-gold hover:bg-white hover:text-black">
            Inquire Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
