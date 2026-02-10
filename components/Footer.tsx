
import React from 'react';
import FallbackImage from './FallbackImage';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle gold glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD700]/5 blur-[150px] -z-10 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 border border-[#FFD700] rounded-full flex items-center justify-center">
                 <span className="text-[#FFD700] font-serif font-bold text-sm">HC</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tighter text-[#FFD700]">HAIR CLUB</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-10 font-light">
              La excelencia en barbería en el corazón de Salou. Redefiniendo el cuidado personal masculino con estilo, clase y precisión los 365 días del año.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'WhatsApp'].map((s) => (
                <a key={s} href="#" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-[#FFD700] transition-colors border-b border-transparent hover:border-[#FFD700] pb-1">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl mb-8 tracking-wide">Horario Ininterrumpido</h4>
            <div className="bg-[#FFD700]/10 border border-[#FFD700]/20 p-4 rounded-sm">
               <p className="text-[#FFD700] font-bold text-sm uppercase tracking-widest mb-2">Abierto Siempre</p>
               <p className="text-white text-xs leading-relaxed uppercase tracking-tighter">
                Todos los días del año<br/>
                <span className="text-lg font-serif">10:00 - 22:00</span>
               </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl mb-8 tracking-wide">Ubicación</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
              Carrer de Barcelona, 45<br />
              43840 Salou, Tarragona<br />
              España
            </p>
            <a href="https://maps.google.com/maps?q=Carrer+de+Barcelona,+45,+43840+Salou,+Tarragona" target="_blank" rel="noopener" className="text-[10px] text-[#FFD700] uppercase tracking-[0.2em] font-bold border border-[#FFD700]/20 px-4 py-2 hover:bg-[#FFD700] hover:text-black transition-all inline-block">
              Ver Mapa Exacto
            </a>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl mb-8 tracking-wide">Contacto Directo</h4>
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">WhatsApp / Citas</p>
            <a href="tel:+34642328218" className="text-2xl text-white font-serif block mb-8 hover:text-[#FFD700] transition-colors">642 32 82 18</a>
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Atención al Cliente</p>
            <a href="mailto:info@hairclubsalou.com" className="text-gray-400 text-sm hover:text-white transition-colors border-b border-white/10">info@hairclubsalou.com</a>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] text-gray-600 uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} HAIR CLUB SALOU PREMIUM. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-[9px] text-gray-600 uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
