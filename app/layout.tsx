import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SchemaMarkup from '@/components/SchemaMarkup'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brand Name Generator | E-commerce Store Names',
  description: 'Generate creative names for your e-commerce store. Check domain availability and open your shop on Shopify.',
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
          name="BrandNameCraft"
          description="Generate creative names for your e-commerce store. Check domain availability and open your shop on Shopify."
          url="https://vibeshop-chi.vercel.app"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
