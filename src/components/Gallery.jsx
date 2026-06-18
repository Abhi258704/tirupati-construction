'use client';

import { motion } from 'framer-motion';

export default function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Industrial Facility', emoji: '🏭', color: 'from-orange-400 to-red-500' },
    { id: 2, title: 'Construction Site', emoji: '🏗️', color: 'from-yellow-400 to-orange-500' },
    { id: 3, title: 'Warehouse Building', emoji: '📦', color: 'from-blue-400 to-cyan-500' },
    { id: 4, title: 'Commercial Complex', emoji: '🏢', color: 'from-slate-500 to-slate-700' },
    { id: 5, title: 'Infrastructure Project', emoji: '🛣️', color: 'from-green-400 to-emerald-500' },
    { id: 6, title: 'Residential Building', emoji: '🏠', color: 'from-pink-400 to-rose-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-slate-dark mb-4">Project Gallery</h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            A visual showcase of our completed projects demonstrating quality and craftsmanship.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden cursor-pointer card-hover"
            >
              {/* Image Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                <span className="text-7xl group-hover:scale-125 transition-transform duration-300">{item.emoji}</span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex items-end p-6">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg group-hover:text-teal-bright transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { number: '50+', label: 'Projects Completed', icon: '🏆' },
            { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
            { number: '6+', label: 'Years in Industry', icon: '📅' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-dark to-slate text-white rounded-xl p-8 text-center card-hover"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
