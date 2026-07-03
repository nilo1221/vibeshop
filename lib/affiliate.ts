// Affiliate link generation with subId tracking
export const generateShopifyAffiliateLink = (
  storeName: string,
  niche: string,
  lang: 'it' | 'en'
): string => {
  const affiliateId = process.env.NEXT_PUBLIC_SHOPIFY_AFFILIATE_ID || '';
  const baseUrl = process.env.NEXT_PUBLIC_SHOPIFY_BASE_URL || 'https://www.shopify.com';
  
  // Build the URL with tracking parameters
  const params = new URLSearchParams({
    ref: affiliateId,
    subid1: niche, // Track which niche generated the conversion
    subid2: lang, // Track language
    keyword: storeName.toLowerCase() // Track the generated store name
  });

  return `${baseUrl}/?${params.toString()}`;
};

export const generateDomainCheckLink = (domainName: string): string => {
  // Link to Namecheap for domain availability check
  return `https://www.namecheap.com/domains/registration/results/?domain=${domainName}`;
};
