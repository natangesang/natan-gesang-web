
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InstitucionalSection from '@/components/InstitucionalSection';
import PilaresSection from '@/components/PilaresSection';
import EducationalLevels from '@/components/EducationalLevels';
import TemploSection from '@/components/TemploSection';
import NewsSection from '@/components/NewsSection';
import Gallery from '@/components/Gallery';
import AccessSection from '@/components/AccessSection';
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
        <TemploSection />
        <NewsSection />
        <Gallery />
        <AccessSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
