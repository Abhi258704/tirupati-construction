'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import WhyChooseUs from '@/components/WhyChooseUs';
import Machinery from '@/components/Machinery';
import Clients from '@/components/Clients';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Machinery />
      <Clients />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}