# Estructura para Contenido SEO Futuro

## Blog

La estructura está preparada en:
- `/src/pages/blog/` - Páginas del blog
- `/src/content/blog/` - Contenido en Markdown

### Crear un post de blog:

1. Crear archivo en `/src/content/blog/nombre-post.md`:

```markdown
---
title: "Cómo elegir alfombra para bebé"
description: "Guía completa para elegir la mejor alfombra para tu bebé"
pubDate: 2025-12-20
author: "ELEMATT"
image: "/blog/alfombra-bebe-guia.jpg"
tags: ["bebés", "alfombras", "guía"]
---

Contenido del post aquí...
```

2. Crear página de índice en `/src/pages/blog/index.astro`
3. Crear página de post individual en `/src/pages/blog/[slug].astro`

## FAQs

La estructura está preparada en:
- `/src/pages/faqs/` - Página de FAQs
- `/src/content/faqs/` - Preguntas en Markdown

### Crear una FAQ:

1. Crear archivo en `/src/content/faqs/pregunta-1.md`:

```markdown
---
question: "¿La alfombra es segura para recién nacidos?"
category: "Seguridad"
order: 1
---

Sí, la alfombra cumple con la normativa EN71 y está certificada 0+...
```

2. Crear página en `/src/pages/faqs/index.astro` que liste todas las FAQs

## Guías de Uso

Crear en `/src/pages/guias/`:
- `limpieza-alfombra.astro`
- `primeros-juegos.astro`
- `estimulacion-sensorial.astro`

## Beneficios SEO

- **Blog**: Tráfico orgánico por long-tail keywords
- **FAQs**: Featured snippets en Google
- **Guías**: Autoridad y engagement

