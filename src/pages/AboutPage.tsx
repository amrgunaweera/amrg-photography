import React, { useEffect } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AnimatedSection } from '../components/ui/AnimatedSection';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "About | AMRG Photography";
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading 
          title="The Storyteller" 
          subtitle="About Me"
          align="center"
        />

        <div className="flex flex-col md:flex-row gap-16 mt-16">
          <div className="w-full md:w-1/2">
            <AnimatedSection animation="fade-in">
              <img 
                src="https://images.unsplash.com/photo-1542044896530-05d3c054e276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Nature Photographer" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </AnimatedSection>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <AnimatedSection delay={0.2} animation="slide-up">
              <h3 className="text-3xl font-heading mb-6">Hello, I'm Alex.</h3>
              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p>
                  My journey with photography began over a decade ago when I first hiked into the backcountry. What started as a fascination with dramatic light and weather quickly blossomed into a lifelong passion for environmental storytelling.
                </p>
                <p>
                  I believe that the most profound images are those that evoke a sense of scale and wonder. My approach is patient and deeply intentional. I look for the fleeting moments where light perfectly sculpts the landscape—the golden glow on a distant peak, the quiet mist rolling through a valley, the unscripted chaos of a storm breaking.
                </p>
                <p>
                  My work has been featured in top nature and travel publications, and I've had the honor of documenting fragile ecosystems across the globe. But at the core, my mission remains simple: to create timeless art that inspires conservation and connects us back to the wild.
                </p>
              </div>
              
              <div className="mt-12">
                <img src="/signature.png" alt="Signature" className="h-12 opacity-50 dark:invert" onError={(e) => e.currentTarget.style.display = 'none'} />
                <div className="h-12 flex items-center font-heading italic text-xl text-brand-gold">
                  AMRG
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};
