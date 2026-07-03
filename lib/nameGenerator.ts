import { NicheConfig } from './niches';

export interface GeneratedName {
  name: string;
  slogan: string;
  niche: string;
}

export const generateNames = (niche: NicheConfig, lang: 'it' | 'en', count: number = 10): GeneratedName[] => {
  const names: GeneratedName[] = [];
  const usedNames = new Set<string>();

  while (names.length < count) {
    const pattern = Math.floor(Math.random() * 4);
    let name: string;

    switch (pattern) {
      case 0:
        // Prefix + Suffix
        name = `${getRandomElement(niche.prefixes)}${getRandomElement(niche.suffixes)}`;
        break;
      case 1:
        // Prefix + Middle + Suffix
        name = `${getRandomElement(niche.prefixes)}${getRandomElement(niche.middle)}${getRandomElement(niche.suffixes)}`;
        break;
      case 2:
        // Middle + Suffix
        name = `${getRandomElement(niche.middle)}${getRandomElement(niche.suffixes)}`;
        break;
      case 3:
        // Prefix + Middle
        name = `${getRandomElement(niche.prefixes)}${getRandomElement(niche.middle)}`;
        break;
      default:
        name = `${getRandomElement(niche.prefixes)}${getRandomElement(niche.suffixes)}`;
    }

    // Ensure uniqueness
    if (!usedNames.has(name)) {
      usedNames.add(name);
      names.push({
        name,
        slogan: getRandomElement(niche.slogans[lang]),
        niche: niche.id
      });
    }
  }

  return names;
};

const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const formatNameForDomain = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '');
};
