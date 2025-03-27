
import React, { useEffect, useRef } from 'react';
import { BookOpen, Globe, Lightbulb, Users } from 'lucide-react';

const EducationalValues = () => {
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

    const cards = document.querySelectorAll('.value-card');
    cards.forEach((card) => observer.observe(card));

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const values = [
    {
      icon: <Globe className="h-12 w-12 text-natan-blue" />,
      title: "Educación Bilingüe",
      description: "Formación en español e inglés para una comunicación global, complementada con hebreo para fortalecer nuestra identidad cultural."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-natan-blue" />,
      title: "Innovación Tecnológica",
      description: "Integramos la tecnología al servicio del aprendizaje, preparando a nuestros alumnos para los desafíos digitales del futuro."
    },
    {
      icon: <Users className="h-12 w-12 text-natan-blue" />,
      title: "Comunidad y Valores",
      description: "Fomentamos el sentido comunitario y los valores judíos como pilares para el desarrollo socio-afectivo integral."
    },
    {
      icon: <BookOpen className="h-12 w-12 text-natan-blue" />,
      title: "Emprendedurismo",
      description: "Desarrollamos habilidades para la resolución creativa de problemas y el espíritu emprendedor desde las primeras etapas."
    }
  ];

  return (
    <section id="propuesta" className="py-20 bg-white">
      <div ref={sectionRef} className="container-section opacity-0 translate-y-10 transition-all duration-700">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">Nuestra Propuesta Educativa</h2>
          <p className="subtitle mx-auto">
            En Natan Gesang desarrollamos un modelo educativo que combina lo mejor de la tradición con las habilidades necesarias para el futuro
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="value-card opacity-0 translate-y-10 transition-all duration-700 glass-card p-8 flex flex-col items-center text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 p-4 bg-blue-50 rounded-full">{value.icon}</div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-gray-800">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#niveles" className="btn-primary inline-flex items-center gap-2">
            Conocer nuestros niveles
          </a>
        </div>
      </div>
    </section>
  );
};

export default EducationalValues;
