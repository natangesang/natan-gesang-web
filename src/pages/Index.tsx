
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InstitucionalSection from '@/components/InstitucionalSection';
import PilaresSection from '@/components/PilaresSection';
import EducationalLevels from '@/components/EducationalLevels';
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
        <InstitucionalSection />
        <PilaresSection />
        <EducationalLevels />
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
