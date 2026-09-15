import React from 'react';
import { MapPin, AlertCircle, TrendingDown, Users, Bus, Clock, ShieldAlert, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onOpenStrategyCall: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenStrategyCall }) => {
  return (
    <section id="problem-section" className="py-16 md:py-24 bg-[#FFFFFF] border-y border-[#E2E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8734A] uppercase tracking-wider bg-[#E8C8B7]/30 px-3 py-1 rounded-full">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>The Core Challenge of Offline Training</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#182A55] tracking-tight leading-snug">
            आपका Institute अच्छा चल सकता है, <br className="hidden sm:inline" />
            <span className="text-[#B8734A]">BUT Admissions की एक सीमा फिर भी हो सकती है.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5F6B72] leading-relaxed">
            एक physical institute में वही students रोज़ आ सकते हैं जो आपके Local Area में रहते हैं या आसानी से वहाँ पहुँच सकते हैं. यही वजह है कि अच्छा course होने के बावजूद student reach एक point पर रुक सकती है.
          </p>
        </div>

        {/* 3 Core Limitations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Card 1: Local Travel Friction */}
          <div className="bg-[#FAF8F3] border border-[#E2E0D8] rounded-2xl p-6 flex flex-col justify-between hover:border-[#182A55] transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8C8B7]/40 text-[#B8734A] flex items-center justify-center font-bold">
                <Bus className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#182A55]">
                30–50 KM Travel Barrier
              </h3>
              <p className="text-sm text-[#5F6B72] leading-relaxed">
                सोचिए, आपके Institute से 30 या 50 KM दूर रहने वाला Student रोज़ 2 घंटे बस/ट्रेन में सफर करके आपकी 1 घंटे की class attend करने क्यों आएगा?
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E2E0D8] text-xs font-semibold text-[#182A55]">
              Commute fatigue naturally caps your student boundary.
            </div>
          </div>

          {/* Card 2: Local Competition & Saturation */}
          <div className="bg-[#FAF8F3] border border-[#E2E0D8] rounded-2xl p-6 flex flex-col justify-between hover:border-[#182A55] transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8C8B7]/40 text-[#B8734A] flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#182A55]">
                Local Area Dependence
              </h3>
              <p className="text-sm text-[#5F6B72] leading-relaxed">
                Admissions सिर्फ स्थानीय जनसंख्या, लोकल रेफरल और पास के 2-3 कॉलेजों पर निर्भर रहते हैं. जब लोकल मार्केट में मंदी आती है, तो बैचेस खाली रह जाते हैं.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E2E0D8] text-xs font-semibold text-[#182A55]">
              Heavy reliance on a small, fixed local radius.
            </div>
          </div>

          {/* Card 3: Fixed Lab Capacity */}
          <div className="bg-[#FAF8F3] border border-[#E2E0D8] rounded-2xl p-6 flex flex-col justify-between hover:border-[#182A55] transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8C8B7]/40 text-[#B8734A] flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#182A55]">
                Physical Room & Time Limits
              </h3>
              <p className="text-sm text-[#5F6B72] leading-relaxed">
                आपके पास 15-20 कंप्यूटर या सीट्स हैं. दिन में अधिकतम 4-5 बैचेस हो सकते हैं. ज्यादा स्टूडेंट्स लेने के लिए नया हॉल या महंगा किराया चुकाना पड़ता है.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E2E0D8] text-xs font-semibold text-[#182A55]">
              Scaling offline requires heavy real estate expenses.
            </div>
          </div>
        </div>

        {/* The Major Emotional Turning Point Banner */}
        <div className="mt-12 bg-[#182A55] text-white rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-lg">
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#DDEFE9] bg-[#147D68] px-3 py-1 rounded-full">
              The Turning Point
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              आप कितना भी अच्छा classroom बना लें, एक physical location की reach limited ही रहेगी.
            </h3>
            <p className="text-base sm:text-lg text-[#E2E0D8] leading-relaxed">
              <strong>लेकिन आपका Course सिर्फ उसी location तक सीमित होना जरूरी नहीं है.</strong> जो ज्ञान आप 15 local बच्चों को लैब में दे रहे हैं, वही ज्ञान पूरे भारत के 100+ इच्छुक विद्यार्थी ऑनलाइन सीखने को तैयार हैं.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenStrategyCall}
                className="bg-[#147D68] hover:bg-[#116956] text-white font-bold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2 cursor-pointer cta-btn-shadow cta-pulse-btn"
              >
                <span>Discuss Online Expansion for Your Course</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
