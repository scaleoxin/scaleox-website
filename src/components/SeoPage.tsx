import React from 'react';
import { ArrowRight, CheckCircle2, MapPin, Mail, Phone, UserRound, Globe2 } from 'lucide-react';
import { BRAND_CONFIG, PLANS_DATA, WHO_ITS_FOR_CATEGORIES } from '../data/content';

export const SEO_ROUTES = ['/about', '/founder', '/services', '/pricing', '/contact'];

export const ROUTE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'ScaleOX — Education Business Expansion | Take Your Offline Course Online',
    description: 'ScaleOX helps established offline computer, IT, skill-training and education institutes expand their existing courses online to reach students across India.',
  },
  '/process': { title: 'ScaleOX Process | Online Course Expansion System', description: 'See the ScaleOX process for turning an established offline course into an online education offer.' },
  '/system': { title: 'ScaleOX System | Course, Offer, Sales Page and Student Journey', description: 'Explore the ScaleOX system for course packaging, offers, sales pages, student journeys, follow-up and online delivery.' },
  '/who-its-for': { title: 'Who ScaleOX Is For | Computer, IT and Skill Training Institutes', description: 'See which offline computer, IT, accounting, digital skills, CAD and vocational training institutes ScaleOX supports.' },
  '/results': { title: 'ScaleOX Results | Online Expansion Examples', description: 'Explore ScaleOX examples and outcomes for education and skill-training institutes expanding existing courses online.' },
  '/masterclass': { title: 'ScaleOX Masterclass | Online Course Expansion', description: 'Learn how established offline education institutes can take existing courses online with ScaleOX.' },
  '/strategy-call': { title: 'ScaleOX Strategy Call | Education Business Growth', description: 'Book a ScaleOX strategy discussion about taking your existing offline education course online.' },
  '/privacy-policy': { title: 'ScaleOX Privacy Policy', description: 'ScaleOX privacy policy and information handling details.' },
  '/terms-conditions': { title: 'ScaleOX Terms & Conditions', description: 'ScaleOX terms and conditions.' },
  '/refund-policy': { title: 'ScaleOX Refund Policy', description: 'ScaleOX refund policy.' },
  '/cookie-policy': { title: 'ScaleOX Cookie Policy', description: 'ScaleOX cookie policy.' },
  '/about': {
    title: 'About ScaleOX | Education Business Expansion for Offline Institutes',
    description: 'Learn about ScaleOX, its mission and approach to helping established offline computer, IT and skill-training institutes expand their existing courses online.',
  },
  '/founder': {
    title: 'Shekh Meraj — Founder & CEO of ScaleOX | Education Business Growth Mentor',
    description: 'Meet Shekh Meraj, Founder & CEO of ScaleOX and Education Business Growth Mentor helping offline education institutes expand their courses online.',
  },
  '/services': {
    title: 'ScaleOX Services | Online Course Expansion for Education Institutes',
    description: 'Explore ScaleOX services for computer training, IT and software training, digital skills, accounting and Tally, CAD and design, and vocational training institutes.',
  },
  '/pricing': {
    title: 'ScaleOX Pricing | DIY and Done-For-You Plans',
    description: 'View ScaleOX pricing plans for offline education institute owners who want to package, launch and expand existing courses online.',
  },
  '/contact': {
    title: 'Contact ScaleOX | Contact Us & Book a Strategy Call',
    description: 'Contact ScaleOX for education business expansion, online course setup, strategy discussions, and support for offline computer and skill-training institutes.',
  },
};

export function applyRouteMeta(pathname: string) {
  let meta = ROUTE_META[pathname] || ROUTE_META['/'];
  if (pathname.startsWith('/services/')) {
    const category = categoryForSlug(pathname.split('/').filter(Boolean)[1] || '');
    if (category) meta = { title: `ScaleOX ${category.title} Services | Online Course Expansion`, description: `ScaleOX helps ${category.title.toLowerCase()} owners package and expand their existing courses online to reach students beyond their Local Area.` };
  }
  document.title = meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', meta.description);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', `https://scaleox.in${pathname === '/' ? '/' : pathname}`);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogTitle) ogTitle.setAttribute('content', meta.title);
  if (ogDescription) ogDescription.setAttribute('content', meta.description);
  if (ogUrl) ogUrl.setAttribute('content', `https://scaleox.in${pathname === '/' ? '/' : pathname}`);
}

