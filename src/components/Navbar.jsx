'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-slate-dark to-teal-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-slate-dark text-lg">TIRUPATI</h1>
              <p className="text-teal-primary text-xs font-semibold">Construction</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-dark hover:text-teal-primary font-medium transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            href="tel:9898670453"
            className="hidden lg:flex btn-primary gap-2"
          >
            <Phone size={20} />
            Call Now
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gray-200 bg-white"
          >
            <div className="flex flex-col space-y-3 p-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-slate-dark hover:text-teal-primary font-medium py-2 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a href="tel:9898670453" className="btn-primary gap-2 mt-4">
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}