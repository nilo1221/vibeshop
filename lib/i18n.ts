// Internationalization configuration
export const languages = {
  it: 'Italiano',
  en: 'English'
} as const;

export type Language = keyof typeof languages;

export const translations = {
  it: {
    title: 'SmartChoiceNames | Generatore di Nomi per Negozi E-commerce',
    subtitle: 'Trova il nome perfetto per il tuo negozio online',
    placeholder: 'Inserisci la tua nicchia (es. gioielli, abbigliamento)',
    generate: 'Genera Nomi',
    generatedNames: 'Nomi Generati',
    checkDomain: 'Verifica Disponibilità Dominio',
    openShop: 'Apri il tuo shop con questo nome',
    favorites: 'Preferiti',
    saveFavorite: 'Salva',
    removeFavorite: 'Rimuovi',
    noFavorites: 'Nessun preferito salvato',
    tryAnother: 'Genera altri nomi',
    selectNiche: 'Seleziona una nicchia',
    popularNiches: 'Nicchie Popolari',
    metaTitle: 'SmartChoiceNames | Generatore di Nomi per Negozi',
    metaDescription: 'Genera nomi creativi per il tuo negozio e-commerce con SmartChoiceNames. Verifica disponibilità domini e apri il tuo shop su Shopify.',
    ctaText: 'Il nome è pronto? Controlla subito la disponibilità su Shopify e parti oggi.',
    addedToFavorites: 'Aggiunto ai preferiti',
    removedFromFavorites: 'Rimosso dai preferiti',
    copiedToClipboard: 'Copiato negli appunti',
    shareName: 'Condividi nome',
    copyName: 'Copia nome',
    affiliateDisclosure: 'Posso guadagnare una commissione quando ti registri a Shopify tramite il mio link.'
  },
  en: {
    title: 'SmartChoiceNames | E-commerce Store Name Generator',
    subtitle: 'Find the perfect name for your online store',
    placeholder: 'Enter your niche (e.g., jewelry, clothing)',
    generate: 'Generate Names',
    generatedNames: 'Generated Names',
    checkDomain: 'Check Domain Availability',
    openShop: 'Open your shop with this name',
    favorites: 'Favorites',
    saveFavorite: 'Save',
    removeFavorite: 'Remove',
    noFavorites: 'No favorites saved',
    tryAnother: 'Generate more names',
    selectNiche: 'Select a niche',
    popularNiches: 'Popular Niches',
    metaTitle: 'SmartChoiceNames | Store Name Generator',
    metaDescription: 'Generate creative names for your e-commerce store with SmartChoiceNames. Check domain availability and open your shop on Shopify.',
    ctaText: 'Name ready? Check availability on Shopify and start today.',
    addedToFavorites: 'Added to favorites',
    removedFromFavorites: 'Removed from favorites',
    copiedToClipboard: 'Copied to clipboard',
    shareName: 'Share name',
    copyName: 'Copy name',
    affiliateDisclosure: 'I may earn a commission when you sign up for Shopify through my link.'
  }
} as const;

export const getTranslation = (lang: Language, key: keyof typeof translations.it): string => {
  return translations[lang][key];
};
