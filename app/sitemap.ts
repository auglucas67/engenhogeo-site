import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const siteUrl = 'https://engenhogeo.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/quem-somos', '/servicos', '/cases', '/clientes', '/contato'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date('2026-10-16'),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
