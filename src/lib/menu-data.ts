export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
  isVegetarian?: boolean;
}

export interface MenuCategory {
  name: string;
  nameEn: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    name: "Burgerler",
    nameEn: "Burgers",
    items: [
      {
        name: "Şikemperver",
        price: 585,
        description: "Burger Köftesi, Füme Antrikot, Burger Peyniri, Karamelize Soğan, Trüflü Mayonez, Salatalık Turşusu",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/40cc7e15-944d-4eed-9eb3-b71c7a92c77d/items/e2216c93-0989-4284-940d-cf837d3bff4d/main.webp",
        isVegetarian: false,
      },
      {
        name: "Pejmürde",
        price: 610,
        description: "Smash Burger Köftesi, Kars Eski Kaşarı, Çıtır Soğan, Kırmızı Lahana Turşusu, Jalapeno Turşusu, Demi Glace Sos, Barbekü Sos",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/40cc7e15-944d-4eed-9eb3-b71c7a92c77d/items/54e4407e-daf7-42eb-8c35-737a1351a6a1/main.webp",
        isVegetarian: false,
      },
      {
        name: "Müşkülpesent",
        price: 625,
        description: "Burger Köftesi, Karışık Dağ Mantarı, Soğan Turşusu, Cheddar Sos, Relish Sos",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/40cc7e15-944d-4eed-9eb3-b71c7a92c77d/items/97d167d7-edc1-4cd6-8b04-4bf4544c3087/main.webp",
        isVegetarian: false,
      },
      {
        name: "Naçizane",
        price: 550,
        description: "Burger Köftesi, İsli Çerkez Peyniri, Hindi Kuru Et, Siyah Sarımsaklı Mayonez",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/40cc7e15-944d-4eed-9eb3-b71c7a92c77d/items/7bbec5c3-85c5-45a6-913b-da4d6d02f9d4/main.webp",
        isVegetarian: false,
      },
      {
        name: "Müstesna",
        price: 510,
        description: "Kızarmış Tavuk, Patates Cipsi, Mor Lahana Salatası, Relish Sos, Ballı Hardal",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/40cc7e15-944d-4eed-9eb3-b71c7a92c77d/items/98f83781-72c3-4f34-9c5e-bc0f9caa6242/main.webp",
        isVegetarian: false,
      },
      {
        name: "Feveran",
        price: 520,
        description: "Kızarmış Tavuk, Kızartılmış Çeçil Peynir, El yapımı Ranch Sos, Tütsülenmiş Kırmızı Mayonez, Salatalık Turşusu",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/40cc7e15-944d-4eed-9eb3-b71c7a92c77d/items/4d502f68-797d-4956-bb04-5db938574e0b/main.webp",
        isVegetarian: false,
      },
      {
        name: "Diğerkâm (Vegan)",
        price: 450,
        description: "El Yapımı Vegan Burger Ekmeği, Sade Vegan Mayonez, Bitkisel Schnitzel, Çıtır Kabak, Chia Filizi, Vegan Ranch Sos",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/40cc7e15-944d-4eed-9eb3-b71c7a92c77d/items/be3747e8-c694-430d-bf0b-4a791a52d2ae/main.webp",
        isVegetarian: true,
      },
      {
        name: "Empati (Vegan)",
        price: 450,
        description: "Vegan Burger Ekmeği, Vegan Burger Köftesi, Salatalık Turşusu, Baklagil Filizi, Vegan Ranch Sos, Avokado Püresi",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/40cc7e15-944d-4eed-9eb3-b71c7a92c77d/items/d51a90b1-ab48-475c-bfa5-8d33df02f6ae/main.webp",
        isVegetarian: true,
      },
      {
        name: "Çocuk Burger",
        price: 500,
        description: "Burger Köftesi, Burger Peyniri, El Yapımı Ketçap ve Mayonez",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/40cc7e15-944d-4eed-9eb3-b71c7a92c77d/items/72c80b93-9d38-44cd-a593-cc7b754bee92/main.webp",
        isVegetarian: false,
      },
    ],
  },
  {
    name: "Aliyülâlâ Burgerler",
    nameEn: "Premium Burgers",
    items: [
      {
        name: "Fevkalâde (Cumartesi)",
        price: 650,
        description: "Filtresiz Bira Eşliğinde 10 saat Pişmiş Dana Eti, Burger Peyniri, Soğan Turşusu, Acı Biber Reçeli, Porvo Sos",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/a8dfc021-5636-41b4-9121-4b307b922805/items/a0e2a268-7dec-4bd2-ba3c-b32d2716516a/main.webp",
        isVegetarian: false,
      },
      {
        name: "Fevkalâdenin Fevkinde (Cumartesi)",
        price: 680,
        description: "Fevkalâdeye ilave İsviçre ızgarasında Raclette Peyniri ile servis edilir",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/a8dfc021-5636-41b4-9121-4b307b922805/items/9bf2e482-0128-4ef3-9587-5d239bd9f49d/main.webp",
        isVegetarian: false,
      },
      {
        name: "Harikulâde (Pazar)",
        price: 680,
        description: "Smash Burger Köftesi, Gravy Soslu Tiftik Dana Eti, Bergama Tulum Peyniri, Burger Peyniri, Porvo Beğendi Sos, Acılı Mayonez",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/a8dfc021-5636-41b4-9121-4b307b922805/items/fc0a1c4c-8a99-40db-9d79-15dce509a21c/main.webp",
        isVegetarian: false,
      },
      {
        name: "Medârıiftihar",
        price: 1400,
        description: "8 saat Pişmiş Asado Espeta, Meşe odunuyla tütsülenmiş Arjantin usulü kaburga, Emmental Peyniri, Dana Bacon Mayonez",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/a8dfc021-5636-41b4-9121-4b307b922805/items/8536bff0-16bd-4c6f-94f9-18e468c007d2/main.webp",
        isVegetarian: false,
      },
      {
        name: "Hipopatam - 10 Şikemperver Gücünde",
        price: 5850,
        description: "1000 gr. Burger Köftesi, Tütsülenmiş Piliç Sosis, Dana Rose Beef, Cheddar Sos, Karamelize Soğan, Trüflü Mayonez",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/a8dfc021-5636-41b4-9121-4b307b922805/items/76501053-965d-4962-8484-92aea52697f7/main.webp",
        isVegetarian: false,
      },
    ],
  },
  {
    name: "Bao Bun",
    nameEn: "Bao Bun",
    items: [
      {
        name: "Çıtır Tavuklu Bun",
        price: 265,
        description: "Çıtır tavuk, coleslaw ve sweetchili sos ile servis edilir",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/aaf9c4ba-a00f-4507-a494-9ff673d3bd4a/items/459dd5d8-e65e-4764-ac2e-41e9421567ac/main.webp",
        isVegetarian: false,
      },
      {
        name: "Tiftik Etli Bun",
        price: 300,
        description: "Tiftik et, porvo beğendi sos, tulum peyniri ve peri peri sos ile servis edilir",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/aaf9c4ba-a00f-4507-a494-9ff673d3bd4a/items/f4c5cb9c-f796-4f2d-9740-b0036de87ae0/main.webp",
        isVegetarian: false,
      },
    ],
  },
  {
    name: "Sosisliler",
    nameEn: "Sausages",
    items: [
      {
        name: "Nazenin",
        price: 415,
        description: "Özel hazırlanmış sosis burger",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/52f4372b-5278-4e80-990b-384de848cc85/items/1244d30d-06ed-4cf7-83a8-cc4e938bbcd2/main.webp",
        isVegetarian: false,
      },
      {
        name: "Vardakosta",
        price: 415,
        description: "Özel hazırlanmış sosis burger",
        isVegetarian: false,
      },
    ],
  },
  {
    name: "Yancılar",
    nameEn: "Sides",
    items: [
      {
        name: "Sea Box",
        price: 780,
        description: "2 Adet Kızarmış Mezgit, 4 Şiş Pankolu Midye, 3 Adet Karides, 3 Adet Kalamar Tava, Kajun Patates, 3 Sos",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/8a1c5a29-c4a8-4d7f-84fe-3331391f9d02/items/a4cf44e8-a45b-492f-8ed2-d7b15d9f1932/main.webp",
        isVegetarian: false,
      },
      {
        name: "Beer Box",
        price: 780,
        description: "3 Chicken Finger, 3 Mac & Cheese Roll, 3 Mozzarella Kroket, Baharatlı Patates, 3 Sos",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/8a1c5a29-c4a8-4d7f-84fe-3331391f9d02/items/df11e3d9-c9da-4aa7-b920-846ff10f0cdb/main.webp",
        isVegetarian: false,
      },
      {
        name: "Mac & Cheese (Çıtır Tavukla)",
        price: 380,
        description: "Acılı veya acısız tercihinize göre hazırlanır",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/8a1c5a29-c4a8-4d7f-84fe-3331391f9d02/items/0212e7bb-68cb-4387-9e2c-d7d0a4520e41/main.webp",
        isVegetarian: false,
      },
      {
        name: "Parmesanlı Patates",
        price: 280,
        description: "Parmesan peynirli patates kızartması",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/8a1c5a29-c4a8-4d7f-84fe-3331391f9d02/items/38350cad-1adf-4655-924d-e589e24739b0/main.webp",
        isVegetarian: true,
      },
      {
        name: "Kajun Baharatlı Patates",
        price: 220,
        description: "Kajun baharatlı patates kızartması",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/8a1c5a29-c4a8-4d7f-84fe-3331391f9d02/items/7439e592-b2c8-429f-ab14-bea3a922361c/main.webp",
        isVegetarian: true,
      },
      {
        name: "Fish And Chips",
        price: 480,
        description: "2 Adet Kızarmış Mezgit ve Parmak Patates ile servis edilir",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/4e0cf695-5742-4619-babc-222f29636b33/items/8572aeb5-9f57-44af-b5ab-532e0e32926a/main.webp",
        isVegetarian: false,
      },
    ],
  },
  {
    name: "El Yapımı Soslar",
    nameEn: "Handmade Sauces",
    items: [
      {
        name: "Bacon Mayonez",
        price: 70,
        description: "El yapımı bacon mayonez",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/220b7991-8ebe-4a83-a9ca-95de80a027e6/items/0f9a5d19-df5c-4205-910e-a2c5bc341852/main.webp",
        isVegetarian: false,
      },
      {
        name: "Trüflü Mayonez",
        price: 45,
        description: "El yapımı trüflü mayonez",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/220b7991-8ebe-4a83-a9ca-95de80a027e6/items/10716c59-d652-47cc-9630-8b0cdfc89919/main.webp",
        isVegetarian: true,
      },
      {
        name: "Siyah Sarımsaklı Mayonez",
        price: 45,
        description: "El yapımı siyah sarımsaklı mayonez",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/220b7991-8ebe-4a83-a9ca-95de80a027e6/items/4e923e4e-d237-4a39-b1e5-231f6d2ff95f/main.webp",
        isVegetarian: true,
      },
      {
        name: "Barbekü Sos",
        price: 40,
        description: "El yapımı barbekü sos",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/220b7991-8ebe-4a83-a9ca-95de80a027e6/items/1c1e581b-0a52-4b7f-9e87-6b0d3eebc4b2/main.webp",
        isVegetarian: true,
      },
      {
        name: "Ballı Hardal",
        price: 40,
        description: "El yapımı ballı hardal sos",
        imageUrl: "https://core.bykandil.com/storage/v1/object/public/horeca/porvo-burger/menu/cc44b355-3569-44db-bbbb-3be931e293ed/categories/220b7991-8ebe-4a83-a9ca-95de80a027e6/items/060e083f-1ff1-461e-8eb7-f8ea6eca1e2a/main.webp",
        isVegetarian: true,
      },
    ],
  },
];
