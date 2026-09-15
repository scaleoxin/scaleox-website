import React, { useState } from 'react';
import { CASE_STUDY_FRAMEWORKS } from '../data/content';
import { Award, MapPin, CheckCircle2, ArrowRight, Quote, Globe, Building } from 'lucide-react';

interface ResultsSectionProps {
  onOpenStrategyCall: () => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ onOpenStrategyCall }) => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState<number>(0);
  const currentCase = CASE_STUDY_FRAMEWORKS[selectedCaseIdx];

  return (
    <section id="results-section" className="py-16 md:py-24 bg-[#FFFFFF] border-y border-[#E2E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#147D68] uppercase tracking-wider bg-[#DDEFE9] px-3 py-1 rounded-full">
            <Award className="w-3.5 h-3.5" />
            <span>Real Institute Transformation Models</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#182A55] tracking-tight">
            How Offline Institutes Expand Beyond Their Local Area
          </h2>

          <p className="text-base sm:text-lg text-[#5F6B72] leading-relaxed">
            Real frameworks of offline training centres that broke through the 30-50 KM geographic boundary while keeping their physical classrooms fully active.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CASE_STUDY_FRAMEWORKS.map((cs, idx) => {
            const isSelected = selectedCaseIdx === idx;
            return (
              <button
                key={cs.id}
                id={`case-tab-${cs.id}`}
                onClick={() => setSelectedCaseIdx(idx)}
                className={`py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#182A55] text-white shadow-md'
                    : 'bg-[#FAF8F3] text-[#5F6B72] border border-[#E2E0D8] hover:text-[#182A55]'
                }`}
              >
                <Building className="w-4 h-4" />
                <span>{cs.instituteType}</span>
                <span className="text-[10px] opacity-75">({cs.location.split(',')[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detailed Card */}
        <div className="bg-[#FAF8F3] border-2 border-[#E2E0D8] rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-8">
          {/* Top Bar: Institute Metadata */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E2E0D8]">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#147D68] uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#B8734A]" />
                <span>{currentCase.location}</span>
                <span>•</span>
                <span>{currentCase.instituteType}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#182A55]">
                {currentCase.instituteName}
              </h3>
              <div className="text-xs sm:text-sm font-semibold text-[#B8734A]">
                Flagship Expanded Course: {currentCase.courseName}
              </div>
            </div>

            <div className="bg-white px-4 py-2.5 rounded-xl border border-[#E2E0D8] text-xs space-y-1">
              <div className="text-[#5F6B72] font-medium">Pan-India Distance Students From:</div>
              <div className="flex flex-wrap gap-1.5 font-bold text-[#182A55]">
                {currentCase.panIndiaReachCities.map((city) => (
                  <span key={city} className="bg-[#DDEFE9] text-[#147D68] px-2 py-0.5 rounded-md text-[11px]">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Grid: Before Limitation vs ScaleOX Transformation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-white p-6 rounded-2xl border border-[#E2E0D8] space-y-3">
              <div className="text-xs font-extrabold text-[#B8734A] uppercase tracking-wider">
                Before: The Physical 7 KM Bottleneck
              </div>
              <p className="text-sm text-[#17202A] leading-relaxed">
                {currentCase.beforeStory}
              </p>
              <div className="bg-[#FAF8F3] p-3 rounded-lg border border-[#E2E0D8] text-xs text-[#5F6B72]">
                <strong>Core Constraint:</strong> {currentCase.beforeLimitation}
              </div>
            </div>

            {/* Transformation Steps */}
            <div className="bg-white p-6 rounded-2xl border border-[#147D68]/40 space-y-3">
              <div className="text-xs font-extrabold text-[#147D68] uppercase tracking-wider">
                How ScaleOX Expanded the Course
              </div>
              <div className="space-y-2">
                {currentCase.transformationSteps.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2 text-xs text-[#17202A]">
                    <CheckCircle2 className="w-4 h-4 text-[#147D68] shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote & Outcome */}
          <div className="bg-[#182A55] text-white rounded-2xl p-6 relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-bold text-[#E8C8B7] uppercase tracking-wider flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5" />
                <span>Director / Institute Founder's Feedback</span>
              </div>
              <p className="text-sm sm:text-base italic text-[#E2E0D8] font-medium leading-relaxed">
                {currentCase.keyQuote}
              </p>
              <div className="text-xs text-[#DDEFE9] font-bold">
                ✓ {currentCase.outcomeSummary}
              </div>
            </div>

            <button
              onClick={onOpenStrategyCall}
              className="shrink-0 bg-[#147D68] hover:bg-[#116956] text-white font-bold py-3 px-5 rounded-xl text-xs flex items-center gap-2 cursor-pointer cta-btn-shadow transition-all cta-pulse-btn"
            >
              <span>Explore for Your Institute</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
