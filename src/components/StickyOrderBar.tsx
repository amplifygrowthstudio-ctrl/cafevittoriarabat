import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ChevronUp } from 'lucide-react';

export const StickyOrderBar: React.FC = () => {
  const { t } = useLanguage();
  const { totalItems, totalPrice, setIsCartOpen } = useCart();

  if (totalItems === 0) return null;

  return (
    <aside
      aria-label="Order summary bar"
      className="fixed bottom-0 inset-x-0 z-40 p-3 sm:p-4 bg-[#1C0F08]/95 backdrop-blur-md border-t-2 border-[#D4952A]/60 shadow-[0_-8px_25px_rgba(0,0,0,0.5)] animate-slide-up"
    >
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setIsCartOpen(true)}
          className="w-full flex items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-gradient-to-r from-[#D4952A] via-[#E8A83A] to-[#D4952A] hover:brightness-110 active:scale-[0.98] text-[#1C0F08] font-bold shadow-xl transition-all duration-150 group cursor-pointer"
        >
          {/* Left: Bag Icon + Count Badge + Items Summary & Price */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#1C0F08] text-[#D4952A] flex items-center justify-center font-black shadow-inner shrink-0">
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="absolute -top-1.5 -right-1.5 rtl:-right-auto rtl:-left-1.5 bg-[#E8542E] text-white text-[10px] sm:text-xs w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full flex items-center justify-center font-extrabold border-2 border-[#1C0F08]">
                {totalItems}
              </span>
            </div>
            <div className="text-left rtl:text-right">
              <div className="text-[11px] sm:text-xs font-semibold text-[#3D2318]/90 uppercase tracking-wider leading-tight">
                {totalItems} {totalItems === 1 ? 'article' : 'articles'}
              </div>
              <div className="text-base sm:text-lg font-black text-[#1C0F08] leading-none mt-0.5">
                {totalPrice} DH
              </div>
            </div>
          </div>

          {/* Right: "Voir la commande" CTA + ChevronUp Icon */}
          <div className="flex items-center gap-1.5 sm:gap-2 font-black text-sm sm:text-base text-[#1C0F08] group-hover:-translate-y-0.5 transition-transform">
            <span>{t('viewCart')}</span>
            <ChevronUp className="w-5 h-5 stroke-[2.75]" />
          </div>
        </button>
      </div>
    </aside>
  );
};

