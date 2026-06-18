'use client';

import { motion } from 'framer-motion';
import { Users, Award, Zap, Shield } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with deep industry knowledge and proven track record'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Uncompromising commitment to quality and safety standards on every project'
    },
    {
      icon: Zap,
      title: 'Modern Technology',
      description: 'State-of-the-art equipment and latest construction techniques'
    },
    {
      icon: Shield,
      title: 'Reliable Partner',
      description: 'Trusted by leading industries and government institutions across India'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-slate-dark mb-4">About Tirupati Construction</h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Established in 2012, we've emerged as one of South Gujarat's most trusted construction contractors, delivering iconic projects with excellence and integrity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md text-slate-dark mb-6">Who We Are</h3>
            <div className="space-y-4 text-gray-700">
              <p className="text-body">
                Tirupati Construction is one of the leading construction contractors in the D&NH region, with a portfolio encompassing South Gujarat's most iconic and sophisticated construction masterpieces.
              </p>
              <p className="text-body">
                For nearly 6 years, we've set the infrastructure for large industrial facilities and built landmark projects in commercial and residential sectors. Our commitment to quality and safety standards remains unmatched.
              </p>
              <p className="text-body">
                Under the guidance of our founders <strong>Janral Singh & Laxman Bhai</strong>, we've established a reputation for delivering excellence across industrial, commercial, and individual establishments.
              </p>
            </div>

            <motion.a
              whileHover={{ x: 5 }}
              href="#contact"
              className="inline-flex items-center gap-2 text-teal-primary font-semibold mt-8 hover:gap-3 transition-all"
            >
              Learn More About Our Work
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>

          {/* Right Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 card-hover"
                >
                  <div className="w-14 h-14 bg-teal-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-teal-primary" size={28} />
                  </div>
                  <h4 className="font-bold text-slate-dark mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-slate-dark to-slate rounded-2xl p-12 text-white"
        >
          <h3 className="heading-md mb-8">Leadership</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="border-l-4 border-teal-bright pl-6">
              <h4 className="text-xl font-bold mb-2">Janral Singh</h4>
              <p className="text-gray-300">Founder & Director - Visionary leader with extensive experience in construction management and project delivery</p>
            </div>
            <div className="border-l-4 border-teal-bright pl-6">
              <h4 className="text-xl font-bold mb-2">Laxman Bhai</h4>
              <p className="text-gray-300">Founder & Director - Expert strategist focused on quality assurance and operational excellence</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ArrowRight({ size }) {
  return <span>→</span>;
}
