import { MetadataRoute } from 'next'
import { categories } from '@/data/problems'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://problems.jharform.in'
  const routes: MetadataRoute.Sitemap = []

  categories.forEach(cat => {
    cat.problems.forEach(prob => {
      routes.push({
        url: `${baseUrl}/${cat.slug}/${prob.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  })

  return routes
}
