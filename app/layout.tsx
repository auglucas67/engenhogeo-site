import type { Metadata } from 'next';
import './globals.css';
import './override.css';
export const metadata: Metadata = { title: 'EngenhoGeo | Engenharia e Geotecnologia', description: 'Precisão técnica em topografia, georreferenciamento e regularização fundiária.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }

