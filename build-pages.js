// Páginas auxiliares geradas com o mesmo cabeçalho/rodapé do site:
//   404.html                          (servida pelo GitHub Pages em qualquer URL inexistente)
//   politica-de-privacidade/index.html (LGPD + aviso da tag do Google Ads)
// Usa caminhos absolutos (/assets/...) porque a 404 pode ser servida em qualquer profundidade.
module.exports = function ({ SERVICES, SITE, fs, path, dir }) {
  const WA = 'https://wa.me/5547991550224?text=' + encodeURIComponent('Olá, vim pelo site da Mestre Engenharia e preciso de um orçamento.');
  const ARROW = '<svg viewBox="0 0 24 24"><path d="M8.6 16.6 13.2 12 8.6 7.4 10 6l6 6-6 6z"/></svg>';
  const svcHref = s => '/' + (s.href ? s.href.replace(/^\.\.\//, '') : 'servicos/' + s.slug + '.html');

  const head = ({ title, desc, canonical, noindex }) => `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<!-- Google tag (gtag.js) - Google Ads AW-10830906825 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-10830906825"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','AW-10830906825');</script>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#06253D">
<meta name="format-detection" content="telephone=no">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta http-equiv="Content-Security-Policy" content="object-src 'none'; base-uri 'self'; upgrade-insecure-requests">
${noindex ? '<meta name="robots" content="noindex, follow">' : ''}
<title>${title} | Mestre Engenharia</title>
<meta name="description" content="${desc}">
${canonical ? `<link rel="canonical" href="${canonical}">` : ''}
<link rel="icon" type="image/x-icon" href="/assets/img/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/img/apple-touch-icon.png">
<meta property="og:title" content="${title} | Mestre Engenharia">
<meta property="og:description" content="${desc}">
<meta property="og:type" content="website">
<meta property="og:image" content="${SITE}/assets/img/logo-central-branco-dourado.png">
<meta property="og:locale" content="pt_BR">
<link rel="preload" href="/assets/fonts/Montserrat-800-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/SourceSans3-400-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/fonts.css">
<link rel="stylesheet" href="/assets/style.css">
<style>
.aux-hero .svc-bg{background-image:url('/assets/img/fotos/1429497419816-9ca5cfb4571a-w1600.webp')}
@media(max-width:640px){.aux-hero .svc-bg{background-image:url('/assets/img/fotos/1429497419816-9ca5cfb4571a-w1200.webp')}}
.legal{max-width:820px;margin:0 auto}
.legal h2{font-size:1.35rem;margin:38px 0 12px}
.legal h3{font-size:1.05rem;margin:22px 0 8px}
.legal p,.legal li{line-height:1.7;font-size:1.02rem}
.legal ul{padding-left:22px;margin:8px 0 14px}
.legal li{margin:6px 0}
.legal .note{border-left:4px solid #C9A961;background:rgba(201,169,97,.10);padding:14px 18px;border-radius:8px;margin:18px 0}
.legal a{color:inherit;text-decoration:underline}
.nf-wrap{max-width:900px;margin:0 auto;text-align:center}
.nf-wrap p.lead{font-size:1.15rem;line-height:1.7;margin:0 auto 26px;max-width:640px}
.nf-sug{display:none;margin:0 auto 26px;padding:16px 20px;border-radius:12px;background:rgba(201,169,97,.14);border:1px solid rgba(201,169,97,.5);max-width:640px}
.nf-sug.on{display:block}
.nf-sug a{font-weight:700;text-decoration:underline;color:inherit}
.nf-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px;text-align:left;margin:26px 0}
@media(max-width:640px){.nf-grid{grid-template-columns:1fr}.nf-wrap .hero-ctas{flex-direction:column;align-items:stretch}}
</style>
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
    <a class="brand" href="/" aria-label="Mestre Engenharia, página inicial">
      <img src="/assets/img/logo-lateral-branco.png" alt="Mestre Engenharia Avaliações e Perícias" width="412" height="100">
    </a>
    <nav class="menu" id="menu">
      <a href="/#servicos">Todos os serviços</a>
      <a href="/#sobre">Sobre nós</a>
      <a href="/#faq">Dúvidas</a>
      <a href="/#contato">Contato</a>
    </nav>
    <div class="nav-cta">
      <a class="btn btn-gold" href="${WA}" target="_blank" rel="noopener">WhatsApp</a>
      <button class="hamb" id="hamb" aria-label="Abrir menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>
`;

  const hero = ({ crumb, h1, p }) => `
<section class="svc-hero aux-hero">
  <div class="svc-bg"></div>
  <div class="wrap">
    <div class="crumb"><a href="/">Início</a>${ARROW}<span>${crumb}</span></div>
    <h1>${h1}</h1>
    <p>${p}</p>
  </div>
</section>
`;

  const footer = () => `
<footer>
  <div class="wrap">
    <div class="f-grid">
      <div>
        <a class="brand" href="/">
          <img src="/assets/img/logo-lateral-branco.png" alt="Mestre Engenharia Avaliações e Perícias" width="412" height="100">
        </a>
        <p style="margin-top:18px;max-width:320px">Engenharia com propósito, precisão e resultado. Avaliações, perícias e laudos técnicos em engenharia civil, agronomia e meio ambiente.</p>
      </div>
      <div>
        <h4>Serviços</h4>
        <ul>
          ${SERVICES.map(x => `<li><a href="${svcHref(x)}">${x.nav}${x.novo ? ' <span class="tag-novo">Destaque</span>' : ''}</a></li>`).join('\n          ')}
        </ul>
      </div>
      <div>
        <h4>Institucional</h4>
        <ul>
          <li><a href="/#sobre">Sobre nós</a></li>
          <li><a href="/#processo">Como trabalhamos</a></li>
          <li><a href="/#faq">Dúvidas frequentes</a></li>
          <li><a href="/#contato">Contato</a></li>
          <li><a href="/politica-de-privacidade/">Política de Privacidade</a></li>
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
      <span>© 2026 Mestre Engenharia Avaliações e Perícias Ltda · Itajaí e Florianópolis/SC · Todos os direitos reservados. · <a href="/politica-de-privacidade/" style="color:inherit;text-decoration:underline">Política de Privacidade</a></span>
    </div>
  </div>
</footer>

<a class="wa-float" href="${WA}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
  <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.5 14.2c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-2.9-1.3-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.1.5.2.6.4.1.1.1.6-.3 1.1z"/></svg>
</a>

<script src="/assets/site.js"></script>
</body>
</html>
`;

  /* ---------- 404 ---------- */
  const kw = {
    avaliacao: ['avalia', 'laudo-de-avaliacao', 'valor', 'vtn'],
    pericia: ['peric', 'assistencia', 'assistente', 'judicial', 'quesito'],
    topografia: ['topograf', 'drone', 'georref', 'sigef', 'incra', 'levantamento'],
    regularizacao: ['regulariza', 'habite', 'averba', 'usucap', 'reurb', 'retifica'],
    vistorias: ['vistoria', 'inspec', 'cautelar', 'recebimento', 'patolog', 'fachada'],
    incorporacao: ['incorpora', 'viabilidade', 'evte', '12721', 'quadro'],
    ambiental: ['ambient', 'hidrolog', 'licenc', 'cip'],
    'inss-de-obra-cnd': ['inss', 'cnd', 'cno', 'sero', 'dctf', 'aro', 'decad', 'aferi', 'obra']
  };
  const nf = head({
    title: 'Página não encontrada',
    desc: 'O endereço que você acessou não existe ou mudou com o novo site da Mestre Engenharia. Veja os serviços disponíveis ou fale conosco no WhatsApp.',
    noindex: true
  }) + hero({
    crumb: 'Página não encontrada',
    h1: 'Esta página não existe ou mudou de endereço.',
    p: 'O site da Mestre Engenharia foi reorganizado. O conteúdo que você procura provavelmente está em uma das páginas abaixo.'
  }) + `
<section class="section light">
  <div class="wrap nf-wrap">
    <div class="nf-sug" id="nf-sug"></div>
    <p class="lead">Escolha um serviço ou fale direto com a nossa equipe. Respondemos no mesmo dia útil.</p>
    <div class="nf-grid" id="nf-grid">
      ${SERVICES.map(x => `<a class="rel" data-slug="${x.slug}" href="${svcHref(x)}"><b>${x.nav}</b>${ARROW}</a>`).join('\n      ')}
    </div>
    <div class="hero-ctas" style="justify-content:center">
      <a class="btn btn-navy" href="/">Ir para a página inicial ${ARROW}</a>
      <a class="btn btn-gold" href="${WA}" target="_blank" rel="noopener">Falar no WhatsApp ${ARROW}</a>
    </div>
  </div>
</section>
<script>
(function(){
  var p=(location.pathname||'').toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g,'');
  var kw=${JSON.stringify(kw)};
  var best=null;
  for(var slug in kw){ if(kw[slug].some(function(k){return p.indexOf(k)>-1;})){ best=slug; break; } }
  if(!best) return;
  var card=document.querySelector('[data-slug="'+best+'"]'); if(!card) return;
  var box=document.getElementById('nf-sug');
  box.innerHTML='Você procurava por <a href="'+card.getAttribute('href')+'">'+card.querySelector('b').textContent+'</a>? Essa é a página atual desse serviço.';
  box.className='nf-sug on';
  card.parentNode.insertBefore(card,card.parentNode.firstChild);
  card.style.borderColor='#C9A961';
})();
</script>
` + footer();
  fs.writeFileSync(path.join(dir, '404.html'), nf, 'utf8');
  console.log('gerado: 404.html');

  /* ---------- Política de Privacidade ---------- */
  const priv = head({
    title: 'Política de Privacidade',
    desc: 'Como a Mestre Engenharia trata dados pessoais no site e no atendimento: dados coletados, finalidades, cookies e tag do Google Ads, prazos de guarda e direitos do titular conforme a LGPD.',
    canonical: SITE + '/politica-de-privacidade/'
  }) + hero({
    crumb: 'Política de Privacidade',
    h1: 'Política de Privacidade',
    p: 'Transparência sobre quais dados tratamos, por quê e por quanto tempo, conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018).'
  }) + `
<section class="section light">
  <div class="wrap">
    <div class="legal">
      <p><strong>Última atualização:</strong> 6 de setembro de 2026.</p>

      <h2>1. Quem somos</h2>
      <p>A <strong>Mestre Engenharia Avaliações e Perícias Ltda</strong> ("Mestre Engenharia"), com sede na Rua João Bauer, 498, Sala 810, Centro, Itajaí/SC, é a controladora dos dados pessoais tratados por meio deste site e dos canais de atendimento indicados nele. Para qualquer assunto relacionado a dados pessoais, escreva para <a href="mailto:contato@mestreengenharia.com">contato@mestreengenharia.com</a>.</p>

      <h2>2. Quais dados tratamos</h2>
      <h3>2.1 Dados que você nos envia</h3>
      <p>Este site não possui formulários. O contato acontece por WhatsApp, telefone ou e-mail. Ao falar conosco, você pode nos fornecer nome, telefone, e-mail e informações do seu caso, como endereço e documentos do imóvel, fotos, matrículas, ARTs e dados de processos. Usamos essas informações apenas para entender a demanda, elaborar o orçamento e, se houver contratação, executar o serviço e emitir os laudos.</p>
      <h3>2.2 Dados de navegação</h3>
      <p>O site é hospedado no GitHub Pages (GitHub, Inc.). Como qualquer provedor de hospedagem, o GitHub pode registrar dados técnicos de acesso, como endereço IP, tipo de navegador, data e páginas visitadas, para fins de segurança e operação do serviço, conforme a <a href="https://docs.github.com/pt/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">política de privacidade do GitHub</a>.</p>
      <h3>2.3 Cookies e mensuração de anúncios</h3>
      <p>Utilizamos a tag do Google Ads (gtag.js, do Google LLC) para medir o resultado das nossas campanhas. Essa tag pode gravar cookies e identificadores no seu navegador e registra eventos como a visita a uma página e o clique no botão de WhatsApp após a chegada por um anúncio. Ela <strong>não</strong> coleta nome, telefone, e-mail nem o conteúdo da sua conversa. Saiba mais em <a href="https://policies.google.com/technologies/partner-sites?hl=pt-BR" target="_blank" rel="noopener">como o Google usa dados de sites parceiros</a>.</p>
      <div class="note"><p style="margin:0">Você pode desativar a personalização de anúncios em <a href="https://adssettings.google.com/" target="_blank" rel="noopener">adssettings.google.com</a> e bloquear cookies de terceiros nas configurações do seu navegador. O site continua funcionando normalmente sem esses cookies.</p></div>

      <h2>3. Para que usamos os dados e com qual base legal</h2>
      <ul>
        <li><strong>Atendimento e orçamento:</strong> procedimentos preliminares à contratação, a seu pedido (art. 7º, V, da LGPD).</li>
        <li><strong>Execução dos serviços e emissão de laudos:</strong> execução de contrato e cumprimento de obrigações legais e regulatórias, como registro de ART e guarda de documentos técnicos (art. 7º, II e V).</li>
        <li><strong>Mensuração de campanhas de anúncios:</strong> legítimo interesse em avaliar a eficiência da divulgação, com a opção de desativação descrita acima (art. 7º, IX).</li>
        <li><strong>Segurança e operação do site:</strong> legítimo interesse do provedor de hospedagem e da Mestre Engenharia (art. 7º, IX).</li>
      </ul>

      <h2>4. Com quem compartilhamos</h2>
      <ul>
        <li><strong>Google LLC</strong> (tag do Google Ads), <strong>GitHub, Inc.</strong> (hospedagem) e <strong>WhatsApp LLC / Meta</strong>, quando você escolhe esse canal de contato. Esses provedores podem processar dados fora do Brasil, com as salvaguardas previstas em suas próprias políticas.</li>
        <li><strong>Órgãos públicos, cartórios, juízos e conselhos profissionais</strong>, quando necessário para executar o serviço contratado (por exemplo, Receita Federal, prefeituras, registros de imóveis e CREA).</li>
      </ul>
      <p>Não vendemos nem cedemos dados pessoais para fins de marketing de terceiros.</p>

      <h2>5. Por quanto tempo guardamos</h2>
      <ul>
        <li><strong>Contatos sem contratação:</strong> até 12 meses após a última interação, salvo pedido de exclusão antes disso.</li>
        <li><strong>Serviços contratados, laudos e documentos técnicos:</strong> pelo prazo exigido pela legislação profissional, fiscal e pelos prazos prescricionais aplicáveis, que em regra não é inferior a 5 anos.</li>
        <li><strong>Dados de navegação e cookies:</strong> conforme os prazos definidos pelos provedores citados no item 4.</li>
      </ul>

      <h2>6. Seus direitos</h2>
      <p>Nos termos do art. 18 da LGPD, você pode solicitar a qualquer momento: confirmação da existência de tratamento; acesso aos dados; correção de dados incompletos ou desatualizados; anonimização, bloqueio ou eliminação de dados desnecessários; portabilidade; informação sobre compartilhamentos; e oposição a tratamentos baseados em legítimo interesse.</p>
      <p>Para exercer esses direitos, envie um e-mail para <a href="mailto:contato@mestreengenharia.com?subject=LGPD">contato@mestreengenharia.com</a> com o assunto "LGPD". Respondemos em até 15 dias. Se houver dados que precisamos manter por obrigação legal, explicaremos o motivo.</p>

      <h2>7. Segurança</h2>
      <p>O site é estático, servido exclusivamente por HTTPS e não armazena dados de clientes. As informações de casos e laudos ficam em sistemas internos de acesso restrito à equipe técnica. Adotamos medidas razoáveis para proteger os dados contra acesso não autorizado, perda ou alteração.</p>

      <h2>8. Crianças e adolescentes</h2>
      <p>Este site e os nossos serviços são destinados a pessoas maiores de 18 anos e a empresas. Não coletamos intencionalmente dados de menores.</p>

      <h2>9. Alterações desta política</h2>
      <p>Esta política pode ser atualizada para refletir mudanças legais ou nos nossos serviços. A versão vigente é sempre a publicada nesta página, com a data de atualização indicada no início.</p>

      <h2>10. Encarregado pelo tratamento de dados</h2>
      <p>Canal do encarregado (DPO): <a href="mailto:contato@mestreengenharia.com">contato@mestreengenharia.com</a>.</p>
    </div>
  </div>
</section>
` + footer();
  const privDir = path.join(dir, 'politica-de-privacidade');
  fs.mkdirSync(privDir, { recursive: true });
  fs.writeFileSync(path.join(privDir, 'index.html'), priv, 'utf8');
  console.log('gerado: politica-de-privacidade/index.html');
};
