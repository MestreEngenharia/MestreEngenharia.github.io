// Gera stubs de redirecionamento das URLs antigas (Wix) -> paginas novas.
// GitHub Pages e estatico: usamos <pasta>/index.html com meta-refresh + canonical + JS.
const fs = require('fs');
const path = require('path');
const BASE = 'https://www.mestreengenharia.com';

const map = {
  'avaliacao': 'servicos/avaliacao.html',
  'pericia': 'servicos/pericia.html',
  'topografia': 'servicos/topografia.html',
  'incorporacao': 'servicos/incorporacao.html',
  'regularizacaofundiaria': 'servicos/regularizacao.html',
  'inspeçaopredialeresidencial': 'servicos/vistorias.html',
  'estudodeviabilidade': 'servicos/ambiental.html',
  'laudodeobra': 'servicos/vistorias.html',
  'afericaodeobra': 'servicos/topografia.html'
};

const tpl = (target) => `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Página movida | Mestre Engenharia</title>
<link rel="canonical" href="${BASE}/${target}">
<meta http-equiv="refresh" content="0; url=${BASE}/${target}">
<script>location.replace("${BASE}/${target}");</script>
</head>
<body style="font-family:system-ui,sans-serif;padding:2rem;color:#06253D">
<p>Esta página mudou de endereço. Se não for redirecionado automaticamente, <a href="${BASE}/${target}">clique aqui</a>.</p>
</body>
</html>
`;

let n = 0;
for (const [oldPath, target] of Object.entries(map)) {
  const dir = path.join(__dirname, oldPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), tpl(target), 'utf8');
  console.log('redirect: /' + oldPath + '  ->  /' + target);
  n++;
}
console.log('OK: ' + n + ' redirecionamentos gerados.');
