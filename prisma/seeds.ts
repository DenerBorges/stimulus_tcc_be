import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const projects = [
  {
    name: 'Seu Livro',
    description: 'Um conteúdo de auto-ajuda sobre escolhas de uma profissão.',
    category: 'Livro',
    total: 540,
    goal: 1300.0,
    deadline: 90,
    report: 0,
    image: [
      'https://i.imgur.com/HRzcZmh.png',
      'https://i.imgur.com/LXpaw8c.jpg',
      'https://i.imgur.com/OEArnpU.jpg',
      'https://i.imgur.com/SaL1iOW.jpg',
    ],
    userId: 1,
  },
  {
    name: 'The King’s Path',
    description: 'O MMORPG mais esperado do ano.',
    category: 'Jogo',
    total: 1250,
    goal: 3600.0,
    deadline: 130,
    report: 0,
    image: [
      'https://i.imgur.com/KxiClv0.jpg',
      'https://i.imgur.com/DAPfANO.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Psychedelic Jungle',
    description: 'A mais recente obra indie.',
    category: 'Arte',
    total: 210,
    goal: 1170.0,
    deadline: 83,
    report: 0,
    image: [
      'https://i.imgur.com/i10fFCF.jpg',
      'https://i.imgur.com/1ye5EkG.jpg',
    ],
    userId: 1,
  },
  {
    name: 'O Poder do Hábito',
    description: 'Por que fazemos o que fazemos na vida e nos negócios.',
    category: 'Livro',
    total: 186,
    goal: 695.0,
    deadline: 67,
    report: 0,
    image: [
      'https://i.imgur.com/abkfTHa.png',
      'https://i.imgur.com/7YJZrN6.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Project Robot',
    description: 'Acompanhe o desenvolvimento da evolução robótica.',
    category: 'Tecnologia',
    total: 983,
    goal: 2450.0,
    deadline: 114,
    report: 0,
    image: [
      'https://i.imgur.com/bI7pGh1.jpg',
      'https://i.imgur.com/seP6bCT.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Indie Retro Music',
    description: 'Apoie a música indie neste novo projeto de produção musical.',
    category: 'Música',
    total: 2092,
    goal: 3920.0,
    deadline: 180,
    report: 0,
    image: [
      'https://i.imgur.com/cn3OSEi.jpg',
      'https://i.imgur.com/IViW68z.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Curso temperado',
    description:
      'Apoie este projeto para participar do curso temperado online.',
    category: 'Gastronomia',
    total: 34,
    goal: 560.0,
    deadline: 143,
    report: 0,
    image: [
      'https://i.imgur.com/ilqnAsZ.jpg',
      'https://i.imgur.com/Rmsn6P5.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Unknown Road',
    description: 'O tenso jogo de terror com sobrevivência.',
    category: 'Jogo',
    total: 2174,
    goal: 2300.0,
    deadline: 78,
    report: 0,
    image: [
      'https://i.imgur.com/gHQYuLs.jpg',
      'https://i.imgur.com/fK0itrT.jpg',
    ],
    userId: 1,
  },
  {
    name: 'O Milagre da Manhã',
    description: 'Para se tornar um milionário.',
    category: 'Livro',
    total: 1340,
    goal: 980.0,
    deadline: 112,
    report: 0,
    image: [
      'https://i.imgur.com/ZTI8Zm5.jpg',
      'https://i.imgur.com/hejhMdV.png',
    ],
    userId: 1,
  },
  {
    name: 'Veggies & Greens',
    description: 'Receitas para comidas saudáveis.',
    category: 'Livro',
    total: 980,
    goal: 1140.0,
    deadline: 99,
    report: 0,
    image: [
      'https://i.imgur.com/CiiaYqN.jpg',
      'https://i.imgur.com/KWLHFf8.jpg',
    ],
    userId: 1,
  },
  {
    name: 'The Garden',
    description: 'Um conto sobre jardinagem.',
    category: 'Livro',
    total: 1290,
    goal: 674.0,
    deadline: 75,
    report: 0,
    image: [
      'https://i.imgur.com/Sbvw4pZ.jpg',
      'https://i.imgur.com/76N0ITf.png',
    ],
    userId: 1,
  },
  {
    name: 'O Poder do Agora',
    description: 'Um guia para a iluminação espiritual.',
    category: 'Livro',
    total: 1020,
    goal: 865.0,
    deadline: 135,
    report: 0,
    image: [
      'https://i.imgur.com/z4sW4Op.png',
      'https://i.imgur.com/dGS1RIH.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Grave',
    description: 'Um excelente FPS de ação online.',
    category: 'Jogo',
    total: 1730,
    goal: 2542.0,
    deadline: 87,
    report: 0,
    image: [
      'https://i.imgur.com/suxToHr.jpg',
      'https://i.imgur.com/x5wsAwF.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Silver’s Heart',
    description: 'O RPG de ação com uma história muito intrigante.',
    category: 'Jogo',
    total: 10420,
    goal: 8365.0,
    deadline: 78,
    report: 0,
    image: [
      'https://i.imgur.com/61Vyb1u.jpg',
      'https://i.imgur.com/YxydHz9.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Offensive Assault',
    description: 'FPS competitivo multijogador online.',
    category: 'Jogo',
    total: 5710,
    goal: 5670.0,
    deadline: 210,
    report: 0,
    image: [
      'https://i.imgur.com/UBZTYdE.jpg',
      'https://i.imgur.com/9cbV565.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Dixit Odyssey',
    description: 'Um jogo de tabuleiro com estratégias de equipes.',
    category: 'Jogo',
    total: 2351,
    goal: 4835.0,
    deadline: 181,
    report: 0,
    image: [
      'https://i.imgur.com/ZcU8Klu.jpg',
      'https://i.imgur.com/yp0D04J.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Colored Eye',
    description: 'Uma arte multi colorida das profundezas oculares.',
    category: 'Arte',
    total: 1729,
    goal: 1289.0,
    deadline: 150,
    report: 0,
    image: [
      'https://i.imgur.com/PEIkxNt.jpg',
      'https://i.imgur.com/HZ1A5Ni.jpg',
    ],
    userId: 1,
  },
  {
    name: 'City Art',
    description: 'Representação dos pontos de meio ambiente na cidade.',
    category: 'Arte',
    total: 1646,
    goal: 2394.0,
    deadline: 230,
    report: 0,
    image: [
      'https://i.imgur.com/wk1oWjN.jpg',
      'https://i.imgur.com/6zmM0wQ.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Therapy Art',
    description: 'Como a arte pode ser hipnótica e terapêutica.',
    category: 'Arte',
    total: 382,
    goal: 2140.0,
    deadline: 204,
    report: 0,
    image: [
      'https://i.imgur.com/gZ9woWr.jpg',
      'https://i.imgur.com/r2AAQFN.jpg',
    ],
    userId: 1,
  },
  {
    name: 'O escritor',
    description: 'Obra de origem brasileira recém lançada.',
    category: 'Arte',
    total: 883,
    goal: 1755.0,
    deadline: 187,
    report: 0,
    image: [
      'https://i.imgur.com/MpMGF1A.png',
      'https://i.imgur.com/kndd6fu.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Cyber Splashes',
    description: 'O futuro de um mundo abstrato.',
    category: 'Arte',
    total: 963,
    goal: 1336.0,
    deadline: 149,
    report: 0,
    image: [
      'https://i.imgur.com/V5CGTUA.jpg',
      'https://i.imgur.com/Qk5tbGC.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Coletânea de receitas',
    description:
      'Aproveite esta coletânea de 100 receitas para uma vida saudável.',
    category: 'Gastronomia',
    total: 932,
    goal: 670.0,
    deadline: 54,
    report: 0,
    image: [
      'https://i.imgur.com/4TsDKJo.jpg',
      'https://i.imgur.com/55Qx6nY.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Delícias do Japão',
    description: 'Aprenda a fazer os melhores pratos japoneses.',
    category: 'Gastronomia',
    total: 1174,
    goal: 1734.0,
    deadline: 139,
    report: 0,
    image: [
      'https://i.imgur.com/W7yVI68.jpg',
      'https://i.imgur.com/QBSOcfR.jpg',
      'https://i.imgur.com/Ehix9un.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Baby Monitor',
    description: 'Monitoramento de bebês, para uma maior segurança.',
    category: 'Tecnologia',
    total: 28503,
    goal: 35200.0,
    deadline: 344,
    report: 0,
    image: [
      'https://i.imgur.com/LlLITKC.jpg',
      'https://i.imgur.com/dg04KFT.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Straight Rock',
    description: 'Suporte a banda de rock ‘n’ roll que passará na sua cidade.',
    category: 'Música',
    total: 13809,
    goal: 17980.0,
    deadline: 312,
    report: 0,
    image: [
      'https://i.imgur.com/3TLKswP.jpg',
      'https://i.imgur.com/BNGPjDw.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Recanto brasileiro',
    description: 'Conheça as maravilhas da cozinha do Brasil nesta coletânea.',
    category: 'Gastronomia',
    total: 1715,
    goal: 2400.0,
    deadline: 202,
    report: 0,
    image: [
      'https://i.imgur.com/6949Kaz.jpg',
      'https://i.imgur.com/SME9T4z.jpg',
      'https://i.imgur.com/UBqznti.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Vida temperada',
    description:
      'Experimente as melhores dicas de criar seus próprios temperos.',
    category: 'Gastronomia',
    total: 3277,
    goal: 1890.0,
    deadline: 168,
    report: 0,
    image: [
      'https://i.imgur.com/RvOJpFK.jpg',
      'https://i.imgur.com/baklHnV.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Saúde do Lar',
    description: 'Participe deste curso que fará você levar uma vida saudável.',
    category: 'Gastronomia',
    total: 593,
    goal: 1239.0,
    deadline: 97,
    report: 0,
    image: [
      'https://i.imgur.com/GD0sSM8.jpg',
      'https://i.imgur.com/TTr0bPO.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Music Fest',
    description: 'Campanha para juntar fundos ao evento Music Fest.',
    category: 'Música',
    total: 21610,
    goal: 23900.0,
    deadline: 454,
    report: 0,
    image: [
      'https://i.imgur.com/eOmvpmT.jpg',
      'https://i.imgur.com/ColfyIy.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Music System',
    description: 'Uma grande diversidade de aparelhos musicais.',
    category: 'Música',
    total: 647,
    goal: 3460.0,
    deadline: 211,
    report: 0,
    image: [
      'https://i.imgur.com/icbUasm.jpg',
      'https://i.imgur.com/vA1anue.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Casa dos mics',
    description: 'Diversos exemplares de microfones que estarão a venda.',
    category: 'Música',
    total: 4193,
    goal: 2944.0,
    deadline: 197,
    report: 0,
    image: [
      'https://i.imgur.com/LVy5HKn.jpg',
      'https://i.imgur.com/vy3iqfy.png',
    ],
    userId: 1,
  },
  {
    name: 'Guitarras Faber',
    description: 'Entre na música ao receber as guitarras da marca Faber.',
    category: 'Música',
    total: 814,
    goal: 1670.0,
    deadline: 173,
    report: 0,
    image: [
      'https://i.imgur.com/IzJTZS4.jpg',
      'https://i.imgur.com/dwN7i46.png',
    ],
    userId: 1,
  },
  {
    name: 'Chip A-145',
    description:
      'Óculos de realidade virtual com sistema operacional e internet.',
    category: 'Tecnologia',
    total: 10287,
    goal: 24780.0,
    deadline: 258,
    report: 0,
    image: [
      'https://i.imgur.com/RKWUXYs.png',
      'https://i.imgur.com/jmPObuW.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Alarme Sensorwake',
    description: 'Novo despertador aromatizado eletrônico.',
    category: 'Tecnologia',
    total: 38410,
    goal: 31530.0,
    deadline: 214,
    report: 0,
    image: [
      'https://i.imgur.com/1mlEPxT.jpg',
      'https://i.imgur.com/C3EllB0.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Palm Home',
    description: 'Secretária eletrônica com multifunções.',
    category: 'Tecnologia',
    total: 27266,
    goal: 55799.0,
    deadline: 239,
    report: 0,
    image: [
      'https://i.imgur.com/Yb9UkRQ.jpg',
      'https://i.imgur.com/LyfObBa.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Opera Vysion',
    description:
      'Óculos de realidade virtual com sistema operacional e internet.',
    category: 'Tecnologia',
    total: 26790,
    goal: 27077.0,
    deadline: 207,
    report: 0,
    image: [
      'https://i.imgur.com/z0zaOAS.jpg',
      'https://i.imgur.com/9na4Ute.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Europe Fashion',
    description: 'Revista com as maiores novidades da moda europeia',
    category: 'Outros',
    total: 21600,
    goal: 15370.0,
    deadline: 389,
    report: 0,
    image: [
      'https://i.imgur.com/uTLyyxh.jpg',
      'https://i.imgur.com/NuF935d.png',
    ],
    userId: 1,
  },
  {
    name: 'Riquezas Naturais',
    description:
      'Fotografias de diferentes lugares do mundo em fácil acesso para você.',
    category: 'Outros',
    total: 7350,
    goal: 12057.0,
    deadline: 46,
    report: 0,
    image: [
      'https://i.imgur.com/QBSADvY.jpg',
      'https://i.imgur.com/BJ5phvi.jpg',
      'https://i.imgur.com/NB6qe4K.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Kit de maquiagens Miss Rôse',
    description:
      'Um kit com uma das marcas mais famosa do mercado, agora no Brasil.',
    category: 'Outros',
    total: 758,
    goal: 1730.0,
    deadline: 86,
    report: 0,
    image: [
      'https://i.imgur.com/rvCZWQm.jpg',
      'https://i.imgur.com/SJnzWKX.png',
      'https://i.imgur.com/1MzBS07.jpg',
    ],
    userId: 1,
  },
  {
    name: 'Curso de educação financeira',
    description:
      'Uma coletânea de e-books para aprender a gerenciar seu dinheiro de uma maneira fácil e eficiente',
    category: 'Outros',
    total: 168974,
    goal: 235000.0,
    deadline: 117,
    report: 0,
    image: [
      'https://i.imgur.com/akR3DOi.jpg',
      'https://i.imgur.com/CSGi6Xw.png',
      'https://i.imgur.com/VZPV0hE.jpg',
    ],
    userId: 1,
  },
];

async function main() {
  await prisma.project.createMany({
    data: projects,
    skipDuplicates: true,
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
