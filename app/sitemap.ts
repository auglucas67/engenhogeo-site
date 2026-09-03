import type { MetadataRoute } from 'next';

const siteUrl = 'https://engenhogeo.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/quem-somos', '/servicos', '/cases', '/clientes', '/contato'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
