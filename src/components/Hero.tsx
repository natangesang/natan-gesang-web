
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
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/248e0c9c-2226-4098-934c-1a16efa38f1d.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Contenido inferior: Carrusel y botón */}
      <div ref={heroRef} className="relative z-10 opacity-0 translate-y-10 transition-all duration-1000 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Carrusel de fotos */}
          <div className="mb-8">
            <HeroCarousel />
          </div>
          
          {/* Botón de contacto */}
          <div className="flex justify-center">
            <a href="#contacto" className="btn-primary bg-natan-orange hover:bg-natan-orange/90 text-xl px-8 py-4 uppercase font-light tracking-wide text-white rounded-lg shadow-lg">
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
