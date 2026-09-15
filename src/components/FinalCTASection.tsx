import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Sparkles, Building, Globe } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenStrategyCall: () => void;
  onOpenMasterclass: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onOpenStrategyCall,
  onOpenMasterclass,
}) => {
  return (
    <section id="final-cta-section" className="py-16 md:py-24 bg-[#182A55] text-white relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Brand Tag */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full text-xs font-bold text-[#DDEFE9]">
          <Sparkles className="w-3.5 h-3.5 text-[#147D68]" />
          <span>SCALEOX • EDUCATION BUSINESS EXPANSION</span>
        </div>

        {/* Big Brand Final Statement */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mx-auto">
          "आपका Institute एक जगह हो सकता है. <br className="hidden sm:inline" />
          <span className="text-[#E8C8B7]">आपका Course वहाँ तक सीमित होना जरूरी नहीं है."</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#E2E0D8] max-w-2xl mx-auto leading-relaxed">
          Take the first step toward Pan-India student reach. We will analyze your existing offline courses and show you exactly how to package and sell them online.
        </p>

        {/* Dual High-Contrast CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="final-cta-strat-btn"
            onClick={onOpenStrategyCall}
            className="w-full sm:w-auto bg-[#147D68] hover:bg-[#116956] text-white font-extrabold py-4 px-8 rounded-xl text-sm transition-all cta-btn-shadow flex items-center justify-center gap-2.5 cursor-pointer group cta-pulse-btn"
          >
            <Calendar className="w-4 h-4 text-[#E8C8B7]" />
            <span>BOOK A 1:1 STRATEGY CALL</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grounded Trust Indicator */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
          <div className="flex items-center gap-1.5">
            <Building className="w-4 h-4 text-[#147D68]" />
            <span>For Established Offline Institutes</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-[#147D68]" />
            <span>Pan-India Student Acquisition</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#147D68]" />
            <span>Realistic, Step-by-Step Execution</span>
          </div>
        </div>
      </div>
    </section>
  );
};
