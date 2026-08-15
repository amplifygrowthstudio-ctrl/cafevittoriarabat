import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../data/menuData';
import { DrinkSubGroup } from '../types';
import { CupSoda, Plus, Check, Leaf, Coffee } from 'lucide-react';
import { TeaCupIcon } from './TeaCupIcon';
import { HotChocolateIcon } from './HotChocolateIcon';
import { ImageWithFallback } from './ImageWithFallback';

export const BoissonsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { addToCart } = useCart();
  const [addedItemMap, setAddedItemMap] = useState<Record<string, boolean>>({});

  const drinksItems = MENU_ITEMS.filter((item) => item.categoryId === 'boissons');

  const subGroups: { id: DrinkSubGroup; titleKey: string; icon: React.ReactNode; color: string }[] = [
    {
      id: 'healthy_teas',
      titleKey: 'subGroupHealthyTeas',
      icon: <Leaf className="w-4 h-4 text-[#4ADE80]" />,
      color: 'border-[#3D5C42] bg-[#1E3624]/40'
    },
    {
      id: 'chais',
      titleKey: 'subGroupChais',
      icon: <TeaCupIcon className="w-4 h-4 text-[#D4952A]" />,
      color: 'border-[#3D2318] bg-[#2B1810]'
    },
    {
      id: 'chocolats',
      titleKey: 'subGroupChocolats',
      icon: <HotChocolateIcon className="w-4 h-4 text-[#C07A48]" />,
      color: 'border-[#3D2318] bg-[#2B1810]'
    },
    {
      id: 'cafes',
      titleKey: 'subGroupCafes',
      icon: <Coffee className="w-4 h-4 text-[#D3C3AD]" />,
      color: 'border-[#3D2318] bg-[#2B1810]'
    },
    {
      id: 'sodas',
      titleKey: 'subGroupSodas',
      icon: <CupSoda className="w-4 h-4 text-[#38BDF8]" />,
      color: 'border-[#3D2318] bg-[#2B1810]'
    }
  ];

  const handleAdd = (item: typeof drinksItems[0]) => {
    if (item.priceOnRequest) return;
    addToCart(item);
    setAddedItemMap((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section id="boissons" className="pt-8 sm:pt-12 pb-12 sm:pb-16 border-b border-[#3D2318] scroll-mt-[130px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#3D2318] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-[#3D5C42]/30 border border-[#3D5C42] text-[#A8D5B0]">
                <CupSoda className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#A8D5B0]">
                Boissons Chaudes & Froides
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#F5EBD8]">
              {t('catBoissons')}
            </h2>
            <p className="text-sm text-[#D3C3AD] max-w-xl">
              {t('boissonsSub')}
            </p>
          </div>
        </div>

        {/* Subgroups Layout */}
        <div className="space-y-10">
          {subGroups.map((group) => {
            const groupItems = drinksItems.filter((i) => i.subGroup === group.id);
            if (groupItems.length === 0) return null;

            return (
              <div key={group.id} className="space-y-4">
                
                {/* Subgroup Label */}
                <div className="flex items-center gap-2 border-b border-[#3D2318]/60 pb-2">
                  {group.icon}
                  <h3 className="font-display font-bold text-xl text-[#F5EBD8]">
                    {t(group.titleKey as any)}
                  </h3>
                </div>

                {/* Subgroup Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {groupItems.map((item) => {
                    const isAdded = addedItemMap[item.id];
                    const title = item.title[language] || item.title.fr;
                    const description = item.description?.[language] || item.description?.fr;
                    const badge = item.badge?.[language] || item.badge?.fr;

                    return (
                      <div
                        key={item.id}
                        className="group relative bg-[#2B1810] rounded-2xl p-5 border border-[#3D2318] hover:border-[#D4952A]/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                      >
                        {/* Badge Tag */}
                        {badge && (
                          <span className="absolute top-3 right-3 rtl:right-auto rtl:left-3 z-10 px-2.5 py-1 rounded-full bg-[#D4952A] text-[#1C0F08] text-[10px] font-extrabold uppercase tracking-wider shadow">
                            {badge}
                          </span>
                        )}

                        <div className="space-y-3.5">
                          {/* Visual 4:3 Image Frame */}
                          <ImageWithFallback
                            src={item.image}
                            alt={title}
                            categoryIcon={group.icon}
                          />

                          {/* Text Content */}
                          <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-lg text-[#F5EBD8] group-hover:text-[#D4952A] transition-colors">
                              {title}
                            </h4>
                            {description && (
                              <p className="text-xs text-[#D3C3AD]/90 leading-relaxed line-clamp-2">
                                {description}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Price & Add Action */}
                        <div className="mt-4 pt-3.5 border-t border-[#3D2318] flex items-center justify-between">
                          {item.priceOnRequest ? (
                            <span className="text-xs font-semibold text-[#D3C3AD] bg-[#1C0F08] px-3 py-1.5 rounded-lg border border-[#3D2318] block whitespace-nowrap">
                              {t('priceOnDemand')}
                            </span>
                          ) : (
                            <>
                              <div>
                                <span className="text-[11px] text-[#D3C3AD] block">Prix</span>
                                <span className="text-xl sm:text-2xl font-extrabold text-[#D4952A]">
                                  {item.price} <span className="text-xs font-semibold text-[#F5EBD8]">DH</span>
                                </span>
                              </div>

                              <button
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
                            </>
                          )}
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
