# Dream Home — Barbería & Social Club

## Reglas de trabajo

- **No agregar Co-Authored-By en ningún commit.** Los commits deben tener solo el autor humano, sin líneas de autoría de Claude ni de ninguna herramienta de IA.
- Idioma de trabajo: español en todo (HTML, comentarios, mensajes de commit).
- No crear archivos de documentación adicionales salvo que el usuario lo pida.
- **Antes de cada commit, actualizar `CHANGELOG.md`** con una entrada nueva bajo la versión correspondiente. Formato: `YYYY-MM-DD — Sección — descripción — Solicitado por: Steven`. Si los cambios son suficientes para incrementar versión, crear una nueva sección `## vX.X`.

---

## El negocio

**Dream Home Barbería & Social Club** es una barbería premium en Cartago, Costa Rica. Su propuesta de valor es la experiencia de lujo masculina: cortes, barba, tratamientos y productos.

| Campo | Dato |
|---|---|
| Teléfono / WhatsApp | +506 8718-3932 |
| Email | dreamhomedhcr@gmail.com |
| Dirección | 200 m sur del Hospital Max Peralta, Cartago |
| Horario | Lunes–Sábado, 10:00 a.m. – 7:00 p.m. |
| Reservas | Plataforma Puntia |
| Instagram | @dreamhome_dhcr |
| TikTok | @dream.homecr |
| Coordenadas | 9.8582392, -83.9229068 |

**URL producción:** https://dreamhomedhcr.github.io/DreamHome/  
**Dominio futuro:** dreamhomecr.com  
**Repositorio:** https://github.com/StockAoki/DreamHome

---

## Equipo

| Nombre | Rol | Especialidad |
|---|---|---|
| Carlos Torres | Fundador / Barbero | Cortes clásicos y modernos |
| Jose Alfredo | Barbero | — |
| Fabiana Serrano | Esteticista | Tratamientos capilares |
| Paulino Siles | Barbero | — |

---

## Servicios y precios actuales

**Premium**

| Servicio | Precio |
|---|---|
| Corte Clásico + Barba | ₡10,000 |
| Degradado + Diseño | ₡12,000 |
| Tratamiento Capilar | ₡8,000 |
| Afeitado Tradicional | ₡9,000 |

**Básico**

| Servicio | Precio |
|---|---|
| Corte de Cabello Corto | ₡7,000 |
| Recorte de Barba (completo) | ₡8,500 |
| Tinte de Cabello | ₡14,000 |
| Recorte de Barba (básico) | ₡6,500 |
| Mascarilla | ₡3,500 |
| Afeitado Completo de Cabeza | ₡7,500 |
| Corte Cabello Largo / Tijera | ₡10,000 |
| Nanoplastia | ₡22,000 |
| Corte de Cabello Corto + Recorte de Barba | ₡10,600 |
| Corte de Niño | ₡6,000 |

**Productos**

| Producto | Precio |
|---|---|
| Pomada Fijadora | ₡4,500 |
| Aceite para Barba | ₡6,000 |
| Shampoo Premium | ₡5,500 |

Los productos se venden vía WhatsApp con link pre-llenado.

---

## Arquitectura del sitio

Sitio estático de una sola página (`index.html`). Sin framework ni bundler — HTML, CSS y JS puros.

```
DreamHome/
├── index.html          ← página única (665 líneas aprox.)
├── css/styles.css      ← todos los estilos (1705 líneas)
├── js/main.js          ← interactividad (186 líneas)
├── img/
│   ├── Carlos.jpg, Alfredo.JPG, Fabiana.JPG, Paulino.JPG  ← fotos equipo
│   ├── servicio.jpg, CorteCarlos.png, corte.jpg, corte2.jpg, cremas.jpg  ← galería
│   ├── logo.png
│   └── videos/
│       ├── Heroe.mp4       ← video hero desktop
│       ├── Heroe1.mp4      ← video hero móvil
│       ├── ServicioVideo.mp4
│       └── trabajando.mp4
├── robots.txt
├── sitemap.xml
└── CHANGELOG.md
```

### Secciones del index.html (en orden)

1. **Nav** — fija, logo + links + hamburger
2. **Menú móvil** — slide desde la derecha
3. **Hero** — video de fondo (desktop/móvil), título, CTAs
4. **Galería** — grid 5 ítems con videos e imágenes, franja CTA Instagram
5. **Servicios** — menú 2 columnas (Premium | Básico) con precios
6. **Productos** — panel expandible, 3 tarjetas con link WhatsApp
7. **Equipo** — grid 4 columnas con fotos y rol
8. **Reseñas** — carrusel automático (6s), swipe en móvil, grid en desktop
9. **Mini CTA** — bloque de llamada a la acción entre reseñas y contacto
10. **Contacto** — dirección, horarios, teléfono + mapa Google Maps embebido
11. **Reservar** — CTA grande (Puntia)
12. **Footer** — nav, redes, botón reserva

---

## Sistema de diseño

### Paleta (variables CSS)

| Variable | Valor | Uso |
|---|---|---|
| `--black` | #0a0a0a | Fondo principal |
| `--white` | #f5f0eb | Texto primario |
| `--offwhite` | #e8e0d8 | Texto de acento |
| `--gray` | #9a9a9a | Texto secundario |
| `--light-gray` | #1e1e1e | Fondo alternativo |
| `--accent` | #c8a96e | Dorado — énfasis, CTAs |
| `--accent-dim` | rgba(200,169,110,0.15) | Acento sutil |

### Fuentes (Google Fonts)

