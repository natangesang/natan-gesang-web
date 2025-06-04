
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const HeroCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/03cc71a6-a920-4317-95e2-c0e696f78aa2.png",
      alt: "Estudiantes trabajando en el aula"
    },
    {
      src: "/lovable-uploads/acd11d3c-98a1-4abb-9f90-656b6b8eb764.png",
      alt: "Niños pequeños jugando"
    },
    {
      src: "/lovable-uploads/a987e466-bf5e-4b9b-8330-63acebddbf32.png",
      alt: "Estudiante usando tecnología"
    },
    {
      src: "/lovable-uploads/35fff9fe-971a-434d-b55d-38aa0c5da73b.png",
      alt: "Estudiantes de secundaria"
    },
    {
      src: "/lovable-uploads/c18d95bf-40cb-4e12-a6a5-8ed0460ef00e.png",
      alt: "Alumnos con materiales educativos"
    },
    {
      src: "/lovable-uploads/7f16cd76-2abe-4248-8cf6-a40c0336efb4.png",
      alt: "Niño pequeño en el aula"
    },
    {
      src: "/lovable-uploads/929ebeee-2cbf-482b-8bc5-8a19dc47bcbe.png",
      alt: "Familia en ceremonia de graduación"
    },
    {
      src: "/lovable-uploads/dd275cdc-2e41-4551-b363-dff0677c2f48.png",
      alt: "Estudiantes sonriendo en el aula"
    },
    {
      src: "/lovable-uploads/588aa4c1-2219-4f49-acad-fddfc66671be.png",
      alt: "Comunidad educativa"
    }
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="relative rounded-2xl overflow-hidden shadow-natan h-[280px] mx-2">
                <div className="absolute inset-0 bg-gradient-to-t from-natan-blue/30 to-transparent z-10"></div>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white/90 hover:bg-white text-natan-blue border-white/50" />
        <CarouselNext className="bg-white/90 hover:bg-white text-natan-blue border-white/50" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
