export default function SchemaMarkup({ 
  type, 
  name, 
  description, 
  url 
}: { 
  type: 'WebApplication' | 'WebSite';
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: name,
    description: description,
    url: url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Brand name generation',
      'Domain availability check',
      'Slogan generation',
      'Multi-language support',
      'Niche-specific suggestions'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
