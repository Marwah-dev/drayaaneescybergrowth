import {
  NavLinkItem,
  TrustBadge,
  ProblemCardItem,
  ServiceItem,
  ExcellencePoint,
  StepItem,
  CertificationItem,
  FaqItem,
} from '../types/landing';

export const NAV_LINKS_EN: NavLinkItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us?', href: '#why-us' },
  { label: 'Success Stories', href: '#problems' },
  { label: 'FAQ', href: '#faq' },
];

export const TRUST_BADGES_EN: TrustBadge[] = [
  { id: 'licensed', text: '✓ Licensed by the Official Medical Council.' },
  {
    id: 'honors',
    text: '✓ Graduated with First-Class Honors (92.05%).',
  },
  {
    id: 'experience',
    text: '✓ Intensive bedside clinical practice in ICU, Oncology, Nephrology & Cardiology wards.',
  },
];

export const PROBLEM_CARDS_EN: ProblemCardItem[] = [
  {
    id: 1,
    title: 'Dietary Confusion & Fad Diets',
    description:
      'Struggling with extreme diets without sustainable results, or constant deprivation and relapse.',
  },
  {
    id: 2,
    title: 'Chronic Disease Management',
    description:
      'Difficulty regulating blood sugar, blood pressure, cholesterol, or managing liver, heart, and kidney disorders through nutrition.',
  },
  {
    id: 3,
    title: 'Autoimmune & Immunodeficiency Conditions',
    description:
      'Nutritional therapy for Rheumatoid Arthritis, Eczema, Vitiligo, Alopecia, Lupus, intestinal adhesions, and immune health.',
  },
  {
    id: 4,
    title: 'Neurological Disorders Nutrition',
    description:
      'Targeted diets for Parkinson’s disease, Epilepsy, Autism, and tremor management to protect neurological function.',
  },
  {
    id: 5,
    title: 'Gastrointestinal & Digestive Disorders',
    description:
      'Dietary management for stomach/duodenal ulcers, IBS, acid reflux, H. pylori, malabsorption, and digestive discomfort.',
  },
  {
    id: 6,
    title: 'Oncology & Cancer Care Nutrition',
    description:
      'Precise medical nutrition support to prevent malnutrition and support vitality during cancer therapies.',
  },
  {
    id: 7,
    title: 'Fertility & Reproductive Health',
    description: 'Evidence-based nutritional plans to enhance reproductive capacity and hormone balance.',
  },
  {
    id: 8,
    title: 'Metabolic & Endocrine Disorders',
    description:
      'Nutritional therapy for cortisol imbalances, thyroid/parathyroid disorders, PCOS, adrenal health, and pancreas function.',
  },
  {
    id: 9,
    title: 'Food Allergies & Intolerances',
    description: 'Structured elimination and dietary adaptation for lactose, gluten, casein, and specific food sensitivities.',
  },
  {
    id: 10,
    title: 'Infectious & Parasitic Conditions',
    description:
      'Nutritional support during Hepatitis, Shingles, Typhoid, SIBO, fungal infections, Giardia, Amoeba, and E. coli recovery.',
  },
  {
    id: 11,
    title: 'Vascular, Bone Health & Fracture Healing',
    description: 'Specialized dietary plans to support varicose veins, bone density, and accelerate fracture repair.',
  },
  {
    id: 12,
    title: 'Pre- & Post-Surgical Medical Nutrition',
    description: 'Optimizing tissue healing and minimizing complications before and after surgical procedures.',
  },
  {
    id: 13,
    title: 'Pediatric & Adolescent Growth Nutrition',
    description: 'Targeted plans for growth velocity, healthy development, and failure-to-thrive in children and teens.',
  },
  {
    id: 14,
    title: 'Mental Health & Behavioral Nutrition',
    description:
      'Specialized nutrition therapy for depression, OCD, postpartum depression, and mood stabilization.',
  },
  {
    id: 15,
    title: 'Malnutrition (Weight Loss / Gain)',
    description:
      'Clinical, safe, and medically supervised weight restoration tailored to thorough laboratory investigations.',
  },
  {
    id: 16,
    title: 'Pre-Conception to Lactation Nutrition',
    description:
      'Comprehensive prenatal, pregnancy, and breastfeeding diets, including management of gestational diabetes and preeclampsia.',
  },
  {
    id: 17,
    title: 'Sports Nutrition & Performance',
    description:
      'Precision macronutrient calculation and scientific supplement selection for enhanced athletic performance.',
  },
  {
    id: 18,
    title: 'Aesthetic & Skin Health Nutrition',
    description:
      'Internal clinical nourishment for radiant hair, skin, and nails through targeted micronutrient therapy.',
  },
];