interface PageProps {
  onOpenStrategyCall: () => void;
  onOpenMasterclass?: () => void;
}

const PageHeader = ({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) => (
  <div className="text-center space-y-4 max-w-4xl mx-auto">
    <div className="inline-flex items-center gap-2 text-xs font-bold text-[#147D68] uppercase tracking-wider bg-[#DDEFE9] px-4 py-2 rounded-full">
      <Globe2 className="w-4 h-4" /> {eyebrow}
    </div>
    <h1 className="text-4xl sm:text-5xl font-black text-[#182A55] tracking-tight">{title}</h1>
    <p className="text-base sm:text-lg text-[#5F6B72] leading-relaxed">{description}</p>
  </div>
);

export const FounderSEOPage: React.FC<PageProps> = ({ onOpenStrategyCall }) => (
  <div className="py-14 md:py-20 bg-[#F7F4EC]">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <PageHeader eyebrow="ScaleOX Founder" title="Shekh Meraj — Founder & CEO of ScaleOX" description="Shekh Meraj is the Founder & CEO of ScaleOX and an Education Business Growth Mentor focused on helping established offline education and skill-training institutes expand their existing courses online." />
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="bg-white border-2 border-[#E2E0D8] rounded-3xl p-5 shadow-sm">
          <img src="/shekh-meraj.jpg" alt="Shekh Meraj — Founder & CEO of ScaleOX" className="w-full aspect-[4/5] object-cover object-top rounded-2xl" />
          <div className="text-center pt-5">
            <h2 className="text-2xl font-black text-[#182A55]">Shekh Meraj</h2>
            <p className="text-sm font-bold text-[#147D68] mt-1">Founder & CEO, ScaleOX</p>
            <p className="text-sm text-[#5F6B72] mt-1">Education Business Growth Mentor</p>
          </div>
        </div>
        <div className="bg-white border-2 border-[#E2E0D8] rounded-3xl p-7 sm:p-9 shadow-sm space-y-5 text-[#17202A] leading-relaxed">
          <h2 className="text-2xl font-extrabold text-[#182A55]">About Shekh Meraj</h2>
          <p>For the last 7+ years, Shekh Meraj has been closely involved in teaching, mentoring and helping people create better opportunities through education.</p>
          <p>Through ScaleOX, he focuses on helping offline institute owners take their proven courses beyond their Local Area through practical online course packaging, sales systems and student delivery workflows.</p>
          <p className="font-semibold bg-[#FAF8F3] border border-[#E2E0D8] rounded-2xl p-4">Founder & CEO of ScaleOX — Education Business Growth Mentor.</p>
          <button onClick={onOpenStrategyCall} className="bg-[#182A55] text-white font-bold py-3.5 px-6 rounded-xl flex items-center gap-2 cta-btn-shadow cta-pulse-btn">Book a Strategy Call <ArrowRight className="w-4 h-4" /></button>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context':'https://schema.org','@type':'ProfilePage','mainEntity':{'@type':'Person','@id':'https://scaleox.in/#shekh-meraj','name':'Shekh Meraj','jobTitle':'Founder & CEO, Education Business Growth Mentor','image':'https://scaleox.in/shekh-meraj.jpg','worksFor':{'@id':'https://scaleox.in/#organization'},'url':'https://scaleox.in/founder','sameAs':[BRAND_CONFIG.socialLinks.instagram, BRAND_CONFIG.socialLinks.facebook, BRAND_CONFIG.socialLinks.linkedin, BRAND_CONFIG.socialLinks.youtube]}
      })}} />
    </div>
  </div>
);

