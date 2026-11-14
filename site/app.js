/* PDÖ single-page presentation — interaction layer (vanilla, no build) */
(function () {
'use strict';

var TOPICS = window.TOPICS || [];
var $ = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
var reducedMQ = matchMedia('(prefers-reduced-motion: reduce)');
var EASE = 'cubic-bezier(.2,.7,.3,1)';

function el(tag, cls, text) {
  var n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}
function pad(n) { return (n < 10 ? '0' : '') + n; }

function groups() {
  var out = [];
  TOPICS.forEach(function (t, i) {
    var g = out[out.length - 1];
    if (!g || g.name !== t.group) out.push(g = { name: t.group, items: [] });
    g.items.push(i);
  });
  return out;
}
var GROUPS = groups();

/* ── build: rail nav ─────────────────────────────────────────── */
var nav = $('#rail-nav');
var home = el('a', 'nav-home', 'Giriş');
home.href = '#giris';
nav.append(home);
GROUPS.forEach(function (g) {
  nav.append(el('p', 'nav-group', g.name));
  var ol = el('ol');
  g.items.forEach(function (i) {
    var li = el('li'), a = el('a');
    a.href = '#' + TOPICS[i].id;
    a.append(el('span', 'n', pad(i + 1)), el('span', 't', TOPICS[i].title));
    li.append(a);
    ol.append(li);
  });
  nav.append(ol);
});

/* ── build: hero stats + contents ────────────────────────────── */
var subCount = TOPICS.reduce(function (s, t) { return s + (t.slides || []).length; }, 0);
[[GROUPS.length, 'grup'], [TOPICS.length, 'öğrenim hedefi'], [subCount, 'alt başlık']].forEach(function (s, i) {
  var d = el('div', 'stat rv' + (i ? ' d' + i : ''));
  var n = el('span', 'n', '0');
  n.dataset.count = s[0];
  d.append(n, el('span', 'l', s[1]));
  $('#stats').append(d);
});

var toc = $('#toc');
GROUPS.forEach(function (g, gi) {
  var card = el('div', 'toc-card rv' + (gi ? ' d' + Math.min(gi, 3) : ''));
  card.append(el('div', 'kicker', 'Grup ' + (gi + 1)), el('h2', 'toc-title', g.name));
  var ol = el('ol');
  g.items.forEach(function (i) {
    var li = el('li'), a = el('a');
    a.href = '#' + TOPICS[i].id;
    a.append(el('span', 'n', pad(i + 1)), el('span', 't', TOPICS[i].title));
    li.append(a);
    ol.append(li);
  });
  card.append(ol);
  toc.append(card);
});

/* ── build: topic sections ───────────────────────────────────── */
function wrapTables(root) {
  $$('table', root).forEach(function (tb) {
    var sc = el('div', 'table-scroll');
    sc.tabIndex = 0;
    tb.parentNode.insertBefore(sc, tb);
    sc.append(tb);
  });
  // Slide images become focusable zoom buttons that open the lightbox.
  $$('figure.slide-img img', root).forEach(function (img) {
    var b = el('button', 'zoom');
    b.type = 'button';
    b.setAttribute('aria-label', 'Büyüt: ' + (img.alt || 'görsel'));
    img.parentNode.insertBefore(b, img);
    b.append(img);
  });
}

var topicsEl = $('#topics');
GROUPS.forEach(function (g, gi) {
  var band = el('div', 'group-band');
  var bi = el('div', 'inner');
  bi.append(el('span', 'sec-num', 'GRUP ' + (gi + 1) + '/' + GROUPS.length), el('h2', 'band-title', g.name));
  band.append(bi);
  topicsEl.append(band);

  g.items.forEach(function (i) {
    var t = TOPICS[i];
    var sec = el('section', 'topic');
    sec.id = t.id;
    sec.tabIndex = -1;
    var inner = el('div', 'inner');
    var head = el('div', 'sec-head');
    head.append(el('span', 'sec-num', pad(i + 1)), el('span', 'kicker', t.group));
    inner.append(head, el('h2', 'topic-title', t.title));

    (t.slides || []).forEach(function (s) {
      var sub = el('article', 'subsec rv');
      if (s.heading) sub.append(el('h3', 'sub-title', s.heading));
      var body = el('div', 'body');
      body.innerHTML = s.html || ''; // trusted author content from content.js
      wrapTables(body);
      sub.append(body);
      // Slide images move to a side column next to the text (stacks below on narrow screens).
      var figs = $$('figure.slide-img', body);
      if (figs.length) {
        var media = el('div', 'media');
        figs.forEach(function (f) { media.append(f); });
        sub.classList.add('has-media');
        sub.append(media);
      }
      inner.append(sub);
    });

    sec.append(inner);
    topicsEl.append(sec);
  });
});

/* ── hero title: split into letters (animation in css) ───────── */
(function () {
  var h = $('#hero-title'), i = 0, frag = document.createDocumentFragment();
  Array.prototype.slice.call(h.childNodes).forEach(function (node) {
    if (node.nodeType === 3) {
      node.textContent.split(/(\s+)/).forEach(function (word) {
        if (!word) return;
        if (/^\s+$/.test(word)) { frag.append(word); return; }
        var w = el('span', 'word');
        word.split('').forEach(function (c) {
          var s = el('span', 'ch', c);
          s.style.setProperty('--i', i++);
          w.append(s);
        });
        frag.append(w);
      });
    } else {
      node.classList.add('ch');
      node.style.setProperty('--i', i++);
      frag.append(node);
    }
  });
  h.setAttribute('aria-label', h.textContent);
  h.textContent = '';
  h.append(frag);
  $$('.word, .ch', h).forEach(function (n) { n.setAttribute('aria-hidden', 'true'); });
})();

/* ── scroll reveal ───────────────────────────────────────────── */
var canIO = 'IntersectionObserver' in window;
var ro = canIO && new IntersectionObserver(function (es) {
  es.forEach(function (e) {
    if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
$$('.rv').forEach(function (n) { if (ro) ro.observe(n); else n.classList.add('in'); });

/* ── counters ────────────────────────────────────────────────── */
function countUp(n) {
  var target = +n.dataset.count, t0 = null;
  if (reducedMQ.matches) { n.textContent = target; return; }
  requestAnimationFrame(function tick(ts) {
    if (!t0) t0 = ts;
    var p = Math.min((ts - t0) / 1100, 1);
    n.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  });
}
var co = canIO && new IntersectionObserver(function (es) {
  es.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); co.unobserve(e.target); } });
}, { threshold: 0.6 });
$$('[data-count]').forEach(function (n) { if (co) co.observe(n); else n.textContent = n.dataset.count; });

/* ── scrollspy: active section in rail + hash kept for reload ── */
var rail = $('#rail'), railNow = $('#rail-now');
var navLinks = $$('a', nav);
var sections = navLinks.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
var current = -1;
function setActive(i) {
  if (i === current || i < 0) return;
  current = i;
  navLinks.forEach(function (a, j) {
    a.classList.toggle('on', j === i);
    if (j === i) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
  });
  railNow.textContent = i === 0 ? 'Giriş' : pad(i) + ' · ' + TOPICS[i - 1].title;
  var h = '#' + sections[i].id;
  if (location.hash !== h && history.replaceState) history.replaceState(null, '', h);
}
if (canIO) {
  // A section is "current" while it crosses a thin band at ~35% of the viewport.
  var so = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) setActive(sections.indexOf(e.target)); });
  }, { rootMargin: '-35% 0px -64% 0px' });
  sections.forEach(function (s) { if (s) so.observe(s); });
}

