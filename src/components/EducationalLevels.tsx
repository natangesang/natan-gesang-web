
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const EducationalLevels = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const [expandedModule, setExpandedModule] = useState(false);

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

        {/* Módulo Abordaje Educativo y Pedagógico */}
        <div 
          ref={cardRefs[0]}
          className="opacity-0 translate-y-10 transition-all duration-700 mb-12"
        >
          <div className="bg-gradient-to-r from-natan-purple to-natan-blue rounded-2xl overflow-hidden shadow-natan">
            <div className="p-8 md:p-12 text-white">
              <h3 className="font-heading text-3xl font-bold mb-4 text-center">Abordaje Educativo y Pedagógico</h3>
              <p className="text-xl text-center mb-6 text-white/90">
                Educación basada en el modelo STEAM con valores judíos, promoviendo la independencia y el pensamiento crítico desde los 12 meses.
              </p>
              
              <div className="text-center">
                <button 
                  onClick={() => setExpandedModule(!expandedModule)}
                  className="bg-white/20 hover:bg-white/30 transition-colors duration-300 text-white py-3 px-6 rounded-lg inline-flex items-center gap-2"
                >
                  {expandedModule ? 'Leer menos' : 'Leer más'}
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedModule ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {expandedModule && (
                <div className="mt-8 space-y-4 text-white/95 leading-relaxed animate-slide-in">
                  <p>
                    Somos una comunidad dinámica y en constante transformación. La convivencia, el respeto, y la inclusión son parte de nuestros valores con los qué acompañamos a nuestros alumnos/as desde los 12 meses en su recorrido y crecimiento durante todo el nivel Inicial y también durante el nivel Primario.
                  </p>
                  <p>
                    Basamos nuestra educación en el modelo pedagógico STEAM (Science, Technology, Engineering and Mathematics), apuntando al acceso de conocimientos de manera integrada. El modelo busca resolver problemas a través de la promoción de la independencia, el trabajo colaborativo y asertivo, la valoración de diferentes puntos de vista, la innovación y el desarrollo de talentos. Promueve la alfabetización científica a partir del desarrollo del pensamiento crítico y nuevas habilidades.
                  </p>
                  <p>
                    Nuestros estudiantes aprenden haciendo (Cultura Maker), promoviendo en ellos aprendizajes más significativos y sentando las bases de una formación de calidad que los acompañará a lo largo de su desarrollo. Promovemos alumnos/as responsables y comprometidos/as con la sustentabilidad, la cultura y la ciencia, dispuestos/as a generar y a adaptarse a los cambios evolutivos del mañana.
                  </p>
                  <p>
                    Siempre nos ha caracterizado la cercanía y la personalización individual, persiguiendo el éxito académico de cada estudiante. Impartimos un marco vinculado a nuestras raíces, con sólidos valores y tradiciones judaicas fortaleciendo la identidad. El idioma inglés se imparte de modo inmersivo desde Nivel Inicial a 7mo grado de Primaria. Incorporamos constantemente diferentes recursos tecnológicos e innovadores que permiten la formación de individuos emprendedores y autónomos que desarrollen las habilidades y criterio resolutivo para tener las herramientas necesarias para poder elegir y estar preparados para los escenarios futuros.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div 
            ref={cardRefs[1]}
            className="opacity-0 translate-y-10 transition-all duration-700 delay-200 relative overflow-hidden rounded-2xl shadow-natan group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-natan-skyblue/90 to-natan-blue/90 z-10"></div>
            <img
              src="/lovable-uploads/474b7f0e-613e-406b-a8ae-9387862874d0.png"
              alt="Nivel Inicial"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
              <h3 className="font-heading text-2xl font-bold mb-3">Nivel Inicial</h3>
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
              <a href="#contacto" className="bg-white/20 hover:bg-white/30 transition-colors duration-300 text-white py-2 px-4 rounded inline-block">Más información</a>
            </div>
          </div>

          <div 
            ref={cardRefs[2]}
            className="opacity-0 translate-y-10 transition-all duration-700 delay-400 relative overflow-hidden rounded-2xl shadow-natan group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-natan-orange/90 to-natan-lightorange/90 z-10"></div>
            <img
              src="/lovable-uploads/9730f03f-b4e8-4147-822e-c3b4b13990b5.png"
              alt="Nivel Primario"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
              <h3 className="font-heading text-2xl font-bold mb-3">Nivel Primario</h3>
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
              <a href="#contacto" className="bg-white/20 hover:bg-white/30 transition-colors duration-300 text-white py-2 px-4 rounded inline-block">Más información</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalLevels;
