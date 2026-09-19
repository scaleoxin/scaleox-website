import React, { useState } from 'react';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';
import { ActiveView } from '../types';

interface HeaderProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  onOpenStrategyCall: () => void;
  onOpenMasterclass: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  setActiveView,
  onOpenStrategyCall,
  onOpenMasterclass,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; view: ActiveView; id: string; path: string }[] = [
    { label: 'Home', view: 'home', id: 'nav-home', path: '/' },
    { label: 'Our Process', view: 'process', id: 'nav-process', path: '/process' },
    { label: 'Services', view: 'home', id: 'nav-services', path: '/services' },
    { label: 'Plans', view: 'plans', id: 'nav-plans', path: '/pricing' },
    { label: 'Results', view: 'results', id: 'nav-results', path: '/results' },
    { label: 'About', view: 'about', id: 'nav-about', path: '/about' },
    { label: 'Founder', view: 'founder', id: 'nav-founder', path: '/founder' },
    { label: 'Contact', view: 'contact', id: 'nav-contact', path: '/contact' },
  ];

  const handleNavClick = (view: ActiveView, path?: string) => {
    const target = path || ({ home: '/', plans: '/pricing', about: '/about', contact: '/contact', founder: '/founder', process: '/process', results: '/results' } as Record<string,string>)[view] || '/';
    if (window.location.pathname !== target) window.history.pushState({}, '', target);
    setActiveView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F4EC]/95 backdrop-blur-md border-b border-[#E2E0D8] transition-all">
      {/* Top Value Banner */}
      <div className="bg-[#182A55] text-white text-[12px] py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#147D68] animate-pulse"></span>
        <span className="hidden sm:inline">आपका Institute एक जगह हो सकता है — </span>
        <span className="text-[#E8C8B7] font-semibold">आपका Course वहाँ तक सीमित होना जरूरी नहीं है.</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            id="brand-logo-btn"
            href="/"
            onClick={(e) => { e.preventDefault(); handleNavClick('home', '/'); }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
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
              <div className="text-xl font-black tracking-tight text-[#182A55] flex items-center gap-1">
                SCALEOX
              </div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-[#147D68] -mt-1">
                Education Business Expansion
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const isActive = item.path ? window.location.pathname === item.path : activeView === item.view;
              return (
                <a
                  key={item.id}
                  id={item.id}
                  href={item.path}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.view, item.path); }}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#182A55] bg-[#E2E0D8]/60 font-bold'
                      : 'text-[#5F6B72] hover:text-[#182A55] hover:bg-[#FAF8F3]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="header-strategy-btn"
              onClick={onOpenStrategyCall}
              className="text-xs font-bold text-white bg-[#182A55] hover:bg-[#0F1C3D] py-2.5 px-4.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 cta-btn-shadow cta-pulse-btn"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E8C8B7]" />
              <span>BOOK A 1:1 STRATEGY CALL</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              id="mobile-quick-call-btn"
              onClick={onOpenStrategyCall}
              className="text-xs font-bold text-white bg-[#182A55] py-2 px-3 rounded-lg flex items-center gap-1 cta-btn-shadow cta-pulse-btn"
            >
              <span>Strategy Call</span>
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#182A55] hover:bg-[#FAF8F3] border border-[#E2E0D8] cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-[#E2E0D8] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-fade-in">
          <div className="space-y-1">
            {navLinks.map((item) => {
              const isActive = item.path ? window.location.pathname === item.path : activeView === item.view;
              return (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.view, item.path); }}
                  className={`block w-full text-left px-4 py-3 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#182A55] bg-[#FAF8F3] font-bold border-l-4 border-[#147D68]'
                      : 'text-[#5F6B72] hover:text-[#182A55] hover:bg-[#FAF8F3]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E2E0D8] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStrategyCall();
              }}
              className="w-full bg-[#182A55] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer cta-btn-shadow cta-pulse-btn"
            >
              <Calendar className="w-4 h-4 text-[#E8C8B7]" />
              <span>BOOK A 1:1 STRATEGY CALL</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