export const SERVICES_LIST_EN: ServiceItem[] = [
  {
    id: 'chronic',
    title: 'Medical Nutrition Therapy for Chronic Diseases',
    description: '(Comprehensive management for Diabetes, Cardiovascular health, Kidney, and Liver diseases).',
    iconName: 'Stethoscope',
    badge: 'Clinical Care',
  },
  {
    id: 'weight',
    title: 'Sustainable Weight Management & Lifestyle Modification',
    description: '(Healthy weight loss or gain without deprivation through sustainable habits).',
    iconName: 'Scale',
    badge: 'No Deprivation',
  },
  {
    id: 'sports',
    title: 'Sports Nutrition & Supplementation Program',
    description:
      '(Optimizing athletic output and evidence-based supplement regimens).',
    iconName: 'Dumbbell',
    badge: 'High Performance',
  },
  {
    id: 'cmam',
    title: 'Clinical Management of Malnutrition (CMAM)',
    description: '(Specialized therapy for pediatrics, geriatrics, and post-surgical rehabilitation).',
    iconName: 'HeartPulse',
    badge: 'Critical Care',
  },
  {
    id: 'followup',
    title: 'Periodic Clinical Follow-up & Plan Optimization',
    description: '(Continuous evaluation of laboratory tests and dynamic dietary adjustment).',
    iconName: 'Activity',
    badge: 'Continuous Care',
  },
];

export const EXCELLENCE_POINTS_EN: ExcellencePoint[] = [
  {
    id: 'academic',
    title: 'Exceptional Academic Distinction',
    description:
      'B.Sc. in Clinical Nutrition with First-Class Honors (92.05% GPA).',
    iconName: 'Award',
    highlight: '92.05% First-Class Honors',
  },
  {
    id: 'hospital',
    title: 'Extensive Bedside Hospital Training',
    description:
      'Comprehensive clinical rounds across Intensive Care Units (ICU), Diabetes, Nephrology, Oncology, and Cardiology centers.',
    iconName: 'Hospital',
    highlight: 'ICU, Oncology & Nephrology',
  },
  {
    id: 'licensed',
    title: 'Official Medical Board Licensing',
    description:
      'Fully licensed clinical practice accredited by the Medical Council and Medical Auxiliary Professions Syndicate.',
    iconName: 'ShieldCheck',
    highlight: 'Officially Licensed',
  },
  {
    id: 'lab-based',
    title: 'Laboratory-Guided Precision Therapy',
    description:
      'We reject cookie-cutter diets; every single plan is constructed around your unique blood panels and lifestyle analysis.',
    iconName: 'FileText',
    highlight: '100% Personalized',
  },
];

export const HOW_IT_WORKS_STEPS_EN: StepItem[] = [
  {
    stepNumber: 1,
    title: 'Step 1: Book Your Consultation',
    description:
      'Complete the booking form and select your preferred consultation time (In-Person / Online).',
    iconName: 'Calendar',
  },
  {
    stepNumber: 2,
    title: 'Step 2: Comprehensive Diagnostic Evaluation',
    description:
      'In-depth review of your medical history, laboratory blood tests, and current daily habits.',
    iconName: 'FileSpreadsheet',
  },
  {
    stepNumber: 3,
    title: 'Step 3: Custom Medical Plan & Follow-Up',
    description:
      'Receive your personalized medical diet plan with regular weekly monitoring to ensure sustainable success.',
    iconName: 'CheckCircle2',
  },
];

export const CERTIFICATIONS_LIST_EN: CertificationItem[] = [
  {
    id: 'medical-council',
    title: 'Medical Council License',
    subtitle: 'Yemen Medical Council — Official Clinical Practice License',
    iconName: 'ShieldAlert',
  },
  {
    id: 'nutrition-diplomas',
    title: 'Clinical Nutrition & Specialist Diplomas',
    subtitle: 'Sports Nutrition, Medical Supplementation, and Critical Care Dietetics',
    iconName: 'GraduationCap',
  },
  {
    id: 'icdl-firstaid',
    title: 'ICDL & Emergency First Aid Certification',
    subtitle: 'Technical proficiency and rapid emergency response certification',
    iconName: 'CheckSquare',
  },
];

export const FAQ_ITEMS_EN: FaqItem[] = [
  {
    id: 'online-consult',
    question: 'Are consultations available online?',
    answer:
      'Yes! We provide comprehensive online clinical nutrition consultations and remote follow-up worldwide.',
  },
  {
    id: 'deprivation',
    question: 'Do your dietary plans involve strict starvation or deprivation?',
    answer:
      'Not at all. Our approach relies on flexible, scientific macronutrient balance that integrates with your favorite meals.',
  },
  {
    id: 'chronic-conditions',
    question: 'Are chronic and autoimmune diseases factored into the plan?',
    answer:
      'Absolutely. Clinical nutrition therapy is fundamentally designed to align diet with medical conditions and blood test results.',
  },
];
