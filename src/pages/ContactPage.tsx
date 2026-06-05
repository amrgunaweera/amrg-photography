import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { Button } from '../components/ui/Button';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "Contact | AMRG Photography";
  }, []);

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate Formspree submission
    setTimeout(() => {
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <SectionHeading 
              title="Get in Touch" 
              subtitle="Let's Connect"
              align="left"
              className="mb-8"
            />
            
            <AnimatedSection animation="fade-in" delay={0.2}>
              <p className="text-text-secondary leading-relaxed mb-12">
                I'd love to hear about your plans. Please fill out the form with as many details as possible, and I'll get back to you within 48 hours.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="text-brand-gold mr-4 shrink-0" size={24} />
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1">Email</h4>
                    <a href="mailto:hello@amrgphotography.com" className="text-text-secondary hover:text-brand-gold transition-colors">
                      hello@amrgphotography.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-brand-gold mr-4 shrink-0" size={24} />
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1">Phone</h4>
                    <a href="tel:+15551234567" className="text-text-secondary hover:text-brand-gold transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-brand-gold mr-4 shrink-0" size={24} />
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-1">Studio</h4>
                    <p className="text-text-secondary">
                      123 Creative Studio Way<br />
                      New York, NY 10001<br />
                      (By Appointment Only)
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <AnimatedSection animation="slide-up" delay={0.4} className="bg-bg-secondary p-8 md:p-12 border border-border-color">
              {formStatus === 'success' ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6">
                    <Mail className="text-brand-gold" size={32} />
                  </div>
                  <h3 className="text-2xl font-heading mb-4">Thank you for your inquiry</h3>
                  <p className="text-text-secondary max-w-md">
                    Your message has been received. I'll review your details and get back to you very soon to discuss your vision.
                  </p>
                  <Button 
                    className="mt-8" 
                    variant="outline" 
                    onClick={() => setFormStatus('idle')}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full bg-bg-primary border border-border-color px-4 py-3 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full bg-bg-primary border border-border-color px-4 py-3 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="date" className="block text-sm font-medium">Event Date</label>
                      <input 
                        type="date" 
                        id="date" 
                        className="w-full bg-bg-primary border border-border-color px-4 py-3 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="type" className="block text-sm font-medium">Inquiry Type</label>
                      <select 
                        id="type" 
                        className="w-full bg-bg-primary border border-border-color px-4 py-3 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="print">Fine Art Print Order</option>
                        <option value="commission">Travel/Commercial Commission</option>
                        <option value="licensing">Image Licensing</option>
                        <option value="workshop">Workshop Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">Message Details *</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      required
                      placeholder="Tell me about your vision, venue, style, and what's most important to you..."
                      className="w-full bg-bg-primary border border-border-color px-4 py-3 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors resize-y"
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full md:w-auto"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                  </Button>
                </form>
              )}
            </AnimatedSection>
          </div>
          
        </div>
      </div>
    </div>
  );
};
