const USUARIOS = [
  { id: 1, nome: "Administrador SEMAE", email: "admin@semae.mogidascruzes.sp.gov.br", senha: "admin123", perfil: "admin" },
  { id: 2, nome: "Equipe de Comunicação", email: "editor@semae.mogidascruzes.sp.gov.br", senha: "editor123", perfil: "editor" },
];

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ erro: "Método não permitido" });
  const { email, senha } = req.body || {};
  const usuario = USUARIOS.find(u => u.email === (email || "").trim().toLowerCase() && u.senha === senha);
  if (!usuario) return res.status(401).json({ erro: "E-mail ou senha inválidos" });
  return res.status(200).json({ usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email, perfil: usuario.perfil } });
}
