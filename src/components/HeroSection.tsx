import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, CheckCircle2, MapPin, Sparkles, Award, Users } from 'lucide-react';
import { ThreeHeroExpansion } from './ThreeHeroExpansion';

interface HeroSectionProps {
  onOpenStrategyCall: () => void;
  onOpenMasterclass: () => void;
  onNavigateToProcess: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenStrategyCall,
  onOpenMasterclass,
  onNavigateToProcess,
}) => {
  return (
    <section id="hero-section" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Value & Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Qualification Pill */}
            <div className="inline-flex items-center gap-2 bg-[#FAF8F3] border border-[#E2E0D8] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#182A55] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#147D68]"></span>
              <span>For Established Education & Skill-Training Businesses</span>
            </div>

            {/* Primary Headline (Hinglish 5-Second Clarity) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#182A55] leading-[1.18] tracking-tight">
              क्या आपके <span className="text-[#147D68]">Admissions</span> सिर्फ <span className="underline decoration-[#B8734A] decoration-wavy underline-offset-6">Local Area</span> तक सीमित हैं?
            </h1>

            {/* Supporting Copy (Clarity > Cleverness) */}
            <div className="space-y-3 text-base sm:text-lg text-[#17202A] leading-relaxed max-w-2xl font-normal">
              <p>
                <strong>You already have the institute. You already have the course.</strong> You already know how to teach.
              </p>
              <p className="text-[#5F6B72]">
                The only limitation is that your physical location restricts how many students can reach you. A student living 40 km away cannot travel daily to your classroom.
              </p>
              <p className="font-medium text-[#182A55] bg-[#DDEFE9]/60 p-3 rounded-xl border border-[#147D68]/30">
                <strong>ScaleOX</strong> helps you package and sell your <strong>existing course online</strong>, so you can reach students beyond your Local Area across India.
              </p>
            </div>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                id="hero-primary-strat-btn"
                onClick={onOpenStrategyCall}
                className="bg-[#182A55] hover:bg-[#0F1C3D] text-white font-extrabold py-4 px-7 rounded-xl text-sm transition-all cta-btn-shadow flex items-center justify-center gap-2.5 cursor-pointer group cta-pulse-btn"
              >
                <Calendar className="w-4 h-4 text-[#E8C8B7]" />
                <span>BOOK A 1:1 STRATEGY CALL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Micro-Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-[#5F6B72] border-t border-[#E2E0D8]">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#147D68] shrink-0" />
                <span>Keep Offline Lab 100% Active</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#147D68] shrink-0" />
                <span>No New Course Required</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#147D68] shrink-0" />
                <span>Pan-India Student Reach</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Metaphor & Visual Depth (5 cols) */}
          <div className="lg:col-span-5">
            <ThreeHeroExpansion />
          </div>
        </div>
      </div>
    </section>
  );
};
