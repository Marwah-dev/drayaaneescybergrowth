import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';

export const metadata: Metadata = {
  title: 'د. أية أنيس | أخصائية التغذية السريرية والحميات',
  description:
    'صحتك تبدأ من طبقك: حميات علاجية ومخصصة مبنية على أسس علمية بدون حرمان. خبرة سريرية في أكبر المراكز الطبية والمستشفيات.',
  keywords: [
    'تغذية سريرية',
    'حمية غذائية',
    'دكتورة أية أنيس',
    'أخصائية تغذية في اليمن',
    'نظام غذائي صحي',
    'تغذية الأمراض المزمنة',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-ivory text-olive-dark font-cairo antialiased selection:bg-apple selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
