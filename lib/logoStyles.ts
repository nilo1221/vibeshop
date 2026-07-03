// Color palettes and font options for logo generation

export interface ColorPalette {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

export interface FontOption {
  id: string;
  name: string;
  family: string;
  weights: string[];
  category: 'serif' | 'sans-serif' | 'display' | 'monospace';
}

export const colorPalettes: ColorPalette[] = [
  // Shopify-inspired greens
  {
    id: 'shopify-green',
    name: 'Shopify Green',
    primary: '#96bf48',
    secondary: '#5E8E3E',
    accent: '#4a7a35',
    background: '#f8fdf4'
  },
  {
    id: 'forest',
    name: 'Forest',
    primary: '#2d5a27',
    secondary: '#4a7c44',
    accent: '#8bc34a',
    background: '#f1f8e9'
  },
  {
    id: 'mint',
    name: 'Mint Fresh',
    primary: '#00b894',
    secondary: '#55efc4',
    accent: '#00cec9',
    background: '#e0f7fa'
  },

  // Blue tones
  {
    id: 'ocean',
    name: 'Ocean Blue',
    primary: '#0984e3',
    secondary: '#74b9ff',
    accent: '#00cec9',
    background: '#e3f2fd'
  },
  {
    id: 'navy',
    name: 'Navy Professional',
    primary: '#2c3e50',
    secondary: '#34495e',
    accent: '#3498db',
    background: '#ecf0f1'
  },
  {
    id: 'sky',
    name: 'Sky Light',
    primary: '#3498db',
    secondary: '#85c1e9',
    accent: '#5dade2',
    background: '#ebf5fb'
  },

  // Purple tones
  {
    id: 'royal',
    name: 'Royal Purple',
    primary: '#8e44ad',
    secondary: '#9b59b6',
    accent: '#bb6bd9',
    background: '#f4ecf7'
  },
  {
    id: 'lavender',
    name: 'Lavender',
    primary: '#6c5ce7',
    secondary: '#a29bfe',
    accent: '#fd79a8',
    background: '#f0f3ff'
  },

  // Red/Pink tones
  {
    id: 'rose',
    name: 'Rose Gold',
    primary: '#e84393',
    secondary: '#fd79a8',
    accent: '#ff7675',
    background: '#ffeef2'
  },
  {
    id: 'coral',
    name: 'Coral Sunset',
    primary: '#ff6b6b',
    secondary: '#ee5a5a',
    accent: '#ffa502',
    background: '#fff5f5'
  },

  // Orange/Yellow tones
  {
    id: 'sunset',
    name: 'Sunset Orange',
    primary: '#e17055',
    secondary: '#fab1a0',
    accent: '#fdcb6e',
    background: '#fff8f0'
  },
  {
    id: 'gold',
    name: 'Golden Luxury',
    primary: '#f39c12',
    secondary: '#f1c40f',
    accent: '#e67e22',
    background: '#fff9e6'
  },

  // Neutral tones
  {
    id: 'monochrome',
    name: 'Monochrome',
    primary: '#2d3436',
    secondary: '#636e72',
    accent: '#b2bec3',
    background: '#ffffff'
  },
  {
    id: 'charcoal',
    name: 'Charcoal Modern',
    primary: '#1a1a2e',
    secondary: '#16213e',
    accent: '#0f3460',
    background: '#f8f9fa'
  },

  // Warm tones
  {
    id: 'autumn',
    name: 'Autumn Warmth',
    primary: '#d35400',
    secondary: '#e67e22',
    accent: '#f39c12',
    background: '#fff5eb'
  },
  {
    id: 'terracotta',
    name: 'Terracotta',
    primary: '#c0392b',
    secondary: '#e74c3c',
    accent: '#e67e22',
    background: '#fff0f0'
  }
];

export const fontOptions: FontOption[] = [
  // Serif fonts
  {
    id: 'playfair',
    name: 'Playfair Display',
    family: 'Playfair Display, serif',
    weights: ['400', '700'],
    category: 'serif'
  },
  {
    id: 'merriweather',
    name: 'Merriweather',
    family: 'Merriweather, serif',
    weights: ['300', '400', '700'],
    category: 'serif'
  },
  {
    id: 'lora',
    name: 'Lora',
    family: 'Lora, serif',
    weights: ['400', '700'],
    category: 'serif'
  },

  // Sans-serif fonts
  {
    id: 'inter',
    name: 'Inter',
    family: 'Inter, sans-serif',
    weights: ['300', '400', '600', '700'],
    category: 'sans-serif'
  },
  {
    id: 'poppins',
    name: 'Poppins',
    family: 'Poppins, sans-serif',
    weights: ['300', '400', '600', '700'],
    category: 'sans-serif'
  },
  {
    id: 'roboto',
    name: 'Roboto',
    family: 'Roboto, sans-serif',
    weights: ['300', '400', '500', '700'],
    category: 'sans-serif'
  },
  {
    id: 'montserrat',
    name: 'Montserrat',
    family: 'Montserrat, sans-serif',
    weights: ['300', '400', '600', '700'],
    category: 'sans-serif'
  },

  // Display fonts
  {
    id: 'oswald',
    name: 'Oswald',
    family: 'Oswald, sans-serif',
    weights: ['300', '400', '600', '700'],
    category: 'display'
  },
  {
    id: 'raleway',
    name: 'Raleway',
    family: 'Raleway, sans-serif',
    weights: ['300', '400', '600', '700'],
    category: 'display'
  },
  {
    id: 'bebas-neue',
    name: 'Bebas Neue',
    family: 'Bebas Neue, sans-serif',
    weights: ['400'],
    category: 'display'
  },

  // Monospace fonts
  {
    id: 'fira-code',
    name: 'Fira Code',
    family: 'Fira Code, monospace',
    weights: ['400', '600'],
    category: 'monospace'
  },
  {
    id: 'space-mono',
    name: 'Space Mono',
    family: 'Space Mono, monospace',
    weights: ['400', '700'],
    category: 'monospace'
  }
];

export const getRandomPalette = (): ColorPalette => {
  return colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
};

export const getRandomFont = (category?: FontOption['category']): FontOption => {
  if (category) {
    const categoryFonts = fontOptions.filter(font => font.category === category);
    return categoryFonts[Math.floor(Math.random() * categoryFonts.length)];
  }
  return fontOptions[Math.floor(Math.random() * fontOptions.length)];
};

export const getPaletteById = (id: string): ColorPalette | undefined => {
  return colorPalettes.find(palette => palette.id === id);
};

export const getFontById = (id: string): FontOption | undefined => {
  return fontOptions.find(font => font.id === id);
};
