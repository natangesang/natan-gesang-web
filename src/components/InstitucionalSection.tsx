
import React, { useEffect, useRef } from 'react';

const InstitucionalSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section id="institucional" className="py-20 bg-gray-50">
      <div ref={sectionRef} className="container-section opacity-0 translate-y-10 transition-all duration-700">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">Institucional</h2>
          <p className="subtitle mx-auto">
            Conocé nuestra visión, misión y los valores que nos definen como institución
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="opacity-0 translate-y-10 transition-all duration-700">
            <h3 className="font-heading text-2xl font-semibold mb-6 text-gray-800">Nuestra Historia</h3>
            <p className="text-gray-700 mb-6">
              Natan Gesang nace con el objetivo de brindar una educación de vanguardia, combinando lo mejor de la tradición judía con las más innovadoras metodologías pedagógicas. Desde nuestros inicios, nos hemos comprometido con la excelencia educativa y la formación integral de cada estudiante.
            </p>
            <p className="text-gray-700 mb-8">
              A lo largo de nuestra trayectoria, hemos construido una comunidad educativa sólida, donde cada familia forma parte activa del proceso de aprendizaje de sus hijos. Nuestro equipo docente altamente calificado trabaja en colaboración constante con los padres para garantizar que cada alumno alcance su máximo potencial.
            </p>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl p-6 text-white">
                <div className="text-center mb-4">
                  <h4 className="font-heading font-bold text-2xl mb-2 text-white">MISIÓN</h4>
                  <div className="bg-white/20 rounded-lg px-4 py-2 inline-block mb-4">
                    <span className="font-semibold text-orange-200">ESCUELA INTERNACIONAL</span>
                    <span className="font-bold text-teal-300 ml-2">NATAN GESANG</span>
                  </div>
                </div>
                <p className="text-white leading-relaxed">
                  <strong>Educar</strong>, a partir de la <strong>cercanía y personalización</strong> logrando el <strong>éxito académico de cada estudiante</strong>, impartiendo un marco de sólidos valores y tradiciones <strong>judías</strong>, vinculadas a nuestras raíces. Contribuyendo en la incorporación de diferentes recursos <strong>tecnológicos e innovadores</strong> que permitan la formación de niños y niñas <strong>emprendedores</strong> con la habilidad y criterio resolutivo para adaptarse de forma <strong>independiente</strong> a los escenarios que les presente el futuro.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl p-6 text-white">
                <div className="text-center mb-4">
                  <h4 className="font-heading font-bold text-2xl mb-2 text-white">VISIÓN</h4>
                  <div className="bg-white/20 rounded-lg px-4 py-2 inline-block mb-4">
                    <span className="font-semibold text-orange-200">ESCUELA INTERNACIONAL</span>
                    <span className="font-bold text-teal-300 ml-2">NATAN GESANG</span>
                  </div>
                </div>
                <p className="text-white leading-relaxed mb-4">
                  La Institución es una Comunidad abierta y dinámica, que ofrece la más alta <strong>calidad educativa</strong>, dentro de un ambiente rico en valores y tradiciones del <strong>pueblo judío</strong>, fomentando la convivencia e inclusión. Formadora de personas <strong>emprendedoras</strong>, responsables y comprometidas con la <strong>cultura, la ciencia, la tecnología y la sustentabilidad</strong>, para que generen los cambios sociales en el mundo del futuro:
                </p>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="bg-white/30 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>La Escuela Internacional Natan Gesang desea ser <strong>reconocida como un centro cultural y de formación</strong>, referente en Argentina y en todo el mundo.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white/30 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Ofrecer una <strong>enseñanza integral BILINGÜE</strong> castellano-inglés y con orientación en lengua hebrea, para la formación de niños y niñas emprendedores, que puedan <strong>afrontar con éxito los nuevos paradigmas de la educación del siglo XXI</strong>.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div ref={imageRef} className="opacity-0 translate-x-10 transition-all duration-700 delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-natan h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-natan-blue/30 to-natan-skyblue/30 mix-blend-multiply z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070"
                alt="Historia de Natan Gesang"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitucionalSection;
