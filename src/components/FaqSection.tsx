'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { getWhatsAppLink } from '../config/constants';

export const FaqSection: React.FC = () => {
  const { language, t, data } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(data.faqItems[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="scroll-mt-20 md:scroll-mt-24 py-16 md:py-24 bg-white relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8CC63F]/15 px-4 py-1.5 text-sm font-bold text-[#135238] mb-4">
            <HelpCircle className="h-4 w-4 text-[#EE652B]" />
            <span>{t.faqBadge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#135238] leading-tight">
            {t.faqTitle}
          </h2>

          <p className="mt-3 text-base font-medium text-[#5D7066] leading-relaxed">
            {t.faqSub}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {data.faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-[#52B545] bg-[#F7FAF7] shadow-md'
                    : 'border-[#135238]/10 bg-white hover:border-[#135238]/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="flex w-full items-center justify-between gap-4 p-6 rtl:text-right ltr:text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-bold text-[#135238]">
                    {item.question}
                  </span>
                  <div
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#135238] text-white rotate-180'
                        : 'bg-[#F7FAF7] text-[#135238]'
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#135238]/10">
                    <p className="text-sm md:text-base font-normal text-[#5D7066] leading-relaxed rtl:text-right ltr:text-left">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra support banner */}
        <div className="mt-12 rounded-2xl bg-[#F7FAF7] p-6 text-center border border-[#135238]/10">
          <p className="text-base text-[#5D7066]">
            {language === 'ar' ? 'لديك استفسار آخر لم تجده هنا؟ ' : 'Have another question? '}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#135238] underline hover:text-[#EE652B] transition-colors"
            >
              {language === 'ar' ? 'تحدث معنا مباشرة عبر الواتساب' : 'Chat with us directly on WhatsApp'}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
