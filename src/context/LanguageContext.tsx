'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  NAV_LINKS as AR_NAV,
  TRUST_BADGES as AR_TRUST,
  PROBLEM_CARDS as AR_PROBLEMS,
  SERVICES_LIST as AR_SERVICES,
  EXCELLENCE_POINTS as AR_EXCELLENCE,
  HOW_IT_WORKS_STEPS as AR_STEPS,
  CERTIFICATIONS_LIST as AR_CERT,
  FAQ_ITEMS as AR_FAQ,
} from '../data/landingData';
import {
  NAV_LINKS_EN,
  TRUST_BADGES_EN,
  PROBLEM_CARDS_EN,
  SERVICES_LIST_EN,
  EXCELLENCE_POINTS_EN,
  HOW_IT_WORKS_STEPS_EN,
  CERTIFICATIONS_LIST_EN,
  FAQ_ITEMS_EN,
} from '../data/landingDataEn';

export type Language = 'ar' | 'en';

export interface UIStrings {
  headerCta: string;
  heroTag: string;
  heroTitle: string;
  heroSub: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  drName: string;
  drTitle: string;
  problemsBadge: string;
  problemsTitle: string;
  problemsSub: string;
  problemsCta: string;
  servicesBadge: string;
  servicesTitle: string;
  servicesSub: string;
  servicesCta: string;
  whyBadge: string;
  whyTitle: string;
  whySub: string;
  whyCta: string;
  stepsBadge: string;
  stepsTitle: string;
  stepsSub: string;
  stepsCta: string;
  certBadge: string;
  certTitle: string;
  certSub: string;
  faqBadge: string;
  faqTitle: string;
  faqSub: string;
  finalBadge: string;
  finalTitle: string;
  finalSub: string;
  finalPrimaryCta: string;
  finalSecondaryCta: string;
  footerBio: string;
  quickLinks: string;
  socialLinks: string;
  medicalDisclaimer: string;
  disclaimerText: string;
  copyright: string;
  modalTitle: string;
  modalSub: string;
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  consultType: string;
  inPerson: string;
  online: string;
  healthNote: string;
  notePlaceholder: string;
  confirmBooking: string;
  close: string;
  bookingTitle: string;
  bookingSubtitle: string;
  bookingDesc: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  consultationTypeLabel: string;
  goalLabel: string;
  goalPlaceholder: string;
  submitBooking: string;
  closeModal: string;
  successTitle: string;
  successDesc: string;
}

