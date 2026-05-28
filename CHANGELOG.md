# CHANGELOG — Dream Home Barbería & Social Club

Registro de cambios aplicados al sitio web.  
Formato: `fecha — sección — descripción del cambio — solicitado por`

---

## v1.0 — Versión inicial

**2026-05-18**
- Proyecto iniciado. Estructura base: `index.html`, `css/styles.css`, `js/main.js`
- Secciones creadas: Hero, Servicios, Galería, Equipo, Reseñas, Contacto, Reservar, Footer
- Video hero desktop (`heroe.mp4`) y mobile (`Heroe1.mp4`) integrados
- Integración con Puntia para reservas online
- Mapa Google Maps con coordenadas 9.8582392, -83.9229068
- Fotos del equipo: Carlos Torres, Jose Alfredo, Fabiana Serrano
- Diseño responsive: breakpoints 900px y 600px

---

## v1.1 — Mejoras de animaciones (2026-05-21)

**2026-05-21 — Animaciones & Microinteracciones — Solicitado por: Steven**

- [Global] Variables CSS de easing personalizadas: `--ease-out`, `--ease-in-out`, `--ease-drawer`
- [Hero] `translateY` de entrada reducido 30px → 20px; secuencia acelerada (0.8s → 0.6–0.7s); stagger 200ms → 150ms; curva `var(--ease-out)` en todos los keyframes
- [Hero] `scrollPulse` simplificado a solo `opacity` — eliminado `scaleY` que distorsionaba el gradiente
- [Scroll Reveal] `translateY` reducido 40px → 24px; easing `var(--ease-out)`; delays máximos de 0.4s → 0.25s
- [Botones] `:active { transform: scale(0.97) }` en `btn-primary`, `btn-book` y `nav-cta` — feedback de pulsación inmediato
- [Botones] Hovers con `translateY` guardados detrás de `@media (hover: hover) and (pointer: fine)`
- [Nav] Subrayado migrado de animación `width` → `transform: scaleX()` con `transform-origin: left` (GPU-accelerated)
- [Galería] Zoom de imágenes 0.6s → 0.5s con `var(--ease-out)`; hover guardado detrás de media query
- [Equipo] Hover de foto guardado detrás de `@media (hover: hover)` — corrige bug táctil en móvil
- [Mobile Menu] Stagger en links al abrir: cascada desde `translateX(16px)`, delays 0.15s–0.35s
- [Accesibilidad] `@media (prefers-reduced-motion: reduce)` añadido — desactiva animaciones de movimiento para usuarios sensibles

**2026-05-21 — Galería: animaciones de entrada — Solicitado por: Steven**

- [Galería] Reemplazado reveal de bloque único por animación individual por item: `translateY(40px) scale(0.9)` → `translateY(0) scale(1)` con `opacity`, duración 0.75s
- [Galería] Stagger escalonado por item (0ms, 100ms, 200ms, 150ms, 60ms) para entrada en cascada
- [Galería] Zoom hover aumentado de scale(1.05) → scale(1.07)
- [Galería] Textos de overlay con slide-up en hover: "Servicio en acción", "Estética & Cuidado", "Corte clásico", "Experiencia premium", "Detalle & Precisión"
- [Galería] Observer dual: IntersectionObserver + fallback en evento `scroll` para compatibilidad total
- [Galería] Aplica igual en desktop y mobile (columna única en 600px)

<!-- PLANTILLA PARA NUEVAS ENTRADAS:

**YYYY-MM-DD**
- [Sección] Descripción del cambio — Solicitado por: [nombre]

-->

---

## v1.2 — Optimización SEO (2026-05-23)

**2026-05-23 — SEO On-Page & Técnico — Solicitado por: Steven**

