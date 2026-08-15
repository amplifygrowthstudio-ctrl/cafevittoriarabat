import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CategoryId } from '../types';
import { CupSoda, LayoutGrid } from 'lucide-react';
import { WaffleIcon } from './WaffleIcon';
import { TacoIcon } from './TacoIcon';

interface CategoryNavProps {
  activeCategory: CategoryId | 'all';
  onSelectCategory: (cat: CategoryId | 'all') => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const { t } = useLanguage();

  const categories: { id: CategoryId | 'all'; labelKey: string; icon: React.ReactNode }[] = [
    { id: 'all', labelKey: 'allCategories', icon: <LayoutGrid className="w-4 h-4" /> },
    { id: 'gaufres', labelKey: 'catGaufres', icon: <WaffleIcon className="w-4 h-4 text-[#D4952A]" /> },
    { id: 'tacos', labelKey: 'catTacos', icon: <TacoIcon className="w-4 h-4 text-[#E58E26]" /> },
    { id: 'boissons', labelKey: 'catBoissons', icon: <CupSoda className="w-4 h-4 text-[#3D5C42]" /> },
  ];

  const handleClick = (id: CategoryId | 'all') => {
    onSelectCategory(id);
    setTimeout(() => {
      if (id === 'all') {
        const menuNav = document.getElementById('menu-nav');
        if (menuNav) {
          menuNav.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 40);
  };

  return (
    <div
      id="menu-nav"
      className="sticky top-[56px] z-40 bg-[#1C0F08]/95 backdrop-blur-md border-b border-[#3D2318] py-2.5 shadow-md scroll-mt-[56px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 sm:gap-3 min-w-max">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleClick(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#D4952A] text-[#1C0F08] shadow-lg scale-105'
                    : 'bg-[#2B1810] text-[#D3C3AD] hover:text-[#F5EBD8] hover:bg-[#3D2318] border border-[#3D2318]'
                }`}
              >
                {cat.icon}
                <span>{t(cat.labelKey as any)}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
