
import React, { useState } from 'react';

interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

const FallbackImage: React.FC<FallbackImageProps> = ({ src, alt, className = "", containerClassName = "" }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-[#0a0a0a] border border-[#D4AF37]/10 text-center p-6 rounded-sm ${containerClassName} ${className}`}>
        <div className="space-y-2">
           <div className="w-8 h-8 border border-[#D4AF37]/40 rounded-full mx-auto flex items-center justify-center">
             <span className="text-[#D4AF37] text-[10px] font-bold">HC</span>
           </div>
           <p className="text-[#D4AF37] font-serif text-[9px] tracking-[0.4em] uppercase opacity-50">
             Visual Exclusivo <br /> <span className="text-white font-bold text-xs">HAIR CLUB</span>
           </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={`object-cover ${className}`}
    />
  );
};

export default FallbackImage;
