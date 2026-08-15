export type Language = 'fr' | 'ar' | 'en';

export type CategoryId = 'gaufres' | 'tacos' | 'boissons';

export type DrinkSubGroup = 'healthy_teas' | 'chais' | 'chocolats' | 'cafes' | 'sodas';

export type TacoOption = 'seul' | 'menu';

export type OrderType = 'takeaway' | 'dine_in' | 'delivery';

export interface SupplementItem {
  id: string;
  name: Record<Language, string>;
  price: number;
}

export interface MenuItem {
  id: string;
  categoryId: CategoryId;
  subGroup?: DrinkSubGroup;
  title: Record<Language, string>;
  description?: Record<Language, string>;
  image: string;
  badge?: Record<Language, string>;
  
  // For standard items (e.g. Gaufres, Drinks)
  price?: number; 
  
  // For Tacos with dual pricing (Seul vs Menu)
  hasOptions?: boolean;
  prices?: {
    seul: number;
    menu: number;
  };
  
  // Flag for items with price on request / sur place
  priceOnRequest?: boolean;
  
  // Whether suppléments can be selected
  allowsSupplements?: boolean;
}

export interface CartItem {
  cartId: string; // unique ID including selected option & suppléments
  item: MenuItem;
  selectedOption?: TacoOption; // 'seul' or 'menu'
  selectedSupplements?: SupplementItem[];
  quantity: number;
  unitPrice: number;
}

export interface CustomerOrderInfo {
  customerName: string;
  phone: string;
  orderType: OrderType;
  tableNumber?: string;
  deliveryAddress?: string;
  notes?: string;
}
