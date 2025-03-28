
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <a
          href="/"
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/lovable-uploads/ec87831b-f2ae-4525-98d0-5e29f178d93c.png"
            alt="Natan Gesang"
            className="h-20" // Changed from h-14 to h-20 to make the logo bigger
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks scrolled={scrolled} />
          <div className="flex space-x-3">
            <a
              href="https://padres.natangesang.edu.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded bg-natan-blue text-white hover:bg-natan-blue/90 transition-colors"
            >
              Portal Padres
            </a>
            <a
              href="https://classroom.natangesang.edu.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded bg-natan-orange text-white hover:bg-natan-orange/90 transition-colors"
            >
              Classroom
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-natan-blue/95 z-40 flex flex-col justify-center items-center space-y-8 p-4 transition-all duration-500 md:hidden',
          isOpen ? 'opacity-100 top-0' : 'opacity-0 top-[-100%] pointer-events-none'
        )}
      >
        <NavLinks mobile onClick={() => setIsOpen(false)} />
        <div className="flex flex-col space-y-3">
          <a
            href="https://padres.natangesang.edu.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-white text-natan-blue hover:bg-opacity-90 transition-colors text-center"
            onClick={() => setIsOpen(false)}
          >
            Portal Padres
          </a>
          <a
            href="https://classroom.natangesang.edu.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-natan-orange text-white hover:bg-opacity-90 transition-colors text-center"
            onClick={() => setIsOpen(false)}
          >
            Classroom
          </a>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  scrolled?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ mobile = false, scrolled = false, onClick }: NavLinksProps) => {
  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#institucional', label: 'Institucional' },
    { href: '#pilares', label: 'Pilares' },
    { href: '#niveles', label: 'Niveles' },
    { href: '#templo', label: 'Templo' },
    { href: '#novedades', label: 'Novedades' },
    { href: '#galeria', label: 'Galería' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={cn(
            mobile
              ? 'text-xl font-medium py-2 text-white'
              : 'font-medium transition-colors duration-300 relative drop-shadow-md after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-natan-orange after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100',
              scrolled 
                ? 'text-natan-blue hover:text-natan-orange' 
                : 'text-white hover:text-natan-orange'
          )}
          onClick={onClick}
        >
          {link.label}
        </a>
      ))}
    </>
  );
};

export default Navbar;
