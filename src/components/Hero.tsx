'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppLink } from '../config/constants';

const WhatsAppIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface HeroProps {
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  const { t, data } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7FAF7] to-white pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Decorative background blur accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-[#52B545]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-[#8CC63F]/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Right Column: Texts & CTAs */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 rtl:text-right ltr:text-left">
            {/* Medical Trust Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#135238]/10 border border-[#135238]/20 px-4 py-1.5 text-sm font-semibold text-[#135238]">
              <span>{t.heroTag}</span>
            </div>

            {/* H1 Main Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#135238] leading-tight md:leading-[1.3] tracking-tight">
              {t.heroTitle}
            </h1>

            {/* Subheadline (H2/Subtitles - Fresh Green #52B545) */}
            <p className="text-base sm:text-lg lg:text-xl font-semibold text-[#52B545] leading-relaxed">
              {t.heroSub}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Primary CTA */}
              <button
                onClick={onOpenBookingModal}
                className="h-[52px] inline-flex items-center justify-center rounded-2xl bg-[#8CC63F] px-7 text-base sm:text-lg font-bold text-[#FFFFFF] shadow-xl hover:bg-[#7db533] hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>{t.heroPrimaryCta}</span>
              </button>

              {/* Secondary CTA */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-[52px] inline-flex items-center justify-center gap-2.5 rounded-2xl border-2 border-[#135238] bg-white px-5 text-base sm:text-lg font-bold text-[#135238] hover:bg-[#135238] hover:text-white transition-all shadow-sm"
              >
                <WhatsAppIcon className="h-5 w-5 flex-shrink-0 text-[#25D366] group-hover:text-white transition-colors" />
                <span>{t.heroSecondaryCta}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-[#135238]/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {data.trustBadges.map((badge) => (
                  <div
                    key={badge.id}
                    className="flex items-start gap-2.5 rounded-2xl bg-white p-3.5 shadow-sm border border-[#135238]/10 hover:border-[#52B545] transition-all"
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-[#EE652B]" />
                    </div>
                    <span className="text-sm font-semibold text-[#5D7066] leading-snug">
                      {badge.text.replace('✓ ', '')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Left Column: Visual Professional Profile Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glow border ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#135238] via-[#52B545] to-[#8CC63F] opacity-20 blur-xl"></div>

              {/* Main Image Card */}
              <div className="relative overflow-hidden rounded-3xl bg-white p-2 shadow-2xl border border-[#135238]/10">
                <div className="relative h-[440px] sm:h-[500px] w-full overflow-hidden rounded-2xl bg-[#F7FAF7]">
                  <Image
                    src="/images/dr-aya-profile.png"
                    alt={`${t.drName} - ${t.drTitle}`}
                    fill
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
