// Guias (páginas satélite de conteúdo) em /guias/<slug>/ com o mesmo cabeçalho/rodapé do site.
// Tom sóbrio, sem travessão. Gera também: bloco "Leia também" nas páginas de serviço relacionadas,
// entradas no sitemap.xml e seção "Guias" no llms.txt.
const { shell } = require('./build-pages.js');

const GUIAS = [
  {
    slug: 'vistoria-de-imovel-novo',
    title: 'Vistoria de imóvel novo: o que conferir antes de receber as chaves',
    seoTitle: 'Vistoria de Imóvel Novo e Entrega de Chaves',
    desc: 'Checklist de vistoria de apartamento ou casa nova, prazos legais para reclamar de vícios e por que o laudo de engenheiro com ART protege o comprador em Itajaí e Balneário Camboriú.',
    crumb: 'Vistoria de imóvel novo',
    lead: 'O termo de recebimento das chaves é o momento em que o comprador mais tem força para exigir reparos. Este guia mostra o que conferir, quais prazos a lei garante e como um laudo técnico transforma a reclamação em prova.',
    updated: '6 de setembro de 2026',
    services: ['vistorias', 'pericia'],
    wa: 'uma vistoria de imóvel novo',
    keywords: 'vistoria de imóvel novo, vistoria de apartamento, entrega de chaves, vistoria de recebimento, vícios construtivos, Itajaí, Balneário Camboriú',
    body: `
<h2>Por que fazer a vistoria antes de assinar o termo de recebimento</h2>
<p>Ao assinar o termo, o comprador declara que recebeu o imóvel no estado em que ele se encontra. Tudo o que não foi registrado ali passa a depender de reclamação posterior, com ônus de provar que o defeito já existia. Uma vistoria técnica feita antes da assinatura inverte essa lógica: o laudo lista as não conformidades, a construtora as corrige dentro de um prazo e só então as chaves são recebidas.</p>
<p>Na prática, um apartamento novo em Itajaí ou Balneário Camboriú costuma apresentar de 15 a 40 itens de reparo, a maioria de acabamento. Alguns, porém, envolvem impermeabilização, instalações e esquadrias, que custam caro para corrigir depois da mudança.</p>

<h2>Checklist: o que a vistoria de engenharia confere</h2>
<ul>
  <li><strong>Revestimentos e pisos:</strong> peças ocas, trincadas ou desniveladas, rejunte falho, caimento dos ralos e do box.</li>
  <li><strong>Impermeabilização:</strong> teste de estanqueidade em box, sacadas e áreas molhadas, sinais de umidade em paredes e tetos.</li>
  <li><strong>Instalações hidráulicas:</strong> pressão e vazão em todos os pontos, vazamentos em conexões, funcionamento de registros, sifões e caixas de descarga.</li>
  <li><strong>Instalações elétricas:</strong> tomadas e interruptores energizados e identificados, quadro de distribuição com disjuntores nomeados, DR funcionando, pontos de dados e TV.</li>
  <li><strong>Esquadrias:</strong> portas e janelas com fechamento, vedação e nivelamento corretos, vidros sem riscos, fechaduras e ferragens completas.</li>
  <li><strong>Pintura, forros e paredes:</strong> prumo, planicidade, fissuras, manchas e acabamento de cantos e rodapés.</li>
  <li><strong>Ventilação e exaustão:</strong> pontos de exaustão de banheiros e cozinha, dutos e grelhas.</li>
  <li><strong>Áreas comuns e documentação:</strong> conformidade com o memorial descritivo, manual do proprietário (NBR 14037), projetos como construído e garantias dos equipamentos.</li>
</ul>

<h2>Prazos que a lei garante ao comprador</h2>
<p>O Código de Defesa do Consumidor (art. 26) dá 90 dias para reclamar de vícios aparentes em bens duráveis, contados da entrega. Para vícios ocultos, o prazo só começa quando o problema fica evidente. O Código Civil (art. 618) responsabiliza o construtor por 5 anos pela solidez e segurança da obra. A NBR 15575 (norma de desempenho) organiza os prazos de garantia por sistema construtivo, e a NBR 17170 detalha as garantias que a construtora deve declarar no manual.</p>
<p>Esses prazos protegem quem consegue provar o defeito e a data em que ele foi constatado. É por isso que o laudo com fotos datadas, medições e ART é tão importante: ele fixa o estado do imóvel no momento da entrega.</p>

<h2>Como funciona o laudo de vistoria da Mestre Engenharia</h2>
<ol>
  <li>Você envia o memorial descritivo e a data prevista de entrega pelo WhatsApp e recebe a proposta no mesmo dia.</li>
  <li>Um engenheiro faz a vistoria no imóvel, com testes de instalações, verificação de acabamentos e registro fotográfico de cada item.</li>
  <li>Você recebe o laudo com a lista de não conformidades classificadas por gravidade, pronto para ser protocolado na construtora.</li>
  <li>Se necessário, fazemos a revistoria após os reparos e, em caso de litígio, a equipe atua como assistente técnico.</li>
</ol>
<p>O serviço completo está descrito em <a href="/servicos/vistorias.html">Vistorias e Inspeções</a>. Para disputas já em andamento, veja <a href="/servicos/pericia.html">Perícia e Assistência Técnica</a>.</p>`,
    faq: [
      { q: 'Quanto custa a vistoria de um apartamento novo?', a: 'O valor depende da área e do tipo do imóvel. Enviamos a proposta no mesmo dia pelo WhatsApp. Em geral o laudo custa uma fração dos reparos que ele evita que fiquem por conta do comprador.' },
      { q: 'A construtora é obrigada a aceitar a presença do engenheiro na vistoria?', a: 'O comprador pode ser acompanhado por quem desejar na vistoria de entrega. Recomendamos avisar a construtora com antecedência e agendar um horário com tempo suficiente, normalmente de duas a três horas para um apartamento.' },
      { q: 'Já assinei o termo de recebimento. Ainda posso reclamar?', a: 'Sim. Os prazos do Código de Defesa do Consumidor e do Código Civil continuam valendo. A vistoria técnica documenta os vícios e o laudo fundamenta a reclamação formal ou, se preciso, a ação judicial.' },
      { q: 'Vocês atendem Balneário Camboriú, Navegantes e Camboriú?', a: 'Sim. Atendemos Itajaí, Balneário Camboriú, Navegantes, Camboriú, Brusque, Blumenau, Joinville, Florianópolis e todo o litoral catarinense.' }
    ]
  },
  {
    slug: 'usucapiao-extrajudicial-parte-tecnica',
    title: 'Usucapião extrajudicial: a parte técnica que o cartório exige',
    seoTitle: 'Usucapião Extrajudicial: Planta, Memorial e ART',
    desc: 'Como funciona o usucapião em cartório (art. 216-A da Lei 6.015/73), quais documentos técnicos são exigidos e o papel do engenheiro na planta, no memorial descritivo e no georreferenciamento.',
    crumb: 'Usucapião extrajudicial',
    lead: 'Desde 2015 é possível reconhecer a propriedade por usucapião diretamente no registro de imóveis, sem processo judicial. O procedimento é conduzido por advogado, mas depende de um levantamento técnico assinado por engenheiro. Este guia explica essa parte.',
    updated: '6 de setembro de 2026',
    services: ['regularizacao', 'topografia'],
    wa: 'planta e memorial para usucapião extrajudicial',
    keywords: 'usucapião extrajudicial, usucapião em cartório, planta e memorial descritivo, ART usucapião, georreferenciamento, Itajaí, Balneário Camboriú, Florianópolis',
    body: `
<h2>O que é o usucapião extrajudicial</h2>
<p>O usucapião extrajudicial está previsto no art. 216-A da Lei 6.015/73 (Lei de Registros Públicos), incluído pelo Código de Processo Civil de 2015 e detalhado pelas normas do Conselho Nacional de Justiça. O pedido é apresentado ao registro de imóveis da circunscrição do imóvel, por advogado, e tramita sem juiz. Quando a documentação está completa e não há impugnação, o registrador reconhece a propriedade e abre a matrícula em nome do possuidor.</p>
<p>As modalidades são as mesmas do usucapião judicial: extraordinário (15 anos, ou 10 com moradia ou obras), ordinário (10 anos com justo título e boa-fé), especial urbano (5 anos, imóvel de até 250 m² usado como moradia) e especial rural (5 anos, área de até 50 hectares tornada produtiva), além do usucapião familiar (2 anos, art. 1.240-A do Código Civil).</p>

<h2>Documentos exigidos</h2>
<ul>
  <li><strong>Ata notarial</strong> lavrada por tabelião, atestando o tempo e as características da posse.</li>
  <li><strong>Planta e memorial descritivo</strong> assinados por profissional habilitado, com ART ou RRT, e pelos titulares de direitos registrados e confrontantes.</li>
  <li><strong>Certidões negativas</strong> dos distribuidores da comarca em nome do requerente.</li>
  <li><strong>Justo título ou documentos da posse</strong>, como contratos, recibos, carnês de IPTU e contas de consumo.</li>
  <li><strong>Requerimento</strong> assinado por advogado com procuração.</li>
</ul>
<p>Se algum confrontante não assinar a planta, o registrador o notifica. O silêncio após o prazo legal é interpretado como concordância, regra introduzida pela Lei 13.465/2017. Havendo impugnação fundamentada, o pedido é encaminhado à via judicial.</p>

<h2>A parte técnica: o que o engenheiro entrega</h2>
<ol>
  <li><strong>Levantamento em campo.</strong> Medição do perímetro com equipamento GNSS ou estação total, identificação das divisas físicas (muros, cercas, marcos) e das benfeitorias.</li>
  <li><strong>Planta do imóvel.</strong> Desenho com coordenadas, área, perímetro, confrontantes nomeados e indicação das matrículas vizinhas, no padrão aceito pelo cartório.</li>
  <li><strong>Memorial descritivo.</strong> Descrição literal do perímetro (azimutes e distâncias), da área e das confrontações, coerente com a planta.</li>
  <li><strong>ART.</strong> Anotação de Responsabilidade Técnica no CREA, que dá validade ao levantamento. Sem ela o cartório não aceita a planta.</li>
  <li><strong>Coleta de assinaturas.</strong> Apoio ao advogado na assinatura da planta pelos confrontantes ou na preparação das notificações.</li>
</ol>
<p>Para imóveis rurais é exigido o georreferenciamento certificado no SIGEF, do INCRA, conforme a Lei 10.267/2001. Para imóveis urbanos o levantamento georreferenciado não é obrigatório, mas evita divergências com as matrículas vizinhas e acelera a análise do registrador.</p>

<h2>Erros que atrasam o pedido</h2>
<ul>
  <li>Planta e memorial com áreas ou confrontações diferentes entre si ou das matrículas confrontantes.</li>
  <li>Falta de ART ou ART registrada com atividade incompatível.</li>
  <li>Confrontantes não identificados corretamente, o que invalida as notificações.</li>
  <li>Área usucapienda sobrepondo parte de imóvel público, que não pode ser usucapido.</li>
</ul>
<p>Cuidamos do levantamento, da planta, do memorial e da ART em Itajaí, Balneário Camboriú, Florianópolis e região, em conjunto com o advogado do cliente. Veja também <a href="/servicos/regularizacao.html">Regularização de Imóveis</a> e <a href="/servicos/topografia.html">Topografia e Georreferenciamento</a>.</p>`,
    faq: [
      { q: 'Quanto tempo leva o usucapião extrajudicial?', a: 'Depende do cartório e da facilidade de obter as assinaturas dos confrontantes. Com a documentação completa, o procedimento costuma ser bem mais rápido que o processo judicial, que pode levar anos. A parte técnica é entregue em poucas semanas após o levantamento.' },
      { q: 'Preciso de advogado no usucapião em cartório?', a: 'Sim. A lei exige que o requerimento seja assinado por advogado. O engenheiro responde pela planta, pelo memorial descritivo e pela ART.' },
      { q: 'Posso usucapir um imóvel com matrícula em nome de outra pessoa?', a: 'Sim, desde que preenchidos os requisitos de tempo e de posse da modalidade escolhida. O titular registrado é notificado e pode concordar ou impugnar.' },
      { q: 'Qual a diferença entre usucapião e regularização fundiária (REURB)?', a: 'O usucapião reconhece a propriedade de um possuidor individual. A REURB, prevista na Lei 13.465/2017, regulariza núcleos urbanos informais inteiros, com titulação coletiva conduzida pelo município. Atuamos nas duas frentes.' }
    ]
  },
  {
    slug: 'habite-se-obra-pronta',
    title: 'Habite-se: como obter para uma obra pronta em Itajaí e região',
    seoTitle: 'Habite-se: Como Tirar para Obra Pronta',
    desc: 'O que é o Habite-se, documentos exigidos pela prefeitura, o que fazer quando a obra saiu diferente do projeto e como ligar o Habite-se à CND do INSS e à averbação no cartório.',
    crumb: 'Habite-se',
    lead: 'O Habite-se é o certificado da prefeitura que declara a obra concluída conforme o projeto aprovado. Sem ele não há averbação na matrícula, e sem averbação o imóvel não pode ser financiado nem vendido com segurança. Este guia mostra o caminho completo.',
    updated: '6 de setembro de 2026',
    services: ['regularizacao', 'inss'],
    wa: 'Habite-se e averbação de construção',
    keywords: 'habite-se, habite-se Itajaí, como tirar habite-se, averbação de construção, projeto de regularização, as built, CND INSS obra',
    body: `
<h2>O que é o Habite-se e para que ele serve</h2>
<p>O Habite-se, também chamado de certificado de conclusão de obra, é emitido pela prefeitura após vistoria que confirma que a construção foi executada de acordo com o projeto aprovado e com o Código de Obras do município. Ele é exigido para averbar a construção na matrícula do imóvel, para ligações definitivas de água e energia em muitos municípios, para financiamento bancário e para a instituição de condomínio.</p>

<h2>Documentos normalmente exigidos</h2>
<ul>
  <li>Alvará de construção e projeto aprovado.</li>
  <li>ART ou RRT de execução da obra.</li>
  <li>Requerimento do proprietário ou do responsável técnico.</li>
  <li>Atestado do Corpo de Bombeiros, para edificações que exigem projeto preventivo.</li>
  <li>Comprovante de pagamento das taxas municipais.</li>
  <li>Em vários municípios, a Certidão Negativa de Débitos da obra na Receita Federal (CND do INSS).</li>
</ul>
<p>Cada prefeitura tem lista e sistema próprios. Em Itajaí, Balneário Camboriú, Navegantes e Camboriú o protocolo é eletrônico e a vistoria é agendada após a análise documental.</p>

<h2>A obra saiu diferente do projeto. E agora?</h2>
<p>É a situação mais comum. Ampliações, mudança de aberturas, fechamento de sacadas e áreas construídas além do aprovado impedem a emissão direta do Habite-se. A solução é o <strong>projeto de regularização</strong>, conhecido como as built: o engenheiro levanta a obra como ela está, redesenha o projeto e protocola a aprovação da edificação existente. Dependendo do código municipal, pode haver compensações ou multas por área não conforme, mas o imóvel fica regular.</p>
<p>Obras antigas sem nenhum alvará seguem o mesmo caminho, com a vantagem de que muitos municípios têm regras específicas para edificações consolidadas.</p>

<h2>Do Habite-se à averbação: as três etapas</h2>
<ol>
  <li><strong>Habite-se na prefeitura.</strong> Projeto aprovado (ou regularizado), ART de execução, vistoria e emissão do certificado.</li>
  <li><strong>CND da obra na Receita Federal.</strong> A obra é aferida no SERO, as contribuições são declaradas na DCTFWeb e, após o pagamento ou a comprovação da decadência, a Receita emite a certidão. Explicamos o processo em detalhe na página <a href="/inss-de-obra-cnd/">INSS de Obra e CND</a>.</li>
  <li><strong>Averbação no registro de imóveis.</strong> Com o Habite-se, a CND e o requerimento, o cartório averba a construção na matrícula, com a área real e a data de conclusão.</li>
</ol>
<p>Conduzimos as três etapas em Itajaí e nas demais cidades da região. Veja o serviço completo em <a href="/servicos/regularizacao.html">Regularização de Imóveis</a>.</p>`,
    faq: [
      { q: 'Quanto tempo leva para sair o Habite-se?', a: 'Com projeto aprovado e obra conforme, o prazo depende da agenda de vistorias da prefeitura, em geral algumas semanas. Quando é preciso regularizar a edificação antes, o processo de aprovação do projeto como construído entra na conta.' },
      { q: 'Posso vender um imóvel sem Habite-se?', a: 'Pode, mas a construção não estará averbada e o comprador não conseguirá financiamento bancário. Na prática o imóvel vale menos e o negócio fica restrito a pagamento à vista.' },
      { q: 'Preciso da CND do INSS para o Habite-se?', a: 'Depende do município. Alguns exigem a CND para emitir o Habite-se; outros exigem apenas na averbação, que é obrigatória por lei. Em qualquer caso a certidão será necessária para regularizar a matrícula.' },
      { q: 'O que é Habite-se parcial?', a: 'É o certificado emitido para parte de uma edificação concluída, por exemplo uma torre pronta em um condomínio em obras. Permite averbar e ocupar a parte finalizada.' }
    ]
  }
];

