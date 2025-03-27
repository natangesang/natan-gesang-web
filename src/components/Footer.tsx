
import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-natan-blue text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-5">
              <img
                src="/public/lovable-uploads/5736a151-604b-4831-be6a-9d3fa1cd7c78.png"
                alt="Natan Gesang"
                className="h-16 bg-white rounded-md p-1"
              />
            </div>
            <p className="text-blue-100 mb-6">
              Formando ciudadanos globales con valores judíos e innovación tecnológica para los desafíos del mañana.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/natangesangarg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-blue-100 hover:text-white transition-colors duration-300">Inicio</a>
              </li>
              <li>
                <a href="#propuesta" className="text-blue-100 hover:text-white transition-colors duration-300">Propuesta educativa</a>
              </li>
              <li>
                <a href="#niveles" className="text-blue-100 hover:text-white transition-colors duration-300">Niveles</a>
              </li>
              <li>
                <a href="#tecnologia" className="text-blue-100 hover:text-white transition-colors duration-300">Tecnología</a>
              </li>
              <li>
                <a href="#galeria" className="text-blue-100 hover:text-white transition-colors duration-300">Galería</a>
              </li>
              <li>
                <a href="#contacto" className="text-blue-100 hover:text-white transition-colors duration-300">Contacto</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Niveles educativos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#niveles" className="text-blue-100 hover:text-white transition-colors duration-300">Jardín de infantes</a>
              </li>
              <li>
                <a href="#niveles" className="text-blue-100 hover:text-white transition-colors duration-300">Escuela primaria</a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300">Admisiones</a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300">Programa bilingüe</a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300">Programa de hebreo</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-200 mr-3 mt-1" />
                <span className="text-blue-100">Av. Ejemplo 1234, Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-200 mr-3 mt-1" />
                <span className="text-blue-100">+54 9 11 5108-4063</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-200 mr-3 mt-1" />
                <span className="text-blue-100">info@natangesang.edu.ar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              &copy; {currentYear} Natan Gesang - Escuela Internacional. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0 text-sm text-blue-200 flex space-x-4">
              <a href="#" className="hover:text-white transition-colors duration-300">Política de privacidad</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors duration-300">Términos y condiciones</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
