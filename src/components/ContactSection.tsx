
import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo a la brevedad.",
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="contacto" className="py-20 bg-white">
      <div ref={sectionRef} className="container-section opacity-0 translate-y-10 transition-all duration-700">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">Contacto</h2>
          <p className="subtitle mx-auto">
            Estamos para responder tus consultas y ayudarte en el proceso de admisión
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-6">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-natan-blue/10 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-natan-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Teléfono</h4>
                  <p className="text-gray-600">+54 9 11 5108-4063</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-natan-blue/10 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-natan-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@natangesang.edu.ar</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-natan-blue/10 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-natan-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Dirección</h4>
                  <p className="text-gray-600">Av. Ejemplo 1234, Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Horario de atención</h4>
              <p className="text-gray-600 mb-2">Lunes a Viernes: 8:00 - 16:00</p>
              <p className="text-gray-600">Sábados y Domingos: Cerrado</p>
            </div>
            
            <div className="pt-6">
              <a
                href="https://wa.me/5491151084063"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contáctanos por WhatsApp
              </a>
            </div>
          </div>
          
          <div className="glass-card p-8">
            <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-6">
              Envíanos un mensaje
            </h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-natan-blue focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-natan-blue focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-natan-blue focus:border-transparent"
                  placeholder="+54 9..."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-natan-blue focus:border-transparent"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full flex justify-center items-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
