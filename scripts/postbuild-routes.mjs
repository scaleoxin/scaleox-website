import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const source = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const metas = {
  '/': ['ScaleOX — Education Business Expansion | Take Your Offline Course Online', 'ScaleOX helps established offline computer, IT, skill-training and education institutes expand their existing courses online to reach students across India.'],
  '/about': ['About ScaleOX | Education Business Expansion for Offline Institutes', 'Learn about ScaleOX, its mission and approach to helping established offline computer, IT and skill-training institutes expand their existing courses online.'],
  '/founder': ['Shekh Meraj — Founder & CEO of ScaleOX | Education Business Growth Mentor', 'Meet Shekh Meraj, Founder & CEO of ScaleOX and Education Business Growth Mentor helping offline education institutes expand their courses online.'],
  '/services': ['ScaleOX Services | Online Course Expansion for Education Institutes', 'Explore ScaleOX services for computer training, IT and software training, digital skills, accounting and Tally, CAD and design, and vocational training institutes.'],
  '/pricing': ['ScaleOX Pricing | DIY and Done-For-You Plans', 'View ScaleOX pricing plans for offline education institute owners who want to package, launch and expand existing courses online.'],
  '/contact': ['Contact ScaleOX | Contact Us & Book a Strategy Call', 'Contact ScaleOX for education business expansion, online course setup, strategy discussions, and support for offline computer and skill-training institutes.'],
  '/process': ['ScaleOX Process | Online Course Expansion System', 'See the ScaleOX process for turning an established offline course into an online education offer.'],
  '/system': ['ScaleOX System | Course, Offer, Sales Page and Student Journey', 'Explore the ScaleOX system for course packaging, offers, sales pages, student journeys, follow-up and online delivery.'],
  '/who-its-for': ['Who ScaleOX Is For | Computer, IT and Skill Training Institutes', 'See which offline computer, IT, accounting, digital skills, CAD and vocational training institutes ScaleOX supports.'],
  '/results': ['ScaleOX Results | Online Expansion Examples', 'Explore ScaleOX examples and outcomes for education and skill-training institutes expanding existing courses online.'],
  '/masterclass': ['ScaleOX Masterclass | Online Course Expansion', 'Learn how established offline education institutes can take existing courses online with ScaleOX.'],
  '/strategy-call': ['ScaleOX Strategy Call | Education Business Growth', 'Book a ScaleOX strategy discussion about taking your existing offline education course online.'],
  '/services/computer-training-institutes': ['ScaleOX Computer Training Institute Services | Online Course Expansion', 'ScaleOX helps computer training institutes package and expand existing computer courses online.'],
  '/services/it-and-software-training-institutes': ['ScaleOX IT & Software Training Services | Online Course Expansion', 'ScaleOX helps IT and software training institutes expand existing programming and technology courses online.'],
  '/services/digital-skills-institutes': ['ScaleOX Digital Skills Training Services | Online Course Expansion', 'ScaleOX helps digital skills institutes expand digital marketing, SEO, design and related courses online.'],
  '/services/accounting-and-tally-institutes': ['ScaleOX Accounting & Tally Institute Services | Online Course Expansion', 'ScaleOX helps accounting and Tally institutes expand practical accounting and taxation courses online.'],
  '/services/cad-and-design-institutes': ['ScaleOX CAD & Design Institute Services | Online Course Expansion', 'ScaleOX helps CAD and design institutes expand AutoCAD, Revit, 3D and related courses online.'],
  '/services/vocational-and-professional-training': ['ScaleOX Vocational Training Services | Online Course Expansion', 'ScaleOX helps vocational and professional training institutes expand practical courses online.'],
  '/privacy-policy': ['ScaleOX Privacy Policy', 'ScaleOX privacy policy and information handling details.'],
  '/terms-conditions': ['ScaleOX Terms & Conditions', 'ScaleOX terms and conditions.'],
  '/refund-policy': ['ScaleOX Refund Policy', 'ScaleOX refund policy.'],
  '/cookie-policy': ['ScaleOX Cookie Policy', 'ScaleOX cookie policy.'],
};

for (const [route, [title, description]] of Object.entries(metas)) {
  const html = source
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(/<meta name="description" content=".*?"\s*\/>/s, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:title" content=".*?"\s*\/>/s, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content=".*?"\s*\/>/s, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content=".*?"\s*\/>/s, `<meta property="og:url" content="https://scaleox.in${route === '/' ? '/' : route}" />`)
    .replace(/<link rel="canonical" href=".*?"\s*\/>/s, `<link rel="canonical" href="https://scaleox.in${route === '/' ? '/' : route}" />`);
  const dir = route === '/' ? dist : path.join(dist, route.slice(1));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}
console.log(`Generated ${Object.keys(metas).length} SEO route pages.`);
