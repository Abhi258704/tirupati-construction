'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function Machinery() {
  const equipment = [
    { icon: '🚜', name: 'Excavators (JCB)', quantity: '1 unit' },
    { icon: '🏗️', name: 'Concrete Mix Machines', quantity: '4 units' },
    { icon: '🚚', name: 'Concrete Pumps (AJAX 2000)', quantity: '3 units' },
    { icon: '🛣️', name: 'Vibro Roller Machine', quantity: '1 unit' },
    { icon: '⛏️', name: 'Paving Machines', quantity: '3 units' },
    { icon: '🚛', name: 'Tractor & Trailers', quantity: '2 units' },
    { icon: '⚙️', name: 'Vibrators & Compactors', quantity: '4 units' },
    { icon: '🔧', name: 'Electrical & Power Tools', quantity: '2 sets' },
    { icon: '📏', name: 'Levelling Instruments', quantity: '2 units' },
    { icon: '🏢', name: 'Shuttering Materials', quantity: '12,000 sqft' },
    { icon: '💨', name: 'Air Compressors & Breakers', quantity: '2 units' },
    { icon: '📐', name: 'Dewatering Equipment', quantity: '2 sets' }
  ];

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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-slate-dark mb-4">Modern Equipment & Fleet</h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            State-of-the-art machinery and equipment ensuring efficient, high-quality construction on every project.
          </p>
        </motion.div>

        {/* Equipment Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {equipment.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 card-hover relative overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

              <div className="flex items-start gap-4">
                <div className="text-4xl group-hover:scale-125 transition-transform">{item.icon}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-dark group-hover:text-teal-primary transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">{item.quantity}</p>
                </div>
              </div>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-primary to-teal-bright scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-primary/10 to-slate-dark/5 border border-teal-primary/20 rounded-2xl p-8 sm:p-12"
        >
          <div className="flex items-start gap-4">
            <Zap className="text-teal-primary flex-shrink-0" size={32} />
            <div>
              <h3 className="text-2xl font-bold text-slate-dark mb-3">Comprehensive Equipment Support</h3>
              <p className="text-gray-700 mb-4">
                Beyond our standard fleet, we can provide any specialized tools and machinery required for the nature of your project. Our equipment is regularly maintained and updated to meet industry standards.
              </p>
              <div className="flex items-center gap-2 text-teal-primary font-semibold">
                <span>Contact us to discuss your equipment needs</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
