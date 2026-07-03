# Brand Name Generator for E-commerce

A multilingual brand name generator for e-commerce stores with Shopify affiliate integration.

## Features

- **Smart Name Generation**: Matrix-based algorithm combining prefixes, suffixes, and middle words
- **5 Priority Niches**: Clothing, Beauty, Electronics, Sports, Home Decor
- **Bilingual Support**: Italian and English with i18n routing
- **Affiliate Integration**: Shopify affiliate links with subId tracking per niche
- **Domain Check**: External links to Namecheap for domain availability
- **Favorites System**: localStorage-based name saving
- **Programmatic SEO**: Auto-generated pages for each niche in both languages
- **Minimal Design**: Clean, professional UI (Stripe/Vercel style)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Hosting**: Vercel

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Shopify affiliate ID:

```env
NEXT_PUBLIC_SHOPIFY_AFFILIATE_ID=your_actual_affiliate_id
NEXT_PUBLIC_SHOPIFY_BASE_URL=https://www.shopify.com
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── [lang]/
│   │   └── [niche]/
│   │       └── page.tsx    # Dynamic niche pages (SEO)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main landing page
│   └── sitemap.ts         # SEO sitemap
├── lib/
│   ├── affiliate.ts       # Affiliate link generation
│   ├── i18n.ts            # Internationalization
│   ├── nameGenerator.ts   # Name generation logic
│   └── niches.ts          # Niche configuration
├── components/            # (Add reusable components here)
└── public/               # Static assets
```

## SEO Strategy

The app generates programmatic SEO pages for each niche:

- `/it/abbigliamento` - Italian clothing store names
- `/en/clothing` - English clothing store names
- `/it/cosmetici` - Italian beauty store names
- `/en/beauty` - English beauty store names
- etc.

Each page includes:
- Unique metadata
- Niche-specific content
- Affiliate links with subId tracking
- Sitemap.xml generation

## Affiliate Tracking

Links include tracking parameters:
- `ref`: Your affiliate ID
- `subid1`: Niche category
- `subid2`: Language (it/en)
- `keyword`: Generated store name

This allows you to track which niches and languages convert best.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

The app is optimized for Vercel with:
- Static generation where possible
- Edge runtime support
- Automatic HTTPS

## Customization

### Add New Niches

Edit `lib/niches.ts` and add new niche configuration:

```typescript
your_niche: {
  id: 'your_niche',
  it: 'tua_nicchia',
  en: 'your_niche',
  prefixes: ['Prefix1', 'Prefix2'],
  suffixes: ['Suffix1', 'Suffix2'],
  middle: ['Middle1', 'Middle2'],
  slogans: {
    it: ['Slogan IT 1', 'Slogan IT 2'],
    en: ['Slogan EN 1', 'Slogan EN 2']
  }
}
```

### Modify Name Generation

Edit `lib/nameGenerator.ts` to change the generation algorithm patterns.

### Change Affiliate Links

Edit `lib/affiliate.ts` to modify link generation logic.

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
