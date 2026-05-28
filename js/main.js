/* ============================================================
   Dream Home — Barbería & Social Club
   main.js
   ============================================================ */

/* ── NAV SCROLL ────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── HAMBURGER / MOBILE MENU ───────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose  = document.getElementById('menu-close');

function openMenu() {
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
  hamburger.setAttribute('aria-expanded', 'true');
  hamburger.setAttribute('aria-label', 'Cerrar menú');
}
function closeMenu() {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Abrir menú');
}

hamburger.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);

// Cerrar al hacer click en un link
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Cerrar al hacer click fuera del panel
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) closeMenu();
});

// Cerrar con Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

/* ── SCROLL REVEAL ─────────────────────────────────────── */
const reveals  = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

/* ── GALLERY CLIP-PATH REVEAL ──────────────────────────── */
const galleryItems = document.querySelectorAll('.gallery-item');

function revealGalleryItem(el) {
  if (!el.classList.contains('visible')) {
    el.classList.add('visible');
  }
}

function checkGalleryItems() {
  galleryItems.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      revealGalleryItem(el);
    }
  });
}

const galleryObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      revealGalleryItem(entry.target);
      galleryObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -5% 0px' });

galleryItems.forEach(el => galleryObserver.observe(el));

window.addEventListener('scroll', checkGalleryItems, { passive: true });
checkGalleryItems();

/* ── REVIEWS CAROUSEL (swipe + auto 6 s) ──────────────── */
(function () {
  const track    = document.getElementById('reviews-track');
  const dotsWrap = document.getElementById('reviews-dots');
  if (!track || !dotsWrap) return;

  const cards = Array.from(track.querySelectorAll('.review-card'));
  let current = 0;
  let timer   = null;
  let touchX  = 0;

  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'reviews-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => { goTo(i); resetTimer(); });
    dotsWrap.appendChild(dot);
  });

  const dots = dotsWrap.querySelectorAll('.reviews-dot');

  function goTo(index) {
    cards[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + cards.length) % cards.length;
    cards[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 6000);
  }

  goTo(0);
  resetTimer();

  track.addEventListener('touchstart', e => {
    touchX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', e => {
    const delta = touchX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      goTo(delta > 0 ? current + 1 : current - 1);
      resetTimer();
    }
  }, { passive: true });
})();

/* ── TEAM SCROLL DOTS ──────────────────────────────────── */
const teamGrid = document.getElementById('team-grid');
const teamDots = document.getElementById('team-dots');

if (teamGrid && teamDots) {
  const swipeHint    = document.getElementById('team-swipe-hint');
  const cards        = teamGrid.querySelectorAll('.team-card');
  const mobileQuery  = window.matchMedia('(max-width: 600px)');
  let hintInitialized = false;

  function buildDots() {
    teamDots.innerHTML = '';
    cards.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'team-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => {
        cards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
      teamDots.appendChild(dot);
    });
  }

  function updateActiveDot() {
    const dots = teamDots.querySelectorAll('.team-dot');
    if (!dots.length) return;
    const cardWidth = cards[0].offsetWidth + 12;
    const active = Math.round(teamGrid.scrollLeft / cardWidth);
    dots.forEach((d, i) => d.classList.toggle('active', i === active));
  }

  function handleMediaChange(e) {
    if (e.matches) {
      buildDots();
      if (!hintInitialized && swipeHint) {
        teamGrid.addEventListener('scroll', () => swipeHint.classList.add('hidden'), { passive: true, once: true });
        setTimeout(() => swipeHint.classList.add('hidden'), 6000);
        hintInitialized = true;
      }
    } else {
      teamDots.innerHTML = '';
    }
  }

  teamGrid.addEventListener('scroll', updateActiveDot, { passive: true });
  mobileQuery.addEventListener('change', handleMediaChange);
  handleMediaChange(mobileQuery);
}

/* ── PRODUCTOS TOGGLE ──────────────────────────────────── */
const productosTrigger = document.getElementById('productos-trigger');
const productosPanel   = document.getElementById('productos-panel');

if (productosTrigger && productosPanel) {
  productosTrigger.addEventListener('click', () => {
    const open = productosPanel.classList.toggle('open');
    productosTrigger.setAttribute('aria-expanded', open);
    productosPanel.setAttribute('aria-hidden', !open);

    if (open) {
      productosTrigger.querySelector('.productos-trigger-label').textContent = 'Ocultar productos';
      setTimeout(() => {
        productosTrigger.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    } else {
      productosTrigger.querySelector('.productos-trigger-label').textContent = 'Conocé nuestros productos';
    }
  });
}
