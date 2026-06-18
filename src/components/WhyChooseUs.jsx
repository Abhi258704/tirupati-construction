'use client';

import { motion } from 'framer-motion';
import { Zap, Users, Award, Clock, TrendingUp, Target } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every project meets stringent quality standards with regular inspections and testing.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Qualified engineers, supervisors, and skilled workers with extensive industry experience.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Efficient project management ensures timely completion without compromising quality.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: '50+ successful projects and 100% client satisfaction across diverse sectors.'
    },
    {
      icon: Target,
      title: 'Safety First',
      description: 'Highest health and safety standards implemented on all project sites.'
    },
    {
      icon: Zap,
      title: 'Modern Technology',
      description: 'State-of-the-art equipment and latest construction techniques for optimal results.'
    }
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-slate-dark mb-4">Why Choose Tirupati Construction?</h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            We distinguish ourselves through unwavering commitment to quality, safety, and client satisfaction on every project.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-primary/50 transition-all group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-teal-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-primary/30 transition-colors">
                    <Icon className="text-teal-primary" size={24} />
                  </div>
                  <h4 className="font-bold text-slate-dark mb-2 group-hover:text-teal-primary transition-colors">
                    {reason.title}
                  </h4>
                  <p className="text-sm text-gray-600">{reason.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right - Comparison / Value Props */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-teal-primary/10 to-transparent rounded-xl p-8 border border-teal-primary/20">
              <h3 className="text-2xl font-bold text-slate-dark mb-4">Our Commitment</h3>
              <div className="space-y-4">
                {[
                  'ISO Certified Quality Standards',
                  'Professional Project Management',
                  'Transparent Communication',
                  'Cost-Effective Solutions',
                  'Timely Project Delivery',
                  'Lifetime Support'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-teal-primary flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Box */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-dark text-white rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold mb-2">14+</div>
                <p className="text-sm opacity-90">Years in Business</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-teal-primary text-white rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-sm opacity-90">Projects Delivered</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-dark to-slate rounded-2xl p-8 sm:p-12 text-white text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Trusted by Industry Leaders</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our work has earned the trust of leading industrial companies, government institutions, and commercial establishments across India.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {['Galada Power', 'Nemi Industries', 'Swastik Production', 'A-1 Fence Products'].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20"
              >
                <p className="text-sm font-semibold">{client}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
