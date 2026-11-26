import Link from "next/link";
import Layout from "../components/Layout";
import store from "../lib/store";

export default function Noticias({ noticias }) {
  return (
    <Layout title="Notícias">
      <div className="container">
        <h1 className="section-title">Notícias e comunicados</h1>
        <p className="section-sub">Informações oficiais do SEMAE para a população de Mogi das Cruzes.</p>

        <div className="card">
          {noticias.map(n => (
            <article className="news-item" key={n.id}>
              <time className="news-date" dateTime={n.data}>{new Date(n.data + "T12:00:00").toLocaleDateString("pt-BR")}</time>
              <div>
                <span className="badge badge-info" style={{ marginBottom: 6 }}>{n.categoria}</span>
                <div><Link href={`/noticias/${n.id}`} className="news-title" style={{ fontSize: 17 }}>{n.titulo}</Link></div>
                <p style={{ fontSize: 14, color: "var(--muted)", margin: "6px 0 0" }}>{n.resumo}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  return { props: { noticias: store.listarNoticias(true) } };
}
