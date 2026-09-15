import React, { useState } from 'react';
import { Calendar, Clock, Video, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, User, Phone, Mail, Building, HelpCircle } from 'lucide-react';
import { MasterclassFormData } from '../types';
import confetti from 'canvas-confetti';

interface MasterclassPageProps {
  onOpenStrategyCall: () => void;
}

export const MasterclassPage: React.FC<MasterclassPageProps> = ({ onOpenStrategyCall }) => {
  const [formData, setFormData] = useState<MasterclassFormData>({
    fullName: '',
    whatsappNumber: '',
    email: '',
    instituteName: '',
    instituteType: 'Computer Training Institute',
    city: '',
    selectedBatch: 'Upcoming Sunday • 11:00 AM IST'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
  };

  const learnBullets = [
    {
      title: '1. The 30–50 KM Barrier',
      desc: 'Why offline labs hit a natural student ceiling and why taking your existing syllabus online is the single cleanest expansion route.'
    },
    {
      title: '2. Packaging Your Existing Course',
      desc: 'How to structure your current whiteboard/lab lectures into a clear, outcome-focused online offer without creating a brand new curriculum.'
    },
    {
      title: '3. The 1-Page Course Presentation',
      desc: 'How to present your faculty, syllabus, practical exercises, and certification so distance students immediately feel high trust.'
    },
    {
      title: '4. Pan-India Student Acquisition',
      desc: 'How to connect with eager learners in tier-2/3 cities and neighboring states looking for high-quality skill training.'
    },
    {
      title: '5. Hybrid Classroom Delivery',
      desc: 'How to run live evening online cohorts on Google Meet / Zoom while keeping your physical classrooms running smoothly during the day.'
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-[#F7F4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Hero Banner */}
        <div className="bg-[#182A55] text-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#DDEFE9] uppercase tracking-wider bg-[#147D68] px-3.5 py-1 rounded-full">
              <Video className="w-3.5 h-3.5" />
              <span>Live Free Masterclass (75 Mins)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              अपने Existing Course को Online ले जाकर Local Area से बाहर Students तक कैसे पहुँचें?
            </h1>

            <p className="text-base sm:text-lg text-[#E2E0D8] leading-relaxed">
              इस free masterclass में समझिए कि एक offline education business अपने existing course को online offer में कैसे बदल सकता है और students तक कैसे पहुँच सकता है.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-[#E8C8B7] pt-2">
              <div className="flex items-center gap-2 font-semibold">
                <Calendar className="w-4 h-4 text-[#B8734A]" />
                <span>Upcoming Sunday</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Clock className="w-4 h-4 text-[#B8734A]" />
                <span>11:00 AM - 12:15 PM IST</span>
              </div>
              <div className="flex items-center gap-2 font-semibold text-[#DDEFE9]">
                <Sparkles className="w-4 h-4 text-[#147D68]" />
                <span>100% Free Live Online Workshop</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Columns: What You Will Learn (7 cols) vs Registration Form (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-bold text-[#147D68] uppercase tracking-wider">
                Session Agenda
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#182A55]">
                What We Will Cover in this Live Masterclass
              </h2>
              <p className="text-sm sm:text-base text-[#5F6B72]">
                Designed specifically for computer training, IT, digital skills, and vocational institute owners who have real teaching experience.
              </p>
            </div>

            <div className="space-y-4">
              {learnBullets.map((bullet, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-[#E2E0D8] shadow-2xs space-y-1.5">
                  <h3 className="text-base font-bold text-[#182A55]">
                    {bullet.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F6B72] leading-relaxed">
                    {bullet.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Strategy Call Callout */}
            <div className="bg-[#FAF8F3] border border-[#E2E0D8] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-bold text-[#182A55] uppercase tracking-wider">
                  Prefer a Private Discussion?
                </div>
                <div className="text-xs text-[#5F6B72]">
                  Book a 1:1 strategy call tailored directly to your institute's courses.
                </div>
              </div>
              <button
                onClick={onOpenStrategyCall}
                className="bg-[#182A55] hover:bg-[#0F1C3D] text-white font-bold py-2.5 px-5 rounded-xl text-xs flex items-center gap-2 cursor-pointer shrink-0 cta-btn-shadow cta-pulse-btn"
              >
                <span>Book 1:1 Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Registration Form (5 cols) */}
          <div className="lg:col-span-5 bg-white border-2 border-[#182A55]/20 rounded-3xl p-6 sm:p-8 shadow-md">
            {isSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-[#DDEFE9] text-[#147D68] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#182A55]">
                  Masterclass Seat Reserved!
                </h3>
                <p className="text-xs sm:text-sm text-[#5F6B72] max-w-sm mx-auto">
                  Thank you <strong>{formData.fullName}</strong>. We've sent the Zoom/Meet access link and calendar event for <strong>{formData.instituteName}</strong> to <strong>{formData.whatsappNumber}</strong>.
                </p>

                <div className="pt-3">
                  <a
                    href={`https://wa.me/919876543210?text=Hi%20ScaleOX%2C%20I%20registered%20for%20the%20Masterclass%20for%20${encodeURIComponent(formData.instituteName)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#147D68] hover:bg-[#116956] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2"
                  >
                    <span>Receive WhatsApp Access Link</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pb-2 border-b border-[#E2E0D8]">
                  <h3 className="text-lg font-bold text-[#182A55]">
                    Reserve Your Free Seat
                  </h3>
                  <p className="text-xs text-[#5F6B72]">
                    Free for verified institute owners and directors.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#182A55] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="mc-page-name"
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#182A55] mb-1">
                    WhatsApp Number (For Link & Reminders) *
                  </label>
                  <input
                    id="mc-page-phone"
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#182A55] mb-1">
                    Email Address *
                  </label>
                  <input
                    id="mc-page-email"
                    type="email"
                    required
                    placeholder="rajesh@institute.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#182A55] mb-1">
                      Institute City *
                    </label>
                    <input
                      id="mc-page-city"
                      type="text"
                      required
                      placeholder="e.g. Meerut / Indore"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#182A55] mb-1">
                      Institute Category *
                    </label>
                    <select
                      id="mc-page-type"
                      value={formData.instituteType}
                      onChange={(e) => setFormData({ ...formData, instituteType: e.target.value })}
                      className="w-full px-2.5 py-2.5 text-xs bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                    >
                      <option value="Computer Training Institute">Computer Training</option>
                      <option value="IT & Software">IT & Software</option>
                      <option value="Accounting & Tally">Tally / Accounts</option>
                      <option value="Digital Skills">Digital Skills</option>
                      <option value="CAD & Drafting">CAD & Drafting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#182A55] mb-1">
                    Institute Name *
                  </label>
                  <input
                    id="mc-page-institute"
                    type="text"
                    required
                    placeholder="e.g. Balaji IT Training Centre"
                    value={formData.instituteName}
                    onChange={(e) => setFormData({ ...formData, instituteName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                  />
                </div>

                <div className="pt-2">
                  <button
                    id="mc-page-submit-btn"
                    type="submit"
                    className="w-full bg-[#182A55] hover:bg-[#0F1C3D] text-white font-extrabold py-3.5 px-4 rounded-xl text-sm transition-all cta-btn-shadow cta-zoom-btn flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>RESERVE FREE SEAT</span>
                    <ArrowRight className="w-4 h-4 text-[#E8C8B7]" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1 text-[11px] text-[#5F6B72] text-center pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#147D68]" />
                  <span>No spam. 100% focused on offline-to-online course expansion.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
