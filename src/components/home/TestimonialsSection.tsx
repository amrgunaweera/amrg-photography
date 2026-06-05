import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedSection } from '../ui/AnimatedSection';

const testimonials = [
  {
    id: 1,
    name: "National Geographic Traveler",
    event: "Editorial Feature",
    quote: "AMRG's ability to capture the soul of a landscape is unparalleled. The images brought our Patagonia feature to life, offering a perspective that feels both intimate and impossibly grand. Truly masterclass photography.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    event: "Print Collector",
    quote: "I purchased the 'Misty Mountains' limited edition print for my home. The quality, the tones, and the emotion it evokes every time I look at it are incredible. It's like having a window to the wild right in my living room.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    event: "Workshop Attendee",
    quote: "Attending the Iceland photography workshop was a transformative experience. AMRG is not only a visionary photographer but an exceptional mentor who generously shares knowledge about composition, light, and respecting the environment.",
    rating: 5
  }
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Client Stories" 
          subtitle="Testimonials" 
          align="center" 
        />
        
        <AnimatedSection className="max-w-4xl mx-auto relative mt-16">
          {/* Large Quote Mark Decoration */}
          <div className="absolute top-0 left-0 text-[120px] md:text-[200px] text-brand-gold/10 font-heading leading-none -translate-y-10 -translate-x-4 md:-translate-x-12 select-none z-0">
            "
          </div>
          
          <div className="relative z-10 min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full text-center px-4 md:px-12"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-brand-gold fill-brand-gold mx-1" />
                  ))}
                </div>
                
                <p className="text-xl md:text-3xl font-heading leading-relaxed mb-10 text-text-primary italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-text-secondary uppercase tracking-widest mt-1">
                    {testimonials[currentIndex].event}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Controls */}
          <div className="flex justify-center items-center space-x-6 mt-12">
            <button 
              onClick={prev}
              className="p-3 rounded-full border border-border-color hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8 bg-brand-gold' : 'bg-border-color hover:bg-brand-gold/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="p-3 rounded-full border border-border-color hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
