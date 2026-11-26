import store from "../../lib/store";

export default function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ erro: "Método não permitido" });
  res.setHeader("Content-Disposition", 'attachment; filename="semae-exportacao-conteudos.json"');
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  return res.status(200).json(store.exportar());
}
