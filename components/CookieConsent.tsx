'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface CookieConsentProps {
  lang: 'it' | 'en';
}

const content = {
  it: {
    title: '🍪 Privacy e Cookie',
    text: 'Utilizziamo cookie per migliorare la tua esperienza e analizzare il traffico del sito. Continuando a navigare, accetti la nostra politica sulla privacy.',
    accept: 'Accetta Tutti',
    reject: 'Solo Necessari',
    privacy: 'Privacy Policy'
  },
  en: {
    title: '🍪 Privacy & Cookies',
    text: 'We use cookies to improve your experience and analyze site traffic. By continuing to browse, you accept our privacy policy.',
    accept: 'Accept All',
    reject: 'Necessary Only',
    privacy: 'Privacy Policy'
  }
};

export default function CookieConsent({ lang }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const t = content[lang];

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto glass rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">
              {t.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t.text}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={handleAccept}
              className="px-6 py-3 bg-gradient-to-r from-[#96bf48] to-[#5E8E3E] hover:from-[#5E8E3E] hover:to-[#4a7a35] text-white font-semibold rounded-xl transition-all hover:scale-105 text-sm"
            >
              {t.accept}
            </button>
            
            <button
              onClick={handleReject}
              className="px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-[#96bf48] transition-all hover:scale-105 text-sm"
            >
              {t.reject}
            </button>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
