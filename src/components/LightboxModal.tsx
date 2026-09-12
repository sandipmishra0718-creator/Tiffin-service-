import { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MessageSquare, ShieldCheck, Check } from 'lucide-react';
import { RealBusinessImage, REAL_BUSINESS_IMAGES } from '../data/realImages';

interface LightboxModalProps {
  image: RealBusinessImage | null;
  onClose: () => void;
  onSelectImage?: (image: RealBusinessImage) => void;
}

export default function LightboxModal({ image, onClose, onSelectImage }: LightboxModalProps) {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const currentIndex = image ? REAL_BUSINESS_IMAGES.findIndex(img => img.id === image.id) : -1;

  const handlePrev = useCallback(() => {
    if (!image || currentIndex === -1) return;
    if (currentIndex > 0) {
      onSelectImage?.(REAL_BUSINESS_IMAGES[currentIndex - 1]);
    } else {
      onSelectImage?.(REAL_BUSINESS_IMAGES[REAL_BUSINESS_IMAGES.length - 1]);
    }
  }, [image, currentIndex, onSelectImage]);

  const handleNext = useCallback(() => {
    if (!image || currentIndex === -1) return;
    if (currentIndex < REAL_BUSINESS_IMAGES.length - 1) {
      onSelectImage?.(REAL_BUSINESS_IMAGES[currentIndex + 1]);
    } else {
      onSelectImage?.(REAL_BUSINESS_IMAGES[0]);
    }
  }, [image, currentIndex, onSelectImage]);

  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image, onClose, handleNext, handlePrev]);

  useEffect(() => {
    setCandidateIndex(0);
    setHasError(false);
    setIsLoaded(false);
  }, [image?.id, image?.filename]);

  if (!image) return null;

  const urlCandidates: string[] = [
    `/images/${encodeURIComponent(image.filename)}`,
    `/images/${image.cleanFilename}`,
    `/images/${image.filename}`,
  ];

  const handleImageError = () => {
    if (candidateIndex + 1 < urlCandidates.length) {
      setCandidateIndex(prev => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const handleEnquireThisImage = () => {
    const text = `Hello The Tiffin Service (PDSB Enterprise), I saw your photo "${image.title}" (${image.categoryLabel}) on your website. I want to enquire about this dish/plan for South Extension.`;
    window.open(`https://wa.me/919560339117?text=${encodeURIComponent(text)}`, '_blank');
  };

  const currentSrc = urlCandidates[candidateIndex] || `/images/${image.filename}`;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-[#161616] text-white rounded-3xl overflow-hidden border border-[#333333] shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#262626] bg-[#1E1E1E]">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-full bg-[#BE2325] text-white text-[10px] font-extrabold uppercase tracking-wider">
              {image.categoryLabel}
            </span>
            <span className="text-xs text-[#8E877D] font-mono">
              Photo {currentIndex + 1} of {REAL_BUSINESS_IMAGES.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#2A2A2A] hover:bg-[#BE2325] text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center Image View Area */}
        <div className="relative flex-1 bg-[#0D0D0D] flex items-center justify-center min-h-[300px] sm:min-h-[420px] p-4 overflow-hidden">
          {/* Real image with error fallback */}
          {!hasError && (
            <img
              key={currentSrc}
              src={currentSrc}
              alt={image.title}
              className={`max-h-[60vh] max-w-full object-contain rounded-xl shadow-lg transition-opacity duration-300 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsLoaded(true)}
              onError={handleImageError}
            />
          )}

          {/* High-Definition Real Card Fallback when file is pending upload */}
          {(hasError || !isLoaded) && (
            <div className={`text-center p-8 max-w-md bg-[#1F1D1A] rounded-2xl border border-[#3D3A35] shadow-xl ${
              isLoaded ? 'hidden' : 'block'
            }`}>
              <div className="w-16 h-16 rounded-full bg-[#BE2325]/20 text-[#BE2325] flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2A2621] border border-[#4D453A] text-[#FF4C50] text-xs font-bold uppercase tracking-wider mb-2">
                <Check className="w-3.5 h-3.5" />
                <span>Verified Real Business Asset</span>
              </div>
              <h3 className="font-display font-bold text-xl uppercase text-white tracking-tight">{image.title}</h3>
              <p className="text-xs text-[#B3AEA6] mt-2 leading-relaxed">{image.description}</p>
              
              <div className="mt-4 pt-4 border-t border-[#333333] flex flex-col gap-1 text-[11px] font-mono text-[#8C8274]">
                <div className="flex justify-between items-center">
                  <span>File Name:</span>
                  <span className="text-white font-bold truncate max-w-[200px]">{image.filename}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Placement:</span>
                  <span className="text-[#FF4C50] font-bold">{image.sectionAssignment}</span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#BE2325] text-white flex items-center justify-center transition-colors border border-white/20 shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#BE2325] text-white flex items-center justify-center transition-colors border border-white/20 shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Details Bar */}
        <div className="p-5 sm:p-6 bg-[#161616] border-t border-[#262626]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display font-bold text-lg sm:text-xl uppercase tracking-tight text-white">
                  {image.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#A89F91] max-w-2xl leading-relaxed">
                {image.description}
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className="text-[10px] uppercase font-bold text-[#8C8274]">Section:</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#262626] text-[#E0DDD8] border border-[#383838]">
                  {image.sectionAssignment}
                </span>
                {image.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-[#1F1F1F] text-[#8C8274]">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <button
                type="button"
                onClick={handleEnquireThisImage}
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#BE2325] hover:bg-[#9F191B] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire This Dish / Plan</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
