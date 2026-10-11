'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AlertCircle, ArrowLeft } from 'lucide-react';

interface ProblemsSectionProps {
  onOpenBookingModal: () => void;
}

export const ProblemsSection: React.FC<ProblemsSectionProps> = ({
  onOpenBookingModal,
}) => {
  const { language, t, data } = useLanguage();

  return (
    <section
      id="problems"
      className="scroll-mt-20 md:scroll-mt-24 py-16 md:py-24 bg-[#F7FAF7] border-t border-b border-[#135238]/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EE652B]/10 border border-[#EE652B]/20 px-4 py-1.5 text-sm font-bold text-[#EE652B] mb-4">
            <AlertCircle className="h-4 w-4" />
            <span>{t.problemsBadge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#135238] leading-tight">
            {t.problemsTitle}
          </h2>

          <p className="mt-3 text-base font-medium text-[#5D7066] leading-relaxed">
            {t.problemsSub}
          </p>
        </div>

        {/* 18 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.problemCards.map((card) => (
            <div
              key={card.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-white p-6 md:p-7 shadow-sm border border-[#135238]/10 hover:border-[#52B545] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Red Indicator & Card Title */}
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="inline-flex h-3 w-3 rounded-full bg-[#EE652B] mt-2 flex-shrink-0 shadow-sm"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-bold text-[#135238] group-hover:text-[#52B545] transition-colors leading-snug">
                    {card.title}
                  </h3>
                </div>

                {/* Card Description */}
                <p className="text-sm font-normal text-[#5D7066] leading-relaxed rtl:pr-6 ltr:pl-6">
                  {card.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-[#135238]/10 flex items-center justify-between text-xs font-semibold text-[#5D7066]">
                <span>
                  {language === 'ar' ? 'خطة علاجية مخصصة' : 'Custom Clinical Plan'}
                </span>
                <span className="text-[#8CC63F] group-hover:translate-x-[-4px] rtl:group-hover:translate-x-[-4px] ltr:group-hover:translate-x-[4px] transition-transform inline-flex items-center gap-1">
                  {language === 'ar' ? 'استشر الأخصائية' : 'Consult Specialist'}
                  <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-0 ltr:rotate-180" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Problems Section */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#135238] via-[#1c6446] to-[#135238] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#8CC63F]/20 blur-2xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center rtl:md:text-right ltr:md:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {language === 'ar'
                  ? 'هل وجدت حالتك من ضمن هذه القائمة؟'
                  : 'Did you find your condition on this list?'}
              </h3>
              <p className="mt-2 text-base md:text-lg text-[#F7FAF7]/90 max-w-2xl">
                {language === 'ar'
                  ? 'لا تدع الأعراض تتفاقم. خطتنا السريرية تُبنى بدقة على نتائج فحوصاتك ونمط حياتك للوصول إلى أفضل استجابة صحية.'
                  : 'Do not let symptoms worsen. Our clinical therapy plan is constructed around your lab results and lifestyle for optimum recovery.'}
              </p>
            </div>
            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center justify-center rounded-2xl bg-[#8CC63F] px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-[#7db533] hover:shadow-xl transition-all flex-shrink-0 cursor-pointer"
            >
              <span>{t.headerCta}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
