import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  categoryIcon?: React.ReactNode;
  className?: string;
  aspectRatio?: string; // e.g. "aspect-[4/3]"
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  categoryIcon,
  className = '',
  aspectRatio = 'aspect-[4/3]',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full ${aspectRatio} bg-[#1C0F08] rounded-xl overflow-hidden border border-[#3D2318] flex items-center justify-center shrink-0 group/img`}
    >
      {hasError || !src ? (
        /* Fallback: solid amber/brown background with centered category icon */
        <div className="w-full h-full bg-[#1C0F08] flex items-center justify-center p-4">
          {categoryIcon ? (
            <div className="p-3 rounded-full bg-[#2B1810] border border-[#3D2318] text-[#D4952A]">
              {categoryIcon}
            </div>
          ) : (
            <div className="p-3 rounded-full bg-[#2B1810] border border-[#3D2318] text-[#D4952A]">
              <Utensils className="w-6 h-6" />
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Loading Skeleton / Placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-[#1C0F08] animate-pulse flex items-center justify-center">
              {categoryIcon && <div className="text-[#D4952A]/30">{categoryIcon}</div>}
            </div>
          )}

          {/* Main Image with 4:3 ratio, cover fit, subtle hover zoom (scale-105 0.3s) */}
          <img
            src={src}
            alt={alt}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
            referrerPolicy="no-referrer"
          />
        </>
      )}
    </div>
  );
};
