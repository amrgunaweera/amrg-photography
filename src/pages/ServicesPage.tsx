import React, { useEffect } from 'react';
import { Check } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';

const packages = [
  {
    name: "Fine Art Prints",
    price: "Starting at $150",
    description: "Archival quality prints for your home or gallery.",
    features: [
      "Museum-grade Hahnemühle paper",
      "Limited edition signed prints",
      "Custom framing options",
      "Certificate of authenticity",
      "Worldwide secure shipping"
    ],
    highlighted: false
  },
  {
    name: "Travel Commissions",
    price: "Custom Quote",
    description: "Our most popular offering for brands and tourism.",
    features: [
      "Assignment-based coverage",
      "Brand & editorial licensing",
      "High-resolution digital delivery",
      "Content creation for social media",
      "Pre-production & location scouting",
      "Drone/aerial photography included"
    ],
    highlighted: true
  },
  {
    name: "Workshops",
    price: "Starting at $1,200",
    description: "Immersive field experiences and mentorship.",
    features: [
      "Small group sizes (max 6 people)",
      "1-on-1 composition guidance",
      "Post-processing masterclass",
      "Location scouting insights",
      "Portfolio review",
      "Access to private community"
    ],
    highlighted: false
  }
];

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = "Services & Pricing | AMRG Photography";
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-bg-secondary">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Investment" 
          subtitle="Services & Pricing"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <AnimatedSection 
              key={idx} 
              delay={idx * 0.2}
              className={`relative bg-bg-primary p-10 border ${pkg.highlighted ? 'border-brand-gold shadow-xl transform md:-translate-y-4' : 'border-border-color'}`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-white text-xs font-bold tracking-widest uppercase px-4 py-1">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-heading mb-2">{pkg.name}</h3>
              <p className="text-brand-gold font-medium mb-6">{pkg.price}</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-8 h-10">
                {pkg.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <Check size={18} className="text-brand-gold mr-3 mt-0.5 shrink-0" />
                    <span className="text-sm text-text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button to="/contact" variant={pkg.highlighted ? 'primary' : 'outline'} className="w-full">
                Inquire Now
              </Button>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};
