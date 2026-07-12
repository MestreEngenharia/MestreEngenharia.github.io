/* Gera as subpáginas de serviço em servicos/*.html
   Uso: node build.js */
const fs = require('fs');
const path = require('path');

const SITE = 'https://www.mestreengenharia.com';
const WA = 'https://wa.me/5547991550224?text=';
const msg = t => WA + encodeURIComponent(`Olá, vim pelo site da Mestre Engenharia e preciso de ${t}.`);

const ICONS = {
  check: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 15-4-4 1.4-1.4L10 14.2l6.6-6.6L18 9l-8 8z"/>',
  doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM8 13h8v2H8v-2zm0 4h8v2H8v-2z"/>',
  scale: '<path d="M12 3 2 8l10 5 8.4-4.2V15h2V8L12 3zM5 13.2V17c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.8l-7 3.5-7-3.5z"/>',
  home: '<path d="M4 21V9l8-6 8 6v12h-6v-7h-4v7H4z"/>',
  map: '<path d="M20.5 3 15 5 9 3 3.5 5c-.3.1-.5.4-.5.7v14.8c0 .4.4.6.7.5L9 19l6 2 5.5-2c.3-.1.5-.4.5-.7V3.5c0-.4-.4-.6-.5-.5zM15 19l-6-2.1V5l6 2.1V19z"/>',
  drone: '<path d="M22 16v-2l-8.5-5V3.5a1.5 1.5 0 0 0-3 0V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z"/>',
  chart: '<path d="M3 21h18v-2H3v2zM5 8h2v9H5V8zm5-5h2v14h-2V3zm5 8h2v6h-2v-6z"/>',
  eye: '<path d="M12 4.5C7 4.5 2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5c-1.7-4.4-6-7.5-11-7.5zm0 12.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>',
  leaf: '<path d="M17 8C8 10 5.9 16.2 3.8 21.3l1.9.7.9-2.3c.5.2 1 .3 1.4.3C19 20 22 3 22 3c-1 2-9 2.3-13 3.3S3 10.9 3 12.3c0 1.4 1.2 2.7 1.2 2.7C7 8 17 8 17 8z"/>',
  drop: '<path d="M12 2S5 9.3 5 14a7 7 0 0 0 14 0c0-4.7-7-12-7-12z"/>',
  shield: '<path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z"/>',
  gear: '<path d="M19.4 13a7.9 7.9 0 0 0 0-2l2.1-1.6-2-3.5-2.5 1a8 8 0 0 0-1.7-1l-.4-2.7h-4l-.4 2.7c-.6.3-1.2.6-1.7 1l-2.5-1-2 3.5L6.6 11a7.9 7.9 0 0 0 0 2l-2.1 1.6 2 3.5 2.5-1c.5.4 1.1.7 1.7 1l.4 2.7h4l.4-2.7c.6-.3 1.2-.6 1.7-1l2.5 1 2-3.5-2.3-1.6zM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"/>',
  key: '<path d="M12.7 10a5.5 5.5 0 1 0 0 4H16v3h3v-3h3v-4H12.7zM7 14.5A2.5 2.5 0 1 1 7 9.5a2.5 2.5 0 0 1 0 5z"/>',
  pin: '<path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>'
};
const I = k => `<svg viewBox="0 0 24 24">${ICONS[k] || ICONS.check}</svg>`;

