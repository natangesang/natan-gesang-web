
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuario intentó acceder a una ruta inexistente:",
      location.pathname
    );
    
    // Update document title
    document.title = 'Página no encontrada | Natan Gesang';
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-natan-blue to-natan-skyblue text-white px-4">
      <div className="text-center max-w-lg glass-card p-12 border border-white/30 bg-white/10 backdrop-blur-lg rounded-xl">
        <h1 className="font-heading text-5xl font-bold mb-6">404</h1>
        <p className="text-xl mb-8">Lo sentimos, la página que buscas no existe.</p>
        <a
          href="/"
          className="inline-block bg-white text-natan-blue font-medium px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
