import React, { useState, useEffect } from 'react';
import { ActiveView, PlanTier } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { OpportunitySection } from './components/OpportunitySection';
import { SystemPillarsSection } from './components/SystemPillarsSection';
import { WhoItIsForSection } from './components/WhoItIsForSection';
import { PlansSection } from './components/PlansSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { MasterclassPage } from './components/MasterclassPage';
import { StrategyCallPage } from './components/StrategyCallPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { LegalPages } from './components/LegalPages';
import { Footer } from './components/Footer';
import { StrategyCallModal } from './components/StrategyCallModal';
import { MasterclassModal } from './components/MasterclassModal';
import { BRAND_CONFIG } from './data/content';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [strategyModalOpen, setStrategyModalOpen] = useState<boolean>(false);
  const [masterclassModalOpen, setMasterclassModalOpen] = useState<boolean>(false);
  const [selectedPlanForAction, setSelectedPlanForAction] = useState<PlanTier | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const handleOpenStrategyCall = () => {
    window.open(BRAND_CONFIG.strategyCallUrl, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectPlan = (plan: PlanTier) => {
    setSelectedPlanForAction(plan);
    if (plan.paymentUrl) {
      window.open(plan.paymentUrl, '_blank', 'noopener,noreferrer');
    } else if (plan.model === 'DONE FOR YOU') {
      handleOpenStrategyCall();
    } else {
      setStrategyModalOpen(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EC] text-[#17202A] font-sans antialiased selection:bg-[#DDEFE9] selection:text-[#147D68]">
      {/* Header */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenStrategyCall={handleOpenStrategyCall}
        onOpenMasterclass={() => setMasterclassModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="grow">
        {activeView === 'home' && (
          <>
            <HeroSection
              onOpenStrategyCall={handleOpenStrategyCall}
              onOpenMasterclass={() => setMasterclassModalOpen(true)}
              onNavigateToProcess={() => setActiveView('process')}
            />
            <ProblemSection onOpenStrategyCall={handleOpenStrategyCall} />
            <OpportunitySection
              onOpenStrategyCall={handleOpenStrategyCall}
              onOpenMasterclass={() => setMasterclassModalOpen(true)}
            />
            <SystemPillarsSection onOpenStrategyCall={handleOpenStrategyCall} />
            <WhoItIsForSection onOpenStrategyCall={handleOpenStrategyCall} />
            <PlansSection
              onSelectPlan={handleSelectPlan}
              onOpenStrategyCall={handleOpenStrategyCall}
            />
            <FAQSection onOpenStrategyCall={handleOpenStrategyCall} />
            <FinalCTASection
              onOpenStrategyCall={handleOpenStrategyCall}
              onOpenMasterclass={() => setMasterclassModalOpen(true)}
            />
          </>
        )}

        {activeView === 'process' && (
          <div className="space-y-12">
            <SystemPillarsSection onOpenStrategyCall={handleOpenStrategyCall} />
            <FinalCTASection
              onOpenStrategyCall={handleOpenStrategyCall}
              onOpenMasterclass={() => setMasterclassModalOpen(true)}
            />
          </div>
        )}

        {activeView === 'system' && (
          <div className="space-y-12">
            <SystemPillarsSection onOpenStrategyCall={handleOpenStrategyCall} />
            <FinalCTASection
              onOpenStrategyCall={handleOpenStrategyCall}
              onOpenMasterclass={() => setMasterclassModalOpen(true)}
            />
          </div>
        )}

        {activeView === 'who-its-for' && (
          <div className="space-y-12">
            <WhoItIsForSection onOpenStrategyCall={handleOpenStrategyCall} />
            <FinalCTASection
              onOpenStrategyCall={handleOpenStrategyCall}
              onOpenMasterclass={() => setMasterclassModalOpen(true)}
            />
          </div>
        )}

        {activeView === 'plans' && (
          <div className="space-y-12">
            <PlansSection
              onSelectPlan={handleSelectPlan}
              onOpenStrategyCall={handleOpenStrategyCall}
            />
            <FAQSection onOpenStrategyCall={handleOpenStrategyCall} />
            <FinalCTASection
              onOpenStrategyCall={handleOpenStrategyCall}
              onOpenMasterclass={() => setMasterclassModalOpen(true)}
            />
          </div>
        )}

        {activeView === 'results' && (
          <div className="space-y-12">
            <WhoItIsForSection onOpenStrategyCall={handleOpenStrategyCall} />
            <PlansSection
              onSelectPlan={handleSelectPlan}
              onOpenStrategyCall={handleOpenStrategyCall}
            />
            <FinalCTASection
              onOpenStrategyCall={handleOpenStrategyCall}
              onOpenMasterclass={() => setMasterclassModalOpen(true)}
            />
          </div>
        )}

        {activeView === 'about' && (
          <AboutPage
            onOpenStrategyCall={handleOpenStrategyCall}
            onOpenMasterclass={() => setMasterclassModalOpen(true)}
          />
        )}

        {activeView === 'contact' && (
          <ContactPage onOpenStrategyCall={handleOpenStrategyCall} />
        )}

        {activeView === 'masterclass' && (
          <MasterclassPage onOpenStrategyCall={handleOpenStrategyCall} />
        )}

        {activeView === 'strategy-call' && (
          <StrategyCallPage onOpenMasterclass={() => setMasterclassModalOpen(true)} />
        )}

        {(activeView === 'privacy-policy' ||
          activeView === 'terms-conditions' ||
          activeView === 'refund-policy' ||
          activeView === 'cookie-policy') && (
          <LegalPages
            view={activeView}
            onBackToHome={() => {
              setActiveView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {/* WhatsApp Fast Button */}
        <a
          href={BRAND_CONFIG.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-[#147D68] hover:bg-[#116956] text-white p-3.5 rounded-full shadow-lg transition-all flex items-center gap-2 group cursor-pointer whatsapp-zoom-btn"
          aria-label="Direct WhatsApp Inquiry"
        >
          <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold px-0 group-hover:px-1">
            WhatsApp ScaleOX Team
          </span>
        </a>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-white/90 backdrop-blur-xs text-[#182A55] hover:bg-[#182A55] hover:text-white p-2.5 rounded-full border border-[#E2E0D8] shadow-md transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Strategy Call Modal */}
      <StrategyCallModal
        isOpen={strategyModalOpen}
        onClose={() => setStrategyModalOpen(false)}
      />

      {/* Masterclass Modal */}
      <MasterclassModal
        isOpen={masterclassModalOpen}
        onClose={() => setMasterclassModalOpen(false)}
      />

      {/* Footer */}
      <Footer
        setActiveView={setActiveView}
        onOpenStrategyCall={handleOpenStrategyCall}
        onOpenMasterclass={() => setMasterclassModalOpen(true)}
      />
    </div>
  );
}
