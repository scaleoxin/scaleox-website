import { PlanTier, CaseStudy, ResourceItem, FAQItem } from '../types';

export const BRAND_CONFIG = {
  name: 'ScaleOX',
  tagline: 'Education Business Expansion',
  statementHindi: 'आपका Institute एक जगह हो सकता है. आपका Course वहाँ तक सीमित होना जरूरी नहीं है.',
  statementEnglish: 'Your institute may be in one location. Your course does not necessarily have to stop there.',
  supportEmail: 'helloscaleox@gmail.com',
  supportPhone: '+91 7583046291',
  strategyCallUrl: 'https://calendly.com/scaleox-in/30min',
  whatsappUrl: 'https://wa.me/917583046291?text=Hi%20ScaleOX%20Team%2C%20I%20run%20an%20offline%20institute%20and%20want%20to%20know%20more%20about%20online%20expansion.',
  addressLine: 'Near Bus Stand, Barela, Jabalpur, Madhya Pradesh - 483001',
  socialLinks: {
    instagram: 'https://instagram.com/scaleox.in',
    facebook: 'https://facebook.com/scaleox.in',
    linkedin: 'https://linkedin.com/company/scaleox',
    youtube: 'https://youtube.com/@scaleox',
    whatsapp: 'https://wa.me/919876543210',
  }
};

export const PLANS_DATA: PlanTier[] = [
  {
    id: 'diy-6m',
    price: '₹5,999',
    priceNum: 5999,
    duration: '6 Months',
    model: 'DIY',
    headline: 'अगर आप system खुद build और implement करना चाहते हैं.',
    description: 'A structured, step-by-step implementation blueprint to transform your existing offline course into a ready-to-sell online offer independently.',
    idealFor: 'Institute owners who have some technical familiarity or an in-house staff member to execute the setup.',
    features: [
      'Full 5-Step Online Course Packaging Blueprint',
      'High-Converting Course Offer Templates & Frameworks',
      'Simple Sales Page Structure & Copy Checklist',
      'Student Enrollment & Automated Follow-Up Templates',
      'Live Online / Recorded Delivery Workflow Guide',
      '6 Months Community & Resource Library Access',
      'Monthly Live Q&A Strategy Review Sessions'
    ],
    ctaText: 'Get Started with 6-Month DIY',
    paymentUrl: 'https://rzp.io/rzp/scaleox6m'
  },
  {
    id: 'diy-1y',
    price: '₹9,999',
    priceNum: 9999,
    duration: '1 Year',
    model: 'DIY',
    headline: 'अगर आपको build और implementation के लिए ज्यादा समय चाहिए.',
    description: 'Comprehensive 1-Year guidance and extended resource access to build, launch, and steadily scale your online course batches across India.',
    idealFor: 'Established institute owners who want a full 12-month runway to test multiple course batches and seasonal cycles.',
    features: [
      'Everything in the 6-Month DIY Plan',
      '12 Months Extended Resource & Update Access',
      'Advanced Pan-India Student Acquisition Playbooks',
      'Multi-Batch Launch & Repeat Enrollment Systems',
      'Template Library for WhatsApp, Email & SMS Follow-ups',
      'Bi-Weekly Group Implementation Workshops',
      'Priority Email & Community Ticket Support'
    ],
    highlight: true,
    badge: 'MOST POPULAR FOR DIY',
    ctaText: 'Get Started with 1-Year DIY',
    paymentUrl: 'https://rzp.io/rzp/scaleoxgrowthpro12m'
  },
  {
    id: 'dfy-1y',
    price: '₹30,000',
    priceNum: 30000,
    duration: '1 Year',
    model: 'DONE FOR YOU',
    headline: 'अगर आप चाहते हैं कि major setup और implementation ScaleOX की team संभाले.',
    description: 'Our dedicated team partners with your institute to package your course, write your sales copy, build your student enrollment funnel, and configure your delivery setup.',
    idealFor: 'Busy institute owners who want to focus purely on teaching their existing course while we handle the digital infrastructure.',
    features: [
      'Done-For-You Course Packaging & Offer Architecture',
      'Custom Dedicated Sales Page Built & Hosted For You',
      'Complete Student Journey & Follow-Up Automation Setup',
      'Online Payment Gateway & Instant Delivery Integration',
      'Ad & Student Reach Strategy Guidance with Our Team',
      '1-on-1 Dedicated Expansion Manager & Priority WhatsApp Support',
      'Full 1-Year System Maintenance, Updates & Batch Reviews'
    ],
    badge: 'COMPLETE DONE-FOR-YOU',
    ctaText: 'Apply for Done-For-You Partnership',
    paymentUrl: 'https://rzp.io/rzp/scaleoxDFY'
  }
];

