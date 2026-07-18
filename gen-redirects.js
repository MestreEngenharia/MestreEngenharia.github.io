// Gera stubs de redirecionamento das URLs antigas (Wix) -> paginas novas.
// GitHub Pages e estatico: usamos <pasta>/index.html com meta-refresh + canonical + JS.
const fs = require('fs');
const path = require('path');
const BASE = 'https://www.mestreengenharia.com';

// '' (string vazia) = redireciona para a home
const map = {
  // --- confirmadas no indice do Google (migracao original) ---
  'avaliacao': 'servicos/avaliacao.html',
  'pericia': 'servicos/pericia.html',
  'topografia': 'servicos/topografia.html',
  'incorporacao': 'servicos/incorporacao.html',
  'regularizacaofundiaria': 'servicos/regularizacao.html',
  'inspeçaopredialeresidencial': 'servicos/vistorias.html',
  'estudodeviabilidade': 'servicos/ambiental.html',
  'laudodeobra': 'servicos/vistorias.html',
  'afericaodeobra': 'servicos/topografia.html',

  // --- rede de seguranca p/ Google Ads e links antigos ---
  'regularizacaodeimoveis': 'servicos/regularizacao.html',   // <- destino do anuncio reprovado
  'regularizacao': 'servicos/regularizacao.html',
  'regularizacaoimoveis': 'servicos/regularizacao.html',
  'usucapiao': 'servicos/regularizacao.html',
  'habitese': 'servicos/regularizacao.html',
  'avaliacaodeimoveis': 'servicos/avaliacao.html',
  'desapropriacao': 'servicos/avaliacao.html',
  'servidaodepassagem': 'servicos/avaliacao.html',
  'periciajudicial': 'servicos/pericia.html',
  'inspecaopredial': 'servicos/vistorias.html',
  'vistoriacautelar': 'servicos/vistorias.html',
  'laudotecnico': 'servicos/vistorias.html',
  'dronesnaengenharia': 'servicos/topografia.html',
  'projetos': 'servicos/incorporacao.html',
  'contato': '',
  'sobre': '',
  'servicos': '',

  // --- slugs dos SITELINKS de conta do Google Ads (titulos lidos no painel) ---
  'regularizeseuimovel': 'servicos/regularizacao.html',
  'alvaradeconstrucao': 'servicos/regularizacao.html',
  'alvara': 'servicos/regularizacao.html',
  'alvaradeconstrucaoehabitese': 'servicos/regularizacao.html',
  'escritura': 'servicos/regularizacao.html',
  'matricula': 'servicos/regularizacao.html',
  'cnddoinss': 'servicos/regularizacao.html',
  'cndinss': 'servicos/regularizacao.html',
  'cndinssrf': 'servicos/regularizacao.html',
  'cnd': 'servicos/regularizacao.html',
  'projetoarquitetonico': 'servicos/incorporacao.html',
  'projeto-arquitetonico': 'servicos/incorporacao.html',
  'projetoarquitetura': 'servicos/incorporacao.html',
  'laudoderecebimento': 'servicos/vistorias.html',
  'laudodereceb': 'servicos/vistorias.html',
  'vistoriadevizinhanca': 'servicos/vistorias.html',
  'laudodevizinhanca': 'servicos/vistorias.html',
  'avaliacaoimobiliaria': 'servicos/avaliacao.html',
  'laudodeavaliacao': 'servicos/avaliacao.html'
};

const tpl = (url) => `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Página movida | Mestre Engenharia</title>
<link rel="canonical" href="${url}">
<meta http-equiv="refresh" content="0; url=${url}">
<script>location.replace("${url}");</script>
</head>
<body style="font-family:system-ui,sans-serif;padding:2rem;color:#06253D">
<p>Esta página mudou de endereço. Se não for redirecionado automaticamente, <a href="${url}">clique aqui</a>.</p>
</body>
</html>
`;

let n = 0;
for (const [oldPath, target] of Object.entries(map)) {
  const url = target ? `${BASE}/${target}` : `${BASE}/`;
  const dir = path.join(__dirname, oldPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), tpl(url), 'utf8');
  console.log('redirect: /' + oldPath + '  ->  ' + (target || '(home)'));
  n++;
}
console.log('OK: ' + n + ' redirecionamentos gerados.');