module.exports = function (ctx) {
  const { SERVICES, SITE, fs, path, dir } = ctx;
  const { WA, ARROW, head, hero, footer } = shell(ctx);
  const esc = t => t.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  const strip = t => t.replace(/<[^>]+>/g, '');
  const waFor = t => 'https://wa.me/5547991550224?text=' + encodeURIComponent(`Olá, vim pelo site da Mestre Engenharia e preciso de ${t}.`);
  const svcHref = s => s.href ? '/' + s.href.replace(/^\.\.\//, '') : '/servicos/' + s.slug + '.html';

  const STYLE = `<style>
.guia{max-width:820px;margin:0 auto}
.guia h2{font-size:1.4rem;margin:38px 0 12px}
.guia p,.guia li{line-height:1.75;font-size:1.05rem}
.guia ul,.guia ol{padding-left:24px;margin:8px 0 16px}
.guia li{margin:7px 0}
.guia a{color:inherit;text-decoration:underline}
.guia .meta{font-size:.9rem;opacity:.75;margin-bottom:18px}
.guia .cta{margin:34px 0 8px;padding:22px;border-radius:12px;background:rgba(201,169,97,.12);border:1px solid rgba(201,169,97,.45)}
.guia .cta p{margin:0 0 14px}
.guia .faq{margin-top:34px}
.guia .faq details{border-top:1px solid rgba(0,0,0,.12);padding:10px 0}
.guia .faq summary{cursor:pointer;font-weight:700;font-size:1.05rem;padding:8px 0}
.guia .faq .faq-body{padding:4px 0 10px;line-height:1.7}
.guia .rel{display:flex;flex-wrap:wrap;gap:10px;margin-top:10px}
.guia .rel a{display:inline-block;padding:10px 14px;border:1px solid rgba(0,0,0,.18);border-radius:8px;text-decoration:none;font-weight:600}
@media(max-width:640px){.guia h2{font-size:1.2rem}.guia .cta .btn{width:100%;text-align:center}}
</style>`;

  const schema = g => JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${SITE}/guias/${g.slug}/#article`,
        headline: g.title,
        description: g.desc,
        inLanguage: 'pt-BR',
        dateModified: '2026-09-06',
        datePublished: '2026-09-06',
        author: { '@type': 'Organization', '@id': `${SITE}/#org`, name: 'Mestre Engenharia Avaliações e Perícias' },
        publisher: { '@id': `${SITE}/#org` },
        mainEntityOfPage: `${SITE}/guias/${g.slug}/`,
        keywords: g.keywords
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Guias', item: `${SITE}/guias/` },
          { '@type': 'ListItem', position: 3, name: g.crumb, item: `${SITE}/guias/${g.slug}/` }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: g.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: strip(f.a) } }))
      }
    ]
  }, null, 1);

  const guiaPage = g => {
    const rel = g.services.map(slug => SERVICES.find(s => s.slug === slug)).filter(Boolean);
    const others = GUIAS.filter(x => x.slug !== g.slug);
    let html = head({ title: g.seoTitle, desc: g.desc, canonical: `${SITE}/guias/${g.slug}/` });
    html = html.replace('</head>', `<meta name="keywords" content="${g.keywords}">\n<script type="application/ld+json">\n${schema(g)}\n</script>\n${STYLE}\n</head>`);
    html += hero({ crumb: g.crumb, h1: g.title, p: g.lead });
    html += `
<section class="section light">
  <div class="wrap">
    <article class="guia">
      <p class="meta">Guia técnico · Atualizado em ${g.updated} · Mestre Engenharia, CREA-SC</p>
      ${g.body}
      <div class="cta">
        <p><strong>Precisa deste serviço?</strong> Mande uma mensagem com a cidade e o tipo de imóvel. Respondemos no mesmo dia útil.</p>
        <a class="btn btn-gold" href="${waFor(g.wa)}" target="_blank" rel="noopener">Falar no WhatsApp ${ARROW}</a>
      </div>
      <div class="faq">
        <h2>Perguntas frequentes</h2>
        ${g.faq.map(f => `<details><summary>${f.q}</summary><div class="faq-body">${f.a}</div></details>`).join('\n        ')}
      </div>
      <h2>Serviços relacionados</h2>
      <div class="rel">
        ${rel.map(s => `<a href="${svcHref(s)}">${s.nav}</a>`).join('\n        ')}
      </div>
      <h2>Outros guias</h2>
      <div class="rel">
        ${others.map(o => `<a href="/guias/${o.slug}/">${o.crumb}</a>`).join('\n        ')}
      </div>
    </article>
  </div>
</section>
`;
    html += footer();
    return html;
  };

  /* páginas dos guias */
  for (const g of GUIAS) {
    const d = path.join(dir, 'guias', g.slug);
    fs.mkdirSync(d, { recursive: true });
    fs.writeFileSync(path.join(d, 'index.html'), guiaPage(g), 'utf8');
    console.log('gerado: guias/' + g.slug + '/index.html');
  }

  /* índice /guias/ */
  let idx = head({ title: 'Guias Técnicos', desc: 'Guias práticos da Mestre Engenharia sobre vistoria de imóvel novo, usucapião extrajudicial, Habite-se e regularização de imóveis em Itajaí, Balneário Camboriú e Florianópolis.', canonical: `${SITE}/guias/` });
  idx = idx.replace('</head>', STYLE + '\n</head>');
  idx += hero({ crumb: 'Guias', h1: 'Guias técnicos', p: 'Respostas diretas, com base normativa, para as dúvidas que recebemos todos os dias sobre imóveis, obras e regularização.' });
  idx += `
<section class="section light">
  <div class="wrap">
    <div class="guia">
      ${GUIAS.map(g => `<h2><a href="/guias/${g.slug}/">${g.title}</a></h2><p>${g.desc}</p>`).join('\n      ')}
    </div>
  </div>
</section>
` + footer();
  fs.writeFileSync(path.join(dir, 'guias', 'index.html'), idx, 'utf8');
  console.log('gerado: guias/index.html');

  /* "Leia também" nas páginas de serviço relacionadas (pós-processamento dos arquivos gerados) */
  for (const s of SERVICES) {
    const list = GUIAS.filter(g => g.services.includes(s.slug));
    if (!list.length) continue;
    const file = s.pilar ? path.join(dir, 'inss-de-obra-cnd', 'index.html') : path.join(dir, 'servicos', s.slug + '.html');
    if (!fs.existsSync(file)) continue;
    let h = fs.readFileSync(file, 'utf8');
    if (h.includes('id="leia-tambem"')) continue;
    const block = `
<section class="section light" id="leia-tambem">
  <div class="wrap">
    <div class="section-head">
      <span class="kicker">Leia também</span>
      <h2>Guias técnicos sobre este assunto</h2>
    </div>
    <div class="rel-grid">
      ${list.map(g => `<a class="rel" href="/guias/${g.slug}/"><b>${g.title}</b>${ARROW}</a>`).join('\n      ')}
    </div>
  </div>
</section>
`;
    h = h.replace('<footer>', block + '\n<footer>');
    fs.writeFileSync(file, h, 'utf8');
  }
  console.log('Leia também inserido nas páginas de serviço relacionadas');

  /* sitemap e llms.txt */
  const sm = path.join(dir, 'sitemap.xml');
  let xml = fs.readFileSync(sm, 'utf8');
  const entries = ['guias/', ...GUIAS.map(g => `guias/${g.slug}/`)]
    .filter(p => !xml.includes(`${SITE}/${p}</loc>`))
    .map(p => `  <url><loc>${SITE}/${p}</loc><lastmod>2026-09-06</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`).join('\n');
  if (entries) fs.writeFileSync(sm, xml.replace('</urlset>', entries + '\n</urlset>'), 'utf8');

  const lp = path.join(dir, 'llms.txt');
  let llms = fs.readFileSync(lp, 'utf8');
  if (!llms.includes('## Guias')) {
    const sec = `## Guias técnicos\n\n${GUIAS.map(g => `- [${g.title}](${SITE}/guias/${g.slug}/): ${g.desc}`).join('\n')}\n\n`;
    llms = llms.replace('## Contato', sec + '## Contato');
    fs.writeFileSync(lp, llms, 'utf8');
  }
  console.log('sitemap.xml e llms.txt atualizados com os guias');
};
module.exports.GUIAS = GUIAS;