export const PROCESS_STEPS = [
  {
    stepNumber: '01',
    title: 'CHOOSE YOUR COURSE',
    hindiTagline: 'सबसे पहले उस existing course को चुनें जिसे online ले जाना सबसे practical है.',
    englishDescription: 'Select your proven, high-demand offline course that already has great student satisfaction and clear learning outcomes.',
    details: [
      'Audit your current offline courses to identify the top performer',
      'Verify that the curriculum can be effectively taught via live video or structured modules',
      'Focus on ONE specific flagship course first rather than trying to move everything at once'
    ]
  },
  {
    stepNumber: '02',
    title: 'BUILD THE ONLINE OFFER',
    hindiTagline: 'अपने existing course को ऐसे offer में package करें जिसे online student आसानी से समझ सके.',
    englishDescription: 'Structure your knowledge into an outcome-oriented package with clear deliverables, duration, practical exercises, and completion certificates.',
    details: [
      'Define clear tangible student outcomes (job skills, certification, software proficiency)',
      'Create simple module breakdowns that eliminate confusion for distance students',
      'Set an attractive pricing structure suitable for pan-India students'
    ]
  },
  {
    stepNumber: '03',
    title: 'BUILD THE SELLING SYSTEM',
    hindiTagline: 'एक simple system बनाएं जिससे interested students आपके course को समझें और next step ले सकें.',
    englishDescription: 'Establish a clear, professional web presence where a student from anywhere in India can read curriculum details and enroll smoothly.',
    details: [
      'Clean, distraction-free course page explaining the syllabus and instructor background',
      'Direct WhatsApp and instant enrollment checkout options',
      'Automatic confirmation and batch orientation instructions'
    ]
  },
  {
    stepNumber: '04',
    title: 'REACH STUDENTS',
    hindiTagline: 'Local Area से बाहर students तक पहुँचने के लिए online marketing process तैयार करें.',
    englishDescription: 'Deploy targeted outreach methods to connect with students outside your 30-50 km geographic radius who want your specific skill training.',
    details: [
      'Reach aspiring learners across tier-2, tier-3 cities and neighboring states',
      'Showcase your real teaching depth, practical assignments, and student testimonials',
      'Engage interested leads through interactive masterclasses or short preview workshops'
    ]
  },
  {
    stepNumber: '05',
    title: 'LAUNCH & IMPROVE',
    hindiTagline: 'Launch करें, real student response देखें और जो काम कर रहा है उसे बेहतर करते जाएँ.',
    englishDescription: 'Deliver your first online batch, collect feedback, optimize student retention, and create a repeatable enrollment rhythm.',
    details: [
      'Start with a manageable pilot online batch alongside your regular offline classes',
      'Refine your live doubt-clearing sessions and assignment reviews',
      'Systematize batch schedules for consistent monthly online admissions'
    ]
  }
];

