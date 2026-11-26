import Layout from "../components/Layout";

const MARCOS = [
  { ano: "1966", titulo: "Nascimento do serviço", texto: "Criação do Serviço Municipal de Águas e Esgotos de Mogi das Cruzes." },
  { ano: "1980", titulo: "Expansão da rede", texto: "Ampliação do abastecimento para os bairros em crescimento do município." },
  { ano: "1995", titulo: "Tratamento de esgoto", texto: "Início da operação da estação de tratamento e da coleta sistemática." },
  { ano: "2010", titulo: "Monitoramento da qualidade", texto: "Implantação de rotinas laboratoriais e divulgação periódica dos resultados." },
  { ano: "2026", titulo: "60 anos de serviço", texto: "Modernização digital do site institucional e nova identidade comemorativa." },
];

export default function Anos60() {
  return (
    <Layout title="SEMAE 60 anos">
      <div className="container" style={{ maxWidth: 980 }}>
        <section className="anniversary">
          <div className="big" aria-hidden="true">60</div>
          <h2>SEMAE 60 anos</h2>
          <p style={{ maxWidth: 640, margin: "0 auto", color: "#6b5310", lineHeight: 1.8 }}>
            Seis décadas levando água potável e saneamento a Mogi das Cruzes. Esta é uma homenagem à trajetória do SEMAE e, sobretudo, às pessoas que a construíram: servidores, moradores e parceiros.
          </p>
        </section>

        <section style={{ marginTop: 44 }} aria-labelledby="linha-titulo">
          <h2 id="linha-titulo" className="section-title">Linha do tempo</h2>
          <p className="section-sub">Os principais marcos desses 60 anos de história.</p>
          <div style={{ borderLeft: "3px solid var(--accent)", paddingLeft: 24, marginLeft: 8 }}>
            {MARCOS.map(m => (
              <article key={m.ano} style={{ position: "relative", marginBottom: 28 }}>
                <span style={{
                  position: "absolute", left: -33, top: 4, width: 18, height: 18,
                  borderRadius: "50%", background: "var(--brand)", border: "3px solid #fff",
                  boxShadow: "0 0 0 2px var(--accent)"
                }} aria-hidden="true" />
                <strong style={{ color: "var(--brand)", fontSize: 20 }}>{m.ano}</strong>
                <h3 style={{ margin: "4px 0 6px", fontSize: 18, color: "var(--brand-dark)" }}>{m.titulo}</h3>
                <p style={{ color: "#405568", lineHeight: 1.7, margin: 0 }}>{m.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="card" style={{ marginTop: 20, background: "linear-gradient(135deg,#fff9e8,#fff3cc)", borderColor: "var(--accent)" }}>
          <h2 style={{ fontSize: 19, color: "var(--brand-dark)", marginTop: 0 }}>"São 60 anos de compromisso com a vida"</h2>
          <p style={{ color: "#6b5310", lineHeight: 1.8, margin: 0 }}>
            Cada metro de tubulação, cada análise de água e cada atendimento prestado representa o cuidado do SEMAE com a comunidade. Que os próximos 60 anos sejam de ainda mais qualidade, inovação e serviço público.
          </p>
        </div>
      </div>
    </Layout>
  );
}
