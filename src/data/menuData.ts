import { MenuItem, SupplementItem } from '../types';

export const SUPPLEMENTS_LIST: SupplementItem[] = [
  { id: 'charcuterie', name: { fr: 'Charcuterie', ar: 'لانشون / كاشير', en: 'Charcuterie' }, price: 5 },
  { id: 'emmental', name: { fr: 'Fromage Emmental', ar: 'جبن إيمنتال', en: 'Emmental Cheese' }, price: 5 },
  { id: 'hotdog', name: { fr: 'Hot-Dog', ar: 'هوت دوغ', en: 'Hot-Dog' }, price: 5 },
  { id: 'cheddar', name: { fr: 'Cheddar', ar: 'جبن شيدر', en: 'Cheddar Cheese' }, price: 5 },
  { id: 'oeufs', name: { fr: 'Œufs', ar: 'بيض', en: 'Eggs' }, price: 5 },
  { id: 'cornichons', name: { fr: 'Cornichons', ar: 'مخلل', en: 'Pickles' }, price: 5 },
];

export const MENU_ITEMS: MenuItem[] = [
  // --- GAUFRES ---
  {
    id: 'gaufre-sucre-confiture',
    categoryId: 'gaufres',
    title: {
      fr: 'Gaufre Sucre ou Confiture',
      ar: 'وافل بالسكر أو المربى',
      en: 'Waffle with Sugar or Jam'
    },
    description: {
      fr: 'Gaufre liégeoise dorée, croustillante à l\'extérieur et moelleuse à l\'intérieur, saupoudrée de sucre glace ou nappée de confiture artisanale.',
      ar: 'وافل بلجيكي ذهبي مقرمش من الخارجد وطفيف من الداخل مع سكر ناعم أو مربى.',
      en: 'Golden Belgian Liege waffle, crispy outside and soft inside, dusted with powdered sugar or layered with artisanal jam.'
    },
    price: 25,
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80',
    badge: { fr: 'Classique', ar: 'تقليدي', en: 'Classic' }
  },
  {
    id: 'gaufre-miel',
    categoryId: 'gaufres',
    title: {
      fr: 'Gaufre au Miel Pur',
      ar: 'وافل بالعسل الطبيعي',
      en: 'Pure Honey Waffle'
    },
    description: {
      fr: 'Nappée d\'un généreux filet de miel pur naturel aux notes florales.',
      ar: 'مع عسل طبيعي خالص نقي بنكهة زهرية غنية.',
      en: 'Drizzled generously with pure natural honey.'
    },
    price: 29,
    image: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&w=800&q=80',
    badge: { fr: 'Miel Pur', ar: 'عسل حر', en: 'Pure Honey' }
  },
  {
    id: 'gaufre-nutella',
    categoryId: 'gaufres',
    title: {
      fr: 'Gaufre Nutella',
      ar: 'وافل بنوتيلا',
      en: 'Nutella Waffle'
    },
    description: {
      fr: 'Nappage gourmand et onctueux au véritable Nutella.',
      ar: 'مغطى بطبقة غنية ودافئة من شوكولاتة نوتيلا الأصلية.',
      en: 'Topped with rich, warm authentic Nutella.'
    },
    price: 35,
    image: 'https://images.unsplash.com/photo-1504113076330-118f9816915a?auto=format&fit=crop&w=800&q=80',
    badge: { fr: 'Incontournable', ar: 'الأكثر طلباً', en: 'Best Seller' }
  },
  {
    id: 'gaufre-caramel-beurre-sale',
    categoryId: 'gaufres',
    title: {
      fr: 'Caramel au Beurre Salé',
      ar: 'وافل بالكراميل والزبدة المملحة',
      en: 'Salted Butter Caramel Waffle'
    },
    description: {
      fr: 'Recette artisanale de caramel maison au beurre salé fondant.',
      ar: 'صلصة كراميل منزلية بالزبدة المملحة الفاخرة.',
      en: 'Artisanal homemade salted butter caramel sauce.'
    },
    price: 37,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    badge: { fr: 'Spécialité', ar: 'خاص بالفيلا', en: 'Specialty' }
  },
  {
    id: 'gaufre-nutella-banane',
    categoryId: 'gaufres',
    title: {
      fr: 'Gaufre Nutella & Banane',
      ar: 'وافل بنوتيلا والموز',
      en: 'Nutella & Banana Waffle'
    },
    description: {
      fr: 'L\'accord parfait : Nutella généreux et rondelles de bananes fraîches.',
      ar: 'المزيج المثالي: نوتيلا غنية مع شرائح الموز الطازجة.',
      en: 'The perfect match: generous Nutella with fresh banana slices.'
    },
    price: 39,
    image: 'https://images.unsplash.com/photo-1612198188251-14f7b243b8ff?auto=format&fit=crop&w=800&q=80',
    badge: { fr: 'Gourmand', ar: 'فاخر', en: 'Gourmet' }
  },

  // --- TACOS ---
  // French / Moroccan Tacos style (pressed folded tortilla wrap with french fries and melted cheese sauce inside)
  {
    id: 'tacos-poulet-nuggets',
    categoryId: 'tacos',
    title: {
      fr: 'Tacos Poulet / Nuggets',
      ar: 'تاكو الدجاج / النغتس',
      en: 'Chicken / Nuggets Tacos'
    },
    description: {
      fr: 'Garniture généreuse de poulet mariné ou nuggets croustillants, frites, sauce fromagère onctueuse maison.',
      ar: 'حشوة غنية من دجاج متبل أو قطع نغتس مقرمشة مع بطاطس وصلصة الجبن المنزلية.',
      en: 'Generous chicken or crispy nuggets with golden fries and homemade melted cheese sauce.'
    },
    hasOptions: true,
    prices: {
      seul: 38,
      menu: 48
    },
    allowsSupplements: true,
    // PLACEHOLDER - French tacos style wrap with fries (O'Tacos style)
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    badge: { fr: 'Populaire', ar: 'مفضل', en: 'Popular' }
  },
  {
    id: 'tacos-viande-hachee',
    categoryId: 'tacos',
    title: {
      fr: 'Tacos Viande Hachée',
      ar: 'تاكو اللحم المفروم',
      en: 'Minced Beef Tacos'
    },
    description: {
      fr: 'Viande hachée assaisonnée façon chef, frites dorées et sauce fromagère.',
      ar: 'لحم مفروم متبل بعناية مع بطاطس ذهبية وصلصة الجبن اللذيذة.',
      en: 'Seasoned minced beef, golden fries, and melting cheese sauce.'
    },
    hasOptions: true,
    prices: {
      seul: 43,
      menu: 53
    },
    allowsSupplements: true,
    // PLACEHOLDER - French tacos style wrap with fries (O'Tacos style)
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tacos-emince-boeuf',
    categoryId: 'tacos',
    title: {
      fr: 'Tacos Émincé de Bœuf',
      ar: 'تاكو شرائح اللحم البقري',
      en: 'Sliced Beef Tacos'
    },
    description: {
      fr: 'Finement émincé de bœuf mariné sauté, frites et sauce fromagère intense.',
      ar: 'شرائح لحم بقري متبلة ومحمرة بعناية مع بطاطس صوص الجبن.',
      en: 'Tender marinated beef strips sautéed with fries and rich cheese sauce.'
    },
    hasOptions: true,
    prices: {
      seul: 50,
      menu: 60
    },
    allowsSupplements: true,
    // PLACEHOLDER - French tacos style wrap with fries (O'Tacos style)
    image: 'https://images.unsplash.com/photo-1561719014-bfed2a488c9f?auto=format&fit=crop&w=800&q=80',
    badge: { fr: 'Premium', ar: 'ممتاز', en: 'Premium' }
  },
  {
    id: 'tacos-mixte',
    categoryId: 'tacos',
    title: {
      fr: 'Tacos Mixte (Duo Viandes)',
      ar: 'تاكو مشكل (مكس دجاج ولحم)',
      en: 'Mixed Tacos (Duo Meat)'
    },
    description: {
      fr: 'Double plaisir : mélange savoureux de poulet et viande hachée avec frites et sauce fromagère.',
      ar: 'مزج رائع بين الدجاج واللحم المفروم مع البطاطس والصلصة.',
      en: 'Double delight: savory blend of chicken and beef with fries and cheese sauce.'
    },
    hasOptions: true,
    prices: {
      seul: 45,
      menu: 55
    },
    allowsSupplements: true,
    // PLACEHOLDER - French tacos style wrap with fries (O'Tacos style)
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    badge: { fr: 'Gourmand', ar: 'مشكل', en: 'Combo' }
  },

  // --- BOISSONS: THÉS HEALTHY ---
  {
    id: 'the-masala-chai',
    categoryId: 'boissons',
    subGroup: 'healthy_teas',
    title: {
      fr: 'Masala Chaï Healthy',
      ar: 'شاي ماسالا صحي',
      en: 'Healthy Masala Chai'
    },
    description: {
      fr: 'Mélange traditionnel d\'épices indiennes infusées (cannelle, cardamome, gingembre, clou de girofle).',
      ar: 'مزيج هندي تقليدي من التوابل المنقوعة (قرفة، هيل، زنجبيل، قرنفل).',
      en: 'Traditional blend of infused spices (cinnamon, cardamom, ginger, cloves).'
    },
    price: 25,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    badge: { fr: 'Bio & Épices', ar: 'صحي وأعشاب', en: 'Spiced Tea' }
  },
  {
    id: 'the-swenka-bar-rouge',
    categoryId: 'boissons',
    subGroup: 'healthy_teas',
    title: {
      fr: 'Swenka Bar Rouge',
      ar: 'شاي سوينكا بار أحمر',
      en: 'Swenka Red Bar Tea'
    },
    description: {
      fr: 'Infusion aux fruits rouges, hibiscus et plantes détox vivifiantes.',
      ar: 'منقوع الفواكه الحمراء والكركديه مع الأعشاب المنعشة.',
      en: 'Red berry infusion with hibiscus and invigorating detox botanicals.'
    },
    price: 25,
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'the-pacific-sun',
    categoryId: 'boissons',
    subGroup: 'healthy_teas',
    title: {
      fr: 'Pacific Sun Healthy',
      ar: 'شاي باسيفيك صان المنسع',
      en: 'Pacific Sun Healthy Tea'
    },
    description: {
      fr: 'Thé vert exotique aux éclats d\'agrumes, mangue et menthe douce.',
      ar: 'شاي أخضر استوائي بنكهات الحمضيات والمانجو والنعناع.',
      en: 'Exotic green tea infused with citrus notes, mango, and soft mint.'
    },
    price: 25,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80'
  },

  // --- BOISSONS: LES CHAÏS ---
  {
    id: 'chai-vanilla',
    categoryId: 'boissons',
    subGroup: 'chais',
    title: {
      fr: 'Vanilla Chaï Latte',
      ar: 'فانيلا شاي لاتيه',
      en: 'Vanilla Chai Latte'
    },
    description: {
      fr: 'Thé noir épicé adouci d\'un lait mousseux onctueux et gousse de vanille.',
      ar: 'شاي أسود مبشور مع حليب رغوي ناعم ونكهة الفانيليا الفاخرة.',
      en: 'Spiced black tea softened with velvety steamed milk and natural vanilla.'
    },
    price: 30,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    badge: { fr: 'Onctueux', ar: 'مفضل', en: 'Creamy' }
  },
  {
    id: 'chai-spicy',
    categoryId: 'boissons',
    subGroup: 'chais',
    title: {
      fr: 'Spicy Chaï Intense',
      ar: 'شاي حار مكثف',
      en: 'Intense Spicy Chai'
    },
    description: {
      fr: 'Chaï réconfortant avec une touche de gingembre corsé et poivre doux.',
      ar: 'شاي دافئ بنكهة الزنجبيل الحار والفلفل الخفيف المميز.',
      en: 'Warming chai with a bold ginger kick and smooth spice depth.'
    },
    price: 30,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80'
  },

  // --- BOISSONS: CHOCOLATS ---
  {
    id: 'chocolat-chaud',
    categoryId: 'boissons',
    subGroup: 'chocolats',
    title: {
      fr: 'Chocolat Chaud',
      ar: 'شوكولاتة ساخنة',
      en: 'Hot Chocolate'
    },
    description: {
      fr: 'Chocolat chaud classique doux et réconfortant.',
      ar: 'مشروب الشوكولاتة الساخنة الكلاسيكي الدافئ.',
      en: 'Classic soothing hot chocolate.'
    },
    price: 20,
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chocolat-maison',
    categoryId: 'boissons',
    subGroup: 'chocolats',
    title: {
      fr: 'Chocolat Chaud Maison',
      ar: 'شوكولاتة منزلية فاخرة',
      en: 'Signature House Hot Chocolate'
    },
    description: {
      fr: 'Recette artisanale à partir de cacao pur fondu et lait entier mousseux.',
      ar: 'وصفة منزلية خاصة من الكاكاو المذاب الحقيقي والحليب الكامل.',
      en: 'Artisanal recipe made from melted real cocoa and velvety rich milk.'
    },
    price: 25,
    image: 'https://images.unsplash.com/photo-1517578239113-b03992ba3437?auto=format&fit=crop&w=800&q=80',
    badge: { fr: 'Maison', ar: 'منزلي', en: 'Signature' }
  },

  // --- BOISSONS: CAFÉS ---
  {
    id: 'cafe-nespresso',
    categoryId: 'boissons',
    subGroup: 'cafes',
    title: {
      fr: 'Café Nespresso',
      ar: 'قهوة نسبريسو',
      en: 'Nespresso Coffee'
    },
    description: {
      fr: 'Espresso équilibré aux arômes riches et crema veloutée.',
      ar: 'إسبريسو متوازن بنكهة غنية ورغوة ناعمة.',
      en: 'Balanced espresso with rich aromas and silky crema.'
    },
    price: 22,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cafe-lavazza',
    categoryId: 'boissons',
    subGroup: 'cafes',
    title: {
      fr: 'Café Lavazza',
      ar: 'قهوة لافاتزا الإيطالية',
      en: 'Lavazza Italian Coffee'
    },
    description: {
      fr: 'Café italien authentique au caractère intense et corps généreux.',
      ar: 'قهوة إيطالية أصيلة ذات طعم مكثف ورائحة نفاذة.',
      en: 'Authentic Italian coffee with an intense, rich body.'
    },
    price: 20,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    badge: { fr: 'Italiano', ar: 'إيطالي', en: 'Italian' }
  },
  {
    id: 'cafe-decaf',
    categoryId: 'boissons',
    subGroup: 'cafes',
    title: {
      fr: 'Café Décaféiné',
      ar: 'قهوة بدون كافيين',
      en: 'Decaf Coffee'
    },
    description: {
      fr: 'Tout l\'arôme du bon café, sans la caféine.',
      ar: 'طعم القهوة اللذيذة والغنية بدون كافيين.',
      en: 'All the rich coffee flavor, caffeine-free.'
    },
    price: 22,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
  },

  // --- BOISSONS: SODAS ---
  {
    id: 'soda-sprite',
    categoryId: 'boissons',
    subGroup: 'sodas',
    title: {
      fr: 'Sprite (33cl)',
      ar: 'سبرايت (33cl)',
      en: 'Sprite (33cl)'
    },
    description: {
      fr: 'Soda citron-lime bien frais (33cl).',
      ar: 'مشروب ليمون بارد منعش (33cl).',
      en: 'Chilled lemon-lime soda (33cl).'
    },
    price: 15,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    badge: { fr: 'Frais', ar: 'بارد', en: 'Chilled' }
  },
  {
    id: 'soda-coca',
    categoryId: 'boissons',
    subGroup: 'sodas',
    title: {
      fr: 'Coca-Cola (33cl)',
      ar: 'كوكاكولا (33cl)',
      en: 'Coca-Cola (33cl)'
    },
    description: {
      fr: 'Coca-Cola Original rafraîchissant (33cl).',
      ar: 'كوكاكولا أصلي بارد ومجفف (33cl).',
      en: 'Refreshing original Coca-Cola (33cl).'
    },
    price: 15,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'soda-fanta',
    categoryId: 'boissons',
    subGroup: 'sodas',
    title: {
      fr: 'Fanta Orange (33cl)',
      ar: 'فانتا برتقال (33cl)',
      en: 'Fanta Orange (33cl)'
    },
    description: {
      fr: 'Fanta Orange fruité et pétillant (33cl).',
      ar: 'فانتا برتقال منعش ولذيذ (33cl).',
      en: 'Fruity and bubbly Fanta Orange (33cl).'
    },
    price: 15,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
  }
];
