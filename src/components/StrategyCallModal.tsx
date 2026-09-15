import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle, ShieldCheck, ArrowRight, Building, BookOpen, MapPin, User, Phone, Mail } from 'lucide-react';
import { StrategyCallFormData } from '../types';
import confetti from 'canvas-confetti';

interface StrategyCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StrategyCallModal: React.FC<StrategyCallModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<StrategyCallFormData>({
    fullName: '',
    phone: '',
    email: '',
    instituteName: '',
    instituteType: 'Computer Training Institute',
    cityState: '',
    existingCourseName: '',
    currentMonthlyStudents: '15-30 Students',
    preferredDate: '',
    preferredTimeSlot: '11:00 AM - 12:00 PM (Morning)',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://calendly.com/scaleox-in/30min', '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const instituteTypes = [
    'Computer Training Institute',
    'IT & Coding Institute',
    'Accounting / Tally Institute',
    'Digital Skills & Marketing',
    'CAD & Design Institute',
    'Vocational / Skill Training Centre',
    'Other Coaching / Training Institute'
  ];

  const timeSlots = [
    '11:00 AM - 12:00 PM (Morning)',
    '02:00 PM - 03:00 PM (Afternoon)',
    '04:00 PM - 05:00 PM (Evening)',
    '07:00 PM - 08:00 PM (Late Evening)'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#FFFFFF] rounded-2xl border border-[#E2E0D8] shadow-2xl overflow-hidden my-8">
        {/* Header Ribbon */}
        <div className="bg-[#182A55] text-white p-6 md:p-8 relative">
          <button
            id="close-strategy-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#DDEFE9] uppercase tracking-wider bg-[#147D68] px-3 py-1 rounded-full mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>1:1 Strategy Discussion (30 Mins)</span>
          </div>
          <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
            क्या आपके Institute का Course Online ले जाना सही रहेगा?
          </h3>
          <p className="text-sm md:text-base text-[#E2E0D8] mt-2 font-normal">
            अपने Institute, Existing Course और current student reach के बारे में हमसे बात करें. हम देखेंगे कि आपके business के लिए online expansion practical है या नहीं.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#DDEFE9] text-[#147D68] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-[#182A55]">
                Strategy Discussion Request Received!
              </h4>
              <p className="text-[#5F6B72] text-sm md:text-base max-w-md mx-auto">
                Thank you <strong className="text-[#17202A]">{formData.fullName}</strong>. Our senior expansion strategist will review <strong className="text-[#17202A]">{formData.instituteName}</strong> and connect with you on WhatsApp/Phone at <strong className="text-[#17202A]">{formData.phone}</strong> for your selected slot ({formData.preferredTimeSlot}).
              </p>

              <div className="bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl p-4 text-left max-w-md mx-auto space-y-2 text-xs text-[#17202A]">
                <div><strong>Institute:</strong> {formData.instituteName} ({formData.cityState})</div>
                <div><strong>Existing Course:</strong> {formData.existingCourseName}</div>
                <div><strong>Slot:</strong> {formData.preferredDate || 'Upcoming Available Day'} • {formData.preferredTimeSlot}</div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919876543210?text=Hi%20ScaleOX%2C%20I%20just%20booked%20a%20strategy%20call%20for%20${encodeURIComponent(formData.instituteName)}%20(${encodeURIComponent(formData.existingCourseName)})`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-[#147D68] hover:bg-[#116956] text-white font-bold py-2.5 px-6 rounded-xl text-xs flex items-center justify-center gap-2"
                >
                  <span>Quick WhatsApp Confirmation</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto bg-[#F7F4EC] hover:bg-[#E2E0D8] text-[#182A55] font-semibold py-2.5 px-6 rounded-xl text-xs"
                >
                  Done & Return to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 ? (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-[#182A55] uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Step 1 of 2: Institute & Course Details</span>
                    <span className="text-[#147D68]">50% Completed</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#182A55] mb-1">
                        Institute Name *
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-[#5F6B72] absolute left-3 top-3" />
                        <input
                          id="strat-institute-name"
                          type="text"
                          required
                          placeholder="e.g. Apex Computer Academy"
                          value={formData.instituteName}
                          onChange={(e) => setFormData({ ...formData, instituteName: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#182A55] mb-1">
                        City & State *
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-[#5F6B72] absolute left-3 top-3" />
                        <input
                          id="strat-city-state"
                          type="text"
                          required
                          placeholder="e.g. Indore, Madhya Pradesh"
                          value={formData.cityState}
                          onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#182A55] mb-1">
                        Institute Category *
                      </label>
                      <select
                        id="strat-institute-type"
                        value={formData.instituteType}
                        onChange={(e) => setFormData({ ...formData, instituteType: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                      >
                        {instituteTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#182A55] mb-1">
                        Flagship Existing Course to Expand *
                      </label>
                      <div className="relative">
                        <BookOpen className="w-4 h-4 text-[#5F6B72] absolute left-3 top-3" />
                        <input
                          id="strat-course-name"
                          type="text"
                          required
                          placeholder="e.g. Advanced Excel / Tally Prime / Python"
                          value={formData.existingCourseName}
                          onChange={(e) => setFormData({ ...formData, existingCourseName: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#182A55] mb-1">
                      Current Monthly Offline Students Intake
                    </label>
                    <select
                      id="strat-current-students"
                      value={formData.currentMonthlyStudents}
                      onChange={(e) => setFormData({ ...formData, currentMonthlyStudents: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                    >
                      <option value="1-15 Students / month">1 - 15 Students / month</option>
                      <option value="15-30 Students / month">15 - 30 Students / month</option>
                      <option value="30-60 Students / month">30 - 60 Students / month</option>
                      <option value="60+ Students / month">60+ Students / month</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (!formData.instituteName || !formData.cityState || !formData.existingCourseName) {
                          alert('Please enter your Institute name, city, and course name.');
                          return;
                        }
                        setStep(2);
                      }}
                      className="w-full bg-[#182A55] hover:bg-[#0F1C3D] text-white font-bold py-3 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>Continue to Contact & Preferred Slot</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-[#182A55] uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Step 2 of 2: Contact & Preferred Slot</span>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs text-[#147D68] hover:underline font-semibold"
                    >
                      ← Back to Step 1
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#182A55] mb-1">
                        Your Full Name (Owner / Director) *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#5F6B72] absolute left-3 top-3" />
                        <input
                          id="strat-full-name"
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
                        WhatsApp / Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#5F6B72] absolute left-3 top-3" />
                        <input
                          id="strat-phone"
                          type="tel"
                          required
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                          id="strat-email"
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
                        Preferred Time Slot *
                      </label>
                      <div className="relative">
                        <select
                          id="strat-time-slot"
                          value={formData.preferredTimeSlot}
                          onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                          className="w-full px-3 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                        >
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#182A55] mb-1">
                      Anything specific you would like to discuss? (Optional)
                    </label>
                    <textarea
                      id="strat-notes"
                      rows={2}
                      placeholder="e.g. We have 2 batches of Tally running offline, want to know how live doubts work online."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      id="submit-strat-booking-btn"
                      type="submit"
                      className="w-full bg-[#147D68] hover:bg-[#116956] text-white font-extrabold py-3.5 px-6 rounded-xl text-sm transition-all cta-btn-shadow flex items-center justify-center gap-2 cursor-pointer cta-pulse-btn"
                    >
                      <span>BOOK MY 1:1 STRATEGY CALL</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#5F6B72] text-center pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#147D68]" />
                    <span>No sales pressure. A focused 30-minute feasibility review of your institute's course.</span>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
