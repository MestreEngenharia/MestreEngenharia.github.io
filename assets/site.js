/* Mestre Engenharia v2.1 — interações compartilhadas */
(function () {
  'use strict';

  /* Menu mobile */
  const hamb = document.getElementById('hamb');
  const menu = document.getElementById('menu');
  if (hamb && menu) {
    hamb.addEventListener('click', () => {
      menu.classList.toggle('open');
      hamb.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        hamb.classList.remove('open');
      })
    );
  }

  /* Nav compacta ao rolar */
  const nav = document.querySelector('header.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Reveal on scroll — com dupla rede de segurança:
     1) tudo que já está no viewport é revelado imediatamente no load;
     2) se o IntersectionObserver não disparar (navegador antigo,
        aba em segundo plano, leitor de conteúdo), um timer revela tudo. */
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  const revealAll = () => revealEls.forEach(el => el.classList.add('in'));

  revealEls.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 20) el.classList.add('in');
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => { if (!el.classList.contains('in')) io.observe(el); });
    setTimeout(revealAll, 4000); // segurança: nada fica invisível
  } else {
    revealAll();
  }

  /* Contadores animados (barra de números) — com fallback para o valor final */
  const counters = Array.from(document.querySelectorAll('[data-count]'));
  const fmt = new Intl.NumberFormat('pt-BR');
  const finalText = el =>
    (el.dataset.prefix || '') + fmt.format(parseInt(el.dataset.count, 10)) + (el.dataset.suffix || '');
  const started = new WeakSet();

  const animate = el => {
    if (started.has(el)) return;
    started.add(el);
    const target = parseInt(el.dataset.count, 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const dur = 1600;
    const t0 = performance.now();
    const tick = now => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + fmt.format(Math.round(target * eased)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    // segurança: garante o valor final mesmo se o rAF for suspenso
    setTimeout(() => { el.textContent = finalText(el); }, dur + 500);
  };

  if (counters.length) {
    if ('IntersectionObserver' in window) {
      const ioc = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            ioc.unobserve(e.target);
            animate(e.target);
          }
        });
      }, { threshold: 0.5 });
      counters.forEach(el => ioc.observe(el));
      // segurança: se o observer nunca disparar, mostra os números finais
      setTimeout(() => counters.forEach(el => { if (!started.has(el)) el.textContent = finalText(el); }), 4000);
    } else {
      counters.forEach(el => { el.textContent = finalText(el); });
    }
  }

  /* Parallax sutil no hero */
  const heroBg = document.querySelector('.hero .hero-bg');
  if (heroBg && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) heroBg.style.translate = '0 ' + y * 0.18 + 'px';
    }, { passive: true });
  }

  /* Fallback: se uma foto externa falhar, esconde e deixa o gradiente de fundo */
  document.querySelectorAll('img[data-fallback]').forEach(img => {
    img.addEventListener('error', () => { img.style.display = 'none'; });
  });
})();

/* ---- Conversao Google Ads: clique em WhatsApp ----
   Dispara no CLIQUE (nao no carregamento da pagina), pois o site nao tem
   pagina de agradecimento: o botao leva direto ao WhatsApp.            */
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[href*="wa.me"], a[href*="api.whatsapp.com"]');
  if (!a) return;
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', { 'send_to': 'AW-10830906825/BrJ9CLuuwNADEMmLyqwo' });
  }
});

/* Âncoras internas: rolagem robusta com compensação do cabeçalho fixo e
   fallback instantâneo quando a rolagem suave não acontece (aba em segundo
   plano, economia de energia, navegadores antigos). */
(function () {
  var nav = document.querySelector('header.nav');
  var offset = function () { return (nav ? nav.offsetHeight : 0) + 12; };
  var instant = function (top) {
    var h = document.documentElement, prev = h.style.scrollBehavior;
    h.style.scrollBehavior = 'auto';
    window.scrollTo(0, top);
    h.style.scrollBehavior = prev;
  };
  var goTo = function (el, smooth) {
    var top = el.getBoundingClientRect().top + window.pageYOffset - offset();
    if (top < 0) top = 0;
    if (!smooth) { instant(top); return; }
    try { window.scrollTo({ top: top, behavior: 'smooth' }); } catch (e) { instant(top); }
    setTimeout(function () {
      if (Math.abs(window.pageYOffset - top) > 60) instant(top);
    }, 900);
  };
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href*="#"]');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var i = href.indexOf('#');
    var path = href.slice(0, i);
    if (path && path !== location.pathname && path !== 'index.html' && path !== './' && path !== '/') return;
    if (path === 'index.html' && !/(^|\/)(index\.html)?$/.test(location.pathname)) return;
    var id = href.slice(i + 1);
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    goTo(el, true);
    if (history.pushState) history.pushState(null, '', '#' + id);
  });
  if (location.hash && location.hash.length > 1) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) setTimeout(function () { goTo(target, false); }, 60);
  }
})();
