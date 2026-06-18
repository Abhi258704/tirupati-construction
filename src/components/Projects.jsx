'use client';

import { motion } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Galada Power & Tele Communication Ltd.',
      location: 'Khadoli - Silvassa',
      category: 'Industrial',
      scope: 'Plant Shed, Conductor Foundations, RCC Flooring, Weight Bridge, Cooling Tower',
      status: 'On Progress',
      statusColor: 'bg-blue-500/20 text-blue-700',
      image: '🏭'
    },
    {
      id: 2,
      name: 'International Packaging Products Pvt. Ltd.',
      location: 'Sayli & Dadra, Silvassa',
      category: 'Industrial',
      scope: 'Multiple Building Types, Canteen, Labour Quarters, Office, RCC Road',
      status: 'Completed',
      statusColor: 'bg-green-500/20 text-green-700',
      image: '🏢'
    },
    {
      id: 3,
      name: 'Swastik Production Ltd',
      location: 'Gowada & Vrundavan Studio, Umbergaon',
      category: 'Commercial',
      scope: 'Mock-up Rooms, Shed Construction, RCC Road',
      status: 'Completed',
      statusColor: 'bg-green-500/20 text-green-700',
      image: '🎬'
    },
    {
      id: 4,
      name: 'Nikhil Industries Pvt. Ltd.',
      location: 'Khadoli, Silvassa',
      category: 'Industrial',
      scope: 'Compound Wall, RCC Flooring, Machine Foundations, Roofing',
      status: 'On Progress',
      statusColor: 'bg-blue-500/20 text-blue-700',
      image: '⚙️'
    },
    {
      id: 5,
      name: 'Sivam Industries Pvt. Ltd.',
      location: 'Khadoli - Silvassa',
      category: 'Industrial',
      scope: 'Shed for Plant, RCC Flooring, Road Work, Compound Wall',
      status: 'Completed',
      statusColor: 'bg-green-500/20 text-green-700',
      image: '🏗️'
    },
    {
      id: 6,
      name: 'A-1 Fence Products Pvt. Ltd.',
      location: 'Tumb, Sanjan',
      category: 'Infrastructure',
      scope: 'RCC Retaining Wall, Sewage Line, RCC Road',
      status: 'Completed',
      statusColor: 'bg-green-500/20 text-green-700',
      image: '🛣️'
    },
    {
      id: 7,
      name: 'Nature Care Center Pvt. Ltd.',
      location: 'Umbergaon',
      category: 'Healthcare',
      scope: 'Hospital Building Construction',
      status: 'Completed',
      statusColor: 'bg-green-500/20 text-green-700',
      image: '🏥'
    },
    {
      id: 8,
      name: 'Nemi Industries',
      location: 'Silvassa',
      category: 'Industrial',
      scope: 'Industrial Estate Construction',
      status: 'Completed',
      statusColor: 'bg-green-500/20 text-green-700',
      image: '🏭'
    }
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-slate-dark mb-4">Our Projects</h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            A portfolio of completed and ongoing projects showcasing our expertise and commitment to excellence across diverse sectors.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden card-hover"
            >
              {/* Image Area */}
              <div className="h-48 bg-gradient-to-br from-slate-dark to-teal-primary relative overflow-hidden flex items-center justify-center">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">{project.image}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${project.statusColor}`}>
                    {project.status}
                  </span>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-slate-dark mb-3 group-hover:text-teal-primary transition-colors line-clamp-2">
                  {project.name}
                </h3>

                {/* Location */}
                <div className="flex items-start gap-2 mb-4 text-sm text-gray-600">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5 text-teal-primary" />
                  <span>{project.location}</span>
                </div>

                {/* Scope */}
                <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {project.scope}
                </p>

                {/* Footer */}
                <div className="pt-4 border-t border-gray-200 flex items-center gap-2 text-teal-primary font-semibold text-sm group-hover:gap-3 transition-all cursor-pointer">
                  <span>View Details</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-gray-200"
        >
          <p className="text-body text-gray-600 mb-6">
            Interested in seeing more of our work? Let's discuss your project needs.
          </p>
          <a href="#contact" className="btn-primary gap-2">
            <CheckCircle size={20} />
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
