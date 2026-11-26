import Layout from "../components/Layout";

const SERVICOS = [
  { icon: "💧", titulo: "Abastecimento de água", texto: "Fornecimento de água potável tratada, com monitoramento permanente da qualidade e manutenção da rede de distribuição." },
  { icon: "🌱", titulo: "Coleta e tratamento de esgoto", texto: "Coleta do esgoto doméstico e tratamento em estação própria, com destinação ambientalmente correta dos efluentes." },
  { icon: "🔧", titulo: "Manutenção da rede", texto: "Reparos, substituição de ramais e melhorias na infraestrutura hídrica e sanitária do município." },
  { icon: "📊", titulo: "Qualidade da água", texto: "Análises laboratoriais periódicas e divulgação dos resultados em relatórios de análise e qualidade da água." },
  { icon: "🎓", titulo: "Educação ambiental", texto: "Palestras, campanhas e materiais sobre uso consciente da água e preservação dos recursos naturais." },
  { icon: "📞", titulo: "Atendimento ao cidadão", texto: "Canais para dúvidas, solicitações, reclamações e acompanhamento de chamados." },
];

export default function Servicos() {
  return (
    <Layout title="Serviços">
      <div className="container">
        <h1 className="section-title">Nossos serviços</h1>
        <p className="section-sub">O SEMAE atua em todas as etapas do ciclo da água em Mogi das Cruzes.</p>

        <div className="grid grid-3">
          {SERVICOS.map(s => (
            <article className="card" key={s.titulo}>
              <div className="card-icon" aria-hidden="true">{s.icon}</div>
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </article>
          ))}
        </div>

        <section id="atendimento" style={{ marginTop: 44 }} aria-labelledby="atend-titulo">
          <h2 id="atend-titulo" className="section-title">Atendimento ao cidadão</h2>
          <p className="section-sub">Escolha o canal mais conveniente para entrar em contato.</p>
          <div className="grid grid-3">
            <div className="card info-card">
              <span style={{ fontSize: 24 }} aria-hidden="true">📞</span>
              <div><h3>Telefone</h3><p>Central de atendimento: (11) 4790-9900<br />Segunda a sexta, 8h às 17h.</p></div>
            </div>
            <div className="card info-card">
              <span style={{ fontSize: 24 }} aria-hidden="true">✉️</span>
              <div><h3>E-mail</h3><p>semae@mogidascruzes.sp.gov.br<br />Resposta em até 2 dias úteis.</p></div>
            </div>
            <div className="card info-card">
              <span style={{ fontSize: 24 }} aria-hidden="true">🏢</span>
              <div><h3>Presencial</h3><p>Sede do SEMAE — Mogi das Cruzes/SP<br />Com agendamento prévio.</p></div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