const SERVICES = [
  {
    slug: 'avaliacao',
    nav: 'Avaliação de Imóveis',
    title: 'Avaliação de Imóveis Urbanos e Rurais',
    seoTitle: 'Avaliação de Imóveis (NBR 14653)',
    seoDesc: 'Laudo de avaliação de imóveis urbanos e rurais conforme a NBR 14653, aceito por bancos, juízos e órgãos públicos, em Itajaí, Florianópolis e todo o Sul.',
    tagline: 'O valor justo e fundamentado do seu imóvel, com laudo conforme a NBR 14653. Aceito por bancos, juízos e órgãos públicos.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80',
    wa: 'uma avaliação de imóvel',
    introTitle: 'Saber o valor real muda a sua negociação.',
    intro: 'Uma avaliação bem feita evita que você venda barato, compre caro ou aceite uma indenização injusta. Nossos laudos analisam mercado, localização, acessos, zoneamento e o potencial de uso do imóvel, sempre com os métodos científicos da NBR 14653.',
    includes: [
      { i: 'home', b: 'Imóveis urbanos', s: 'Casas, apartamentos, salas comerciais, terrenos e galpões, para compra, venda e garantia bancária.' },
      { i: 'leaf', b: 'Imóveis rurais', s: 'Fazendas, sítios e chácaras, com análise de solo, benfeitorias, produtividade e Laudo de VTN para o ITR.' },
      { i: 'scale', b: 'Avaliações judiciais', s: 'Laudos para inventários, partilhas, execuções, desapropriações e disputas societárias.' },
      { i: 'chart', b: 'Análise de mercado', s: 'Pesquisa de comparáveis, tratamento estatístico e diagnóstico do potencial do imóvel.' },
      { i: 'doc', b: 'Cálculo de indenizações', s: 'Quantificação técnica para desapropriações, servidões de passagem e danos ao imóvel.' },
      { i: 'shield', b: 'Garantia e seguros', s: 'Avaliações para financiamento, hipoteca, alienação fiduciária e seguradoras.' }
    ],
    scenarios: [
      { i: 'key', b: 'Vou comprar ou vender', s: 'Saiba o valor de mercado real antes de assinar e negocie com segurança.' },
      { i: 'scale', b: 'Estou em um processo judicial', s: 'Inventário, partilha, execução ou desapropriação pedem laudo técnico fundamentado.' },
      { i: 'home', b: 'Preciso dar o imóvel em garantia', s: 'Bancos e credores exigem avaliação conforme a NBR 14653.' },
      { i: 'leaf', b: 'Declaro ITR de imóvel rural', s: 'O Laudo de VTN evita autuações e imposto pago a mais.' }
    ],
    norms: ['NBR 14653-1 · Procedimentos gerais', 'NBR 14653-2 · Imóveis urbanos', 'NBR 14653-3 · Imóveis rurais', 'IBAPE'],
    faq: [
      { q: 'Quanto tempo leva uma avaliação de imóvel?', a: 'A maioria dos laudos urbanos fica pronta entre 7 e 15 dias depois da vistoria. Casos judiciais e rurais podem pedir mais tempo. Você recebe o prazo exato na proposta.' },
      { q: 'O laudo serve para banco e para a Justiça?', a: 'Sim. Os laudos seguem a NBR 14653 e são assinados por engenheiros registrados no CREA, com ART. É o que bancos, juízos e órgãos públicos exigem.' },
      { q: 'Vocês avaliam imóveis em outras cidades?', a: 'Sim. Atendemos Santa Catarina, Paraná e Rio Grande do Sul, a partir das nossas unidades de Itajaí e Florianópolis. O deslocamento entra na proposta.' }
    ],
    related: ['pericia', 'topografia', 'regularizacao']
  },
  {
    slug: 'pericia',
    nav: 'Perícia e Assistência Técnica',
    title: 'Perícia Judicial e Assistência Técnica',
    seoTitle: 'Perícia Judicial e Assistência Técnica',
    seoDesc: 'Perícia judicial de engenharia e assistência técnica para advogados: quesitos, pareceres e impugnação de laudos. +500 processos assessorados em SC, PR e RS.',
    tagline: 'Base técnica para decisões judiciais e apoio estratégico para advogados. Mais de 500 processos assessorados em SC, PR e RS.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80',
    wa: 'assistência técnica judicial ou perícia',
    introTitle: 'Engenharia aliada ao Direito.',
    intro: 'Atuamos como peritos nomeados pelo Juízo e como assistentes técnicos das partes. Produzimos prova técnica fundamentada nas normas ABNT e alinhada ao CPC, com uma equipe multidisciplinar que amplia as chances de êxito da ação.',
    includes: [
      { i: 'doc', b: 'Elaboração de quesitos', s: 'Perguntas técnicas objetivas e estratégicas, pensadas para a natureza de cada litígio.' },
      { i: 'eye', b: 'Acompanhamento pericial', s: 'Presença ativa na vistoria, registrando informações e garantindo que os pontos técnicos do caso apareçam no processo.' },
      { i: 'scale', b: 'Pareceres técnicos', s: 'Documentos embasados em normas e boas práticas para esclarecer fatos e sustentar argumentos.' },
      { i: 'shield', b: 'Impugnação de laudos', s: 'Análise crítica de laudos de terceiros, apontando inconsistências, omissões e interpretações equivocadas.' },
      { i: 'chart', b: 'Quantificação de danos', s: 'Cálculo de indenizações em desapropriações, vícios construtivos e disputas patrimoniais.' },
      { i: 'gear', b: 'Consultoria pré-processual', s: 'Análise técnica antes de ajuizar ou para acordos. Saiba a força do seu caso antes de litigar.' }
    ],
    scenarios: [
      { i: 'scale', b: 'Sou advogado(a) com perícia marcada', s: 'Assistente técnico para quesitos, acompanhamento e parecer, antes que o prazo corra.' },
      { i: 'doc', b: 'O laudo do processo me prejudicou', s: 'Uma impugnação técnica bem fundamentada pode reverter conclusões equivocadas.' },
      { i: 'home', b: 'Disputa sobre imóvel, obra ou vício construtivo', s: 'Prova técnica de engenharia para sustentar a tese.' },
      { i: 'gear', b: 'Preciso de um perito parceiro', s: 'Juízos de mais de 80 comarcas já contam com o nosso corpo técnico.' }
    ],
    norms: ['NBR 13752 · Perícias', 'NBR 14653 · Avaliações', 'CPC · arts. 464 a 480', 'IBAPE'],
    faq: [
      { q: 'Qual o prazo para contratar um assistente técnico?', a: 'O ideal é logo depois da nomeação do perito. O CPC dá 15 dias para indicar assistente e apresentar quesitos (art. 465). Quanto antes, melhor a estratégia.' },
      { q: 'Vocês atuam em qual tipo de processo?', a: 'Ações que envolvem imóveis, obras, vícios construtivos, avaliações, desapropriações, servidões, usucapião, inventários e questões rurais e ambientais.' },
      { q: 'Atendem escritórios de advocacia de forma recorrente?', a: 'Sim. Somos parceiros técnicos de escritórios em SC, PR e RS, com condições especiais para demandas recorrentes.' }
    ],
    related: ['avaliacao', 'vistorias', 'ambiental']
  },
  {
    slug: 'topografia',
    nav: 'Topografia e Drones',
    title: 'Topografia, Georreferenciamento e Drones',
    seoTitle: 'Topografia, Georreferenciamento e Drone',
    seoDesc: 'Georreferenciamento INCRA/SIGEF, aerofotogrametria com drone, locação de obra e cálculo de volumes em SC. Precisão para projetos, regularização e obras.',
    tagline: 'Precisão cartográfica para regularizar, projetar e construir: do georreferenciamento à aerofotogrametria com drone, da locação de obra ao monitoramento de estruturas.',
    img: 'https://images.unsplash.com/photo-1610081340031-ea312b8a9d9a?auto=format&fit=crop&w=2000&q=80',
    wa: 'um levantamento topográfico',
    introTitle: 'Limites precisos, decisões seguras.',
    intro: 'Unimos equipamentos de alta precisão (estação total e GNSS) ao mapeamento aéreo com drones. O resultado são produtos cartográficos confiáveis para projetar, regularizar, locar obras, monitorar estruturas e sustentar processos judiciais, no campo e na cidade.',
    includes: [
      { i: 'map', b: 'Georreferenciamento', s: 'Rural (INCRA/SIGEF) e urbano, com definição exata de limites, confrontações e coordenadas oficiais.' },
      { i: 'drone', b: 'Aerofotogrametria com drone', s: 'Ortofotos, ortomosaicos, modelos digitais de terreno (MDT/MDS) e modelos 3D de grandes áreas em pouco tempo.' },
      { i: 'pin', b: 'Levantamento planialtimétrico', s: 'Base precisa de posição e cotas para projetos de arquitetura, engenharia, drenagem e loteamentos.' },
      { i: 'gear', b: 'Locação de obra', s: 'Marcação em campo de eixos, fundações e alinhamentos, transpondo o projeto para o terreno com exatidão.' },
      { i: 'chart', b: 'Monitoramento de recalques', s: 'Acompanhamento de deslocamentos e recalques em estruturas, taludes e edificações vizinhas.' },
      { i: 'scale', b: 'Volumetria e cálculo de volumes', s: 'Jazidas, aterros, silos e estoques quantificados com precisão para obras e mineração.' },
      { i: 'doc', b: 'Usucapião, retificação e desmembramento', s: 'Plantas e memoriais descritivos georreferenciados para regularização e ações judiciais.' }
    ],
    scenarios: [
      { i: 'map', b: 'Meu imóvel rural precisa de georreferenciamento', s: 'Exigência do INCRA para transferências, desmembramentos e financiamentos.' },
      { i: 'scale', b: 'Divisa em disputa ou usucapião', s: 'Levantamento técnico que vira prova nos autos.' },
      { i: 'home', b: 'Vou projetar ou lotear', s: 'Uma base planialtimétrica precisa evita erros caros de projeto.' },
      { i: 'chart', b: 'Preciso medir volumes de terra', s: 'Drones medem jazidas e aterros com rapidez e precisão.' }
    ],
    norms: ['Norma INCRA · SIGEF', 'NBR 13133 · Levantamentos', 'ANAC · Operação de drones'],
    faq: [
      { q: 'O que é o georreferenciamento e quando é obrigatório?', a: 'É o levantamento que amarra os limites do imóvel a coordenadas oficiais. Para imóveis rurais, é obrigatório em transferências, desmembramentos, remembramentos e partilhas.' },
      { q: 'Drone substitui a topografia convencional?', a: 'Eles se complementam. O drone acelera o mapeamento de grandes áreas e gera produtos visuais ricos. Pontos de controle em solo garantem a precisão que as normas e os órgãos exigem.' },
      { q: 'Vocês cuidam do registro no cartório?', a: 'Sim. Nossa equipe conduz as diligências junto a INCRA, prefeituras e cartórios até a averbação final.' }
    ],
    related: ['regularizacao', 'avaliacao', 'ambiental']
  },
  {
    slug: 'regularizacao',
    nav: 'Regularização de Imóveis',
    title: 'Regularização de Imóveis e Regularização Fundiária',
    seoTitle: 'Regularização de Imóveis e Habite-se',
    seoDesc: 'Regularização de imóveis: averbação, Habite-se, retificação de área, REURB, INCRA e CAR. Do projeto ao registro em cartório, em Itajaí, Florianópolis e região.',
    tagline: 'Transformamos a sua propriedade em um ativo legalmente reconhecido, do alvará ao registro em cartório.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80',
    wa: 'regularização de imóvel',
    introTitle: 'Imóvel irregular vale menos e trava negócios.',
    intro: 'Construção sem averbação, área diferente da matrícula, pendência em órgão público: tudo isso impede financiamentos, vendas e inventários. A gente assume o processo técnico e administrativo completo para regularizar o seu imóvel.',
    includes: [
      { i: 'doc', b: 'Alvarás e Habite-se', s: 'Projetos de regularização e aprovação de edificações junto à prefeitura.' },
      { i: 'home', b: 'Averbação de construção', s: 'Atualização da matrícula com a área real construída, destravando venda e financiamento.' },
      { i: 'map', b: 'Retificação e desmembramento', s: 'Correção de área e divisas com mapa e memorial georreferenciado.' },
      { i: 'leaf', b: 'INCRA, CAR e ITR', s: 'Cadastro e revisão de imóveis rurais: CCIR, CAR e revisão de IPTU e ITR.' },
      { i: 'key', b: 'Regularização fundiária (REURB)', s: 'Núcleos urbanos informais e titulação de ocupações consolidadas.' },
      { i: 'gear', b: 'Trâmites completos', s: 'Diligências cartorárias e administrativas até o registro, sem você precisar correr atrás.' }
    ],
    scenarios: [
      { i: 'key', b: 'Não consigo vender ou financiar', s: 'Averbação e Habite-se destravam a operação no banco e no cartório.' },
      { i: 'doc', b: 'A área da matrícula não bate', s: 'A retificação de área georreferenciada corrige a divergência.' },
      { i: 'home', b: 'Construí sem aprovação', s: 'O projeto de regularização junto à prefeitura legaliza a edificação.' },
      { i: 'leaf', b: 'Herdei ou comprei imóvel rural irregular', s: 'INCRA, CAR e registro atualizados protegem o seu patrimônio.' }
    ],
    norms: ['Lei 13.465/2017 · REURB', 'Lei 6.015/73 · Registros Públicos', 'Norma INCRA · SIGEF'],
    faq: [
      { q: 'Quanto tempo leva uma regularização?', a: 'Varia com a prefeitura e o cartório. Averbações simples costumam levar de 30 a 90 dias. Retificações e REURB, alguns meses. Você recebe um cronograma realista na proposta.' },
      { q: 'Imóvel irregular pode ser vendido?', a: 'Pode, mas com desconto grande e sem financiamento, porque o comprador não consegue crédito. Regularizar antes de vender costuma se pagar várias vezes.' },
      { q: 'Vocês cuidam de tudo ou eu preciso ir aos órgãos?', a: 'A gente conduz todo o processo técnico e administrativo: prefeitura, INCRA e cartório. Você só acompanha o andamento.' }
    ],
    related: ['topografia', 'avaliacao', 'incorporacao']
  },
  {
    slug: 'vistorias',
    nav: 'Vistorias e Inspeções',
    title: 'Vistorias Cautelares, Laudos e Inspeções Técnicas',
    seoTitle: 'Inspeção Predial e Vistoria Cautelar',
    seoDesc: 'Inspeção predial (NBR 16747), vistoria cautelar (NBR 12722), recebimento de obra, patologias, fachada e laudo de desempenho (NBR 15575) em SC.',
    tagline: 'Do recebimento de chaves à inspeção predial: o laudo técnico que evita litígios e protege quem constrói, compra e administra imóveis.',
    img: 'https://images.unsplash.com/photo-1694521787799-ad4ad241cb39?auto=format&fit=crop&w=2000&q=80',
    wa: 'uma vistoria ou inspeção técnica',
    introTitle: 'Registrar antes é mais barato que litigar depois.',
    intro: 'Engenharia diagnóstica para cada momento do imóvel: antes da obra, na entrega, na compra e ao longo da vida do edifício. Cada vistoria vira um laudo técnico fundamentado, a sua proteção documental contra prejuízos e disputas.',
    includes: [
      { i: 'shield', b: 'Vistoria cautelar de vizinhança', s: 'Registro fotográfico e relatório do estado dos imóveis confrontantes antes da obra (NBR 12722).' },
      { i: 'eye', b: 'Inspeção predial', s: 'Diagnóstico de conservação do edifício, classificação de anomalias e plano de manutenção (NBR 16747).' },
      { i: 'home', b: 'Inspeção residencial (pré-compra)', s: 'Estrutura, instalações, umidade e vícios ocultos avaliados antes de você fechar negócio.' },
      { i: 'key', b: 'Recebimento e entrega de obra', s: 'Vistoria de unidades novas, documentando não conformidades para reparo pela construtora.' },
      { i: 'gear', b: 'Patologias e vícios construtivos', s: 'Fissuras, infiltrações e recalques: causa, gravidade, responsabilidade e solução.' },
      { i: 'doc', b: 'Inspeção de estruturas', s: 'Vigas, pilares, lajes e fundações avaliados quanto à integridade e segurança estrutural.' },
      { i: 'scale', b: 'Inspeção de fachada', s: 'Segurança, desgaste e conformidade de revestimentos e elementos da fachada.' },
      { i: 'chart', b: 'Laudo de desempenho (NBR 15575)', s: 'Verificação de desempenho e conformidade da edificação com a norma de desempenho.' },
      { i: 'drop', b: 'Laudos para seguradoras e sinistros', s: 'Documentação técnica de danos e sinistros para processos de indenização.' }
    ],
    scenarios: [
      { i: 'shield', b: 'Vou iniciar uma obra', s: 'A cautelar de vizinhança protege a construtora de cobranças por danos que já existiam.' },
      { i: 'key', b: 'Vou receber as chaves do imóvel novo', s: 'O laudo de recebimento documenta vícios enquanto a construtora ainda responde por eles.' },
      { i: 'home', b: 'Vou comprar um imóvel usado', s: 'A inspeção revela problemas ocultos antes de você assinar.' },
      { i: 'eye', b: 'Sou síndico(a) e o prédio pede manutenção', s: 'A inspeção predial prioriza os reparos e embasa decisões em assembleia.' }
    ],
    norms: ['NBR 16747 · Inspeção predial', 'NBR 12722 · Vizinhança', 'NBR 15575 · Desempenho', 'NBR 13752 · Perícias', 'IBAPE'],
    faq: [
      { q: 'A vistoria de vizinhança é obrigatória?', a: 'Muitos municípios exigem para liberar o alvará. E mesmo onde não é obrigatória, ela é a principal defesa da construtora contra alegações de danos que já existiam. O custo é pequeno perto do risco.' },
      { q: 'O que a inspeção residencial verifica?', a: 'Estrutura, cobertura, instalações elétricas e hidráulicas, esquadrias, revestimentos, umidade e indícios de vícios ocultos. Tudo com relatório fotográfico e classificação de gravidade.' },
      { q: 'Achei vícios depois de receber as chaves. E agora?', a: 'A construtora responde por vícios aparentes e ocultos dentro dos prazos legais. Um laudo técnico fundamenta a reclamação e, se for preciso, o processo.' }
    ],
    related: ['pericia', 'incorporacao', 'avaliacao']
  },
  {
    slug: 'incorporacao',
    nav: 'Incorporação e Viabilidade',
    title: 'Incorporação Imobiliária e Estudo de Viabilidade',
    seoTitle: 'Estudo de Viabilidade e Incorporação',
    seoDesc: 'Estudo de viabilidade (EVTE), Quadros da NBR 12.721, tabela de vendas e aferição de INSS de obra para construtoras e incorporadoras em Santa Catarina.',
    tagline: 'Da análise do terreno ao registro da incorporação: os números e os documentos técnicos que sustentam o seu empreendimento.',
    img: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=2000&q=80',
    wa: 'estudo de viabilidade ou apoio à incorporação',
    introTitle: 'Decida com números, não com intuição.',
    intro: 'O estudo de viabilidade técnica e econômica analisa legislação, zoneamento, potencial construtivo, custos e retorno antes de você comprar o terreno. Depois, cuidamos dos Quadros da NBR 12.721 e de todo o suporte técnico até a entrega.',
    includes: [
      { i: 'chart', b: 'EVTE completo', s: 'Análise urbanística, pesquisa de mercado, modelagem econômica, fluxo de caixa e parecer final.' },
      { i: 'doc', b: 'Quadros NBR 12.721', s: 'Quadros de áreas e custos para o memorial de incorporação e o registro em cartório.' },
      { i: 'home', b: 'Análise de terrenos', s: 'Due diligence técnica e documental: matrícula, restrições, topografia e aptidão construtiva.' },
      { i: 'scale', b: 'Tabela de vendas', s: 'Precificação das unidades conforme o mercado e as características do empreendimento.' },
      { i: 'gear', b: 'Aferição e INSS de obra', s: 'Regularização da obra na Receita (CNO) e aferição para redução legal do INSS.' },
      { i: 'shield', b: 'Aprovações em órgãos', s: 'Protocolos junto a prefeituras, concessionárias e órgãos ambientais.' }
    ],
    scenarios: [
      { i: 'chart', b: 'Encontrei um terreno com potencial', s: 'O estudo de viabilidade confirma ou descarta o negócio antes do sinal.' },
      { i: 'doc', b: 'Vou registrar a incorporação', s: 'Os Quadros NBR 12.721 são exigência do cartório e precisam estar impecáveis.' },
      { i: 'gear', b: 'A obra terminou e o INSS pesou', s: 'A aferição técnica pode reduzir legalmente a base de cálculo.' },
      { i: 'home', b: 'Quero lançar com preço certo', s: 'Uma tabela de vendas técnica evita deixar dinheiro na mesa ou encalhar unidades.' }
    ],
    norms: ['NBR 12721 · Incorporação', 'Lei 4.591/64 · Incorporações', 'CUB/SC · Sinduscon', 'Receita Federal · CNO'],
    faq: [
      { q: 'Quando fazer o estudo de viabilidade?', a: 'Antes de comprar o terreno. É a forma mais barata de evitar um investimento ruim. Você decide com projeções de custo, receita e retorno fundamentadas em CUB/SC e dados reais de mercado.' },
      { q: 'O que são os Quadros da NBR 12.721?', a: 'São os quadros de cálculo de áreas e custos (I a VIII) que compõem o memorial de incorporação registrado em cartório. Sem eles, não dá para vender unidades na planta.' },
      { q: 'Vocês acompanham o empreendimento inteiro?', a: 'Sim. Da due diligence do terreno à vistoria cautelar de vizinhança, entrega das unidades e pós-obra. Um único parceiro técnico em todas as fases.' }
    ],
    related: ['vistorias', 'topografia', 'ambiental']
  },
  {
    slug: 'ambiental',
    nav: 'Laudos Ambientais',
    novo: true,
    title: 'Laudos e Estudos Ambientais',
    seoTitle: 'Laudo Ambiental e Estudo Hidrológico',
    seoDesc: 'Laudos ambientais, viabilidade ambiental, hidrologia, CIP e apoio ao licenciamento em SC. Diagnóstico de APPs, drenagem e conformidade com órgãos ambientais.',
    tagline: 'Nossa nova área de atuação: viabilidade ambiental, hidrologia e conformidade com os órgãos licenciadores. Segurança para o seu empreendimento desde a origem.',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80',
    wa: 'laudos ou estudos ambientais',
    introTitle: 'O ambiental deixou de ser detalhe. Virou condição de aprovação.',
    intro: 'Restrições ambientais mal avaliadas embargam obras, desvalorizam terrenos e geram passivos milionários. Integramos a análise ambiental aos estudos de viabilidade, topografia e regularização que você já contrata com a gente. Um diagnóstico completo, de uma só equipe.',
    includes: [
      { i: 'leaf', b: 'Viabilidade ambiental', s: 'Diagnóstico de APPs, vegetação, recursos hídricos e condicionantes legais antes de comprar ou projetar.' },
      { i: 'drop', b: 'Hidrologia e CIP', s: 'Estudos hidrológicos, hidráulicos e de drenagem para aprovação de projetos e proteção contra cheias.' },
      { i: 'doc', b: 'Laudos ambientais', s: 'Laudos e pareceres para processos judiciais, licenciamento, órgãos públicos e transações.' },
      { i: 'shield', b: 'Apoio ao licenciamento', s: 'Suporte técnico junto aos órgãos ambientais: condicionantes, supressão de vegetação e regularização.' },
      { i: 'map', b: 'CAR e regularização ambiental', s: 'Cadastro Ambiental Rural, reserva legal e adequação de imóveis rurais.' },
      { i: 'scale', b: 'Perícias ambientais', s: 'Prova técnica em ações que envolvem dano ambiental, APPs e conflitos de uso do solo.' }
    ],
    scenarios: [
      { i: 'chart', b: 'Vou comprar um terreno para empreender', s: 'O diagnóstico ambiental prévio revela restrições que mudam ou até inviabilizam o projeto.' },
      { i: 'drop', b: 'O município exige estudo hidrológico', s: 'Elaboramos o estudo de drenagem e o CIP exigidos para aprovar o projeto.' },
      { i: 'scale', b: 'Processo judicial com questão ambiental', s: 'Laudos e assistência técnica especializada em dano ambiental e APPs.' },
      { i: 'leaf', b: 'Imóvel rural com pendência ambiental', s: 'CAR, reserva legal e regularização junto aos órgãos competentes.' }
    ],
    norms: ['Código Florestal · Lei 12.651/2012', 'CONAMA', 'IMA/SC · Órgãos estaduais', 'Planos Diretores municipais'],
    faq: [
      { q: 'Por que fazer o estudo ambiental antes de comprar o terreno?', a: 'Porque APPs, nascentes, vegetação protegida e áreas alagáveis reduzem a área aproveitável, às vezes a ponto de inviabilizar o projeto. Descobrir isso antes do negócio protege o seu capital.' },
      { q: 'O que é o estudo hidrológico (CIP)?', a: 'É a análise do comportamento das águas no terreno e no entorno: chuvas, drenagem e cheias. Municípios exigem esse estudo para aprovar empreendimentos, garantindo que o projeto não cause nem sofra alagamentos.' },
      { q: 'Esse serviço se integra aos demais da Mestre?', a: 'Sim, e essa é a vantagem: viabilidade técnica, econômica e ambiental, topografia e regularização em um único diagnóstico, sem retrabalho entre empresas diferentes.' }
    ],
    related: ['incorporacao', 'topografia', 'pericia']
  }
];

