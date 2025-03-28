
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ChevronRight, Calendar, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Inscripciones 2024',
      excerpt: 'Ya están abiertas las inscripciones para el ciclo lectivo 2024. ¡Asegure su lugar!',
      date: '10 Jul 2023',
      image: '/lovable-uploads/715e4631-5127-4c77-8a8b-c870578b1cb5.png'
    },
    {
      id: 2,
      title: 'Proyecto de innovación',
      excerpt: 'Nuestros alumnos participaron en la feria de ciencias con proyectos de innovación tecnológica.',
      date: '5 Jul 2023',
      image: '/lovable-uploads/b99cce86-77e0-41ae-957a-d9d794587be9.png'
    },
    {
      id: 3,
      title: 'Celebración de Purim',
      excerpt: 'La comunidad escolar celebró la festividad de Purim con disfraces y actividades tradicionales.',
      date: '1 Jul 2023',
      image: '/lovable-uploads/715e4631-5127-4c77-8a8b-c870578b1cb5.png'
    },
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/natan-gesang/', 
      icon: <Linkedin size={24} />,
      color: 'bg-blue-600' 
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/natangesangarg/?hl=es', 
      icon: <Instagram size={24} />,
      color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500' 
    },
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/natan.gesang/?locale=es_LA', 
      icon: <Facebook size={24} />,
      color: 'bg-blue-700' 
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/channel/UC7eBMzuGqU2n3VvEioPmOYg', 
      icon: <Youtube size={24} />,
      color: 'bg-red-600' 
    },
  ];

  return (
    <section id="novedades" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Geometric shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-natan-yellow opacity-10 rotate-45"></div>
      <div className="absolute -bottom-20 left-10 w-80 h-80 rounded-full bg-natan-pink opacity-10"></div>
      <div className="absolute top-40 left-0 h-40 w-40 bg-natan-teal opacity-10 rounded-full"></div>
      
      <div className="container-section relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="heading-2 mb-2 inline-block relative">
              Novedades
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-natan-pink to-natan-purple"></span>
            </h2>
            <p className="subtitle">Mantente al día con las últimas actividades y eventos</p>
          </div>
          <a href="#" className="btn-primary mt-4 md:mt-0">Ver todas las novedades</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {news.map((item) => (
            <Card key={item.id} className="glass-card overflow-hidden border-none hover:shadow-natan-hover transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center text-white">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{item.date}</span>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-natan-blue">{item.title}</h3>
                <p className="text-gray-600">{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <a href="#" className="inline-flex items-center text-natan-blue font-medium hover:text-natan-orange transition-colors">
                  Leer más
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-natan-blue to-natan-purple rounded-2xl overflow-hidden shadow-natan">
          <div className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Síguenos en redes sociales</h3>
              <p className="text-blue-100 mb-8">Mantente conectado con nuestra comunidad educativa y entérate de todas las actividades</p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`${social.color} hover:opacity-90 transition-opacity p-4 rounded-full text-white flex items-center justify-center shadow-lg`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="h-3 bg-gradient-to-r from-natan-yellow via-natan-orange to-natan-pink"></div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
