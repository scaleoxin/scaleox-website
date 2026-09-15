import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, MapPin, Globe, Sparkles } from 'lucide-react';

interface LocalReachCalculatorProps {
  onBookStrategyCall: () => void;
}

export const LocalReachCalculator: React.FC<LocalReachCalculatorProps> = ({ onBookStrategyCall }) => {
  const [courseFee, setCourseFee] = useState<number>(6500);
  const [offlineStudents, setOfflineStudents] = useState<number>(25);
  const [onlineStudents, setOnlineStudents] = useState<number>(35);

  const offlineRevenue = courseFee * offlineStudents;
  const onlineRevenue = courseFee * onlineStudents;
  const totalHybridRevenue = offlineRevenue + onlineRevenue;

  return (
    <div id="calculator-section" className="bg-[#FFFFFF] border border-[#E2E0D8] rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E2E0D8]">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#147D68] uppercase tracking-wider bg-[#DDEFE9] px-3 py-1 rounded-full mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Institute Expansion Estimator</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#182A55] tracking-tight">
            See the Hybrid Expansion Math for Your Institute
          </h3>
          <p className="text-[#5F6B72] text-sm md:text-base mt-1 max-w-2xl">
            You do NOT replace offline with online. Your offline lab continues as usual while online opens a Pan-India student channel for the exact same course.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Sliders Area (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider 1: Course Fee */}
          <div className="bg-[#FAF8F3] p-4.5 rounded-xl border border-[#E2E0D8]">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="course-fee-input" className="text-sm font-bold text-[#182A55]">
                Your Existing Course Fee (Per Student)
              </label>
              <span className="text-base font-extrabold text-[#182A55] bg-white px-3 py-1 rounded-md border border-[#E2E0D8]">
                ₹{courseFee.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              id="course-fee-input"
              type="range"
              min="2500"
              max="25000"
              step="500"
              value={courseFee}
              onChange={(e) => setCourseFee(Number(e.target.value))}
              className="w-full h-2 bg-[#E2E0D8] rounded-lg appearance-none cursor-pointer accent-[#182A55]"
            />
            <div className="flex justify-between text-[11px] text-[#5F6B72] mt-1 font-medium">
              <span>₹2,500 (Basic Skills)</span>
              <span>₹12,000 (IT / Tally)</span>
              <span>₹25,000 (Advanced)</span>
            </div>
          </div>

          {/* Slider 2: Current Offline Capacity */}
          <div className="bg-[#FAF8F3] p-4.5 rounded-xl border border-[#E2E0D8]">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="offline-students-input" className="text-sm font-bold text-[#182A55] flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#B8734A]" />
                Current Monthly Offline Admissions (Local 30km Limit)
              </label>
              <span className="text-base font-extrabold text-[#B8734A] bg-white px-3 py-1 rounded-md border border-[#E2E0D8]">
                {offlineStudents} Students
              </span>
            </div>
            <input
              id="offline-students-input"
              type="range"
              min="5"
              max="100"
              step="5"
              value={offlineStudents}
              onChange={(e) => setOfflineStudents(Number(e.target.value))}
              className="w-full h-2 bg-[#E2E0D8] rounded-lg appearance-none cursor-pointer accent-[#B8734A]"
            />
            <div className="flex justify-between text-[11px] text-[#5F6B72] mt-1 font-medium">
              <span>5 Students/mo</span>
              <span>25 Students/mo</span>
              <span>100 Students/mo</span>
            </div>
          </div>

          {/* Slider 3: Target Pan-India Online Reach */}
          <div className="bg-[#FAF8F3] p-4.5 rounded-xl border border-[#E2E0D8]">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="online-students-input" className="text-sm font-bold text-[#182A55] flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#147D68]" />
                Target Monthly Online Students (Pan-India)
              </label>
              <span className="text-base font-extrabold text-[#147D68] bg-white px-3 py-1 rounded-md border border-[#E2E0D8]">
                {onlineStudents} Students
              </span>
            </div>
            <input
              id="online-students-input"
              type="range"
              min="10"
              max="200"
              step="5"
              value={onlineStudents}
              onChange={(e) => setOnlineStudents(Number(e.target.value))}
              className="w-full h-2 bg-[#E2E0D8] rounded-lg appearance-none cursor-pointer accent-[#147D68]"
            />
            <div className="flex justify-between text-[11px] text-[#5F6B72] mt-1 font-medium">
              <span>10 Students (Pilot Batch)</span>
              <span>50 Students (Multi-state)</span>
              <span>200 Students (Pan-India)</span>
            </div>
          </div>
        </div>

        {/* Breakdown Card (5 cols) */}
        <div className="lg:col-span-5 bg-[#182A55] text-white rounded-xl p-6 flex flex-col justify-between shadow-md">
          <div>
            <div className="text-xs font-semibold text-[#DDEFE9] uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#147D68]" />
              <span>Hybrid Revenue Model Comparison</span>
            </div>

            <div className="space-y-4">
              {/* Offline Baseline */}
              <div className="bg-white/10 p-3.5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between text-xs text-[#E2E0D8] mb-1">
                  <span>Existing Offline Institute (Kept 100% Intact)</span>
                  <span className="text-xs text-[#E8C8B7] font-semibold">{offlineStudents} local seats</span>
                </div>
                <div className="text-xl font-bold text-white">
                  ₹{offlineRevenue.toLocaleString('en-IN')} <span className="text-xs text-white/60 font-normal">/ month</span>
                </div>
              </div>

              {/* Online Channel */}
              <div className="bg-[#147D68]/30 p-3.5 rounded-lg border border-[#147D68]/50">
                <div className="flex items-center justify-between text-xs text-[#DDEFE9] mb-1">
                  <span>Additional Pan-India Online Channel</span>
                  <span className="text-xs text-[#DDEFE9] font-bold">+{onlineStudents} distance seats</span>
                </div>
                <div className="text-xl font-bold text-[#DDEFE9]">
                  + ₹{onlineRevenue.toLocaleString('en-IN')} <span className="text-xs text-white/60 font-normal">/ month</span>
                </div>
                <div className="text-[11px] text-white/70 mt-1">
                  (Zero extra lab workstations, rent or electricity required)
                </div>
              </div>

              {/* Total Combined */}
              <div className="pt-2 border-t border-white/20">
                <div className="text-xs text-white/80 uppercase tracking-wider font-semibold">
                  Total Combined Hybrid Opportunity
                </div>
                <div className="text-3xl font-extrabold text-white mt-1">
                  ₹{totalHybridRevenue.toLocaleString('en-IN')} <span className="text-sm font-normal text-white/70">/ month</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/15">
            <button
              id="calc-cta-strategy-btn"
              onClick={onBookStrategyCall}
              className="w-full bg-[#147D68] hover:bg-[#116956] text-white font-bold py-3 px-4 rounded-xl transition-all cta-btn-shadow cta-zoom-btn flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              <span>Discuss Online Feasibility on 1:1 Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-[11px] text-center text-white/60 mt-2 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#147D68]" />
              <span>Realistic framework. No false guarantees or exaggerated claims.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
