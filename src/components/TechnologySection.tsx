
import React, { useEffect, useRef } from 'react';
import { Code, Brain, Laptop, Rocket } from 'lucide-react';

const TechnologySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10', 'translate-x-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  const techFeatures = [
    {
      icon: <Code className="w-6 h-6 text-natan-blue" />,
      title: "Programación",
      description: "Introducción a la lógica de programación y desarrollo del pensamiento computacional desde los primeros años."
    },
    {
      icon: <Brain className="w-6 h-6 text-natan-blue" />,
      title: "Inteligencia Artificial",
      description: "Familiarización con conceptos básicos de IA y sus aplicaciones éticas en el mundo actual."
    },
    {
      icon: <Laptop className="w-6 h-6 text-natan-blue" />,
      title: "Alfabetización Digital",
      description: "Formación en el uso responsable y crítico de herramientas digitales y medios de comunicación."
    },
    {
      icon: <Rocket className="w-6 h-6 text-natan-blue" />,
      title: "Proyectos Innovadores",
      description: "Desarrollo de proyectos prácticos que integran tecnología y contenido curricular para resolver problemas reales."
    }
  ];

  return (
    <section id="tecnologia" className="py-20 bg-white">
      <div ref={sectionRef} className="container-section opacity-0 translate-y-10 transition-all duration-700">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">Tecnología al Servicio del Aprendizaje</h2>
          <p className="subtitle mx-auto">
            Integramos herramientas tecnológicas avanzadas para preparar a nuestros alumnos para los desafíos del siglo XXI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className="opacity-0 translate-x-10 transition-all duration-700 relative rounded-2xl overflow-hidden shadow-natan"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-natan-blue/40 to-natan-skyblue/40 z-10 mix-blend-multiply"></div>
            <img
              src="https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?q=80&w=2070"
              alt="Estudiantes utilizando tecnología"
              className="w-full h-full object-cover"
            />
          </div>

          <div ref={contentRef} className="opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <h3 className="font-heading text-2xl font-semibold mb-6 text-gray-800">
              Formando ciudadanos digitales responsables
            </h3>
            <p className="text-gray-700 mb-8">
              En Natan Gesang entendemos que la tecnología es una herramienta fundamental para el aprendizaje actual y futuro. Nuestro programa educativo integra las nuevas tecnologías de forma responsable, fomentando su uso creativo y ético para fortalecer el proceso de aprendizaje.
            </p>

            <div className="space-y-6">
              {techFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-2 bg-blue-50 rounded mr-4 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-gray-800 mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
