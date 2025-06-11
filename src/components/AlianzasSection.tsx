
import React, { useEffect, useRef } from 'react';

const AlianzasSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const aliados = [
    {
      name: "AACI",
      logo: "/lovable-uploads/f9e3c1a0-6f31-4ea4-aaca-e5b0b63fb068.png"
    },
    {
      name: "Digital House",
      logo: "/lovable-uploads/1c4f04fe-0c1b-4037-bc5c-f00441feb5d1.png"
    },
    {
      name: "Microsoft",
      logo: "/lovable-uploads/13f0b9a4-85b2-48f6-9cb4-15b6534eb572.png"
    },
    {
      name: "LEGO",
      logo: "/lovable-uploads/ca43375c-8c13-48a1-85d4-65bddecd0413.png"
    }
  ];

  return (
    <section id="alianzas" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div ref={sectionRef} className="container-section opacity-0 translate-y-10 transition-all duration-700">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">Nuestros Aliados</h2>
          <p className="subtitle mx-auto mb-8">
            Valoramos profundamente las alianzas con instituciones y empresas que comparten nuestros valores y visión educativa. Estas asociaciones nos permiten enriquecer la experiencia de nuestros alumnos, conectar con el mundo actual y proyectar una educación con impacto real.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {aliados.map((aliado, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={aliado.logo}
                alt={`Logo ${aliado.name}`}
                className="max-w-full max-h-20 object-contain filter hover:brightness-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlianzasSection;
