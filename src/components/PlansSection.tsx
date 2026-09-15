import React, { useState } from 'react';
import { PLANS_DATA } from '../data/content';
import { Check, ShieldCheck, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { PlanTier } from '../types';

interface PlansSectionProps {
  onSelectPlan: (plan: PlanTier) => void;
  onOpenStrategyCall: () => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({
  onSelectPlan,
  onOpenStrategyCall,
}) => {
  const [billingFilter, setBillingFilter] = useState<'all' | 'diy' | 'dfy'>('all');

  const filteredPlans = PLANS_DATA.filter((p) => {
    if (billingFilter === 'diy') return p.model === 'DIY';
    if (billingFilter === 'dfy') return p.model === 'DONE FOR YOU';
    return true;
  });

  return (
    <section id="plans-section" className="py-16 md:py-24 bg-[#F7F4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#147D68] uppercase tracking-wider bg-[#DDEFE9] px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment Plans</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#182A55] tracking-tight">
            Clear, Transparent Plans for Your Institute
          </h2>

          <p className="text-base sm:text-lg text-[#5F6B72] leading-relaxed">
            Choose whether you want to implement the step-by-step system independently (DIY) or have our specialized team build and manage the digital setup for you (Done-For-You).
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setBillingFilter('all')}
              className={`text-xs font-bold py-1.5 px-4 rounded-full transition-all cursor-pointer ${
                billingFilter === 'all'
                  ? 'bg-[#182A55] text-white shadow-2xs'
                  : 'bg-white text-[#5F6B72] border border-[#E2E0D8] hover:text-[#182A55]'
              }`}
            >
              All Plans
            </button>
            <button
              onClick={() => setBillingFilter('diy')}
              className={`text-xs font-bold py-1.5 px-4 rounded-full transition-all cursor-pointer ${
                billingFilter === 'diy'
                  ? 'bg-[#182A55] text-white shadow-2xs'
                  : 'bg-white text-[#5F6B72] border border-[#E2E0D8] hover:text-[#182A55]'
              }`}
            >
              DIY (Self-Implemented)
            </button>
            <button
              onClick={() => setBillingFilter('dfy')}
              className={`text-xs font-bold py-1.5 px-4 rounded-full transition-all cursor-pointer ${
                billingFilter === 'dfy'
                  ? 'bg-[#182A55] text-white shadow-2xs'
                  : 'bg-white text-[#5F6B72] border border-[#E2E0D8] hover:text-[#182A55]'
              }`}
            >
              Done-For-You (DFY)
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {filteredPlans.map((plan) => {
            const isHighlighted = plan.highlight;
            const isDFY = plan.model === 'DONE FOR YOU';

            return (
              <div
                key={plan.id}
                id={`plan-card-${plan.id}`}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                  isDFY
                    ? 'bg-[#182A55] text-white border-2 border-[#B8734A] shadow-xl'
                    : isHighlighted
                    ? 'bg-[#FFFFFF] text-[#17202A] border-2 border-[#147D68] shadow-lg scale-100 md:scale-102'
                    : 'bg-[#FFFFFF] text-[#17202A] border border-[#E2E0D8] shadow-xs'
                }`}
              >
                {/* Top Badge if any */}
                {plan.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs ${
                    isDFY ? 'bg-[#B8734A] text-white' : 'bg-[#147D68] text-white'
                  }`}>
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Model & Duration */}
                  <div className="flex items-center justify-between pb-3 border-b border-inherit/20">
                    <span className={`text-xs font-bold uppercase tracking-wider ${
                      isDFY ? 'text-[#DDEFE9]' : 'text-[#147D68]'
                    }`}>
                      {plan.model}
                    </span>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      isDFY ? 'bg-white/10 text-white' : 'bg-[#FAF8F3] text-[#5F6B72] border border-[#E2E0D8]'
                    }`}>
                      {plan.duration} Access
                    </span>
                  </div>

                  {/* Price */}
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight">
                        {plan.price}
                      </span>
                      <span className={`text-xs ${isDFY ? 'text-white/70' : 'text-[#5F6B72]'}`}>
                        / {plan.duration}
                      </span>
                    </div>
                    <div className={`text-xs font-bold mt-2 ${isDFY ? 'text-[#E8C8B7]' : 'text-[#B8734A]'}`}>
                      "{plan.headline}"
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed ${isDFY ? 'text-[#E2E0D8]' : 'text-[#5F6B72]'}`}>
                    {plan.description}
                  </p>

                  {/* Ideal For */}
                  <div className={`p-3 rounded-xl text-xs ${
                    isDFY ? 'bg-white/10 text-white/90' : 'bg-[#FAF8F3] text-[#17202A] border border-[#E2E0D8]'
                  }`}>
                    <strong>Ideal For:</strong> {plan.idealFor}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-2">
                    <div className={`text-xs font-bold uppercase tracking-wider ${
                      isDFY ? 'text-white' : 'text-[#182A55]'
                    }`}>
                      What's Included:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs leading-snug">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isDFY ? 'text-[#147D68]' : 'text-[#147D68]'
                        }`} />
                        <span className={isDFY ? 'text-white/90' : 'text-[#17202A]'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="mt-8 pt-6 border-t border-inherit/20 space-y-3">
                  <button
                    id={`select-plan-${plan.id}-btn`}
                    onClick={() => {
                      if (plan.paymentUrl) {
                        window.open(plan.paymentUrl, '_blank', 'noopener,noreferrer');
                      } else if (isDFY) {
                        onOpenStrategyCall();
                      } else {
                        onSelectPlan(plan);
                      }
                    }}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer plan-cta-zoom-btn cta-btn-shadow ${
                      isDFY
                        ? 'bg-[#147D68] hover:bg-[#116956] text-white'
                        : isHighlighted
                        ? 'bg-[#182A55] hover:bg-[#0F1C3D] text-white'
                        : 'bg-[#FAF8F3] hover:bg-[#E2E0D8] border border-[#E2E0D8] text-[#182A55]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className={`text-[11px] text-center flex items-center justify-center gap-1 ${
                    isDFY ? 'text-white/60' : 'text-[#5F6B72]'
                  }`}>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#147D68]" />
                    <span>Transparent fee structure • No hidden royalties</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Guarantee / Direct Strategy Call Note */}
        <div className="bg-[#FFFFFF] border border-[#E2E0D8] rounded-2xl p-6 text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-bold text-[#182A55] uppercase tracking-wider">
            Unsure which plan matches your institute's current stage?
          </div>
          <p className="text-xs sm:text-sm text-[#5F6B72]">
            Book a 30-minute 1:1 strategy call. We will examine your course syllabus and recommend the most practical implementation route.
          </p>
          <button
            onClick={onOpenStrategyCall}
            className="text-xs font-extrabold text-[#147D68] hover:underline inline-flex items-center gap-1 pt-1 cursor-pointer"
          >
            <span>Book a 1:1 Strategy Discussion →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