/* ── scroll progress + back-to-top ───────────────────────────── */
var toTop = $('#to-top'), ticking = false;
function onScroll() {
  ticking = false;
  var max = document.documentElement.scrollHeight - innerHeight;
  rail.style.setProperty('--p', max > 0 ? Math.min(scrollY / max, 1) : 0);
  toTop.classList.toggle('show', scrollY > innerHeight * 0.8);
}
addEventListener('scroll', function () {
  if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
}, { passive: true });
onScroll();

/* ── compact rail (tablet portrait): toggle the nav drawer ───── */
var toggle = $('#rail-toggle');
function setOpen(open) {
  rail.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
}
toggle.addEventListener('click', function () { setOpen(!rail.classList.contains('open')); });
nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && rail.classList.contains('open')) { setOpen(false); toggle.focus(); }
});

/* ── keyboard: j / k jump between sections, f fullscreen ─────── */
function jump(dir) {
  var i = Math.min(Math.max((current < 0 ? 0 : current) + dir, 0), sections.length - 1);
  sections[i].scrollIntoView({ behavior: reducedMQ.matches ? 'auto' : 'smooth' });
  sections[i].focus({ preventScroll: true });
}
document.addEventListener('keydown', function (e) {
  if (e.altKey || e.ctrlKey || e.metaKey || lb.open || /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
  var k = e.key.toLowerCase();
  if (k === 'j') jump(1);
  else if (k === 'k') jump(-1);
  else if (k === 'f' && canFs) toggleFs();
  else return;
  e.preventDefault();
});

/* ── fullscreen ──────────────────────────────────────────────── */
var root = document.documentElement, fsBtn = $('#btn-full');
var canFs = !!(root.requestFullscreen || root.webkitRequestFullscreen);
var fsEl = function () { return document.fullscreenElement || document.webkitFullscreenElement; };
function toggleFs() {
  if (fsEl()) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
  else {
    var r = (root.requestFullscreen || root.webkitRequestFullscreen).call(root);
    if (r && r.catch) r.catch(function () {});
  }
}
function syncFs() { fsBtn.setAttribute('aria-pressed', fsEl() ? 'true' : 'false'); }
if (canFs) {
  fsBtn.addEventListener('click', toggleFs);
  document.addEventListener('fullscreenchange', syncFs);
  document.addEventListener('webkitfullscreenchange', syncFs);
} else {
  fsBtn.hidden = true; // e.g. iPhone Safari has no element fullscreen
}

/* ── FAQ accordion: smooth height on top of native <details> ── */
document.addEventListener('click', function (e) {
  var sum = e.target.closest('.faq-q');
  if (!sum || reducedMQ.matches || !Element.prototype.animate) return; // native toggle otherwise
  var d = sum.parentNode, a = $('.faq-a', d);
  e.preventDefault();
  if (d._anim) d._anim.cancel();
  if (!d.open) {
    d.open = true;
    d._anim = a.animate([{ height: '0px', opacity: 0 }, { height: a.scrollHeight + 'px', opacity: 1 }],
      { duration: 280, easing: EASE });
  } else {
    d.classList.add('closing');
    d._anim = a.animate([{ height: a.offsetHeight + 'px', opacity: 1 }, { height: '0px', opacity: 0 }],
      { duration: 200, easing: EASE });
    d._anim.onfinish = function () { d.open = false; d.classList.remove('closing'); };
  }
  d._anim.oncancel = function () { d.classList.remove('closing'); };
});

/* ── wide tables: sticky first column only when they really overflow ── */
var scrollers = $$('.table-scroll');
function markWide() {
  scrollers.forEach(function (sc) { sc.classList.toggle('is-wide', sc.scrollWidth > sc.clientWidth + 1); });
}
markWide();
addEventListener('resize', markWide);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(markWide);

/* ── lightbox: grows out of the thumbnail (FLIP), native <dialog> handles focus + Esc ── */
var lb = $('#lightbox'), lbImg = $('#lb-img'), lbCap = $('#lb-cap');
var lbFrom = null, lbClosing = false;
function motion() { return !reducedMQ.matches && !!Element.prototype.animate; }
function flipFrames(fromEl) {
  var a = fromEl.getBoundingClientRect(), b = lbImg.getBoundingClientRect();
  if (!a.width || !b.width) return null;
  var dx = (a.left + a.width / 2) - (b.left + b.width / 2), dy = (a.top + a.height / 2) - (b.top + b.height / 2);
  return [{ transform: 'translate(' + dx + 'px,' + dy + 'px) scale(' + (a.width / b.width) + ')', opacity: .4 },
          { transform: 'none', opacity: 1 }];
}
function openLightbox(btn) {
  var img = $('img', btn), fig = btn.closest('figure'), cap = fig && $('figcaption', fig);
  lbFrom = btn;
  lbImg.src = img.currentSrc || img.src;
  lbImg.alt = img.alt;
  lbCap.textContent = cap ? cap.textContent : '';
  lbCap.hidden = !cap;
  document.documentElement.classList.add('lb-lock');
  lb.showModal();
  if (!motion()) return;
  var run = function () {
    var f = flipFrames(img);
    if (f) lbImg.animate(f, { duration: 320, easing: EASE });
    lbCap.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, delay: 150, easing: EASE, fill: 'backwards' });
  };
  if (lbImg.complete && lbImg.naturalWidth) run(); else lbImg.onload = function () { lbImg.onload = null; run(); };
}
function closeLightbox() {
  if (!lb.open || lbClosing) return;
  var done = function () {
    lbClosing = false;
    lb.classList.remove('closing');
    lb.close();
    document.documentElement.classList.remove('lb-lock');
    if (lbFrom) lbFrom.focus({ preventScroll: true });
  };
  var f = motion() && lbFrom && flipFrames($('img', lbFrom));
  if (!f) { done(); return; }
  lbClosing = true;
  lb.classList.add('closing');
  lb.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: 'ease-in', fill: 'forwards' });
  var a = lbImg.animate(f.slice().reverse(), { duration: 220, easing: 'ease-in', fill: 'forwards' });
  a.onfinish = function () { done(); lb.getAnimations().forEach(function (x) { x.cancel(); }); a.cancel(); };
}
document.addEventListener('click', function (e) {
  var z = e.target.closest('.zoom');
  if (z) openLightbox(z);
});
$('#lb-close').addEventListener('click', closeLightbox);
lb.addEventListener('click', function (e) { if (e.target !== lbImg) closeLightbox(); }); // backdrop / caption tap
lb.addEventListener('cancel', function (e) { e.preventDefault(); closeLightbox(); }); // Esc
lb.addEventListener('close', function () { document.documentElement.classList.remove('lb-lock'); });

/* ── initial position: sections are built by JS, so re-apply the hash ── */
if (location.hash.length > 1) {
  var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (target) {
    // jump instantly; css smooth scrolling would animate from the top on reload
    root.style.scrollBehavior = 'auto';
    target.scrollIntoView();
    root.style.scrollBehavior = '';
  }
}
})();
