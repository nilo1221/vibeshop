'use client';

import { useState, useEffect } from 'react';
import { getAllNiches } from '@/lib/niches';
import { generateNames } from '@/lib/nameGenerator';
import { generateShopifyAffiliateLink, generateDomainCheckLink } from '@/lib/affiliate';
import { translations, Language } from '@/lib/i18n';
import { Sparkles, Globe, ShoppingCart, Heart, RefreshCw, Share2, Copy, Check } from 'lucide-react';

export default function Home() {
  const [lang, setLang] = useState<Language>('it');
  const [selectedNiche, setSelectedNiche] = useState<string>('');
  const [generatedNames, setGeneratedNames] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const niches = getAllNiches();
  const t = translations[lang];

  // Load favorites from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('favorites');
        if (saved) setFavorites(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load favorites from localStorage:', error);
      }
    }
  }, []);

  const handleGenerate = () => {
    if (!selectedNiche) return;
    
    setIsGenerating(true);
    const niche = getAllNiches().find(n => n.id === selectedNiche);
    if (niche) {
      setTimeout(() => {
        const names = generateNames(niche, lang, 10);
        setGeneratedNames(names);
        setIsGenerating(false);
      }, 500);
    }
  };

  const toggleFavorite = (name: string) => {
    const newFavorites = favorites.includes(name)
      ? favorites.filter(f => f !== name)
      : [...favorites, name];
    setFavorites(newFavorites);
    showToast(favorites.includes(name) ? t.removedFromFavorites : t.addedToFavorites, 'success');
    // Save to localStorage
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
      } catch (error) {
        console.error('Failed to save favorites to localStorage:', error);
      }
    }
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    const timeoutId = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(timeoutId);
  };

  const copyToClipboard = (name: string) => {
    if (typeof window !== 'undefined') {
      try {
        navigator.clipboard.writeText(name);
        setCopiedName(name);
        showToast(t.copiedToClipboard || 'Copiato negli appunti', 'success');
        setTimeout(() => setCopiedName(null), 2000);
      } catch (error) {
        console.error('Failed to copy to clipboard:', error);
        showToast('Failed to copy to clipboard', 'error');
      }
    }
  };

  const shareOnSocial = (name: string, slogan: string) => {
    const text = lang === 'it' 
      ? `Ho trovato un nome perfetto per il mio negozio: "${name}" - ${slogan}`
      : `I found a perfect name for my store: "${name}" - ${slogan}`;
    const url = window.location.href;
    
    if (typeof window !== 'undefined') {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
      window.open(twitterUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f5f5] to-[#f2f7fa] dark:from-gray-900 dark:to-gray-800">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 ${
          toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white font-medium animate-in slide-in-from-right fade-in duration-300`}>
          {toast.message}
        </div>
      )}

      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/images/logo/shopify.jpeg" alt="BrandNameCraft Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-semibold text-lg">BrandNameCraft</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setLang('it')}
              className={`px-3 py-1 rounded text-sm ${lang === 'it' ? 'bg-[#96bf48] text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              IT
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded text-sm ${lang === 'en' ? 'bg-[#96bf48] text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
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
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t.subtitle}
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                {t.selectNiche}
              </label>
              <select
                value={selectedNiche}
                onChange={(e) => setSelectedNiche(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">{t.selectNiche}</option>
                {niches.map((niche) => (
                  <option key={niche.id} value={niche.id}>
                    {niche[lang as 'it' | 'en'] as string}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={handleGenerate}
                disabled={!selectedNiche || isGenerating}
                className="w-full px-6 py-3 bg-[#96bf48] hover:bg-[#5E8E3E] disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    {t.generate}
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Popular Niches */}
          <div>
            <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
              {t.popularNiches}
            </h3>
            <div className="flex flex-wrap gap-2">
              {niches.map((niche) => (
                <button
                  key={niche.id}
                  onClick={() => setSelectedNiche(niche.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedNiche === niche.id
                      ? 'bg-[#96bf48]/10 dark:bg-[#96bf48]/20 text-[#5E8E3E] dark:text-[#96bf48] border-2 border-[#96bf48]'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-2 border-transparent hover:border-gray-300'
                  }`}
                >
                  {niche[lang as 'it' | 'en'] as string}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Generated Names */}
        {generatedNames.length > 0 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t.generatedNames}
              </h2>
              <button
                onClick={handleGenerate}
                className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <RefreshCw className="w-4 h-4" />
                {t.tryAnother}
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {generatedNames.map((item) => (
                <div
                  key={item.name}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => copyToClipboard(item.name)}
                        className={`p-2 rounded-lg transition-colors ${
                          copiedName === item.name
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                        title={t.copyName}
                      >
                        {copiedName === item.name ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                      <button
                        onClick={() => shareOnSocial(item.name, item.slogan)}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                        title={t.shareName}
                      >
                        <Share2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => toggleFavorite(item.name)}
                        className={`p-2 rounded-lg transition-colors ${
                          favorites.includes(item.name)
                            ? 'bg-red-100 text-red-600'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-red-50 hover:text-red-600'
                        }`}
                        title={t.saveFavorite}
                      >
                        <Heart className={`w-5 h-5 ${favorites.includes(item.name) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
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
                      href={generateShopifyAffiliateLink(item.name, item.niche, lang, 'home')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-[#96bf48] hover:bg-[#5E8E3E] text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {t.openShop}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Favorites */}
        {favorites.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500 fill-current" />
              {t.favorites} ({favorites.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {favorites.map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg"
                >
                  <span className="text-gray-900 dark:text-white font-medium">{name}</span>
                  <button
                    onClick={() => toggleFavorite(name)}
                    className="text-gray-500 hover:text-red-600"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-12 py-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p className="mb-2">{t.ctaText}</p>
          <p className="text-sm mb-4">© 2026 BrandNameCraft. All rights reserved.</p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            {t.affiliateDisclosure}
          </p>
        </div>
      </footer>
    </div>
  );
}
