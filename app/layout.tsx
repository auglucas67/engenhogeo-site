import type { Metadata } from 'next';
import './globals.css';
import './override.css';
import './pages.css';
import './footer.css';
import { FloatingContacts } from './components/FloatingContacts';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'EngenhoGeo',
  alternateName: 'EngenhoGeo Engenharia e Geotecnologia',
  url: 'https://engenhogeo.com.br',
  logo: 'https://engenhogeo.com.br/engenhogeo-logo-dark.png',
  image: 'https://engenhogeo.com.br/engenhogeo-logo-dark.png',
  description: 'Engenharia, geotecnologia, topografia, projetos e estudos técnicos para o desenvolvimento urbano e corporativo.',
  email: 'comercial@engenhogeo.com.br',
  telephone: '+55-31-99812-9682',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Padre Cyr Assumpção, 97, Primeiro de Maio',
    addressLocality: 'Belo Horizonte',
    addressRegion: 'MG',
    postalCode: '31810-600',
    addressCountry: 'BR',
  },
  areaServed: 'Brasil',
  serviceType: ['Topografia', 'Georreferenciamento', 'Projetos de Engenharia', 'Estudos Técnicos', 'BIM', 'Regularização Fundiária'],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'EngenhoGeo',
  url: 'https://engenhogeo.com.br',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://engenhogeo.com.br'),
  title: { default: 'EngenhoGeo | Engenharia e Geotecnologia', template: '%s | EngenhoGeo' },
  description: 'Soluções completas de engenharia para o desenvolvimento urbano e corporativo.',
  keywords: ['engenharia', 'geotecnologia', 'topografia', 'georreferenciamento', 'estudos técnicos', 'BIM', 'regularização fundiária'],
  robots: { index: true, follow: true },
  openGraph: { type: 'website', locale: 'pt_BR', siteName: 'EngenhoGeo', url: 'https://engenhogeo.com.br', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'EngenhoGeo — Engenharia e Geotecnologia' }] },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} /><SiteHeader />{children}<FloatingContacts /><SiteFooter /></body></html>; }

