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

## Notas de versiones futuras

- [ ] Publicación en dominio propio (dreamhomecr.com)
- [ ] Configuración Cloudflare Pages
- [ ] Google Search Console
- [ ] Imágenes adicionales galería (corte2.jpg pendiente de usar)
