
import React from 'react';

const PermanentBanner = () => {
  return (
    <div className="bg-gradient-to-r from-natan-blue to-natan-purple text-white py-3 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-white opacity-5 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-white opacity-5 rotate-45 translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <p className="text-center text-sm md:text-base leading-relaxed">
          <span className="font-semibold">Creada en 1920</span>, nuestra institución sin fines de lucro está abocada a la educación. 
          Somos una comunidad dinámica y en constante transformación. 
          <span className="font-semibold"> Formamos líderes del futuro</span> con excelencia académica, valores judíos y una educación bilingüe integral.
        </p>
      </div>
    </div>
  );
};

export default PermanentBanner;
