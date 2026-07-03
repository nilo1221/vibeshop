import { MetadataRoute } from 'next'
import { getAllNiches } from '@/lib/niches'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://brandnamecraft.com'
  const niches = getAllNiches()
  
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ]

  const nichePages = niches.flatMap((niche) => [
    {
      url: `${baseUrl}/it/${niche.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/${niche.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ])

  return [...staticPages, ...nichePages]
}
