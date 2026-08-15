import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../data/menuData';
import { MenuItem } from '../types';
import { Plus, Check, X } from 'lucide-react';
import { WaffleIcon } from './WaffleIcon';
import { ImageWithFallback } from './ImageWithFallback';

interface HotDrinkOption {
  id: string;
  name: string;
  price: number;
}

const HOT_DRINK_UPSELLS: HotDrinkOption[] = [
  { id: 'chocolat-chaud', name: 'Chocolat Chaud', price: 20 },
  { id: 'cafe-nespresso', name: 'Nespresso', price: 22 },
  { id: 'chai-vanilla', name: 'Vanilla Chaï', price: 30 },
];

export const GaufresSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { addToCart } = useCart();
  const [addedItemMap, setAddedItemMap] = useState<Record<string, boolean>>({});
  const [activeUpsellItemId, setActiveUpsellItemId] = useState<string | null>(null);
  const [addedDrinkMap, setAddedDrinkMap] = useState<Record<string, string[]>>({});

  const gaufresItems = MENU_ITEMS.filter((item) => item.categoryId === 'gaufres');

  const handleAdd = (item: MenuItem) => {
    // 1. Add waffle to cart immediately
    addToCart(item);
    
    // 2. Trigger checkmark state on button
    setAddedItemMap((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);

    // 3. Open inline drink upsell box inside card
    setActiveUpsellItemId(item.id);
  };

  const handleAddDrinkUpsell = (waffleId: string, drinkOption: HotDrinkOption) => {
    // Find drink object from MENU_ITEMS or create matching MenuItem
    const drinkItem = MENU_ITEMS.find((i) => i.id === drinkOption.id) || {
      id: drinkOption.id,
      categoryId: 'boissons',
      title: { fr: drinkOption.name, ar: drinkOption.name, en: drinkOption.name },
      price: drinkOption.price,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    };

    addToCart(drinkItem);

    // Track added drink for checkmark confirmation inside this card
    setAddedDrinkMap((prev) => ({
      ...prev,
      [waffleId]: [...(prev[waffleId] || []), drinkOption.id],
    }));
  };

  return (
    <section id="gaufres" className="pt-8 sm:pt-12 pb-12 sm:pb-16 border-b border-[#3D2318] scroll-mt-[130px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#3D2318] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-[#D4952A]/20 border border-[#D4952A]/40 text-[#D4952A]">
                <WaffleIcon className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4952A]">
                Gaufres Artisanales
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#F5EBD8]">
              {t('catGaufres')}
            </h2>
            <p className="text-sm text-[#D3C3AD] max-w-xl">
              {t('gaufresSub')}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-[#1C0F08] px-3.5 py-1.5 rounded-full border border-[#3D2318] text-xs text-[#D3C3AD]">
            <WaffleIcon className="w-3.5 h-3.5 text-[#D4952A]" />
            <span>Pâte faite maison chaque matin</span>
          </div>
        </div>

        {/* Waffles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {gaufresItems.map((item) => {
            const isAdded = addedItemMap[item.id];
            const title = item.title[language] || item.title.fr;
            const description = item.description?.[language] || item.description?.fr;
            const badge = item.badge?.[language] || item.badge?.fr;
            const showUpsell = activeUpsellItemId === item.id;
            const addedDrinks = addedDrinkMap[item.id] || [];

            return (
              <div
                key={item.id}
                className="group relative bg-[#2B1810] rounded-2xl p-5 border border-[#3D2318] hover:border-[#D4952A]/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Badge Tag */}
                {badge && (
                  <span className="absolute top-3 right-3 rtl:right-auto rtl:left-3 px-2.5 py-1 rounded-full bg-[#D4952A] text-[#1C0F08] text-[10px] font-extrabold uppercase tracking-wider shadow z-10">
                    {badge}
                  </span>
                )}

                <div className="space-y-3.5">
                  {/* Visual Image & Frame */}
                  <ImageWithFallback
                    src={item.image}
                    alt={title}
                    categoryIcon={<WaffleIcon className="w-8 h-8 text-[#D4952A]" />}
                  />

                  {/* Text Content */}
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-xl text-[#F5EBD8] group-hover:text-[#D4952A] transition-colors">
                      {title}
                    </h3>
                    {description && (
                      <p className="text-xs text-[#D3C3AD]/90 leading-relaxed line-clamp-2">
                        {description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Price & Add Action Bar */}
                <div className="mt-4 pt-3.5 border-t border-[#3D2318]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-[#D3C3AD] block">Prix</span>
                      <span className="text-xl sm:text-2xl font-extrabold text-[#D4952A]">
                        {item.price} <span className="text-xs font-semibold text-[#F5EBD8]">DH</span>
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAdd(item)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-md ${
                        isAdded
                          ? 'bg-[#3D5C42] text-white scale-105'
                          : 'bg-[#D4952A] hover:bg-[#E8A83A] text-[#1C0F08] active:scale-95'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Ajouté !</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>{t('addToCart')}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Inline Drink Upsell Box (expands inside card directly under Ajouter button) */}
                  {showUpsell && (
                    <div className="mt-3.5 p-3 rounded-xl bg-[#1C0F08] border border-[#D4952A]/50 space-y-2.5 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#F5EBD8] flex items-center gap-1.5">
                          <span>Ajouter une boisson chaude ? ☕</span>
                        </span>
                        <button
                          type="button"
                          onClick={() => setActiveUpsellItemId(null)}
                          className="text-[#D3C3AD] hover:text-[#F5EBD8] p-0.5 rounded"
                          aria-label="Fermer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Pill options */}
                      <div className="flex flex-wrap gap-1.5">
                        {HOT_DRINK_UPSELLS.map((drink) => {
                          const isDrinkAdded = addedDrinks.includes(drink.id);
                          return (
                            <button
                              key={drink.id}
                              type="button"
                              onClick={() => handleAddDrinkUpsell(item.id, drink)}
                              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 border ${
                                isDrinkAdded
                                  ? 'bg-[#3D5C42] border-[#4ADE80] text-[#4ADE80] shadow-sm'
                                  : 'bg-[#2B1810] border-[#3D2318] hover:border-[#D4952A]/60 text-[#F5EBD8] hover:text-white'
                              }`}
                            >
                              {isDrinkAdded ? (
                                <>
                                  <Check className="w-3.5 h-3.5 stroke-[3] text-[#4ADE80]" />
                                  <span>{drink.name}</span>
                                </>
                              ) : (
                                <>
                                  <Plus className="w-3.5 h-3.5 text-[#D4952A]" />
                                  <span>{drink.name}</span>
                                  <span className="text-[10px] text-[#D4952A] font-extrabold ml-0.5">
                                    +{drink.price} DH
                                  </span>
                                </>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
