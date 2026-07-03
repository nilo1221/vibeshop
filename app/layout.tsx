import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SchemaMarkup from '@/components/SchemaMarkup'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SmartChoiceNames | Brand Name Generator for E-commerce',
  description: 'Generate creative names for your e-commerce store with SmartChoiceNames. Check domain availability and open your shop on Shopify.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup
          type="WebApplication"
          name="SmartChoiceNames"
          description="Generate creative names for your e-commerce store with SmartChoiceNames. Check domain availability and open your shop on Shopify."
          url="https://vibeshop-chi.vercel.app"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1H9PF5D2RC"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1H9PF5D2RC');
          `
        }} />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
