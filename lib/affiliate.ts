// Affiliate link generation with subId tracking
export const generateShopifyAffiliateLink = (
  storeName: string,
  niche: string,
  lang: 'it' | 'en'
): string => {
  const affiliateLink = process.env.NEXT_PUBLIC_SHOPIFY_AFFILIATE_LINK || 'https://shopify.pxf.io/c/7316518/3931322/13624';
  
  // Build the URL with tracking parameters
  const params = new URLSearchParams({
    subid1: niche, // Track which niche generated the conversion
    subid2: lang, // Track language
    keyword: storeName.toLowerCase() // Track the generated store name
  });

  return `${affiliateLink}?${params.toString()}`;
};

export const generateDomainCheckLink = (domainName: string): string => {
  // Link to Namecheap for domain availability check
  return `https://www.namecheap.com/domains/registration/results/?domain=${domainName}`;
};
