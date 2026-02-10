
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'El Club', href: '#club' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Portafolio', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 py-3 border-b border-[#D4AF37]/30 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center bg-black shadow-[0_0_10px_rgba(212,175,55,0.3)]">
             <span className="text-[#D4AF37] font-serif font-bold text-xl">HC</span>
          </div>
          <span className="font-serif text-xl font-bold tracking-[0.2em] text-gold">HAIR CLUB</span>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gray-300 hover:text-[#D4AF37] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button className="bg-gold text-black px-8 py-2.5 text-[10px] font-black uppercase tracking-[0.25em] hover:brightness-125 transition-all shadow-[0_4px_15px_rgba(212,175,55,0.3)] rounded-sm">
            Agendar
          </button>
        </div>

        <button className="md:hidden text-[#D4AF37]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
