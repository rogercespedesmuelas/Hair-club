
import React from 'react';
import FallbackImage from './FallbackImage';

const Gallery: React.FC = () => {
  const images = [
    {
        url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800",
        title: "Fade de Precisión",
        category: "Corte de Autor"
    },
    {
        url: "https://images.unsplash.com/photo-1599351431247-f10b21ce53e2?auto=format&fit=crop&q=80&w=800",
        title: "Perfilado de Barba",
        category: "Ritual Tradicional"
    },
    {
        url: "https://images.unsplash.com/photo-1593702275677-f916c8c70ca4?auto=format&fit=crop&q=80&w=800",
        title: "Ambiente Exclusivo",
        category: "Hair Club Salou"
    }
  ];

  return (
    <section id="galeria" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[#FFD700] text-xs tracking-[0.6em] uppercase mb-4">Muestra de Maestría</h2>
          <h3 className="text-5xl md:text-6xl font-bold font-serif mb-6">EL ARTE DEL CORTE</h3>
          <div className="w-24 h-[1px] bg-[#FFD700] mx-auto opacity-30"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden aspect-[4/5] border border-white/5 rounded-sm"
            >
              <FallbackImage 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-[#FFD700] text-[10px] uppercase tracking-[0.3em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">{item.category}</p>
                <h4 className="text-2xl font-serif text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <button className="group flex items-center gap-4 border border-[#FFD700]/30 px-10 py-4 hover:bg-[#FFD700] hover:text-black transition-all duration-300">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Ver más en nuestro Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
