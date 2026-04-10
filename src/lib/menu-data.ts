export interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

export interface MenuCategory {
  name: string;
  nameEn: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    name: "Başlangıçlar",
    nameEn: "Starters",
    items: [
      { name: "Zerdeçallı Mercimek Çorbası", price: 280 },
      { name: "Günün Çorbası", price: 280 },
      { name: "Peynir & Şarküteri Tabağı", price: 1650, description: "Seçkin peynir ve şarküteri çeşitleri" },
      { name: "Levrek Ceviche", price: 720, description: "Taze levrek, narenciye sosu" },
    ],
  },
  {
    name: "Salatalar",
    nameEn: "Salads",
    items: [
      { name: "Yeşil Salata", price: 320 },
      { name: "Portakallı Pancarlı Salata", price: 390 },
      { name: "Kinoa Salata", price: 420 },
      { name: "Somon-Pancar Salata", price: 720 },
      { name: "Sezar Salata", price: 620 },
    ],
  },
  {
    name: "Ara Sıcaklar",
    nameEn: "Warm Starters",
    items: [
      { name: "Fırınlanmış Karnabahar & Brokoli", price: 380 },
      { name: "Tahinli Nohut Püre", price: 470 },
      { name: "Antep Fıstıklı Peynirli Rulo", price: 520 },
    ],
  },
  {
    name: "Makarna",
    nameEn: "Pasta",
    items: [
      { name: "Penne Arabiata", price: 420 },
      { name: "Tavuklu Mantarlı Tagliatelle", price: 480 },
      { name: "Somon Havyar Tagliatelle", price: 630, description: "Premium somon, havyar" },
    ],
  },
  {
    name: "Pizza",
    nameEn: "Stone Oven Pizza",
    items: [
      { name: "Pizza Margarita", price: 580 },
      { name: "Pizza Fungi", price: 680 },
      { name: "Sebzeli Pizza", price: 660 },
      { name: "Pizza Sucuk", price: 740 },
    ],
  },
  {
    name: "Ana Yemekler",
    nameEn: "Main Courses",
    items: [
      { name: "Kuzu Şiş", price: 1100, description: "Marine edilmiş kuzu, özel baharatlar" },
      { name: "Dana Antrikot", price: 1200, description: "Premium dana antrikot, mevsim sebzeleri" },
      { name: "Levrek", price: 1050, description: "Taze levrek, tereyağı sosu" },
      { name: "Somon", price: 1100, description: "Norveç somonu, sebze yatağı" },
    ],
  },
  {
    name: "Küçük Tabaklar",
    nameEn: "Small Plates",
    items: [
      { name: "Köfte", price: 580, description: "Penne makarna veya fırınlanmış patates ile" },
      { name: "Sosis", price: 620 },
      { name: "Mini Hamburger", price: 580 },
      { name: "Çıtır Tavuk", price: 580 },
      { name: "Patates Kızartması", price: 240 },
    ],
  },
  {
    name: "Tatlılar",
    nameEn: "Desserts",
    items: [
      { name: "Brownie", price: 420 },
      { name: "Krep Kıtırı", price: 430 },
      { name: "Islak Katmer", price: 620, description: "Antep fıstığı, kaymak" },
      { name: "Meyve Tabağı", price: 420 },
    ],
  },
];
