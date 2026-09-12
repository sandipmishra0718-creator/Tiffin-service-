import { useState, useEffect } from 'react';
import { Camera, Maximize2, Check } from 'lucide-react';
import { RealBusinessImage, REAL_IMAGES_BY_ID, REAL_IMAGES_BY_FILENAME } from '../data/realImages';

interface RealImageProps {
  image?: RealBusinessImage;
  imageId?: string;
  filename?: string;
  className?: string;
  aspectRatio?: '4/3' | 'square' | '16/9' | '3/2' | '4/5' | 'auto';
  showBadge?: boolean;
  showCaption?: boolean;
  allowZoom?: boolean;
  onZoom?: (image: RealBusinessImage) => void;
  priority?: boolean;
}

export default function RealImage({
  image: directImage,
  imageId,
  filename,
  className = '',
  aspectRatio = '4/3',
  showBadge = true,
  showCaption = false,
  allowZoom = true,
  onZoom,
}: RealImageProps) {
  // Resolve image object
  const image: RealBusinessImage | undefined = 
    directImage || 
    (imageId ? REAL_IMAGES_BY_ID[imageId] : undefined) ||
    (filename ? REAL_IMAGES_BY_FILENAME[filename] : undefined);

  if (!image) {
    return null;
  }

  // Create list of possible URL candidates to handle any folder or character-encoding difference
  const urlCandidates: string[] = [
    `/images/${encodeURIComponent(image.filename)}`,
    `/images/${image.cleanFilename}`,
    `/images/${image.filename}`,
  ];

  const [candidateIndex, setCandidateIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset states if image changes
  useEffect(() => {
    setCandidateIndex(0);
    setHasError(false);
    setIsLoaded(false);
  }, [image.id, image.filename]);

  const aspectClass = {
    '4/3': 'aspect-4/3',
    'square': 'aspect-square',
    '16/9': 'aspect-video',
    '3/2': 'aspect-3/2',
    '4/5': 'aspect-4/5',
    'auto': '',
  }[aspectRatio] || 'aspect-4/3';

  const handleClick = () => {
    if (allowZoom && onZoom) {
      onZoom(image);
    }
  };

  const handleImageError = () => {
    if (candidateIndex + 1 < urlCandidates.length) {
      setCandidateIndex(prev => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const currentSrc = urlCandidates[candidateIndex];

  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl bg-[#F4EDE2] border border-[#E8E2D7] ${aspectClass} ${className} select-none`}
      onClick={handleClick}
      role={allowZoom && onZoom ? 'button' : undefined}
      tabIndex={allowZoom && onZoom ? 0 : undefined}
      title={`${image.title} • ${image.categoryLabel}`}
    >
      {/* Real Image Element */}
      {!hasError && (
        <img
          key={currentSrc}
          src={currentSrc}
          alt={image.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={handleImageError}
        />
      )}

      {/* Graceful High-Definition Real Asset Card if image file is loading or not yet mounted */}
      {(hasError || !isLoaded) && (
        <div className={`absolute inset-0 flex flex-col items-center justify-between p-4 sm:p-5 text-center transition-opacity duration-300 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
          {/* Subtle patterned texture background */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#8C7D6B 1.2px, transparent 1.2px)',
              backgroundSize: '14px 14px',
            }}
          />

          {/* Top Bar inside card */}
          <div className="w-full flex items-center justify-between z-10">
            <span className="px-2 py-0.5 rounded-md bg-[#161616] text-white text-[9px] font-extrabold uppercase tracking-widest shadow-2xs">
              {image.categoryLabel}
            </span>

            <span className="flex items-center gap-1 text-[9px] font-bold text-[#BE2325] bg-white/90 border border-[#E0D7C8] px-2 py-0.5 rounded-full shadow-2xs">
              <Check className="w-2.5 h-2.5" />
              <span>Real Photo</span>
            </span>
          </div>

          {/* Center visual composition */}
          <div className="my-auto z-10 flex flex-col items-center justify-center max-w-[240px]">
            <div 
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-xs border border-[#D5CABB] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform"
              style={{ color: image.themeColor }}
            >
              <Camera className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>

            <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-tight text-[#161616] line-clamp-2 leading-tight">
              {image.title}
            </h4>

            <p className="text-[10px] text-[#6A6256] mt-1 line-clamp-2 leading-snug font-medium">
              {image.description}
            </p>
          </div>

          {/* Bottom tag */}
          <div className="w-full z-10 flex items-center justify-between text-[9px] font-mono text-[#8C8274] pt-1.5 border-t border-[#E5DDD1]">
            <span className="truncate max-w-[130px]">{image.filename}</span>
            <span className="font-bold text-[#BE2325] uppercase tracking-wider">{image.sectionAssignment}</span>
          </div>
        </div>
      )}

      {/* Top Floating Badge (When Loaded) */}
      {showBadge && isLoaded && (
        <div className="absolute top-3 left-3 z-20 pointer-events-none">
          <span className="px-2.5 py-1 rounded-md bg-[#161616]/90 backdrop-blur-xs text-white text-[9px] font-extrabold uppercase tracking-widest shadow-xs">
            {image.categoryLabel}
          </span>
        </div>
      )}

      {/* Hover Zoom Icon overlay */}
      {allowZoom && (
        <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs text-[#161616] hover:text-[#BE2325] flex items-center justify-center shadow-md">
            <Maximize2 className="w-4 h-4" />
          </div>
        </div>
      )}

      {/* Bottom Caption Overlay */}
      {showCaption && (
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white z-20">
          <p className="font-display text-xs font-bold uppercase tracking-wide truncate">{image.title}</p>
          <p className="text-[10px] text-[#E0DDD8] truncate">{image.description}</p>
        </div>
      )}
    </div>
  );
}
