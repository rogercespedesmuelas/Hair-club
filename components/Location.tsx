
import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="contacto" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-[#D4AF37] text-xs tracking-[0.7em] uppercase mb-6 font-bold">Ubicación Estratégica</h2>
            <h3 className="text-5xl md:text-6xl font-bold font-serif mb-10 text-white leading-tight">EN EL CORAZÓN <br/> <span className="text-gold">DE SALOU</span></h3>
            
            <div className="mb-12 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-6 h-[1px] bg-gold"></div>
                <p className="text-gray-300 text-xl font-light">Carrer de Barcelona, 45</p>
              </div>
              <p className="text-gray-500 ml-10">43840 Salou, Tarragona</p>
              <div className="pt-6">
                <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2">Contacto Directo</p>
                <a href="tel:+34642328218" className="text-4xl font-serif text-gold hover:brightness-125 transition-all">
                  642 32 82 18
                </a>
              </div>
            </div>

            {/* Horario Placa de Oro */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gold blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-black border-2 border-[#D4AF37] p-10 rounded-sm">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h4 className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.4em] mb-2">Disponibilidad Royal</h4>
                    <p className="text-white text-2xl font-serif font-bold">TODOS LOS DÍAS DEL AÑO</p>
                  </div>
                  <div className="text-[#D4AF37] opacity-40">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-baseline gap-4">
                  <span className="text-6xl md:text-7xl font-black text-gold">10:00</span>
                  <span className="text-2xl text-[#D4AF37]/50 font-serif">A</span>
                  <span className="text-6xl md:text-7xl font-black text-gold">22:00</span>
                </div>
                
                <div className="mt-10 pt-6 border-t border-[#D4AF37]/20 flex items-center justify-between">
                    <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">No cerramos en festivos</span>
                    <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.3em]">Premium Service</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 h-[600px] w-full relative group">
            <div className="absolute -inset-2 border border-[#D4AF37]/10 -z-10 group-hover:border-[#D4AF37]/30 transition-colors"></div>
            <div className="h-full w-full border border-[#D4AF37]/30 rounded-sm overflow-hidden shadow-2xl grayscale contrast-125 hover:grayscale-0 transition-all duration-1000">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.3039750058983!2d1.130634676646875!3d41.073280171341775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a15f02f9f9d98d%3A0xc3f2c5e5899846b0!2sCarrer%20de%20Barcelona%2C%2045%2C%2043840%20Salou%2C%20Tarragona!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Ubicación Hair Club Salou"
              ></iframe>
            </div>
            {/* Overlay Map Styling */}
            <div className="absolute inset-0 pointer-events-none border-[20px] border-black/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
