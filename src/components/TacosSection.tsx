import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS, SUPPLEMENTS_LIST } from '../data/menuData';
import { MenuItem, TacoOption } from '../types';
import { Flame, Plus, Check, Utensils, ChevronDown, ChevronUp, X } from 'lucide-react';
import { TacoIcon } from './TacoIcon';
import { ImageWithFallback } from './ImageWithFallback';

interface SodaOption {
  id: string;
  name: string;
  price: number;
}

const TACOS_DRINK_UPSELLS: SodaOption[] = [
  { id: 'soda-sprite', name: 'Sprite', price: 15 },
  { id: 'soda-coca', name: 'Coca', price: 15 },
  { id: 'soda-fanta', name: 'Fanta', price: 15 },
];

export const TacosSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { addToCart } = useCart();
  
  const [selectedOptionMap, setSelectedOptionMap] = useState<Record<string, TacoOption>>({});
  const [showSupplementsMap, setShowSupplementsMap] = useState<Record<string, boolean>>({});
  const [itemSupplementsMap, setItemSupplementsMap] = useState<Record<string, string[]>>({});
  const [warningMap, setWarningMap] = useState<Record<string, string | null>>({});
  const [addedItemMap, setAddedItemMap] = useState<Record<string, boolean>>({});
  const [activeUpsellItemId, setActiveUpsellItemId] = useState<string | null>(null);
  const [addedDrinkMap, setAddedDrinkMap] = useState<Record<string, string[]>>({});

  const tacosItems = MENU_ITEMS.filter((item) => item.categoryId === 'tacos');

  const handleSelectOption = (itemId: string, option: TacoOption) => {
    setSelectedOptionMap((prev) => ({ ...prev, [itemId]: option }));
  };

  const handleToggleSupplement = (itemId: string, suppId: string) => {
    const currentList = itemSupplementsMap[itemId] || [];
    if (currentList.includes(suppId)) {
      setItemSupplementsMap((prev) => ({
        ...prev,
        [itemId]: (prev[itemId] || []).filter((id) => id !== suppId)
      }));
      setWarningMap((prev) => ({ ...prev, [itemId]: null }));
    } else {
      if (currentList.length >= 2) {
        setWarningMap((prev) => ({
          ...prev,
          [itemId]: 'Maximum 2 suppléments inclus pour 10 DH'
        }));
        setTimeout(() => {
          setWarningMap((prev) => ({ ...prev, [itemId]: null }));
        }, 3000);
        return;
      }
      setItemSupplementsMap((prev) => ({
        ...prev,
        [itemId]: [...(prev[itemId] || []), suppId]
      }));
      setWarningMap((prev) => ({ ...prev, [itemId]: null }));
    }
  };

  const handleAddToCart = (item: MenuItem) => {
    const currentOption = selectedOptionMap[item.id] || 'seul';
    const selectedSuppIds = itemSupplementsMap[item.id] || [];
    const selectedSuppObjects = SUPPLEMENTS_LIST.filter((s) => selectedSuppIds.includes(s.id));

    // 1. Add Tacos item + supplements to cart immediately
    addToCart(item, currentOption, selectedSuppObjects);

    // 2. Trigger checkmark state on main button
    setAddedItemMap((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);

    // 3. Open inline drink upsell inside card
    setActiveUpsellItemId(item.id);
  };

  const handleAddSodaUpsell = (tacosId: string, soda: SodaOption) => {
    const drinkItem = MENU_ITEMS.find((i) => i.id === soda.id) || {
      id: soda.id,
      categoryId: 'boissons',
      title: { fr: `${soda.name} (33cl)`, ar: soda.name, en: soda.name },
      price: soda.price,
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    };

    addToCart(drinkItem);

    setAddedDrinkMap((prev) => ({
      ...prev,
      [tacosId]: [...(prev[tacosId] || []), soda.id],
    }));
  };

  return (
    <section id="tacos" className="pt-8 sm:pt-12 pb-12 sm:pb-16 border-b border-[#3D2318] scroll-mt-[130px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#3D2318] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-[#E58E26]/20 border border-[#E58E26]/40 text-[#E58E26]">
                <TacoIcon className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E58E26]">
                Streetfood Français Généreux
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#F5EBD8]">
              {t('catTacos')}
            </h2>
            <p className="text-sm text-[#D3C3AD] max-w-xl">
              {t('tacosSub')}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#1C0F08] px-4 py-2 rounded-xl border border-[#3D2318] text-xs font-bold text-[#D4952A]">
            <Flame className="w-4 h-4 text-[#E58E26]" />
            <span>Sauce Fromagère Maison Onctueuse</span>
          </div>
        </div>

        {/* Tacos Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {tacosItems.map((item) => {
            const title = item.title[language] || item.title.fr;
            const description = item.description?.[language] || item.description?.fr;
            const badge = item.badge?.[language] || item.badge?.fr;
            
            const priceSeul = item.prices?.seul || 0;
            const priceMenu = item.prices?.menu || 0;
            const currentOption = selectedOptionMap[item.id] || 'seul';
            const basePrice = currentOption === 'menu' ? priceMenu : priceSeul;
            const isAdded = addedItemMap[item.id];

            const showSupplements = showSupplementsMap[item.id];
            const selectedSuppIds = itemSupplementsMap[item.id] || [];
            const warningMsg = warningMap[item.id];
            const hasSupps = selectedSuppIds.length > 0;
            const calculatedTotal = basePrice + (hasSupps ? 10 : 0);

            const showUpsell = activeUpsellItemId === item.id;
            const addedDrinks = addedDrinkMap[item.id] || [];

            return (
              <div
                key={item.id}
                className="group relative bg-[#2B1810] rounded-2xl p-5 sm:p-6 border border-[#3D2318] hover:border-[#E58E26]/60 shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Badge */}
                {badge && (
                  <span className="absolute top-3 right-3 rtl:right-auto rtl:left-3 z-10 px-2.5 py-1 rounded-full bg-[#E58E26] text-[#1C0F08] text-[10px] font-extrabold uppercase shadow">
                    {badge}
                  </span>
                )}

                <div className="space-y-3.5">
                  {/* Visual 4:3 Image Header */}
                  <ImageWithFallback
                    src={item.image}
                    alt={title}
                    categoryIcon={<TacoIcon className="w-8 h-8 text-[#E58E26]" />}
                  />

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-xl text-[#F5EBD8] group-hover:text-[#D4952A] transition-colors">
                      {title}
                    </h3>
                    {description && (
                      <p className="text-xs text-[#D3C3AD]/90 leading-relaxed">
                        {description}
                      </p>
                    )}
                  </div>

                  {/* Interactive Formules / Variants Selection */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D3C3AD]/70 block">
                      Sélectionnez votre formule :
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      
                      {/* Option "Seul" Button */}
                      <button
                        type="button"
                        onClick={() => handleSelectOption(item.id, 'seul')}
                        className={`p-3 rounded-xl text-center transition-all duration-200 flex flex-col items-center justify-between gap-1 relative ${
                          currentOption === 'seul'
                            ? 'bg-[#D4952A]/15 border-2 border-[#D4952A] shadow-md ring-1 ring-[#D4952A]/30'
                            : 'bg-[#1C0F08] border border-[#3D2318] opacity-75 hover:opacity-100 hover:border-[#D4952A]/50'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                            currentOption === 'seul'
                              ? 'border-[#D4952A] bg-[#D4952A] text-[#1C0F08]'
                              : 'border-[#3D2318] bg-transparent'
                          }`}>
                            {currentOption === 'seul' && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                          <span className={`text-xs font-bold ${currentOption === 'seul' ? 'text-[#F5EBD8]' : 'text-[#D3C3AD]'}`}>
                            {t('seulLabel')}
                          </span>
                        </div>
                        <span className={`text-base sm:text-lg font-extrabold ${currentOption === 'seul' ? 'text-[#D4952A]' : 'text-[#F5EBD8]'}`}>
                          {priceSeul} <span className="text-xs font-normal">DH</span>
                        </span>
                      </button>

                      {/* Option "Menu" Button */}
                      <button
                        type="button"
                        onClick={() => handleSelectOption(item.id, 'menu')}
                        className={`p-3 rounded-xl text-center transition-all duration-200 flex flex-col items-center justify-between gap-1 relative ${
                          currentOption === 'menu'
                            ? 'bg-[#D4952A]/15 border-2 border-[#D4952A] shadow-md ring-1 ring-[#D4952A]/30'
                            : 'bg-[#1C0F08] border border-[#3D2318] opacity-75 hover:opacity-100 hover:border-[#D4952A]/50'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                            currentOption === 'menu'
                              ? 'border-[#D4952A] bg-[#D4952A] text-[#1C0F08]'
                              : 'border-[#3D2318] bg-transparent'
                          }`}>
                            {currentOption === 'menu' && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                          <span className={`text-xs font-bold ${currentOption === 'menu' ? 'text-[#F5EBD8]' : 'text-[#D3C3AD]'}`}>
                            {t('menuLabel')}
                          </span>
                        </div>
                        <span className={`text-base sm:text-lg font-extrabold ${currentOption === 'menu' ? 'text-[#D4952A]' : 'text-[#F5EBD8]'}`}>
                          {priceMenu} <span className="text-xs font-normal">DH</span>
                        </span>
                      </button>

                    </div>
                  </div>

                  {/* Optional Suppléments Toggle Bar */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setShowSupplementsMap((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                      className="w-full text-xs font-bold text-[#D3C3AD] hover:text-[#D4952A] flex items-center justify-between px-3 py-2 rounded-xl bg-[#1C0F08]/60 border border-[#3D2318] transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <Utensils className="w-3.5 h-3.5 text-[#D4952A]" />
                        <span>Suppléments (2 pour 10 DH)</span>
                        {hasSupps && (
                          <span className="bg-[#D4952A] text-[#1C0F08] text-[10px] font-extrabold px-1.5 py-0.2 rounded-full">
                            {selectedSuppIds.length}
                          </span>
                        )}
                      </span>
                      {showSupplements ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {showSupplements && (
                      <div className="mt-2.5 p-3 rounded-xl bg-[#1C0F08] border border-[#3D2318] space-y-2 animate-fadeIn">
                        {warningMsg && (
                          <div className="text-[11px] font-bold text-[#E58E26] bg-[#3D2318] p-2 rounded-lg border border-[#E58E26]/50">
                            ⚠️ {warningMsg}
                          </div>
                        )}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                          {SUPPLEMENTS_LIST.map((supp) => {
                            const isChecked = selectedSuppIds.includes(supp.id);
                            const suppName = supp.name[language] || supp.name.fr;
                            return (
                              <button
                                key={supp.id}
                                type="button"
                                onClick={() => handleToggleSupplement(item.id, supp.id)}
                                className={`p-2 rounded-lg border text-left rtl:text-right text-[11px] transition-all flex items-center justify-between ${
                                  isChecked
                                    ? 'bg-[#D4952A]/20 border-[#D4952A] text-[#F5EBD8] font-bold'
                                    : 'bg-[#2B1810] border-[#3D2318] text-[#D3C3AD]'
                                }`}
                              >
                                <span className="truncate">{suppName}</span>
                                {isChecked && <Check className="w-3 h-3 text-[#D4952A] shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                </div>

                {/* Main Direct Add CTA Button */}
                <div className="mt-4 pt-3.5 border-t border-[#3D2318] space-y-2.5">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(item)}
                    className={`w-full py-3 px-4 rounded-xl font-extrabold text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 ${
                      isAdded
                        ? 'bg-[#3D5C42] text-white scale-[0.98]'
                        : 'bg-gradient-to-r from-[#D4952A] to-[#B8781B] text-[#1C0F08] hover:brightness-110 active:scale-95'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Ajouté au panier !</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>
                          {t('addToCart')} ({calculatedTotal} DH)
                        </span>
                      </>
                    )}
                  </button>

                  {/* Inline Drink Upsell Box (expands inside card directly under Ajouter button) */}
                  {showUpsell && (
                    <div className="p-3 rounded-xl bg-[#1C0F08] border border-[#D4952A]/50 space-y-2.5 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#F5EBD8] flex items-center gap-1.5">
                          <span>Ajouter une boisson ? 🥤</span>
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

                      {/* Soda Pill options */}
                      <div className="flex flex-wrap gap-1.5">
                        {TACOS_DRINK_UPSELLS.map((soda) => {
                          const isDrinkAdded = addedDrinks.includes(soda.id);
                          return (
                            <button
                              key={soda.id}
                              type="button"
                              onClick={() => handleAddSodaUpsell(item.id, soda)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 border ${
                                isDrinkAdded
                                  ? 'bg-[#3D5C42] border-[#4ADE80] text-[#4ADE80] shadow-sm'
                                  : 'bg-[#2B1810] border-[#3D2318] hover:border-[#D4952A]/60 text-[#F5EBD8] hover:text-white'
                              }`}
                            >
                              {isDrinkAdded ? (
                                <>
                                  <Check className="w-3.5 h-3.5 stroke-[3] text-[#4ADE80]" />
                                  <span>{soda.name}</span>
                                </>
                              ) : (
                                <>
                                  <Plus className="w-3.5 h-3.5 text-[#D4952A]" />
                                  <span>{soda.name}</span>
                                  <span className="text-[10px] text-[#D4952A] font-extrabold ml-0.5">
                                    +{soda.price} DH
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


