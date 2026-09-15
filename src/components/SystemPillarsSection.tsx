import React from 'react';
import { SYSTEM_PILLARS } from '../data/content';
import { BookOpen, Gift, FileText, Compass, MessageSquare, Video, ArrowRight, ShieldCheck } from 'lucide-react';

interface SystemPillarsSectionProps {
  onOpenStrategyCall: () => void;
}

export const SystemPillarsSection: React.FC<SystemPillarsSectionProps> = ({ onOpenStrategyCall }) => {
  const pillarIcons = [
    <BookOpen className="w-5 h-5" />,
    <Gift className="w-5 h-5" />,
    <FileText className="w-5 h-5" />,
    <Compass className="w-5 h-5" />,
    <MessageSquare className="w-5 h-5" />,
    <Video className="w-5 h-5" />
  ];

  return (
    <section id="system-pillars-section" className="py-16 md:py-24 bg-[#F7F4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#147D68] uppercase tracking-wider bg-[#DDEFE9] px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#147D68]"></span>
            <span>The 6 Building Blocks</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#182A55] tracking-tight">
            What ScaleOX Helps You Build
          </h2>

          <p className="text-base sm:text-lg text-[#5F6B72] leading-relaxed">
            हम तकनीक बेचने के बजाय आपके कोर्स के लिए एक सरल और स्पष्ट सिस्टम बनाते हैं, जिससे दूर का विद्यार्थी आपके कोर्स पर भरोसा करके दाखिला ले सके.
          </p>
        </div>

        {/* 6 Pillars 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SYSTEM_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.pillar}
              className="bg-[#FFFFFF] border border-[#E2E0D8] rounded-2xl p-6 flex flex-col justify-between hover:border-[#182A55] transition-all hover:shadow-xs group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2E0D8]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] text-[#182A55] border border-[#E2E0D8] flex items-center justify-center group-hover:bg-[#182A55] group-hover:text-white transition-colors">
                      {pillarIcons[idx]}
                    </div>
                    <span className="text-xs font-bold text-[#5F6B72] uppercase tracking-wider">
                      Pillar {pillar.number}
                    </span>
                  </div>
                  <span className="text-xs font-extrabold text-[#147D68] bg-[#DDEFE9] px-2.5 py-0.5 rounded-md">
                    {pillar.pillar}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-extrabold text-[#182A55]">
                    "{pillar.question}"
                  </h3>
                  <div className="text-xs font-bold text-[#B8734A]">
                    {pillar.hindiDesc}
                  </div>
                </div>

                <p className="text-sm text-[#5F6B72] leading-relaxed">
                  {pillar.explanation}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E2E0D8] text-[11px] font-semibold text-[#182A55] flex items-center justify-between">
                <span>Designed for Indian Students</span>
                <span className="text-[#147D68]">✓ High Clarity</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#FAF8F3] border border-[#E2E0D8] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-[#182A55]">
              Want us to build these 6 pillars for your existing course?
            </h4>
            <p className="text-xs sm:text-sm text-[#5F6B72]">
              Explore our Done-For-You partnership or self-implement using our step-by-step blueprints.
            </p>
          </div>

          <button
            onClick={onOpenStrategyCall}
            className="shrink-0 bg-[#182A55] hover:bg-[#0F1C3D] text-white font-bold py-3 px-6 rounded-xl text-xs flex items-center gap-2 cursor-pointer cta-btn-shadow transition-all cta-pulse-btn"
          >
            <span>Book 1:1 Strategy Review</span>
            <ArrowRight className="w-4 h-4 text-[#E8C8B7]" />
          </button>
        </div>
      </div>
    </section>
  );
};
