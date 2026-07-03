// Google Analytics event tracking utilities

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

// Track affiliate link clicks
export const trackAffiliateClick = (storeName: string, niche: string, lang: string, source: 'home' | 'niche') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'affiliate_click', {
      event_category: 'affiliate',
      event_label: niche,
      store_name: storeName,
      language: lang,
      source: source,
      value: 1
    });
  }
};

// Track name generation
export const trackNameGeneration = (niche: string, lang: string, namesCount: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'name_generation', {
      event_category: 'engagement',
      event_label: niche,
      language: lang,
      names_count: namesCount,
      value: namesCount
    });
  }
};

// Track CTA button clicks
export const trackCTAClick = (ctaType: 'shopify' | 'domain', storeName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'conversion',
      event_label: ctaType,
      store_name: storeName,
      value: 1
    });
  }
};

// Track favorite actions
export const trackFavoriteAction = (action: 'add' | 'remove', storeName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'favorite_action', {
      event_category: 'engagement',
      event_label: action,
      store_name: storeName,
      value: 1
    });
  }
};

// Track copy to clipboard
export const trackCopyToClipboard = (storeName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'copy_to_clipboard', {
      event_category: 'engagement',
      event_label: storeName,
      value: 1
    });
  }
};

// Track social share
export const trackSocialShare = (platform: string, storeName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'social_share', {
      event_category: 'social',
      event_label: platform,
      store_name: storeName,
      value: 1
    });
  }
};

// Track language switch
export const trackLanguageSwitch = (fromLang: string, toLang: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'language_switch', {
      event_category: 'engagement',
      event_label: `${fromLang}_to_${toLang}`,
      value: 1
    });
  }
};

// Track niche selection
export const trackNicheSelection = (niche: string, lang: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'niche_selection', {
      event_category: 'engagement',
      event_label: niche,
      language: lang,
      value: 1
    });
  }
};

// Track tone selection
export const trackToneSelection = (tone: string | null, niche: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'tone_selection', {
      event_category: 'engagement',
      event_label: tone || 'none',
      niche: niche,
      value: 1
    });
  }
};

// Track store preview open
export const trackPreviewOpen = (storeName: string, niche: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'preview_open', {
      event_category: 'engagement',
      event_label: niche,
      store_name: storeName,
      value: 1
    });
  }
};

// Track store preview close
export const trackPreviewClose = (storeName: string, duration: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'preview_close', {
      event_category: 'engagement',
      event_label: storeName,
      duration_seconds: duration,
      value: 1
    });
  }
};

// Track scroll depth
export const trackScrollDepth = (depth: '25' | '50' | '75' | '100') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll_depth', {
      event_category: 'engagement',
      event_label: `${depth}%`,
      value: parseInt(depth)
    });
  }
};

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'time_on_page', {
      event_category: 'engagement',
      event_label: `${Math.floor(seconds / 60)}min`,
      value: seconds
    });
  }
};

// Track carousel interaction
export const trackCarouselInteraction = (action: 'next' | 'prev' | 'dot_click', testimonialIndex: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'carousel_interaction', {
      event_category: 'engagement',
      event_label: action,
      testimonial_index: testimonialIndex,
      value: 1
    });
  }
};

// Track exit intent popup
export const trackExitIntent = (action: 'show' | 'close' | 'cta_click') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exit_intent', {
      event_category: 'conversion',
      event_label: action,
      value: 1
    });
  }
};

// Track feature usage
export const trackFeatureUsage = (feature: 'tone_selector' | 'preview' | 'favorites' | 'copy') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'feature_usage', {
      event_category: 'engagement',
      event_label: feature,
      value: 1
    });
  }
};
