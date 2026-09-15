import React from 'react';
import { ActiveView } from '../types';
import { BRAND_CONFIG } from '../data/content';
import { Mail, MapPin, MessageSquare, Calendar } from 'lucide-react';

interface FooterProps {
  setActiveView: (view: ActiveView) => void;
  onOpenStrategyCall: () => void;
  onOpenMasterclass: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveView,
  onOpenStrategyCall,
  onOpenMasterclass,
}) => {
  const handleNav = (view: ActiveView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F1C3D] text-[#E2E0D8] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-105 transition-transform">
                <img
                  src="/ChatGPT Image Sep 12, 2026, 09_04_42 PM.png"
                  alt="ScaleOX Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/scaleox-logo.png';
                  }}
                />
              </div>
              <div>
                <div className="text-xl font-black tracking-tight text-white">
                  SCALEOX
                </div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#DDEFE9] -mt-1">
                  Education Business Expansion
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E2E0D8]/80 leading-relaxed max-w-sm">
              "{BRAND_CONFIG.statementHindi}"
            </p>

            <div className="text-xs text-[#147D68] font-bold">
              Helping established computer and skill-training institutes reach students beyond their Local Area across India.
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#E2E0D8]/80">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('process')} className="hover:text-white transition-colors cursor-pointer">
                  Our 5-Step Process
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('plans')} className="hover:text-white transition-colors cursor-pointer">
                  Plans (DIY & Done-For-You)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('results')} className="hover:text-white transition-colors cursor-pointer">
                  Real Results & Stories
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  About ScaleOX
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Engagement Channels (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Actions
            </div>
            <div className="space-y-2.5">
              <button
                onClick={onOpenStrategyCall}
                className="w-full text-left bg-white/10 hover:bg-white/20 p-2.5 rounded-xl text-xs font-semibold text-white flex items-center justify-between cursor-pointer transition-colors cta-btn-shadow cta-zoom-btn"
              >
                <span>Strategy Call</span>
                <Calendar className="w-3.5 h-3.5 text-[#E8C8B7]" />
              </button>
            </div>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Connect With Us
            </div>
            <div className="space-y-2 text-xs text-[#E2E0D8]/80">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#147D68]" />
                <a href={`mailto:${BRAND_CONFIG.supportEmail}`} className="hover:underline">
                  {BRAND_CONFIG.supportEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#147D68]" />
                <a href={BRAND_CONFIG.whatsappUrl} target="_blank" rel="noreferrer" className="hover:underline">
                  {BRAND_CONFIG.supportPhone} (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B8734A]" />
                <span>{BRAND_CONFIG.addressLine}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#E2E0D8]/60">
          <div>
            © {new Date().getFullYear()} ScaleOX. All rights reserved. Built for established education & skill-training institutes.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => handleNav('privacy-policy')} className="hover:text-white underline cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => handleNav('terms-conditions')} className="hover:text-white underline cursor-pointer">
              Terms & Conditions
            </button>
            <button onClick={() => handleNav('refund-policy')} className="hover:text-white underline cursor-pointer">
              Refund Policy
            </button>
            <button onClick={() => handleNav('cookie-policy')} className="hover:text-white underline cursor-pointer">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
