# VELOURA — Set Moldeador de Aire 5 en 1 (Prototipo Conceptual)

Landing page interactiva construida con **React 19 + TypeScript + Vite** a partir de la definición de producto y metadatos SEO en [`index.html`](index.html).

## Estructura del proyecto

- `index.html` — Punto de entrada, fuentes de Google (`Cormorant Garamond`, `Plus Jakarta Sans`, `JetBrains Mono`), Open Graph y JSON-LD (`schema.org/Product`).
- `public/assets/aistudio/` — Recursos fotográficos del producto y cabezales referenciados en los metadatos y secciones.
- `src/data/velouraData.ts` — Catálogo de los 5 cabezales, niveles térmicos, velocidades de flujo, pasos del ritual y ficha técnica.
- `src/components/` — Componentes modulares:
  - `Navbar.tsx` — Navegación editorial y menú móvil accesible.
  - `Hero.tsx` — Cabecera principal y métricas clave.
  - `AttachmentsShowcase.tsx` — Selector interactivo de los 5 cabezales intercambiables.
  - `ControlSimulator.tsx` — Simulador interactivo de la pantalla LED vertical y botón de encendido/ráfaga fría.
  - `EditorialLookbook.tsx` — Lookbook y ritual de moldeado en 3 pasos.
  - `SpecsAndPreorder.tsx` — Tabla de especificaciones técnicas y formulario de acceso anticipado (prototipo local).
  - `Footer.tsx` — Pie de página.

## Desarrollo local

```bash
npm install
npm run dev
```

## Validación y compilación

```bash
npm run lint
npm run build
```
