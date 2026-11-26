import Layout from "../components/Layout";
import store from "../lib/store";

const ICONES = { PDF: "📕", XLSX: "📗", DOCX: "📘", imagem: "🖼️" };

export default function Documentos({ documentos }) {
  return (
    <Layout title="Documentos">
      <div className="container">
        <h1 className="section-title">Documentos e transparência</h1>
        <p className="section-sub">Relatórios, planos, tarifas e contratos para consulta pública.</p>

        <div className="card">
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr><th>Documento</th><th>Categoria</th><th>Formato</th><th>Tamanho</th><th>Data</th></tr>
              </thead>
              <tbody>
                {documentos.map(d => (
                  <tr key={d.id}>
                    <td style={{ fontWeight: 600 }}>{d.titulo}</td>
                    <td><span className="badge badge-gray">{d.categoria}</span></td>
                    <td>{ICONES[d.tipo] || "📄"} {d.tipo}</td>
                    <td>{d.tamanho}</td>
                    <td>{new Date(d.data + "T12:00:00").toLocaleDateString("pt-BR")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card" style={{ marginTop: 22 }}>
          <h2 style={{ fontSize: 18, color: "var(--brand-dark)", marginTop: 0 }}>Transparência ativa</h2>
          <p style={{ lineHeight: 1.8, color: "#405568" }}>
            O SEMAE mantém disponíveis os documentos de gestão, plano de saneamento, demonstrativos de tarifas e relatórios de execução, em conformidade com a Lei de Acesso à Informação e com a Lei Geral de Proteção de Dados.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  return { props: { documentos: store.listarDocumentos() } };
}
