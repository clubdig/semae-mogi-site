import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";

const VAZIO = { titulo: "", resumo: "", conteudo: "", categoria: "Institucional", publicada: true, destaque: false };

export default function AdminNoticias() {
  const [itens, setItens] = useState([]);
  const [form, setForm] = useState(VAZIO);
  const [editando, setEditando] = useState(null);
  const [msg, setMsg] = useState("");

  async function carregar() {
    const r = await fetch("/api/noticias");
    setItens(await r.json());
  }
  useEffect(() => { carregar(); }, []);

  async function salvar(e) {
    e.preventDefault();
    setMsg("");
    const res = editando
      ? await fetch("/api/noticias", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: editando }) })
      : await fetch("/api/noticias", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    if (res.ok) { setMsg(editando ? "Notícia atualizada!" : "Notícia publicada!"); setForm(VAZIO); setEditando(null); carregar(); }
    else setMsg("Erro ao salvar");
  }

  async function excluir(id) {
    if (!confirm("Excluir esta notícia?")) return;
    await fetch(`/api/noticias?id=${id}`, { method: "DELETE" });
    carregar();
  }

  return (
    <AdminLayout title="Gerenciar notícias" subtitle="Crie, edite e publique comunicados do SEMAE">
      {msg && <div className="alert alert-success">{msg}</div>}
      <div className="grid" style={{ gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)", alignItems: "start" }}>
        <div className="card">
          <h2 style={{ fontSize: 18, color: "var(--brand-dark)", marginTop: 0 }}>{editando ? "Editar notícia" : "Nova notícia"}</h2>
          <form onSubmit={salvar}>
            <label className="field-label" htmlFor="titulo">Título *</label>
            <input id="titulo" className="input" value={form.titulo} onChange={e => setForm({ ...form, titulo: e.target.value })} required />
            <label className="field-label" htmlFor="resumo">Resumo *</label>
            <input id="resumo" className="input" value={form.resumo} onChange={e => setForm({ ...form, resumo: e.target.value })} required />
            <label className="field-label" htmlFor="conteudo">Conteúdo *</label>
            <textarea id="conteudo" className="textarea" value={form.conteudo} onChange={e => setForm({ ...form, conteudo: e.target.value })} required />
            <label className="field-label" htmlFor="categoria">Categoria</label>
            <select id="categoria" className="select" value={form.categoria} onChange={e => setForm({ ...form, categoria: e.target.value })}>
              <option>Institucional</option><option>Educação Ambiental</option><option>Obras</option><option>Transparência</option><option>Comunicado</option>
            </select>
            <label style={{ display: "block", marginTop: 14, fontSize: 14 }}>
              <input type="checkbox" checked={form.publicada} onChange={e => setForm({ ...form, publicada: e.target.checked })} /> Publicada
            </label>
            <label style={{ display: "block", marginTop: 8, fontSize: 14 }}>
              <input type="checkbox" checked={form.destaque} onChange={e => setForm({ ...form, destaque: e.target.checked })} /> Destaque na home
            </label>
            <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
              <button type="submit" className="btn btn-primary" style={{ background: "var(--brand)" }}>{editando ? "Salvar alterações" : "Publicar"}</button>
              {editando && <button type="button" className="btn btn-ghost" style={{ color: "#333", borderColor: "#ccc" }} onClick={() => { setEditando(null); setForm(VAZIO); }}>Cancelar</button>}
            </div>
          </form>
        </div>

        <div className="card">
          <h2 style={{ fontSize: 18, color: "var(--brand-dark)", marginTop: 0 }}>Publicadas ({itens.length})</h2>
          <div className="table-wrap">
            <table className="table">
              <thead><tr><th>Título</th><th>Status</th><th>Ações</th></tr></thead>
              <tbody>
                {itens.map(n => (
                  <tr key={n.id}>
                    <td style={{ fontWeight: 600 }}>{n.titulo}</td>
                    <td><span className={`badge ${n.publicada ? "badge-ok" : "badge-gray"}`}>{n.publicada ? "Publicada" : "Rascunho"}</span></td>
                    <td>
                      <button className="btn btn-ghost" style={{ padding: "5px 9px", fontSize: 12, color: "#333", borderColor: "#ccc" }} onClick={() => { setEditando(n.id); setForm({ titulo: n.titulo, resumo: n.resumo, conteudo: n.conteudo, categoria: n.categoria, publicada: n.publicada, destaque: n.destaque }); }}>Editar</button>{" "}
                      <button className="btn btn-ghost" style={{ padding: "5px 9px", fontSize: 12, color: "var(--danger)", borderColor: "#e5b6b0" }} onClick={() => excluir(n.id)}>Excluir</button>
                    </td>
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
