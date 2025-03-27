
import React, { useEffect, useRef } from 'react';

const EducationalLevels = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    cardRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      cardRefs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <section id="niveles" className="py-20 bg-gray-50">
      <div ref={sectionRef} className="container-section opacity-0 translate-y-10 transition-all duration-700">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">Niveles Educativos</h2>
          <p className="subtitle mx-auto">
            Ofrecemos una educación integral en todos los niveles, adaptada a cada etapa del desarrollo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div 
            ref={cardRefs[0]}
            className="opacity-0 translate-y-10 transition-all duration-700 relative overflow-hidden rounded-2xl shadow-natan group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-natan-skyblue/90 to-natan-blue/90 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022"
              alt="Jardín infantil"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
              <h3 className="font-heading text-2xl font-bold mb-3">Jardín de Infantes</h3>
              <p className="mb-4 text-white/90">
                Estimulamos la curiosidad y creatividad a través del juego, creando las bases para el aprendizaje futuro en un ambiente seguro y acogedor.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="bg-white/20 p-1 rounded mr-2 mt-1">✓</span>
                  <span>Educación emocional y desarrollo socio-afectivo</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white/20 p-1 rounded mr-2 mt-1">✓</span>
                  <span>Primeros pasos en idiomas: español, inglés y hebreo</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white/20 p-1 rounded mr-2 mt-1">✓</span>
                  <span>Aproximación lúdica a la tecnología y ciencias</span>
                </li>
              </ul>
            </div>
          </div>

          <div 
            ref={cardRefs[1]}
            className="opacity-0 translate-y-10 transition-all duration-700 delay-200 relative overflow-hidden rounded-2xl shadow-natan group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-natan-orange/90 to-natan-lightorange/90 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=2016"
              alt="Escuela primaria"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
              <h3 className="font-heading text-2xl font-bold mb-3">Escuela Primaria</h3>
              <p className="mb-4 text-white/90">
                Consolidamos conocimientos académicos mientras desarrollamos habilidades sociales, pensamiento crítico y autonomía en el aprendizaje.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="bg-white/20 p-1 rounded mr-2 mt-1">✓</span>
                  <span>Programa bilingüe integrado español-inglés</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white/20 p-1 rounded mr-2 mt-1">✓</span>
                  <span>Cultura y tradiciones judías con hebreo</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white/20 p-1 rounded mr-2 mt-1">✓</span>
                  <span>Proyectos tecnológicos y emprendedores prácticos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalLevels;
