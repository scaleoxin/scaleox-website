import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/content';
import { CheckCircle2, ArrowRight, BookOpen, Layers, Globe, Rocket, HelpCircle } from 'lucide-react';

interface ProcessSectionProps {
  onOpenStrategyCall: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenStrategyCall }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [
    <BookOpen className="w-5 h-5" />,
    <Layers className="w-5 h-5" />,
    <Globe className="w-5 h-5" />,
    <UsersIcon className="w-5 h-5" />,
    <Rocket className="w-5 h-5" />,
  ];

  function UsersIcon(props: { className?: string }) {
    return (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  return (
    <section id="process-section" className="py-16 md:py-24 bg-[#FFFFFF] border-y border-[#E2E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#147D68] uppercase tracking-wider bg-[#DDEFE9] px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#147D68]"></span>
            <span>Simple 5-Step Implementation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#182A55] tracking-tight">
            Our 5-Step Process for Online Expansion
          </h2>

          <p className="text-base sm:text-lg text-[#5F6B72] leading-relaxed">
            कोई भारी सॉफ्टवेयर या जटिल तकनीकी शब्द नहीं. एक सीधा, व्यावहारिक रोडमैप जो आपके मौजूदा कोर्स को ऑनलाइन विद्यार्थियों तक पहुँचाता है.
          </p>
        </div>

        {/* Steps Interactive Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Steps List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.stepNumber}
                  id={`process-step-item-${step.stepNumber}`}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? 'bg-[#182A55] text-white border-[#182A55] shadow-md'
                      : 'bg-[#FAF8F3] text-[#17202A] border-[#E2E0D8] hover:border-[#182A55]'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0 ${
                    isSelected ? 'bg-[#147D68] text-white' : 'bg-[#E2E0D8] text-[#182A55]'
                  }`}>
                    {step.stepNumber}
                  </div>

                  <div className="space-y-1">
                    <div className={`text-xs font-bold uppercase tracking-wider ${
                      isSelected ? 'text-[#E8C8B7]' : 'text-[#5F6B72]'
                    }`}>
                      {step.title}
                    </div>
                    <div className={`text-sm font-bold leading-snug ${
                      isSelected ? 'text-white' : 'text-[#182A55]'
                    }`}>
                      {step.hindiTagline}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Active Step Deep-Dive Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF8F3] border-2 border-[#182A55]/20 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E0D8]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#182A55] text-white flex items-center justify-center font-extrabold text-lg">
                    {PROCESS_STEPS[activeStep].stepNumber}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#147D68] uppercase tracking-wider">
                      Step {PROCESS_STEPS[activeStep].stepNumber} Focus
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#182A55]">
                      {PROCESS_STEPS[activeStep].title}
                    </h3>
                  </div>
                </div>

                <div className="hidden sm:block text-xs font-bold text-[#5F6B72] bg-white px-3 py-1 rounded-full border border-[#E2E0D8]">
                  Phase {activeStep + 1} of 5
                </div>
              </div>

              {/* Hindi Tagline */}
              <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E2E0D8] text-base font-semibold text-[#182A55]">
                "{PROCESS_STEPS[activeStep].hindiTagline}"
              </div>

              {/* English Description */}
              <p className="text-sm sm:text-base text-[#5F6B72] leading-relaxed">
                {PROCESS_STEPS[activeStep].englishDescription}
              </p>

              {/* Action Details */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold text-[#182A55] uppercase tracking-wider">
                  Key Actions in this Phase:
                </div>
                {PROCESS_STEPS[activeStep].details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-sm text-[#17202A] bg-white p-3 rounded-lg border border-[#E2E0D8]">
                    <CheckCircle2 className="w-4 h-4 text-[#147D68] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#E2E0D8] flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  id="process-cta-strat-btn"
                  onClick={onOpenStrategyCall}
                  className="w-full sm:w-auto bg-[#182A55] hover:bg-[#0F1C3D] text-white font-bold py-3 px-6 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer cta-btn-shadow cta-pulse-btn"
                >
                  <span>Discuss This Step for Your Course</span>
                  <ArrowRight className="w-4 h-4 text-[#E8C8B7]" />
                </button>

                <div className="text-xs text-[#5F6B72] font-medium text-center sm:text-right">
                  Next Step: {PROCESS_STEPS[(activeStep + 1) % 5].title} →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
