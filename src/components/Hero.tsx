import React, { useEffect, useRef } from 'react';

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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-natan-blue via-natan-skyblue to-natan-lightblue overflow-hidden pt-24">
      {/* Formas geométricas decorativas */}
      <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-white/5 rounded-full animate-float"></div>
      <div className="absolute bottom-[30%] right-[15%] w-48 h-48 bg-natan-orange/10 rotate-45 animate-pulse-light"></div>
      <div className="absolute top-[60%] left-[5%] w-32 h-32 bg-natan-yellow/10 rounded-full animate-float" style={{
        animationDelay: '2s'
      }}></div>
      <div className="absolute bottom-[10%] right-[40%] w-40 h-40 bg-white/5 rotate-12 animate-pulse-light" style={{
        animationDelay: '1s'
      }}></div>

      <div ref={heroRef} className="container-section text-center text-white relative z-10 opacity-0 translate-y-10 transition-all duration-1000">
        <div className="max-w-4xl mx-auto px-[24px] py-[24px]">
          <h1 className="heading-1 mb-8 drop-shadow-lg">
            Escuela Internacional <span className="text-natan-yellow">Natan Gesang</span>
          </h1>
          
          {/* Mensaje destacado principal */}
          <div className="mb-8 p-8 bg-white/15 backdrop-blur-md rounded-3xl border border-white/30">
            <p className="text-3xl md:text-4xl font-bold leading-relaxed text-white drop-shadow-lg">
              El mejor <span className="text-natan-yellow bg-white/20 px-3 py-1 rounded-lg">comienzo</span> para un gran <span className="text-natan-yellow bg-white/20 px-3 py-1 rounded-lg">futuro</span>
            </p>
          </div>
          
          <p className="subtitle mb-8 drop-shadow-md font-normal">
            Formamos líderes del futuro con excelencia académica, valores judíos y una educación bilingüe integral
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#niveles" className="btn-primary bg-natan-orange hover:bg-natan-orange/90">
              Conocé nuestros niveles
            </a>
            <a href="#contacto" className="btn-primary bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40">
              Contactanos
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
