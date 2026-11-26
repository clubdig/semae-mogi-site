import Layout from "../components/Layout";

export default function Acessibilidade() {
  return (
    <Layout title="Acessibilidade">
      <div className="container" style={{ maxWidth: 860 }}>
        <h1 className="section-title">Acessibilidade</h1>
        <p className="section-sub">Compromisso do SEMAE com um site acessível a todas as pessoas.</p>

        <div className="card">
          <h2 style={{ fontSize: 19, color: "var(--brand-dark)", marginTop: 0 }}>Recursos disponíveis</h2>
          <ul style={{ lineHeight: 2.1, color: "#405568", paddingLeft: 22 }}>
            <li><strong>Navegação por teclado:</strong> links acessíveis por Tab, com indicação visual de foco.</li>
            <li><strong>Link “Pular para o conteúdo”:</strong> acesso direto ao conteúdo principal.</li>
            <li><strong>Contraste adequado:</strong> cores com contraste suficiente para leitura.</li>
            <li><strong>Estrutura semântica:</strong> títulos hierárquicos e marcação correta de conteúdos.</li>
            <li><strong>Textos alternativos:</strong> descrição de imagens e elementos informativos.</li>
            <li><strong>Compatibilidade com leitores de tela:</strong> uso de atributos ARIA e landmarks.</li>
            <li><strong>Design responsivo:</strong> adequado a computadores, tablets e smartphones.</li>
          </ul>
        </div>

        <div className="card" style={{ marginTop: 22 }}>
          <h2 style={{ fontSize: 19, color: "var(--brand-dark)", marginTop: 0 }}>Padrão adotado</h2>
          <p style={{ color: "#405568", lineHeight: 1.8 }}>
            Este portal foi desenvolvido seguindo as diretrizes WCAG 2.1 no nível AA da W3C e a Norma Brasileira NBR ISO/IEC 40500. Buscamos melhoria contínua: se você identificar alguma barreira de acesso, entre em contato pelo e-mail semae@mogidascruzes.sp.gov.br.
          </p>
          <p style={{ marginTop: 12 }}><span className="badge badge-ok">✓ WCAG 2.1 AA</span> <span className="badge badge-info">✓ NBR ISO/IEC 40500</span></p>
        </div>
      </div>
    </Layout>
  );
}