const UI_STRINGS: Record<Language, UIStrings> = {
  ar: {
    headerCta: 'احجز استشارتك الآن',
    heroTag: 'تغذية سريرية علاجية مبنية على الدليل العلمي',
    heroTitle: 'صحتك تبدأ من طبقك: حميات علاجية ومخصصة مبنية على أسس علمية بدون حرمان',
    heroSub:
      'مع أخصائية التغذية السريرية والحميات آية أنيس — خطط تغذوية مصممة خصيصًا لحالتك الصحية، استنادًا لخبرة سريرية في أكبر المراكز الطبية والمستشفيات.',
    heroPrimaryCta: 'احجز خطتك التغذوية الآن',
    heroSecondaryCta: 'تواصل عبر الواتساب للاستفسار',
    drName: 'د. آية أنيس علي فاضل',
    drTitle: 'أخصائية التغذية السريرية والحميات',
    problemsBadge: 'الحلول السريرية المتخصصة',
    problemsTitle: 'هل تعاني من إحدى هذه المشاكل الصحية أو التغذوية؟',
    problemsSub:
      'لا يوجد حل واحد يناسب الجميع. نحن نقدم تدخلاً تغذوياً سريرياً مخصصاً بناءً على التشخيص الدقيق والتحاليل المخبرية لضمان أفضل استجابة صحية.',
    problemsCta: 'احجز استشارتك لتشخيص حالتك بدقة',
    servicesBadge: 'برامج التغذية السريرية',
    servicesTitle: 'خدماتنا وبرامجنا التغذوية المتخصصة',
    servicesSub:
      'نقدم برامج علاجية مخصصة استناداً لأحدث البروتوكولات العلمية الطبية لضمان الوصول إلى النتائج الصحية المستهدفة بأمان.',
    servicesCta: 'اختر برنامجك التغذوي وابدأ الآن',
    whyBadge: 'لماذا د. آية أنيس؟',
    whyTitle: 'الخبرة الأكاديمية والميدانية التي تصنع الفارق في صحتك',
    whySub:
      'دمج فريد بين التميز الأكاديمي الحاصل على امتياز مع مرتبة الشرف، والخبرة السريرية الميدانية في أعقد الأقسام الطبية.',
    whyCta: 'احجز موعدك مع أخصائية معتمدة الآن',
    stepsBadge: 'رحلتك نحو الصحة',
    stepsTitle: 'كيف نبدأ معاً؟ خطوات بسيطة نحو تغيير مستدام',
    stepsSub:
      'منهجية واضحة ومنظمة تبدأ من الفهم الدقيق لحالتك وتمر بتصميم خطتك وتنتهي بتحقيق أهدافك الصحية.',
    stepsCta: 'ابدأ خطوتك الأولى الآن',
    certBadge: 'الاعتمادات والمؤهلات الطبية',
    certTitle: 'تأهيل أكاديمي موثوق وتدريب مستمر',
    certSub:
      'نلتزم بأعلى معايير المهنة الطبية من خلال التراخيص الرسمية والشهادات الأكاديمية والتخصصية الدقيقة.',
    faqBadge: 'إجابات على استفساراتكم',
    faqTitle: 'الأسئلة الشائعة حول الاستشارات التغذوية',
    faqSub:
      'كل ما تود معرفته حول كيفية عمل برامجنا التغذوية، المتابعة، وتخصيص الأنظمة.',
    finalBadge: 'ابدأ رحلتك العلاجية اليوم',
    finalTitle: 'جاهز لتحسين صحتك بخطة تغذوية علاجية مخصصة لك؟',
    finalSub:
      'لا تؤجل الاهتمام بصحتك. احجز استشارتك السريرية الآن واحصل على نظامك التغذوي المبني على أساس علمي دقيق.',
    finalPrimaryCta: 'احجز استشارتك السريرية الآن',
    finalSecondaryCta: 'تواصل عبر الواتساب للاستفسار',
    footerBio:
      'أخصائية التغذية السريرية والحميات — نقدم خططاً تغذوية علاجية مخصصة بناءً على الفحوصات والتحاليل المخبرية الدقيقة.',
    quickLinks: 'روابط سريعة',
    socialLinks: 'تواصل عبر شبكاتنا',
    medicalDisclaimer: 'إخلاء مسؤولية طبي:',
    disclaimerText:
      'المعلومات المقدمة في الموقع لغرض التوعية ولا تغني عن الاستشارة الطبية المباشرة للحالات الحادة.',
    copyright: '© 2026 جميع الحقوق محفوظة للأخصائية أية أنيس.',
    modalTitle: 'حجز استشارة تغذوية سريرية',
    modalSub: 'املأ البيانات التالية وسنتواصل معك لتأكيد الموعد بأسرع وقت',
    nameLabel: 'الاسم الكامل',
    namePlaceholder: 'أدخل اسمك الكامل هنا...',
    phoneLabel: 'رقم الواتساب / الجوال',
    phonePlaceholder: 'مثال: 967770000000+',
    consultType: 'نوع الاستشارة المفضلة',
    inPerson: 'حضوري في العيادة',
    online: 'استشارة أونلاين (متابعة عن بعد)',
    healthNote: 'ملاحظات سريعة عن حالتك الصحية (اختياري)',
    notePlaceholder: 'مثال: إدارة السكري، خسارة الوزن، مشاكل هضمية...',
    confirmBooking: 'تأكيد الحجز عبر واتساب',
    close: 'إغلاق النافذة',
    bookingTitle: 'حجز استشارة تغذوية سريرية',
    bookingSubtitle: 'احجز موعدك مع د. أية أنيس',
    bookingDesc:
      'يرجى إدخال بياناتك لحجز الموعد وتحديد نوع الاستشارة والهدف الصحي.',
    fullNameLabel: 'الاسم الكامل',
    fullNamePlaceholder: 'مثال: أحمد محمد علي',
    consultationTypeLabel: 'نوع الاستشارة المطلوبة',
    goalLabel: 'الهدف الرئيسي أو الحالة الصحية',
    goalPlaceholder: 'مثال: إدارة السكري، نزول الوزن، أو تغذية رياضيين...',
    submitBooking: 'تأكيد طلب حجز الموعد',
    closeModal: 'إغلاق النافذة',
    successTitle: 'تم استلام طلبك بنجاح!',
    successDesc: 'شكراً لك،',
  },
  en: {
    headerCta: 'Book Consultation Now',
    heroTag: 'Evidence-Based Clinical Medical Nutrition Therapy',
    heroTitle:
      'Your Health Starts on Your Plate: Customized Scientific Medical Diets Without Deprivation',
    heroSub:
      'With Clinical & Dietetics Nutritionist Aya Anis — Tailored nutritional plans designed specifically for your health condition, backed by intensive clinical hospital experience.',
    heroPrimaryCta: 'Book Your Nutritional Plan Now',
    heroSecondaryCta: 'Inquire via WhatsApp',
    drName: 'Dr. Aya Anis Ali Fadel',
    drTitle: 'Clinical Nutritionist & Dietitian',
    problemsBadge: 'Specialized Clinical Solutions',
    problemsTitle: 'Are You Experiencing Any of These Health or Nutritional Challenges?',
    problemsSub:
      'One size does not fit all. We deliver personalized clinical medical nutrition therapy based on precise diagnostics and lab investigations for optimal health recovery.',
    problemsCta: 'Book Your Consultation for Precise Evaluation',
    servicesBadge: 'Clinical Nutrition Programs',
    servicesTitle: 'Our Specialized Nutrition Services & Programs',
    servicesSub:
      'We offer targeted medical therapy programs adhering to the latest international medical protocols to achieve your health goals safely.',
    servicesCta: 'Select Your Nutrition Program and Start',
    whyBadge: 'Why Dr. Aya Anis?',
    whyTitle: 'Academic Excellence & Clinical Expertise That Transform Your Health',
    whySub:
      'A rare integration of First-Class Honors academic distinction with extensive bedside clinical practice in critical medical wards.',
    whyCta: 'Book Your Appointment with a Certified Specialist',
    stepsBadge: 'Your Journey to Better Health',
    stepsTitle: 'How Do We Work Together? Simple Steps for Sustainable Change',
    stepsSub:
      'A clear, structured methodology starting from an in-depth understanding of your condition, through custom plan design, to achieving long-term vitality.',
    stepsCta: 'Take Your First Step Today',
    certBadge: 'Medical Credentials & Qualifications',
    certTitle: 'Accredited Academic Background & Continuous Practice',
    certSub:
      'Upholding the highest professional medical standards through official board licenses, academic degrees, and specialized certifications.',
    faqBadge: 'Answers to Your Questions',
    faqTitle: 'Frequently Asked Questions on Clinical Nutrition',
    faqSub:
      'Everything you need to know about our nutrition therapy plans, continuous follow-ups, and dietary customization.',
    finalBadge: 'Start Your Healing Journey Today',
    finalTitle: 'Ready to Elevate Your Health With a Tailored Clinical Nutrition Plan?',
    finalSub:
      'Do not delay your health goals. Book your clinical consultation now and receive a scientific, precision-engineered dietary plan.',
    finalPrimaryCta: 'Book Your Clinical Consultation Now',
    finalSecondaryCta: 'Inquire via WhatsApp',
    footerBio:
      'Clinical Nutritionist & Dietitian — Providing evidence-based medical nutrition therapy customized to precise laboratory tests and clinical diagnoses.',
    quickLinks: 'Quick Links',
    socialLinks: 'Connect With Us',
    medicalDisclaimer: 'Medical Disclaimer:',
    disclaimerText:
      'Information provided on this website is for educational purposes and does not substitute direct medical consultation for acute emergencies.',
    copyright: '© 2026 All Rights Reserved — Dr. Aya Anis.',
    modalTitle: 'Book a Clinical Nutrition Consultation',
    modalSub: 'Fill out your details below and we will contact you shortly to confirm',
    nameLabel: 'Full Name',
    namePlaceholder: 'Enter your full name here...',
    phoneLabel: 'WhatsApp / Phone Number',
    phonePlaceholder: 'Example: +967770000000',
    consultType: 'Preferred Consultation Type',
    inPerson: 'In-Person at Clinic',
    online: 'Online Consultation (Remote Follow-up)',
    healthNote: 'Brief notes about your health condition (optional)',
    notePlaceholder: 'Example: Diabetes management, weight loss, digestive health...',
    confirmBooking: 'Confirm Booking via WhatsApp',
    close: 'Close Window',
    bookingTitle: 'Clinical Nutrition Consultation',
    bookingSubtitle: 'Book Your Appointment with Dr. Aya Anis',
    bookingDesc:
      'Please enter your details to book your appointment and select your consultation type.',
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'Example: Ahmed Mohammed Ali',
    consultationTypeLabel: 'Requested Consultation Type',
    goalLabel: 'Main Goal or Health Condition',
    goalPlaceholder:
      'Example: Diabetes management, weight loss, or sports nutrition...',
    submitBooking: 'Confirm Appointment Booking',
    closeModal: 'Close Window',
    successTitle: 'Your Request Was Received Successfully!',
    successDesc: 'Thank you,',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: UIStrings;
  data: {
    navLinks: typeof AR_NAV;
    trustBadges: typeof AR_TRUST;
    problemCards: typeof AR_PROBLEMS;
    servicesList: typeof AR_SERVICES;
    excellencePoints: typeof AR_EXCELLENCE;
    howItWorksSteps: typeof AR_STEPS;
    certificationsList: typeof AR_CERT;
    faqItems: typeof AR_FAQ;
  };
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>('ar');

  useEffect(() => {
    const savedLang = localStorage.getItem('site_language') as Language | null;
    if (savedLang === 'ar' || savedLang === 'en') {
      setLanguageState(savedLang);
      document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = savedLang;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('site_language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    const nextLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(nextLang);
  };

  const t = UI_STRINGS[language];

  const data =
    language === 'ar'
      ? {
          navLinks: AR_NAV,
          trustBadges: AR_TRUST,
          problemCards: AR_PROBLEMS,
          servicesList: AR_SERVICES,
          excellencePoints: AR_EXCELLENCE,
          howItWorksSteps: AR_STEPS,
          certificationsList: AR_CERT,
          faqItems: AR_FAQ,
        }
      : {
          navLinks: NAV_LINKS_EN,
          trustBadges: TRUST_BADGES_EN,
          problemCards: PROBLEM_CARDS_EN,
          servicesList: SERVICES_LIST_EN,
          excellencePoints: EXCELLENCE_POINTS_EN,
          howItWorksSteps: HOW_IT_WORKS_STEPS_EN,
          certificationsList: CERTIFICATIONS_LIST_EN,
          faqItems: FAQ_ITEMS_EN,
        };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t, data }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
