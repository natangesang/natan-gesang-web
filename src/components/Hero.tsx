
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const refs = {
    heading: useRef<HTMLHeadingElement>(null),
    subheading: useRef<HTMLParagraphElement>(null),
    button: useRef<HTMLAnchorElement>(null)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (refs.heading.current) observer.observe(refs.heading.current);
    if (refs.subheading.current) observer.observe(refs.subheading.current);
    if (refs.button.current) observer.observe(refs.button.current);

    return () => {
      if (refs.heading.current) observer.unobserve(refs.heading.current);
      if (refs.subheading.current) observer.unobserve(refs.subheading.current);
      if (refs.button.current) observer.unobserve(refs.button.current);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-natan-blue to-natan-skyblue pt-24"
    >
      {/* Formas geométricas decorativas */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-white/10 rotate-45 animate-float animate-delay-200"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-float animate-delay-300"></div>

      <div className="absolute inset-0 bg-opacity-70 z-0">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 text-white z-10 py-24 md:py-32">
        <div className="flex flex-col items-center mb-12">
          <img
            src="/lovable-uploads/ec87831b-f2ae-4525-98d0-5e29f178d93c.png"
            alt="Natan Gesang"
            className="h-32 md:h-40 mb-8 animate-float"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h1
            ref={refs.heading}
            className="opacity-0 translate-y-10 transition-all duration-700 font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
          >
            Educación innovadora para{' '}
            <span className="bg-white text-natan-blue px-2 pb-1 rounded-md">
              ciudadanos globales
            </span>
          </h1>

          <p
            ref={refs.subheading}
            className="opacity-0 translate-y-10 transition-all duration-700 delay-300 text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
          >
            Natan Gesang integra tecnología avanzada, educación bilingüe y valores de la tradición judía para formar líderes del mañana
          </p>

          <a
            ref={refs.button}
            href="#propuesta"
            className="opacity-0 translate-y-10 transition-all duration-700 delay-500 inline-block bg-white text-natan-blue font-medium px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Descubrir propuesta educativa
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a
          href="#propuesta"
          aria-label="Scroll down"
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </a>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
