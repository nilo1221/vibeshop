'use client';

import { useState, useEffect } from 'react';
import { X, Sparkles, ShoppingCart } from 'lucide-react';
import { trackExitIntent } from '@/lib/analytics';

interface ExitIntentPopupProps {
  onClose: () => void;
  lang: 'it' | 'en';
}

const content = {
  it: {
    title: 'Aspetta! Non andare via senza il tuo nome perfetto',
    subtitle: 'Genera 10 nomi creativi per il tuo negozio in 30 secondi - GRATIS',
    cta: 'Genera Nomi Ora',
    close: 'No grazie, preferisco cercare altrove'
  },
  en: {
    title: 'Wait! Don\'t leave without your perfect name',
    subtitle: 'Generate 10 creative names for your store in 30 seconds - FREE',
    cta: 'Generate Names Now',
    close: 'No thanks, I\'ll look elsewhere'
  }
};

export default function ExitIntentPopup({ onClose, lang }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const t = content[lang];

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isVisible) {
        setIsVisible(true);
        trackExitIntent('show');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    trackExitIntent('close');
    setTimeout(onClose, 300);
  };

  const handleCTA = () => {
    trackExitIntent('cta_click');
    // Scroll to the input section
    document.getElementById('input-section')?.scrollIntoView({ behavior: 'smooth' });
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-lg w-full p-8 shadow-2xl animate-scale-in relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all hover:scale-110"
          aria-label="Close popup"
        >
          <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </button>

        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-[#96bf48] to-[#5E8E3E] rounded-full flex items-center justify-center animate-pulse">
            <Sparkles className="w-10 h-10 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            {t.subtitle}
          </p>

          <button
            onClick={handleCTA}
            className="w-full py-4 bg-gradient-to-r from-[#96bf48] to-[#5E8E3E] hover:from-[#5E8E3E] hover:to-[#4a7a35] text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-2xl hover:scale-105 animate-pulse-glow flex items-center justify-center gap-3 mb-4"
          >
            <ShoppingCart className="w-6 h-6" />
            {t.cta}
          </button>

          <button
            onClick={handleClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm transition-colors"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
}
