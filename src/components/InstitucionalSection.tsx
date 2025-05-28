import React, { useEffect, useRef } from 'react';
const InstitucionalSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10', 'translate-x-10');
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);
  return <section id="institucional" className="py-20 bg-gray-50">
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
            
            <div className="space-y-4">
              <div className="glass-card p-4">
                <h4 className="font-heading font-semibold text-natan-blue mb-2">Misión</h4>
                <p className="text-gray-700">Educar, a partir de la cercanía y personalización logrando el éxito académico de cada estudiante, impartiendo un marco de sólidos valores y tradiciones judías, vinculadas a nuestras raíces. Contribuyendo en la incorporación de diferentes recursos tecnológicos e innovadores que permitan la formación de niños y niñas emprendedores con la habilidad y criterio resolutivo para adaptarse de forma independiente a los escenarios que les presente el futuro.</p>
              </div>
              
              <div className="glass-card p-4">
                <h4 className="font-heading font-semibold text-natan-blue mb-2">Visión</h4>
                <p className="text-gray-700">La Institución será una comunidad abierta al cambio, dinamizadora de calidad educativa, dentro de un ambiente rico en valores y tradiciones del pueblo judío, convivencia, inclusión, formadora de personas emprendedoras, responsables y comprometidas con la cultura, la ciencia, la tecnología y la sustentabilidad, para generar los cambios sociales en el mundo del futuro La Escuela Internacional
- Natan Gesang desea ser reconocida como un centro cultural y de formación, referente en Argentina y en todo el mundo. 
- Ofrecer una enseñanza integral con orientación trilingüe de calidad para la formación de niños y niñas emprendedores que puedan afrontar con éxito los nuevos paradigmas de la educación del siglo XXI.</p>
              </div>
            </div>
          </div>
          
          <div ref={imageRef} className="opacity-0 translate-x-10 transition-all duration-700 delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-natan h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-natan-blue/30 to-natan-skyblue/30 mix-blend-multiply z-10"></div>
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070" alt="Historia de Natan Gesang" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default InstitucionalSection;