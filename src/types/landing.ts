export interface NavLinkItem {
  label: string;
  href: string;
}

export interface TrustBadge {
  id: string;
  text: string;
}

export interface ProblemCardItem {
  id: number;
  title: string;
  description: string;
  category?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface ExcellencePoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: string;
}

export interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  consultationType: 'حضوري' | 'أونلاين' | '';
  mainGoal: string;
}
