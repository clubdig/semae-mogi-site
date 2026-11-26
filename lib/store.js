// Armazenamento em memória (demonstração do CMS do SEMAE)
// Em produção com banco próprio, substituir por persistência (Postgres/MySQL).

const noticias = [
  {
    id: 1,
    titulo: "SEMAE comemora 60 anos de serviço público em Mogi das Cruzes",
    resumo: "Autarquia completou seis décadas levando água potável e saneamento a milhares de famílias mogianas.",
    conteudo: "Há 60 anos, o SEMAE nascia com o compromisso de garantir água potável e tratamento de esgoto para a população de Mogi das Cruzes. Ao longo das décadas, a autarquia ampliou sua rede, modernizou seus processos e consolidou-se como referência em saneamento público no Estado de São Paulo. A comemoração dos 60 anos reforça o compromisso com a transparência, a eficiência e o atendimento ao cidadão.",
    categoria: "Institucional",
    data: "2026-11-15",
    publicada: true,
    destaque: true,
  },
  {
    id: 2,
    titulo: "Campanha de conscientização sobre o uso consciente da água",
    resumo: "Iniciativa reforça a importância da economia de água especialmente em períodos de estiagem.",
    conteudo: "O SEMAE realiza campanha permanente de educação ambiental com foco no uso consciente da água. A iniciativa inclui palestras em escolas, distribuição de materiais informativos e ações nas redes sociais. O objetivo é reduzir o desperdício e formar uma cultura de sustentabilidade entre os moradores.",
    categoria: "Educação Ambiental",
    data: "2026-11-10",
    publicada: true,
    destaque: false,
  },
  {
    id: 3,
    titulo: "SEMAE amplia rede de coleta de esgoto no bairro Jardim Las Palmas",
    resumo: "Obra beneficia centenas de imóveis e melhora a infraestrutura sanitária da região.",
    conteudo: "A ampliação da rede de coleta de esgoto no bairro Jardim Las Palmas contempla mais de 800 metros de tubulação e beneficiará aproximadamente 400 imóveis. A obra é parte do plano de investimentos do SEMAE para ampliar a cobertura de saneamento no município.",
    categoria: "Obras",
    data: "2026-11-05",
    publicada: true,
    destaque: false,
  },
];

const documentos = [
  { id: 1, titulo: "Relatório Anual de Atividades 2025", tipo: "PDF", tamanho: "2,4 MB", data: "2026-03-20", categoria: "Transparência" },
  { id: 2, titulo: "Plano de Saneamento Básico — Revisão 2024", tipo: "PDF", tamanho: "5,1 MB", data: "2025-08-12", categoria: "Planejamento" },
  { id: 3, titulo: " Demonstrativo de Tarifas 2026", tipo: "PDF", tamanho: "820 KB", data: "2026-01-10", categoria: "Tarifas" },
  { id: 4, titulo: "Editais e Contratos Vigentes", tipo: "XLSX", tamanho: "340 KB", data: "2026-11-01", categoria: "Contratos" },
];

const banners = [
  { id: 1, titulo: "60 anos de água e saneamento", subtitulo: "Uma história construída com cada morador de Mogi das Cruzes", ativo: true },
  { id: 2, titulo: "Água potável para todos", subtitulo: "Compromisso com a qualidade e o bem-estar da população", ativo: true },
];

const usuarios = [
  { id: 1, nome: "Administrador SEMAE", email: "admin@semae.mogidascruzes.sp.gov.br", perfil: "admin", ativo: true },
  { id: 2, nome: "Comunicação", email: "comunicacao@semae.mogidascruzes.sp.gov.br", perfil: "editor", ativo: true },
];

const chamados = [
  { id: 1, titulo: "Atualização do banner da página inicial", status: "concluido", data: "2026-11-20", tipo: "Média" },
  { id: 2, titulo: "Correção de link em documento", status: "em_andamento", data: "2026-11-22", tipo: "Baixa" },
  { id: 3, titulo: "Publicação de comunicado sobre manutenção", status: "concluido", data: "2026-11-18", tipo: "Alta" },
];

let nextId = { noticia: 4, documento: 5, banner: 3, usuario: 3, chamado: 4 };
const agora = () => new Date().toISOString().slice(0, 10);

module.exports = {
  listarNoticias: (soPublicadas = false) => noticias.filter(n => !soPublicadas || n.publicada).sort((a,b) => b.data.localeCompare(a.data)),
  noticia: id => noticias.find(n => n.id === Number(id)),
  criarNoticia: d => { const n = { ...d, id: nextId.noticia++, data: d.data || agora() }; noticias.push(n); return n; },
  atualizarNoticia: (id, d) => { const i = noticias.findIndex(n => n.id === Number(id)); if (i < 0) return null; noticias[i] = { ...noticias[i], ...d, id: Number(id) }; return noticias[i]; },
  excluirNoticia: id => { const i = noticias.findIndex(n => n.id === Number(id)); if (i < 0) return false; noticias.splice(i,1); return true; },

  listarDocumentos: () => documentos.slice().sort((a,b) => b.data.localeCompare(a.data)),
  criarDocumento: d => { const x = { ...d, id: nextId.documento++, data: d.data || agora() }; documentos.push(x); return x; },
  excluirDocumento: id => { const i = documentos.findIndex(x => x.id === Number(id)); if (i < 0) return false; documentos.splice(i,1); return true; },

  listarBanners: () => banners,
  criarBanner: d => { const b = { ...d, id: nextId.banner++ }; banners.push(b); return b; },

  listarUsuarios: () => usuarios,

  listarChamados: () => chamados,
  criarChamado: d => { const c = { ...d, id: nextId.chamado++, data: agora() }; chamados.push(c); return c; },

  exportar: () => ({
    site: "SEMAE Mogi das Cruzes — Site Institucional",
    versao: "1.0",
    exportado_em: new Date().toISOString(),
    noticias, documentos, banners, usuarios, chamados
  }),

  stats: () => ({
    noticias: noticias.length,
    publicadas: noticias.filter(n => n.publicada).length,
    documentos: documentos.length,
    banners: banners.filter(b => b.ativo).length,
    chamados: chamados.length,
    horasSuporte: 16,
  }),
};
