import React, { useState } from 'react';
import { Star, Check, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

export const BestsellerCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { addToCart } = useCart();
  const { language } = useLanguage();
  const [isAdded, setIsAdded] = useState(false);

  // Find the Nutella & Banane waffle item from MENU_ITEMS
  const bestsellerItem = MENU_ITEMS.find((item) => item.id === 'gaufre-nutella-banane') || {
    id: 'gaufre-nutella-banane',
    categoryId: 'gaufres',
    title: {
      fr: 'Gaufre Nutella & Banane',
      ar: 'وافل بنوتيلا والموز',
      en: 'Nutella & Banana Waffle',
    },
    description: {
      fr: 'Nutella généreux et rondelles de bananes fraîches.',
      ar: 'نوتيلا غنية مع شرائح الموز الطازجة.',
      en: 'Generous Nutella with fresh banana slices.',
    },
    price: 39,
    image: 'https://images.unsplash.com/photo-1612198188251-14f7b243b8ff?auto=format&fit=crop&w=800&q=80',
  };

  const handleCardClick = () => {
    // 1. Add item to cart
    addToCart(bestsellerItem);

    // 2. Trigger visual confirmation state
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);

    // 3. Smooth scroll to menu section or item
    const targetElement =
      document.getElementById('item-gaufre-nutella-banane') ||
      document.getElementById('menu-nav');

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayTitle = bestsellerItem.title[language] || bestsellerItem.title.fr;

  return (
    <button
      type="button"
      onClick={handleCardClick}
      aria-label={`Ajouter le best-seller ${displayTitle} au panier`}
      className={`group relative w-full max-w-sm mx-auto px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-[#1C0F08]/85 hover:bg-[#1C0F08]/95 backdrop-blur-md border border-[#D4952A]/50 animate-border-glow transition-all duration-200 active:scale-[0.98] cursor-pointer text-left rtl:text-right shadow-xl ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        {/* Left: Star Badge + Product Name */}
        <div className="flex flex-col min-w-0">
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black text-[#D4952A] uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-[#D4952A] text-[#D4952A] shrink-0" />
            <span>LE BEST-SELLER</span>
          </div>

          <div className="text-xs sm:text-sm font-bold text-[#F5EBD8] truncate mt-0.5 group-hover:text-white transition-colors">
            {displayTitle}
          </div>
        </div>

        {/* Right: Price + Quick Add Action */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs sm:text-sm font-black text-[#D4952A] bg-[#2B1810]/80 px-2.5 py-1 rounded-xl border border-[#D4952A]/30">
            {bestsellerItem.price} DH
          </span>

          {/* Plus or Check indicator button */}
          <div
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center transition-all duration-300 font-bold ${
              isAdded
                ? 'bg-[#3D5C42] text-[#4ADE80] scale-110 shadow-[0_0_12px_rgba(74,222,128,0.5)]'
                : 'bg-[#D4952A] text-[#1C0F08] group-hover:bg-[#E8A83A] group-hover:scale-105'
            }`}
          >
            {isAdded ? (
              <Check className="w-4 h-4 stroke-[3]" />
            ) : (
              <Plus className="w-4 h-4 stroke-[3]" />
            )}
          </div>
        </div>
      </div>

      {/* Added confirmation toast badge */}
      {isAdded && (
        <span className="absolute -top-2.5 right-4 rtl:right-auto rtl:left-4 bg-[#3D5C42] text-[#4ADE80] text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-[#4ADE80]/40 shadow-lg animate-bounce">
          ✓ Ajouté !
        </span>
      )}
    </button>
  );
};
