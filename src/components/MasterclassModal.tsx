import React, { useState } from 'react';
import { X, Calendar, Clock, Video, CheckCircle, ShieldCheck, ArrowRight, User, Phone, Mail, Building, Sparkles } from 'lucide-react';
import { MasterclassFormData } from '../types';
import confetti from 'canvas-confetti';

interface MasterclassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MasterclassModal: React.FC<MasterclassModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<MasterclassFormData>({
    fullName: '',
    whatsappNumber: '',
    email: '',
    instituteName: '',
    instituteType: 'Computer Training Institute',
    city: '',
    selectedBatch: 'Upcoming Sunday • 11:00 AM IST (Live on Zoom/Meet)'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#FFFFFF] rounded-2xl border border-[#E2E0D8] shadow-2xl overflow-hidden my-8">
        {/* Header Banner */}
        <div className="bg-[#182A55] text-white p-6 md:p-8 relative">
          <button
            id="close-masterclass-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#DDEFE9] uppercase tracking-wider bg-[#147D68] px-3 py-1 rounded-full mb-3">
            <Video className="w-3.5 h-3.5" />
            <span>Free 75-Min Practical Masterclass For Institute Owners</span>
          </div>

          <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
            अपने Existing Course को Online ले जाकर Local Area से बाहर Students तक कैसे पहुँचें?
          </h3>

          <p className="text-sm md:text-base text-[#E2E0D8] mt-2 font-normal">
            इस free masterclass में समझिए कि एक offline education business अपने existing course को online offer में कैसे बदल सकता है और students तक कैसे पहुँच सकता है.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-[#E8C8B7]">
            <div className="flex items-center gap-1.5 font-semibold">
              <Calendar className="w-4 h-4 text-[#B8734A]" />
              <span>Upcoming Sunday</span>
            </div>
            <div className="flex items-center gap-1.5 font-semibold">
              <Clock className="w-4 h-4 text-[#B8734A]" />
              <span>11:00 AM - 12:15 PM IST</span>
            </div>
            <div className="flex items-center gap-1.5 font-semibold text-[#DDEFE9]">
              <Sparkles className="w-4 h-4 text-[#147D68]" />
              <span>100% Free Live Session</span>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#DDEFE9] text-[#147D68] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-[#182A55]">
                Masterclass Seat Confirmed!
              </h4>
              <p className="text-[#5F6B72] text-sm md:text-base max-w-md mx-auto">
                Congratulations <strong className="text-[#17202A]">{formData.fullName}</strong>! We have reserved your seat for <strong className="text-[#17202A]">{formData.instituteName}</strong>. Meeting link & calendar invitation have been dispatched to <strong className="text-[#17202A]">{formData.whatsappNumber}</strong> on WhatsApp.
              </p>

              <div className="bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl p-4 text-left max-w-md mx-auto space-y-2 text-xs text-[#17202A]">
                <div><strong>Attendee:</strong> {formData.fullName} ({formData.instituteName}, {formData.city})</div>
                <div><strong>Session:</strong> Live Online Course Expansion Masterclass</div>
                <div><strong>Schedule:</strong> Upcoming Sunday • 11:00 AM IST (Live via Google Meet/Zoom)</div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919876543210?text=Hi%20ScaleOX%2C%20I%20registered%20for%20the%20Free%20Masterclass%20for%20${encodeURIComponent(formData.instituteName)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-[#147D68] hover:bg-[#116956] text-white font-bold py-2.5 px-6 rounded-xl text-xs flex items-center justify-center gap-2"
                >
                  <span>Receive Reminder on WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto bg-[#F7F4EC] hover:bg-[#E2E0D8] text-[#182A55] font-semibold py-2.5 px-6 rounded-xl text-xs"
                >
                  Done & Back to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#182A55] mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#5F6B72] absolute left-3 top-3" />
                    <input
                      id="mc-full-name"
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#182A55] mb-1">
                    WhatsApp Number (For Link & Reminders) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#5F6B72] absolute left-3 top-3" />
                    <input
                      id="mc-phone"
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#182A55] mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#5F6B72] absolute left-3 top-3" />
                    <input
                      id="mc-email"
                      type="email"
                      required
                      placeholder="rajesh@institute.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#182A55] mb-1">
                    Institute City *
                  </label>
                  <input
                    id="mc-city"
                    type="text"
                    required
                    placeholder="e.g. Meerut / Indore / Patna"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#182A55] mb-1">
                    Institute Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-[#5F6B72] absolute left-3 top-3" />
                    <input
                      id="mc-institute-name"
                      type="text"
                      required
                      placeholder="e.g. Balaji IT Training Centre"
                      value={formData.instituteName}
                      onChange={(e) => setFormData({ ...formData, instituteName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#182A55] mb-1">
                    Institute Category *
                  </label>
                  <select
                    id="mc-type"
                    value={formData.instituteType}
                    onChange={(e) => setFormData({ ...formData, instituteType: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                  >
                    <option value="Computer Training Institute">Computer Training Institute</option>
                    <option value="IT & Software Training">IT & Software Training</option>
                    <option value="Accounting & Tally">Accounting & Tally Institute</option>
                    <option value="Digital Skills">Digital Skills & Design</option>
                    <option value="CAD & Drafting">CAD & Engineering Drafting</option>
                    <option value="Vocational Skills">Vocational & Other Skills</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="submit-masterclass-rsvp-btn"
                  type="submit"
                  className="w-full bg-[#182A55] hover:bg-[#0F1C3D] text-white font-extrabold py-3.5 px-6 rounded-xl text-sm transition-all cta-btn-shadow cta-zoom-btn flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>RESERVE FREE SEAT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#5F6B72] text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#147D68]" />
                <span>Zero fluff. Tailored specifically for established education business owners.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
