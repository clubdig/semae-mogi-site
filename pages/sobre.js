import Layout from "../components/Layout";

export default function Sobre() {
  return (
    <Layout title="Sobre o SEMAE">
      <div className="container">
        <h1 className="section-title">Sobre o SEMAE</h1>
        <p className="section-sub">Serviço Municipal de Águas e Esgotos de Mogi das Cruzes</p>

        <div className="grid grid-2">
          <div className="card">
            <h2 style={{ fontSize: 20, color: "var(--brand-dark)", marginTop: 0 }}>Quem somos</h2>
            <p style={{ lineHeight: 1.8, color: "#405568" }}>
              O SEMAE é a autarquia municipal responsável pelo abastecimento de água potável e pela coleta e tratamento de esgoto em Mogi das Cruzes. Criado há 60 anos, o serviço cresceu junto com a cidade e hoje atende milhares de imóveis com infraestrutura, monitoramento de qualidade e atendimento ao cidadão.
            </p>
            <p style={{ lineHeight: 1.8, color: "#405568" }}>
              Nosso compromisso é garantir saneamento com qualidade, transparência e respeito ao meio ambiente, promovendo saúde e qualidade de vida para todos os moradores.
            </p>
          </div>

          <div className="card">
            <h2 style={{ fontSize: 20, color: "var(--brand-dark)", marginTop: 0 }}>Nossa missão</h2>
            <p style={{ lineHeight: 1.8, color: "#405568" }}>
              Fornecer água segura e tratar o esgoto de forma ambientalmente responsável, com eficiência, economicidade e atenção permanente às necessidades da população.
            </p>
            <div style={{ marginTop: 20 }}>
              <span className="badge badge-ok">✓ Qualidade monitorada</span>{" "}
              <span className="badge badge-info">✓ Transparência pública</span>{" "}
              <span className="badge badge-warn">✓ 60 anos de serviço</span>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: 24 }}>
          <h2 style={{ fontSize: 20, color: "var(--brand-dark)", marginTop: 0 }}>Dados institucionais</h2>
          <div className="grid grid-3">
            <div><strong>Razão social:</strong><br />Serviço Municipal de Águas e Esgotos de Mogi das Cruzes</div>
            <div><strong>CNPJ:</strong><br />52.561.214/0001-30</div>
            <div><strong>Sede:</strong><br />Mogi das Cruzes — Estado de São Paulo</div>
            <div><strong>Vigência:</strong><br />Desde 1966 — 60 anos de história</div>
            <div><strong>Setor:</strong><br />Saneamento público · TIC</div>
            <div><strong>Atendimento:</strong><br />Segunda a sexta, 8h às 17h</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
