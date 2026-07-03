'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getNicheById, getAllNiches } from '@/lib/niches';
import { generateNames } from '@/lib/nameGenerator';
import { generateShopifyAffiliateLink, generateDomainCheckLink } from '@/lib/affiliate';
import { translations, Language } from '@/lib/i18n';
import { trackNameGeneration, trackCTAClick, trackFavoriteAction, trackCopyToClipboard, trackSocialShare, trackAffiliateClick } from '@/lib/analytics';
import { Sparkles, Globe, ShoppingCart, Heart, RefreshCw, ArrowLeft, Share2, Copy, Check, Eye } from 'lucide-react';
import StorePreview from '@/components/StorePreview';

export default function NichePage() {
  const params = useParams();
  const router = useRouter();
  const lang = (params.lang as Language) || 'it';
  const nicheId = params.niche as string;
  
  const [generatedNames, setGeneratedNames] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [copiedName, setCopiedName] = useState<string | null>(null);
  const [previewStore, setPreviewStore] = useState<{ name: string; niche: string; slogan: string } | null>(null);

  const niche = getNicheById(nicheId);
  const t = translations[lang];

  useEffect(() => {
    if (niche) {
      const names = generateNames(niche, lang, 10);
      setGeneratedNames(names);
    }
    
    // Load favorites from localStorage
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('favorites');
        if (saved) setFavorites(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load favorites from localStorage:', error);
      }
    }
  }, [niche, lang]);

  const handleRegenerate = () => {
    if (!niche) return;
    
    setIsGenerating(true);
    setTimeout(() => {
      const names = generateNames(niche, lang, 10);
      setGeneratedNames(names);
      setIsGenerating(false);
      trackNameGeneration(niche.id, lang, names.length);
    }, 500);
  };

  const toggleFavorite = (name: string) => {
    const newFavorites = favorites.includes(name)
      ? favorites.filter(f => f !== name)
      : [...favorites, name];
    setFavorites(newFavorites);
    const action = favorites.includes(name) ? 'remove' : 'add';
    trackFavoriteAction(action, name);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
      } catch (error) {
        console.error('Failed to save favorites to localStorage:', error);
      }
    }
    showToast(favorites.includes(name) ? t.removedFromFavorites : t.addedToFavorites, 'success');
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
        trackCopyToClipboard(name);
        showToast(t.copiedToClipboard, 'success');
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
      trackSocialShare('twitter', name);
      window.open(twitterUrl, '_blank');
    }
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
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            <img src="/images/logo/shopify.jpeg" alt="SmartChoiceNames Logo" className="w-6 h-6 rounded-lg" />
            <span className="font-semibold">SmartChoiceNames</span>
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => router.push(`/it/${nicheId}`)}
              className={`px-3 py-1 rounded text-sm ${lang === 'it' ? 'bg-[#96bf48] text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              IT
            </button>
            <button
              onClick={() => router.push(`/en/${nicheId}`)}
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
              className="text-[#96bf48] hover:text-[#5E8E3E] flex items-center gap-1 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
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
                      onClick={() => setPreviewStore({ name: item.name, niche: item.niche, slogan: item.slogan })}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-purple-100 hover:text-purple-600 transition-colors"
                      title="Preview Store"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
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
                    onClick={() => trackCTAClick('domain', item.name)}
                    className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Globe className="w-4 h-4" />
                    {t.checkDomain}
                  </a>
                  <a
                    href={generateShopifyAffiliateLink(item.name, item.niche, lang, 'niche')}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackCTAClick('shopify', item.name);
                      trackAffiliateClick(item.name, item.niche, lang, 'niche');
                    }}
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
                    ? 'bg-[#96bf48]/10 dark:bg-[#96bf48]/20 text-[#5E8E3E] dark:text-[#96bf48] border-2 border-[#96bf48]'
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
          <p className="text-sm mb-4">© 2026 SmartChoiceNames. All rights reserved.</p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            {t.affiliateDisclosure}
          </p>
        </div>
      </footer>

      {/* Store Preview Modal */}
      {previewStore && (
        <StorePreview
          storeName={previewStore.name}
          niche={previewStore.niche}
          slogan={previewStore.slogan}
          onClose={() => setPreviewStore(null)}
        />
      )}
    </div>
  );
}
