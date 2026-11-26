import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";

export default function AdminRelatorio() {
  const [stats, setStats] = useState(null);
  const [chamados, setChamados] = useState([]);
  const [mes, setMes] = useState(() => new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" }));

  useEffect(() => {
    fetch("/api/stats").then(r => r.json()).then(setStats).catch(() => {});
    fetch("/api/chamados").then(r => r.json()).then(setChamados).catch(() => {});
  }, []);

  function imprimir() { window.print(); }

  return (
    <AdminLayout title="Relatório mensal de serviços" subtitle="Documento para ateste da fiscalização e medição de horas">
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: 19, color: "var(--brand-dark)", margin: 0 }}>Relatório — {mes}</h2>
            <p style={{ color: "var(--muted)", fontSize: 13, margin: "4px 0 0" }}>SEMAE Mogi das Cruzes · Site institucional · Contrato 12 meses</p>
          </div>
          <button className="btn btn-primary" style={{ background: "var(--brand)" }} onClick={imprimir}>🖨️ Imprimir / salvar PDF</button>
        </div>

        <div className="grid grid-4">
          {stats && [
            ["Horas de suporte", stats.horasSuporte + " h"],
            ["Chamados atendidos", stats.chamados],
            ["Notícias publicadas", stats.publicadas],
            ["Documentos no ar", stats.documentos],
          ].map(([l, v], i) => (
            <div className="stat-box" key={i}>
              <div className="label">{l}</div>
              <div className="stat-num">{v}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24 }}>
          <h3 style={{ fontSize: 16, color: "var(--brand-dark)" }}>Serviços executados</h3>
          <ul style={{ color: "#405568", lineHeight: 2, paddingLeft: 20 }}>
            <li>Manutenção corretiva, preventiva, adaptativa e evolutiva do site.</li>
            <li>Apoio à publicação de conteúdos institucionais e comunicados.</li>
            <li>Backup periódico e monitoramento de disponibilidade.</li>
            <li>Atualização de componentes e correções de segurança.</li>
            <li>Atendimento de chamados dentro do saldo de 16 horas mensais.</li>
          </ul>
        </div>

        <div style={{ marginTop: 20 }}>
          <h3 style={{ fontSize: 16, color: "var(--brand-dark)" }}>Chamados do período</h3>
          <div className="table-wrap">
            <table className="table">
              <thead><tr><th>#</th><th>Descrição</th><th>Prioridade</th><th>Status</th></tr></thead>
              <tbody>
                {chamados.map(c => (
                  <tr key={c.id}><td>{c.id}</td><td>{c.titulo}</td><td>{c.tipo}</td><td>{c.status}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginTop: 24, padding: 16, background: "var(--brand-light)", borderRadius: 10 }}>
          <p style={{ margin: 0, color: "#405568", fontSize: 13 }}>
            <strong>Declaro</strong> que os serviços acima foram executados conforme o Termo de Referência, com SLA observado (crítico: até 4h úteis / solução em 8h úteis), backup realizado e nenhum incidente de segurança não comunicado.
          </p>
          <p style={{ margin: "16px 0 0", color: "#405568", fontSize: 13 }}>Responsável técnico: ____________________________________ · Data: ___/___/______</p>
        </div>
      </div>
    </AdminLayout>
  );
}
