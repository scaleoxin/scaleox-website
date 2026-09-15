import React from 'react';
import { ActiveView } from '../types';
import { ShieldCheck, ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../data/content';

interface LegalPagesProps {
  view: 'privacy-policy' | 'terms-conditions' | 'refund-policy' | 'cookie-policy';
  onBackToHome: () => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ view, onBackToHome }) => {
  return (
    <div className="py-12 md:py-20 bg-[#F7F4EC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back button */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#182A55] hover:text-[#147D68] bg-white px-4 py-2 rounded-xl border border-[#E2E0D8] shadow-2xs transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </button>

        {/* Card Container */}
        <div className="bg-white border-2 border-[#E2E0D8] rounded-3xl p-8 sm:p-12 shadow-sm space-y-8 text-[#17202A]">
          {view === 'privacy-policy' && (
            <div className="space-y-6">
              <div className="border-b border-[#E2E0D8] pb-4">
                <div className="text-xs font-bold text-[#147D68] uppercase tracking-wider mb-1">
                  Legal Documentation
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-[#182A55]">
                  Privacy Policy
                </h1>
                <p className="text-xs text-[#5F6B72] mt-1">
                  Last Updated: August 2026 • ScaleOX (Education Business Expansion)
                </p>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-[#5F6B72]">
                <p>
                  At <strong>ScaleOX</strong>, we respect the privacy of institute owners, directors, and training organizations across India. This Privacy Policy outlines how we collect, handle, and safeguard your personal and business information.
                </p>

                <h3 className="text-base font-bold text-[#182A55] pt-2">
                  1. Information We Collect
                </h3>
                <p>
                  When you book a strategy call, register for a masterclass, or apply for our expansion plans, we collect contact details such as your full name, phone/WhatsApp number, email address, institute name, institute location, and existing course categories.
                </p>

                <h3 className="text-base font-bold text-[#182A55] pt-2">
                  2. How We Use Your Data
                </h3>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>To provide direct strategy reviews and course feasibility assessments.</li>
                  <li>To dispatch masterclass access links and calendar reminders via WhatsApp/Email.</li>
                  <li>To fulfill DIY blueprints and Done-For-You digital setups.</li>
                  <li>To respond to your specific inquiries and support requests.</li>
                </ul>

                <h3 className="text-base font-bold text-[#182A55] pt-2">
                  3. Non-Disclosure & Security
                </h3>
                <p>
                  We never sell, rent, or trade your institute data, student counts, or course materials to any third-party marketing brokers. All data is protected with industry-standard encryption.
                </p>

                <h3 className="text-base font-bold text-[#182A55] pt-2">
                  4. Contacting Our Data Officer
                </h3>
                <p>
                  If you wish to update or delete your submitted information, you can reach our support desk anytime at <a href={`mailto:${BRAND_CONFIG.supportEmail}`} className="text-[#147D68] font-bold underline">{BRAND_CONFIG.supportEmail}</a>.
                </p>
              </div>
            </div>
          )}

          {view === 'terms-conditions' && (
            <div className="space-y-6">
              <div className="border-b border-[#E2E0D8] pb-4">
                <div className="text-xs font-bold text-[#147D68] uppercase tracking-wider mb-1">
                  Legal Documentation
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-[#182A55]">
                  Terms & Conditions
                </h1>
                <p className="text-xs text-[#5F6B72] mt-1">
                  Last Updated: August 2026 • ScaleOX
                </p>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-[#5F6B72]">
                <p>
                  Welcome to <strong>ScaleOX</strong>. By using our website, participating in our masterclasses, or purchasing our expansion packages (DIY / Done-For-You), you agree to comply with the following terms:
                </p>

                <h3 className="text-base font-bold text-[#182A55] pt-2">
                  1. Scope of Services
                </h3>
                <p>
                  ScaleOX provides strategic frameworks, implementation blueprints, sales page architectures, and digital workflows designed to help offline training institutes expand their courses online. We do NOT grant educational degrees or provide accredited governmental affiliations unless stated by the respective institute.
                </p>

                <h3 className="text-base font-bold text-[#182A55] pt-2">
                  2. Honest Outcomes & Disclaimer
                </h3>
                <p>
                  Online student acquisition and batch enrollment depend on the institute's teaching quality, subject demand, faculty responsiveness, and consistent delivery. ScaleOX does NOT promise or guarantee artificial revenue numbers.
                </p>

                <h3 className="text-base font-bold text-[#182A55] pt-2">
                  3. Intellectual Property
                </h3>
                <p>
                  All proprietary templates, blueprints, and curriculum frameworks supplied by ScaleOX are licensed for use within your specific institute and may not be resold to third-party agency consultants.
                </p>
              </div>
            </div>
          )}

          {view === 'refund-policy' && (
            <div className="space-y-6">
              <div className="border-b border-[#E2E0D8] pb-4">
                <div className="text-xs font-bold text-[#147D68] uppercase tracking-wider mb-1">
                  Transparent Policy
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-[#182A55]">
                  Refund Policy
                </h1>
                <p className="text-xs text-[#5F6B72] mt-1">
                  Clear & Fair Terms for Institute Owners • ScaleOX
                </p>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-[#5F6B72]">
                <p>
                  We believe in 100% transparency. Our refund policies for each plan tier are structured as follows:
                </p>

                <div className="bg-[#FAF8F3] p-5 rounded-2xl border border-[#E2E0D8] space-y-2">
                  <h3 className="text-sm font-bold text-[#182A55]">
                    1. DIY Plans (₹5,999 / 6 Months & ₹9,999 / 1 Year)
                  </h3>
                  <p className="text-xs leading-relaxed text-[#5F6B72]">
                    Our DIY plans are non-refundable once purchased. Since the program provides immediate access to the complete training, resources, and implementation framework, all payments are considered final. We remain committed to providing the guidance and support needed to help you implement the system effectively.
                  </p>
                </div>

                <div className="bg-[#FAF8F3] p-5 rounded-2xl border border-[#E2E0D8] space-y-2">
                  <h3 className="text-sm font-bold text-[#182A55]">
                    2. Done-For-You Partnership (₹30,000 / 1 Year)
                  </h3>
                  <p className="text-xs leading-relaxed text-[#5F6B72]">
                    Our Done-For-You plan is non-refundable once onboarding begins. As this includes customized strategy, sales page development, technical integration, and dedicated support, resources are allocated specifically to your business. We remain committed to refining your offer and page structure and providing the required support for successful implementation.
                  </p>
                </div>

                <h3 className="text-base font-bold text-[#182A55] pt-2">
                  3. How to Request Assistance
                </h3>
                <p>
                  For any billing or policy inquiries, write directly to <a href={`mailto:${BRAND_CONFIG.supportEmail}`} className="text-[#147D68] font-bold underline">{BRAND_CONFIG.supportEmail}</a> with your invoice number.
                </p>
              </div>
            </div>
          )}

          {view === 'cookie-policy' && (
            <div className="space-y-6">
              <div className="border-b border-[#E2E0D8] pb-4">
                <div className="text-xs font-bold text-[#147D68] uppercase tracking-wider mb-1">
                  Technical Compliance
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-[#182A55]">
                  Cookie Policy
                </h1>
                <p className="text-xs text-[#5F6B72] mt-1">
                  Last Updated: August 2026 • ScaleOX
                </p>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-[#5F6B72]">
                <p>
                  Our website uses standard essential session cookies and performance telemetry to guarantee smooth navigation, remember calculator preferences, and optimize load speeds.
                </p>
                <h3 className="text-base font-bold text-[#182A55] pt-2">
                  Types of Cookies We Use
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li><strong>Essential Cookies:</strong> Required to keep interactive form submissions and page routing functional.</li>
                  <li><strong>Preference Cookies:</strong> Used to store your preferred calculator state and regional display options.</li>
                  <li><strong>Analytics:</strong> Anonymous aggregated metrics to help us enhance readability and eliminate friction.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
