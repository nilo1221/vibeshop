'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getAllNiches } from '@/lib/niches';
import { generateNames } from '@/lib/nameGenerator';
import { generateShopifyAffiliateLink, generateDomainCheckLink } from '@/lib/affiliate';
import { translations, Language } from '@/lib/i18n';
import { Sparkles, Globe, ShoppingCart, Heart, RefreshCw, Share2, Copy, Check, Mail } from 'lucide-react';

export default function Home() {
  const [lang, setLang] = useState<Language>('it');
  const [selectedNiche, setSelectedNiche] = useState<string>('');
  const [generatedNames, setGeneratedNames] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [copiedName, setCopiedName] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');

  const niches = getAllNiches();
  const t = translations[lang];

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
    if (favorites.includes(name)) {
      setFavorites(favorites.filter(f => f !== name));
      showToast(t.removedFromFavorites || 'Rimosso dai preferiti', 'success');
    } else {
      setFavorites([...favorites, name]);
      showToast(t.addedToFavorites || 'Aggiunto ai preferiti', 'success');
    }
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('favorites', JSON.stringify(favorites.includes(name) ? favorites.filter(f => f !== name) : [...favorites, name]));
    }
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const copyToClipboard = (name: string) => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(name);
      setCopiedName(name);
      showToast(t.copiedToClipboard || 'Copiato negli appunti', 'success');
      setTimeout(() => setCopiedName(null), 2000);
    }
  };

  const shareOnSocial = (name: string, slogan: string) => {
    const text = `Ho trovato un nome perfetto per il mio negozio: "${name}" - ${slogan}`;
    const url = window.location.href;
    
    if (typeof window !== 'undefined') {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
      
      // Open Twitter by default, could add a modal to choose platform
      window.open(twitterUrl, '_blank');
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Here you would integrate with an email service like Mailchimp, ConvertKit, etc.
    showToast(t.emailSubmitted || 'Email inviata con successo!', 'success');
    setEmail('');
  };

  // Load favorites from localStorage on mount
  if (typeof window !== 'undefined') {
    useState(() => {
      const saved = localStorage.getItem('favorites');
      if (saved) setFavorites(JSON.parse(saved));
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
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
            <Sparkles className="w-6 h-6 text-blue-600" />
            <span className="font-semibold text-lg">BrandNameCraft</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setLang('it')}
              className={`px-3 py-1 rounded text-sm ${lang === 'it' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              IT
            </button>
            <button
              onClick={() => setLang('en')}
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
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
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
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-2 border-blue-500'
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
              {generatedNames.map((item, index) => (
                <div
                  key={index}
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
        )}

        {/* Email Capture */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Mail className="w-6 h-6" />
                {t.emailCaptureTitle}
              </h3>
              <p className="text-blue-100">
                {lang === 'it' ? 'Ricevi idee extra per il tuo brand direttamente nella tua casella di posta.' : 'Get extra brand ideas directly in your inbox.'}
              </p>
            </div>
            <form onSubmit={handleEmailSubmit} className="flex-1 w-full max-w-md">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailCapturePlaceholder}
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {t.emailCaptureButton}
                </button>
              </div>
            </form>
          </div>
        </div>

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
          <p className="text-sm">© 2026 BrandNameCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
