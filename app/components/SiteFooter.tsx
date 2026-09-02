import Link from './Link';

const PhoneIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.62a2 2 0 0 1-.45 2.11L9 10.71a16 16 0 0 0 4.29 4.29l1.26-1.26a2 2 0 0 1 2.11-.45c.84.31 1.72.53 2.62.65A2 2 0 0 1 22 16.92Z" /></svg>;
const MailIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 7 9 6 9-6" /></svg>;
const PinIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.3" /></svg>;

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-grid">
      <section className="footer-brand"><Link className="footer-logo" href="/" aria-label="EngenhoGeo - Home" /><p>Engenharia estratégica e consultoria de alta performance para o setor público e privado.</p></section>
      <section><h2>NAVEGAÇÃO</h2><nav>{[['Quem Somos', '/quem-somos'], ['Área de Atuação', '/servicos'], ['Setor Público', '/clientes'], ['Clientes', '/clientes'], ['Contato', '/contato']].map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}</nav></section>
      <section><h2>SERVIÇOS</h2><nav>{['Estudos Técnicos', 'Engenharia Detalhada', 'Serviços de Campo', 'Consultoria'].map(item => <Link href="/servicos" key={item}>{item}</Link>)}</nav></section>
      <section><h2>FALE CONOSCO</h2><a className="footer-contact" href="https://wa.me/5531998129682" target="_blank" rel="noreferrer"><span className="footer-icon"><PhoneIcon /></span><span>(31) 99812-9682</span></a><a className="footer-contact footer-email" href="mailto:comercial@engenhogeo.com.br"><span className="footer-icon"><MailIcon /></span><span>comercial@engenhogeo.com.br</span></a></section>
      <section><h2>ENDEREÇOS</h2><p className="footer-address"><span className="footer-icon"><PinIcon /></span><span>Rua Padre Cyr Assumpção, 97,<br />Primeiro de Maio, Belo Horizonte,<br />MG. CEP 31810-600</span></p></section>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} EngenhoGeo Engenharia, Consultoria e Projetos</span><span>Todos os direitos reservados.</span><i aria-hidden="true">✦</i></div>
  </footer>;
}
