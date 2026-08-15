import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { GaufresSection } from './components/GaufresSection';
import { TacosSection } from './components/TacosSection';
import { BoissonsSection } from './components/BoissonsSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { StickyOrderBar } from './components/StickyOrderBar';
import { CategoryId } from './types';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all');

  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen bg-[#21120B] text-[#F5EBD8] flex flex-col font-sans antialiased selection:bg-[#D4952A] selection:text-[#1C0F08]">
          
          {/* Header */}
          <Header />

          {/* Hero Section */}
          <Hero />

          {/* Sticky Category Navigation */}
          <CategoryNav
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          {/* Main Content Area */}
          <main className="flex-1 space-y-4">
            {(activeCategory === 'all' || activeCategory === 'gaufres') && (
              <GaufresSection />
            )}

            {(activeCategory === 'all' || activeCategory === 'tacos') && (
              <TacosSection />
            )}

            {(activeCategory === 'all' || activeCategory === 'boissons') && (
              <BoissonsSection />
            )}
          </main>

          {/* Footer */}
          <Footer />

          {/* Slide-out Cart Drawer */}
          <CartDrawer />

          {/* Sticky Bottom Order Bar */}
          <StickyOrderBar />

        </div>
      </CartProvider>
    </LanguageProvider>
  );
}
