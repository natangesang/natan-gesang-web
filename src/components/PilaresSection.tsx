
import React, { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  BookOpen, 
  Globe, 
  GraduationCap,
  DollarSign, 
  HeartHandshake,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

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
      icon: <Code className="h-12 w-12 text-natan-blue" />,
      title: "Tecnología e Innovación",
      description: "En tecnología, robótica y programación nos proponemos acompañar a nuestros estudiantes para que puedan idear soluciones creativas a través de \"Aprender haciendo\" en nuestro TecnoLab con equipamiento de avanzada."
    },
    {
      icon: <BookOpen className="h-12 w-12 text-natan-blue" />,
      title: "Proyecto Educativo",
      description: "Acompañamos de manera personalizada a cada alumno, brindándole la posibilidad de un constante crecimiento, en un entorno cálido y con desafíos que estimulen el deseo de seguir aprendiendo, una educación bilingüe y de calidad, junto a las herramientas tecnológicas necesarias para su futuro."
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-natan-blue" />,
      title: "Excelencia Académica",
      description: "Nuestros alumnos desarrollan al máximo sus potencialidades, favoreciendo la construcción de competencias que permitan el acceso crítico y reflexivo al conocimiento, celebrando cada logro alcanzado."
    },
    {
      icon: <Globe className="h-12 w-12 text-natan-blue" />,
      title: "Bilingual School",
      description: "El Nivel Primario cuenta con un sólido proyecto educativo oficial de Jornada completa Bilingüe en Inglés con Formación en Lengua y Cultura Judaica. Implementamos desde sala de 2 años propuestas diversas e inmersivas, desde un enfoque inmersivo favoreciendo lo comunicativo para la preparación de ciudadanos globales. El dominio de la lengua está certificado por la Asociación Argentina de Cultura Inglesa y se rinden los exámenes internacionales de Cambridge."
    },
    {
      icon: <DollarSign className="h-12 w-12 text-natan-blue" />,
      title: "Educación Financiera",
      description: "Consideramos necesaria la adopción e internalización de la educación financiera como herramienta superadora para nuestros alumnos. Partiendo de su primer emprendimiento, el Kiosco, llegando a armar carteras virtuales de inversión con cotización real en una simulación bursátil."
    },
    {
      icon: <HeartHandshake className="h-12 w-12 text-natan-blue" />,
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
              <div className="mb-6 p-4 bg-blue-50 rounded-full">{pilar.icon}</div>
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
