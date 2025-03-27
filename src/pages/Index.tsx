
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EducationalValues from '@/components/EducationalValues';
import EducationalLevels from '@/components/EducationalLevels';
import TechnologySection from '@/components/TechnologySection';
import Gallery from '@/components/Gallery';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ui/scroll-to-top';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Natan Gesang - Escuela Internacional';
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <EducationalValues />
        <EducationalLevels />
        <TechnologySection />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
