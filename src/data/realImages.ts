export interface RealBusinessImage {
  id: string;
  filename: string;
  cleanFilename: string;
  title: string;
  category: 'food' | 'packaging' | 'brand' | 'delivery';
  categoryLabel: string;
  sectionAssignment: string;
  description: string;
  tags: string[];
  aspectRatio: '4/3' | 'square' | '16/9' | '3/2';
  themeColor: string;
}

export const REAL_BUSINESS_IMAGES: RealBusinessImage[] = [
  {
    id: "thali-royal-hero",
    filename: "south-extension-hub.jpeg",
    cleanFilename: "south-extension-hub.jpeg",
    title: "South Extension I Kitchen & Service Hub",
    category: "brand",
    categoryLabel: "South Extension I",
    sectionAssignment: "Hero Section & Kitchen Hub",
    description: "Centrally located at J-5, South Extension I, Block J, New Delhi 110049. Our active kitchen and daily dispatch hub serving wholesome homestyle meals across South Delhi.",
    tags: ["South Extension", "New Delhi", "Kitchen Hub", "Hero", "Location"],
    aspectRatio: "4/3",
    themeColor: "#BE2325"
  },
  {
    id: "tiffin-bento-box",
    filename: "0959221d-82d6-4062-80fd-f5c41c35421b.jpeg",
    cleanFilename: "compartment-steel-tiffin.jpeg",
    title: "Compartment Stainless Steel Lunchbox",
    category: "packaging",
    categoryLabel: "Packaging / Tiffin",
    sectionAssignment: "Meal Plans (Weekly Plan)",
    description: "Hygienic multi-compartment stainless steel bento tiffin packed with homestyle paneer curry, fragrant basmati rice, dal with whole red chili tadka, warm rotis, fresh salad, and sweet gulab jamun.",
    tags: ["Lunchbox", "Weekly Plan", "Stainless Steel", "Bento"],
    aspectRatio: "4/3",
    themeColor: "#8C2224"
  },
  {
    id: "round-dabbas-spread",
    filename: "41e30186-3b07-4040-ba20-fd84256ab3c4.jpeg",
    cleanFilename: "traditional-round-dabbas.jpeg",
    title: "Traditional Stainless Steel Dabba Set",
    category: "packaging",
    categoryLabel: "Packaging / Tiffin",
    sectionAssignment: "How It Works (Step 1)",
    description: "Classic round stainless steel tiffin dabbas arranged with fresh homestyle gravies, seasoned pulao, cooling dahi, wrapped rotis, and refreshing beverage.",
    tags: ["Dabba", "Traditional", "Stainless Steel", "Packaging"],
    aspectRatio: "4/3",
    themeColor: "#2D4C3A"
  },
  {
    id: "mowgli-daily-spread",
    filename: "Mowgli.jpeg",
    cleanFilename: "daily-tiffin-spread.jpeg",
    title: "Everyday Homestyle Tiffin Meal Spread",
    category: "food",
    categoryLabel: "Food / Meals",
    sectionAssignment: "Meal Plans (Daily Plan)",
    description: "Wholesome flat-lay tiffin spread featuring stainless steel containers of slow-cooked dal, seasonal sabzi, hot puris, rotis, rice, and homestyle condiments.",
    tags: ["Daily Plan", "Thali", "Rotis", "Homestyle"],
    aspectRatio: "4/3",
    themeColor: "#BE2325"
  },
  {
    id: "kadhai-paneer-curry",
    filename: "17aaff4e-6c43-4c4c-b6a8-6c0be17bba79.jpeg",
    cleanFilename: "kadhai-paneer-curry.jpeg",
    title: "Slow-Cooked Paneer Butter Masala",
    category: "food",
    categoryLabel: "Food / Meals",
    sectionAssignment: "Menu Section (Paneer Highlight)",
    description: "Fresh cottage cheese cubes simmered in a velvety tomato-onion gravy with aromatic spices and topped with fresh coriander.",
    tags: ["Paneer", "Curry", "Gravy", "High Protein"],
    aspectRatio: "4/3",
    themeColor: "#C84B19"
  },
  {
    id: "balanced-homestyle-thali",
    filename: "e46610f3-9310-4743-bf7f-6d29d0ebc663.jpeg",
    cleanFilename: "balanced-homestyle-plate.jpeg",
    title: "Balanced Daily Homestyle Plate",
    category: "food",
    categoryLabel: "Food / Meals",
    sectionAssignment: "Menu Section (Lunch Special)",
    description: "Nutritious everyday meal with tempered yellow dal, spiced bhindi masala, steamed basmati rice, soft rolled chapatis, fresh green grapes, and fresh salad.",
    tags: ["Balanced Meal", "Low Oil", "Everyday", "Vegetables"],
    aspectRatio: "4/3",
    themeColor: "#3F6C34"
  },
  {
    id: "golden-dal-tadka",
    filename: "c073aab2-7e65-44b2-a9d8-4e2bc42dab32.jpeg",
    cleanFilename: "sizzling-dal-tadka.jpeg",
    title: "Authentic Comfort Dal Tadka",
    category: "food",
    categoryLabel: "Food / Meals",
    sectionAssignment: "Menu Section (Signature Dal)",
    description: "Hearty yellow arhar dal slow-cooked to creamy perfection with sizzling desi ghee, cumin, curry leaves, and whole red chilies.",
    tags: ["Dal Tadka", "Protein", "Comfort Food", "Desi Ghee"],
    aspectRatio: "4/3",
    themeColor: "#D9931E"
  },
  {
    id: "fresh-puffed-phulkas",
    filename: "0c0fbd98-c251-419c-a635-e79be02fafba.jpeg",
    cleanFilename: "fresh-hot-phulkas.jpeg",
    title: "Puffed Whole-Wheat Tawa Phulkas",
    category: "food",
    categoryLabel: "Food / Meals",
    sectionAssignment: "Why Choose Us (Fresh Tawa Breads)",
    description: "Light, balloon-puffed whole wheat rotis roasted fresh on tawa with no maida and minimal oil for effortless daily digestion.",
    tags: ["Phulkas", "Rotis", "Whole Wheat", "Breads"],
    aspectRatio: "4/3",
    themeColor: "#C98E56"
  },
  {
    id: "seasonal-mix-veg",
    filename: "0e83633a-511b-4623-b953-040055b956f7.jpeg",
    cleanFilename: "seasonal-mix-veg-curry.jpeg",
    title: "Farm-Fresh Seasonal Mix Vegetable",
    category: "food",
    categoryLabel: "Food / Meals",
    sectionAssignment: "Menu Section (Seasonal Sabzi)",
    description: "Daily medley of garden-fresh vegetables including florets, carrots, and green peas simmered in a lightly spiced homestyle gravy.",
    tags: ["Mix Veg", "Seasonal", "Vegetables", "Nutrition"],
    aspectRatio: "4/3",
    themeColor: "#4B753A"
  },
  {
    id: "steamed-jeera-rice",
    filename: "afb31632-e12d-4119-8ef8-5361022e2a2c.jpeg",
    cleanFilename: "steamed-jeera-basmati-rice.jpeg",
    title: "Aromatic Steamed Jeera Basmati Rice",
    category: "food",
    categoryLabel: "Food / Meals",
    sectionAssignment: "Menu Section (Rice & Breads)",
    description: "Fluffy aged long-grain basmati rice gently tossed with roasted cumin seeds, bay leaf, and freshly chopped cilantro.",
    tags: ["Jeera Rice", "Basmati", "Grains", "Gluten-Free"],
    aspectRatio: "4/3",
    themeColor: "#6B604F"
  },
  {
    id: "homestyle-breakfast-poha",
    filename: "cf68faab-d98c-4473-90d4-e724922b98cb.jpeg",
    cleanFilename: "golden-breakfast-poha.jpeg",
    title: "Light & Wholesome Morning Poha",
    category: "food",
    categoryLabel: "Food / Meals",
    sectionAssignment: "Menu Section (Breakfast)",
    description: "Traditional flattened rice gently tossed with crunchy roasted peanuts, mustard seeds, curry leaves, turmeric, and fresh lemon juice.",
    tags: ["Breakfast", "Poha", "Morning", "Light Meal"],
    aspectRatio: "4/3",
    themeColor: "#E0A824"
  },
  {
    id: "crisp-garden-salad",
    filename: "eb6439f6-f0e5-4cfa-addb-49a9bb3c355c.jpeg",
    cleanFilename: "fresh-garden-salad.jpeg",
    title: "Crisp Farm Kachumber Salad",
    category: "food",
    categoryLabel: "Food / Meals",
    sectionAssignment: "Menu Section (Accompaniments)",
    description: "Crisp garden salad with fresh crunchy cucumbers, ripe tomatoes, carrots, and red onions with fresh lemon dressing.",
    tags: ["Salad", "Kachumber", "Fresh", "Raw Vegetables"],
    aspectRatio: "4/3",
    themeColor: "#4F853B"
  },
  {
    id: "paneer-combo-special",
    filename: "f3169c48-0ea4-41aa-8b1b-418052694204.jpeg",
    cleanFilename: "gourmet-paneer-meal.jpeg",
    title: "Gourmet Paneer Special Meal",
    category: "food",
    categoryLabel: "Food / Meals",
    sectionAssignment: "Promotional Banner (Combo Feature)",
    description: "Rich paneer specialty served with fresh cream swirl and accompanied by crisp traditional flatbreads for weekend celebrations.",
    tags: ["Paneer Special", "Weekend", "Combo", "Feast"],
    aspectRatio: "4/3",
    themeColor: "#BE2325"
  },
  {
    id: "clean-modular-kitchen",
    filename: "Dream Kitchen on a Budget_ 20 Cheap Remodeling Ideas That Look Expensive ✨.jpeg",
    cleanFilename: "clean-hygienic-kitchen.jpeg",
    title: "Spotless, Hygienic Kitchen Setup",
    category: "brand",
    categoryLabel: "Kitchen / Setup",
    sectionAssignment: "About Section (Kitchen Standards)",
    description: "Immaculately maintained culinary workspace with polished stainless steel fixtures, clean countertops, and strict hygiene protocols.",
    tags: ["Kitchen", "Hygiene", "Cleanliness", "South Delhi"],
    aspectRatio: "4/3",
    themeColor: "#2A2A2A"
  },
  {
    id: "deluxe-feast-thali",
    filename: "62fb5d9e-0ea5-4e89-abf4-9f84ce4690c4.jpeg",
    cleanFilename: "deluxe-7-katori-thali.jpeg",
    title: "Grand 7-Katori Deluxe Feast Thali",
    category: "food",
    categoryLabel: "Food / Meals",
    sectionAssignment: "Menu Section (Deluxe Celebration)",
    description: "Elaborate multi-course Indian dining thali featuring 7 separate katoris of assorted seasonal curries, dals, cooling raita, sweet dish, and warm breads.",
    tags: ["Deluxe Thali", "Grand Feast", "Katori", "Celebration"],
    aspectRatio: "4/3",
    themeColor: "#BE2325"
  },
  {
    id: "four-tier-carrier-open",
    filename: "174395a0-e26a-4655-8cb7-259b4d10f20c.jpeg",
    cleanFilename: "four-tier-tiffin-carrier.jpeg",
    title: "Classic 4-Tier Stainless Steel Tiffin",
    category: "packaging",
    categoryLabel: "Packaging / Tiffin",
    sectionAssignment: "How It Works (Step 2)",
    description: "Heavy-duty 4-tier stainless steel carrier system keeping piping hot curries, dals, and rotis neatly segregated and temperature-retained.",
    tags: ["4-Tier", "Stainless Carrier", "Eco-Friendly", "Packaging"],
    aspectRatio: "4/3",
    themeColor: "#616161"
  },
  {
    id: "four-tier-leakproof-set",
    filename: "This 4-tier stainless steel tiffin box keeps your meals fresh and organized, with leak-proof lids and a sustainable design_ Check it out on Amazon now!.jpeg",
    cleanFilename: "sustainable-4tier-tiffin-box.jpeg",
    title: "Sustainable 4-Tier Eco Tiffin Box",
    category: "packaging",
    categoryLabel: "Packaging / Tiffin",
    sectionAssignment: "Meal Plans (Monthly Plan Showcase)",
    description: "Premium stainless steel multi-layer tiffin box with leak-proof locking mechanism, ensuring fresh, hot homestyle meals everyday without plastic waste.",
    tags: ["Monthly Plan", "Sustainable", "Leak-Proof", "Eco Tiffin"],
    aspectRatio: "4/3",
    themeColor: "#BE2325"
  },
  {
    id: "fresh-tawa-rotis-stack",
    filename: "395a2db5-768f-4ad5-afea-aec0983b36fb.jpeg",
    cleanFilename: "fresh-tawa-rotis-stack.jpeg",
    title: "Stack of Fresh Homestyle Tawa Rotis",
    category: "food",
    categoryLabel: "Food / Meals",
    sectionAssignment: "About Section & Why Choose Us",
    description: "Warm stack of hand-rolled whole-wheat chapatis prepared minutes before packing to ensure soft texture and homemade comfort.",
    tags: ["Rotis", "Tawa Fresh", "Whole Wheat", "Comfort"],
    aspectRatio: "4/3",
    themeColor: "#A66D3B"
  },
  {
    id: "batch-meal-assembly-station",
    filename: "ab8c6b1c-01ae-4530-bc6e-8e5e2b387262.jpeg",
    cleanFilename: "meal-assembly-prep-station.jpeg",
    title: "Daily Batch Meal Prep & Packing Station",
    category: "brand",
    categoryLabel: "Kitchen / Setup",
    sectionAssignment: "About Section (Assembly & Dispatch)",
    description: "Organized commercial meal preparation station with hygienic compartmentalized meal containers lined up for prompt daily dispatch.",
    tags: ["Prep Station", "Batch Packing", "Hygiene", "Dispatch"],
    aspectRatio: "4/3",
    themeColor: "#333333"
  },
  {
    id: "commercial-kitchen-setup",
    filename: "99d7feee-d5a9-46e8-8449-386bab3afb57.jpeg",
    cleanFilename: "commercial-kitchen-workstation.jpeg",
    title: "Dedicated Food Preparation Facility",
    category: "brand",
    categoryLabel: "Kitchen / Setup",
    sectionAssignment: "Why Choose Us (Kitchen Facility)",
    description: "Professional culinary workspace equipped with commercial gas lines, organized cookware racks, and systematic storage.",
    tags: ["Facility", "Commercial Kitchen", "Safety", "Organization"],
    aspectRatio: "4/3",
    themeColor: "#222222"
  },
  {
    id: "packed-meal-boxes-dispatch",
    filename: "8c9492ac-196b-43de-8c23-96db49d1e31c.jpeg",
    cleanFilename: "meal-boxes-ready-dispatch.jpeg",
    title: "Meal Boxes Packed & Ready for Dispatch",
    category: "delivery",
    categoryLabel: "Delivery & Dispatch",
    sectionAssignment: "How It Works (Step 3 - Delivery)",
    description: "Neatly sealed, tamper-evident food containers labeled and organized for scheduled delivery across South Delhi localities.",
    tags: ["Meal Boxes", "Tamper-Evident", "On-Time", "Delivery"],
    aspectRatio: "4/3",
    themeColor: "#1E3A8A"
  },
  {
    id: "express-doorstep-transit",
    filename: "7c51b11e-d1e0-4114-ad4d-eb48d4c13192.jpeg",
    cleanFilename: "express-doorstep-delivery.jpeg",
    title: "Prompt Local Doorstep Delivery Service",
    category: "delivery",
    categoryLabel: "Delivery & Dispatch",
    sectionAssignment: "Delivery Information & Footer",
    description: "Dedicated route delivery network serving South Extension I, Block J, and nearby residential and commercial complexes punctually.",
    tags: ["Delivery", "Doorstep", "South Delhi", "Punctual"],
    aspectRatio: "4/3",
    themeColor: "#BE2325"
  }
];

export const REAL_IMAGES_BY_ID = REAL_BUSINESS_IMAGES.reduce<Record<string, RealBusinessImage>>((acc, img) => {
  acc[img.id] = img;
  return acc;
}, {});

export const REAL_IMAGES_BY_FILENAME = REAL_BUSINESS_IMAGES.reduce<Record<string, RealBusinessImage>>((acc, img) => {
  acc[img.filename] = img;
  acc[img.cleanFilename] = img;
  return acc;
}, {});