export const SYSTEM_PILLARS = [
  {
    number: '01',
    pillar: 'COURSE',
    question: 'What will you teach?',
    hindiDesc: 'आप क्या सिखाएंगे?',
    explanation: 'Converting your proven offline syllabus into a modular, engaging digital curriculum without losing practical depth.'
  },
  {
    number: '02',
    pillar: 'OFFER',
    question: 'What will the student get?',
    hindiDesc: 'Student को क्या मिलेगा?',
    explanation: 'A compelling, crystal-clear value proposition detailing live sessions, notes, practice files, doubts support, and certification.'
  },
  {
    number: '03',
    pillar: 'SALES PAGE',
    question: 'Where will the student understand the course?',
    hindiDesc: 'Student course को कहाँ समझेगा?',
    explanation: 'A clean, high-trust digital page that presents your experience, syllabus, batch timings, and answers every parent/student question.'
  },
  {
    number: '04',
    pillar: 'STUDENT JOURNEY',
    question: 'How does an interested student move toward enrollment?',
    hindiDesc: 'Interested student enrollment तक कैसे पहुंचेगा?',
    explanation: 'A frictionless path from first hearing about your institute to viewing syllabus, attending a demo/masterclass, and paying fees.'
  },
  {
    number: '05',
    pillar: 'FOLLOW-UP',
    question: 'How do you stay connected with interested students?',
    hindiDesc: 'Interested students से connected कैसे रहेंगे?',
    explanation: 'Gentle, timely WhatsApp and email updates reminding leads about upcoming batch dates and answering remaining doubts.'
  },
  {
    number: '06',
    pillar: 'ONLINE DELIVERY',
    question: 'How does the student learn after joining?',
    hindiDesc: 'Join करने के बाद student कैसे सीखेगा?',
    explanation: 'A smooth classroom setup using familiar tools (Zoom, Google Meet, portal access) for live interactive teaching and assignments.'
  }
];

export const WHO_ITS_FOR_CATEGORIES = [
  {
    title: 'Computer Training Institutes',
    examples: 'DCA, PGDCA, MS Office, Advanced Excel, Python, Web Design, C/C++',
    hindiText: 'अगर आप बेसिक या एडवांस्ड कंप्यूटर कोर्सेज ऑफलाइन सिखाते हैं.'
  },
  {
    title: 'IT & Software Training Institutes',
    examples: 'Full Stack Development, Java, MERN, Data Analytics, Cloud Basics',
    hindiText: 'अगर आप सॉफ्टवेयर प्रोग्रामिंग और कोडिंग बैचेस चलाते हैं.'
  },
  {
    title: 'Digital Skills Institutes',
    examples: 'Digital Marketing, SEO, Social Media, Graphic Design, Video Editing',
    hindiText: 'अगर आप प्रैक्टिकल डिजिटल स्किल्स में युवाओं को ट्रेन करते हैं.'
  },
  {
    title: 'Accounting & Tally Institutes',
    examples: 'Tally Prime, GST Filing, Busy Accounting, Income Tax, Payroll',
    hindiText: 'अगर आप प्रैक्टिकल एकाउंटिंग और टैक्सेशन की ट्रेनिंग देते हैं.'
  },
  {
    title: 'CAD & Design Institutes',
    examples: 'AutoCAD, Revit, 3ds Max, SolidWorks, Interior Drafting',
    hindiText: 'अगर आप इंजीनियरिंग और आर्किटेक्चरल डिजाइनिंग सॉफ्टवेयर सिखाते हैं.'
  },
  {
    title: 'Vocational & Professional Training',
    examples: 'Spoken English, Corporate Skills, Stock Market Basics, Typing',
    hindiText: 'अगर आपका कोर्स ऑनलाइन लाइव या रिकॉर्डेड रूप से आसानी से सिखाया जा सकता है.'
  }
];

export const QUALIFICATION_ITEMS = {
  goodFit: [
    'Existing offline institute with an active physical presence',
    'Proven, structured course that students currently pay for',
    'Real teaching experience and subject-matter expertise',
    'Desire to reach students beyond local 30-50 KM radius',
    'Understanding that offline and online can run hand-in-hand',
    'Readiness to take action and implement step-by-step'
  ],
  notAFit: [
    'Looking only for students within 2-3 km walking distance',
    'Wants only a generic brochure website with no course selling system',
    'Does not yet have a structured curriculum or teaching experience',
    'Expects overnight automated riches without teaching real students',
    'Is not willing to dedicate time to conduct live sessions or provide student support'
  ]
};

