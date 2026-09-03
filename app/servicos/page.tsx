import type { Metadata } from 'next';
import Link from '../components/Link';
import './services.css';
import './services-extra.css';

export const metadata: Metadata = {
  title: 'Serviços de Engenharia e Geotecnologia',
  description: 'Serviços de campo, topografia, georreferenciamento, projetos de engenharia, BIM, estudos técnicos, orçamentos e gestão de obras.',
  alternates: { canonical: '/servicos' },
};

const fieldServices = ['Levantamento topográfico', 'Aerofotogrametria', 'Batimetria', 'Levantamento cadastral de edificações existentes', 'Cadastro técnico multifinalitário', 'Inspeção de infraestrutura urbana e edificações', 'Sondagem SPT, rotativa e a trado', 'Ensaios laboratoriais'];
const projects: Array<[string, string[]]> = [
  ['Projetos conceituais', ['Estudo de implantação arquitetônica', 'Projetos em 3D', 'Imagens e vídeos técnicos']],
  ['Projetos de edificações', ['Projetos arquitetônicos e complementares', 'Compatibilização entre disciplinas', 'Detalhamento para execução']],
  ['Projetos de infraestrutura', ['Sistemas viários e drenagem', 'Infraestrutura urbana', 'Soluções para redes e equipamentos públicos']],
  ['Obras especiais', ['Estudos e projetos para estruturas especiais', 'Soluções técnicas para intervenções complexas', 'Apoio ao planejamento executivo']],
];
const technicalStudies: Array<[string, string[]]> = [
  ['Estudos de tráfego', ['Contagem de tráfego', 'Modelagem de fluxo viário', 'Estudos de impacto de vizinhança (EIV/RIV)']],
  ['Estudos ambientais', ['Estudos ambientais simplificados', 'Apoio a licenciamento ambiental', 'Avaliação de impacto ambiental']],
  ['Estudos de viabilidade', ['EVTEA técnico, econômico e ambiental', 'Análise de alternativas de implantação', 'Estudo de custo-benefício']],
];
const planning: Array<[string, string[]]> = [
  ['Orçamentação', ['Orçamento analítico', 'Composição de custos unitários', 'Curva ABC de insumos', 'Cronograma físico-financeiro e Curva S']],
  ['Documentação técnica', ['Memorial descritivo', 'Memorial de cálculo', 'Especificações técnicas', 'Caderno de encargos']],
];

export default function Servicos() {
  return <main className="services-page">
    <section className="services-intro"><p className="eyebrow">NOSSOS SERVIÇOS</p><h1>Soluções técnicas para cada etapa do seu <em>projeto.</em></h1><p>A EngenhoGeo reúne inteligência de campo, engenharia, estudos especializados e suporte à execução para atender demandas urbanas, corporativas e públicas.</p></section>

    <section className="service-chapter service-chapter-navy"><div className="chapter-heading"><p className="eyebrow light">01 — SERVIÇOS DE CAMPO</p><h2>Informação confiável para decisões com <em>segurança.</em></h2></div><div className="chapter-copy"><p>Levantamos e interpretamos dados físicos e territoriais que dão base para estudos, projetos, obras e processos de regularização.</p><div className="service-tag">SERVIÇOS DE CAMPO</div><ul>{fieldServices.map(item => <li key={item}>{item}</li>)}</ul></div></section>

    <section className="service-chapter service-chapter-paper"><div className="chapter-heading"><p className="eyebrow">02 — PROJETOS DE ENGENHARIA</p><h2>Do conceito ao detalhamento, com visão <em>integrada.</em></h2></div><div className="chapter-copy"><p>Elaboramos projetos que conciliam desempenho, conformidade e viabilidade, organizando cada decisão com rigor técnico e clareza documental.</p></div><div className="service-pill-grid service-pill-grid-four">{projects.map(([title, items], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

    <section className="service-chapter service-chapter-gold"><div className="chapter-heading"><p className="eyebrow">03 — ESTUDOS TÉCNICOS</p><h2>Visão de cenário para avaliar riscos, impactos e <em>viabilidade.</em></h2></div><div className="chapter-copy"><p>Análises especializadas que transformam requisitos urbanos, ambientais e operacionais em dados claros para a tomada de decisão.</p></div><div className="service-columns">{technicalStudies.map(([title, items]) => <article key={title}><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

    <section className="service-chapter service-chapter-paper"><div className="chapter-heading"><p className="eyebrow">04 — BIM E ENGENHARIA INTEGRADA</p><h2>Projetos coordenados em um ambiente <em>digital.</em></h2></div><div className="chapter-copy"><p>A engenharia integrada amplia o controle das informações do projeto, reduz interferências e melhora a comunicação entre todas as disciplinas envolvidas.</p><div className="service-tag">BIM E ENGENHARIA INTEGRADA</div><ul><li>Modelagem BIM do LOD 100 ao 400</li><li>Compatibilização multidisciplinar</li><li>Detecção de interferências entre sistemas</li></ul></div></section>

    <section className="service-chapter service-chapter-gold"><div className="chapter-heading"><p className="eyebrow">05 — ORÇAMENTOS E DOCUMENTAÇÃO</p><h2>Planejamento, previsibilidade e documentos que sustentam a <em>execução.</em></h2></div><div className="chapter-copy"><p>Organizamos custos, cronogramas e documentação técnica para que o empreendimento avance com controle e rastreabilidade.</p></div><div className="service-columns service-columns-two">{planning.map(([title, items]) => <article key={title}><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

    <section className="service-chapter service-chapter-ink"><div className="chapter-heading"><p className="eyebrow light">06 — GESTÃO TÉCNICA E SUPORTE À EXECUÇÃO</p><h2>Acompanhamento técnico para transformar planejamento em <em>resultado.</em></h2></div><div className="chapter-copy"><p>Oferecemos suporte especializado durante a execução, com foco em qualidade, transparência e aderência ao escopo definido.</p><ul><li>Fiscalização e supervisão técnica de obras</li><li>Gerenciamento de contratos</li><li>Medições e boletins de obra</li><li>Relatórios técnicos periódicos</li><li>Planejamento executivo e compatibilização em campo</li></ul><Link className="button gold" href="/contato">Falar com especialistas <span>↗</span></Link></div></section>
  </main>;
}
