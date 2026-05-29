import { MetadataRoute } from 'next'
import { categories } from '@/data/problems'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://problems.jharform.in'

  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about/`, lastModified: new Date() },
    { url: `${baseUrl}/contact/`, lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy/`, lastModified: new Date() },
    { url: `${baseUrl}/disclaimer/`, lastModified: new Date() },
    { url: `${baseUrl}/editorial-policy/`, lastModified: new Date() },
  ];

  categories.forEach(cat => {
    routes.push({
      url: `${baseUrl}/${cat.slug}/`,
      lastModified: new Date(),
    });
    cat.problems.forEach(prob => {
      routes.push({
        url: `${baseUrl}/${cat.slug}/${prob.slug}/`,
        lastModified: new Date(),
      });
    });
  });

  return routes;
}
