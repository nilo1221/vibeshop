import { NicheConfig } from './niches';

export interface GeneratedName {
  name: string;
  slogan: string;
  niche: string;
}

export type Tone = 'luxury' | 'playful' | 'professional' | 'casual' | null;

export const generateNames = (niche: NicheConfig, lang: 'it' | 'en', count: number = 10, tone: Tone = null): GeneratedName[] => {
  const names: GeneratedName[] = [];
  const usedNames = new Set<string>();

  // Get tone-specific vocabulary or fallback to default
  const prefixes = tone && niche.tone?.[tone]?.prefixes ? niche.tone[tone].prefixes : niche.prefixes;
  const suffixes = tone && niche.tone?.[tone]?.suffixes ? niche.tone[tone].suffixes : niche.suffixes;
  const middle = tone && niche.tone?.[tone]?.middle ? niche.tone[tone].middle : niche.middle;

  while (names.length < count) {
    const pattern = Math.floor(Math.random() * 4);
    let name: string;

    switch (pattern) {
      case 0:
        // Prefix + Suffix
        name = `${getRandomElement(prefixes)}${getRandomElement(suffixes)}`;
        break;
      case 1:
        // Prefix + Middle + Suffix
        name = `${getRandomElement(prefixes)}${getRandomElement(middle)}${getRandomElement(suffixes)}`;
        break;
      case 2:
        // Middle + Suffix
        name = `${getRandomElement(middle)}${getRandomElement(suffixes)}`;
        break;
      case 3:
        // Prefix + Middle
        name = `${getRandomElement(prefixes)}${getRandomElement(middle)}`;
        break;
      default:
        name = `${getRandomElement(prefixes)}${getRandomElement(suffixes)}`;
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
