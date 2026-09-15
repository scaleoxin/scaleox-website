import React, { useState } from 'react';
import { WHO_ITS_FOR_CATEGORIES, QUALIFICATION_ITEMS } from '../data/content';
import { CheckCircle2, XCircle, Building2, Monitor, Code, Calculator, PenTool, Award, ArrowRight } from 'lucide-react';

interface WhoItIsForSectionProps {
  onOpenStrategyCall: () => void;
}

export const WhoItIsForSection: React.FC<WhoItIsForSectionProps> = ({ onOpenStrategyCall }) => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const categoryIcons = [
    <Monitor className="w-5 h-5" />,
    <Code className="w-5 h-5" />,
    <PenTool className="w-5 h-5" />,
    <Calculator className="w-5 h-5" />,
    <Building2 className="w-5 h-5" />,
    <Award className="w-5 h-5" />
  ];

  return (
    <section id="who-its-for-section" className="py-16 md:py-24 bg-[#FFFFFF] border-y border-[#E2E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#182A55] uppercase tracking-wider bg-[#FAF8F3] border border-[#E2E0D8] px-3 py-1 rounded-full">
            <span>Audience & Qualification</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#182A55] tracking-tight">
            Is ScaleOX Right for Your Institute?
          </h2>

          <p className="text-base sm:text-lg text-[#5F6B72] leading-relaxed">
            अगर आपका offline institute already चल रहा है, आपके पास paid course है और आप Local Area से बाहर students तक पहुँचना चाहते हैं, ScaleOX आपके लिए relevant हो सकता है.
          </p>
        </div>

        {/* 6 Institute Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHO_ITS_FOR_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              onClick={() => setSelectedCategory(idx)}
              className="bg-[#FAF8F3] border border-[#E2E0D8] hover:border-[#182A55] p-6 rounded-2xl transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E0D8] text-[#182A55] flex items-center justify-center group-hover:bg-[#182A55] group-hover:text-white transition-colors">
                  {categoryIcons[idx]}
                </div>
                <h3 className="text-lg font-bold text-[#182A55]">
                  {cat.title}
                </h3>
                <p className="text-xs font-bold text-[#147D68] bg-[#DDEFE9] p-2 rounded-md">
                  {cat.hindiText}
                </p>
                <p className="text-xs text-[#5F6B72] leading-relaxed">
                  <strong>Typical Courses:</strong> {cat.examples}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E2E0D8] text-[11px] font-semibold text-[#182A55] flex items-center justify-between">
                <span>Highly Expandable Online</span>
                <span className="text-[#147D68]">✓ High Demand</span>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Qualification Comparison Table */}
        <div className="bg-[#FAF8F3] border-2 border-[#E2E0D8] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#182A55]">
              Honest Fit Check: Who We Work With
            </h3>
            <p className="text-xs sm:text-sm text-[#5F6B72]">
              हम हर किसी को नहीं जोड़ते. हम केवल उन संस्थानों के साथ काम करते हैं जिनके पास वास्तविक शिक्षण अनुभव और ठोस पाठ्यक्रम है.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Good Fit Column */}
            <div className="bg-[#FFFFFF] border-2 border-[#147D68] rounded-2xl p-6 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 pb-3 border-b border-[#DDEFE9]">
                <div className="w-8 h-8 rounded-full bg-[#DDEFE9] text-[#147D68] flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#147D68] uppercase tracking-wider">
                    GOOD FIT FOR SCALEOX
                  </div>
                  <div className="text-xs text-[#5F6B72]">Established Institutes Ready to Expand</div>
                </div>
              </div>

              <ul className="space-y-3">
                {QUALIFICATION_ITEMS.goodFit.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17202A]">
                    <CheckCircle2 className="w-4 h-4 text-[#147D68] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not A Fit Column */}
            <div className="bg-[#FFFFFF] border border-[#E2E0D8] rounded-2xl p-6 space-y-4 opacity-90">
              <div className="flex items-center gap-2 pb-3 border-b border-[#E2E0D8]">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">
                  ✕
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#5F6B72] uppercase tracking-wider">
                    NOT A FIT FOR SCALEOX
                  </div>
                  <div className="text-xs text-[#5F6B72]">When Expansion is Not Recommended</div>
                </div>
              </div>

              <ul className="space-y-3">
                {QUALIFICATION_ITEMS.notAFit.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5F6B72]">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenStrategyCall}
              className="bg-[#182A55] hover:bg-[#0F1C3D] text-white font-bold py-3.5 px-8 rounded-xl text-xs sm:text-sm transition-all inline-flex items-center gap-2 cursor-pointer cta-btn-shadow cta-pulse-btn"
            >
              <span>Check Your Institute's Online Potential on a 1:1 Call</span>
              <ArrowRight className="w-4 h-4 text-[#E8C8B7]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
