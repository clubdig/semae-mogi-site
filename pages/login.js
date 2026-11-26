import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const router = useRouter();

  async function entrar(e) {
    e.preventDefault();
    setCarregando(true);
    setErro("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });
      if (res.ok) {
        const data = await res.json();
        document.cookie = `semae_usuario=${encodeURIComponent(data.usuario.nome)}; path=/; max-age=28800`;
        document.cookie = `semae_perfil=${data.usuario.perfil}; path=/; max-age=28800`;
        router.push("/admin");
      } else {
        const data = await res.json();
        setErro(data.erro || "Erro ao entrar");
      }
    } catch {
      setErro("Erro de conexão com o servidor");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="auth-wrap">
      <section className="auth-hero">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
            <div className="brand-logo" style={{ background: "rgba(255,255,255,.15)", width: 44, height: 44 }}>SE</div>
            <div><strong style={{ fontSize: 18 }}>SEMAE</strong><div style={{ fontSize: 12, color: "#c6dfee" }}>Painel administrativo</div></div>
          </div>
          <h1 style={{ fontSize: 36, lineHeight: 1.2, marginBottom: 18 }}>Gestão do site institucional</h1>
          <p style={{ color: "#d9eef9", fontSize: 16, lineHeight: 1.7, maxWidth: 460 }}>
            Área reservada para os usuários autorizados do SEMAE gerenciarem notícias, documentos, banners e conteúdos do portal.
          </p>
        </div>
      </section>
      <section className="auth-panel">
        <div className="auth-card">
          <h1>Bem-vindo de volta</h1>
          <p>Entre com as suas credenciais para acessar o painel.</p>
          <form onSubmit={entrar}>
            <label className="field-label" htmlFor="email">E-mail institucional</label>
            <input id="email" className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="seu.email@semae.mogidascruzes.sp.gov.br" required />
            <label className="field-label" htmlFor="senha">Senha</label>
            <input id="senha" className="input" type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="••••••••" required />
            {erro && <div className="alert alert-error" role="alert">{erro}</div>}
            <button type="submit" className="btn btn-primary" style={{ background: "var(--brand)", width: "100%", justifyContent: "center", marginTop: 20 }} disabled={carregando}>
              {carregando ? "Entrando…" : "Acessar painel →"}
            </button>
          </form>
          <div style={{ marginTop: 24, padding: 14, background: "#f6f9fb", border: "1px dashed var(--border)", borderRadius: 10, fontSize: 13, color: "#405568" }}>
            <strong>Acesso de demonstração</strong><br />
            Admin: <code>admin@semae.mogidascruzes.sp.gov.br</code> · <code>admin123</code><br />
            Editor: <code>editor@semae.mogidascruzes.sp.gov.br</code> · <code>editor123</code>
          </div>
        </div>
      </section>
    </div>
  );
}
