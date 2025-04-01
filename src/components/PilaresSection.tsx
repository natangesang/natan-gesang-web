
import React, { useEffect, useRef } from 'react';
import { 
  Code, 
  BookOpen, 
  Globe, 
  Rocket, 
  GraduationCap,
  Star, 
  HeartHandshake 
} from 'lucide-react';

const PilaresSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pilaresRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const pilares = [
    {
      icon: <Code className="h-12 w-12 text-natan-blue" />,
      title: "Tecnología",
      description: "Integramos la tecnología al servicio del aprendizaje, preparando a nuestros alumnos para los desafíos digitales del futuro."
    },
    {
      icon: <Star className="h-12 w-12 text-natan-blue" />,
      title: "Modo Gesang",
      description: "Seguimos el modelo educativo Israelí, donde toda la enseñanza se dirige hacia la formación de emprendedores, científicos y profesionales de excelencia. Israel es considerado una Start Up Nation donde año a año se conforman nuevas empresas líderes a nivel mundial. Alumnos de las principales Universidades del mundo como el MIT, Yale, Harvard, Oxford, Cambridge, entre otras, realizan pasantías en empresas y universidades Israelíes para adquirir este know how."
    },
    {
      icon: <BookOpen className="h-12 w-12 text-natan-blue" />,
      title: "Proyecto Educativo",
      description: "Un programa integral que forma a los estudiantes en aspectos académicos, sociales y emocionales."
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-natan-blue" />,
      title: "Excelencia Académica",
      description: "Comprometidos con los más altos estándares educativos para impulsar el desarrollo pleno de cada alumno."
    },
    {
      icon: <Globe className="h-12 w-12 text-natan-blue" />,
      title: "Inglés",
      description: "Programa bilingüe que prepara a nuestros estudiantes para comunicarse con fluidez en un mundo globalizado."
    },
    {
      icon: <Rocket className="h-12 w-12 text-natan-blue" />,
      title: "Emprendedores",
      description: "Desarrollamos habilidades para la resolución creativa de problemas y el espíritu emprendedor desde las primeras etapas."
    },
    {
      icon: <HeartHandshake className="h-12 w-12 text-natan-blue" />,
      title: "Tradición Judía",
      description: "Valoramos y transmitimos nuestra herencia cultural y valores judíos como base de identidad y pertenencia."
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
              <p className="text-gray-600">{pilar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PilaresSection;
