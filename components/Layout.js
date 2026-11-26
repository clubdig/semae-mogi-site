import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre o SEMAE" },
  { href: "/servicos", label: "Serviços" },
  { href: "/noticias", label: "Notícias" },
  { href: "/documentos", label: "Documentos" },
  { href: "/60-anos", label: "60 Anos" },
  { href: "/contato", label: "Contato" },
];

export default function Layout({ title, children }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      <a href="#conteudo" className="skip-link">Pular para o conteúdo principal</a>

      <header className="site-header">
        <div className="header-top">
          <div className="container" style={{ padding: 0, display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <span>SEMAE · Serviço Municipal de Águas e Esgotos de Mogi das Cruzes</span>
            <span>60 anos de serviço público · 1966–2026</span>
          </div>
        </div>
        <div className="header-main">
          <Link href="/" className="brand-block" aria-label="SEMAE Mogi das Cruzes — página inicial">
            <span className="brand-logo" aria-hidden="true">SE</span>
            <span>
              <span className="brand-name" style={{ display: "block" }}>SEMAE</span>
              <span className="brand-sub" style={{ display: "block" }}>Mogi das Cruzes · SP</span>
            </span>
          </Link>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>☰</button>
          <nav aria-label="Menu principal">
            <ul className={`nav-list ${open ? "open" : ""}`}>
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className={router.pathname === n.href ? "active" : ""}
                    onClick={() => setOpen(false)}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li><Link href="/login" onClick={() => setOpen(false)}>Área administrativa</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="conteudo">{children}</main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <h4>SEMAE Mogi das Cruzes</h4>
              <p>Serviço Municipal de Águas e Esgotos — fornecendo água potável e tratamento de esgoto com responsabilidade e compromisso com o cidadão.</p>
              <p style={{ marginTop: 12 }}>Site institucional — redesenhado em 2026 em homenagem aos 60 anos da autarquia.</p>
            </div>
            <div>
              <h4>Links rápidos</h4>
              <Link href="/sobre">Sobre o SEMAE</Link>
              <Link href="/servicos">Serviços</Link>
              <Link href="/documentos">Documentos e transparência</Link>
              <Link href="/noticias">Notícias e comunicados</Link>
              <Link href="/60-anos">SEMAE 60 anos</Link>
            </div>
            <div>
              <h4>Atendimento</h4>
              <p>Central de atendimento ao cidadão</p>
              <p>Fone: (11) 4790-9900</p>
              <p>E-mail: semae@mogidascruzes.sp.gov.br</p>
              <p>Seg. a Sex., 8h às 17h</p>
            </div>
          </div>
          <div className="footer-bottom">
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <span>© 2026 Prefeitura Municipal de Mogi das Cruzes · SEMAE · CNPJ 52.561.214/0001-30</span>
              <Link href="/acessibilidade">Acessibilidade · WCAG 2.1 AA</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
