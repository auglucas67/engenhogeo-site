import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato | Solicite uma Proposta',
  description: 'Fale com a EngenhoGeo para solicitar proposta de topografia, georreferenciamento, projetos, estudos técnicos e consultoria em engenharia.',
  alternates: { canonical: '/contato' },
};

export default function Contato() {
  return <main className="page contact-page">
    <p className="eyebrow gold-text">CONTATO</p>
    <h1>O próximo passo começa <em>aqui.</em></h1>
    <p className="lead">Conte o que você precisa. Nossa equipe retorna com a direção técnica mais adequada para o seu projeto.</p>
    <section className="contact-layout">
      <div className="contact-card"><p className="eyebrow">O QUE INFORMAR</p><h2>Fale com mais contexto.</h2><p>Para uma resposta mais objetiva, informe a cidade do projeto, o tipo de necessidade, a área aproximada e o prazo desejado.</p><ul><li>Topografia e georreferenciamento</li><li>Regularização fundiária</li><li>Projetos, estudos e mapeamento</li></ul></div>
      <div className="contact-card contact-form"><p className="eyebrow">CANAIS DE ATENDIMENTO</p><h2>Estamos prontos para ouvir.</h2><p>Escolha o canal mais prático para falar com a equipe comercial da EngenhoGeo.</p><p><a href="https://wa.me/5531998129682" target="_blank" rel="noreferrer">WhatsApp: (31) 99812-9682</a></p><p><a href="mailto:comercial@engenhogeo.com.br">comercial@engenhogeo.com.br</a></p></div>
    </section>
  </main>;
}
