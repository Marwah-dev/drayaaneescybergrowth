'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IconResolver } from './IconResolver';
import { CheckCircle2 } from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenBookingModal: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  onOpenBookingModal,
}) => {
  const { t, data } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8CC63F]/15 px-4 py-1.5 text-sm font-bold text-[#135238] mb-4">
            <CheckCircle2 className="h-4 w-4 text-[#EE652B]" />
            <span>{t.stepsBadge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#135238] leading-tight">
            {t.stepsTitle}
          </h2>

          <p className="mt-3 text-base font-medium text-[#5D7066] leading-relaxed">
            {t.stepsSub}
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {data.howItWorksSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="group relative flex flex-col items-center text-center rounded-3xl bg-[#F7FAF7] p-8 shadow-sm border border-[#135238]/10 hover:border-[#52B545] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Step Number Tag */}
              <div className="absolute -top-4 rtl:right-8 ltr:left-8 flex h-9 w-9 items-center justify-center rounded-full bg-[#EE652B] text-white font-extrabold text-sm shadow-md">
                0{step.stepNumber}
              </div>

              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#135238] text-white shadow-md group-hover:bg-[#52B545] transition-colors">
                <IconResolver
                  name={step.iconName}
                  className="h-8 w-8 text-[#8CC63F] group-hover:text-white transition-colors"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-[#135238] group-hover:text-[#52B545] transition-colors leading-snug mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base font-normal text-[#5D7066] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenBookingModal}
            className="inline-flex items-center justify-center rounded-2xl bg-[#8CC63F] px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-[#7db533] hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer"
          >
            <span>{t.stepsCta}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
