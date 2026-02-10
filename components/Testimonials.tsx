
import React from 'react';

const testimonials = [
  {
    name: "Javier Rodríguez",
    role: "Cliente VIP",
    comment: "La mejor experiencia de barbería en Madrid. El trato es impecable y el resultado siempre supera mis expectativas. El ritual de barba es obligatorio.",
    rating: 5
  },
  {
    name: "Marcos García",
    role: "Emprendedor",
    comment: "Un lugar donde la estética y el profesionalismo se dan la mano. Entras como un cliente y sales sintiéndote como un rey.",
    rating: 5
  },
  {
    name: "Daniel López",
    role: "Modelo",
    comment: "Confío mi imagen solo a ellos. Entienden perfectamente lo que busco y saben cómo potenciar mis rasgos.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#FFD700]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#FFD700] text-sm tracking-[0.4em] uppercase mb-4">Testimonios</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-serif">Lo Que Dicen de Nosotros</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="glass-card p-10 relative rounded-sm hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="text-[#FFD700] text-2xl mb-6">"</div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">
                {t.comment}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FFD700] to-yellow-600 flex items-center justify-center text-black font-bold font-serif">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <p className="text-[10px] text-[#FFD700] uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
              <div className="mt-6 flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-[#FFD700] text-xs">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
