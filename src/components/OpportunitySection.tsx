import React from 'react';
import { Sparkles, CheckCircle2, XCircle } from 'lucide-react';

interface OpportunitySectionProps {
  onOpenStrategyCall: () => void;
  onOpenMasterclass: () => void;
}

export const OpportunitySection: React.FC<OpportunitySectionProps> = ({
  onOpenStrategyCall,
  onOpenMasterclass,
}) => {
  return (
    <section id="opportunity-section" className="py-16 md:py-24 bg-[#F7F4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#147D68] uppercase tracking-wider bg-[#DDEFE9] px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Online Expansion Opportunity</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#182A55] tracking-tight leading-snug">
            आपका Existing Course <span className="text-[#147D68]">Local Area</span> से आगे जा सकता है.
          </h2>

          <p className="text-base sm:text-lg text-[#5F6B72] leading-relaxed">
            आपको नया course या नया business शुरू करने की जरूरत नहीं है. आप जिस course को आज अपने Institute में पढ़ा रहे हैं, उसी course को online students के लिए package, sell और deliver करने की शुरुआत की जा सकती है.
          </p>
        </div>

        {/* 2-Way Comparison: Starting from Zero vs ScaleOX Expansion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left: The Wrong / Hard Way */}
          <div className="bg-[#FFFFFF] border border-[#E2E0D8] rounded-2xl p-6 sm:p-8 flex flex-col justify-between opacity-85">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E0D8]">
                <div className="text-sm font-bold text-[#5F6B72] uppercase tracking-wider">
                  The Mistake Many Make
                </div>
                <XCircle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-[#182A55]">
                Starting from Zero or Closing Offline
              </h3>
              <ul className="space-y-3 text-sm text-[#5F6B72]">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Trying to create an entirely unfamiliar tech product.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Spending months writing code or buying complex software tools.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Shutting down or neglecting profitable offline batches.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Wasting time on generic marketing buzzwords and unverified theories.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E2E0D8] text-xs text-[#5F6B72] italic">
              Result: High stress, wasted money, and neglected physical students.
            </div>
          </div>

          {/* Right: The ScaleOX Way */}
          <div className="bg-[#182A55] text-white border-2 border-[#147D68] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <div className="text-sm font-bold text-[#DDEFE9] uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#147D68]" />
                  <span>The ScaleOX Expansion Model</span>
                </div>
                <span className="text-xs bg-[#147D68] text-white font-bold px-2.5 py-0.5 rounded-full">
                  Pragmatic & Proven
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Use What You Already Have Built
              </h3>
              <ul className="space-y-3 text-sm text-[#E2E0D8]">
                <li className="flex items-start gap-2">
                  <span className="text-[#147D68] font-bold">✓</span>
                  <span><strong>Keep Your Offline Lab Active:</strong> Your local admissions & fees continue running 100% uninterrupted.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#147D68] font-bold">✓</span>
                  <span><strong>Use Your Existing Course:</strong> No new syllabus—just package what you already teach best into live online cohorts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#147D68] font-bold">✓</span>
                  <span><strong>Pan-India Student Reach:</strong> Tap into students from neighboring districts and other states.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#147D68] font-bold">✓</span>
                  <span><strong>Zero Extra Rent / Lab Expenses:</strong> Deliver classes via Google Meet / Zoom in evening slots.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-white/15 text-xs text-[#DDEFE9] font-medium">
              Result: Predictable offline stability + Pan-India online growth opportunity.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
