import { useState } from 'react';
import { Camera, X, Maximize2, Sparkles, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/businessData';
import { GalleryItem } from '../types';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'food', label: 'Food' },
    { id: 'tiffin', label: 'Tiffin' },
    { id: 'kitchen', label: 'Kitchen / Preparation' },
    { id: 'packaging', label: 'Packaging' },
    { id: 'service', label: 'Service' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white border-y border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2ECE1] border border-[#E0D7CA] text-[#163B2B] text-xs font-bold uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5 text-[#E26D2D]" />
            <span>VISUAL SHOWCASE</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F251B] mb-4 tracking-tight">
            Our Kitchen & Service Gallery
          </h2>

          <p className="text-xs sm:text-sm text-[#545E53] max-w-2xl mx-auto leading-relaxed">
            A glimpse into our food preparation, authentic multi-tier tiffin packaging, and daily service operations in South Extension I.
          </p>

          <p className="text-[11px] text-[#7D887C] mt-2 italic">
            * Curated representative gallery. Real service and kitchen photographs can be directly uploaded by the client.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? 'bg-[#163B2B] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#4F594E] border border-[#E7E0D3] hover:border-[#D0C5B3] hover:text-[#0F251B]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#EFEAE2] border border-[#E7E0D3] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer aspect-4/3"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-3.5 left-3.5">
                <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[#0F251B] text-[10px] font-bold uppercase tracking-wider shadow-xs">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif-display text-base font-bold leading-snug group-hover:text-[#FFA066] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-white/80 line-clamp-2 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0F251B] rounded-3xl overflow-hidden border border-[#234D3A] shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#E26D2D] transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-16/10 sm:aspect-16/9 bg-black overflow-hidden flex items-center justify-center">
              <img
                src={activeLightboxItem.imageUrl}
                alt={activeLightboxItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#143526]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFA066] block mb-1">
                  {activeLightboxItem.categoryLabel}
                </span>
                <h3 className="font-serif-display text-xl font-bold">
                  {activeLightboxItem.title}
                </h3>
                <p className="text-xs text-white/70 mt-1 max-w-xl">
                  {activeLightboxItem.caption}
                </p>
              </div>

              <a
                href="#contact"
                onClick={() => setActiveLightboxItem(null)}
                className="px-5 py-2.5 rounded-xl bg-[#E26D2D] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#CF5F21] transition-colors shrink-0"
              >
                Enquire Service
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
