# Leer el Cielo

Sitio de las jornadas astronómicas **Leer el Cielo** (Biblioteca Central Estatal Wigberto Jiménez Moreno, León, Gto.).

## Publicar con GitHub Pages
1. Sube estos archivos a la rama `main` del repositorio.
2. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)`**.
3. El sitio queda en `https://alxogm.github.io/leerelcielo/`.

## Agregar un año nuevo
1. En `index.html`, dentro de `<nav class="year-tabs">`, copia el botón y cambia el año:
   `<button role="tab" id="tab-2027" aria-controls="year-2027" data-year="2027" aria-selected="false">2027</button>`
2. Copia el bloque `<section class="year" id="year-2026" ...>` completo, cámbiale el año en `id`, `data-year` y `aria-labelledby`, y actualiza el contenido.
3. Pon el póster nuevo en `assets/img/poster-2027.jpg`.

La página abre por defecto en el año más reciente (el último botón). Se puede enlazar a un año directo: `.../leerelcielo/#2026`.

## Estructura
- `index.html` — contenido y pestañas por año
- `assets/css/style.css` — estilos (colores del póster)
- `assets/js/main.js` — cambio de pestañas
- `assets/img/` — pósters
- `assets/logos/` — logos institucionales en blanco
