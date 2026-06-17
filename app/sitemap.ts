import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://maticstudio.site';

  const routes = [
    '',
    '/about',
    '/product',
    '/contact',
    '/privacy-policy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route === '/contact' ? 0.9 : 0.8,
  }));
}
