import { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import store from "../lib/store";

export default function Busca({ noticias, documentos }) {
  const [termo, setTermo] = useState("");
  const [resultados, setResultados] = useState([]);

  function buscar(e) {
    e.preventDefault();
    const t = (termo || "").toLowerCase().trim();
    if (!t) { setResultados([]); return; }
    const r = [];
    noticias.filter(n => (n.titulo + " " + n.resumo + " " + n.conteudo).toLowerCase().includes(t))
      .forEach(n => r.push({ tipo: "Notícia", titulo: n.titulo, link: `/noticias/${n.id}`, data: n.data }));
    documentos.filter(d => d.titulo.toLowerCase().includes(t))
      .forEach(d => r.push({ tipo: "Documento", titulo: d.titulo, link: "/documentos", data: d.data }));
    setResultados(r);
  }

  return (
    <Layout title="Busca">
      <div className="container" style={{ maxWidth: 860 }}>
        <h1 className="section-title">Busca no site</h1>
        <p className="section-sub">Encontre notícias e documentos do SEMAE.</p>

        <form onSubmit={buscar} className="card">
          <label className="field-label" htmlFor="termo">Termo a buscar</label>
          <div style={{ display: "flex", gap: 10 }}>
            <input id="termo" className="input" value={termo} onChange={e => setTermo(e.target.value)} placeholder="Ex.: água, esgoto, relatório..." />
            <button type="submit" className="btn btn-primary" style={{ background: "var(--brand)" }}>Buscar</button>
          </div>
        </form>

        {resultados.length > 0 && (
          <div className="card" style={{ marginTop: 20 }}>
            <h2 style={{ fontSize: 18, color: "var(--brand-dark)", marginTop: 0 }}>{resultados.length} resultado(s) para “{termo}”</h2>
            {resultados.map((r, i) => (
              <article className="news-item" key={i}>
                <span className="news-date">{r.tipo}</span>
                <div><Link href={r.link} className="news-title">{r.titulo}</Link></div>
              </article>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  return { props: { noticias: store.listarNoticias(true), documentos: store.listarDocumentos() } };
}
