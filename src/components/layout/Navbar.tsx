import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const navbarBg = isScrolled 
    ? 'bg-white/90 dark:bg-brand-black/90 backdrop-blur-md shadow-sm' 
    : 'bg-transparent';
  
  const textColor = isScrolled
    ? 'text-brand-gray dark:text-brand-white'
    : location.pathname === '/' 
      ? 'text-white' // Always white on home hero
      : 'text-brand-gray dark:text-brand-white';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className={`text-2xl font-heading font-bold tracking-wider ${textColor}`}>
          AMRG<span className="text-brand-gold">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-medium tracking-wide hover:text-brand-gold transition-colors ${textColor}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 ${textColor}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-white dark:bg-brand-black z-40 flex flex-col items-center justify-center space-y-8"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-brand-gray dark:text-brand-white"
            >
              <X size={32} />
            </button>
            
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="text-2xl font-heading font-medium tracking-wide text-brand-gray dark:text-brand-white hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
