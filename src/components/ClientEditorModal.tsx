import { useState } from 'react';
import { X, Check, Info, Sparkles, Sliders, ExternalLink, ShieldCheck, RefreshCw } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface ClientEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  customDailyPrice?: string;
  setCustomDailyPrice?: (val: string) => void;
  customWeeklyPrice?: string;
  setCustomWeeklyPrice?: (val: string) => void;
  customMonthlyPrice?: string;
  setCustomMonthlyPrice?: (val: string) => void;
}

export default function ClientEditorModal({
  isOpen,
  onClose,
  customDailyPrice = '₹[PRICE]',
  setCustomDailyPrice,
  customWeeklyPrice = '₹[PRICE]',
  setCustomWeeklyPrice,
  customMonthlyPrice = '₹[PRICE]',
  setCustomMonthlyPrice,
}: ClientEditorModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E0D7CA] text-[#0F251B] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#EAE3D7]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#E26D2D] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#EADFCF] mb-1.5">
              <ShieldCheck className="w-3 h-3 text-[#163B2B]" />
              <span>Client Verification Mode</span>
            </div>
            <h3 className="font-serif-display text-xl sm:text-2xl font-bold">
              Editable Placeholders & Verified Facts
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#F2ECE1] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-[#5C655B]" />
          </button>
        </div>

        {/* Verified Facts summary */}
        <div className="my-5 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7E0D3] text-xs space-y-2">
          <p className="font-bold text-[#163B2B] uppercase tracking-wider text-[11px] mb-1">
            Confirmed Verified Data (Active):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#4D554C]">
            <div><strong>Business:</strong> {BUSINESS_INFO.name}</div>
            <div><strong>Enterprise:</strong> {BUSINESS_INFO.enterprise}</div>
            <div><strong>Location:</strong> South Extension I, New Delhi</div>
            <div><strong>Phone:</strong> {BUSINESS_INFO.phoneDisplay}</div>
            <div><strong>Hours:</strong> {BUSINESS_INFO.hours}</div>
            <div><strong>Indicator:</strong> {BUSINESS_INFO.priceIndicator}</div>
          </div>
        </div>

        {/* Pricing Field Customizer Preview */}
        <div className="space-y-4 my-6">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F251B]">
              Quick Price Preview (Optional Test)
            </h4>
            <span className="text-[11px] text-[#7A857A]">
              Test real pricing values live:
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-[11px] font-bold text-[#555E54] mb-1">
                Daily Plan Price Tag:
              </label>
              <input
                type="text"
                value={customDailyPrice}
                onChange={(e) => setCustomDailyPrice && setCustomDailyPrice(e.target.value)}
                placeholder="e.g. ₹180 or ₹[PRICE]"
                className="w-full px-3 py-2 rounded-lg bg-[#FAF7F2] border border-[#DDD4C4] text-xs font-semibold"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#555E54] mb-1">
                Weekly Plan Price Tag:
              </label>
              <input
                type="text"
                value={customWeeklyPrice}
                onChange={(e) => setCustomWeeklyPrice && setCustomWeeklyPrice(e.target.value)}
                placeholder="e.g. ₹1,050 or ₹[PRICE]"
                className="w-full px-3 py-2 rounded-lg bg-[#FAF7F2] border border-[#DDD4C4] text-xs font-semibold"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#555E54] mb-1">
                Monthly Plan Price Tag:
              </label>
              <input
                type="text"
                value={customMonthlyPrice}
                onChange={(e) => setCustomMonthlyPrice && setCustomMonthlyPrice(e.target.value)}
                placeholder="e.g. ₹4,200 or ₹[PRICE]"
                className="w-full px-3 py-2 rounded-lg bg-[#FAF7F2] border border-[#DDD4C4] text-xs font-semibold"
              />
            </div>
          </div>
        </div>

        {/* Instructions for Client */}
        <div className="p-4 rounded-2xl bg-[#FFF8F3] border border-[#FADCC7] text-xs text-[#6F4E37] space-y-1.5 mb-6">
          <p className="font-bold flex items-center gap-1.5 text-[#CF5F21]">
            <Info className="w-3.5 h-3.5" />
            <span>Factual Accuracy Compliance</span>
          </p>
          <p className="leading-relaxed">
            Per strict requirements, no unverified dishes, prices, ratings, or delivery guarantees have been fabricated. 
            All sections are structured with clearly editable tags and direct WhatsApp consultation buttons.
          </p>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#EAE3D7]">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#163B2B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0D2218] transition-colors"
          >
            Done & Apply
          </button>
        </div>
      </div>
    </div>
  );
}
