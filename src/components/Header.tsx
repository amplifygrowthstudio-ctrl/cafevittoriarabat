import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Language } from '../types';
import { ChevronDown, ShoppingBag } from 'lucide-react';
import { WaffleIcon } from './WaffleIcon';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { totalItems, setIsCartOpen } = useCart();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' },
    { code: 'en', label: 'EN' },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full h-[56px] transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1C0F08]/95 backdrop-blur-md border-b border-[#3D2318] shadow-xl'
          : 'bg-gradient-to-b from-[#1C0F08]/85 via-[#1C0F08]/40 to-transparent backdrop-blur-[2px] border-b border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-full flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name - Waffle Icon + Wordmark with clean spacing */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <WaffleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4952A] group-hover:scale-110 group-hover:text-[#E8A83A] transition-all duration-200 filter drop-shadow-sm" />
          <span className="font-display text-lg sm:text-2xl font-bold tracking-tight text-[#F5EBD8] drop-shadow-md group-hover:text-[#D4952A] transition-colors whitespace-nowrap">
            {t('brandName')}
          </span>
        </a>

        {/* Right Actions: Language Selector + Cart Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-[#1C0F08]/70 border border-[#D4952A]/40 hover:border-[#D4952A] text-[#F5EBD8] text-xs font-bold shadow-md backdrop-blur-md transition-all duration-200"
              aria-expanded={isDropdownOpen}
              aria-label="Select Language"
            >
              <span>{currentLang.label}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#D4952A] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-28 bg-[#1C0F08] border border-[#3D2318] rounded-xl shadow-xl py-1 z-50 overflow-hidden">
                {languages.map((lang) => {
                  const isActive = language === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left rtl:text-right px-4 py-2 text-xs font-bold transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-[#D4952A] text-[#1C0F08]'
                          : 'text-[#D3C3AD] hover:text-[#F5EBD8] hover:bg-[#2B1810]'
                      }`}
                    >
                      <span>{lang.label}</span>
                      {isActive && <span className="text-[10px] uppercase font-extrabold">✓</span>}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Cart Icon Button (Thin amber outline icon + item count badge) */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            aria-label={`Voir le panier (${totalItems} artikelen)`}
            className="relative p-2 sm:p-2.5 rounded-xl bg-[#1C0F08]/70 border border-[#D4952A]/40 hover:border-[#D4952A] text-[#D4952A] hover:text-[#E8A83A] shadow-md backdrop-blur-md transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center group"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8] group-hover:scale-105 transition-transform" />
            
            {/* Round Count Badge (Hidden if empty, appears when items > 0) */}
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-[#E8542E] text-white text-[10px] sm:text-[11px] font-black w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-md border border-[#1C0F08] animate-in zoom-in-50 duration-200">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};

