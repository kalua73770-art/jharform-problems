import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/search',
        '/api/',
        '/admin',
        '/*?q=',
        '/*?page=',
      ],
    },
    sitemap: [
      'https://problems.jharform.in/sitemap.xml',
      'https://problems.jharform.in/sitemap-articles.xml',
      'https://problems.jharform.in/sitemap-categories.xml',
    ],
  }
}
