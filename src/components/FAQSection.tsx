import React, { useState } from 'react';
import { FAQS_DATA } from '../data/content';
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface FAQSectionProps {
  onOpenStrategyCall: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenStrategyCall }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq-section" className="py-16 md:py-24 bg-[#F7F4EC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#182A55] uppercase tracking-wider bg-white border border-[#E2E0D8] px-3 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-[#147D68]" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#182A55] tracking-tight">
            Clear Answers for Institute Owners
          </h2>

          <p className="text-base text-[#5F6B72] max-w-xl mx-auto">
            आपके मन में उठने वाले हर व्यावहारिक सवाल का सीधा और ईमानदार जवाब.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-[#FFFFFF] border border-[#E2E0D8] rounded-2xl overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F3]/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <div className="text-base sm:text-lg font-bold text-[#182A55]">
                      {faq.questionHindi}
                    </div>
                    {faq.questionEnglish && (
                      <div className="text-xs text-[#5F6B72] font-medium">
                        {faq.questionEnglish}
                      </div>
                    )}
                  </div>

                  <div className={`p-2 rounded-xl transition-all ${
                    isOpen ? 'bg-[#182A55] text-white' : 'bg-[#FAF8F3] text-[#5F6B72]'
                  }`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-[#E2E0D8] space-y-2.5 animate-fade-in text-sm sm:text-base text-[#17202A] leading-relaxed">
                    <p className="font-medium text-[#182A55]">
                      {faq.answerHindi}
                    </p>
                    {faq.answerEnglish && (
                      <p className="text-xs sm:text-sm text-[#5F6B72] pt-1">
                        {faq.answerEnglish}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Banner */}
        <div className="bg-[#182A55] text-white rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-sm">
          <h3 className="text-xl font-bold text-white">
            Have a question specific to your institute's courses?
          </h3>
          <p className="text-xs sm:text-sm text-[#E2E0D8] max-w-lg mx-auto">
            Book a 1:1 strategy discussion. We will look at your course syllabus and student demographics to give you honest feedback.
          </p>
          <div>
            <button
              onClick={onOpenStrategyCall}
              className="bg-[#147D68] hover:bg-[#116956] text-white font-bold py-3 px-6 rounded-xl text-xs transition-all inline-flex items-center gap-2 cursor-pointer cta-btn-shadow cta-pulse-btn"
            >
              <span>Book a 1:1 Strategy Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
