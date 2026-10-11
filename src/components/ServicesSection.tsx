'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IconResolver } from './IconResolver';

interface ServicesSectionProps {
  onOpenBookingModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBookingModal,
}) => {
  const { t, data } = useLanguage();

  return (
    <section id="services" className="scroll-mt-20 md:scroll-mt-24 py-16 md:py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8CC63F]/15 px-4 py-1.5 text-sm font-bold text-[#135238] mb-4">
            <span>{t.servicesBadge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#135238] leading-tight">
            {t.servicesTitle}
          </h2>

          <p className="mt-3 text-base font-medium text-[#5D7066] leading-relaxed">
            {t.servicesSub}
          </p>
        </div>

        {/* 5 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.servicesList.map((service, index) => (
            <div
              key={service.id}
              className={`group relative flex flex-col justify-between rounded-3xl bg-[#F7FAF7] p-8 shadow-sm border border-[#135238]/10 hover:border-[#52B545] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#135238] text-white shadow-md group-hover:bg-[#52B545] transition-colors">
                    <IconResolver
                      name={service.iconName}
                      className="h-7 w-7 text-[#8CC63F] group-hover:text-white transition-colors"
                    />
                  </div>
                  {service.badge && (
                    <span className="rounded-full bg-white px-3.5 py-1 text-xs font-bold text-[#EE652B] border border-[#EE652B]/20 shadow-xs">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="text-lg md:text-xl font-bold text-[#135238] group-hover:text-[#52B545] transition-colors leading-snug mb-3">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm md:text-base font-normal text-[#5D7066] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Card CTA Button */}
              <div className="mt-8 pt-6 border-t border-[#135238]/10">
                <button
                  onClick={onOpenBookingModal}
                  className="w-full inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-base font-bold text-[#135238] hover:bg-[#8CC63F] hover:text-white border border-[#135238]/10 transition-all cursor-pointer shadow-xs"
                >
                  <span>{t.servicesCta}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
