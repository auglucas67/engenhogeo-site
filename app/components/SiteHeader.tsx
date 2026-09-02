'use client';
import Link from './Link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
const links = [['Home', '/'], ['Quem Somos', '/quem-somos'], ['Nossos Serviços', '/servicos'], ['Cases', '/cases'], ['Clientes', '/clientes'], ['Contato', '/contato']];
export function SiteHeader() { const [open, setOpen] = useState(false); const pathname = usePathname(); return <header className="header"><Link className="brand" href="/" aria-label="EngenhoGeo - Home" /><nav className={open ? 'nav nav-open' : 'nav'} id="menu-principal" aria-label="Principal">{links.map(([label, href]) => <Link className={pathname === href ? 'active' : ''} href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav><Link className="header-cta" href="/contato">Solicitar proposta <span>↗</span></Link><button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-principal" aria-label="Abrir menu">{open ? '×' : '☰'}</button></header>; }

