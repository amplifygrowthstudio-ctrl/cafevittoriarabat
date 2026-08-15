import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, MenuItem, TacoOption, SupplementItem, CustomerOrderInfo } from '../types';
import { useLanguage } from './LanguageContext';

// Target WhatsApp Phone Number for Café Vittoria in Rabat
// Default Moroccan WhatsApp number wa.me/212600002200 (easily customizable)
export const VITTORIA_WHATSAPP_NUMBER = '212660002200';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: MenuItem, selectedOption?: TacoOption, selectedSupplements?: SupplementItem[]) => void;
  removeFromCart: (cartId: string) => void;
  updateQuantity: (cartId: string, delta: number) => void;
  clearCart: () => void;
  totalPrice: number;
  totalItems: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  customerInfo: CustomerOrderInfo;
  setCustomerInfo: React.Dispatch<React.SetStateAction<CustomerOrderInfo>>;
  generateWhatsAppUrl: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t, language } = useLanguage();
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('vittoria_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [customerInfo, setCustomerInfo] = useState<CustomerOrderInfo>({
    customerName: '',
    phone: '',
    orderType: 'takeaway',
    notes: '',
    tableNumber: '',
    deliveryAddress: ''
  });

  useEffect(() => {
    localStorage.setItem('vittoria_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (
    item: MenuItem, 
    selectedOption?: TacoOption, 
    selectedSupplements: SupplementItem[] = []
  ) => {
    let unitPrice = item.price || 0;
    
    if (item.hasOptions && item.prices && selectedOption) {
      unitPrice = item.prices[selectedOption];
    }

    // Add supplement costs (10 DH flat total for up to 2 selected suppléments)
    const supplementsCost = selectedSupplements.length > 0 ? 10 : 0;
    unitPrice += supplementsCost;

    // Create unique Cart ID based on item, option & selected supplements
    const suppsIdStr = selectedSupplements.map(s => s.id).sort().join('-');
    const cartId = `${item.id}_${selectedOption || 'def'}_${suppsIdStr}`;

    setCartItems(prev => {
      const existingIndex = prev.findIndex(ci => ci.cartId === cartId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            cartId,
            item,
            selectedOption,
            selectedSupplements,
            quantity: 1,
            unitPrice
          }
        ];
      }
    });
  };

  const removeFromCart = (cartId: string) => {
    setCartItems(prev => prev.filter(ci => ci.cartId !== cartId));
  };

  const updateQuantity = (cartId: string, delta: number) => {
    setCartItems(prev => {
      return prev.map(ci => {
        if (ci.cartId === cartId) {
          const newQty = ci.quantity + delta;
          return newQty > 0 ? { ...ci, quantity: newQty } : null;
        }
        return ci;
      }).filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((sum, ci) => sum + ci.unitPrice * ci.quantity, 0);
  const totalItems = cartItems.reduce((sum, ci) => sum + ci.quantity, 0);

  const generateWhatsAppUrl = (): string => {
    if (cartItems.length === 0) {
      return `https://wa.me/${VITTORIA_WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour Café Vittoria ! Je voudrais me renseigner sur le menu.')}`;
    }

    const lines: string[] = [];
    
    lines.push(t('waHeader'));
    lines.push('');

    // Order type
    let orderTypeStr = t('typeTakeaway');
    if (customerInfo.orderType === 'dine_in') {
      orderTypeStr = `${t('typeDineIn')}${customerInfo.tableNumber ? ` (Table #${customerInfo.tableNumber})` : ''}`;
    } else if (customerInfo.orderType === 'delivery') {
      orderTypeStr = `${t('typeDelivery')}${customerInfo.deliveryAddress ? ` : ${customerInfo.deliveryAddress}` : ''}`;
    }
    lines.push(`${t('waOrderType')} ${orderTypeStr}`);

    if (customerInfo.customerName) {
      lines.push(`${t('waCustomerInfo')} ${customerInfo.customerName} ${customerInfo.phone ? `(${customerInfo.phone})` : ''}`);
    }

    if (customerInfo.notes) {
      lines.push(`${t('waNotes')} ${customerInfo.notes}`);
    }

    lines.push('');
    lines.push(t('waItemsList'));

    cartItems.forEach(ci => {
      const title = ci.item.title[language] || ci.item.title.fr;
      let optionSuffix = '';
      if (ci.selectedOption === 'menu') {
        optionSuffix = ` [Menu]`;
      } else if (ci.selectedOption === 'seul') {
        optionSuffix = ` [Seul]`;
      }

      let suppsSuffix = '';
      if (ci.selectedSupplements && ci.selectedSupplements.length > 0) {
        const names = ci.selectedSupplements.map(s => s.name[language] || s.name.fr).join(', ');
        suppsSuffix = ` (+ ${names})`;
      }

      const itemTotal = ci.unitPrice * ci.quantity;
      lines.push(`• ${ci.quantity}x ${title}${optionSuffix}${suppsSuffix} = ${itemTotal} DH`);
    });

    lines.push('');
    lines.push(`${t('waTotal')} *${totalPrice} DH*`);
    lines.push('');
    lines.push('📍 *Café Vittoria* - Rue Beyrouth, Rabat');
    lines.push(t('waFooterMsg'));

    const fullMessage = lines.join('\n');
    return `https://wa.me/${VITTORIA_WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
        totalItems,
        isCartOpen,
        setIsCartOpen,
        customerInfo,
        setCustomerInfo,
        generateWhatsAppUrl
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
