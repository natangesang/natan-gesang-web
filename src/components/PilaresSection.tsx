import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
const PilaresSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pilaresRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [expandedPilar, setExpandedPilar] = useState<number | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, {
      threshold: 0.1
    });
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
  const pilares = [{
    icon: <div className="w-16 h-16 rounded-lg overflow-hidden">
          <img src="/lovable-uploads/007342b7-cf3e-46d5-b9c0-4a8a1f77c61e.png" alt="Proyecto Educativo" className="w-full h-full object-cover" />
        </div>,
    title: "Proyecto Educativo",
    description: "Acompañamos de manera personalizada a cada alumno, brindándole la posibilidad de un constante crecimiento, en un entorno cálido y con desafíos que estimulen el deseo de seguir aprendiendo, una educación bilingüe y de calidad, junto a las herramientas tecnológicas necesarias para su futuro."
  }, {
    icon: <div className="w-16 h-16 rounded-lg overflow-hidden">
          <img src="/lovable-uploads/8a8efef4-86c4-4085-b1c3-7cbf963d52db.png" alt="Excelencia Académica" className="w-full h-full object-cover" />
        </div>,
    title: "Excelencia Académica",
    description: "Nuestros alumnos desarrollan al máximo sus potencialidades, favoreciendo la construcción de competencias que permitan el acceso crítico y reflexivo al conocimiento, celebrando cada logro alcanzado."
  }, {
    icon: <div className="w-16 h-16 rounded-lg overflow-hidden">
          <img src="/lovable-uploads/8ba07f59-0382-461c-9776-3210328f3f51.png" alt="Bilingual School" className="w-full h-full object-cover" />
        </div>,
    title: "Bilingual School",
    description: "El Nivel Primario cuenta con un sólido proyecto educativo oficial de Jornada completa Bilingüe en Inglés con Formación en Lengua y Cultura Judaica. Implementamos desde sala de 2 años propuestas diversas e inmersivas, desde un enfoque inmersivo favoreciendo lo comunicativo para la preparación de ciudadanos globales. El dominio de la lengua está certificado por la Asociación Argentina de Cultura Inglesa y se rinden los exámenes internacionales de Cambridge."
  }, {
    icon: <div className="w-16 h-16 rounded-lg overflow-hidden">
          <img src="/lovable-uploads/74f0982e-0010-4dbe-8f2c-2b8673fe9cca.png" alt="Educación Financiera" className="w-full h-full object-cover" />
        </div>,
    title: "Educación Financiera",
    description: "Consideramos necesaria la adopción e internalización de la educación financiera como herramienta superadora para nuestros alumnos. Partiendo de su primer emprendimiento, el Kiosco, llegando a armar carteras virtuales de inversión con cotización real en una simulación bursátil."
  }, {
    icon: <div className="w-16 h-16 rounded-lg overflow-hidden">
          <img src="/lovable-uploads/9ad98ac7-fd4a-463a-8ec9-9ba0ad668700.png" alt="Tecnología e Innovación" className="w-full h-full object-cover" />
        </div>,
    title: "Tecnología e Innovación",
    description: "En tecnología, robótica y programación nos proponemos acompañar a nuestros estudiantes para que puedan idear soluciones creativas a través de \"Aprender haciendo\" en nuestro TecnoLab con equipamiento de avanzada."
  }, {
    icon: <div className="w-16 h-16 rounded-lg overflow-hidden">
          <img src="/lovable-uploads/ccc2a459-5869-4d8d-b465-7343b33237c5.png" alt="Tradición Judía" className="w-full h-full object-cover" />
        </div>,
    title: "Tradición Judía",
    description: "Vivimos nuestro judaísmo de manera plena, bajo el concepto de \"Amiut\": un fuerte sentido de pertenencia; son nuestras raíces, valores, costumbres y festividades. Enseñamos el ivrit como motor para construir y transformar ese mundo identitario."
  }];
  return <section id="pilares" className="relative py-20 overflow-hidden" style={{
    backgroundColor: '#005cb9ff'
  }}>
      {/* Marco lateral izquierdo - esquina superior izquierda */}
      
      
      {/* Marco lateral derecho - esquina inferior derecha */}
      <div style={{
      backgroundImage: `url('/lovable-uploads/73c1bf17-f538-4091-a067-91d395569c35.png')`,
      backgroundSize: '120px 620px',
      backgroundPosition: 'right bottom',
      backgroundRepeat: 'no-repeat'
    }} className="absolute right-0 bottom-0 w-[75px] h-[500px] z-0" />

      <div ref={sectionRef} className="container-section opacity-0 translate-y-10 transition-all duration-700 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white mb-4">Nuestros Pilares</h2>
          <p className="subtitle mx-auto text-white/90">
            Los fundamentos que sostienen nuestro modelo educativo y nos hacen únicos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pilares.map((pilar, index) => <div key={index} ref={el => pilaresRefs.current[index] = el} className="opacity-0 translate-y-10 transition-all duration-700 glass-card p-8 flex flex-col items-center text-center bg-white/10 backdrop-blur-md border-white/20" style={{
          transitionDelay: `${index * 100}ms`
        }}>
              <div className="mb-6">{pilar.icon}</div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-white">{pilar.title}</h3>
              
              <div className="w-full">
                <button onClick={() => toggleExpanded(index)} className="flex items-center justify-center w-full text-natan-orange hover:text-natan-orange/80 transition-colors mb-3">
                  <span className="mr-2">Leer más</span>
                  {expandedPilar === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${expandedPilar === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-white/80 text-sm leading-relaxed">{pilar.description}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default PilaresSection;