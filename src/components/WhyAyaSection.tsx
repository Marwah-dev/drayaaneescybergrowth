'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IconResolver } from './IconResolver';
import { ShieldCheck } from 'lucide-react';

interface WhyAyaSectionProps {
  onOpenBookingModal: () => void;
}

export const WhyAyaSection: React.FC<WhyAyaSectionProps> = ({
  onOpenBookingModal,
}) => {
  const { language, t, data } = useLanguage();

  return (
    <section
      id="why-us"
      className="scroll-mt-20 md:scroll-mt-24 py-16 md:py-24 bg-[#F7FAF7] border-t border-b border-[#135238]/10 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#135238]/10 border border-[#135238]/20 px-4 py-1.5 text-sm font-bold text-[#135238] mb-4">
            <ShieldCheck className="h-4 w-4 text-[#EE652B]" />
            <span>{t.whyBadge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#135238] leading-tight">
            {t.whyTitle}
          </h2>

          <p className="mt-3 text-base font-medium text-[#5D7066] leading-relaxed">
            {t.whySub}
          </p>
        </div>

        {/* 4 Excellence Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.excellencePoints.map((point) => (
            <div
              key={point.id}
              className="group flex flex-col sm:flex-row items-start gap-6 rounded-3xl bg-white p-7 md:p-8 shadow-sm border border-[#135238]/10 hover:border-[#52B545] hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-[#135238] text-white shadow-md group-hover:bg-[#52B545] transition-colors">
                <IconResolver
                  name={point.iconName}
                  className="h-8 w-8 text-[#8CC63F] group-hover:text-white transition-colors"
                />
              </div>

              {/* Texts */}
              <div className="flex-1">
                {point.highlight && (
                  <span className="inline-block rounded-full bg-[#EE652B]/10 px-3 py-1 text-xs font-bold text-[#EE652B] mb-2">
                    {point.highlight}
                  </span>
                )}
                <h3 className="text-lg md:text-xl font-bold text-[#135238] group-hover:text-[#52B545] transition-colors leading-snug mb-2">
                  {point.title}
                </h3>
                <p className="text-sm md:text-base font-normal text-[#5D7066] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="mt-12 rounded-3xl bg-white p-8 border border-[#52B545]/30 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center rtl:sm:text-right ltr:sm:text-left">
          <div>
            <h4 className="text-xl font-bold text-[#135238]">
              {language === 'ar'
                ? 'نظامك الغذائي مصمم وفق نتائج تحاليلك المخبرية ونمط حياتك'
                : 'Your Dietary Plan is Configured from Your Lab Investigations'}
            </h4>
            <p className="text-sm md:text-base text-[#5D7066] mt-1">
              {language === 'ar'
                ? 'بدون حلول عامة أو حميات حرمان قاسية — رعاية متكاملة تضمن لك تحسناً صحيّاً ملحوظاً ومستداماً.'
                : 'No generic diets or extreme starvation — comprehensive clinical care ensuring sustainable improvements.'}
            </p>
          </div>
          <button
            onClick={onOpenBookingModal}
            className="inline-flex items-center justify-center rounded-2xl bg-[#8CC63F] px-6 py-3.5 text-base font-bold text-white shadow-lg hover:bg-[#7db533] transition-all flex-shrink-0 cursor-pointer"
          >
            <span>{t.whyCta}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
