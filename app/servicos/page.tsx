import Link from '../components/Link';
import './services.css';

const fieldServices = [
  'Levantamentos planialtimétricos e cadastrais',
  'Topografia para obras e locação',
  'Georreferenciamento de imóveis',
  'Mapeamento e cadastro territorial',
  'Vistorias e diagnósticos em campo',
  'Apoio técnico para documentação imobiliária',
];

const engineeringAreas: Array<[string, string[]]> = [
  ['Projetos territoriais', ['Estudo de implantação', 'Diretrizes para parcelamento do solo', 'Análise de restrições e potencial construtivo']],
  ['Regularização e documentação', ['Memoriais descritivos e plantas técnicas', 'Apoio à regularização fundiária', 'Organização documental para registros']],
  ['Infraestrutura urbana', ['Projetos para sistemas urbanos', 'Compatibilização de informações técnicas', 'Suporte para obras e intervenções públicas']],
];

const technicalStudies: Array<[string, string[]]> = [
  ['Viabilidade territorial', ['Estudo de viabilidade técnica', 'Leitura de restrições urbanísticas', 'Análise de alternativas de implantação']],
  ['Estudos urbanos', ['Diagnóstico territorial', 'Estudos de impacto de vizinhança', 'Levantamento de dados para planejamento']],
  ['Conformidade regulatória', ['Apoio a licenciamentos', 'Relatórios e pareceres técnicos', 'Documentação para órgãos competentes']],
];

export default function Servicos() {
  return (
    <main className="services-page">
      <section className="services-intro">
        <p className="eyebrow">NOSSOS SERVIÇOS</p>
        <h1>Engenharia que transforma <em>território</em> em decisão.</h1>
        <p>Da leitura do campo à documentação final, reunimos precisão geoespacial, técnica e estratégia para apoiar empreendimentos, empresas e órgãos públicos.</p>
      </section>

      <section className="service-chapter service-chapter-navy">
        <div className="chapter-heading"><p className="eyebrow light">01 — ATUAÇÃO EM CAMPO</p><h2>Dados precisos para começar com <em>segurança.</em></h2></div>
        <div className="chapter-copy"><p>Informação confiável é a base de qualquer projeto bem executado. Nossa equipe atua em campo para levantar, conferir e organizar os dados necessários ao planejamento, à obra e à tomada de decisão.</p><div className="service-tag">SERVIÇOS DE CAMPO</div><ul>{fieldServices.map(item => <li key={item}>{item}</li>)}</ul></div>
      </section>

      <section className="service-chapter service-chapter-paper">
        <div className="chapter-heading"><p className="eyebrow">02 — PROJETOS E SOLUÇÕES</p><h2>Projetos que conectam técnica, território e <em>resultado.</em></h2></div>
        <div className="chapter-copy"><p>Desenvolvemos soluções de engenharia e geotecnologia adequadas à realidade de cada área, com documentos claros e informações integradas para reduzir incertezas e orientar cada etapa.</p></div>
        <div className="service-pill-grid">{engineeringAreas.map(([title, items], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="service-chapter service-chapter-gold">
        <div className="chapter-heading"><p className="eyebrow">03 — ESTUDOS TÉCNICOS</p><h2>Clareza para avaliar riscos, oportunidades e <em>viabilidade.</em></h2></div>
        <div className="chapter-copy"><p>Transformamos dados complexos em análises técnicas objetivas, alinhadas às exigências urbanísticas, territoriais e regulatórias do seu projeto.</p></div>
        <div className="service-columns">{technicalStudies.map(([title, items]) => <article key={title}><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="service-chapter service-chapter-ink">
        <div className="chapter-heading"><p className="eyebrow light">04 — GESTÃO E SUPORTE</p><h2>Do planejamento à entrega, com acompanhamento <em>técnico.</em></h2></div>
        <div className="chapter-copy"><p>Atuamos ao lado do cliente para organizar informações, acompanhar demandas e garantir que cada entrega mantenha consistência técnica e transparência.</p><ul><li>Coordenação técnica de demandas territoriais</li><li>Acompanhamento de documentação e processos</li><li>Relatórios, memoriais e suporte especializado</li></ul><Link className="button gold" href="/contato">Falar com especialistas <span>↗</span></Link></div>
      </section>
    </main>
  );
}
