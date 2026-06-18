'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      // Reset after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98986 70453 / 70439 62610',
      href: 'tel:9898670453'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'janralsingh99@gmail.com',
      href: 'mailto:janralsingh99@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '402, Mahaveer Galaxy, Shantivan Society, Umbergaon (east) -396 170',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-slate-dark mb-4">Get In Touch</h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a consultation and let's build something great together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl p-8 border border-gray-200 card-hover text-center"
              >
                <div className="w-16 h-16 bg-teal-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-primary/30 transition-colors">
                  <Icon className="text-teal-primary" size={32} />
                </div>
                <h3 className="font-bold text-slate-dark mb-2 group-hover:text-teal-primary transition-colors">
                  {info.label}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {info.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Form */}
            <div className="p-8 sm:p-12">
              <h3 className="heading-md text-slate-dark mb-8">Send us a Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="text-green-500" size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-dark mb-2">Thank You!</h4>
                  <p className="text-gray-600">We'll get back to you shortly with a response.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-dark mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-dark mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-dark mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all outline-none"
                      placeholder="+91 98XX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-dark mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all outline-none"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-dark mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isLoading}
                    className="w-full btn-primary gap-2 justify-center disabled:opacity-75"
                  >
                    <Send size={20} />
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </div>

            {/* Side Info */}
            <div className="hidden lg:flex bg-gradient-to-br from-slate-dark to-slate p-12 text-white flex-col justify-between">
              <div>
                <h3 className="heading-md mb-8">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    'Rapid Response to Inquiries',
                    '10+ Years Combined Experience',
                    'Transparent Project Costing',
                    'Dedicated Project Manager',
                    'Regular Progress Updates'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-teal-bright flex-shrink-0 mt-1" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                <p className="text-sm text-gray-200 mb-4">
                  "Building trust one project at a time since 2012"
                </p>
                <p className="text-xs text-gray-300">Tirupati Construction</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
