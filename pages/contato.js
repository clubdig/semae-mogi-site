import Layout from "../components/Layout";

export default function Contato() {
  return (
    <Layout title="Contato">
      <div className="container">
        <h1 className="section-title">Fale com o SEMAE</h1>
        <p className="section-sub">Estamos à disposição para dúvidas, solicitações e orientações.</p>

        <div className="grid grid-2">
          <div className="card">
            <h2 style={{ fontSize: 19, color: "var(--brand-dark)", marginTop: 0 }}>Canais de atendimento</h2>
            <div style={{ lineHeight: 2, color: "#405568" }}>
              <p><strong>📞 Telefone:</strong> (11) 4790-9900</p>
              <p><strong>✉️ E-mail:</strong> semae@mogidascruzes.sp.gov.br</p>
              <p><strong>🏢 Endereço:</strong> Mogi das Cruzes — SP</p>
              <p><strong>🕐 Horário:</strong> Segunda a sexta, 8h às 17h</p>
            </div>
          </div>
          <div className="card">
            <h2 style={{ fontSize: 19, color: "var(--brand-dark)", marginTop: 0 }}>Como podemos ajudar?</h2>
            <p style={{ color: "#405568", lineHeight: 1.8 }}>
              Para solicitações de ligação de água, reparos na rede, dúvidas sobre tarifas ou qualquer outra demanda, entre em contato pelos canais acima. Tenha em mãos o número de inscrição do imóvel para agilizarmos o atendimento.
            </p>
            <div style={{ marginTop: 16 }}>
              <span className="badge badge-ok">✓ Atendimento em português</span>{" "}
              <span className="badge badge-info">✓ Resposta em até 2 dias úteis</span>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: 22, background: "var(--brand-light)", borderColor: "#bcdcee" }}>
          <h2 style={{ fontSize: 19, color: "var(--brand-dark)", marginTop: 0 }}>Acessibilidade e inclusão</h2>
          <p style={{ color: "#405568", lineHeight: 1.8, margin: 0 }}>
            Este site segue boas práticas de acessibilidade. Se você encontrar alguma dificuldade para navegar ou acessar conteúdos, entre em contato para que possamos melhorar a experiência de todos os cidadãos.
          </p>
        </div>
      </div>
    </Layout>
  );
}
