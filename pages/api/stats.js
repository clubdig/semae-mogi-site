import store from "../../lib/store";

export default function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ erro: "Método não permitido" });
  return res.status(200).json(store.stats());
}
