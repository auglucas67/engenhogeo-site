import Link from 'next/link';

export default function Home() {
  return <main><section className="hero" aria-labelledby="hero-title"><div className="hero-overlay" /><div className="hero-content"><p className="eyebrow light">ENGENHARIA • GEOTECNOLOGIA • TERRITÓRIO</p><h1 id="hero-title">Precisão que <em>orienta</em> caminhos.</h1><p className="hero-copy">Soluções completas de engenharia para o desenvolvimento urbano e corporativo. Unimos inovação, sustentabilidade e rigor técnico para entregar projetos eficientes, seguros e em total conformidade regulatória.</p><div className="hero-actions"><Link className="button gold" href="/quem-somos">Conheça a EngenhoGeo <span>↗</span></Link><Link className="button outline" href="/contato">Falar com nossos especialistas <span>↗</span></Link></div></div><div className="compass" aria-hidden="true"><i>✦</i><b>N</b><span>ENGENHOGEO</span></div></section><section className="section intro-strip"><p className="eyebrow">UMA PARCERIA TÉCNICA</p><div><h2>Seu território,<br />nossa <em>direção.</em></h2><p>Da análise inicial à entrega final, traduzimos dados, normas e necessidades de negócio em decisões confiáveis.</p></div></section></main>;
}

