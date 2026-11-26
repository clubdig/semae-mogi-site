import Link from "next/link";
import { useRouter } from "next/router";

const MENU = [
  { href: "/admin", label: "📊 Painel", exact: true },
  { href: "/admin/noticias", label: "📰 Notícias" },
  { href: "/admin/documentos", label: "📂 Documentos" },
  { href: "/admin/banners", label: "🖼️ Banners" },
  { href: "/admin/chamados", label: "🎫 Chamados" },
  { href: "/admin/relatorio", label: "📈 Relatório mensal" },
];

export default function AdminLayout({ title, subtitle, children }) {
  const router = useRouter();
  return (
    <div className="admin-shell">
      <aside className="admin-side">
        <Link href="/" className="brand-block" style={{ marginBottom: 30 }}>
          <span className="brand-logo" aria-hidden="true">SE</span>
          <span>
            <span className="brand-name" style={{ display: "block" }}>SEMAE</span>
            <span className="brand-sub" style={{ display: "block", color: "#9fc3d8" }}>Painel administrativo</span>
          </span>
        </Link>
        <nav aria-label="Menu administrativo">
          {MENU.map(m => (
            <Link key={m.href} href={m.href} className={router.pathname === m.href ? "active" : ""}>{m.label}</Link>
          ))}
        </nav>
        <div style={{ marginTop: 30, borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: 18 }}>
          <Link href="/" style={{ fontSize: 13 }}>← Ver site público</Link>
        </div>
      </aside>
      <main className="admin-main">
        <div className="admin-top">
          <div>
            <h1>{title}</h1>
            {subtitle && <p style={{ color: "var(--muted)", fontSize: 14, margin: "4px 0 0" }}>{subtitle}</p>}
          </div>
          <span className="badge badge-ok">★ Sistema em produção</span>
        </div>
        {children}
      </main>
    </div>
  );
}
