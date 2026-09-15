export type ActiveView = 
  | 'home' 
  | 'process' 
  | 'system' 
  | 'who-its-for' 
  | 'plans' 
  | 'results' 
  | 'resources' 
  | 'about' 
  | 'contact' 
  | 'masterclass' 
  | 'strategy-call'
  | 'privacy-policy'
  | 'terms-conditions'
  | 'refund-policy'
  | 'cookie-policy';

export interface StrategyCallFormData {
  fullName: string;
  phone: string;
  email: string;
  instituteName: string;
  instituteType: string;
  cityState: string;
  existingCourseName: string;
  currentMonthlyStudents: string;
  preferredDate: string;
  preferredTimeSlot: string;
  notes?: string;
}

export interface MasterclassFormData {
  fullName: string;
  whatsappNumber: string;
  email: string;
  instituteName: string;
  instituteType: string;
  city: string;
  selectedBatch: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  instituteName: string;
  instituteType: string;
  existingCourse: string;
  message: string;
}

export interface PlanTier {
  id: string;
  price: string;
  priceNum: number;
  duration: string;
  model: 'DIY' | 'DONE FOR YOU';
  headline: string;
  description: string;
  idealFor: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  ctaText: string;
  paymentUrl?: string;
}

export interface CaseStudy {
  id: string;
  instituteName: string;
  location: string;
  instituteType: string;
  courseName: string;
  beforeStory: string;
  beforeLimitation: string;
  transformationSteps: string[];
  outcomeSummary: string;
  panIndiaReachCities: string[];
  keyQuote: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Guide' | 'Masterclass' | 'Case Study' | 'Checklist' | 'Article';
  readTime: string;
  summary: string;
  hindiSummary: string;
  content: string[];
  downloadableBadge?: string;
}

export interface FAQItem {
  id: string;
  questionHindi: string;
  questionEnglish?: string;
  answerHindi: string;
  answerEnglish?: string;
  category: 'general' | 'courses' | 'setup' | 'plans';
}
