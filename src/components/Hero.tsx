
import React, { useEffect, useRef } from 'react';
import HeroCarousel from './HeroCarousel';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, {
      threshold: 0.1
    });

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/bc9b3ca0-e762-45dc-aa33-d3c3bcb6854d.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div ref={heroRef} className="container-section text-center text-white relative z-10 opacity-0 translate-y-10 transition-all duration-1000">
        <div className="max-w-6xl mx-auto px-[24px] py-[24px]">
          {/* Main Title Section */}
          <div className="mb-8">
            {/* ESCUELA INTERNACIONAL - Subtitle */}
            <h2 
              className="block text-lg md:text-xl lg:text-2xl uppercase mb-4"
              style={{
                fontFamily: 'Nunito, Montserrat, Roboto, "Open Sans", sans-serif',
                fontWeight: '500',
                color: '#F6A623',
                letterSpacing: '1px',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
              }}
            >
              ESCUELA INTERNACIONAL
            </h2>
            
            {/* NATAN GESANG - Main Title */}
            <h1 
              className="block text-4xl md:text-6xl lg:text-7xl uppercase"
              style={{
                fontFamily: 'Nunito, Montserrat, Roboto, "Open Sans", sans-serif',
                fontWeight: '800',
                color: '#FFFFFF',
                letterSpacing: '0px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                lineHeight: '1.1'
              }}
            >
              NATAN GESANG
            </h1>
          </div>
          
          {/* Tagline with highlighted words */}
          <div className="mb-12 flex justify-center">
            <div 
              className="px-8 py-6 rounded-full max-w-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(0,35,85,0.4) 0%, rgba(0,50,120,0.25) 100%)',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
              }}
            >
              <p 
                className="text-xl md:text-2xl leading-relaxed"
                style={{
                  fontFamily: 'Nunito, Montserrat, Lato, Roboto, "Open Sans", sans-serif',
                  fontWeight: '600',
                  color: '#FFFFFF'
                }}
              >
                El mejor{' '}
                <span style={{ color: '#38C4B2', fontWeight: '700' }}>
                  comienzo
                </span>
                , para un gran{' '}
                <span style={{ color: '#A167D5', fontWeight: '700' }}>
                  futuro
                </span>
              </p>
            </div>
          </div>

          {/* Carrusel de fotos */}
          <div className="mb-12">
            <HeroCarousel />
          </div>
          
          <div className="flex justify-center">
            <a 
              href="#contacto" 
              className="btn-primary bg-natan-orange hover:bg-natan-orange/90 text-xl px-8 py-4 uppercase font-light tracking-wide"
              style={{ fontFamily: 'Nunito, Montserrat, Roboto, "Open Sans", sans-serif' }}
            >
              Contactanos
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