- **Playfair Display** — títulos principales (serif elegante)
- **Montserrat** — UI, nav, labels, precios
- **Cormorant Garamond** — eyebrows, subtítulos

### Easing functions

- `--ease-out`: cubic-bezier(0.23, 1, 0.32, 1)
- `--ease-in-out`: cubic-bezier(0.77, 0, 0.175, 1)
- `--ease-drawer`: cubic-bezier(0.32, 0.72, 0, 1)

### Responsive breakpoints

- **≤ 900px** — hamburger, servicios en 1 columna, galería reflowed
- **≤ 600px** — móvil: padding reducido, scroll horizontal en equipo y productos

---

## JavaScript — funcionalidades principales

| Feature | Descripción |
|---|---|
| Nav scroll | Clase `scrolled` al superar 60px, activa blur + border |
| Menú móvil | Hamburger → slide derecha; cierra con X, Esc o click afuera |
| Scroll reveal | IntersectionObserver sobre `.reveal`, threshold 0.12 |
| Galería reveal | Observer + fallback scroll, threshold 0.05 |
| Carrusel reseñas | Auto 6s, swipe 40px, resetea timer en manual |
| Dots equipo (móvil) | Scroll horizontal con dots interactivos, hint desaparece tras primer scroll |
| Toggle productos | Expande/colapsa, rota flecha 180°, hace scroll hasta el trigger |

---

## SEO y metadatos

- Schema.org `BarberShop` en JSON-LD (head)
- Open Graph (og:title, og:description, og:image, og:url, og:type, og:locale)
- Twitter Card (summary_large_image)
- Canonical: URL de GitHub Pages
- robots.txt: Allow all
- sitemap.xml: homepage, priority 1.0, monthly
- `<address>` semántico en sección de contacto

---

## Animaciones

- `@keyframes fadeUp` — aparece subiendo (translateY + opacity)
- `@keyframes fadeIn` — solo opacidad
- `@keyframes slowSpin` — rotación continua
- `@keyframes scrollPulse` — indicador de scroll parpadeante
- `.reveal` + `.visible` — activadas por IntersectionObserver
- `.reveal-delay-1` a `.reveal-delay-4` — delays escalonados
- `@media (prefers-reduced-motion: reduce)` — desactiva todo

---

## Historial de versiones (resumen)

**Versión actual: v1.6**

| Versión | Fecha | Cambio principal |
|---|---|---|
| v1.0 | 2026-05-18 | Estructura base, 8 secciones, hero con video |
| v1.1 | 2026-05-21 | Animaciones y microinteracciones |
| v1.2 | 2026-05-23 | SEO on-page: Schema.org, OG, sitemap, robots |
| v1.3 | 2026-05-23 | UX móvil, carrusel, copywriting |
| v1.4 | 2026-05-24 | TikTok, productos expandibles, reseñas reales |
| v1.5 | 2026-05-26 | Equipo 4 columnas, servicios completos, fotos nuevas |
| v1.6 | 2026-05-27 | Tipografía hero, mapa dorado, video en galería |

---

## Copy aprobado por sección

Estos textos están definidos y no deben cambiarse sin instrucción explícita.

| Sección | Elemento | Texto |
|---|---|---|
| Hero | Eyebrow | Barbería & Social Club |
| Hero | Título | Dream **Home** |
| Hero | Subtítulo | Porque un buen corte no solo se ve bien, se siente y se adapta a vos en nuestras manos. |
| Galería | Título | La Experiencia **Dream Home** |
| Galería | Subtítulo | Antes de vivirlo, miralo. |
| Servicios | Label | Lo que ofrecemos |
| Servicios | Título | Servicios & **Precios** |
| Equipo | Título | El **Equipo** |
| Equipo | Subtítulo | Conoce a los profesionales que te brindarán la mejor experiencia en Dream Home |
| Reseñas | Título | hablan por **nosotros** *(minúscula inicial — intencional)* |
| Mini CTA | Texto | ¿Listo para tu experiencia Dream Home? |
| Contacto | Título | Ubicación & **Contacto** |
| Reservar | Título | Reservá tu **Cita** |
| Reservar | Subtítulo | Agendá en línea y asegurate tu espacio con el equipo Dream Home. |

Los elementos en **negrita** corresponden al `<em>` en HTML (color dorado `--accent`).

---

## Decisiones de diseño — no revertir

Elecciones conscientes que ya fueron evaluadas y descartadas sus alternativas:

- **Carrusel de reseñas sin flechas en móvil** — solo swipe táctil. Las flechas se removieron en v1.3 por saturación visual.
- **Overlay de galería siempre visible en móvil** — en desktop aparece al hacer hover; en touch siempre está visible porque no hay hover.
- **Hero con dos videos separados** — `Heroe.mp4` para desktop, `Heroe1.mp4` para móvil. Están cortados para cada orientación; no intercambiar.
- **Equipo en móvil: scroll horizontal con dots** — no grid apilado. Los dots son interactivos y hay hint de swipe la primera vez.
- **Sección Servicios sin subtítulo** — tiene solo label ("Lo que ofrecemos") + título. No agregar subtítulo salvo que se pida.
- **Nombre de Paulino: "Paulino Siles"** — el apellido "Serrano" se quitó en v1.6. Usar siempre el nombre corto.

---

## Roadmap pendiente

- [ ] Migrar dominio a `dreamhomecr.com` (actualmente en GitHub Pages)
- [ ] Configurar Cloudflare Pages al hacer la migración
- [ ] Dar de alta en Google Search Console
- [ ] Usar `corte2.jpg` en galería (foto disponible, no usada aún)
