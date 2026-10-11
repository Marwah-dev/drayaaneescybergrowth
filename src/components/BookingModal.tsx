'use client';

import React, { useState } from 'react';
import {
  X,
  User,
  Phone,
  FileText,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppLink } from '../config/constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    consultationType: language === 'ar' ? 'حضوري' : 'In-Person',
    goal: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const messageAr = `مرحباً د. آية أنيس، أود حجز موعد استشارة تغذوية جديدة:

👤 الاسم الكامل: ${formData.fullName}
📱 رقم الجوال: ${formData.phone}
🏥 نوع الاستشارة: ${formData.consultationType}
🎯 الهدف الرئيسي / الحالة الصحية: ${formData.goal || 'غير محدد'}

شكراً لكم!`;

    const messageEn = `Hello Dr. Aya Anis, I would like to book a nutrition consultation:

👤 Full Name: ${formData.fullName}
📱 Phone Number: ${formData.phone}
🏥 Consultation Type: ${formData.consultationType}
🎯 Goal / Health Condition: ${formData.goal || 'Not specified'}

Thank you!`;

    const formattedMessage = language === 'ar' ? messageAr : messageEn;
    const whatsappUrl = getWhatsAppLink(formattedMessage);

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      consultationType: language === 'ar' ? 'حضوري' : 'In-Person',
      goal: '',
    });
    onClose();
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    // Strip out all characters except digits (0-9) and '+'
    let sanitized = input.replace(/[^\d+]/g, '');

    // Ensure '+' can only appear as the very first character (index 0)
    if (sanitized.includes('+')) {
      const startsWithPlus = sanitized.startsWith('+');
      sanitized = sanitized.replace(/\+/g, '');
      if (startsWithPlus) {
        sanitized = '+' + sanitized;
      }
    }

    setFormData({ ...formData, phone: sanitized });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C2A23]/60 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-[#135238]/10 rtl:text-right ltr:text-left overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 rtl:left-5 ltr:right-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F7FAF7] text-[#135238] hover:bg-[#EE652B]/10 hover:text-[#EE652B] transition-colors cursor-pointer"
          aria-label={t.closeModal}
        >
          <X className="h-5 w-5" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#8CC63F]/15 px-3 py-1 text-xs font-bold text-[#135238] mb-2">
                <span>{t.bookingTitle}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#135238]">
                {t.bookingSubtitle}
              </h3>
              <p className="mt-1 text-sm text-[#5D7066]">
                {t.bookingDesc}
              </p>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-bold text-[#135238] mb-1.5"
                >
                  {t.fullNameLabel} <span className="text-[#EE652B]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder={t.fullNamePlaceholder}
                    className="w-full rounded-xl border border-[#135238]/20 bg-[#F7FAF7] px-4 py-3 rtl:pr-11 rtl:pl-4 ltr:pl-11 ltr:pr-4 text-base text-[#135238] placeholder-[#5D7066]/60 focus:border-[#52B545] focus:bg-white focus:outline-none transition-all"
                  />
                  <div className="absolute top-3.5 rtl:right-3.5 ltr:left-3.5 text-[#5D7066]">
                    <User className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-bold text-[#135238] mb-1.5"
                >
                  {t.phoneLabel}{' '}
                  <span className="text-[#EE652B]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    inputMode="tel"
                    dir="ltr"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder={t.phonePlaceholder}
                    className="w-full rounded-xl border border-[#135238]/20 bg-[#F7FAF7] px-4 py-3 rtl:pr-11 rtl:pl-4 ltr:pl-11 ltr:pr-4 text-base text-[#135238] placeholder-[#5D7066]/60 focus:border-[#52B545] focus:bg-white focus:outline-none transition-all text-start"
                  />
                  <div className="absolute top-3.5 rtl:right-3.5 ltr:left-3.5 text-[#5D7066]">
                    <Phone className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-1.5 text-xs font-semibold text-[#5D7066]/90">
                  {language === 'ar'
                    ? 'يُسمح بالأرقام فقط (مع إمكانية كتابة علامة + في بداية الرقم للمفاتيح الدولية مثل السعودية +966)'
                    : 'Numbers only (optional + allowed at the start for international codes like +966)'}
                </p>
              </div>

              {/* Consultation Type Radio / Select */}
              <div>
                <label className="block text-sm font-bold text-[#135238] mb-2">
                  {t.consultationTypeLabel}{' '}
                  <span className="text-[#EE652B]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        consultationType:
                          language === 'ar' ? 'حضوري' : 'In-Person',
                      })
                    }
                    className={`flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold border transition-all cursor-pointer ${
                      formData.consultationType === 'حضوري' ||
                      formData.consultationType === 'In-Person'
                        ? 'border-[#135238] bg-[#135238] text-white shadow-md'
                        : 'border-[#135238]/20 bg-[#F7FAF7] text-[#135238] hover:bg-white'
                    }`}
                  >
                    <span>{t.inPerson}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        consultationType:
                          language === 'ar' ? 'أونلاين' : 'Online',
                      })
                    }
                    className={`flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold border transition-all cursor-pointer ${
                      formData.consultationType === 'أونلاين' ||
                      formData.consultationType === 'Online'
                        ? 'border-[#135238] bg-[#135238] text-white shadow-md'
                        : 'border-[#135238]/20 bg-[#F7FAF7] text-[#135238] hover:bg-white'
                    }`}
                  >
                    <span>{t.online}</span>
                  </button>
                </div>
              </div>

              {/* Main Goal / Note */}
              <div>
                <label
                  htmlFor="goal"
                  className="block text-sm font-bold text-[#135238] mb-1.5"
                >
                  {t.goalLabel}
                </label>
                <div className="relative">
                  <textarea
                    id="goal"
                    rows={3}
                    value={formData.goal}
                    onChange={(e) =>
                      setFormData({ ...formData, goal: e.target.value })
                    }
                    placeholder={t.goalPlaceholder}
                    className="w-full rounded-xl border border-[#135238]/20 bg-[#F7FAF7] px-4 py-3 rtl:pr-11 rtl:pl-4 ltr:pl-11 ltr:pr-4 text-base text-[#135238] placeholder-[#5D7066]/60 focus:border-[#52B545] focus:bg-white focus:outline-none transition-all resize-none"
                  />
                  <div className="absolute top-3.5 rtl:right-3.5 ltr:left-3.5 text-[#5D7066]">
                    <FileText className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-xl bg-[#8CC63F] py-4 text-lg font-bold text-white shadow-lg hover:bg-[#7db533] hover:shadow-xl transition-all cursor-pointer"
                >
                  <span>{t.submitBooking}</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Success confirmation screen */
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#8CC63F]/20 text-[#135238]">
              <CheckCircle2 className="h-10 w-10 text-[#52B545]" />
            </div>
            <h3 className="text-2xl font-bold text-[#135238]">
              {t.successTitle}
            </h3>
            <p className="text-base text-[#5D7066] max-w-sm mx-auto leading-relaxed">
              {t.successDesc}{' '}
              <strong className="text-[#135238]">{formData.fullName}</strong>.
              {' '}{language === 'ar'
                ? 'سيتواصل معك فريق العيادة قريباً لتأكيد موعد الاستشارة '
                : 'Our clinic team will reach out shortly to confirm your consultation '}
              <strong className="text-[#EE652B]">
                ({formData.consultationType})
              </strong>
              .
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppLink(
                  language === 'ar'
                    ? `مرحباً د. آية أنيس، أود حجز موعد استشارة تغذوية جديدة:\n\n👤 الاسم الكامل: ${formData.fullName}\n📱 رقم الجوال: ${formData.phone}\n🏥 نوع الاستشارة: ${formData.consultationType}\n🎯 الهدف الرئيسي: ${formData.goal || 'غير محدد'}\n\nشكراً لكم!`
                    : `Hello Dr. Aya Anis, I would like to book a nutrition consultation:\n\n👤 Full Name: ${formData.fullName}\n📱 Phone Number: ${formData.phone}\n🏥 Consultation Type: ${formData.consultationType}\n🎯 Goal: ${formData.goal || 'Not specified'}\n\nThank you!`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-xl bg-[#25D366] px-6 py-3 text-base font-bold text-white hover:bg-[#1faf53] transition-all text-center"
              >
                <span>{language === 'ar' ? 'فتح المحادثة في واتساب' : 'Open WhatsApp Chat'}</span>
              </a>
              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto rounded-xl bg-[#135238] px-6 py-3 text-base font-bold text-white hover:bg-[#52B545] transition-all cursor-pointer"
              >
                <span>{t.closeModal}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
