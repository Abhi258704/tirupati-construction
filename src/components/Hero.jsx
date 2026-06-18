'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-primary opacity-5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-dark opacity-5 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="flex items-center gap-2 bg-teal-primary/10 px-4 py-2 rounded-full border border-teal-primary/20">
                <CheckCircle size={18} className="text-teal-primary" />
                <span className="text-sm font-semibold text-teal-primary">14+ Years of Excellence</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="heading-xl text-slate-dark mb-6"
            >
              Building Tomorrow's<br />
              <span className="gradient-teal bg-clip-text text-transparent">Infrastructure Today</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-body text-gray-600 mb-8 max-w-2xl"
            >
              Tirupati Construction is the leading construction contractor in D&NH region, delivering iconic projects across industrial, commercial, and residential sectors with uncompromising quality and safety standards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <a href="#contact" className="btn-primary gap-2 group">
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" className="btn-secondary-dark gap-2">
                View Projects
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-gray-200"
            >
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-dark">50+</h3>
                <p className="text-sm text-gray-600 mt-2">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-dark">100%</h3>
                <p className="text-sm text-gray-600 mt-2">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-dark">14+</h3>
                <p className="text-sm text-gray-600 mt-2">Years Operating</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative h-96 sm:h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-primary to-slate-dark rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder with construction theme */}
              <div className="w-full h-full bg-gradient-to-br from-slate-dark via-teal-primary to-slate-dark flex items-center justify-center relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-float" />
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-teal-bright rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center text-white px-8">
                  <div className="text-6xl sm:text-7xl font-bold mb-4">🏗️</div>
                  <p className="text-xl sm:text-2xl font-bold">Constructing Excellence</p>
                  <p className="text-sm mt-2 opacity-80">Industrial • Commercial • Residential</p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 sm:p-6 w-4/5 sm:w-auto"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-primary/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-teal-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-dark">ISO Certified</p>
                  <p className="text-sm text-gray-600">Quality Assured</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}