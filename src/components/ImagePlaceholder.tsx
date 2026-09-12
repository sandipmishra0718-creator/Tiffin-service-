import { Camera, Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  aspectRatio?: string;
  badge?: string;
  badgeColor?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  minHeight?: string;
}

export default function ImagePlaceholder({
  aspectRatio = 'aspect-4/3',
  badge,
  badgeColor = 'bg-[#BE2325]',
  title = 'REAL BUSINESS PHOTO',
  subtitle = 'Upload / place real image here',
  className = '',
  minHeight = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5EFE6] via-[#EFE8DC] to-[#E8E0D2] border border-[#DDD3C2] flex flex-col items-center justify-center p-4 text-center select-none group transition-all duration-300 ${aspectRatio} ${minHeight} ${className}`}
    >
      {/* Subtle grid pattern texture */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#9C907E 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* Top Badge (if provided, matching reference's BEST SELLER / SPICY HIT style) */}
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`${badgeColor} text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs inline-block`}
          >
            {badge}
          </span>
        </div>
      )}

      {/* Center Graphic & Label */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-[85%]">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/80 border border-[#D5CABB] shadow-xs flex items-center justify-center text-[#BE2325] mb-2 group-hover:scale-105 transition-transform">
          <Camera className="w-5 h-5 text-[#BE2325]" />
        </div>
        <span className="font-display uppercase text-xs sm:text-sm font-bold tracking-wider text-[#2D2823] block leading-tight">
          {title}
        </span>
        <span className="text-[10px] sm:text-[11px] text-[#7A7165] font-medium mt-0.5 leading-snug">
          {subtitle}
        </span>
      </div>

      {/* Corner crop mark indicators for architectural agency look */}
      <div className="absolute bottom-2 right-2 flex items-center gap-1 opacity-60 text-[9px] font-mono text-[#8C8274]">
        <ImageIcon className="w-3 h-3" />
        <span>PLACEHOLDER</span>
      </div>
    </div>
  );
}
