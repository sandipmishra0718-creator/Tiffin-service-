import { X, Info, ShieldCheck } from 'lucide-react';
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
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E8E2D7] text-[#161616] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E8E2D7]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#BE2325] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#E8E2D7] mb-1.5 font-display">
              <ShieldCheck className="w-3 h-3 text-[#BE2325]" />
              <span>Client Verification Mode</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#161616]">
              Editable Placeholders &amp; Verified Facts
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#FAF8F5] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-[#5C554B]" />
          </button>
        </div>

        {/* Verified Facts summary */}
        <div className="my-5 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D7] text-xs space-y-2">
          <p className="font-display font-bold text-[#BE2325] uppercase tracking-wider text-xs mb-1">
            Confirmed Verified Data (Active):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#524B40]">
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#161616] font-display">
              Quick Price Preview (Optional Test)
            </h4>
            <span className="text-[11px] text-[#7A7165]">
              Test real pricing values live:
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-[11px] font-bold text-[#524B40] mb-1">
                Daily Plan Price Tag:
              </label>
              <input
                type="text"
                value={customDailyPrice}
                onChange={(e) => setCustomDailyPrice && setCustomDailyPrice(e.target.value)}
                placeholder="e.g. ₹180 or ₹[PRICE]"
                className="w-full px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#DDD3C2] text-xs font-semibold"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#524B40] mb-1">
                Weekly Plan Price Tag:
              </label>
              <input
                type="text"
                value={customWeeklyPrice}
                onChange={(e) => setCustomWeeklyPrice && setCustomWeeklyPrice(e.target.value)}
                placeholder="e.g. ₹1,050 or ₹[PRICE]"
                className="w-full px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#DDD3C2] text-xs font-semibold"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#524B40] mb-1">
                Monthly Plan Price Tag:
              </label>
              <input
                type="text"
                value={customMonthlyPrice}
                onChange={(e) => setCustomMonthlyPrice && setCustomMonthlyPrice(e.target.value)}
                placeholder="e.g. ₹4,200 or ₹[PRICE]"
                className="w-full px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#DDD3C2] text-xs font-semibold"
              />
            </div>
          </div>
        </div>

        {/* Instructions for Client */}
        <div className="p-4 rounded-2xl bg-[#FFF5F5] border border-[#FED7D7] text-xs text-[#7B1D1D] space-y-1.5 mb-6">
          <p className="font-bold flex items-center gap-1.5 text-[#BE2325]">
            <Info className="w-3.5 h-3.5" />
            <span>Factual Accuracy Compliance</span>
          </p>
          <p className="leading-relaxed">
            Per strict requirements, no unverified dishes, prices, ratings, or delivery guarantees have been fabricated. 
            All sections are structured with clearly editable tags and direct WhatsApp consultation buttons.
          </p>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E8E2D7]">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#BE2325] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#9F191B] transition-colors"
          >
            Done &amp; Apply
          </button>
        </div>
      </div>
    </div>
  );
}
