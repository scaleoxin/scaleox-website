import React, { useState } from 'react';
import {
  Building,
  Globe,
  Heart,
  ShieldCheck,
  Target,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  UserCheck,
  Quote,
  Video,
  Calendar,
  Award,
  TrendingUp,
  BookOpen
} from 'lucide-react';

interface AboutPageProps {
  onOpenStrategyCall: () => void;
  onOpenMasterclass: () => void;
}

const PHOTO_SOURCES = [
  '/shekh-meraj.jpg',
  '/WhatsApp Image 2026-09-08 at 10.16.33 PM.jpeg',
  '/founder-shekh-meraj.jpg',
];

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenStrategyCall,
  onOpenMasterclass,
}) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photoCandidate = PHOTO_SOURCES[photoIndex] || '/shekh-meraj.jpg';

  return (
    <div className="py-12 md:py-20 bg-[#F7F4EC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#147D68] uppercase tracking-wider bg-[#DDEFE9] px-3.5 py-1 rounded-full">
            <Building className="w-3.5 h-3.5" />
            <span>Our Mission & Philosophy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#182A55] tracking-tight">
            About ScaleOX
          </h1>

          <div className="text-sm font-bold text-[#147D68] uppercase tracking-wider">
            Education Business Expansion
          </div>
        </div>

        {/* The Human Story Card */}
        <div className="bg-white border-2 border-[#E2E0D8] rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#182A55] leading-snug">
            ScaleOX एक simple problem को हल करने के लिए बना:
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#17202A] leading-relaxed font-normal">
            <p>
              भारत भर के हज़ारों education business owners ने पिछले 5 से 15 सालों की कड़ी मेहनत से एक बेहतरीन offline institute, मजबूत faculty और एक ठोस local reputation बनाई है.
            </p>
            <p className="text-[#5F6B72]">
              <strong>BUT उनकी student reach अभी भी उनके Local Area (7 से 15 किलोमीटर) तक काफी हद तक सीमित रहती है.</strong> 30 या 50 किलोमीटर दूर रहने वाला कोई भी इच्छुक विद्यार्थी दैनिक यात्रा की थकान के कारण उनके क्लासरूम तक नहीं पहुँच पाता.
            </p>
            <p className="font-semibold text-[#182A55] bg-[#FAF8F3] p-4 rounded-2xl border border-[#E2E0D8]">
              ScaleOX का पूरा focus इसी gap को solve करने में है: आपके existing offline course को बिना किसी जटिल तकनीक के online expand करना, ताकि आप अपने शहर के साथ-साथ पूरे भारत के विद्यार्थियों तक पहुँच सकें.
            </p>
          </div>
        </div>

        {/* 4 Core Pillars of ScaleOX Beliefs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#E2E0D8] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#DDEFE9] text-[#147D68] flex items-center justify-center font-bold">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#182A55]">
              1. Offline is Not Dead
            </h3>
            <p className="text-xs sm:text-sm text-[#5F6B72] leading-relaxed">
              We never tell institute owners to shut down their physical classrooms. Your offline presence is your strongest proof of real teaching experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E2E0D8] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#DDEFE9] text-[#147D68] flex items-center justify-center font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#182A55]">
              2. Distance Should Not Limit Teaching
            </h3>
            <p className="text-xs sm:text-sm text-[#5F6B72] leading-relaxed">
              A dedicated trainer in Indore, Meerut, or Nagpur has valuable knowledge that students in smaller towns or other states would happily pay to learn.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E2E0D8] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#DDEFE9] text-[#147D68] flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#182A55]">
              3. Practical Systems Over Jargon
            </h3>
            <p className="text-xs sm:text-sm text-[#5F6B72] leading-relaxed">
              You do not need heavy software engineering. You need a clear course offer, a high-trust page, simple student communication, and live teaching tools.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E2E0D8] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#DDEFE9] text-[#147D68] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#182A55]">
              4. Honest Partnerships
            </h3>
            <p className="text-xs sm:text-sm text-[#5F6B72] leading-relaxed">
              We provide transparent plans with zero false revenue guarantees. We measure success by the real students who enroll and learn from your faculty.
            </p>
          </div>
        </div>

        {/* Final Statement & Call to Action */}
        <div className="bg-[#182A55] text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 shadow-md">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            "आपका Institute एक जगह हो सकता है. <br />
            आपका Course वहाँ तक सीमित होना जरूरी नहीं है."
          </h3>
          <p className="text-sm sm:text-base text-[#E2E0D8] max-w-xl mx-auto">
            Let's discuss whether taking your existing offline courses online is practical for your business stage.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenStrategyCall}
              className="bg-[#147D68] hover:bg-[#116956] text-white font-bold py-3.5 px-6 rounded-xl text-xs flex items-center gap-2 cursor-pointer cta-btn-shadow cta-pulse-btn"
            >
              <span>Book a 1:1 Strategy Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ==================================================
            FOUNDER & MENTOR SECTION: SHEKH MERAJ
            ================================================== */}
        <div className="pt-10 border-t-2 border-[#E2E0D8] space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#147D68] uppercase tracking-wider bg-[#DDEFE9] px-3.5 py-1 rounded-full">
              <UserCheck className="w-3.5 h-3.5" />
              <span>The Person Behind ScaleOX</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#182A55] tracking-tight">
              Meet Shekh Meraj
            </h2>

            <div className="text-base sm:text-lg font-bold text-[#147D68]">
              Founder & CEO, Education Business Growth Mentor
            </div>

            <p className="text-sm sm:text-base text-[#5F6B72] font-medium max-w-2xl mx-auto">
              Helping Offline Institute Owners Build, Launch & Grow Their Online Education Business
            </p>
          </div>

          {/* Founder Profile Grid: Photo + Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* Left Column: Fixed-size Founder Photo + Profile Info + Initial About Content */}
            <div className="bg-white border-2 border-[#E2E0D8] rounded-3xl p-5 sm:p-6 shadow-sm space-y-5">
              {/* Prominent Founder Profile Photograph occupying natural card width */}
              <div className="w-full aspect-[4/5] max-h-[460px] rounded-2xl overflow-hidden relative bg-[#182A55] shadow-xs">
                <img
                  src={photoCandidate}
                  alt="Shekh Meraj — Founder & CEO & Education Business Growth Mentor"
                  className="w-full h-full object-cover object-top"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  referrerPolicy="no-referrer"
                  onError={() => {
                    if (photoIndex < PHOTO_SOURCES.length - 1) {
                      setPhotoIndex(photoIndex + 1);
                    }
                  }}
                />
              </div>

              {/* Profile Information directly below photo */}
              <div className="space-y-1 text-center pt-1">
                <div className="text-xl sm:text-2xl font-black text-[#182A55]">
                  Shekh Meraj
                </div>
                <div className="text-xs font-bold text-[#147D68] uppercase tracking-wider">
                  FOUNDER & CEO, SCALEOX
                </div>
                <div className="text-xs sm:text-sm text-[#5F6B72] font-medium">
                  Education Business Growth Mentor
                </div>
              </div>

              {/* Distributed Existing About Content */}
              <div className="pt-4 border-t border-[#E2E0D8] space-y-4 text-base sm:text-lg text-[#17202A] leading-relaxed font-normal">
                <p>
                  For the last 7+ years, I have been closely involved in teaching, mentoring and helping people create better opportunities through education.
                </p>
                <p>
                  Over the years, I noticed a common challenge among many computer center owners, skill training institute owners, coaching and training institute owners, and other offline education entrepreneurs.
                </p>
              </div>
            </div>

            {/* Right Column: Remaining Existing About Content */}
            <div className="bg-white border-2 border-[#E2E0D8] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="space-y-4 text-base sm:text-lg text-[#17202A] leading-relaxed font-normal">
                <div className="bg-[#FAF8F3] border border-[#E2E0D8] rounded-2xl p-5 space-y-3">
                  <p className="font-bold text-[#182A55] text-sm uppercase tracking-wider">
                    They already had something extremely valuable:
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['Knowledge', 'Teaching experience', 'Courses', 'Students', 'Trust within their local market'].map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 bg-white border border-[#E2E0D8] text-xs sm:text-sm font-semibold text-[#182A55] px-3 py-1.5 rounded-xl shadow-2xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#147D68] shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-[#5F6B72]">
                  <strong>But their growth was often limited by one thing — geography.</strong> Their institute could serve only the students who could physically reach their center.
                </p>

                <p>
                  That is where my focus evolved.
                </p>

                <p>
                  I started helping education business owners understand how they could take the expertise they had already built offline and strategically expand it into the online world.
                </p>

                <p className="font-semibold text-[#182A55]">
                  The goal was never to replace their offline institute.
                </p>

                <p>
                  The goal was to help them build a stronger business by combining their existing offline strength with the reach and scalability of online education.
                </p>

                <p className="text-sm sm:text-base text-[#5F6B72]">
                  Through live Zoom consultations, one-to-one strategy discussions and practical business guidance, I have worked closely with education entrepreneurs to help them think beyond their local market and explore how their institute can grow online.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Authority Highlights Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-[#E2E0D8] text-center space-y-2 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-[#182A55]">
                7+ Years
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#5F6B72] leading-snug">
                Teaching & Education Experience
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-[#E2E0D8] text-center space-y-2 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-[#182A55]">
                1:1
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#5F6B72] leading-snug">
                Personal Strategy Consultations
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-[#E2E0D8] text-center space-y-2 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-[#182A55]">
                LIVE
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#5F6B72] leading-snug">
                Zoom Mentoring & Business Guidance
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-[#E2E0D8] text-center space-y-2 shadow-2xs">
              <div className="text-lg sm:text-xl font-black text-[#147D68] pt-1">
                OFFLINE → ONLINE
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#5F6B72] leading-snug">
                Education Business Expansion
              </div>
            </div>
          </div>

          {/* Personal Founder Statement */}
          <div className="bg-[#FAF8F3] border-2 border-[#E2E0D8] rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="flex items-start gap-4">
              <Quote className="w-10 h-10 text-[#147D68]/30 shrink-0 mt-1 hidden sm:block" />
              <div className="space-y-4 flex-1">
                <blockquote className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#182A55] leading-snug">
                  "मैं आपको यह नहीं बताना चाहता कि आपका offline institute पुराना model है. <br />
                  मैं आपको यह दिखाना चाहता हूँ कि आपके offline experience को online opportunity में कैसे convert किया जा सकता है."
                </blockquote>
                <div className="pt-2 flex items-center justify-between border-t border-[#E2E0D8]/80 text-xs sm:text-sm">
                  <span className="font-extrabold text-[#182A55]">Shekh Meraj</span>
                  <span className="font-medium text-[#5F6B72]">Founder & CEO, ScaleOX</span>
                </div>
              </div>
            </div>
          </div>

          {/* My Belief Section */}
          <div className="bg-white border-2 border-[#E2E0D8] rounded-3xl p-6 sm:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#147D68] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Core Philosophy</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#182A55]">
              My Belief
            </h3>

            <div className="space-y-4 text-base sm:text-lg text-[#17202A] leading-relaxed font-normal">
              <p>
                I believe that most offline education businesses do not need to completely reinvent themselves to grow online.
              </p>
              <p>
                They already have the most valuable assets — knowledge, teaching experience, courses and trust.
              </p>
              <p>
                What they need is the right strategy to package that expertise, position it correctly and make it accessible to students beyond their local geography.
              </p>
              <p className="font-bold text-[#147D68]">
                That is the problem ScaleOX is built to solve.
              </p>
            </div>
          </div>

          {/* Authority + Curiosity Close & CTA */}
          <div className="bg-[#182A55] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-md">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white max-w-2xl mx-auto leading-snug">
              "Your institute may already have everything it needs to grow online. <br />
              The real question is whether you have the right system to make that expansion happen."
            </h3>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenStrategyCall}
                className="bg-[#147D68] hover:bg-[#116956] text-white font-extrabold py-4 px-8 rounded-xl text-sm sm:text-base flex items-center gap-2.5 cursor-pointer cta-btn-shadow transition-all cta-pulse-btn"
              >
                <span>Talk to Shekh Meraj About Your Institute</span>
                <ArrowRight className="w-4 h-4 text-[#E8C8B7]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
