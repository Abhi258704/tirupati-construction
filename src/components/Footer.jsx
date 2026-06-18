'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ['About Us', 'Our Services', 'Projects', 'Why Choose Us'],
    Services: ['Industrial Construction', 'Warehouse Building', 'Road Work', 'Land Development'],
    Resources: ['Gallery', 'Equipment', 'Clients', 'FAQ'],
    Legal: ['Privacy Policy', 'Terms & Conditions', 'Contact Info']
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-slate-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 sm:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16 pb-16 border-b border-white/20"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-teal-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <h3 className="font-bold text-lg">TIRUPATI</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leading construction contractor in D&NH region, building excellence since 2012.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Linkedin, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal-primary transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div key={category} variants={itemVariants}>
              <h4 className="font-bold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-teal-bright transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 pb-16 border-b border-white/20"
        >
          <motion.a
            variants={itemVariants}
            href="tel:9898670453"
            className="group flex items-start gap-4 hover:text-teal-bright transition-colors"
          >
            <div className="w-12 h-12 bg-teal-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal-primary/40 transition-colors">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-400">Phone</p>
              <p className="font-semibold">+91 98986 70453</p>
              <p className="text-sm text-gray-400">+91 70439 62610</p>
            </div>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="mailto:janralsingh99@gmail.com"
            className="group flex items-start gap-4 hover:text-teal-bright transition-colors"
          >
            <div className="w-12 h-12 bg-teal-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal-primary/40 transition-colors">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-400">Email</p>
              <p className="font-semibold break-all">janralsingh99@gmail.com</p>
            </div>
          </motion.a>

          <motion.div
            variants={itemVariants}
            className="group flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-teal-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-400">Address</p>
              <p className="font-semibold text-sm">402, Mahaveer Galaxy</p>
              <p className="text-sm text-gray-400">Umbergaon (east) -396 170</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-400"
        >
          <p>© {currentYear} Tirupati Construction. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-teal-bright transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-bright transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-teal-bright transition-colors">Sitemap</a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-teal-primary hover:bg-teal-bright text-white rounded-lg flex items-center justify-center shadow-lg transition-colors z-40"
      >
        ↑
      </motion.button>
    </footer>
  );
}
