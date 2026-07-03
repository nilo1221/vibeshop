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
    title: `${t.metaTitle} - ${nicheName}`,
    description: `${t.metaDescription} ${lang === 'it' ? 'Per' : 'For'} ${nicheName.toLowerCase()}.`,
    openGraph: {
      title: `${t.metaTitle} - ${nicheName}`,
      description: `${t.metaDescription} ${lang === 'it' ? 'Per' : 'For'} ${nicheName.toLowerCase()}.`,
      type: 'website',
      locale: lang === 'it' ? 'it_IT' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t.metaTitle} - ${nicheName}`,
      description: `${t.metaDescription} ${lang === 'it' ? 'Per' : 'For'} ${nicheName.toLowerCase()}.`,
    },
  };
}

export default function NicheLayout({ children }: NicheLayoutProps) {
  return <>{children}</>;
}
