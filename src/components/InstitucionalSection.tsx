import React, { useEffect, useRef } from 'react';

const InstitucionalSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const modoGesangRef = useRef<HTMLDivElement>(null);

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
    if (modoGesangRef.current) observer.observe(modoGesangRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (modoGesangRef.current) observer.unobserve(modoGesangRef.current);
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

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div ref={contentRef} className="opacity-0 translate-y-10 transition-all duration-700">
            <h3 className="font-heading text-2xl font-semibold mb-6 text-gray-800">Nuestra Trayectoria</h3>
            <p className="text-gray-700 mb-6">
              Fundada en 1920 como una institución educativa sin fines de lucro, nuestro colegio se proyecta constantemente hacia adelante. Aquí, la vanguardia no solo se entrelaza con nuestras profundas raíces y tradiciones, sino que las impulsa, creando un futuro dinámico que honra nuestro pasado y define una identidad singularmente innovadora.
            </p>
            <p className="text-gray-700 mb-8">
              A lo largo de nuestra trayectoria, hemos construido una comunidad educativa sólida, donde cada familia forma parte activa del proceso de aprendizaje de sus hijos. Nuestro equipo docente altamente calificado trabaja en colaboración constante con los padres para garantizar que cada alumno alcance su máximo potencial. Formamos líderes del futuro combinando excelencia académica, valores judíos, educación en tres idiomas con certificación internacional e innovación tecnológica.
            </p>
          </div>
          
          <div ref={imageRef} className="opacity-0 translate-x-10 transition-all duration-700 delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-natan h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-natan-blue/20 to-natan-skyblue/20 mix-blend-multiply z-10"></div>
              <img src="/lovable-uploads/29bbcc0b-2285-4515-8a5d-ae7595828b3c.png" alt="Fachada Natan Gesang con logo institucional" className="w-full h-full object-cover object-bottom" />
            </div>
          </div>
        </div>

        {/* Sección #Modo Gesang */}
        <div ref={modoGesangRef} className="opacity-0 translate-y-10 transition-all duration-700 mb-16">
          <div className="rounded-2xl p-8 text-white bg-natan-yellow">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img src="/lovable-uploads/fa25af2d-6f72-4a65-aa50-c8967ae9d7ca.png" alt="#Modo Gesang Logo" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading text-3xl font-bold mb-4 text-white">#Modo Gesang</h3>
                <p className="text-white/90 text-lg leading-relaxed mb-4">
                  Es nuestro manifiesto. Es la esencia que nos define: <strong>amistad, comunidad, familia, innovación, excelencia académica y espíritu emprendedor</strong>. Es la valentía de ver el mundo con una mirada diversa, educando a nuestros alumnos para que construyan su futuro, acompañándolos a cada paso. Es la pasión que nos impulsa a <strong>descubrir, construir ante cada dificultad, abrazarnos y soñar en grande</strong>, sabiendo que caerse es parte del camino para levantarse y lograrlo.
                </p>
                <p className="text-white/90 text-lg leading-relaxed">
                  #ModoGesang es esa conexión especial con nuestros morim; es <strong>ir siempre por más</strong>, valorando lo que somos, lo que podemos dar y aprender juntos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Galería de imágenes adicionales */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-natan h-[300px]">
            <img src="/lovable-uploads/895ce9fc-4dd5-405d-92a9-7cd2601b4862.png" alt="Menorah Natan Gesang" className="w-full h-full object-cover" />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-natan h-[300px]">
            <img src="/lovable-uploads/a9ef1105-42b3-48d6-bb76-49f998f8557a.png" alt="Comunidad Natan Gesang" className="w-full h-full object-cover" />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-natan h-[300px]">
            <img src="/lovable-uploads/46ccf6a7-a0bb-4789-b247-49901782c04d.png" alt="Actividades Natan Gesang" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl p-6 text-white">
            <div className="text-center mb-4">
              <h4 className="font-heading font-bold text-2xl mb-2 text-white">MISIÓN</h4>
            </div>
            <p className="text-white leading-relaxed">
              <strong>Educar</strong>, a partir de la <strong>cercanía y personalización</strong> logrando el <strong>éxito académico de cada estudiante</strong>, impartiendo un marco de sólidos valores y tradiciones <strong>judías</strong>, vinculadas a nuestras raíces. Contribuyendo en la incorporación de diferentes recursos <strong>tecnológicos e innovadores</strong> que permitan la formación de niños y niñas <strong>emprendedores</strong> con la habilidad y criterio resolutivo para adaptarse de forma <strong>independiente</strong> a los escenarios que les presente el futuro.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl p-6 text-white">
            <div className="text-center mb-4">
              <h4 className="font-heading font-bold text-2xl mb-2 text-white">VISIÓN</h4>
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
                <span>Ofrecer una <strong>enseñanza integral BILINGÜE</strong> castellano-inglés y con orientación y certificación en lengua hebrea, para la formación de niños y niñas emprendedores, que puedan <strong>afrontar con éxito los nuevos paradigmas de la educación del siglo XXI</strong>.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitucionalSection;
