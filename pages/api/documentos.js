import store from "../../lib/store";

export default function handler(req, res) {
  const { method } = req;
  if (method === "GET") return res.status(200).json(store.listarDocumentos());
  if (method === "POST") return res.status(201).json(store.criarDocumento(req.body || {}));
  if (method === "DELETE") {
    const id = req.query.id || req.body?.id;
    return store.excluirDocumento(id) ? res.status(200).json({ ok: true }) : res.status(404).json({ erro: "Não encontrado" });
  }
  return res.status(405).json({ erro: "Método não permitido" });
}
