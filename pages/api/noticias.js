import store from "../../lib/store";

export default function handler(req, res) {
  const { method } = req;
  if (method === "GET") return res.status(200).json(store.listarNoticias());
  if (method === "POST") return res.status(201).json(store.criarNoticia(req.body || {}));
  if (method === "PUT") {
    const { id, ...dados } = req.body || {};
    const n = store.atualizarNoticia(id, dados);
    return n ? res.status(200).json(n) : res.status(404).json({ erro: "Notícia não encontrada" });
  }
  if (method === "DELETE") {
    const id = req.query.id || req.body?.id;
    return store.excluirNoticia(id) ? res.status(200).json({ ok: true }) : res.status(404).json({ erro: "Não encontrada" });
  }
  return res.status(405).json({ erro: "Método não permitido" });
}
