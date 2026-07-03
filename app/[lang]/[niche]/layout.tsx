import { Metadata } from 'next';
import { getNicheById } from '@/lib/niches';
import { translations } from '@/lib/i18n';

interface NicheLayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
    niche: string;
  };
}

export async function generateMetadata({ params }: NicheLayoutProps): Promise<Metadata> {
  const { lang, niche } = params;
  const nicheData = getNicheById(niche);
  const t = translations[lang as keyof typeof translations] || translations.it;

  if (!nicheData) {
    return {
      title: t.metaTitle,
      description: t.metaDescription,
    };
  }

  const nicheName = nicheData[lang as keyof typeof nicheData] as string;
  
  return {
    title: `${nicheName} Store Names | SmartChoiceNames`,
    description: `Generate creative ${nicheName} store names with SmartChoiceNames. Find the perfect name for your ${nicheName} e-commerce business.`,
    openGraph: {
      title: `${nicheName} Store Names | SmartChoiceNames`,
      description: `Generate creative ${nicheName} store names with SmartChoiceNames. Find the perfect name for your ${nicheName} e-commerce business.`,
      type: 'website',
      locale: lang === 'it' ? 'it_IT' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${nicheName} Store Names | SmartChoiceNames`,
      description: `Generate creative ${nicheName} store names with SmartChoiceNames. Find the perfect name for your ${nicheName} e-commerce business.`,
    },
  };
}

export default function NicheLayout({ children }: NicheLayoutProps) {
  return <>{children}</>;
}
