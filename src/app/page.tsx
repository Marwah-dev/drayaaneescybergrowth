'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ProblemsSection } from '../components/ProblemsSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyAyaSection } from '../components/WhyAyaSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { CertificationsSection } from '../components/CertificationsSection';
import { FaqSection } from '../components/FaqSection';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAF7] text-[#135238] font-cairo">
      {/* 1. Header (Navigation) */}
      <Header onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenBookingModal={handleOpenBookingModal} />

        {/* 3. Problem & Pain Points Section */}
        <ProblemsSection onOpenBookingModal={handleOpenBookingModal} />

        {/* 4. Services & Solutions Section */}
        <ServicesSection onOpenBookingModal={handleOpenBookingModal} />

        {/* 5. Why Dr. Aya Anis Section (Authority & Value Proposition) */}
        <WhyAyaSection onOpenBookingModal={handleOpenBookingModal} />

        {/* 6. How It Works (3 Easy Steps) */}
        <HowItWorksSection onOpenBookingModal={handleOpenBookingModal} />

        {/* 7. Certifications & Badges */}
        <CertificationsSection />

        {/* 8. FAQ Section */}
        <FaqSection />

        {/* 9. Final Call to Action Section */}
        <FinalCtaSection onOpenBookingModal={handleOpenBookingModal} />
      </main>

      {/* 10. Footer Section */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
      />
    </div>
  );
}
