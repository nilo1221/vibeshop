'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getNicheById, getAllNiches } from '@/lib/niches';
import { generateNames } from '@/lib/nameGenerator';
import { generateShopifyAffiliateLink, generateDomainCheckLink } from '@/lib/affiliate';
import { translations, Language } from '@/lib/i18n';
import { Sparkles, Globe, ShoppingCart, Heart, RefreshCw, ArrowLeft } from 'lucide-react';

export default function NichePage() {
  const params = useParams();
  const router = useRouter();
  const lang = (params.lang as Language) || 'it';
  const nicheId = params.niche as string;
  
  const [generatedNames, setGeneratedNames] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const niche = getNicheById(nicheId);
  const t = translations[lang];

  useEffect(() => {
    if (niche) {
      const names = generateNames(niche, lang, 10);
      setGeneratedNames(names);
    }
    
    // Load favorites from localStorage
    const saved = localStorage.getItem('favorites');
    if (saved) setFavorites(JSON.parse(saved));
  }, [niche, lang]);

  const handleRegenerate = () => {
    if (!niche) return;
    
    setIsGenerating(true);
    setTimeout(() => {
      const names = generateNames(niche, lang, 10);
      setGeneratedNames(names);
      setIsGenerating(false);
    }, 500);
  };

  const toggleFavorite = (name: string) => {
    const newFavorites = favorites.includes(name)
      ? favorites.filter(f => f !== name)
      : [...favorites, name];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  if (!niche) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Niche not found</h1>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">BrandNameCraft</span>
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => router.push(`/it/${nicheId}`)}
              className={`px-3 py-1 rounded text-sm ${lang === 'it' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              IT
            </button>
            <button
              onClick={() => router.push(`/en/${nicheId}`)}
              className={`px-3 py-1 rounded text-sm ${lang === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.title} - {niche[lang as 'it' | 'en'] as string}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t.subtitle}
          </p>
        </div>

        {/* Generated Names */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t.generatedNames}
            </h2>
            <button
              onClick={handleRegenerate}
              disabled={isGenerating}
              className="text-blue-600 hover:text-blue-700 flex items-center gap-1 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
              {t.tryAnother}
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {generatedNames.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.name}
                  </h3>
                  <button
                    onClick={() => toggleFavorite(item.name)}
                    className={`p-2 rounded-lg transition-colors ${
                      favorites.includes(item.name)
                        ? 'bg-red-100 text-red-600'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-red-50 hover:text-red-600'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${favorites.includes(item.name) ? 'fill-current' : ''}`} />
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                  "{item.slogan}"
                </p>
                <div className="flex gap-2">
                  <a
                    href={generateDomainCheckLink(item.name.toLowerCase() + '.com')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Globe className="w-4 h-4" />
                    {t.checkDomain}
                  </a>
                  <a
                    href={generateShopifyAffiliateLink(item.name, item.niche, lang)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {t.openShop}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Niches */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
            {t.popularNiches}
          </h3>
          <div className="flex flex-wrap gap-2">
            {getAllNiches().map((n) => (
              <button
                key={n.id}
                onClick={() => router.push(`/${lang}/${n.id}`)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  n.id === nicheId
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-2 border-blue-500'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-2 border-transparent hover:border-gray-300'
                }`}
              >
                {n[lang as 'it' | 'en'] as string}
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-12 py-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p className="mb-2">{t.ctaText}</p>
          <p className="text-sm">© 2024 BrandNameCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