- [Head] `<title>` actualizado con ubicación: "Dream Home — Barbería & Social Club | Cartago, Costa Rica"
- [Head] `<meta name="description">` agregada con keywords locales y llamado a la acción
- [Head] `<link rel="canonical">` apuntando a la URL de GitHub Pages (pendiente actualizar a dominio de producción)
- [Head] Favicon referenciado en 3 variantes: `favicon.ico` (raíz), `favicon-32x32.png`, `favicon-16x16.png`
- [Head] Open Graph tags agregados: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`
- [Head] Twitter Card tags agregados: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [Schema] JSON-LD tipo `BarberShop` agregado antes de `</body>`: nombre, dirección, coordenadas, teléfono, email, horario, redes sociales
- [Hero] Eyebrow actualizado: "Barbería & Social Club" → "Barbería & Social Club · Cartago, Costa Rica"
- [Videos] Atributo `poster` agregado a los 3 videos (`heroe.mp4`, `Heroe1.mp4`, `ServicioVideo.mp4`) — evita pantalla negra durante carga
- [Equipo] Alt corregido: `alt="Carlos Quesada"` → `alt="Carlos Torres"`
- [Contacto] `<div class="contact-info">` migrado a `<address class="contact-info">` para semántica correcta
- [Raíz] Archivo `robots.txt` creado: permite indexación completa, referencia al sitemap
- [Raíz] Archivo `sitemap.xml` creado con URL canónica, prioridad 1.0 y frecuencia mensual
- [Raíz] `favicon.ico` copiado a la raíz del proyecto (browsers lo buscan en `/` por defecto)

---

## v1.3 — UX móvil, carrusel y copywriting (2026-05-23)

**2026-05-23 — Hero móvil — Solicitado por: Steven**

- [Hero] Eyebrow simplificado: removido "· Cartago, Costa Rica" (señal de ubicación delegada a Schema.org y `<title>`)
- [Hero] `font-size` del eyebrow reducido a `0.58rem` y `letter-spacing` a `0.18em` en móvil para evitar desborde visual
- [Hero] Subtítulo (`hero-sub`) en móvil: color cambiado de `#9a9a9a` a `rgba(232,224,216,0.85)`, `font-weight` 300→400, `text-shadow` añadido para legibilidad sobre video
- [Schema] JSON-LD `BarberShop` movido a posición semántica correcta en `<head>` (después de Open Graph/Twitter, antes de fuentes)
- [Hero] H2 de galería corregido de "Dream Home" a "La Experiencia Dream Home" para evitar duplicado de H1 y mejorar señal SEO

**2026-05-23 — Reseñas: carrusel automático — Solicitado por: Steven**

- [Reseñas] Carrusel convertido a rotación automática cada 10 s — eliminados controles manuales (flechas/swipe)
- [Reseñas] CSS migrado de layout scroll horizontal a grid overlay (cards apiladas con `opacity`/`visibility`) aplicable a todos los breakpoints
- [Reseñas] Puntos indicadores permanecen visibles pero son solo decorativos (no clickeables)
- [Reseñas] Sección ahora funciona igual en desktop y móvil

**2026-05-23 — Copywriting — Solicitado por: Steven**

- [Galería] `section-sub` añadido: "Antes de vivirlo, miralo." con estilo Cormorant Garamond itálica
- [Servicios] Subtítulo actualizado: "Ahora elegís." (corto, directo)
- [Reseñas] Subtítulo ajustado a enfoque de comunidad y pertenencia

**2026-05-23 — Menú móvil — Solicitado por: Steven**

- [Menú] Botón "Reservar" (calendario + label) eliminado del área de íconos sociales del menú móvil
- [CSS] Regla `.mobile-social-btn--reserve` eliminada de `styles.css`

---

## v1.4 — Redes sociales, productos, reseñas reales y mejoras UX (2026-05-24)

**2026-05-24 — Galería — Solicitado por: Steven**

- [Galería] `gallery-overlay` ahora visible en mobile por defecto — media query `(hover: none), (pointer: coarse)` con `opacity: 1` y texto sin transform

**2026-05-24 — Redes sociales — Solicitado por: Steven**

- [Mobile menu] Botón TikTok agregado (`@dream.homecr`) junto a Instagram, WhatsApp y Facebook
- [Footer] Link TikTok agregado en sección "Síguenos" con ícono SVG y handle `@dream.homecr`
- [Schema] URL de TikTok agregada al array `sameAs` del JSON-LD

**2026-05-24 — Reseñas — Solicitado por: Steven**

