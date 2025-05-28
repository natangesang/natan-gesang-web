
import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-natan-blue text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-5">
              <img
                src="/lovable-uploads/ec87831b-f2ae-4525-98d0-5e29f178d93c.png"
                alt="Natan Gesang"
                className="h-16 bg-white rounded-md p-1"
              />
            </div>
            <p className="text-blue-100 mb-6">
              Formando ciudadanos globales con valores judíos e innovación tecnológica para los desafíos del mañana.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/natangesangarg/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/natan.gesang/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/natan-gesang/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UC7eBMzuGqU2n3VvEioPmOYg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
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
                <a href="#institucional" className="text-blue-100 hover:text-white transition-colors duration-300">Institucional</a>
              </li>
              <li>
                <a href="#niveles" className="text-blue-100 hover:text-white transition-colors duration-300">Niveles</a>
              </li>
              <li>
                <a href="#pilares" className="text-blue-100 hover:text-white transition-colors duration-300">Pilares</a>
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
                <a href="#contacto" className="text-blue-100 hover:text-white transition-colors duration-300">Admisiones</a>
              </li>
              <li>
                <a href="#pilares" className="text-blue-100 hover:text-white transition-colors duration-300">Programa bilingüe</a>
              </li>
              <li>
                <a href="#pilares" className="text-blue-100 hover:text-white transition-colors duration-300">Programa de hebreo</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-200 mr-3 mt-1" />
                <span className="text-blue-100">José A. Cabrera 3059, C1186 Cdad. Autónoma de Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-200 mr-3 mt-1" />
                <span className="text-blue-100">+54 11 4963-1649</span>
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
