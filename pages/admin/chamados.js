import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";

const ESTILO = { concluido: "badge-ok", em_andamento: "badge-warn", aberto: "badge-info" };

export default function AdminChamados() {
  const [itens, setItens] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("Média");
  const [msg, setMsg] = useState("");

  async function carregar() { setItens(await (await fetch("/api/chamados")).json()); }
  useEffect(() => { carregar(); }, []);

  async function salvar(e) {
    e.preventDefault();
    const res = await fetch("/api/chamados", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ titulo, tipo, status: "aberto" }) });
    if (res.ok) { setMsg("Chamado registrado!"); setTitulo(""); carregar(); }
  }

  return (
    <AdminLayout title="Chamados e suporte" subtitle="Registro e acompanhamento das solicitações (16h mensais)">
      {msg && <div className="alert alert-success">{msg}</div>}
      <div className="grid" style={{ gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", alignItems: "start" }}>
        <div className="card">
          <h2 style={{ fontSize: 18, color: "var(--brand-dark)", marginTop: 0 }}>Registrar chamado</h2>
          <form onSubmit={salvar}>
            <label className="field-label" htmlFor="titulo">Descrição *</label>
            <input id="titulo" className="input" value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Ex.: corrigir link em documento" required />
            <label className="field-label" htmlFor="tipo">Prioridade</label>
            <select id="tipo" className="select" value={tipo} onChange={e => setTipo(e.target.value)}>
              <option>Crítica</option><option>Alta</option><option>Média</option><option>Baixa</option>
            </select>
            <button type="submit" className="btn btn-primary" style={{ background: "var(--brand)", marginTop: 18 }}>Registrar</button>
          </form>
        </div>
        <div className="card">
          <h2 style={{ fontSize: 18, color: "var(--brand-dark)", marginTop: 0 }}>Chamados ({itens.length})</h2>
          <div className="table-wrap">
            <table className="table">
              <thead><tr><th>#</th><th>Descrição</th><th>Prioridade</th><th>Status</th><th>Data</th></tr></thead>
              <tbody>
                {itens.map(c => (
                  <tr key={c.id}>
                    <td style={{ color: "var(--muted)" }}>{c.id}</td>
                    <td style={{ fontWeight: 600 }}>{c.titulo}</td>
                    <td>{c.tipo}</td>
                    <td><span className={`badge ${ESTILO[c.status] || "badge-gray"}`}>{c.status}</span></td>
                    <td>{c.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
