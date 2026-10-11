'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HeartPulse } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenBookingModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onOpenBookingModal,
}) => {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-[#F7FAF7] border-t border-[#135238]/10 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[700px] rounded-full bg-gradient-to-r from-[#135238]/10 via-[#52B545]/15 to-[#8CC63F]/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#135238] via-[#165a3e] to-[#1C2A23] p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl border border-white/10 relative">
          {/* Subtle accent tag */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8CC63F]/20 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#FFFFFF] mb-6">
            <span>{t.finalBadge}</span>
          </div>

          {/* Title H2 */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight md:leading-[1.3] max-w-3xl mx-auto">
            {t.finalTitle}
          </h2>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg font-medium text-[#F7FAF7]/90 leading-relaxed max-w-2xl mx-auto">
            {t.finalSub}
          </p>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center justify-center rounded-2xl bg-[#8CC63F] px-10 py-5 text-lg sm:text-xl font-bold text-white shadow-2xl hover:bg-[#7db533] hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>{t.finalPrimaryCta}</span>
            </button>
          </div>

          {/* Small security/trust note */}
          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-[#F7FAF7]/80">
            <span className="inline-flex items-center gap-1.5">
              <HeartPulse className="h-4 w-4 text-[#EE652B]" />
              <span>
                {language === 'ar'
                  ? 'رعاية سريرية مخصصة 100%'
                  : '100% Personalized Care'}
              </span>
            </span>
            <span>•</span>
            <span>
              {language === 'ar'
                ? 'متابعة أسبوعية مستمرة'
                : 'Continuous Weekly Follow-up'}
            </span>
            <span>•</span>
            <span>
              {language === 'ar' ? 'بدون حرمان' : 'No Deprivation'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
