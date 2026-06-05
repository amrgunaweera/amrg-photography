import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { AboutPreview } from '../components/home/AboutPreview';
import { FeaturedWork } from '../components/home/FeaturedWork';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CTASection } from '../components/home/CTASection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "AMRG Photography | Luxury Wedding & Portrait Photographer";
  }, []);

  return (
    <div className="w-full">
      <HeroSection />
      <AboutPreview />
      <FeaturedWork />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};
