
import React, { useEffect, useState, useCallback } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const HeroCarousel = () => {
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: string]: boolean }>({});
  const [api, setApi] = useState<CarouselApi>();

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
      src: "/lovable-uploads/de55bc52-5796-47d5-b1d6-86add0e3f114.png",
      alt: "Estudiantes sonriendo en el aula"
    },
    {
      src: "/lovable-uploads/8149309d-a321-4e36-8ab3-a8d8a07763c5.png",
      alt: "Comunidad educativa"
    }
  ];

  // Preload images with intersection observer for better performance
  useEffect(() => {
    const preloadFirstImages = images.slice(0, 3);
    
    preloadFirstImages.forEach((image) => {
      const img = new Image();
      img.onload = () => {
        setImagesLoaded(prev => ({ ...prev, [image.src]: true }));
      };
      img.src = image.src;
    });

    // Lazy load remaining images
    const timer = setTimeout(() => {
      images.slice(3).forEach((image) => {
        const img = new Image();
        img.onload = () => {
          setImagesLoaded(prev => ({ ...prev, [image.src]: true }));
        };
        img.src = image.src;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Agrupar las imágenes de 3 en 3
  const imageGroups = [];
  for (let i = 0; i < images.length; i += 3) {
    imageGroups.push(images.slice(i, i + 3));
  }

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const handleImageLoad = useCallback((src: string) => {
    setImagesLoaded(prev => ({ ...prev, [src]: true }));
  }, []);

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
                    {!imagesLoaded[image.src] && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-natan-blue border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${
                        imagesLoaded[image.src] ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading={groupIndex === 0 ? "eager" : "lazy"}
                      decoding="async"
                      onLoad={() => handleImageLoad(image.src)}
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
