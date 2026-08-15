import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { OrderType } from '../types';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, MapPin, User, Phone, FileText } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { t, language } = useLanguage();
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
    totalItems,
    customerInfo,
    setCustomerInfo,
    generateWhatsAppUrl
  } = useCart();

  if (!isCartOpen) return null;

  const handleOrderTypeChange = (type: OrderType) => {
    setCustomerInfo(prev => ({ ...prev, orderType: type }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 rtl:right-auto rtl:left-0 max-w-full flex pl-10 rtl:pl-0 rtl:pr-10">
        <div className="w-screen max-w-md bg-[#1C0F08] border-l rtl:border-l-0 rtl:border-r border-[#3D2318] text-[#F5EBD8] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-[#3D2318] flex items-center justify-between bg-[#2B1810]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#D4952A]/20 border border-[#D4952A]/40 flex items-center justify-center text-[#D4952A]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display font-bold text-lg text-[#F5EBD8]">
                  {t('cartTitle')}
                </h2>
                <span className="text-xs text-[#D3C3AD]">
                  {totalItems} {totalItems === 1 ? 'article' : 'articles'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-lg bg-[#1C0F08] text-[#D3C3AD] hover:text-white hover:bg-[#3D2318] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#2B1810] border border-[#3D2318] flex items-center justify-center text-[#D3C3AD]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <p className="text-sm text-[#D3C3AD] max-w-xs mx-auto">
                  {t('emptyCartMessage')}
                </p>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-3">
                  {cartItems.map((ci) => {
                    const title = ci.item.title[language] || ci.item.title.fr;
                    return (
                      <div
                        key={ci.cartId}
                        className="bg-[#2B1810] p-3.5 rounded-xl border border-[#3D2318] space-y-2"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-bold text-sm text-[#F5EBD8]">
                              {title}
                            </h4>
                            {ci.selectedOption && (
                              <span className="inline-block px-2 py-0.5 rounded bg-[#3D2318] text-[#D4952A] text-[10px] font-bold uppercase mt-0.5">
                                Formule {ci.selectedOption}
                              </span>
                            )}
                            {ci.selectedSupplements && ci.selectedSupplements.length > 0 && (
                              <div className="text-[11px] text-[#D3C3AD] mt-1">
                                + {ci.selectedSupplements.map(s => s.name[language] || s.name.fr).join(', ')}
                              </div>
                            )}
                          </div>

                          <button
                            onClick={() => removeFromCart(ci.cartId)}
                            className="text-[#D3C3AD]/60 hover:text-[#D93838] p-1 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Quantity & Item Subtotal */}
                        <div className="flex items-center justify-between pt-2 border-t border-[#3D2318]/60">
                          <div className="flex items-center gap-2 bg-[#1C0F08] p-1 rounded-lg border border-[#3D2318]">
                            <button
                              onClick={() => updateQuantity(ci.cartId, -1)}
                              className="p-1 rounded hover:bg-[#3D2318] text-[#D3C3AD] transition-colors"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-bold px-1.5">{ci.quantity}</span>
                            <button
                              onClick={() => updateQuantity(ci.cartId, 1)}
                              className="p-1 rounded hover:bg-[#3D2318] text-[#D3C3AD] transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <span className="font-extrabold text-sm text-[#D4952A]">
                            {ci.unitPrice * ci.quantity} DH
                          </span>
                        </div>
                      </div>
                    );
                  })}

                  <button
                    onClick={clearCart}
                    className="text-xs text-[#D3C3AD]/80 hover:text-[#D93838] underline block ml-auto pt-1"
                  >
                    {t('clearCart')}
                  </button>
                </div>

                {/* Customer & Order Preferences Form */}
                <div className="space-y-4 pt-4 border-t border-[#3D2318]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#D3C3AD]">
                    {t('orderTypeTitle')}
                  </h3>

                  {/* Mode Buttons */}
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => handleOrderTypeChange('takeaway')}
                      className={`p-2.5 rounded-xl text-center text-xs font-bold transition-all ${
                        customerInfo.orderType === 'takeaway'
                          ? 'bg-[#D4952A] text-[#1C0F08]'
                          : 'bg-[#2B1810] text-[#D3C3AD] border border-[#3D2318]'
                      }`}
                    >
                      {t('typeTakeaway')}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleOrderTypeChange('dine_in')}
                      className={`p-2.5 rounded-xl text-center text-xs font-bold transition-all ${
                        customerInfo.orderType === 'dine_in'
                          ? 'bg-[#D4952A] text-[#1C0F08]'
                          : 'bg-[#2B1810] text-[#D3C3AD] border border-[#3D2318]'
                      }`}
                    >
                      {t('typeDineIn')}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleOrderTypeChange('delivery')}
                      className={`p-2.5 rounded-xl text-center text-xs font-bold transition-all ${
                        customerInfo.orderType === 'delivery'
                          ? 'bg-[#D4952A] text-[#1C0F08]'
                          : 'bg-[#2B1810] text-[#D3C3AD] border border-[#3D2318]'
                      }`}
                    >
                      {t('typeDelivery')}
                    </button>
                  </div>

                  {/* Inputs */}
                  <div className="space-y-3 pt-2">
                    {/* Name */}
                    <div>
                      <label className="text-xs font-semibold text-[#D3C3AD] flex items-center gap-1 mb-1">
                        <User className="w-3.5 h-3.5 text-[#D4952A]" />
                        {t('customerNameLabel')}
                      </label>
                      <input
                        type="text"
                        value={customerInfo.customerName}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, customerName: e.target.value })}
                        placeholder={t('customerNamePlaceholder')}
                        className="w-full bg-[#2B1810] border border-[#3D2318] focus:border-[#D4952A] rounded-xl px-3 py-2 text-xs text-[#F5EBD8] outline-none"
                      />
                    </div>

                    {/* Table Number if Dine In */}
                    {customerInfo.orderType === 'dine_in' && (
                      <div>
                        <label className="text-xs font-semibold text-[#D3C3AD] flex items-center gap-1 mb-1">
                          <MapPin className="w-3.5 h-3.5 text-[#D4952A]" />
                          {t('tableNumberLabel')}
                        </label>
                        <input
                          type="text"
                          value={customerInfo.tableNumber || ''}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, tableNumber: e.target.value })}
                          placeholder="Ex: Table #4"
                          className="w-full bg-[#2B1810] border border-[#3D2318] focus:border-[#D4952A] rounded-xl px-3 py-2 text-xs text-[#F5EBD8] outline-none"
                        />
                      </div>
                    )}

                    {/* Delivery Address if Delivery */}
                    {customerInfo.orderType === 'delivery' && (
                      <div>
                        <label className="text-xs font-semibold text-[#D3C3AD] flex items-center gap-1 mb-1">
                          <MapPin className="w-3.5 h-3.5 text-[#D4952A]" />
                          {t('addressLabel')}
                        </label>
                        <input
                          type="text"
                          value={customerInfo.deliveryAddress || ''}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, deliveryAddress: e.target.value })}
                          placeholder={t('addressPlaceholder')}
                          className="w-full bg-[#2B1810] border border-[#3D2318] focus:border-[#D4952A] rounded-xl px-3 py-2 text-xs text-[#F5EBD8] outline-none"
                        />
                      </div>
                    )}

                    {/* Notes */}
                    <div>
                      <label className="text-xs font-semibold text-[#D3C3AD] flex items-center gap-1 mb-1">
                        <FileText className="w-3.5 h-3.5 text-[#D4952A]" />
                        {t('notesLabel')}
                      </label>
                      <textarea
                        value={customerInfo.notes}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                        placeholder={t('notesPlaceholder')}
                        rows={2}
                        className="w-full bg-[#2B1810] border border-[#3D2318] focus:border-[#D4952A] rounded-xl px-3 py-2 text-xs text-[#F5EBD8] outline-none resize-none"
                      />
                    </div>
                  </div>

                </div>
              </>
            )}

          </div>

          {/* Footer Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-[#3D2318] bg-[#2B1810] space-y-4">
              <div className="flex items-center justify-between text-base">
                <span className="font-bold text-[#D3C3AD]">{t('stickyTotal')}</span>
                <span className="text-2xl font-extrabold text-[#D4952A]">{totalPrice} DH</span>
              </div>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#D4952A] to-[#B8791F] hover:from-[#E8A83A] hover:to-[#D4952A] text-white font-extrabold text-sm shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 border border-[#E8A83A]/30"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>{t('checkoutWhatsApp')}</span>
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
