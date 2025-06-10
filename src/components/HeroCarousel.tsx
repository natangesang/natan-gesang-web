
import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const HeroCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/f7fedd64-c34e-49db-9d54-aea4e804a611.png",
      alt: "Estudiante sonriendo con uniforme escolar"
    },
    {
      src: "/lovable-uploads/b67ebe7c-063e-4220-8f8a-8352ec780e53.png",
      alt: "Estudiantes con banderas"
    },
    {
      src: "/lovable-uploads/914ae14d-bea0-4a71-a047-aeb5a6fc1499.png",
      alt: "Estudiante trabajando con tecnología"
    },
    {
      src: "/lovable-uploads/34522029-35c0-4688-9ff4-724f4c5ca816.png",
      alt: "Niños pequeños con bandera de Israel"
    },
    {
      src: "/lovable-uploads/eccef3ff-23f9-4f8e-b3c7-5d97231f71d8.png",
      alt: "Familia en evento escolar"
    },
    {
      src: "/lovable-uploads/3e3f3bf5-7600-416c-a206-6764f3f5638c.png",
      alt: "Estudiante adolescente sonriendo"
    },
    {
      src: "/lovable-uploads/048ef626-dd3a-45c5-8bac-88d9c97b3ad8.png",
      alt: "Estudiantes en aula con materiales educativos"
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

  // Agrupar las imágenes de 3 en 3
  const imageGroups = [];
  for (let i = 0; i < images.length; i += 3) {
    imageGroups.push(images.slice(i, i + 3));
  }

  const [api, setApi] = React.useState<CarouselApi>();

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <Carousel
        setApi={setApi}
        plugins={[autoplayPlugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        onMouseEnter={autoplayPlugin.current.stop}
        onMouseLeave={autoplayPlugin.current.reset}
      >
        <CarouselContent>
          {imageGroups.map((group, groupIndex) => (
            <CarouselItem key={groupIndex} className="w-full">
              <div className="grid grid-cols-3 gap-4 px-2">
                {group.map((image, imageIndex) => (
                  <div key={imageIndex} className="relative rounded-2xl overflow-hidden shadow-natan h-[280px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-natan-blue/30 to-transparent z-10"></div>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
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
