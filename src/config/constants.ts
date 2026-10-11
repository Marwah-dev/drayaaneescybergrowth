export const WHATSAPP_NUMBER = '967779699665'; // رقم الواتساب الرسمي لاستقبال الحجوزات: 779699665

export const SOCIAL_LINKS = {
  youtube: 'https://youtube.com/channel/UCkVuE5xgN52tM6GPC16slKw',
  twitter: 'https://x.com/1uosq7',
  tiktok: 'https://www.tiktok.com/@yotaz25',
  whatsappChannel: 'https://whatsapp.com/channel/0029VbBmGGzFnSz6ZDIZV13u',
  instagram: 'https://www.instagram.com/dr.aya.anees',
  facebook: 'https://www.facebook.com/share/1EuYLrWksg/',
};

/**
 * Helper to generate a WhatsApp chat link with optional pre-filled text message
 */
export const getWhatsAppLink = (message?: string): string => {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return baseUrl;
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
};
