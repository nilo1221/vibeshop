// Affiliate link generation with enhanced subId tracking
export const generateShopifyAffiliateLink = (
  storeName: string,
  niche: string,
  lang: 'it' | 'en',
  source: 'home' | 'niche' = 'home'
): string => {
  const affiliateLink = process.env.NEXT_PUBLIC_SHOPIFY_AFFILIATE_LINK || 'https://shopify.pxf.io/c/7316518/3931322/13624';
  
  // Generate session ID for tracking
  const sessionId = typeof window !== 'undefined' 
    ? (sessionStorage.getItem('affiliate_session_id') || generateSessionId())
    : generateSessionId();
  
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('affiliate_session_id', sessionId);
  }
  
  // Build the URL with enhanced tracking parameters
  const params = new URLSearchParams({
    subid1: niche, // Track which niche generated the conversion
    subid2: lang, // Track language
    subid3: source, // Track source (home vs niche page)
    subid4: sessionId, // Track user session
    subid5: Date.now().toString(), // Track timestamp
    keyword: storeName.toLowerCase() // Track the generated store name
  });

  return `${affiliateLink}?${params.toString()}`;
};

// Generate unique session ID
function generateSessionId(): string {
  return 'sess_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

export const generateDomainCheckLink = (domainName: string): string => {
  // Link to Namecheap for domain availability check
  return `https://www.namecheap.com/domains/registration/results/?domain=${domainName}`;
};
