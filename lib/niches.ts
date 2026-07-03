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
  tone?: {
    luxury?: {
      prefixes: string[];
      suffixes: string[];
      middle: string[];
    };
    playful?: {
      prefixes: string[];
      suffixes: string[];
      middle: string[];
    };
    professional?: {
      prefixes: string[];
      suffixes: string[];
      middle: string[];
    };
    casual?: {
      prefixes: string[];
      suffixes: string[];
      middle: string[];
    };
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
    },
    tone: {
      luxury: {
        prefixes: ['Royal', 'Elite', 'Prestige', 'Grand', 'Imperial', 'Noble', 'Regal', 'Opulent', 'Majestic', 'Supreme'],
        suffixes: ['Maison', 'Atelier', 'Collection', 'Couture', 'Legacy', 'Heritage', 'Estates', 'Manor', 'Palace', 'Reserve'],
        middle: ['Haute', 'Couture', 'Bespoke', 'Tailored', 'Artisan', 'Crafted', 'Signature', 'Exclusive', 'Premium', 'Select']
      },
      playful: {
        prefixes: ['Fun', 'Jolly', 'Happy', 'Zesty', 'Bubbly', 'Peppy', 'Cheer', 'Sunny', 'Bright', 'Spark'],
        suffixes: ['Pop', 'Vibe', 'Glow', 'Spark', 'Buzz', 'Jam', 'Beat', 'Joy', 'Play', 'Zone'],
        middle: ['Happy', 'Fun', 'Play', 'Joy', 'Smile', 'Cheer', 'Bright', 'Sunny', 'Zest', 'Vibe']
      },
      professional: {
        prefixes: ['Prime', 'Apex', 'Summit', 'Pinnacle', 'Vertex', 'Zenith', 'Acme', 'Crown', 'Peak', 'Elite'],
        suffixes: ['Group', 'Partners', 'Associates', 'Solutions', 'Systems', 'Dynamics', 'Ventures', 'Enterprise', 'Capital', 'Holdings'],
        middle: ['Pro', 'Expert', 'Master', 'Prime', 'Elite', 'Pro', 'Smart', 'Sharp', 'Wise', 'Strategic']
      },
      casual: {
        prefixes: ['Cozy', 'Chill', 'Easy', 'Relax', 'Zen', 'Calm', 'Mellow', 'Soft', 'Gentle', 'Peace'],
        suffixes: ['Corner', 'Spot', 'Place', 'Nook', 'Den', 'Lounge', 'Haven', 'Retreat', 'Hideaway', 'Sanctuary'],
        middle: ['Easy', 'Chill', 'Relax', 'Zen', 'Calm', 'Peace', 'Soft', 'Gentle', 'Mellow', 'Cozy']
      }
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
  },
  alimentari: {
    id: 'alimentari',
    it: 'alimentari',
    en: 'food',
    prefixes: ['Fresh', 'Organic', 'Pure', 'Natural', 'Green', 'Harvest', 'Farm', 'Garden', 'Taste', 'Flavor'],
    suffixes: ['Market', 'Foods', 'Pantry', 'Kitchen', 'Table', 'Bowl', 'Plate', 'Cuisine', 'Deli', 'Bistro'],
    middle: ['Food', 'Eat', 'Taste', 'Fresh', 'Organic', 'Natural', 'Healthy', 'Gourmet', 'Cuisine', 'Flavor'],
    slogans: {
      it: [
        'Sapori autentici dal cuore',
        'Cibo fresco, vita sana',
        'Il gusto della natura',
        'Qualità senza compromessi',
        'Nutrire il corpo, nutrire l\'anima'
      ],
      en: [
        'Authentic flavors from the heart',
        'Fresh food, healthy life',
        'The taste of nature',
        'Quality without compromise',
        'Nourish body, nourish soul'
      ]
    }
  },
  animali: {
    id: 'animali',
    it: 'animali',
    en: 'pets',
    prefixes: ['Paw', 'Tail', 'Furry', 'Happy', 'Loyal', 'Cute', 'Playful', 'Friendly', 'Loving', 'Care'],
    suffixes: ['Paws', 'Tails', 'Pets', 'Care', 'Haven', 'Home', 'World', 'Life', 'Love', 'Buddy'],
    middle: ['Pet', 'Paw', 'Tail', 'Furry', 'Animal', 'Friend', 'Companion', 'Loyal', 'Happy', 'Playful'],
    slogans: {
      it: [
        'Amici a quattro zampe',
        'Cura per i tuoi amici',
        'Felicità animale',
        'Amore senza parole',
        'La tua famiglia pelosa'
      ],
      en: [
        'Four-legged friends',
        'Care for your friends',
        'Animal happiness',
        'Love without words',
        'Your furry family'
      ]
    }
  },
  tecnologia: {
    id: 'tecnologia',
    it: 'tecnologia',
    en: 'tech',
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
  salute: {
    id: 'salute',
    it: 'salute',
    en: 'health',
    prefixes: ['Vital', 'Pure', 'Well', 'Health', 'Life', 'Fit', 'Active', 'Balance', 'Zen', 'Care'],
    suffixes: ['Life', 'Care', 'Health', 'Wellness', 'Balance', 'Fit', 'Zone', 'Hub', 'Center', 'Plus'],
    middle: ['Health', 'Wellness', 'Fit', 'Vital', 'Pure', 'Life', 'Active', 'Balance', 'Care', 'Zen'],
    slogans: {
      it: [
        'La tua salute, la tua priorità',
        'Vivere meglio ogni giorno',
        'Equilibrio mente e corpo',
        'Benessere totale',
        'Investi nella tua salute'
      ],
      en: [
        'Your health, your priority',
        'Live better every day',
        'Balance mind and body',
        'Total wellness',
        'Invest in your health'
      ]
    }
  },
  viaggi: {
    id: 'viaggi',
    it: 'viaggi',
    en: 'travel',
    prefixes: ['Wander', 'Voyage', 'Journey', 'Travel', 'Explore', 'Adventure', 'Discovery', 'Quest', 'Roam', 'Trek'],
    suffixes: ['Tours', 'Trips', 'Voyage', 'Journeys', 'Adventures', 'Explorer', 'Nomad', 'Wanderer', 'Traveler', 'Quest'],
    middle: ['Travel', 'Journey', 'Adventure', 'Explore', 'Voyage', 'Discovery', 'Wander', 'Quest', 'Roam', 'Trek'],
    slogans: {
      it: [
        'Il mondo ti aspetta',
        'Avventure senza fine',
        'Scopri nuovi orizzonti',
        'Viaggiare è vivere',
        'Ogni viaggio, una storia'
      ],
      en: [
        'The world awaits you',
        'Endless adventures',
        'Discover new horizons',
        'Traveling is living',
        'Every journey, a story'
      ]
    }
  },
  arte: {
    id: 'arte',
    it: 'arte',
    en: 'art',
    prefixes: ['Art', 'Creative', 'Design', 'Studio', 'Gallery', 'Muse', 'Vision', 'Inspire', 'Create', 'Craft'],
    suffixes: ['Studio', 'Gallery', 'Works', 'Craft', 'Design', 'Arts', 'Space', 'Hub', 'Lab', 'Atelier'],
    middle: ['Art', 'Creative', 'Design', 'Studio', 'Gallery', 'Vision', 'Inspire', 'Create', 'Craft', 'Muse'],
    slogans: {
      it: [
        'Arte che ispira',
        'Creatività senza limiti',
        'Esprimi te stesso',
        'L\'arte è vita',
        'Crea il tuo stile'
      ],
      en: [
        'Art that inspires',
        'Creativity without limits',
        'Express yourself',
        'Art is life',
        'Create your style'
      ]
    }
  },
  musica: {
    id: 'musica',
    it: 'musica',
    en: 'music',
    prefixes: ['Sound', 'Beat', 'Rhythm', 'Melody', 'Harmony', 'Tune', 'Note', 'Chord', 'Groove', 'Vibe'],
    suffixes: ['Studio', 'Sound', 'Music', 'Beats', 'Tunes', 'Records', 'Audio', 'Vibes', 'Groove', 'Jam'],
    middle: ['Music', 'Sound', 'Beat', 'Rhythm', 'Melody', 'Harmony', 'Tune', 'Note', 'Chord', 'Groove'],
    slogans: {
      it: [
        'La musica è l\'anima',
        'Suona il tuo ritmo',
        'Armonia in ogni nota',
        'Vibrazioni positive',
        'La colonna sonora della tua vita'
      ],
      en: [
        'Music is the soul',
        'Play your rhythm',
        'Harmony in every note',
        'Positive vibrations',
        'The soundtrack of your life'
      ]
    }
  },
  parrucchieri: {
    id: 'parrucchieri',
    it: 'parrucchieri',
    en: 'hairdressers',
    prefixes: ['Style', 'Cut', 'Hair', 'Mane', 'Fade', 'Trim', 'Shear', 'Clip', 'Groom', 'Chop'],
    suffixes: ['Studio', 'Salon', 'Barber', 'Cuts', 'Style', 'Lab', 'Co', 'House', 'Lounge', 'Hub'],
    middle: ['Hair', 'Style', 'Cut', 'Fade', 'Groom', 'Trim', 'Shear', 'Clip', 'Mane', 'Chop'],
    slogans: {
      it: [
        'Il tuo stile, la nostra passione',
        'Tagli che fanno la differenza',
        'Bellezza in ogni dettaglio',
        'Il look perfetto per te',
        'Esperti del tuo stile'
      ],
      en: [
        'Your style, our passion',
        'Cuts that make a difference',
        'Beauty in every detail',
        'The perfect look for you',
        'Experts in your style'
      ]
    },
    tone: {
      luxury: {
        prefixes: ['Royal', 'Elite', 'Prestige', 'Grand', 'Imperial', 'Noble', 'Regal', 'Opulent', 'Majestic', 'Supreme'],
        suffixes: ['Maison', 'Atelier', 'Salon', 'Couture', 'Legacy', 'Heritage', 'Estates', 'Manor', 'Palace', 'Reserve'],
        middle: ['Haute', 'Couture', 'Bespoke', 'Tailored', 'Artisan', 'Crafted', 'Signature', 'Exclusive', 'Premium', 'Select']
      },
      playful: {
        prefixes: ['Fun', 'Jolly', 'Happy', 'Zesty', 'Bubbly', 'Peppy', 'Cheer', 'Sunny', 'Bright', 'Spark'],
        suffixes: ['Pop', 'Vibe', 'Glow', 'Spark', 'Buzz', 'Jam', 'Beat', 'Joy', 'Play', 'Zone'],
        middle: ['Happy', 'Fun', 'Play', 'Joy', 'Smile', 'Cheer', 'Bright', 'Sunny', 'Zest', 'Vibe']
      },
      professional: {
        prefixes: ['Prime', 'Apex', 'Summit', 'Pinnacle', 'Vertex', 'Zenith', 'Acme', 'Crown', 'Peak', 'Elite'],
        suffixes: ['Group', 'Partners', 'Associates', 'Solutions', 'Systems', 'Dynamics', 'Ventures', 'Enterprise', 'Capital', 'Holdings'],
        middle: ['Pro', 'Expert', 'Master', 'Prime', 'Elite', 'Pro', 'Smart', 'Sharp', 'Wise', 'Strategic']
      },
      casual: {
        prefixes: ['Cozy', 'Chill', 'Easy', 'Relax', 'Zen', 'Calm', 'Mellow', 'Soft', 'Gentle', 'Peace'],
        suffixes: ['Corner', 'Spot', 'Place', 'Nook', 'Den', 'Lounge', 'Haven', 'Retreat', 'Hideaway', 'Sanctuary'],
        middle: ['Easy', 'Chill', 'Relax', 'Zen', 'Calm', 'Peace', 'Soft', 'Gentle', 'Mellow', 'Cozy']
      }
    }
  }
};

export const getNicheById = (id: string): NicheConfig | null => {
  return niches[id] || null;
};

export const getAllNiches = (): NicheConfig[] => {
  return Object.values(niches);
};
