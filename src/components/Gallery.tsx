
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1610493739141-610fddfe558c?q=80&w=2069",
      alt: "Estudiantes en clase",
      caption: "Aprendizaje activo en nuestras aulas"
    },
    {
      src: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=1974",
      alt: "Niños en actividad creativa",
      caption: "Fomentando la creatividad desde pequeños"
    },
    {
      src: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974",
      alt: "Actividades tecnológicas",
      caption: "Integrando tecnología en el aprendizaje diario"
    },
    {
      src: "https://images.unsplash.com/photo-1564429097439-ccada0f98df9?q=80&w=2069",
      alt: "Celebración de tradiciones",
      caption: "Viviendo nuestras tradiciones con alegría"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

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

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div ref={sectionRef} className="container-section opacity-0 translate-y-10 transition-all duration-700">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">Galería</h2>
          <p className="subtitle mx-auto">
            Momentos que capturan nuestra comunidad educativa en acción
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[500px] overflow-hidden rounded-xl shadow-natan">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0 z-10' 
                    : index < activeIndex 
                      ? 'opacity-0 -translate-x-full z-0' 
                      : 'opacity-0 translate-x-full z-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="text-xl font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/40 transition-all duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/40 transition-all duration-300"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
