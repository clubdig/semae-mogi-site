import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";

export default function AdminHome() {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    fetch("/api/stats").then(r => r.json()).then(setStats).catch(() => {});
  }, []);

  const cards = stats ? [
    ["📰", "Notícias publicadas", stats.publicadas, "de " + stats.noticias + " no total"],
    ["📂", "Documentos", stats.documentos, "disponíveis para consulta"],
    ["🖼️", "Banners ativos", stats.banners, "na página inicial"],
    ["🎫", "Chamados", stats.chamados, "registrados no mês"],
  ] : [];

  return (
    <AdminLayout title="Painel do SEMAE" subtitle="Visão geral do site institucional">
      <div className="grid grid-4">
        {cards.map(([icon, label, valor, foot], i) => (
          <div className="stat-box" key={i}>
            <div style={{ fontSize: 22, marginBottom: 8 }} aria-hidden="true">{icon}</div>
            <div className="label">{label}</div>
            <div className="stat-num">{valor}</div>
            <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{foot}</div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: 19, color: "var(--brand-dark)", marginTop: 0 }}>Ações rápidas</h2>
        <div className="grid grid-3">
          <a className="card" href="/admin/noticias" style={{ display: "block" }}>
            <div className="card-icon" aria-hidden="true">➕</div>
            <h3>Nova notícia</h3>
            <p>Publicar comunicado ou novidade no site.</p>
          </a>
          <a className="card" href="/admin/documentos" style={{ display: "block" }}>
            <div className="card-icon" aria-hidden="true">📄</div>
            <h3>Adicionar documento</h3>
            <p>Disponibilizar PDF, planilha ou relatório.</p>
          </a>
          <a className="card" href="/admin/relatorio" style={{ display: "block" }}>
            <div className="card-icon" aria-hidden="true">📊</div>
            <h3>Relatório mensal</h3>
            <p>Ver serviços executados e horas de suporte.</p>
          </a>
        </div>
      </div>

      <div className="card" style={{ marginTop: 24, background: "var(--brand-light)", borderColor: "#bcdcee" }}>
        <h2 style={{ fontSize: 18, color: "var(--brand-dark)", marginTop: 0 }}>SLA e suporte</h2>
        <p style={{ color: "#405568", lineHeight: 1.8, margin: 0 }}>
          Suporte técnico mensal: <strong>16 horas</strong> · Chamados críticos: atendimento em até <strong>4 horas úteis</strong> · Solução em até <strong>8 horas úteis</strong>. Backup periódico e monitoramento ativos.
        </p>
      </div>
    </AdminLayout>
  );
}
