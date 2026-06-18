'use client';

import { motion } from 'framer-motion';
import { Building2, Warehouse, Hammer, Zap, Truck, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Building Construction',
      description: 'Commercial and residential structures with modern design and superior craftsmanship',
      color: 'from-blue-500/20'
    },
    {
      icon: Warehouse,
      title: 'Industrial Sheds',
      description: 'Large-scale industrial facilities designed for optimal functionality and durability',
      color: 'from-orange-500/20'
    },
    {
      icon: Hammer,
      title: 'Warehouse Construction',
      description: 'Spacious storage solutions built to meet industrial specifications and standards',
      color: 'from-yellow-500/20'
    },
    {
      icon: Zap,
      title: 'Land Development',
      description: 'Complete site preparation and infrastructure development for various projects',
      color: 'from-green-500/20'
    },
    {
      icon: Truck,
      title: 'Road Work',
      description: 'Quality road construction and maintenance with attention to detail and durability',
      color: 'from-red-500/20'
    },
    {
      icon: Wrench,
      title: 'Factory Construction',
      description: 'Specialized manufacturing spaces built to support industrial operations',
      color: 'from-purple-500/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="services" className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-slate-dark mb-4">Our Services</h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to meet the specific needs of industrial, commercial, and individual clients.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-xl p-8 border border-gray-200 card-hover overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />

                {/* Icon */}
                <div className="w-16 h-16 bg-teal-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-primary/40 transition-colors">
                  <Icon className="text-teal-primary group-hover:scale-110 transition-transform" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-dark mb-3 group-hover:text-teal-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="inline-block text-teal-primary group-hover:translate-x-2 transition-transform">
                  <span className="text-2xl">→</span>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-primary to-teal-bright transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Services Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: 'Durable Construction', value: '✓' },
            { label: 'Quality Materials', value: '✓' },
            { label: 'Cost Effective', value: '✓' },
            { label: 'State-of-art Design', value: '✓' }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-teal-primary/5 rounded-lg border border-teal-primary/20">
              <p className="text-2xl font-bold text-teal-primary mb-2">{item.value}</p>
              <p className="text-sm font-semibold text-slate-dark">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
