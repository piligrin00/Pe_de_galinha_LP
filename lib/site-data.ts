export const contato = {
  telefone: '(21) 96436-5168',
  telefoneLink: 'tel:+5521964365168',
  whatsapp: '(21) 96436-5168',
  whatsappLink:
    'https://wa.me/5521964365168?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento.',
  instagram: '@pedegalinhaautopecas',
  instagramLink: 'https://www.instagram.com/pedegalinhaautopecas/',
  endereco: 'R. Plínio Barreto, 351 - Jardim América, Rio de Janeiro - RJ, 21240-120',
  enderecoLink:
    'https://www.google.com/maps/search/?api=1&query=R.+Pl%C3%ADnio+Barreto%2C+351+-+Jardim+Am%C3%A9rica%2C+Rio+de+Janeiro+-+RJ%2C+21240-120',
  googleBusinessLink:
    'https://www.google.com/maps?q=R.+Pl%C3%ADnio+Barreto%2C+351+-+Jardim+Am%C3%A9rica%2C+Rio+de+Janeiro+-+RJ%2C+21240-120&output=embed',
  // TODO: só temos o horário de fechamento (18h) via Google Meu Negócio — confirme a semana completa.
  horario: 'Aberto agora · Fecha às 18h',
}

export type Produto = {
  nome: string
  descricao: string
  imagem: string
}

export const produtos: Produto[] = [
  {
    nome: 'Palhetas Específicas',
    descricao: 'Palhetas de limpador de para-brisa sob medida para cada modelo de carro.',
    imagem: '/images/produto-palhetas.png',
  },
  {
    nome: 'Lâmpadas Automotivas',
    descricao: 'Lâmpadas halógenas para farol e setas, com qualidade e garantia.',
    imagem: '/images/produto-lampadas-automotivas.png',
  },
  {
    nome: 'Lâmpadas de LED',
    descricao: 'Lâmpadas LED de alta durabilidade para mais iluminação e economia.',
    imagem: '/images/produto-led.png',
  },
  {
    nome: 'Cartela de Fusíveis',
    descricao: 'Kits de fusíveis automotivos em várias amperagens para o seu carro.',
    imagem: '/images/produto-fusiveis.png',
  },
  {
    nome: 'Cabo de Chupeta',
    descricao: 'Cabo auxiliar de bateria para dar partida no carro com segurança.',
    imagem: '/images/produto-cabo-chupeta.png',
  },
  {
    nome: 'Triângulo',
    descricao: 'Triângulo de sinalização obrigatório, resistente e fácil de guardar.',
    imagem: '/images/produto-triangulo.png',
  },
]

export type Avaliacao = {
  nome: string
  inicial: string
  nota: number
  tempo: string
  texto: string
}

export const avaliacoes: Avaliacao[] = [
  {
    nome: 'Carlos Menezes',
    inicial: 'C',
    nota: 5,
    tempo: 'há 2 semanas',
    texto:
      'Atendimento excelente! Precisava de pastilhas de freio com urgência e resolveram na hora. Preço justo e pessoal que entende do assunto.',
  },
  {
    nome: 'Fernanda Lima',
    inicial: 'F',
    nota: 5,
    tempo: 'há 1 mês',
    texto:
      'Comprei bateria e já saí com ela instalada. Muito prático, recomendo demais a Pé de Galinha para quem não quer dor de cabeça.',
  },
  {
    nome: 'Rodrigo Alves',
    inicial: 'R',
    nota: 5,
    tempo: 'há 3 semanas',
    texto:
      'Sempre acho as peças que preciso, mesmo para carros mais antigos. Tiram todas as dúvidas pelo WhatsApp antes da compra.',
  },
  {
    nome: 'Juliana Souza',
    inicial: 'J',
    nota: 4,
    tempo: 'há 2 meses',
    texto:
      'Boa variedade de produtos e preços competitivos. Só tive que esperar um pouco por uma peça específica, mas valeu a pena.',
  },
  {
    nome: 'Marcos Pereira',
    inicial: 'M',
    nota: 5,
    tempo: 'há 5 dias',
    texto:
      'Loja de confiança. Já é a terceira vez que compro aqui e nunca me decepcionei. Equipe honesta e prestativa.',
  },
  {
    nome: 'Patrícia Gomes',
    inicial: 'P',
    nota: 5,
    tempo: 'há 1 semana',
    texto:
      'Achei óleo e filtro pelo melhor preço da região. Atendimento pelo telefone foi rápido e resolveu tudo.',
  },
]

export const navLinks = [
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
]
