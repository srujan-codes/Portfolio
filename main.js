// ============================================================
// main.js — Srujan Vooturi Portfolio
// ============================================================

// === THEME TOGGLE ===
// Reads preference from localStorage (set inline in <head> to prevent flash).
// Toggles data-theme on <html>. Persists choice. Reacts to OS changes.
function initThemeToggle() {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  var root = document.documentElement;
  var KEY = 'theme';

  function isDark() {
    return root.getAttribute('data-theme') !== 'light';
  }

  function setTheme(mode) {
    if (mode === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem(KEY, mode);
  }

  btn.addEventListener('click', function () {
    setTheme(isDark() ? 'light' : 'dark');
  });

  // react if OS theme changes and user hasn't manually picked
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!localStorage.getItem(KEY)) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}

// === TYPEWRITER EFFECT ===
// Cycles through taglines in the hero subtitle.
// Starts after the hero entrance animation finishes (~1.2 s).
function initTypewriter() {
  var el = document.getElementById('typewriter');
  if (!el) return;

  var strings = [
    'LLM Engineer & AI Systems Builder',
    'Multi-Agent Systems Architect',
    'Full Stack Developer'
  ];

  var sIdx = 0, cIdx = 0, deleting = false;

  function tick() {
    var str = strings[sIdx];

    if (!deleting) {
      el.textContent = str.substring(0, cIdx + 1);
      cIdx++;
      if (cIdx === str.length) { deleting = true; return setTimeout(tick, 2200); }
      return setTimeout(tick, 70);
    }

    el.textContent = str.substring(0, cIdx - 1);
    cIdx--;
    if (cIdx === 0) {
      deleting = false;
      sIdx = (sIdx + 1) % strings.length;
      return setTimeout(tick, 500);
    }
    setTimeout(tick, 35);
  }

  setTimeout(tick, 1200);
}

// === SCROLL ANIMATIONS ===
// Adds .visible to [data-animate] elements as they enter the viewport.
function initScrollAnimations() {
  var els = document.querySelectorAll('[data-animate]');

  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  els.forEach(function (el) { io.observe(el); });
}

// === STICKY NAV ===
// Adds .scrolled class after 50px and highlights the active section link.
function initStickyNav() {
  var nav = document.getElementById('nav');
  var links = document.querySelectorAll('.nav-link');
  var sections = document.querySelectorAll('.section, #hero');

  function update() {
    nav.classList.toggle('scrolled', window.scrollY > 50);

    var y = window.scrollY + 120;
    sections.forEach(function (s) {
      if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
        var id = s.id;
        links.forEach(function (l) {
          l.classList.toggle('active', l.getAttribute('href') === '#' + id);
        });
      }
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

// === MOBILE NAV ===
function initMobileNav() {
  var btn = document.getElementById('nav-hamburger');
  var menu = document.getElementById('nav-links');
  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      btn.classList.remove('open');
      menu.classList.remove('open');
    });
  });
}

// === INIT ===
document.addEventListener('DOMContentLoaded', function () {
  initThemeToggle();
  initTypewriter();
  initScrollAnimations();
  initStickyNav();
  initMobileNav();
});