- [Reseñas] Swipe táctil agregado en mobile: touchstart/touchend con threshold de 40px, avanza o retrocede
- [Reseñas] Auto-avance reducido de 10s → 6s; timer se reinicia en cada swipe manual
- [Reseñas] Desktop (>900px): 3 cards visibles simultáneamente en grid de 3 columnas iguales con hover `translateY(-5px)`
- [Reseñas] Textos reales de Google Maps reemplazados: Jose Julian Orozco, Esteban Lafuente, Sebastian Garcia Monge

**2026-05-24 — Equipo — Solicitado por: Steven**

- [Equipo] Paulino Siles Serrano agregado como 4to miembro — rol: Barbero, foto placeholder `Carlos.jpg` (pendiente foto real)

**2026-05-24 — Instagram CTA strip — Solicitado por: Steven**

- [Galería] Banner full-width debajo de la galería: ícono IG + `@dreamhome_dhcr` + texto CTA + "Ver perfil →"
- [Galería] En mobile: layout en columna alineado a la izquierda
- [Galería] Texto del strip cambiado de `--gray` a `--offwhite` y de 1.1rem → 1.25rem para mejor visibilidad

**2026-05-24 — Sección Productos — Solicitado por: Steven**

- [Productos] Sección expandible agregada después de Servicios — trigger tipo barra full-width con animación de flecha rotatoria
- [Productos] Panel con 3 columnas desktop / 2 tablet / scroll horizontal snap en mobile
- [Productos] 3 productos placeholder: Pomada Fijadora (₡4.500), Aceite para Barba (₡6.000), Shampoo Premium (₡5.500)
- [Productos] Cada card incluye link "Más información →" a WhatsApp con mensaje pre-llenado por producto
- [Productos] Texto del trigger cambia entre "Conocé nuestros productos" / "Ocultar productos" según estado
- [JS] Toggle de panel con `aria-expanded`, `aria-hidden` y scroll suave al trigger al abrir

---

## v1.5 — Equipo en 4 columnas, servicios completos y nuevas fotos (2026-05-26)

**2026-05-26 — Equipo — Solicitado por: Steven**

- [Equipo] Grid desktop cambiado de `repeat(3, 1fr)` a `repeat(4, 1fr)` — los 4 miembros quedan en una sola fila
- [Equipo] Fotos reales agregadas: `Fabiana.JPG` y `Paulino.JPG`

**2026-05-26 — Servicios — Solicitado por: Steven**

- [Servicios] 6 servicios faltantes agregados a la columna Básicos (comparados contra sistema Puntia):
  - Recorte de Barba (básico) — ₡6,500
  - Mascarilla — ₡3,500
  - Afeitado Completo de Cabeza — ₡7,500
  - Corte Cabello Largo / Tijera — ₡10,000
  - Nanoplastia — ₡22,000
  - Corte de Cabello Corto + Recorte de Barba — ₡10,600

**2026-05-26 — Assets — Solicitado por: Steven**

- [Hero] Video `heroe.mp4` actualizado con versión nueva
- [Productos] Foto `cremas.jpg` agregada

---

## v1.6 — Tipografía hero, mapa mejorado y video en galería (2026-05-27)

**2026-05-27 — Tipografía — Solicitado por: Steven**

- [Hero] Eyebrow `font-size` aumentado: 0.65rem → 0.75rem
- [Hero] Subtítulo `hero-sub` aumentado: 1.2rem → 1.6rem — mayor presencia visual
- [Global] `section-sub` aumentado: 1.15rem → 2rem — subtítulos de sección más impactantes

**2026-05-27 — Mapa de contacto — Solicitado por: Steven**

- [Contacto] `.map-box` borde cambiado a tono dorado: `rgba(200, 169, 110, 0.35)` + `border-radius: 4px` + `box-shadow` de profundidad
- [Contacto] `.map-box::after` agregado: gradiente degradado hacia abajo que suaviza el borde inferior del mapa
- [Contacto] Botones de navegación del mapa: `z-index: 2` para que queden sobre el gradiente

**2026-05-27 — Galería — Solicitado por: Steven**

- [Galería] Ítem 5: imagen estática `corte.jpg` reemplazada por video `trabajando.mp4` (autoplay, muted, loop)
- [Galería] Ruta de foto de Fabiana corregida: `img/Fabi.PNG` → `img/Fabiana.JPG`

