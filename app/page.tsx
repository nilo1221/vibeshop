'use client';

import { useState, useEffect } from 'react';
import { getAllNiches } from '@/lib/niches';
import { generateNames } from '@/lib/nameGenerator';
import { generateShopifyAffiliateLink, generateDomainCheckLink } from '@/lib/affiliate';
import { translations, Language } from '@/lib/i18n';
import { trackNameGeneration, trackCTAClick, trackFavoriteAction, trackCopyToClipboard, trackSocialShare, trackLanguageSwitch, trackNicheSelection, trackAffiliateClick } from '@/lib/analytics';
import { Sparkles, Globe, ShoppingCart, Heart, RefreshCw, Share2, Copy, Check, Eye } from 'lucide-react';
import StorePreview from '@/components/StorePreview';
import Particles from '@/components/Particles';

export default function Home() {
  const [lang, setLang] = useState<Language>('it');
  const [selectedNiche, setSelectedNiche] = useState<string>('');
  const [generatedNames, setGeneratedNames] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [copiedName, setCopiedName] = useState<string | null>(null);
  const [previewStore, setPreviewStore] = useState<{ name: string; niche: string; slogan: string } | null>(null);

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
        trackNameGeneration(niche.id, lang, names.length);
      }, 500);
    }
  };

  const toggleFavorite = (name: string) => {
    const newFavorites = favorites.includes(name)
      ? favorites.filter(f => f !== name)
      : [...favorites, name];
    setFavorites(newFavorites);
    const action = favorites.includes(name) ? 'remove' : 'add';
    trackFavoriteAction(action, name);
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
        trackCopyToClipboard(name);
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
      trackSocialShare('twitter', name);
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
            <img src="/images/logo/shopify.jpeg" alt="SmartChoiceNames Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-semibold text-lg">SmartChoiceNames</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                trackLanguageSwitch(lang, 'it');
                setLang('it');
              }}
              className={`px-3 py-1 rounded text-sm ${lang === 'it' ? 'bg-[#96bf48] text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              IT
            </button>
            <button
              onClick={() => {
                trackLanguageSwitch(lang, 'en');
                setLang('en');
              }}
              className={`px-3 py-1 rounded text-sm ${lang === 'en' ? 'bg-[#96bf48] text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          {/* Particles */}
          <Particles />
          
          {/* Logo Background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <img src="/images/logo/shopify.jpeg" alt="" className="w-full h-full object-cover" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
              <img src="/images/logo/shopify.jpeg" alt="SmartChoiceNames Logo" className="w-20 h-20 rounded-3xl shadow-2xl animate-float" />
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                SmartChoiceNames
              </h1>
            </div>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t.subtitle}
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 glass px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <span className="text-2xl">🚀</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">10,000+ Names Generated</span>
              </div>
              <div className="flex items-center gap-2 glass px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <span className="text-2xl">⭐</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Trusted by 5,000+ Entrepreneurs</span>
              </div>
              <div className="flex items-center gap-2 glass px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <span className="text-2xl">🔒</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">100% Free & Secure</span>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-10 max-w-5xl mx-auto">
              <div className="glass p-8 rounded-2xl border border-[#96bf48]/20 hover:border-[#96bf48]/40 transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-4xl mb-4 animate-float">💡</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Creative AI Names</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Unique, memorable names generated by AI</p>
              </div>
              <div className="glass p-8 rounded-2xl border border-[#96bf48]/20 hover:border-[#96bf48]/40 transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="text-4xl mb-4 animate-float" style={{ animationDelay: '0.5s' }}>🎯</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Niche-Specific</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tailored to your specific industry</p>
              </div>
              <div className="glass p-8 rounded-2xl border border-[#96bf48]/20 hover:border-[#96bf48]/40 transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: '1s' }}>
                <div className="text-4xl mb-4 animate-float" style={{ animationDelay: '1s' }}>⚡</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Instant Results</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Get 10 creative names in seconds</p>
              </div>
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className="glass p-10 rounded-3xl shadow-2xl mb-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
                {t.selectNiche}
              </label>
              <select
                value={selectedNiche}
                onChange={(e) => setSelectedNiche(e.target.value)}
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#96bf48] focus:border-transparent transition-all hover:border-[#96bf48]/50"
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
                className="w-full px-8 py-4 bg-gradient-to-r from-[#96bf48] to-[#5E8E3E] hover:from-[#5E8E3E] hover:to-[#4a7a35] disabled:bg-gray-400 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3 animate-pulse-glow"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-6 h-6 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-6 h-6" />
                    {t.generate}
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Popular Niches */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-700 dark:text-gray-300">
              {t.popularNiches}
            </h3>
            <div className="flex flex-wrap gap-3">
              {niches.map((niche) => (
                <button
                  key={niche.id}
                  onClick={() => {
                    trackNicheSelection(niche.id, lang);
                    setSelectedNiche(niche.id);
                  }}
                  className={`px-5 py-3 rounded-full text-sm transition-all hover:scale-105 ${
                    selectedNiche === niche.id
                      ? 'bg-[#96bf48]/20 dark:bg-[#96bf48]/30 text-[#5E8E3E] dark:text-[#96bf48] border-2 border-[#96bf48] shadow-lg'
                      : 'glass text-gray-700 dark:text-gray-300 border-2 border-transparent hover:border-[#96bf48]/30'
                  }`}
                >
                  {niche[lang as 'it' | 'en'] as string}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Win-Win Section */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '1.4s' }}>
          <div className="glass p-12 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Everyone Wins
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* What You Get */}
              <div className="text-center">
                <div className="text-6xl mb-6">🎁</div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">What You Get</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <span className="text-[#96bf48] text-xl">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Creative AI-generated store names</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#96bf48] text-xl">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Visual store preview with products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#96bf48] text-xl">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Save hours of brainstorming</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#96bf48] text-xl">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">100% free - no hidden costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#96bf48] text-xl">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Instant results in seconds</span>
                  </li>
                </ul>
              </div>

              {/* What We Get */}
              <div className="text-center">
                <div className="text-6xl mb-6">🤝</div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">How We Help</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <span className="text-[#96bf48] text-xl">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Small commission from Shopify when you sign up</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#96bf48] text-xl">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">This keeps our service 100% free for you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#96bf48] text-xl">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">No extra cost to you - same Shopify price</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#96bf48] text-xl">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Helps us improve and add more features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#96bf48] text-xl">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Transparent partnership with Shopify</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                "A true partnership where everyone benefits - you get the perfect name, we keep the lights on."
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '1.6s' }}>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            What Entrepreneurs Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#96bf48] to-[#5E8E3E] flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Marco R.</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Fashion Store Owner</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "SmartChoiceNames mi ha fatto risparmiare ore di brainstorming. Ho trovato il nome perfetto per il mio negozio di abbigliamento in 30 secondi!"
              </p>
              <div className="mt-4 flex text-[#96bf48]">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="glass p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#96bf48] to-[#5E8E3E] flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Sofia L.</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Beauty Brand Founder</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "La preview del negozio mi ha convinta subito. Ho potuto visualizzare esattamente come sarebbe apparso il mio brand. Fantastico!"
              </p>
              <div className="mt-4 flex text-[#96bf48]">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="glass p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#96bf48] to-[#5E8E3E] flex items-center justify-center text-white font-bold text-xl">
                  L
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Luca M.</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tech Entrepreneur</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "Gratuito e incredibilmente utile. I nomi generati sono davvero creativi e professionali. Ho lanciato il mio shop in una settimana!"
              </p>
              <div className="mt-4 flex text-[#96bf48]">⭐⭐⭐⭐⭐</div>
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
                className="text-[#96bf48] hover:text-[#5E8E3E] flex items-center gap-1 font-medium"
              >
                <RefreshCw className="w-4 h-4" />
                {t.tryAnother}
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {generatedNames.map((item, index) => (
                <div
                  key={item.name}
                  className="glass p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-[#96bf48]/40 transition-all relative overflow-hidden card-3d animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Premium Badge for first item */}
                  {index === 0 && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-[#96bf48] to-[#5E8E3E] text-white text-xs font-bold px-4 py-2 rounded-bl-2xl shadow-lg">
                      ⭐ RECOMMENDED
                    </div>
                  )}
                  
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="bg-[#96bf48]/20 text-[#5E8E3E] px-3 py-1 rounded-full text-xs font-medium border border-[#96bf48]/30">
                          {item.niche}
                        </span>
                        <span>•</span>
                        <span className="text-green-600 dark:text-green-400 font-medium">Available</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setPreviewStore({ name: item.name, niche: item.niche, slogan: item.slogan })}
                        className="p-3 rounded-xl glass text-gray-600 dark:text-gray-400 hover:bg-purple-100 hover:text-purple-600 transition-all hover:scale-110"
                        title="Preview Store"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => copyToClipboard(item.name)}
                        className={`p-3 rounded-xl transition-all hover:scale-110 ${
                          copiedName === item.name
                            ? 'bg-green-100 text-green-600'
                            : 'glass text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                        title={t.copyName}
                      >
                        {copiedName === item.name ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                      <button
                        onClick={() => shareOnSocial(item.name, item.slogan)}
                        className="p-3 rounded-xl glass text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 transition-all hover:scale-110"
                        title={t.shareName}
                      >
                        <Share2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => toggleFavorite(item.name)}
                        className={`p-3 rounded-xl transition-all hover:scale-110 ${
                          favorites.includes(item.name)
                            ? 'bg-red-100 text-red-600'
                            : 'glass text-gray-600 dark:text-gray-400 hover:bg-red-50 hover:text-red-600'
                        }`}
                        title={t.saveFavorite}
                      >
                        <Heart className={`w-5 h-5 ${favorites.includes(item.name) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-8 italic text-xl">
                    "{item.slogan}"
                  </p>
                  
                  <div className="space-y-4">
                    <a
                      href={generateShopifyAffiliateLink(item.name, item.niche, lang, 'home')}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        trackCTAClick('shopify', item.name);
                        trackAffiliateClick(item.name, item.niche, lang, 'home');
                      }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-[#96bf48] to-[#5E8E3E] hover:from-[#5E8E3E] hover:to-[#4a7a35] text-white rounded-2xl text-lg font-semibold transition-all shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3 animate-pulse-glow"
                    >
                      <ShoppingCart className="w-6 h-6" />
                      {t.openShop} with {item.name}
                    </a>
                    <a
                      href={generateDomainCheckLink(item.name.toLowerCase() + '.com')}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackCTAClick('domain', item.name)}
                      className="w-full px-8 py-4 glass hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl text-lg font-medium transition-all hover:scale-105 flex items-center justify-center gap-3"
                    >
                      <Globe className="w-6 h-6" />
                      {t.checkDomain}
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
          <p className="text-sm mb-4">© 2026 SmartChoiceNames. All rights reserved.</p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#96bf48]/10 to-[#5E8E3E]/10 px-4 py-2 rounded-full border border-[#96bf48]/20">
            <span className="text-xs text-[#5E8E3E] font-medium">
              {t.affiliateDisclosure}
            </span>
          </div>
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
