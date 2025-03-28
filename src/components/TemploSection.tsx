
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TemploSection = () => {
  return (
    <section id="templo" className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-20">
      {/* Decorative geometric shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-natan-purple opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-natan-teal opacity-10 -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-section relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4 inline-block relative">
            Nuestro Templo
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-natan-orange to-natan-pink"></span>
          </h2>
          <p className="subtitle mx-auto">Un espacio de conexión con nuestras raíces y tradiciones</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Card className="glass-card overflow-hidden border-none bg-white/70">
              <CardContent className="p-8">
                <div className="flex items-center mb-4 text-natan-blue">
                  <Star className="mr-2" size={24} />
                  <h3 className="text-xl font-semibold">Espacio sagrado</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Nuestro templo es un espacio de encuentro y reflexión, donde cultivamos la conexión con nuestra herencia judía y fortalecemos los valores que nos identifican como comunidad.
                </p>
                <div className="flex items-center mb-4 text-natan-blue">
                  <Star className="mr-2" size={24} />
                  <h3 className="text-xl font-semibold">Celebraciones</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  A lo largo del año, celebramos las festividades judías tradicionales, brindando a nuestros alumnos una experiencia rica en espiritualidad y significado cultural.
                </p>
                <a href="#contacto" className="btn-primary mt-4 inline-block">Conocer más</a>
              </CardContent>
            </Card>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-video bg-natan-blue/10 rounded-xl overflow-hidden relative">
              {/* Placeholder for temple image */}
              <div className="absolute inset-0 bg-gradient-to-br from-natan-blue/20 to-natan-purple/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <Star className="text-white" size={32} />
                  </div>
                  <p className="text-white font-medium">Imagen del Templo</p>
                </div>
              </div>
            </div>
            {/* Geometric accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-natan-yellow rounded-full opacity-30 z-0"></div>
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-natan-pink rounded-md opacity-30 z-0 rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemploSection;
