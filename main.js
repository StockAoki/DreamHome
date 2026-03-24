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
}
function closeMenu() {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
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

/* ── SCROLL REVEAL ─────────────────────────────────────── */
const reveals  = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

/* ── REVIEWS AUTO-ROTATE (mobile) ─────────────────────── */
(function () {
  if (window.innerWidth > 600) return;

  const track   = document.getElementById('reviews-track');
  const dotsWrap = document.getElementById('reviews-dots');
  if (!track || !dotsWrap) return;

  const cards = Array.from(track.querySelectorAll('.review-card'));
  let current = 0;
  let timer;

  // Crear dots
  cards.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'reviews-dot' + (i === 0 ? ' active' : '');
    btn.addEventListener('click', () => { goTo(i); resetTimer(); });
    dotsWrap.appendChild(btn);
  });

  const dots = dotsWrap.querySelectorAll('.reviews-dot');

  function goTo(index) {
    cards[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    cards[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo((current + 1) % cards.length); }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(next, 4500);
  }

  // Pausar al tocar
  track.addEventListener('touchstart', () => clearInterval(timer), { passive: true });
  track.addEventListener('touchend', resetTimer, { passive: true });

  goTo(0);
  resetTimer();
})();

/* ── TEAM SCROLL DOTS ──────────────────────────────────── */
const teamGrid = document.getElementById('team-grid');
const teamDots = document.getElementById('team-dots');

if (teamGrid && teamDots && window.innerWidth <= 600) {
  const swipeHint = document.getElementById('team-swipe-hint');
  if (swipeHint) {
    teamGrid.addEventListener('scroll', () => {
      swipeHint.classList.add('hidden');
    }, { passive: true, once: true });
    setTimeout(() => swipeHint.classList.add('hidden'), 6000);
  }
  const cards = teamGrid.querySelectorAll('.team-card');

  cards.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'team-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => {
      cards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
    teamDots.appendChild(dot);
  });

  const dots = teamDots.querySelectorAll('.team-dot');

  teamGrid.addEventListener('scroll', () => {
    const cardWidth = cards[0].offsetWidth + 12;
    const active = Math.round(teamGrid.scrollLeft / cardWidth);
    dots.forEach((d, i) => d.classList.toggle('active', i === active));
  }, { passive: true });
}
