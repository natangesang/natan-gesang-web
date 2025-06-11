import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart } from 'lucide-react';

const TemploSection = () => {
  return (
    <section id="templo" className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-20">
      {/* Decorative geometric shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-natan-purple opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-natan-teal opacity-10 -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-section relative z-10">
        <div className="text-center mb-12">
          {/* Logo del Templo */}
          <div className="flex justify-center mb-6">
            <img src="/lovable-uploads/bfe9cd4f-11c5-477c-8124-75b2183a8847.png" alt="Natan Gesang - Templo Bet Jai" className="h-24 md:h-32" />
          </div>
          
          <p className="subtitle mx-auto" style={{
          fontFamily: 'Nunito, Montserrat, Roboto, "Open Sans", sans-serif'
        }}>
            Un espacio de conexión con nuestras raíces y tradiciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <Card className="glass-card overflow-hidden border-none bg-white/70">
              <CardContent className="p-8">
                <div className="flex items-center mb-4 text-natan-blue">
                  <Star className="mr-2" size={24} />
                  <h3 className="text-xl font-semibold" style={{
                  fontFamily: 'Nunito, Montserrat, Roboto, "Open Sans", sans-serif'
                }}>
                    Espacio sagrado
                  </h3>
                </div>
                <p className="mb-4 text-gray-700" style={{
                fontFamily: 'Nunito, Montserrat, Roboto, "Open Sans", sans-serif'
              }}>
                  Nuestro templo es un espacio de encuentro y reflexión, donde cultivamos la conexión con nuestra herencia judía y fortalecemos los valores que nos identifican como comunidad.
                </p>
                <div className="flex items-center mb-4 text-natan-blue">
                  <Star className="mr-2" size={24} />
                  <h3 className="text-xl font-semibold" style={{
                  fontFamily: 'Nunito, Montserrat, Roboto, "Open Sans", sans-serif'
                }}>
                    Celebraciones
                  </h3>
                </div>
                <p className="mb-4 text-gray-700" style={{
                fontFamily: 'Nunito, Montserrat, Roboto, "Open Sans", sans-serif'
              }}>
                  A lo largo del año, celebramos las festividades judías tradicionales, brindando a nuestros alumnos una experiencia rica en espiritualidad y significado cultural.
                </p>
                <a href="#contacto" className="btn-primary mt-4 inline-block" style={{
                fontFamily: 'Nunito, Montserrat, Roboto, "Open Sans", sans-serif'
              }}>
                  Conocer más
                </a>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            <div className="aspect-video bg-natan-blue/10 rounded-xl overflow-hidden relative">
              <img src="/lovable-uploads/c0abaf58-9a55-4d64-a0cb-0a154bb46beb.png" alt="Ceremonia en el Templo Natan Gesang" className="w-full h-full object-cover" />
            </div>
            {/* Geometric accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-natan-yellow rounded-full opacity-30 z-0"></div>
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-natan-pink rounded-md opacity-30 z-0 rotate-45"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative order-2 md:order-1">
            <div className="aspect-video bg-natan-blue/10 rounded-xl overflow-hidden relative">
              <img src="/lovable-uploads/4bdcb0e4-712f-45f0-8b64-9269903cf406.png" alt="Elementos ceremoniales del Templo" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-natan-teal rounded-full opacity-30 z-0"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-natan-orange rounded-md opacity-30 z-0 rotate-12"></div>
          </div>
          <div className="order-1 md:order-2">
            <Card className="glass-card overflow-hidden border-none bg-white/70">
              <CardContent className="p-8">
                <div className="flex items-center mb-4 text-natan-blue">
                  <Star className="mr-2" size={24} />
                  <h3 className="text-xl font-semibold" style={{
                  fontFamily: 'Nunito, Montserrat, Roboto, "Open Sans", sans-serif'
                }}>
                    Tradición y Modernidad
                  </h3>
                </div>
                <p className="mb-4 text-gray-700" style={{
                fontFamily: 'Nunito, Montserrat, Roboto, "Open Sans", sans-serif'
              }}>
                  En nuestro templo se fusionan la tradición milenaria judía con un enfoque moderno y dinámico, creando un ambiente donde cada generación encuentra su lugar en la continuidad de nuestra herencia cultural.
                </p>
                <div className="flex items-center mb-4 text-natan-blue">
                  <Star className="mr-2" size={24} />
                  <h3 className="text-xl font-semibold" style={{
                  fontFamily: 'Nunito, Montserrat, Roboto, "Open Sans", sans-serif'
                }}>
                    Comunidad Unida
                  </h3>
                </div>
                <p className="text-gray-700" style={{
                fontFamily: 'Nunito, Montserrat, Roboto, "Open Sans", sans-serif'
              }}>
                  Familias de todas las edades se reúnen para compartir momentos significativos, fortaleciendo los lazos comunitarios y transmitiendo valores que trascienden generaciones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Nueva sección de celebraciones especiales */}
        <div className="mt-16">
          <Card className="glass-card overflow-hidden border-none bg-white/70">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-6 text-natan-blue">
                <Heart className="mr-2" size={32} />
                <h3 className="text-2xl font-bold" style={{
                fontFamily: 'Nunito, Montserrat, Roboto, "Open Sans", sans-serif'
              }}>
                  Honra tus Momentos Especiales con Nosotros
                </h3>
              </div>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto" style={{
              fontFamily: 'Nunito, Montserrat, Roboto, "Open Sans", sans-serif'
            }}>
                Reserva tu fecha para Bar y Bat Mitzvah, Brit Milá, Simjat Bat, compromisos, casamientos y otros eventos significativos.
              </p>
              <a href="#contacto" className="btn-primary mt-6 inline-block" style={{
              fontFamily: 'Nunito, Montserrat, Roboto, "Open Sans", sans-serif'
            }}>
                Reservar tu fecha
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TemploSection;
