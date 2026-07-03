// Niche configuration with prefix/suffix matrices for name generation
export interface NicheConfig {
  id: string;
  it: string;
  en: string;
  prefixes: string[];
  suffixes: string[];
  middle: string[];
  slogans: {
    it: string[];
    en: string[];
  };
}

export const niches: Record<string, NicheConfig> = {
  abbigliamento: {
    id: 'abbigliamento',
    it: 'abbigliamento',
    en: 'clothing',
    prefixes: ['Urban', 'Style', 'Trend', 'Vibe', 'Mode', 'Chic', 'Luxe', 'Pure', 'Bold', 'Fresh'],
    suffixes: ['Studio', 'Boutique', 'Co', 'Lab', 'Hub', 'Space', 'Box', 'Den', 'House', 'Wear'],
    middle: ['Fashion', 'Wear', 'Style', 'Trend', 'Look', 'Fit', 'Dress', 'Gear', 'Threads', 'Apparel'],
    slogans: {
      it: [
        'Il tuo stile, la tua identità',
        'Moda che parla di te',
        'Indossa la differenza',
        'Stile senza compromessi',
        'La moda è un attitudine'
      ],
      en: [
        'Your style, your identity',
        'Fashion that speaks to you',
        'Wear the difference',
        'Style without compromise',
        'Fashion is an attitude'
      ]
    }
  },
  cosmetici: {
    id: 'cosmetici',
    it: 'cosmetici',
    en: 'beauty',
    prefixes: ['Glow', 'Pure', 'Radiant', 'Luxe', 'Velvet', 'Silk', 'Crystal', 'Divine', 'Ethereal', 'Bloom'],
    suffixes: ['Beauty', 'Glow', 'Labs', 'Studio', 'Co', 'Care', 'Ritual', 'Bar', 'Space', 'Vault'],
    middle: ['Skin', 'Face', 'Glow', 'Beauty', 'Care', 'Radiance', 'Luxe', 'Pure', 'Fresh', 'Divine'],
    slogans: {
      it: [
        'La bellezza è un\'arte',
        'Rivela la tua luce naturale',
        'Cura della pelle, cura di te',
        'Bellezza autentica',
        'La tua routine, la tua bellezza'
      ],
      en: [
        'Beauty is an art',
        'Reveal your natural glow',
        'Skincare, self-care',
        'Authentic beauty',
        'Your routine, your beauty'
      ]
    }
  },
  elettronica: {
    id: 'elettronica',
    it: 'elettronica',
    en: 'electronics',
    prefixes: ['Tech', 'Digital', 'Smart', 'Cyber', 'Nano', 'Quantum', 'Pixel', 'Logic', 'Core', 'Prime'],
    suffixes: ['Hub', 'Zone', 'Labs', 'Depot', 'Central', 'Point', 'Base', 'Station', 'Port', 'Nexus'],
    middle: ['Tech', 'Digital', 'Smart', 'Gadget', 'Device', 'Electro', 'Circuit', 'Byte', 'Data', 'Logic'],
    slogans: {
      it: [
        'Il futuro a portata di mano',
        'Tecnologia che cambia la vita',
        'Innovazione in ogni dettaglio',
        'Smart living, smart choice',
        'La tecnologia è potere'
      ],
      en: [
        'The future at your fingertips',
        'Technology that changes lives',
        'Innovation in every detail',
        'Smart living, smart choice',
        'Technology is power'
      ]
    }
  },
  sport: {
    id: 'sport',
    it: 'sport',
    en: 'sports',
    prefixes: ['Power', 'Active', 'Fit', 'Pro', 'Elite', 'Apex', 'Prime', 'Dynamic', 'Velocity', 'Titan'],
    suffixes: ['Zone', 'Hub', 'Labs', 'Base', 'Center', 'Club', 'Gym', 'Arena', 'Field', 'Court'],
    middle: ['Fit', 'Sport', 'Active', 'Performance', 'Motion', 'Energy', 'Strength', 'Speed', 'Agility', 'Endurance'],
    slogans: {
      it: [
        'Spingiti oltre i limiti',
        'Il movimento è vita',
        'Performance senza compromessi',
        'Allenati per eccellere',
        'Il tuo corpo, la tua forza'
      ],
      en: [
        'Push beyond limits',
        'Movement is life',
        'Performance without compromise',
        'Train to excel',
        'Your body, your strength'
      ]
    }
  },
  arredamento: {
    id: 'arredamento',
    it: 'arredamento',
    en: 'home-decor',
    prefixes: ['Haven', 'Nest', 'Dwelling', 'Abode', 'Sanctuary', 'Retreat', 'Oasis', 'Hearth', 'Domain', 'Living'],
    suffixes: ['Studio', 'Design', 'Co', 'Labs', 'Space', 'Collection', 'Works', 'Craft', 'Atelier', 'Gallery'],
    middle: ['Home', 'Living', 'Space', 'Design', 'Decor', 'Style', 'Interior', 'Modern', 'Classic', 'Contemporary'],
    slogans: {
      it: [
        'La casa dove ti senti bene',
        'Design che ispira',
        'Spazi che raccontano storie',
        'Il tuo rifugio, il tuo stile',
        'Arredare è vivere'
      ],
      en: [
        'Home where you feel good',
        'Design that inspires',
        'Spaces that tell stories',
        'Your sanctuary, your style',
        'Decorating is living'
      ]
    }
  }
};

export const getNicheById = (id: string): NicheConfig | null => {
  return niches[id] || null;
};

export const getAllNiches = (): NicheConfig[] => {
  return Object.values(niches);
};
