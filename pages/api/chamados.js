import store from "../../lib/store";

export default function handler(req, res) {
  if (req.method === "GET") return res.status(200).json(store.listarChamados());
  if (req.method === "POST") return res.status(201).json(store.criarChamado(req.body || {}));
  return res.status(405).json({ erro: "Método não permitido" });
}
