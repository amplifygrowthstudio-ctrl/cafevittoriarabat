import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, ArrowDown } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { BestsellerCard } from './BestsellerCard';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  // Magnetic interaction state (subtle offset following cursor/touch)
  const [magneticPos, setMagneticPos] = React.useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Relative offset from center (-1 to 1)
    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);

    // Max 5px magnetic translation shift for a refined, premium feel
    const maxShift = 5;
    setMagneticPos({
      x: Math.max(-maxShift, Math.min(maxShift, offsetX * maxShift)),
      y: Math.max(-maxShift, Math.min(maxShift, offsetY * maxShift)),
    });
  };

  const handlePointerReset = () => {
    setMagneticPos({ x: 0, y: 0 });
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu-nav');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Split title words by period for per-word styling & blur-to-focus reveal
  const titleWords = t('heroTitle')
    .split('.')
    .map((w) => w.trim())
    .filter(Boolean);

  // Exact color accents: "Gaufres" in crème (#F5EBD8), "Tacos" in amber (#D4952A), "Chaï" in terracotta-red (#B8562E)
  const titleWordStyles = [
    { text: 'text-[#F5EBD8]' }, // Gaufres: Crème
    { text: 'text-[#D4952A]' }, // Tacos: Amber
    { text: 'text-[#B8562E]' }, // Chaï: Terracotta-Red
  ];

  // Helper for staggered blur-to-focus reveal animation
  const blurIn = (delay: number) => ({
    initial: shouldReduceMotion
      ? { opacity: 1, filter: 'blur(0px)', y: 0 }
      : { opacity: 0, filter: 'blur(8px)', y: 12 },
    animate: { opacity: 1, filter: 'blur(0px)', y: 0 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.35,
      delay: shouldReduceMotion ? 0 : delay,
      ease: [0.215, 0.61, 0.355, 1],
    },
  });

  return (
    <section className="relative bg-[#2B1810] w-full min-h-[100dvh] flex flex-col justify-between pt-[56px] pb-8 sm:pb-12 select-none">
      
      {/* Background Hero Photo (Top ~45%) + Ken Burns Slow Zoom + Gradient Transition to Solid #2B1810 */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1568051243851-f9b136146e97?fm=jpg&q=80&w=2000&auto=format&fit=crop"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== 'https://images.unsplash.com/photo-1512056068661-14ef8b6bfabe?fm=jpg&q=80&w=2000&auto=format&fit=crop') {
              target.src = 'https://images.unsplash.com/photo-1512056068661-14ef8b6bfabe?fm=jpg&q=80&w=2000&auto=format&fit=crop';
            }
          }}
          alt="Gaufres artisanales Café Vittoria"
          className={`w-full h-full object-cover object-center opacity-75 ${
            shouldReduceMotion ? '' : 'animate-kenburns'
          }`}
          referrerPolicy="no-referrer"
        />
        
        {/* Top Header Vignette & Smooth Gradient Overlay fading into solid #2B1810 around 45% */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C0F08]/85 via-[#1C0F08]/50 via-[25%] to-[#2B1810] to-[48%]" />
      </div>

      {/* Main Hero Content Area - Natural comfortable breathing space */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex-1 flex flex-col justify-center items-center text-center py-8 sm:py-12">
        <div className="w-full space-y-4 sm:space-y-6 flex flex-col items-center my-auto">
          
          {/* 1. Badge "● Ouvert aujourd'hui jusqu'à 22:00" - Amber palette matching site theme */}
          <motion.div {...blurIn(0.0)} className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C0F08]/85 border border-[#D4952A]/45 text-xs sm:text-sm font-semibold text-[#F5EBD8] shadow-md backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#D4952A] animate-pulse shadow-[0_0_8px_rgba(212,149,42,0.8)]" />
              <span>{t('openStatus')}</span>
            </span>
          </motion.div>

          {/* 2. Locatie-pin "📍 Rue Beyrouth, Rabat" - Subordinate (80-85% opacity, clearly separated from badge) */}
          <motion.div {...blurIn(0.14)} className="flex justify-center pt-0.5 sm:pt-1">
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#D3C3AD]/85 font-medium tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-[#D4952A]/85 shrink-0" />
              <span>{t('addressShort')}</span>
            </div>
          </motion.div>

          {/* 3. Titel "Gaufres. Tacos. Chaï." - Prominent, bold & ~20-25% larger, three distinct color accents */}
          <div className="pt-1 sm:pt-2">
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-black tracking-tight leading-[1.05] text-center drop-shadow-2xl flex flex-wrap items-baseline justify-center gap-x-2 sm:gap-x-4 gap-y-1">
              {titleWords.map((word, index) => {
                const style = titleWordStyles[index % titleWordStyles.length];
                const wordDelay = 0.28 + index * 0.14; // 0.28s, 0.42s, 0.56s
                return (
                  <motion.span
                    key={index}
                    {...blurIn(wordDelay)}
                    className="inline-flex items-baseline"
                  >
                    <span className={style.text}>{word}</span>
                    <span className="text-[#8C6D58] font-sans">.</span>
                  </motion.span>
                );
              })}
            </h1>
          </div>

          {/* 4. Subtekst "Votre café artisanal au cœur de Rabat." */}
          <motion.div {...blurIn(0.70)} className="pt-1 sm:pt-1.5">
            <p className="text-sm sm:text-base md:text-lg text-[#D3C3AD] max-w-md sm:max-w-lg mx-auto text-center font-medium leading-relaxed tracking-wide drop-shadow-sm">
              {t('heroDescription')}
            </p>
          </motion.div>

          {/* 5. KNOP "Voir le Menu ↓" - Warm Amber Gradient + Magnetic Follow & Spring Bounce */}
          <motion.div {...blurIn(0.84)} className="pt-3 sm:pt-5 flex justify-center w-full">
            <motion.button
              onClick={scrollToMenu}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerReset}
              onPointerUp={handlePointerReset}
              onPointerCancel={handlePointerReset}
              animate={{ x: magneticPos.x, y: magneticPos.y }}
              transition={{
                type: 'spring',
                stiffness: 350,
                damping: 22,
                mass: 0.4,
              }}
              className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-9 py-4 sm:px-12 sm:py-4.5 rounded-full bg-gradient-to-r from-[#D4952A] to-[#B8791F] hover:from-[#E8A83A] hover:to-[#C68729] text-[#1C0F08] font-black text-base sm:text-lg md:text-xl shadow-[0_10px_28px_rgba(212,149,42,0.45)] hover:shadow-[0_12px_32px_rgba(212,149,42,0.65)] hover:scale-105 active:scale-[0.97] active:shadow-[0_0_24px_rgba(212,149,42,0.8)] transition-shadow transition-colors duration-150 group border-2 border-[#F5C26B]/80 whitespace-nowrap max-w-[85%] touch-none cursor-pointer"
            >
              {/* Diagonal Shine Sweep Light Effect (Every 4s) */}
              {!shouldReduceMotion && (
                <span
                  className="absolute inset-0 pointer-events-none overflow-hidden rounded-full z-0"
                  aria-hidden="true"
                >
                  <span className="absolute top-0 bottom-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/50 via-50% to-transparent animate-shine-sweep" />
                </span>
              )}
              <span className="relative z-10 flex items-center gap-2 tracking-tight">
                <span>{t('ctaMenuHero')}</span>
              </span>
              <ArrowDown className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 text-[#1C0F08] stroke-[2.75] group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* 6. Bestseller Spotlight Card (Gaufre Nutella & Banane, 39 DH) */}
          <motion.div {...blurIn(0.96)} className="pt-3 sm:pt-4 flex justify-center w-full">
            <BestsellerCard />
          </motion.div>

        </div>
      </div>

    </section>
  );
};