export const ServicesSEOPage: React.FC<PageProps> = ({ onOpenStrategyCall }) => (
  <div className="py-14 md:py-20 bg-[#F7F4EC]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <PageHeader eyebrow="ScaleOX Services" title="ScaleOX Services for Education Institutes" description="ScaleOX helps established offline education businesses package and expand their existing courses online, build student enrollment systems and reach learners beyond their Local Area." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHO_ITS_FOR_CATEGORIES.map((item) => (
          <article key={item.title} className="bg-white border border-[#E2E0D8] rounded-2xl p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-extrabold text-[#182A55]">{item.title}</h2>
            <p className="text-sm text-[#147D68] font-semibold">Courses: {item.examples}</p>
            <p className="text-sm text-[#5F6B72] leading-relaxed">{item.hindiText}</p>
            <a href={`/services/${slugFor(item.title)}`} className="inline-flex items-center gap-1 text-sm font-bold text-[#182A55]">View service <ArrowRight className="w-4 h-4" /></a>
          </article>
        ))}
      </div>
      <div className="bg-[#182A55] text-white rounded-3xl p-8 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-black">Want to expand your existing course online?</h2>
        <p className="text-sm text-[#E2E0D8]">Discuss your institute, course and online expansion plan with ScaleOX.</p>
        <button onClick={onOpenStrategyCall} className="bg-[#147D68] text-white font-bold py-3.5 px-6 rounded-xl cta-btn-shadow cta-pulse-btn">Book a Strategy Call</button>
      </div>
    </div>
  </div>
);

export const ServiceDetailPage: React.FC<PageProps & { category: typeof WHO_ITS_FOR_CATEGORIES[number] }> = ({ onOpenStrategyCall, category }) => (
  <div className="py-14 md:py-20 bg-[#F7F4EC]">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <PageHeader eyebrow="ScaleOX Service" title={`ScaleOX for ${category.title}`} description={`Online expansion support for ${category.title.toLowerCase()} owners who want to take proven courses beyond their Local Area.`} />
      <article className="bg-white border-2 border-[#E2E0D8] rounded-3xl p-7 sm:p-10 shadow-sm space-y-7">
        <section><h2 className="text-2xl font-extrabold text-[#182A55] mb-3">Courses this service can support</h2><p className="text-[#5F6B72] leading-relaxed">{category.examples}</p></section>
        <section><h2 className="text-2xl font-extrabold text-[#182A55] mb-3">How ScaleOX helps</h2><div className="grid sm:grid-cols-2 gap-4">{['Course packaging and online delivery planning','Clear offer and sales-page structure','Student enquiry and follow-up workflow','Online live/recorded delivery setup'].map(x=><div key={x} className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-[#147D68] shrink-0 mt-0.5"/><span className="text-sm text-[#5F6B72]">{x}</span></div>)}</div></section>
        <section className="bg-[#FAF8F3] rounded-2xl p-5"><h2 className="text-xl font-extrabold text-[#182A55] mb-2">Who this is for</h2><p className="text-sm text-[#5F6B72]">{category.hindiText} ScaleOX is designed for established institutes that already teach practical, structured courses and want to reach students outside their Local Area.</p></section>
        <button onClick={onOpenStrategyCall} className="bg-[#182A55] text-white font-bold py-3.5 px-6 rounded-xl flex items-center gap-2 cta-btn-shadow cta-pulse-btn">Discuss Your Course <ArrowRight className="w-4 h-4" /></button>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          '@context':'https://schema.org','@type':'Service','name':`ScaleOX ${category.title} Online Course Expansion Service`,'provider':{'@id':'https://scaleox.in/#organization'},'serviceType':'Education Business Expansion','areaServed':{'@type':'Country','name':'India'},'url':`https://scaleox.in/services/${slugFor(category.title)}`
        })}} />
      </article>
    </div>
  </div>
);

export const PricingSEOPage: React.FC<PageProps> = ({ onOpenStrategyCall }) => (
  <div className="py-14 md:py-20 bg-[#F7F4EC]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <PageHeader eyebrow="ScaleOX Pricing" title="ScaleOX Pricing Plans" description="Choose a ScaleOX plan based on how much support you want while taking your existing offline education course online." />
      <div className="grid lg:grid-cols-3 gap-6">{PLANS_DATA.map(plan=>(
        <article key={plan.id} className={`bg-white rounded-3xl border-2 p-7 shadow-sm ${plan.highlight ? 'border-[#147D68]' : 'border-[#E2E0D8]'}`}>
          {plan.badge && <div className="text-[11px] font-black text-[#147D68] uppercase tracking-wider mb-3">{plan.badge}</div>}
          <h2 className="text-2xl font-black text-[#182A55]">{plan.model} — {plan.duration}</h2>
          <div className="text-3xl font-black text-[#147D68] mt-3">{plan.price}</div>
          <p className="text-sm font-semibold text-[#182A55] mt-3">{plan.headline}</p>
          <p className="text-sm text-[#5F6B72] leading-relaxed mt-3">{plan.description}</p>
          <ul className="space-y-3 mt-6">{plan.features.map(f=><li key={f} className="flex gap-2 text-sm text-[#5F6B72]"><CheckCircle2 className="w-4 h-4 text-[#147D68] shrink-0"/>{f}</li>)}</ul>
          <button onClick={onOpenStrategyCall} className="w-full mt-7 bg-[#182A55] text-white font-bold py-3 rounded-xl cta-btn-shadow cta-pulse-btn">{plan.ctaText}</button>
        </article>
      ))}</div>
    </div>
  </div>
);