**2026-05-27 — Equipo — Solicitado por: Steven**

- [Equipo] Nombre de Paulino acortado: "Paulino Siles Serrano" → "Paulino Siles"
- [Equipo] Foto de Alfredo actualizada (`Alfredo.jpg`)

**2026-05-27 — Proyecto — Solicitado por: Steven**

- [CLAUDE.md] Contexto completo del proyecto documentado para uso con Claude Code

---

## v1.7 — Accesibilidad, calidad de código y auditoría (2026-05-28)

**2026-05-28 — Accesibilidad — Solicitado por: Steven**

- [Nav] `<div class="hamburger">` migrado a `<button>` con `aria-label="Abrir menú"` y `aria-expanded="false"` — navegable por teclado y anunciado por lectores de pantalla
- [Nav] `aria-label` y `aria-expanded` se actualizan dinámicamente al abrir/cerrar el menú móvil
- [Nav] `<div class="nav-logo" onclick>` migrado a `<a href="#" class="nav-logo">` — semántica correcta, navegable por teclado
- [CSS] `.hamburger` reset de estilos de `<button>`: `background: none; border: none; padding: 0`
- [CSS] `.nav-logo` reset de estilos de `<a>`: `text-decoration: none; color: inherit`

**2026-05-28 — Video y assets — Solicitado por: Steven**

- [Galería] Video `trabajando.mp4` (ítem 5): atributo `poster="img/corte.jpg"` agregado — elimina pantalla negra al cargar
- [Galería] Inline styles del video eliminados (`style="width:100%;..."`) — ya cubiertos por `.gallery-item video` en CSS
- [Head] `<link rel="apple-touch-icon">` y `<link rel="manifest">` agregados al `<head>` — los archivos existían pero no estaban referenciados

**2026-05-28 — Imágenes — Solicitado por: Steven**

- [Img] `Fabiana.JPG` y `Paulino.JPG` renombrados a `Fabiana.jpg` y `Paulino.jpg` — extensiones normalizadas a minúscula para compatibilidad con Linux/GitHub Pages
- [Img] Referencias actualizadas en `index.html`
- [Img] Archivos huérfanos eliminados: `img/Fabi.PNG` e `img/Fabiana.png` (reemplazados en v1.5, no usados)
- [Img] Nombre de Paulino corregido en alt text: `alt="Paulino Siles Serrano"` → `alt="Paulino Siles"`

**2026-05-28 — JavaScript — Solicitado por: Steven**

- [Reseñas] Dots del carrusel ahora son clickables — click en un dot navega a esa reseña y reinicia el timer
- [Equipo] Team dots refactorizados con `matchMedia` — se inicializan/destruyen correctamente al rotar el dispositivo o cambiar el tamaño de ventana (antes solo se inicializaban una vez al cargar si `innerWidth <= 600`)
- [Equipo] Swipe hint solo se inicializa una vez (aunque se rote el dispositivo varias veces)

**2026-05-28 — SEO — Solicitado por: Steven**

- [Sitemap] `lastmod` actualizado a 2026-05-28

---

## v1.8 — Estructura de archivos y PWA (2026-05-28)

**2026-05-28 — Proyecto — Solicitado por: Steven**

- [Raíz] `gitignore` renombrado a `.gitignore` — git ahora sí ignora `.claude/`, `.gstack/` y `skills-lock.json`
- [Raíz] `site.webmanifest` movido de `img/` a la raíz — ubicación estándar; rutas de íconos corregidas a `img/android-chrome-*.png`; nombre y colores del manifest actualizados con la marca Dream Home
- [Head] `<link rel="manifest">` actualizado de `img/site.webmanifest` → `site.webmanifest`
- [Img] `img/favicon.ico` eliminado — era duplicado del `favicon.ico` en la raíz
- [Img] `Alfredo.JPG` renombrado a `Alfredo.jpg` en disco — extensión normalizada a minúscula (consistente con el resto)

---

## Notas de versiones futuras

- [ ] Publicación en dominio propio (dreamhomecr.com)
- [ ] Configuración Cloudflare Pages
- [ ] Google Search Console
- [ ] Imágenes adicionales galería (corte2.jpg pendiente de usar)
