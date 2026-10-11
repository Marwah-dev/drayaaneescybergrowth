'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onOpenBookingModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { language, toggleLanguage, t, data } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2 md:py-2.5'
          : 'bg-[#F7FAF7] py-2.5 md:py-3 border-b border-[#135238]/10'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Official Transparent Logo - Normal compact header height, visually prominent & bilingual alignment */}
          <a
            href="#"
            className="flex items-center group focus:outline-none flex-shrink-0"
          >
            <div className="relative h-11 sm:h-12 md:h-14 w-28 sm:w-32 md:w-36 lg:w-40">
              <Image
                src="/images/logo (3).png"
                alt="Dr. Aya Anis Logo"
                fill
                priority
                className="object-contain rtl:object-right ltr:object-left group-hover:opacity-95 transition-all"
                sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 160px"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {data.navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm lg:text-base font-semibold text-[#135238] hover:text-[#52B545] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-[#EE652B] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Minimalist Compact Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 rounded-lg bg-white/80 border border-[#135238]/15 px-2.5 py-1.5 text-xs font-bold text-[#135238] hover:bg-[#F7FAF7] hover:border-[#8CC63F] hover:text-[#EE652B] transition-all cursor-pointer shadow-xs"
              aria-label="تبديل اللغة / Switch Language"
              title={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              <Globe className="h-3.5 w-3.5 text-[#EE652B]" />
              <span className="tracking-wider">{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>

            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center justify-center rounded-2xl bg-[#8CC63F] px-5 py-2.5 text-sm md:text-base font-bold text-white shadow-md hover:bg-[#7db533] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>{t.headerCta}</span>
            </button>
          </div>

          {/* Mobile Actions: Switcher & Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 rounded-lg bg-white border border-[#135238]/15 px-2 py-1.5 text-xs font-bold text-[#135238] shadow-xs hover:border-[#8CC63F] transition-all"
              aria-label="تبديل اللغة / Switch Language"
            >
              <Globe className="h-3.5 w-3.5 text-[#EE652B]" />
              <span className="tracking-wider">{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>

            <button
              onClick={onOpenBookingModal}
              className="rounded-xl bg-[#8CC63F] px-3.5 py-1.5 text-xs font-bold text-white shadow-sm"
            >
              {language === 'ar' ? 'احجز الآن' : 'Book'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#135238] border border-[#135238]/10 hover:bg-[#F7FAF7] transition-colors"
              aria-label="القائمة الرئيسية"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 rounded-2xl bg-white p-4 shadow-xl border border-[#135238]/10 md:hidden animate-fadeIn">
            <nav className="flex flex-col space-y-3">
              {data.navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-base font-semibold text-[#135238] hover:bg-[#F7FAF7] hover:text-[#52B545] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-[#135238]/10">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBookingModal();
                  }}
                  className="w-full inline-flex items-center justify-center rounded-xl bg-[#8CC63F] py-3 text-base font-bold text-white shadow-md hover:bg-[#7db533]"
                >
                  <span>{t.headerCta}</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
