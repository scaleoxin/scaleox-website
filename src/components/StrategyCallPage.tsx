import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, ShieldCheck, ArrowRight, Building, BookOpen, MapPin, User, Phone, Mail, Sparkles, MessageSquare } from 'lucide-react';
import { StrategyCallFormData } from '../types';
import confetti from 'canvas-confetti';

interface StrategyCallPageProps {
  onOpenMasterclass: () => void;
}

export const StrategyCallPage: React.FC<StrategyCallPageProps> = ({ onOpenMasterclass }) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://calendly.com/scaleox-in/30min', '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
    try {
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
  };

  const callAgendas = [
    {
      title: '1. Existing Course Feasibility Check',
      desc: 'We review your offline curriculum, practical lab exercises, and software requirements to verify how smoothly it translates into live online sessions.'
    },
    {
      title: '2. Geographical Admission Bottlenecks',
      desc: 'We examine your current 7-15 km local student capture and calculate realistic pan-India student reach for your skill category.'
    },
    {
      title: '3. Offer Packaging & Pricing Strategy',
      desc: 'How to price and package your course so students across other states see instant value and clear job/skill outcomes.'
    },
    {
      title: '4. Step-by-Step Implementation Roadmap',
      desc: 'A clear choice between DIY execution (using our templates) or our Done-For-You setup partnership.'
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-[#F7F4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className="bg-[#182A55] text-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#DDEFE9] uppercase tracking-wider bg-[#147D68] px-3.5 py-1 rounded-full">
              <Calendar className="w-3.5 h-3.5" />
              <span>1:1 Private Strategy Discussion (30 Mins)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              क्या आपके Institute का Course Online ले जाना सही रहेगा?
            </h1>

            <p className="text-base sm:text-lg text-[#E2E0D8] leading-relaxed">
              अपने Institute, Existing Course और current student reach के बारे में हमसे बात करें. हम देखेंगे कि आपके business के लिए online expansion practical है या नहीं.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[#E8C8B7] pt-2">
              <div className="flex items-center gap-1.5 font-semibold">
                <Clock className="w-4 h-4 text-[#B8734A]" />
                <span>30-Minute Focused Session</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-[#DDEFE9]">
                <ShieldCheck className="w-4 h-4 text-[#147D68]" />
                <span>100% Honest Advice • No Sales Push</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Columns: Agenda (7 cols) vs Booking Form (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-bold text-[#147D68] uppercase tracking-wider">
                What We Will Discuss
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#182A55]">
                A Structured 30-Minute Online Feasibility Review
              </h2>
              <p className="text-sm sm:text-base text-[#5F6B72]">
                This is NOT a high-pressure sales pitch. It is an honest, strategic examination of whether your offline course can successfully attract outstation students.
              </p>
            </div>

            <div className="space-y-4">
              {callAgendas.map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-[#E2E0D8] shadow-2xs space-y-1.5">
                  <h3 className="text-base font-bold text-[#182A55]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F6B72] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Masterclass alternative */}
            <div className="bg-[#FAF8F3] border border-[#E2E0D8] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-bold text-[#182A55] uppercase tracking-wider">
                  Want to learn the core principles first?
                </div>
                <div className="text-xs text-[#5F6B72]">
                  Join our Free 75-minute Sunday Masterclass with fellow institute owners.
                </div>
              </div>
              <button
                onClick={onOpenMasterclass}
                className="bg-[#147D68] hover:bg-[#116956] text-white font-bold py-2.5 px-5 rounded-xl text-xs flex items-center gap-2 cursor-pointer shrink-0"
              >
                <span>Join Masterclass</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Booking Form (5 cols) */}
          <div className="lg:col-span-5 bg-white border-2 border-[#182A55]/20 rounded-3xl p-6 sm:p-8 shadow-md">
            {isSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-[#DDEFE9] text-[#147D68] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#182A55]">
                  Strategy Call Scheduled!
                </h3>
                <p className="text-xs sm:text-sm text-[#5F6B72] max-w-sm mx-auto">
                  Thank you <strong>{formData.fullName}</strong>. We've logged your request for <strong>{formData.instituteName}</strong>. Our expansion strategist will reach out on WhatsApp/Phone at <strong>{formData.phone}</strong> for your selected slot ({formData.preferredTimeSlot}).
                </p>

                <div className="pt-3">
                  <a
                    href={`https://wa.me/919876543210?text=Hi%20ScaleOX%2C%20I%20scheduled%20a%20strategy%20discussion%20for%20${encodeURIComponent(formData.instituteName)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#147D68] hover:bg-[#116956] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2"
                  >
                    <span>Instant WhatsApp Confirmation</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pb-2 border-b border-[#E2E0D8]">
                  <h3 className="text-lg font-bold text-[#182A55]">
                    Book Your 1:1 Discussion
                  </h3>
                  <p className="text-xs text-[#5F6B72]">
                    Complimentary for established institute directors.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#182A55] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="strat-page-name"
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#182A55] mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="strat-page-phone"
                      type="tel"
                      required
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#182A55] mb-1">
                      Email Address *
                    </label>
                    <input
                      id="strat-page-email"
                      type="email"
                      required
                      placeholder="rajesh@institute.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#182A55] mb-1">
                      Institute Name *
                    </label>
                    <input
                      id="strat-page-inst-name"
                      type="text"
                      required
                      placeholder="Apex Academy"
                      value={formData.instituteName}
                      onChange={(e) => setFormData({ ...formData, instituteName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#182A55] mb-1">
                      City & State *
                    </label>
                    <input
                      id="strat-page-city"
                      type="text"
                      required
                      placeholder="e.g. Indore, MP"
                      value={formData.cityState}
                      onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#182A55] mb-1">
                    Existing Course You Want to Take Online *
                  </label>
                  <input
                    id="strat-page-course"
                    type="text"
                    required
                    placeholder="e.g. Advanced Excel / Tally Prime / Python"
                    value={formData.existingCourseName}
                    onChange={(e) => setFormData({ ...formData, existingCourseName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#182A55] mb-1">
                    Preferred Discussion Time Slot *
                  </label>
                  <select
                    id="strat-page-slot"
                    value={formData.preferredTimeSlot}
                    onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                  >
                    <option value="11:00 AM - 12:00 PM (Morning)">11:00 AM - 12:00 PM (Morning)</option>
                    <option value="02:00 PM - 03:00 PM (Afternoon)">02:00 PM - 03:00 PM (Afternoon)</option>
                    <option value="04:00 PM - 05:00 PM (Evening)">04:00 PM - 05:00 PM (Evening)</option>
                    <option value="07:00 PM - 08:00 PM (Late Evening)">07:00 PM - 08:00 PM (Late Evening)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#182A55] mb-1">
                    Current Monthly Offline Intake
                  </label>
                  <select
                    id="strat-page-intake"
                    value={formData.currentMonthlyStudents}
                    onChange={(e) => setFormData({ ...formData, currentMonthlyStudents: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                  >
                    <option value="1-15 Students">1 - 15 Students / month</option>
                    <option value="15-30 Students">15 - 30 Students / month</option>
                    <option value="30-60 Students">30 - 60 Students / month</option>
                    <option value="60+ Students">60+ Students / month</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    id="strat-page-submit-btn"
                    type="submit"
                    className="w-full bg-[#182A55] hover:bg-[#0F1C3D] text-white font-extrabold py-3.5 px-4 rounded-xl text-sm transition-all cta-btn-shadow flex items-center justify-center gap-2 cursor-pointer cta-pulse-btn"
                  >
                    <span>BOOK MY STRATEGY CALL</span>
                    <ArrowRight className="w-4 h-4 text-[#E8C8B7]" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1 text-[11px] text-[#5F6B72] text-center pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#147D68]" />
                  <span>Your institute data remains strictly confidential.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
