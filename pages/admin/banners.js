import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";

export default function AdminBanners() {
  const [itens, setItens] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [msg, setMsg] = useState("");

  async function carregar() { setItens(await (await fetch("/api/banners")).json()); }
  useEffect(() => { carregar(); }, []);

  async function salvar(e) {
    e.preventDefault();
    const res = await fetch("/api/banners", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ titulo, subtitulo, ativo: true }) });
    if (res.ok) { setMsg("Banner criado!"); setTitulo(""); setSubtitulo(""); carregar(); }
  }

  return (
    <AdminLayout title="Gerenciar banners" subtitle="Banners e elementos visuais institucionais">
      {msg && <div className="alert alert-success">{msg}</div>}
      <div className="grid" style={{ gridTemplateColumns: "minmax(0,1fr) minmax(0,1.3fr)", alignItems: "start" }}>
        <div className="card">
          <h2 style={{ fontSize: 18, color: "var(--brand-dark)", marginTop: 0 }}>Novo banner</h2>
          <form onSubmit={salvar}>
            <label className="field-label" htmlFor="titulo">Título *</label>
            <input id="titulo" className="input" value={titulo} onChange={e => setTitulo(e.target.value)} required />
            <label className="field-label" htmlFor="subtitulo">Subtítulo</label>
            <input id="subtitulo" className="input" value={subtitulo} onChange={e => setSubtitulo(e.target.value)} />
            <button type="submit" className="btn btn-primary" style={{ background: "var(--brand)", marginTop: 18 }}>Criar banner</button>
          </form>
        </div>
        <div className="card">
          <h2 style={{ fontSize: 18, color: "var(--brand-dark)", marginTop: 0 }}>Banners ativos</h2>
          {itens.map(b => (
            <div key={b.id} style={{ padding: 14, borderBottom: "1px solid var(--border)" }}>
              <strong style={{ color: "var(--brand-dark)" }}>{b.titulo}</strong>
              <p style={{ margin: "4px 0 0", color: "var(--muted)", fontSize: 13 }}>{b.subtitulo}</p>
              <span className="badge badge-ok" style={{ marginTop: 8 }}>Ativo</span>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
