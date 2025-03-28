
import React from 'react';
import { Users, BookOpen, ArrowRight } from 'lucide-react';

const AccessSection = () => {
  return (
    <section id="acceso" className="bg-gradient-to-r from-natan-blue to-natan-purple py-16 text-white relative overflow-hidden">
      {/* Geometric decorations */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-5 rotate-45"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white opacity-5"></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Acceso a Sistemas</h2>
          <p className="text-blue-100">Plataformas digitales para nuestra comunidad educativa</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Parents access */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-natan-orange flex items-center justify-center mr-4">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Portal de Padres</h3>
            </div>
            <p className="mb-4 text-blue-100">
              Acceda al sistema exclusivo para padres donde podrá consultar calificaciones, 
              comunicaciones y gestionar trámites relacionados con la educación de su hijo.
            </p>
            <a 
              href="https://padres.natangesang.edu.ar" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center font-medium text-natan-orange hover:text-natan-lightorange transition-colors"
            >
              Ingresar al portal
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
          
          {/* Classroom access */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-natan-skyblue flex items-center justify-center mr-4">
                <BookOpen size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Classroom</h3>
            </div>
            <p className="mb-4 text-blue-100">
              Plataforma de aprendizaje virtual donde los estudiantes acceden a contenidos 
              académicos, entregan tareas y participan en actividades interactivas.
            </p>
            <a 
              href="https://classroom.natangesang.edu.ar" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center font-medium text-natan-skyblue hover:text-natan-lightblue transition-colors"
            >
              Ingresar a classroom
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
