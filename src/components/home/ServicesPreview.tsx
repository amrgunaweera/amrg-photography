import React from 'react';
import { Camera, Image as ImageIcon, Heart } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Button } from '../ui/Button';

const services = [
  {
    icon: <ImageIcon size={32} strokeWidth={1.5} className="text-brand-gold mb-6" />,
    title: "Fine Art Prints",
    desc: "Museum-quality, archival prints of landscapes and macro subjects, available in limited editions for collectors and home decor."
  },
  {
    icon: <Camera size={32} strokeWidth={1.5} className="text-brand-gold mb-6" />,
    title: "Travel Commissions",
    desc: "Available for assignment-based travel, eco-tourism campaigns, and remote landscape documentation worldwide."
  },
  {
    icon: <Heart size={32} strokeWidth={1.5} className="text-brand-gold mb-6" />,
    title: "Workshops & Mentorship",
    desc: "Join me in the field for immersive photography workshops focused on mastering natural light, composition, and macro techniques."
  }
];

export const ServicesPreview: React.FC = () => {
  return (
    <section className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Offerings" 
          subtitle="Services" 
          align="center" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-16">
          {services.map((service, idx) => (
            <AnimatedSection 
              key={idx}
              delay={idx * 0.15}
              className="bg-bg-primary p-10 border border-border-color hover:-translate-y-2 transition-transform duration-300"
            >
              {service.icon}
              <h3 className="text-2xl font-heading mb-4">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                {service.desc}
              </p>
              <span className="text-brand-gold text-sm font-semibold tracking-wider uppercase flex items-center hover:text-brand-gold-dark transition-colors cursor-pointer">
                Discover More <span className="ml-2">→</span>
              </span>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="text-center">
          <Button to="/services" variant="outline">
            View Pricing & Packages
          </Button>
        </div>
      </div>
    </section>
  );
};
