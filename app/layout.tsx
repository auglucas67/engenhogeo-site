import type { Metadata } from 'next';
import './globals.css';
import './override.css';
import './pages.css';
import './footer.css';
import { FloatingContacts } from './components/FloatingContacts';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';

export const metadata: Metadata = {
  metadataBase: new URL('https://engenhogeo.com.br'),
  title: 'EngenhoGeo | Engenharia e Geotecnologia',
  description: 'Soluções completas de engenharia para o desenvolvimento urbano e corporativo.',
  keywords: ['engenharia', 'geotecnologia', 'topografia', 'georreferenciamento', 'estudos técnicos', 'BIM', 'regularização fundiária'],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body><SiteHeader />{children}<FloatingContacts /><SiteFooter /></body></html>; }

