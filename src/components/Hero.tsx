
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
      style={{ backgroundColor: '#4A6FA5' }}
    >
      {/* Marco lateral izquierdo */}
      <div 
        className="absolute left-0 top-0 h-full w-32 md:w-48 lg:w-64 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/2b26748b-aa73-46e9-b676-ea998e84e233.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Marco lateral derecho */}
      <div 
        className="absolute right-0 top-0 h-full w-32 md:w-48 lg:w-64 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/7a597d69-2926-4745-bd07-4eca1687e681.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div ref={heroRef} className="container-section text-center text-white relative z-10 opacity-0 translate-y-10 transition-all duration-1000">
        <div className="max-w-6xl mx-auto px-[24px] py-[24px]">
          <h1 className="mb-8 drop-shadow-lg">
            <span 
              className="block text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider"
              style={{
                fontFamily: 'Arial, sans-serif',
                fontWeight: '300',
                color: '#E8E8E8',
                letterSpacing: '0.15em',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
              }}
            >
              ESCUELA INTERNACIONAL
            </span>
            <span 
              className="block text-5xl md:text-6xl lg:text-8xl uppercase mt-2"
              style={{
                fontFamily: 'Impact, Arial Black, sans-serif',
                fontWeight: '900',
                color: '#FFFFFF',
                letterSpacing: '0.05em',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}
            >
              NATAN GESANG
            </span>
          </h1>
          
          {/* Mensaje destacado principal */}
          <div className="mb-8 p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/30">
            <p className="text-3xl md:text-4xl font-light leading-relaxed text-white drop-shadow-lg">
              El mejor <span className="font-bold" style={{ color: '#4DC295' }}>comienzo</span>, para un gran <span className="font-bold" style={{ color: '#8A65C9' }}>futuro</span>
            </p>
          </div>

          {/* Carrusel de fotos */}
          <div className="mb-12">
            <HeroCarousel />
          </div>
          
          <div className="flex justify-center">
            <a href="#contacto" className="btn-primary bg-natan-orange hover:bg-natan-orange/90 text-xl px-8 py-4 uppercase font-light tracking-wide">
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
