import { useState } from 'react';
import { Plus, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';
import { MENU_CATEGORIES, BUSINESS_INFO } from '../data/businessData';
import { REAL_IMAGES_BY_ID, RealBusinessImage } from '../data/realImages';
import RealImage from './RealImage';

interface MenuSectionProps {
  onOpenClientEditor?: () => void;
  onZoomImage?: (image: RealBusinessImage) => void;
}

interface MenuDishItem {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  imageId: string;
  description: string;
  dietaryNote: string;
}

const MENU_DISHES: MenuDishItem[] = [
  {
    id: "dish-1",
    name: "Balanced Homestyle Lunch Thali",
    category: "lunch",
    categoryLabel: "Lunch Special",
    imageId: "balanced-homestyle-thali",
    description: "Tempered yellow dal, spiced bhindi masala, steamed basmati rice, soft chapatis, salad and fresh grapes.",
    dietaryNote: "Daily Special • Homestyle",
  },
  {
    id: "dish-2",
    name: "Signature Golden Dal Tadka",
    category: "lunch",
    categoryLabel: "Lunch",
    imageId: "golden-dal-tadka",
    description: "Slow-simmered yellow arhar dal with sizzling desi ghee, cumin seeds, curry leaves, and dried red chili.",
    dietaryNote: "High Protein • Comforting",
  },
  {
    id: "dish-3",
    name: "Puffed Whole-Wheat Tawa Phulkas",
    category: "sides",
    categoryLabel: "Breads",
    imageId: "fresh-puffed-phulkas",
    description: "Soft, balloon-puffed rotis rolled fresh from 100% whole wheat with zero maida or heavy oils.",
    dietaryNote: "100% Whole Wheat • Light",
  },
  {
    id: "dish-4",
    name: "Farm-Fresh Seasonal Mix Veg",
    category: "dinner",
    categoryLabel: "Dinner",
    imageId: "seasonal-mix-veg",
    description: "Fresh florets, tender green peas, and carrots gently braised in a mild homestyle tomato-cumin sauce.",
    dietaryNote: "Low Oil • Seasonal Veg",
  },
  {
    id: "dish-5",
    name: "Aromatic Steamed Jeera Basmati",
    category: "sides",
    categoryLabel: "Rice",
    imageId: "steamed-jeera-rice",
    description: "Long-grain basmati rice gently tossed with roasted cumin seeds, bay leaves, and chopped cilantro.",
    dietaryNote: "Aged Basmati • Gluten Free",
  },
  {
    id: "dish-6",
    name: "Slow-Cooked Paneer Butter Masala",
    category: "dinner",
    categoryLabel: "Dinner",
    imageId: "kadhai-paneer-curry",
    description: "Fresh cottage cheese cubes in a savory, aromatic gravy seasoned with whole hand-ground spices.",
    dietaryNote: "Paneer Special • Comfort",
  },
  {
    id: "dish-7",
    name: "Golden Breakfast Poha",
    category: "breakfast",
    categoryLabel: "Breakfast",
    imageId: "homestyle-breakfast-poha",
    description: "Light flattened rice tossed with crunchy roasted peanuts, mustard seeds, curry leaves, and lime juice.",
    dietaryNote: "7:00 AM – 10:30 AM",
  },
  {
    id: "dish-8",
    name: "Crisp Farm Kachumber Salad",
    category: "extras",
    categoryLabel: "Sides",
    imageId: "crisp-garden-salad",
    description: "Fresh sliced cucumbers, tomatoes, carrots, and red onions with fresh lemon squeeze.",
    dietaryNote: "Fresh Daily • Crunchy",
  },
  {
    id: "dish-9",
    name: "Grand 7-Katori Deluxe Feast",
    category: "lunch",
    categoryLabel: "Deluxe Feast",
    imageId: "deluxe-feast-thali",
    description: "Traditional royal thali featuring 7 separate katoris of assorted curries, dals, raita, sweet, and breads.",
    dietaryNote: "Weekend Highlight • Feast",
  },
];

export default function MenuSection({ onOpenClientEditor, onZoomImage }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all'
    ? MENU_DISHES
    : MENU_DISHES.filter(item => item.category === activeCategory);

  const handleAskMenuWhatsApp = (dishName?: string) => {
    const text = dishName
      ? `Hello The Tiffin Service (PDSB Enterprise), I am interested in checking availability for: ${dishName}.`
      : `Hello The Tiffin Service (PDSB Enterprise), please share today's active lunch and dinner menu rotation for South Extension.`;
    window.open(`https://wa.me/919560339117?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-white border-y border-[#E8E2D7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-[#BE2325] text-lg font-bold">→</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#161616]">
              DAILY MENU
            </h2>
            <span className="text-[#BE2325] text-lg font-bold">←</span>
          </div>

          <p className="font-display uppercase text-xs sm:text-sm font-semibold tracking-wider text-[#BE2325] mb-2">
            What's Cooking Today?
          </p>

          <p className="text-xs sm:text-sm text-[#5E584E] max-w-xl mx-auto leading-relaxed">
            Everyday homestyle preparations cooked fresh each morning and evening. 
            Balanced, nourishing, and made in controlled batches with pure ingredients.
          </p>

          {/* Today's Menu Live Notice */}
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border-2 border-dashed border-[#D5CABB] text-center max-w-xl mx-auto shadow-2xs">
            <div className="flex items-center justify-center gap-2 text-[#BE2325] font-display uppercase font-bold text-sm sm:text-base mb-1">
              <Clock className="w-4 h-4" />
              <span>“Today's menu will be updated here.”</span>
            </div>
            <p className="text-xs text-[#6B645A] leading-relaxed">
              Exact daily menu rotations vary between lunch and dinner. Inquire directly on WhatsApp to receive today's live dispatch schedule.
            </p>
            <div className="mt-3 flex items-center justify-center">
              <button
                type="button"
                onClick={() => handleAskMenuWhatsApp()}
                className="px-5 py-2 rounded-full bg-[#161616] hover:bg-[#BE2325] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Check Today's Menu On WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#BE2325] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#3D3A35] border border-[#E0DCD4] hover:border-[#BE2325]/50 hover:text-[#BE2325]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const realImg = REAL_IMAGES_BY_ID[item.imageId];

            return (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#FAF8F5] border border-[#E8E2D7] shadow-xs hover:shadow-lg hover:border-[#D5CABB] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Real Image Area */}
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  {realImg && (
                    <RealImage
                      image={realImg}
                      aspectRatio="4/3"
                      className="w-full h-full rounded-none border-none"
                      showBadge={false}
                      allowZoom={true}
                      onZoom={onZoomImage}
                    />
                  )}

                  {/* Badge on Top Left */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-2.5 py-1 rounded-md bg-[#BE2325] text-white text-[9px] font-extrabold uppercase tracking-widest shadow-xs">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-base font-bold uppercase tracking-tight text-[#161616] mb-1 leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-xs text-[#5E584E] leading-relaxed mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#6B645A] bg-white border border-[#E8E2D7] px-2 py-0.5 rounded-md mb-3">
                      <CheckCircle2 className="w-3 h-3 text-[#BE2325]" />
                      <span>{item.dietaryNote}</span>
                    </div>
                  </div>

                  {/* Bottom Row: Included in Plan + Round '+' button */}
                  <div className="pt-3 border-t border-[#E8E2D7] flex items-center justify-between">
                    <span className="font-display text-xs font-bold text-[#BE2325] uppercase tracking-wider">
                      Included in Plan
                    </span>

                    <button
                      type="button"
                      onClick={() => handleAskMenuWhatsApp(item.name)}
                      className="w-8 h-8 rounded-full border border-[#BE2325] text-[#BE2325] hover:bg-[#BE2325] hover:text-white flex items-center justify-center transition-colors shadow-xs"
                      title={`Enquire on WhatsApp about ${item.name}`}
                    >
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Menu Action */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#161616] hover:bg-[#BE2325] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>ENQUIRE FULL DISH LIST ON WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
}
