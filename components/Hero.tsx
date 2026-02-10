
import React from 'react';
import FallbackImage from './FallbackImage';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black" id="club">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:60px_60px]"></div>
      </div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="animate-fade-in">
          <div className="inline-block border-l-4 border-[#D4AF37] pl-5 mb-8">
            <h2 className="text-[#D4AF37] text-xs font-bold tracking-[0.6em] uppercase">Premium Barber Club • Salou</h2>
          </div>
          <h1 className="text-7xl md:text-9xl font-bold mb-10 leading-[0.85] font-serif">
            HAIR <br /> <span className="text-gold">CLUB</span>
          </h1>
          <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed font-light">
            Donde la artesanía tradicional se encuentra con el lujo moderno. Una experiencia exclusiva de cuidado personal en el corazón de Salou.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-gold text-black px-14 py-5 font-black uppercase tracking-[0.25em] text-[10px] hover:brightness-110 transition-all shadow-[0_10px_30px_rgba(212,175,55,0.2)] rounded-sm">
              Reservar Experiencia
            </button>
            <button className="border border-[#D4AF37]/30 bg-black/40 px-14 py-5 font-bold uppercase tracking-[0.25em] text-[10px] text-white hover:bg-white hover:text-black transition-all rounded-sm backdrop-blur-sm">
              Servicios VIP
            </button>
          </div>
          
          <div className="mt-20 flex items-center gap-12 border-t border-white/5 pt-12">
            <div>
              <p className="text-3xl font-serif text-gold">365</p>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Días Abiertos</p>
            </div>
            <div className="w-[1px] h-14 bg-[#D4AF37]/20"></div>
            <div>
              <p className="text-3xl font-serif text-gold">10-22h</p>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Horario Club</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in [animation-delay:300ms]">
          <div className="relative z-10 rounded-sm overflow-hidden border-2 border-[#D4AF37]/20 aspect-[3/4] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <FallbackImage 
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200" 
              alt="Hair Club Interior" 
              className="w-full h-full object-cover"
              containerClassName="h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          </div>
          
          {/* Floating badge refined */}
          <div className="absolute -bottom-8 -left-8 bg-black border border-[#D4AF37]/40 p-8 glass-card z-20 hidden md:block gold-glow">
            <p className="text-[#D4AF37] text-xl font-serif leading-none tracking-widest">Carrer de</p>
            <p className="text-white text-4xl font-bold font-serif mt-1">Barcelona, 45</p>
            <div className="w-12 h-1 bg-gold mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
