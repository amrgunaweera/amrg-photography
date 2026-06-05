import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { LazyImage } from '../ui/LazyImage';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <AnimatedSection animation="fade-in" className="relative z-10">
              <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0">
                <LazyImage 
                  src="https://images.unsplash.com/photo-1542044896530-05d3c054e276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Nature Photographer" 
                />
              </div>
            </AnimatedSection>
            
            {/* Decorative Elements */}
            <AnimatedSection delay={0.3} className="absolute -bottom-10 -right-10 w-64 h-64 border border-brand-gold/30 -z-0 hidden md:block" />
            <AnimatedSection delay={0.4} className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gray-light dark:bg-brand-gray -z-0 hidden md:block" />
          </div>
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <SectionHeading 
              title="The Art of Storytelling" 
              subtitle="Behind the Lens"
              align="left"
            />
            
            <AnimatedSection delay={0.2} animation="slide-up">
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                With over a decade spent exploring the world's most remote landscapes, I've dedicated my life to capturing the raw beauty, delicate intricacies, and profound scale of our natural world.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-10">
                My approach blends patience with an adventurer's spirit, resulting in imagery that feels both awe-inspiring and intimately grounded. Whether it's the vastness of an alpine ridge or the fragile detail of a morning dewdrop, I strive to create art that reconnects us to the earth.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} animation="slide-up">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-border-color py-8 mb-10">
                <div>
                  <h4 className="text-3xl font-heading font-bold text-brand-gold mb-1">10+</h4>
                  <p className="text-sm text-text-secondary uppercase tracking-wider">Years Exp.</p>
                </div>
                <div>
                  <h4 className="text-3xl font-heading font-bold text-brand-gold mb-1">30+</h4>
                  <p className="text-sm text-text-secondary uppercase tracking-wider">Countries</p>
                </div>
                <div>
                  <h4 className="text-3xl font-heading font-bold text-brand-gold mb-1">15</h4>
                  <p className="text-sm text-text-secondary uppercase tracking-wider">Exhibitions</p>
                </div>
                <div>
                  <h4 className="text-3xl font-heading font-bold text-brand-gold mb-1">1M+</h4>
                  <p className="text-sm text-text-secondary uppercase tracking-wider">Prints Sold</p>
                </div>
              </div>
              
              <Button to="/about" variant="outline">
                Read My Story
              </Button>
            </AnimatedSection>
          </div>
          
        </div>
      </div>
    </section>
  );
};
