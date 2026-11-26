import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import store from "../../lib/store";

export default function Noticia({ noticia }) {
  const router = useRouter();
  if (router.isFallback) return <Layout title="Notícia"><div className="container"><p>Carregando…</p></div></Layout>;
  if (!noticia) return <Layout title="Notícia"><div className="container"><p>Notícia não encontrada.</p></div></Layout>;

  return (
    <Layout title={noticia.titulo}>
      <div className="container" style={{ maxWidth: 860 }}>
        <Link href="/noticias" style={{ color: "var(--brand)", fontWeight: 700, fontSize: 14 }}>← Voltar para notícias</Link>
        <article className="card" style={{ marginTop: 18 }}>
          <span className="badge badge-info">{noticia.categoria}</span>
          <h1 style={{ fontSize: 30, color: "var(--brand-dark)", margin: "14px 0 6px", lineHeight: 1.2 }}>{noticia.titulo}</h1>
          <time dateTime={noticia.data} style={{ color: "var(--muted)", fontSize: 13 }}>
            Publicado em {new Date(noticia.data + "T12:00:00").toLocaleDateString("pt-BR")}
          </time>
          <p style={{ fontSize: 16, lineHeight: 1.9, color: "#33495c", marginTop: 24 }}>{noticia.conteudo}</p>
        </article>
      </div>
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: store.listarNoticias(true).map(n => ({ params: { id: String(n.id) } })),
    fallback: true,
  };
}

export function getStaticProps({ params }) {
  const n = store.noticia(params.id);
  return { props: { noticia: n && n.publicada ? n : null } };
}
