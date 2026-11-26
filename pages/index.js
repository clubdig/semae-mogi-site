import Link from "next/link";
import Layout from "../components/Layout";
import store from "../lib/store";

export default function Home({ noticias }) {
  return (
    <Layout title="Início">
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-badge">⭐ 60 anos de serviço público</span>
          <h1>Água e saneamento com compromisso com você.</h1>
          <p>Há seis décadas, o SEMAE leva água potável e tratamento de esgoto a cada morador de Mogi das Cruzes. Conheça os serviços, acompanhe as novidades e participe.</p>
          <div className="hero-actions">
            <Link href="/servicos" className="btn btn-primary">Conhecer os serviços →</Link>
            <Link href="/60-anos" className="btn btn-ghost">Ver a história dos 60 anos</Link>
          </div>
        </div>
      </section>

      <div className="container">
        <section aria-labelledby="servicos-titulo">
          <h2 id="servicos-titulo" className="section-title">O que o SEMAE faz por você</h2>
          <p className="section-sub">Serviços essenciais para a saúde e o bem-estar de toda a população.</p>
          <div className="grid grid-4">
            {[
              ["💧", "Abastecimento de água", "Distribuição de água potável com qualidade monitorada para toda a cidade."],
              ["🌱", "Tratamento de esgoto", "Coleta e tratamento ambientalmente adequados do esgoto doméstico."],
              ["📄", "Transparência", "Documentos, relatórios e informações públicas sempre acessíveis."],
              ["📞", "Atendimento", "Canais diretos para dúvidas, solicitações e orientações."],
            ].map(([icon, titulo, texto]) => (
              <article className="card" key={titulo}>
                <div className="card-icon" aria-hidden="true">{icon}</div>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 44 }} aria-labelledby="noticias-titulo">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 12, flexWrap: "wrap" }}>
            <div>
              <h2 id="noticias-titulo" className="section-title">Notícias e comunicados</h2>
              <p className="section-sub">Fique por dentro do que acontece no SEMAE.</p>
            </div>
            <Link href="/noticias" className="btn btn-primary" style={{ background: "var(--brand)" }}>Ver todas as notícias</Link>
          </div>
          <div className="card">
            {noticias.slice(0, 5).map(n => (
              <article className="news-item" key={n.id}>
                <time className="news-date" dateTime={n.data}>{new Date(n.data + "T12:00:00").toLocaleDateString("pt-BR")}</time>
                <div>
                  <Link href={`/noticias/${n.id}`} className="news-title">{n.titulo}</Link>
                  <p style={{ fontSize: 13, color: "var(--muted)", margin: "4px 0 0" }}>{n.resumo}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 44 }} aria-label="Seção comemorativa dos 60 anos">
          <div className="anniversary">
            <div className="big" aria-hidden="true">60</div>
            <h2>SEMAE 60 anos</h2>
            <p style={{ maxWidth: 620, margin: "0 auto 20px", color: "#6b5310", lineHeight: 1.7 }}>
              Seis décadas de história a serviço da população de Mogi das Cruzes. Uma trajetória feita de água, saneamento, cuidado e compromisso público.
            </p>
            <Link href="/60-anos" className="btn btn-primary" style={{ background: "var(--brand)" }}>Conhecer a história</Link>
          </div>
        </section>

        <section style={{ marginTop: 44 }} aria-labelledby="acesso-titulo">
          <h2 id="acesso-titulo" className="section-title">Acesso rápido</h2>
          <div className="grid grid-3">
            <Link href="/documentos" className="card">
              <div className="card-icon" aria-hidden="true">📂</div>
              <h3>Documentos</h3>
              <p>Relatórios, planos, tarifas e contratos disponíveis para consulta.</p>
            </Link>
            <Link href="/servicos#atendimento" className="card">
              <div className="card-icon" aria-hidden="true">🗣️</div>
              <h3>Fale com o SEMAE</h3>
              <p>Encontre os canais de atendimento e envie sua solicitação.</p>
            </Link>
            <Link href="/acessibilidade" className="card">
              <div className="card-icon" aria-hidden="true">♿</div>
              <h3>Acessibilidade</h3>
              <p>Conheça os recursos de acessibilidade disponíveis neste site.</p>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  return { props: { noticias: store.listarNoticias(true).slice(0, 5) } };
}