function schema(s) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: s.title,
        description: s.seoDesc,
        provider: {
          '@type': 'Organization',
          name: 'Mestre Engenharia Avaliações e Perícias',
          url: SITE
        },
        areaServed: ['Santa Catarina', 'Paraná', 'Rio Grande do Sul'],
        url: `${SITE}/servicos/${s.slug}.html`
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: SITE + '/' },
          { '@type': 'ListItem', position: 2, name: 'Serviços', item: SITE + '/#servicos' },
          { '@type': 'ListItem', position: 3, name: s.nav, item: `${SITE}/servicos/${s.slug}.html` }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: s.faq.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      }
    ]
  }, null, 2);
}

const WA_ICON = '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.5 14.2c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.1.5.2.6.4.1.1.1.6-.3 1.1z"/></svg>';
// mensagem pré-preenchida por serviço clicado
const msgItem = t => WA + encodeURIComponent(`Olá, vim pelo site da Mestre Engenharia e preciso de "${t}".`);

function page(s) {
  const waHref = msg(s.wa);
  const includes = s.includes.map((it, k) =>
    `<a class="inc reveal${k % 3 ? ' d' + (k % 3) : ''}" href="${msgItem(it.b)}" target="_blank" rel="noopener" title="Solicitar ${it.b} pelo WhatsApp">${I(it.i)}<b>${it.b}</b><span>${it.s}</span><span class="inc-go">${WA_ICON}Solicitar no WhatsApp</span></a>`
  ).join('\n      ');
  const scenarios = s.scenarios.map((it, k) =>
    `<div class="scn reveal${k % 2 ? ' d1' : ''}">${I(it.i)}<div><b>${it.b}</b><span>${it.s}</span></div></div>`
  ).join('\n      ');
  const norms = s.norms.map(n => `<span>${n}</span>`).join('');
  const faq = s.faq.map(f =>
    `<details class="reveal"><summary>${f.q}</summary><div class="faq-body">${f.a}</div></details>`
  ).join('\n      ');
  const related = s.related.map(slug => {
    const r = SERVICES.find(x => x.slug === slug);
    return `<a class="rel reveal" href="${r.slug}.html"><b>${r.nav}${r.novo ? ' <span class="tag-novo">Novo</span>' : ''}</b><svg viewBox="0 0 24 24"><path d="M8.6 16.6 13.2 12 8.6 7.4 10 6l6 6-6 6z"/></svg></a>`;
  }).join('\n      ');

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#06253D">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Mestre Engenharia">
<meta name="format-detection" content="telephone=no">
<title>${s.seoTitle} | Mestre Engenharia</title>
<meta name="description" content="${s.seoDesc}">
<link rel="canonical" href="${SITE}/servicos/${s.slug}.html">
<link rel="icon" type="image/x-icon" href="../assets/img/favicon.ico">
<meta property="og:title" content="${s.seoTitle} | Mestre Engenharia">
<meta property="og:description" content="${s.seoDesc}">
<meta property="og:type" content="website">
<meta property="og:url" content="${SITE}/servicos/${s.slug}.html">
<meta property="og:image" content="${SITE}/assets/img/logo-central-branco-dourado.png">
<meta property="og:locale" content="pt_BR">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/style.css">
<script type="application/ld+json">
${schema(s)}
</script>
</head>
<body>

<div class="topbar">
  <div class="wrap">
    <div class="tb-left">
      <a href="tel:+554730839548"><svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>(47) 3083-9548</a>
      <a href="mailto:contato@mestreengenharia.com"><svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>contato@mestreengenharia.com</a>
    </div>
    <div class="tb-right">
      <span><svg viewBox="0 0 24 24"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>Itajaí e Florianópolis · atendimento em SC, PR e RS</span>
    </div>
  </div>
</div>

<header class="nav">
  <div class="wrap">
    <a class="brand" href="../index.html" aria-label="Mestre Engenharia, página inicial">
      <img src="../assets/img/logo-lateral-branco.png" alt="Mestre Engenharia Avaliações e Perícias" width="240" height="120">
    </a>
    <nav class="menu" id="menu">
      <a href="../index.html#servicos">Todos os serviços</a>
      <a href="../index.html#sobre">Sobre nós</a>
      <a href="../index.html#faq">Dúvidas</a>
      <a href="../index.html#contato">Contato</a>
    </nav>
    <div class="nav-cta">
      <a class="btn btn-gold" href="${waHref}" target="_blank" rel="noopener">WhatsApp</a>
      <button class="hamb" id="hamb" aria-label="Abrir menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<section class="svc-hero">
  <div class="svc-bg" style="background-image:url('${s.img}')"></div>
  <div class="wrap">
    <div class="crumb"><a href="../index.html">Início</a><svg viewBox="0 0 24 24"><path d="M8.6 16.6 13.2 12 8.6 7.4 10 6l6 6-6 6z"/></svg><a href="../index.html#servicos">Serviços</a><svg viewBox="0 0 24 24"><path d="M8.6 16.6 13.2 12 8.6 7.4 10 6l6 6-6 6z"/></svg><span>${s.nav}</span></div>
    <h1>${s.title}${s.novo ? ' <span class="tag-novo">Novo</span>' : ''}</h1>
    <p>${s.tagline}</p>
    <div class="hero-ctas">
      <a class="btn btn-gold" href="${waHref}" target="_blank" rel="noopener">Solicitar orçamento <svg viewBox="0 0 24 24"><path d="M8.6 16.6 13.2 12 8.6 7.4 10 6l6 6-6 6z"/></svg></a>
      <a class="btn btn-ghost" href="#incluso">O que está incluído</a>
    </div>
  </div>
</section>

<section class="section light" id="incluso">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="kicker">${s.nav}</span>
      <h2>${s.introTitle}</h2>
      <p>${s.intro}</p>
    </div>
    <div class="inc-grid">
      ${includes}
    </div>
  </div>
</section>

<section class="section mistbg">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="kicker">Quando você precisa</span>
      <h2>Situações em que este serviço resolve.</h2>
    </div>
    <div class="scn-grid">
      ${scenarios}
    </div>
    <div style="margin-top:44px" class="reveal">
      <span class="kicker">Fundamentação técnica</span>
      <div class="norms">${norms}</div>
    </div>
  </div>
</section>

<section class="section light faq">
  <div class="wrap" style="max-width:900px">
    <div class="section-head center reveal">
      <span class="kicker center">Dúvidas frequentes</span>
      <h2>Sobre ${s.nav.toLowerCase()}.</h2>
    </div>
    ${faq}
  </div>
</section>

<section class="section light" style="padding-top:0">
  <div class="wrap">
    <div class="svc-cta reveal">
      <div>
        <h3>Conte seu caso. A primeira conversa é por nossa conta.</h3>
        <p>Descreva a sua necessidade no WhatsApp e receba a orientação técnica inicial e uma proposta objetiva, sem compromisso.</p>
      </div>
      <a class="btn btn-gold" href="${waHref}" target="_blank" rel="noopener">Falar com um especialista <svg viewBox="0 0 24 24"><path d="M8.6 16.6 13.2 12 8.6 7.4 10 6l6 6-6 6z"/></svg></a>
    </div>
    <div style="margin-top:60px" class="reveal">
      <span class="kicker">Você também pode precisar</span>
      <div class="rel-grid" style="margin-top:20px">
      ${related}
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="f-grid">
      <div>
        <a class="brand" href="../index.html">
          <img src="../assets/img/logo-lateral-branco.png" alt="Mestre Engenharia Avaliações e Perícias" width="240" height="120">
        </a>
        <p style="margin-top:18px;max-width:320px">Engenharia com propósito, precisão e resultado. Avaliações, perícias e laudos técnicos em engenharia civil, agronomia e meio ambiente.</p>
      </div>
      <div>
        <h4>Serviços</h4>
        <ul>
          ${SERVICES.map(x => `<li><a href="${x.slug}.html">${x.nav}${x.novo ? ' <span class="tag-novo">Novo</span>' : ''}</a></li>`).join('\n          ')}
        </ul>
      </div>
      <div>
        <h4>Institucional</h4>
        <ul>
          <li><a href="../index.html#sobre">Sobre nós</a></li>
          <li><a href="../index.html#processo">Como trabalhamos</a></li>
          <li><a href="../index.html#faq">Dúvidas frequentes</a></li>
          <li><a href="../index.html#contato">Contato</a></li>
        </ul>
      </div>
      <div>
        <h4>Contato</h4>
        <ul>
          <li><a href="https://wa.me/5547991550224" target="_blank" rel="noopener">(47) 99155-0224 · WhatsApp</a></li>
          <li><a href="tel:+554730839548">(47) 3083-9548</a></li>
          <li><a href="mailto:contato@mestreengenharia.com">contato@mestreengenharia.com</a></li>
          <li>Itajaí · Rua João Bauer, 498, Sala 810</li>
          <li>Florianópolis · com hora marcada</li>
        </ul>
      </div>
    </div>
    <div class="f-bottom">
      <span>© 2026 Mestre Engenharia Avaliações e Perícias Ltda · Itajaí e Florianópolis/SC · Todos os direitos reservados.</span>
      <div class="f-social">
        <a href="https://www.instagram.com/mestre_engenharia" target="_blank" rel="noopener" aria-label="Instagram">
          <svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 4 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 3.6a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.5a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z"/></svg>
        </a>
        <a href="https://www.facebook.com/mestreengenhariaepericias/" target="_blank" rel="noopener" aria-label="Facebook">
          <svg viewBox="0 0 24 24"><path d="M13.5 22v-9h3l.5-3.5h-3.5V7.2c0-1 .3-1.7 1.8-1.7H17V2.2c-.3 0-1.4-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5v3H7V13h3v9h3.5z"/></svg>
        </a>
      </div>
    </div>
  </div>
</footer>

<a class="wa-float" href="${waHref}" target="_blank" rel="noopener" aria-label="Conversar no WhatsApp">
  <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.5 14.2c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.1.5.2.6.4.1.1.1.6-.3 1.1z"/></svg>
</a>

<div class="m-cta">
  <a class="m-orc" href="${waHref}" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.5 14.2c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.1.5.2.6.4.1.1.1.6-.3 1.1z"/></svg>
    Solicitar orçamento
  </a>
  <a class="m-tel" href="tel:+554730839548" aria-label="Ligar para a Mestre Engenharia">
    <svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>
  </a>
</div>

<script src="../assets/site.js"></script>
</body>
</html>
`;
}

const outDir = path.join(__dirname, 'servicos');
fs.mkdirSync(outDir, { recursive: true });
for (const s of SERVICES) {
  fs.writeFileSync(path.join(outDir, s.slug + '.html'), page(s), 'utf8');
  console.log('gerado: servicos/' + s.slug + '.html');
}

/* sitemap.xml */
const pages = ['', ...SERVICES.map(s => `servicos/${s.slug}.html`)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url><loc>${SITE}/${p}</loc><changefreq>monthly</changefreq><priority>${p === '' ? '1.0' : '0.8'}</priority></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap, 'utf8');
fs.writeFileSync(path.join(__dirname, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`, 'utf8');
console.log('gerado: sitemap.xml + robots.txt');
console.log('OK: ' + SERVICES.length + ' páginas.');
