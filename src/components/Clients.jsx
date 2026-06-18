'use client';

import { motion } from 'framer-motion';

export default function Clients() {
  const clients = [
    {
      name: 'Galada Power & Tele Communication Ltd.',
      location: 'Silvassa',
      category: 'Power & Telecom'
    },
    {
      name: 'Swastik Production',
      location: 'Umbergaon',
      category: 'Entertainment'
    },
    {
      name: 'Nemi Industries',
      location: 'Silvassa',
      category: 'Manufacturing'
    },
    {
      name: 'Shivam Proteco Pvt. Ltd.',
      location: 'Silvassa',
      category: 'Industrial'
    },
    {
      name: 'Nemi Enterprise',
      location: 'Silvassa',
      category: 'Commercial'
    },
    {
      name: 'A-1 Fence Products Pvt. Ltd.',
      location: 'Sanjan',
      category: 'Manufacturing'
    },
    {
      name: 'Martin Aluminium',
      location: 'Silvassa',
      category: 'Manufacturing'
    },
    {
      name: 'Nikhil Industries',
      location: 'Vapi',
      category: 'Industrial'
    },
    {
      name: 'International Packaging Products',
      location: 'Silvassa',
      category: 'Packaging'
    },
    {
      name: 'Nature Care Center Pvt. Ltd.',
      location: 'Umbergaon',
      category: 'Healthcare'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-slate-dark mb-4">Our Clients</h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies across industrial, commercial, and institutional sectors throughout India.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white border border-gray-200 rounded-lg p-6 card-hover relative"
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-semibold text-teal-primary bg-teal-primary/10 px-3 py-1 rounded-full">
                  {client.category}
                </span>
              </div>

              {/* Content */}
              <h4 className="font-bold text-slate-dark mb-2 pr-28 group-hover:text-teal-primary transition-colors">
                {client.name}
              </h4>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <span className="text-teal-primary">📍</span>
                {client.location}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-gray-200"
        >
          <p className="text-body text-gray-600 mb-6">
            Join the network of satisfied clients who trust Tirupati Construction for their projects.
          </p>
          <a href="#contact" className="btn-primary gap-2">
            Become Our Client
          </a>
        </motion.div>
      </div>
    </section>
  );
}
