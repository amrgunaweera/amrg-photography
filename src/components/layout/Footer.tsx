import React from 'react';
import { Link } from 'react-router';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-gray-dark dark:bg-black text-brand-white-dark py-16 mt-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-3xl font-heading font-bold tracking-wider text-white mb-6 inline-block">
              AMRG<span className="text-brand-gold">.</span>
            </Link>
            <p className="text-brand-white-dark/70 text-sm leading-relaxed max-w-xs">
              Capturing the raw beauty of our natural world with an adventurer's spirit and a timeless aesthetic.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/portfolio" className="hover:text-brand-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Me</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-brand-white-dark/70">
              <li>hello@amrgphotography.com</li>
              <li>+1 (555) 123-4567</li>
              <li>New York, NY</li>
              <li className="pt-2">
                <Link to="/contact" className="text-brand-gold hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold">
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6">Follow</h4>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-xs uppercase tracking-widest hover:text-brand-gold transition-colors">IG</a>
              <a href="#" className="text-xs uppercase tracking-widest hover:text-brand-gold transition-colors">FB</a>
              <a href="#" className="text-xs uppercase tracking-widest hover:text-brand-gold transition-colors">X</a>
              <a href="#" className="text-xs uppercase tracking-widest hover:text-brand-gold transition-colors">IN</a>
            </div>
          </div>
          
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-brand-white-dark/50">
          <p>&copy; {currentYear} AMRG Photography. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