export const CASE_STUDY_FRAMEWORKS: CaseStudy[] = [
  {
    id: 'case-1',
    instituteName: 'Shri Balaji Computer & IT Academy',
    location: 'Indore, Madhya Pradesh',
    instituteType: 'Computer Training Institute',
    courseName: 'Advanced Excel & MIS Reporting Master Program',
    beforeStory: 'Running a 14-seat computer lab for 7 years. All batches were filled exclusively by college students living within a 7 km radius of the centre.',
    beforeLimitation: 'Physical lab capacity was capped at 3 batches/day (42 students max). Monsoon and exam months caused local admission dips.',
    transformationSteps: [
      'Packaged their 45-day offline Advanced Excel module into a 6-week Live Evening Online Batch',
      'Created a single-page curriculum outline with real corporate dashboard examples',
      'Conducted a Sunday 90-minute Excel Formula Workshop on Google Meet for leads from across MP, UP, and Rajasthan',
      'Enrolled 38 online students in their first pan-India batch while physical lab classes continued as usual'
    ],
    outcomeSummary: 'Added a consistent online batch alongside their daily offline lab classes without renting extra physical space.',
    panIndiaReachCities: ['Bhopal', 'Ujjain', 'Gwalior', 'Jaipur', 'Lucknow', 'Patna'],
    keyQuote: '"Offline lab mein seats limited thi. Online shuru karne ke baad humare batch mein MP ke alawa doosre states ke working professionals bhi aane lage."'
  },
  {
    id: 'case-2',
    instituteName: 'Apex Institute of Accounts & Taxation',
    location: 'Meerut, Uttar Pradesh',
    instituteType: 'Accounting & Professional Training',
    courseName: 'Practical GST Filing & Tally Prime Certification',
    beforeStory: 'Well-known local accounting trainer with 12 years of offline coaching experience. Regular offline intake of 25-30 local commerce graduates per quarter.',
    beforeLimitation: 'Nearby towns (30-40 km away) had interested students who could not commute daily due to poor bus connectivity and college timings.',
    transformationSteps: [
      'Restructured practical client case studies into screen-share friendly video exercises',
      'Set up a straightforward enrollment page with transparent syllabus and sample GST reconciliation sheet',
      'Launched a Weekend Online Batch specifically for students and junior accountants across North India'
    ],
    outcomeSummary: 'Overcame the 40 km transport barrier and started serving students from 15+ district towns across UP, Haryana, and Bihar.',
    panIndiaReachCities: ['Saharanpur', 'Moradabad', 'Aligarh', 'Bareilly', 'Rohtak', 'Muzaffarpur'],
    keyQuote: '"Jo students roz travel karke Meerut nahi aa sakte the, unhe weekend par online sikhana sabse practical decision raha."'
  },
  {
    id: 'case-3',
    instituteName: 'DesignTech CAD & Graphics Centre',
    location: 'Nagpur, Maharashtra',
    instituteType: 'CAD & Design Institute',
    courseName: 'Architectural 2D/3D AutoCAD & SketchUp Blueprint',
    beforeStory: 'Equipped with 10 high-end workstations. Offline students were primarily civil/architect diploma students from local polytechnics.',
    beforeLimitation: 'During college semester breaks, lab seats remained empty for 2-3 months at a stretch.',
    transformationSteps: [
      'Packaged project-based AutoCAD portfolio training into structured 30-day cohorts',
      'Created short screen recorded assignment reviews and downloadable CAD template library',
      'Enabled live doubt-clearing sessions on Zoom every alternate day'
    ],
    outcomeSummary: 'Turned offline seasonal downtime into an active online enrollment channel serving diploma students pan-India.',
    panIndiaReachCities: ['Amravati', 'Nashik', 'Aurangabad', 'Indore', 'Raipur', 'Hyderabad'],
    keyQuote: '"Humein naya institute nahi kholna pada. Jo syllabus hum offline padha rahe the, usi ko online format mein organize kiya."'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    questionHindi: 'क्या मुझे अपना offline institute बंद करना पड़ेगा?',
    questionEnglish: 'Do I have to close or shut down my offline institute?',
    answerHindi: 'बिल्कुल नहीं! आपका offline institute जैसे चल रहा है, वैसे ही चलता रहेगा. ScaleOX का उद्देश्य आपके existing course को online expand करना है ताकि physical institute के साथ-साथ एक नया online student reach और revenue channel भी शुरू हो सके.',
    answerEnglish: 'Absolutely not! Your offline institute continues running as usual. ScaleOX helps you create an additional online student channel without disrupting your current physical operations.',
    category: 'general'
  },
  {
    id: 'faq-2',
    questionHindi: 'क्या मुझे नया course बनाना पड़ेगा?',
    questionEnglish: 'Do I need to create a completely new course from scratch?',
    answerHindi: 'नहीं. आप जिस course को आज अपने institute में सालों से सफलतापूर्वक पढ़ा रहे हैं, उसी existing course को online format में package और deliver करना सबसे smart और practical तरीका है.',
    answerEnglish: 'No. The most practical approach is taking the proven course you are already teaching successfully in your institute and packaging it for online students.',
    category: 'courses'
  },
  {
    id: 'faq-3',
    questionHindi: 'क्या मैं अपने existing course को online ले जा सकता हूँ?',
    questionEnglish: 'Can any computer or skill training course be taken online?',
    answerHindi: 'हाँ, कंप्यूटर कोर्सेज (DCA, Excel, Web, Programming), एकाउंटिंग/Tally, डिजिटल मार्केटिंग, ग्राफ़िक डिज़ाइन, CAD, स्पोकन इंग्लिश और कई अन्य प्रैक्टिकल स्किल्स को Google Meet या Zoom के ज़रिए लाइव और स्क्रीन-शेयरिंग के साथ बहुत आसानी से सिखाया जा सकता है.',
    answerEnglish: 'Yes, computer courses, accounting/Tally, coding, digital marketing, graphic design, CAD, spoken English, and many practical skills can be taught seamlessly online via live screenshare and structured assignments.',
    category: 'courses'
  },
  {
    id: 'faq-4',
    questionHindi: 'क्या ScaleOX मेरे लिए पूरा setup कर सकता है?',
    questionEnglish: 'Can ScaleOX handle the complete setup for my institute?',
    answerHindi: 'हाँ! हमारे Done-For-You (DFY) प्लान (₹30,000 / 1 Year) में हमारी टीम आपके लिए course packaging, sales page, enrollment funnel, follow-up system और student delivery workflow खुद तैयार करती है.',
    answerEnglish: 'Yes! Under our Done-For-You (DFY) Plan (₹30,000 / 1 Year), our team handles the course packaging, sales page copy, enrollment funnel, follow-ups, and delivery setup for you.',
    category: 'setup'
  },
  {
    id: 'faq-5',
    questionHindi: 'किस तरह के institutes के लिए ScaleOX सही है?',
    questionEnglish: 'Which types of institutes is ScaleOX best suited for?',
    answerHindi: 'Computer Training Institutes, IT & Coding Institutes, Tally/Accounting Training, Digital Skills, CAD/Design, और Vocational Training Centres जिनके पास existing course और teaching experience है.',
    answerEnglish: 'Established Computer Training, IT & Software, Accounting/Tally, Digital Skills, CAD/Drafting, and Vocational Training Institutes that already have a functioning course and real teaching background.',
    category: 'general'
  },
  {
    id: 'faq-6',
    questionHindi: 'क्या online students पूरे India से आ सकते हैं?',
    questionEnglish: 'Can students really enroll from across India?',
    answerHindi: 'हाँ. जब आपका course online available होता है, तो geographical boundary खत्म हो जाती है. Tier-2, Tier-3 शहरों और छोटे कस्बों के students जो अच्छे trainers की तलाश में होते हैं, आपके course में घर बैठे दाखिला ले सकते हैं.',
    answerEnglish: 'Yes. Once your course is packaged online, distance is no longer a barrier. Students from tier-2, tier-3 cities and neighboring states can enroll directly.',
    category: 'general'
  },
  {
    id: 'faq-7',
    questionHindi: 'मुझे कौन सा plan लेना चाहिए?',
    questionEnglish: 'Which plan should I choose for my institute?',
    answerHindi: 'अगर आप या आपकी टीम setup खुद implement करना चाहती है, तो ₹5,999 (6 Months) या ₹9,999 (1 Year) DIY बेस्ट है. अगर आप चाहते हैं कि technical & sales page setup हमारी टीम तैयार करे, तो ₹30,000 (1 Year) DFY चुनें.',
    answerEnglish: 'If you or your staff want to implement the step-by-step blueprint independently, choose the 6-Month (₹5,999) or 1-Year (₹9,999) DIY plan. If you want our team to do the heavy lifting, select the Done-For-You (₹30,000) partnership.',
    category: 'plans'
  }
];

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'The 30–50 KM Physical Barrier: Why Offline Institutes Hit a Natural Student Cap',
    category: 'Guide',
    readTime: '6 min read',
    summary: 'An honest analysis of why even the best physical training institutes face admission ceilings due to daily student travel fatigue.',
    hindiSummary: 'जानिए क्यों 30 से 50 किलोमीटर की दूरी एक ऑफलाइन कंप्यूटर सेंटर के एडमीशंस की सबसे बड़ी नेचुरल रुकावट बन जाती है.',
    content: [
      'Every physical institute operates within a commute radius. Most students will not travel more than 45 minutes each way for a 1-hour class.',
      'This means your physical classroom competes exclusively for the small pool of students living nearby.',
      'Taking your curriculum online eliminates travel friction and allows students from 500+ km away to learn from your faculty without moving cities.',
      'Practical takeaway: Keep your offline lab running for local walk-ins, and launch an evening online batch for outstation learners.'
    ],
    downloadableBadge: 'Free Strategic Guide'
  },
  {
    id: 'res-2',
    title: 'How to Package Your Existing Offline Computer Course into a High-Converting Online Offer',
    category: 'Checklist',
    readTime: '8 min read',
    summary: 'A step-by-step checklist to convert your offline whiteboard lectures into an organized digital course package with assignments.',
    hindiSummary: 'अपने मौजूदा ऑफलाइन कोर्स को बिना किसी भारी तकनीक के ऑनलाइन पैकेज में कैसे बदलें.',
    content: [
      'Step 1: Write down the 5 core modules your students master by the end of the course.',
      'Step 2: Attach 3 practical project assignments that students can submit via Google Drive or email.',
      'Step 3: Define clear batch timings (e.g. 7:00 PM to 8:15 PM Mon-Fri) that do not clash with your offline lab hours.',
      'Step 4: Provide a verifiable digital certificate upon successful project completion.'
    ],
    downloadableBadge: 'PDF Blueprint Available'
  },
  {
    id: 'res-3',
    title: 'The Simple Sales Page Architecture for Indian Education Business Owners',
    category: 'Article',
    readTime: '5 min read',
    summary: 'Why education owners do not need complicated marketing funnels—just one clear, high-trust page answering 6 basic student questions.',
    hindiSummary: 'स्टूडेंट को आकर्षित करने के लिए किसी भारी फनल की जरूरत नहीं—सिर्फ एक सीधा, साफ़ और भरोसेमंद वेब पेज काफी है.',
    content: [
      'Question 1: What exact skill will I learn in this batch?',
      'Question 2: Who is the trainer and what is their background?',
      'Question 3: What is the day-by-day or week-by-week syllabus?',
      'Question 4: What happens if I miss a live class (recordings/notes)?',
      'Question 5: What is the fee and how do I reserve a seat?',
      'Question 6: Who can I contact on WhatsApp if I have a question?'
    ]
  },
  {
    id: 'res-4',
    title: 'Case Breakdown: How a 14-Seat Lab Added 38 Outstation Students in 45 Days',
    category: 'Case Study',
    readTime: '7 min read',
    summary: 'Detailed timeline of an Advanced Excel training centre transitioning from local batch saturation to multi-state online batches.',
    hindiSummary: 'एक 14-सीट वाले कंप्यूटर सेंटर ने कैसे ऑफलाइन लैब चालू रखते हुए 38 नए ऑनलाइन स्टूडेंट्स जोड़े.',
    content: [
      'Week 1-2: Selected their most popular corporate Excel module and drafted syllabus highlights.',
      'Week 3: Hosted a free 90-minute live demonstration on Sunday afternoon.',
      'Week 4: Enrolled students directly through UPI & WhatsApp confirmations.',
      'Week 5-10: Delivered live classes on Google Meet with 94% attendance rate.'
    ]
  }
];
