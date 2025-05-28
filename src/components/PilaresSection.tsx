
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PilaresSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pilaresRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [expandedPilar, setExpandedPilar] = useState<number | null>(null);

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
    
    pilaresRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      pilaresRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const toggleExpanded = (index: number) => {
    setExpandedPilar(expandedPilar === index ? null : index);
  };

  const pilares = [
    {
      icon: (
        <div className="w-16 h-16 bg-pink-500 rounded-lg flex items-center justify-center">
          <div className="w-8 h-10 bg-white rounded-sm relative">
            <div className="absolute top-1 left-1 w-6 h-2 bg-pink-500 rounded-sm"></div>
            <div className="absolute bottom-1 left-1 w-4 h-4 bg-pink-500 rounded-sm"></div>
          </div>
        </div>
      ),
      title: "Proyecto Educativo",
      description: "Acompañamos de manera personalizada a cada alumno, brindándole la posibilidad de un constante crecimiento, en un entorno cálido y con desafíos que estimulen el deseo de seguir aprendiendo, una educación bilingüe y de calidad, junto a las herramientas tecnológicas necesarias para su futuro."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center">
          <div className="w-10 h-8 bg-white rounded relative">
            <div className="absolute top-1 left-2 w-6 h-2 bg-teal-500"></div>
            <div className="absolute top-1 right-1 w-2 h-6 bg-teal-500 rounded-full"></div>
          </div>
        </div>
      ),
      title: "Excelencia Académica",
      description: "Nuestros alumnos desarrollan al máximo sus potencialidades, favoreciendo la construcción de competencias que permitan el acceso crítico y reflexivo al conocimiento, celebrando cada logro alcanzado."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center">
          <div className="w-8 h-6 bg-white rounded-lg relative flex items-center justify-center">
            <span className="text-purple-500 font-bold text-xs">Hi!</span>
          </div>
        </div>
      ),
      title: "Bilingual School",
      description: "El Nivel Primario cuenta con un sólido proyecto educativo oficial de Jornada completa Bilingüe en Inglés con Formación en Lengua y Cultura Judaica. Implementamos desde sala de 2 años propuestas diversas e inmersivas, desde un enfoque inmersivo favoreciendo lo comunicativo para la preparación de ciudadanos globales. El dominio de la lengua está certificado por la Asociación Argentina de Cultura Inglesa y se rinden los exámenes internacionales de Cambridge."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
          <div className="flex space-x-1">
            <div className="w-2 h-6 bg-white rounded-full"></div>
            <div className="w-2 h-6 bg-white rounded-full"></div>
            <div className="w-2 h-6 bg-white rounded-full"></div>
          </div>
        </div>
      ),
      title: "Educación Financiera",
      description: "Consideramos necesaria la adopción e internalización de la educación financiera como herramienta superadora para nuestros alumnos. Partiendo de su primer emprendimiento, el Kiosco, llegando a armar carteras virtuales de inversión con cotización real en una simulación bursátil."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full relative">
            <div className="absolute top-1 left-1 w-2 h-6 bg-yellow-500 rounded-full"></div>
            <div className="absolute top-2 right-1 w-4 h-2 bg-yellow-500 rounded-full"></div>
            <div className="absolute bottom-1 left-2 w-3 h-3 bg-yellow-500 rounded-full"></div>
          </div>
        </div>
      ),
      title: "Tecnología e Innovación",
      description: "En tecnología, robótica y programación nos proponemos acompañar a nuestros estudiantes para que puedan idear soluciones creativas a través de \"Aprender haciendo\" en nuestro TecnoLab con equipamiento de avanzada."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-pink-400 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded relative">
            <div className="absolute inset-1 border-2 border-pink-400 rounded"></div>
            <div className="absolute top-2 left-2 w-4 h-1 bg-pink-400"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-pink-400 rounded-full"></div>
          </div>
        </div>
      ),
      title: "Tradición Judía",
      description: "Vivimos nuestro judaísmo de manera plena, bajo el concepto de \"Amiut\": un fuerte sentido de pertenencia; son nuestras raíces, valores, costumbres y festividades. Enseñamos el ivrit como motor para construir y transformar ese mundo identitario."
    }
  ];

  return (
    <section id="pilares" className="py-20 bg-white">
      <div ref={sectionRef} className="container-section opacity-0 translate-y-10 transition-all duration-700">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">Nuestros Pilares</h2>
          <p className="subtitle mx-auto">
            Los fundamentos que sostienen nuestro modelo educativo y nos hacen únicos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pilares.map((pilar, index) => (
            <div
              key={index}
              ref={el => pilaresRefs.current[index] = el}
              className="opacity-0 translate-y-10 transition-all duration-700 glass-card p-8 flex flex-col items-center text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">{pilar.icon}</div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-800">{pilar.title}</h3>
              
              <div className="w-full">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="flex items-center justify-center w-full text-natan-blue hover:text-natan-skyblue transition-colors mb-3"
                >
                  <span className="mr-2">Leer más</span>
                  {expandedPilar === index ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedPilar === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-600 text-sm leading-relaxed">{pilar.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PilaresSection;
