
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
        <div className="relative">
          {/* Formas geométricas decorativas que se muestran a lo largo de toda la página */}
          <div className="absolute top-[10%] left-0 w-32 h-32 bg-[#F3967B]/10 rounded-full -z-10"></div>
          <div className="absolute top-[30%] right-0 w-64 h-64 bg-natan-skyblue/5 rotate-45 -z-10"></div>
          <div className="absolute top-[50%] left-10 w-48 h-48 bg-natan-purple/5 rounded-full -z-10"></div>
          <div className="absolute top-[70%] right-10 w-40 h-40 bg-[#F3967B]/10 rotate-12 -z-10"></div>
          
          <InstitucionalSection />
          <PilaresSection />
          <EducationalLevels />
          <TemploSection />
          <NewsSection />
          <Gallery />
          <AccessSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
