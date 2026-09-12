import { useState, MouseEvent } from 'react';
import { Camera, Sparkles, Filter, MessageSquare, Maximize2 } from 'lucide-react';
import { REAL_BUSINESS_IMAGES, RealBusinessImage } from '../data/realImages';
import { BUSINESS_INFO } from '../data/businessData';
import RealImage from './RealImage';

interface GallerySectionProps {
  onZoomImage?: (image: RealBusinessImage) => void;
}

export default function GallerySection({ onZoomImage }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos', count: REAL_BUSINESS_IMAGES.length },
    { id: 'food', label: 'Meals & Dishes', count: REAL_BUSINESS_IMAGES.filter(i => i.category === 'food').length },
    { id: 'packaging', label: 'Tiffins & Packaging', count: REAL_BUSINESS_IMAGES.filter(i => i.category === 'packaging').length },
    { id: 'brand', label: 'Kitchen & Setup', count: REAL_BUSINESS_IMAGES.filter(i => i.category === 'brand').length },
    { id: 'delivery', label: 'Delivery & Dispatch', count: REAL_BUSINESS_IMAGES.filter(i => i.category === 'delivery').length },
  ];

  const filteredImages = activeCategory === 'all'
    ? REAL_BUSINESS_IMAGES
    : REAL_BUSINESS_IMAGES.filter(item => item.category === activeCategory);

  const handleEnquireImage = (image: RealBusinessImage, e: MouseEvent) => {
    e.stopPropagation();
    const text = `Hello The Tiffin Service (PDSB Enterprise), I am enquiring about "${image.title}" (${image.categoryLabel}) shown in your gallery.`;
    window.open(`https://wa.me/919560339117?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#FAF8F5] border-y border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-[#BE2325] text-lg font-bold">→</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#161616]">
              VISUAL GALLERY
            </h2>
            <span className="text-[#BE2325] text-lg font-bold">←</span>
          </div>

          <p className="font-display uppercase text-xs sm:text-sm font-semibold tracking-wider text-[#BE2325] mb-2">
            Real Photos From Our South Delhi Kitchen &amp; Tiffins
          </p>

          <p className="text-xs sm:text-sm text-[#5E584E] max-w-xl mx-auto leading-relaxed">
            Everyday authentic meals, stainless steel tiffins, spotlessly clean kitchen, and punctual dispatch across South Extension I.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-[11px] text-[#6B6357] bg-white border border-[#E0DCD4] px-4 py-1.5 rounded-full shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#BE2325]" />
            <span>22 Verified Business Photos • Click any image to view in high resolution</span>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#BE2325] text-white shadow-xs'
                    : 'bg-white text-[#3D3A35] border border-[#E0DCD4] hover:border-[#BE2325]/50 hover:text-[#BE2325]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-[#F0EBE1] text-[#7A7165]'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Real Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => onZoomImage?.(image)}
              className="group cursor-pointer rounded-3xl bg-white border border-[#E8E2D7] shadow-xs hover:shadow-xl hover:border-[#D5CABB] transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Area */}
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <RealImage
                  image={image}
                  aspectRatio="4/3"
                  className="w-full h-full rounded-none border-none"
                  showBadge={true}
                  allowZoom={true}
                  onZoom={onZoomImage}
                />

                {/* Quick WhatsApp pill on hover */}
                <button
                  type="button"
                  onClick={(e) => handleEnquireImage(image, e)}
                  className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity z-20 px-2.5 py-1 rounded-full bg-[#161616]/90 hover:bg-[#BE2325] text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md"
                  title="Enquire on WhatsApp"
                >
                  <MessageSquare className="w-3 h-3 text-[#25D366]" />
                  <span>Enquire</span>
                </button>
              </div>

              {/* Card Details */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#8C8377] mb-1">
                    <span className="uppercase font-bold text-[#BE2325]">{image.categoryLabel}</span>
                    <span className="truncate max-w-[110px]">{image.sectionAssignment}</span>
                  </div>

                  <h3 className="font-display text-sm font-bold uppercase tracking-tight text-[#161616] mb-1 line-clamp-1">
                    {image.title}
                  </h3>

                  <p className="text-xs text-[#5E584E] leading-relaxed line-clamp-2">
                    {image.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#F0EBE1] flex items-center justify-between text-[11px]">
                  <span className="text-[#8A8175] flex items-center gap-1">
                    <Maximize2 className="w-3 h-3 text-[#BE2325]" />
                    <span>Click to expand</span>
                  </span>
                  <span className="font-bold text-[#BE2325] hover:underline">
                    View &amp; Enquire →
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Gallery Action */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#161616] hover:bg-[#BE2325] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>ENQUIRE ABOUT CUSTOM CATERING ON WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
}
