'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IconResolver } from './IconResolver';
import { Award, CheckCircle } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const { t, data } = useLanguage();

  return (
    <section className="py-14 md:py-18 bg-[#F7FAF7] border-t border-b border-[#135238]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#135238]/10 border border-[#135238]/20 px-3.5 py-1 text-xs font-bold text-[#135238] mb-3">
            <Award className="h-4 w-4 text-[#EE652B]" />
            <span>{t.certBadge}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#135238]">
            {t.certTitle}
          </h2>
          <p className="text-sm md:text-base font-normal text-[#5D7066] mt-2">
            {t.certSub}
          </p>
        </div>

        {/* 3 Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.certificationsList.map((cert) => (
            <div
              key={cert.id}
              className="group flex items-center gap-5 rounded-2xl bg-white p-6 shadow-xs border border-[#135238]/10 hover:border-[#52B545] hover:shadow-lg transition-all"
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#135238] text-white group-hover:bg-[#52B545] transition-colors">
                <IconResolver
                  name={cert.iconName}
                  className="h-7 w-7 text-[#8CC63F] group-hover:text-white transition-colors"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <CheckCircle className="h-4 w-4 text-[#EE652B]" />
                  <h3 className="text-base font-bold text-[#135238] group-hover:text-[#52B545] transition-colors">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm font-normal text-[#5D7066]">
                  {cert.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
