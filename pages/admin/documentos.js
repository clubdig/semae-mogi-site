import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";

const VAZIO = { titulo: "", tipo: "PDF", tamanho: "", categoria: "Transparência" };

export default function AdminDocumentos() {
  const [itens, setItens] = useState([]);
  const [form, setForm] = useState(VAZIO);
  const [msg, setMsg] = useState("");

  async function carregar() { setItens(await (await fetch("/api/documentos")).json()); }
  useEffect(() => { carregar(); }, []);

  async function salvar(e) {
    e.preventDefault();
    const res = await fetch("/api/documentos", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    if (res.ok) { setMsg("Documento adicionado!"); setForm(VAZIO); carregar(); }
    else setMsg("Erro ao salvar");
  }

  async function excluir(id) {
    if (!confirm("Excluir este documento?")) return;
    await fetch(`/api/documentos?id=${id}`, { method: "DELETE" });
    carregar();
  }

  return (
    <AdminLayout title="Gerenciar documentos" subtitle="Disponibilize relatórios, planos e contratos para consulta pública">
      {msg && <div className="alert alert-success">{msg}</div>}
      <div className="grid" style={{ gridTemplateColumns: "minmax(0,1fr) minmax(0,1.3fr)", alignItems: "start" }}>
        <div className="card">
          <h2 style={{ fontSize: 18, color: "var(--brand-dark)", marginTop: 0 }}>Novo documento</h2>
          <form onSubmit={salvar}>
            <label className="field-label" htmlFor="titulo">Título *</label>
            <input id="titulo" className="input" value={form.titulo} onChange={e => setForm({ ...form, titulo: e.target.value })} required />
            <label className="field-label" htmlFor="tipo">Formato</label>
            <select id="tipo" className="select" value={form.tipo} onChange={e => setForm({ ...form, tipo: e.target.value })}>
              <option>PDF</option><option>XLSX</option><option>DOCX</option><option>imagem</option>
            </select>
            <label className="field-label" htmlFor="tamanho">Tamanho</label>
            <input id="tamanho" className="input" value={form.tamanho} onChange={e => setForm({ ...form, tamanho: e.target.value })} placeholder="Ex.: 2,4 MB" />
            <label className="field-label" htmlFor="categoria">Categoria</label>
            <select id="categoria" className="select" value={form.categoria} onChange={e => setForm({ ...form, categoria: e.target.value })}>
              <option>Transparência</option><option>Planejamento</option><option>Tarifas</option><option>Contratos</option><option>Relatórios</option>
            </select>
            <button type="submit" className="btn btn-primary" style={{ background: "var(--brand)", marginTop: 18 }}>Adicionar documento</button>
          </form>
        </div>
        <div className="card">
          <h2 style={{ fontSize: 18, color: "var(--brand-dark)", marginTop: 0 }}>Documentos ({itens.length})</h2>
          <div className="table-wrap">
            <table className="table">
              <thead><tr><th>Título</th><th>Tipo</th><th>Categoria</th><th>Ações</th></tr></thead>
              <tbody>
                {itens.map(d => (
                  <tr key={d.id}>
                    <td style={{ fontWeight: 600 }}>{d.titulo}</td>
                    <td>{d.tipo}</td>
                    <td><span className="badge badge-gray">{d.categoria}</span></td>
                    <td><button className="btn btn-ghost" style={{ padding: "5px 9px", fontSize: 12, color: "var(--danger)", borderColor: "#e5b6b0" }} onClick={() => excluir(d.id)}>Excluir</button></td>
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
