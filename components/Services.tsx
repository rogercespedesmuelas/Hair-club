
import React from 'react';

const services = [
  {
    title: "Corte Imperial",
    price: "35€",
    description: "Corte de autor con asesoría de imagen, lavado premium y peinado con productos de alta gama.",
    icon: "✂️"
  },
  {
    title: "Ritual de Barba",
    price: "25€",
    description: "Afeitado a navaja clásica con toalla caliente, aceites esenciales y masaje facial.",
    icon: "🪒"
  },
  {
    title: "Servicio Royal",
    price: "55€",
    description: "La experiencia completa: Corte Imperial + Ritual de Barba + Exfoliación capilar.",
    icon: "👑"
  },
  {
    title: "Cuidado Facial",
    price: "20€",
    description: "Limpieza profunda y tratamiento hidratante adaptado a la piel masculina.",
    icon: "✨"
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-[#D4AF37] text-xs tracking-[0.7em] uppercase mb-6 font-bold">Selección Exclusiva</h2>
        <h3 className="text-5xl md:text-6xl font-bold mb-20 font-serif">MENÚ DE EXCELENCIA</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-10 group hover:border-[#D4AF37] transition-all duration-500 rounded-sm text-left flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 -mr-12 -mt-12 rounded-full group-hover:bg-[#D4AF37]/10 transition-colors"></div>
              
              <div>
                <span className="text-4xl mb-8 block filter grayscale group-hover:grayscale-0 transition-all">{service.icon}</span>
                <h4 className="text-xl font-bold mb-4 group-hover:text-gold transition-colors font-serif tracking-wide">{service.title}</h4>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed font-light">{service.description}</p>
              </div>
              <div className="flex justify-between items-center border-t border-[#D4AF37]/20 pt-6">
                <span className="text-gold font-serif text-2xl font-bold">{service.price}</span>
                <button className="text-[9px] uppercase font-black tracking-[0.3em] text-white group-hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37] pb-1">Seleccionar</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <p className="text-gray-600 italic text-sm font-light">
            <span className="text-[#D4AF37]">Complimentary:</span> Todos nuestros servicios incluyen café premium o selección de licores.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
