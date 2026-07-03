// Free SVG icons for logo generation
// These are simplified SVG paths suitable for logo design

export interface LogoIcon {
  id: string;
  name: string;
  category: string;
  svg: string;
}

export const logoIcons: LogoIcon[] = [
  // Shopping & Retail
  {
    id: 'shopping-bag',
    name: 'Shopping Bag',
    category: 'retail',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`
  },
  {
    id: 'store',
    name: 'Store',
    category: 'retail',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
  },
  {
    id: 'tag',
    name: 'Tag',
    category: 'retail',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`
  },
  {
    id: 'gift',
    name: 'Gift',
    category: 'retail',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`
  },

  // Fashion & Style
  {
    id: 'shirt',
    name: 'Shirt',
    category: 'fashion',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.4a1.6 1.6 0 0 0-2.22 0l-1.62 1.62a1.6 1.6 0 0 0 0 2.22l2.84 2.84a1.6 1.6 0 0 0 2.22 0l1.62-1.62a1.6 1.6 0 0 0 0-2.22zM3.62 3.4a1.6 1.6 0 0 1 2.22 0l1.62 1.62a1.6 1.6 0 0 1 0 2.22L4.62 10.08a1.6 1.6 0 0 1-2.22 0L.78 8.46a1.6 1.6 0 0 1 0-2.22z"/><path d="M12 2v20"/><path d="M12 22a7 7 0 0 0 7-7v-3a7 7 0 0 0-7-7 7 7 0 0 0-7 7v3a7 7 0 0 0 7 7z"/></svg>`
  },
  {
    id: 'hat',
    name: 'Hat',
    category: 'fashion',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/><path d="M4 12a8 8 0 0 1 16 0"/></svg>`
  },
  {
    id: 'gem',
    name: 'Gem',
    category: 'fashion',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"/></svg>`
  },
  {
    id: 'scissors',
    name: 'Scissors',
    category: 'fashion',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`
  },

  // Food & Beverage
  {
    id: 'coffee',
    name: 'Coffee',
    category: 'food',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`
  },
  {
    id: 'utensils',
    name: 'Utensils',
    category: 'food',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`
  },
  {
    id: 'apple',
    name: 'Apple',
    category: 'food',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-3.21 1.5-4 1.5-.78 0-1.78-1.5-4-1.5A5.13 5.13 0 0 0 4 9.72c0 4.13 3 12.22 6 12.22 1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 3"/></svg>`
  },
  {
    id: 'pizza',
    name: 'Pizza',
    category: 'food',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 11h.01"/><path d="M11 15h.01"/><path d="M16.5 4a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 4z"/></svg>`
  },

  // Technology
  {
    id: 'cpu',
    name: 'CPU',
    category: 'tech',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`
  },
  {
    id: 'smartphone',
    name: 'Smartphone',
    category: 'tech',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`
  },
  {
    id: 'wifi',
    name: 'WiFi',
    category: 'tech',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`
  },
  {
    id: 'zap',
    name: 'Lightning',
    category: 'tech',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
  },

  // Nature & Organic
  {
    id: 'leaf',
    name: 'Leaf',
    category: 'nature',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`
  },
  {
    id: 'tree',
    name: 'Tree',
    category: 'nature',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19v9"/><path d="m8 19-4 3"/><path d="m16 19 4 3"/><path d="M12 22a9 9 0 0 0-9-9 9 9 0 0 0 9-9 9 9 0 0 0 9 9 9 9 0 0 0-9 9Z"/></svg>`
  },
  {
    id: 'flower',
    name: 'Flower',
    category: 'nature',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5A4.5 4.5 0 1 0 16.5 12M12 7.5V9m-4.5 3H6m4.5 3v1.5m4.5-4.5H18"/></svg>`
  },
  {
    id: 'sun',
    name: 'Sun',
    category: 'nature',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
  },

  // Home & Living
  {
    id: 'home',
    name: 'Home',
    category: 'home',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
  },
  {
    id: 'couch',
    name: 'Couch',
    category: 'home',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2"/><path d="M4 11v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9"/><path d="M4 11h16"/><path d="M4 11a2 2 0 0 0-2 2v1"/><path d="M20 11a2 2 0 0 1 2 2v1"/></svg>`
  },
  {
    id: 'lamp',
    name: 'Lamp',
    category: 'home',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2v7"/><path d="M4.93 11.07a4.97 4.97 0 0 1 0-7.07"/><path d="M19.07 11.07a4.97 4.97 0 0 0 0-7.07"/><path d="M14.17 9.17a4 4 0 0 0-4.34 0"/></svg>`
  },
  {
    id: 'bed',
    name: 'Bed',
    category: 'home',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>`
  },

  // Business & Professional
  {
    id: 'briefcase',
    name: 'Briefcase',
    category: 'business',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`
  },
  {
    id: 'building',
    name: 'Building',
    category: 'business',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`
  },
  {
    id: 'trending-up',
    name: 'Trending Up',
    category: 'business',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`
  },
  {
    id: 'target',
    name: 'Target',
    category: 'business',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`
  },

  // Creative & Arts
  {
    id: 'palette',
    name: 'Palette',
    category: 'creative',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`
  },
  {
    id: 'brush',
    name: 'Brush',
    category: 'creative',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2.5 2.24 0 .46.26.8.8.8 3.12 0 5.7-2.42 5.7-5.44 0-1.67-1.34-3.02-3-3.02Z"/></svg>`
  },
  {
    id: 'camera',
    name: 'Camera',
    category: 'creative',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`
  },
  {
    id: 'music',
    name: 'Music',
    category: 'creative',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`
  },

  // Health & Wellness
  {
    id: 'heart',
    name: 'Heart',
    category: 'health',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
  },
  {
    id: 'activity',
    name: 'Activity',
    category: 'health',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`
  },
  {
    id: 'droplet',
    name: 'Droplet',
    category: 'health',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`
  },
  {
    id: 'smile',
    name: 'Smile',
    category: 'health',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`
  },

  // Travel & Adventure
  {
    id: 'plane',
    name: 'Plane',
    category: 'travel',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"/><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><path d="M12 2v20"/><path d="m17 7-5-5-5 5"/></svg>`
  },
  {
    id: 'map',
    name: 'Map',
    category: 'travel',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="6" x2="15" y2="21"/></svg>`
  },
  {
    id: 'compass',
    name: 'Compass',
    category: 'travel',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`
  },
  {
    id: 'anchor',
    name: 'Anchor',
    category: 'travel',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>`
  },

  // Sports & Fitness
  {
    id: 'dumbbell',
    name: 'Dumbbell',
    category: 'sports',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>`
  },

  // Hairdresser & Barber
  {
    id: 'scissors-hair',
    name: 'Hair Scissors',
    category: 'hairdresser',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`
  },
  {
    id: 'comb',
    name: 'Comb',
    category: 'hairdresser',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16"/><path d="M4 22v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M4 18V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"/><path d="M8 4v14"/><path d="M12 4v14"/><path d="M16 4v14"/></svg>`
  },
  {
    id: 'mirror',
    name: 'Mirror',
    category: 'hairdresser',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/><path d="M2 12h20"/><path d="M4.93 4.93l14.14 14.14"/><path d="M19.07 4.93L4.93 19.07"/></svg>`
  },
  {
    id: 'barber-chair',
    name: 'Barber Chair',
    category: 'hairdresser',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="10" rx="2"/><path d="M6 13v6"/><path d="M18 13v6"/><path d="M8 19h8"/><path d="M12 3v10"/></svg>`
  },
  {
    id: 'razor',
    name: 'Razor',
    category: 'hairdresser',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4Z"/><path d="M15 21a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v12a4 4 0 0 0 4 4Z"/><line x1="12" y1="3" x2="12" y2="21"/></svg>`
  },
  {
    id: 'hair-dryer',
    name: 'Hair Dryer',
    category: 'hairdresser',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M12 2a8 8 0 0 1 8 8v4a8 8 0 0 1-8 8"/><path d="M4 10h8"/><path d="M4 14h8"/><path d="M12 6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"/></svg>`
  },
  {
    id: 'spray-bottle',
    name: 'Spray Bottle',
    category: 'hairdresser',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2h6"/><path d="M12 2v4"/><path d="M8 6h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`
  },
  {
    id: 'bicycle',
    name: 'Bicycle',
    category: 'sports',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/></svg>`
  },
  {
    id: 'trophy',
    name: 'Trophy',
    category: 'sports',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`
  },
  {
    id: 'footprint',
    name: 'Footprint',
    category: 'sports',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 11 3.8 11 8c0 3-2 5-2 8"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6-1.87 0-3.5 1.8-3.5 6 0 3 2 5 2 8"/></svg>`
  },

  // Animals & Pets
  {
    id: 'dog',
    name: 'Dog',
    category: 'pets',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 2.656 1 1.156-.912 1.658-2.35 1.658-2.35.1.14.2.27.296.4.46.595.816 1.273 1.03 2.05.22.77.22 1.6 0 2.37-.214.777-.57 1.455-1.03 2.05-.097.13-.197.26-.296.4 0 0-.502-1.438-1.658-2.35-.931-.722-2.576.297-2.656 1-.113.994 1.177 6.53 4 7 1.923.321 3.5-.782 3.5-2.172"/><path d="M14 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-2.656 1-1.156-.912-1.658-2.35-1.658-2.35-.1.14-.2.27-.296.4-.46.595-.816 1.273-1.03 2.05-.22.77-.22 1.6 0 2.37.214.777.57 1.455 1.03 2.05.097.13.197.26.296.4 0 0 .502-1.438 1.658-2.35.931-.722 2.576.297 2.656 1 .113.994-1.177 6.53-4 7-1.923.321-3.5-.782-3.5-2.172"/></svg>`
  },
  {
    id: 'cat',
    name: 'Cat',
    category: 'pets',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3.1-9-5.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.67.26 6.43 2.23.64-.17 1.33-.26 2-.26z"/></svg>`
  },
  {
    id: 'bird',
    name: 'Bird',
    category: 'pets',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3"/><path d="M14 17.5V22"/><path d="M6 18v3"/></svg>`
  },
  {
    id: 'fish',
    name: 'Fish',
    category: 'pets',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 16s9-15 20-4C11 23 2 16 2 16Z"/><path d="M17 6.5a3.5 3.5 0 0 0-7 0"/><path d="M12 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"/></svg>`
  },

  // Abstract & Geometric
  {
    id: 'hexagon',
    name: 'Hexagon',
    category: 'abstract',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`
  },
  {
    id: 'circle',
    name: 'Circle',
    category: 'abstract',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>`
  },
  {
    id: 'triangle',
    name: 'Triangle',
    category: 'abstract',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/></svg>`
  },
  {
    id: 'star',
    name: 'Star',
    category: 'abstract',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
  }
];

export const getRandomIcon = (category?: string): LogoIcon => {
  if (category) {
    const categoryIcons = logoIcons.filter(icon => icon.category === category);
    return categoryIcons[Math.floor(Math.random() * categoryIcons.length)];
  }
  return logoIcons[Math.floor(Math.random() * logoIcons.length)];
};

export const getIconsByCategory = (category: string): LogoIcon[] => {
  return logoIcons.filter(icon => icon.category === category);
};