export const ContactSEOPage: React.FC<PageProps> = ({ onOpenStrategyCall }) => (
  <div className="py-14 md:py-20 bg-[#F7F4EC]">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <PageHeader eyebrow="ScaleOX Contact" title="Contact ScaleOX" description="Contact ScaleOX for online course expansion, education business growth, strategy discussions and support for established offline training institutes." />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-[#E2E0D8] rounded-3xl p-7 space-y-5">
          <h2 className="text-2xl font-black text-[#182A55]">ScaleOX Contact Information</h2>
          <a href={`mailto:${BRAND_CONFIG.supportEmail}`} className="flex gap-3 items-start"><Mail className="w-5 h-5 text-[#147D68]"/><span><strong className="block text-[#182A55]">Email</strong><span className="text-sm text-[#5F6B72]">{BRAND_CONFIG.supportEmail}</span></span></a>
          <a href={`tel:${BRAND_CONFIG.supportPhone.replace(/\s+/g,'')}`} className="flex gap-3 items-start"><Phone className="w-5 h-5 text-[#147D68]"/><span><strong className="block text-[#182A55]">Phone</strong><span className="text-sm text-[#5F6B72]">{BRAND_CONFIG.supportPhone}</span></span></a>
          <div className="flex gap-3 items-start"><MapPin className="w-5 h-5 text-[#147D68]"/><span><strong className="block text-[#182A55]">Address</strong><span className="text-sm text-[#5F6B72]">{BRAND_CONFIG.addressLine}</span></span></div>
          <div className="flex gap-3 items-start"><UserRound className="w-5 h-5 text-[#147D68]"/><span><strong className="block text-[#182A55]">Founder & CEO</strong><span className="text-sm text-[#5F6B72]">Shekh Meraj</span></span></div>
        </div>
        <div className="bg-[#182A55] text-white rounded-3xl p-7 sm:p-9 space-y-5">
          <h2 className="text-2xl font-black">Book a Strategy Call</h2>
          <p className="text-sm text-[#E2E0D8] leading-relaxed">Tell us about your offline institute and existing course. We can discuss whether online expansion is practical for your current stage.</p>
          <button onClick={onOpenStrategyCall} className="bg-[#147D68] text-white font-bold py-3.5 px-6 rounded-xl flex items-center gap-2 cta-btn-shadow cta-pulse-btn">Book a 1:1 Strategy Call <ArrowRight className="w-4 h-4"/></button>
          <a href={BRAND_CONFIG.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex bg-white text-[#182A55] font-bold py-3.5 px-6 rounded-xl">WhatsApp ScaleOX Team</a>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context':'https://schema.org','@type':'ContactPage','name':'Contact ScaleOX','url':'https://scaleox.in/contact','mainEntity':{'@type':'EducationalOrganization','@id':'https://scaleox.in/#organization','name':'ScaleOX','url':'https://scaleox.in/','email':`mailto:${BRAND_CONFIG.supportEmail}`,'telephone':BRAND_CONFIG.supportPhone,'address':{'@type':'PostalAddress','streetAddress':'Near Bus Stand, Barela','addressLocality':'Jabalpur','addressRegion':'Madhya Pradesh','postalCode':'483001','addressCountry':'IN'}}
      })}} />
    </div>
  </div>
);

export function slugFor(title: string) { return title.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }
export function categoryForSlug(slug: string) { return WHO_ITS_FOR_CATEGORIES.find(x => slugFor(x.title) === slug); }
