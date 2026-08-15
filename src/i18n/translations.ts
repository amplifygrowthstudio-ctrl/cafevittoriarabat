import { Language } from '../types';

export const TRANSLATIONS = {
  fr: {
    brandName: 'Café Vittoria',
    taglineHeader: 'Rabat • Rue Beyrouth',
    openStatus: 'Ouvert aujourd\'hui jusqu\'à 22:00',
    addressShort: 'Rue Beyrouth, Rabat',
    
    // Hero
    heroTitle: 'Gaufres. Tacos. Chaï.',
    heroDescription: 'Votre café artisanal au cœur de Rabat.',
    ctaWhatsAppHero: 'Commander sur WhatsApp',
    ctaMenuHero: 'Voir le Menu',
    chooseMood: 'Choisissez votre humeur',
    infoBadge1: '⚡ Commande WhatsApp rapide',
    infoBadge2: '📍 25C6+CPR, Rue Beyrouth',
    infoBadge3: '🕒 08:00 - 22:00',

    // Categories
    allCategories: 'Tout le Menu',
    catGaufres: 'Les Gaufres',
    catTacos: 'Les Tacos',
    catBoissons: 'Les Boissons',
    catSupplements: 'Suppléments',

    // Category descriptions
    gaufresSub: 'Gaufres liégeoises croustillantes & dorées, toppings généreux au choix.',
    tacosSub: 'Streetfood réconfortante. Choisissez votre formule : Seul ou en Menu (Frites + Boisson).',
    boissonsSub: 'Thés healthy d\'exception, Chaïs épicés, chocolats riches et grands cafés.',

    // Tacos options & Suppléments
    seulLabel: 'Seul',
    menuLabel: 'Menu (+Frites & Boisson)',
    supplementsBoxTitle: '🔥 Suppléments Gourmands',
    supplementsOfferTag: '2 choix pour 10 DH',
    addSupplementsBtn: 'Personnaliser mes Suppléments',
    selectSupplementsTitle: 'Sélectionnez vos suppléments pour votre Tacos',
    confirmSupplementsBtn: 'Valider les suppléments',
    supplementsSelectedCount: 'supplément(s) sélectionné(s)',

    // Drinks subgroups
    subGroupHealthyTeas: '🍃 Sélection de Thés Healthy',
    subGroupChais: '☕ Les Chaïs Épicés',
    subGroupChocolats: '🍫 Chocolats Chauds',
    subGroupCafes: '☕ Les Cafés',
    subGroupSodas: '🥤 Sodas & Rafraîchissements',

    // Card Actions
    addToCart: 'Ajouter',
    priceOnDemand: 'Prix sur place',
    currencyDH: 'DH',

    // Cart Bar & Drawer
    cartTitle: 'Votre Commande',
    emptyCartMessage: 'Votre panier est encore vide. Choisissez de délicieuses gaufres, tacos ou thés !',
    stickyTotal: 'Total Panier',
    viewCart: 'Voir ma commande',
    checkoutWhatsApp: 'Commander via WhatsApp',
    orderSummary: 'Récapitulatif de votre commande',
    orderTypeTitle: 'Mode de commande',
    typeTakeaway: 'À emporter',
    typeDineIn: 'Sur place (Table)',
    typeDelivery: 'Livraison à domicile (Rabat)',
    customerNameLabel: 'Votre Prénom / Nom',
    customerNamePlaceholder: 'Ex: Youssef',
    phoneLabel: 'Numéro de Téléphone',
    tableNumberLabel: 'Numéro de table (si sur place)',
    addressLabel: 'Adresse de livraison à Rabat',
    addressPlaceholder: 'Ex: Agdal, Rue Oujda #14...',
    notesLabel: 'Instructions spéciales / Remarques',
    notesPlaceholder: 'Ex: Sans oignon, sauce algérienne, gaufre bien chaude...',
    clearCart: 'Vider le panier',
    closeCart: 'Fermer',
    
    // Footer
    aboutTitle: 'À Propos de Café Vittoria',
    aboutText: 'Café & snack convivial situé Rue Beyrouth à Rabat. Nous préparons nos gaufres liégeoises artisanales, nos tacos généreux et nos thés épicés avec passion tous les jours.',
    locationTitle: 'Localisation & Horaire',
    googleMapsBtn: 'Ouvrir dans Google Maps',
    openingHours: 'Lundi - Dimanche : 08h00 - 22h00',
    contactTitle: 'Contact WhatsApp Direct',
    credits: 'Powered by Amplify Growth Studio',

    // WhatsApp Message
    waHeader: '☕ *NOUVELLE COMMANDE - CAFÉ VITTORIA RABAT*',
    waOrderType: '📍 *Mode:*',
    waCustomerInfo: '👤 *Client:*',
    waNotes: '📝 *Note:*',
    waItemsList: '🛍️ *Détail des articles:*',
    waTotal: '💰 *TOTAL À PAYER:*',
    waFooterMsg: 'Merci de confirmer ma commande ! 🚀'
  },

  ar: {
    brandName: 'مقهى فيتوريا',
    taglineHeader: 'الرباط • شارع بيروت',
    openStatus: 'مفتوح اليوم حتى 22:00',
    addressShort: 'شارع بيروت، الرباط',
    
    // Hero
    heroTitle: 'وافل. تاكو. شاي.',
    heroDescription: 'مقهاكم الحرفي في قلب الرباط.',
    ctaWhatsAppHero: 'الطلب عبر واتساب',
    ctaMenuHero: 'استعرض القائمة',
    chooseMood: 'اختر mood ديالك',
    infoBadge1: '⚡ طلب سريع عبر الواتساب',
    infoBadge2: '📍 25C6+CPR، شارع بيروت',
    infoBadge3: '🕒 08:00 - 22:00',

    // Categories
    allCategories: 'الكل',
    catGaufres: 'الوافل (Gaufres)',
    catTacos: 'التاكو (Tacos)',
    catBoissons: 'المشروبات',
    catSupplements: 'الإضافات',

    // Category descriptions
    gaufresSub: 'وافل بلجيكي مقرمش وذهبي مع صلصات واختيارات لديدة.',
    tacosSub: 'وجبات تاكو شهية. اختر صيغتك: منفرد (Seul) أو وجبة كاملة (Menu) مع بطاطس ومشروب.',
    boissonsSub: 'شاي صحي ممتاز، شاي ماسالا متبل، شوكولاتة دافئة وقهوة إيطالية فاخرة.',

    // Tacos options & Suppléments
    seulLabel: 'ساندويتش فقط',
    menuLabel: 'وجبة Menu (+بطاطس ومشروب)',
    supplementsBoxTitle: '🔥 إضافات ممتازة للتاكو',
    supplementsOfferTag: 'إختياران بـ 10 دراهم',
    addSupplementsBtn: 'تخصيص الإضافات',
    selectSupplementsTitle: 'اختر الإضافات المفضلة لتاكو الخاص بك',
    confirmSupplementsBtn: 'تأكيد الإضافات',
    supplementsSelectedCount: 'إضافة مختارة',

    // Drinks subgroups
    subGroupHealthyTeas: '🍃 تشكيلة الشاي الصحي',
    subGroupChais: '☕ الشاي المتبل والماسالا',
    subGroupChocolats: '🍫 الشوكولاتة الساخنة',
    subGroupCafes: '☕ القهوة',
    subGroupSodas: '🥤 المشروبات الغازية',

    // Card Actions
    addToCart: 'إضافة',
    priceOnDemand: 'السعر بالمقهى',
    currencyDH: 'درهم',

    // Cart Bar & Drawer
    cartTitle: 'طلبيتك الحالية',
    emptyCartMessage: 'سلتك فارغة حالياً. اختر ما تشتهيه من الوافل، التاكو أو الشاي المفضل!',
    stickyTotal: 'المجموع الكلي',
    viewCart: 'عرض السلة',
    checkoutWhatsApp: 'إرسال الطلب عبر واتساب',
    orderSummary: 'ملخص الطلبية',
    orderTypeTitle: 'طريقة الطلب',
    typeTakeaway: 'سفري / للآخذ (À emporter)',
    typeDineIn: 'في المقهى (Sur place)',
    typeDelivery: 'توصيل للمنزل في الرباط',
    customerNameLabel: 'الاسم الشخصي',
    customerNamePlaceholder: 'مثال: يوسف',
    phoneLabel: 'رقم الهاتف',
    tableNumberLabel: 'رقم الطاولة (إذا كنت بالمقهى)',
    addressLabel: 'عنوان التوصيل بالرباط',
    addressPlaceholder: 'مثال: أقدال، شارع وجدة رقم 14...',
    notesLabel: 'ملاحظات وتفضيلات خاصة',
    notesPlaceholder: 'مثال: بدون بصل، صلصة جزائرية إضافية، وافل ساخن...',
    clearCart: 'تفريغ السلة',
    closeCart: 'إغلاق',
    
    // Footer
    aboutTitle: 'عن مقهى فيتوريا (Café Vittoria)',
    aboutText: 'مقهى ووجبات سريعة دافئة في شارع بيروت بالرباط. نعد الوافل البلجيكي، التاكو الشهي والشاي المتبل بكل حب يومياً.',
    locationTitle: 'الموقع وساعات العمل',
    googleMapsBtn: 'فتح الخريطة في Google Maps',
    openingHours: 'الإثنين - الأحد: 08:00 - 22:00',
    contactTitle: 'تواصل مباشر عبر الواتساب',
    credits: 'Powered by Amplify Growth Studio',

    // WhatsApp Message
    waHeader: '☕ *طلب جديد - مقهى فيتوريا الرباط*',
    waOrderType: '📍 *النوع:*',
    waCustomerInfo: '👤 *الزبون:*',
    waNotes: '📝 *ملاحظات:*',
    waItemsList: '🛍️ *تفاصيل المواد:*',
    waTotal: '💰 *المجموع النهائي:*',
    waFooterMsg: 'المرجو تأكيد طلبيتي شكراً جزيلًا! 🚀'
  },

  en: {
    brandName: 'Café Vittoria',
    taglineHeader: 'Rabat • Rue Beyrouth',
    openStatus: 'Open today until 22:00',
    addressShort: 'Rue Beyrouth, Rabat',
    
    // Hero
    heroTitle: 'Waffles. Tacos. Chai.',
    heroDescription: 'Your artisanal café in the heart of Rabat.',
    ctaWhatsAppHero: 'Order on WhatsApp',
    ctaMenuHero: 'Explore Café Menu',
    chooseMood: 'Choose your mood',
    infoBadge1: '⚡ Fast WhatsApp Ordering',
    infoBadge2: '📍 25C6+CPR, Rue Beyrouth',
    infoBadge3: '🕒 08:00 - 22:00',

    // Categories
    allCategories: 'All Menu',
    catGaufres: 'Waffles',
    catTacos: 'Tacos',
    catBoissons: 'Drinks',
    catSupplements: 'Supplements',

    // Category descriptions
    gaufresSub: 'Crispy & golden Belgian Liege waffles with rich artisanal toppings.',
    tacosSub: 'Comforting French streetfood. Choose your option: Single Tacos or Combo Menu (Fries + Drink).',
    boissonsSub: 'Exceptional healthy teas, spiced Chais, rich hot chocolate, and fine coffees.',

    // Tacos options & Suppléments
    seulLabel: 'Single Tacos',
    menuLabel: 'Combo Menu (+Fries & Drink)',
    supplementsBoxTitle: '🔥 Gourmet Supplements',
    supplementsOfferTag: '2 choices for 10 DH',
    addSupplementsBtn: 'Customize Extra Toppings',
    selectSupplementsTitle: 'Select your extra toppings for your Tacos',
    confirmSupplementsBtn: 'Confirm Toppings',
    supplementsSelectedCount: 'supplement(s) selected',

    // Drinks subgroups
    subGroupHealthyTeas: '🍃 Healthy Teas Selection',
    subGroupChais: '☕ Spiced Chai Selection',
    subGroupChocolats: '🍫 Rich Hot Chocolates',
    subGroupCafes: '☕ Fine Coffees',
    subGroupSodas: '🥤 Sodas & Refreshments',

    // Card Actions
    addToCart: 'Add to Order',
    priceOnDemand: 'In-house Price',
    currencyDH: 'DH',

    // Cart Bar & Drawer
    cartTitle: 'Your Order',
    emptyCartMessage: 'Your cart is empty. Pick delicious waffles, tacos, or teas from the menu!',
    stickyTotal: 'Total Order',
    viewCart: 'Review Order',
    checkoutWhatsApp: 'Send Order to WhatsApp',
    orderSummary: 'Order Summary',
    orderTypeTitle: 'Order Mode',
    typeTakeaway: 'Takeaway / To-Go',
    typeDineIn: 'Dine-In (Table)',
    typeDelivery: 'Delivery in Rabat',
    customerNameLabel: 'Your Name',
    customerNamePlaceholder: 'E.g., Youssef',
    phoneLabel: 'Phone Number',
    tableNumberLabel: 'Table Number (if inside)',
    addressLabel: 'Delivery Address in Rabat',
    addressPlaceholder: 'E.g., Agdal, Rue Oujda #14...',
    notesLabel: 'Special Instructions / Preferences',
    notesPlaceholder: 'E.g., Extra sauce, hot waffle, no onions...',
    clearCart: 'Empty Cart',
    closeCart: 'Close',
    
    // Footer
    aboutTitle: 'About Café Vittoria',
    aboutText: 'A welcoming café & snack spot located on Rue Beyrouth in Rabat. We craft our signature Liege waffles, rich tacos, and spiced teas daily with love.',
    locationTitle: 'Location & Opening Hours',
    googleMapsBtn: 'Open in Google Maps',
    openingHours: 'Monday - Sunday: 08:00 - 22:00',
    contactTitle: 'Direct WhatsApp Contact',
    credits: 'Powered by Amplify Growth Studio',

    // WhatsApp Message
    waHeader: '☕ *NEW ORDER - CAFÉ VITTORIA RABAT*',
    waOrderType: '📍 *Order Type:*',
    waCustomerInfo: '👤 *Customer:*',
    waNotes: '📝 *Notes:*',
    waItemsList: '🛍️ *Order Items:*',
    waTotal: '💰 *TOTAL AMOUNT:*',
    waFooterMsg: 'Please confirm my order, thank you! 🚀'
  }
} as const;

export type TranslationKey = keyof typeof TRANSLATIONS.fr;
