# 🚀 Configuración SEO - ELEMATT

## ✅ IMPLEMENTADO

### 1. Meta Tags Básicos
- [x] Title optimizado para cada página
- [x] Description única por página
- [x] Keywords relevantes
- [x] Canonical URLs
- [x] Robots meta tags
- [x] Author meta tag
- [x] Language (es_ES)

### 2. Open Graph (Facebook, WhatsApp, LinkedIn)
- [x] og:type (website/product)
- [x] og:url
- [x] og:title
- [x] og:description
- [x] og:image (1200×630 px)
- [x] og:image:width
- [x] og:image:height
- [x] og:locale (es_ES)
- [x] og:site_name

### 3. Twitter Cards
- [x] twitter:card (summary_large_image)
- [x] twitter:url
- [x] twitter:title
- [x] twitter:description
- [x] twitter:image
- [x] twitter:creator

### 4. Schema.org (JSON-LD)
- [x] Organization schema
- [x] Logo
- [x] Social media links
- [x] Description

### 5. Archivos SEO
- [x] robots.txt
- [x] sitemap.xml
- [x] favicon.svg

### 6. Performance
- [x] Preconnect a Google Fonts
- [x] DNS Prefetch a Google Analytics
- [x] CSS minificado
- [x] Build optimizado

### 7. Accesibilidad
- [x] HTML semántico
- [x] Alt text en imágenes
- [x] ARIA labels
- [x] Contraste de colores

---

## 🔴 PENDIENTE - ALTA PRIORIDAD

### 1. Google Search Console
**Acción**:
1. Ir a: https://search.google.com/search-console/
2. Añadir propiedad: `elematt.com`
3. Verificar dominio (DNS o HTML)
4. Enviar sitemap: `https://elematt.com/sitemap.xml`

**Beneficio**: Ver cómo Google indexa tu web

---

### 2. Google Analytics 4
**Acción**:
1. Crear cuenta: https://analytics.google.com/
2. Copiar ID: `G-XXXXXXXXXX`
3. Descomentar código en `src/layouts/Layout.astro` (líneas 60-68)
4. Reemplazar `G-XXXXXXXXXX` con tu ID real

**Beneficio**: Ver tráfico, QR scans, conversiones

---

### 3. Imágenes Open Graph
**Acción**:
1. Crear imagen 1200×630 px para cada página
2. Incluir logo ELEMATT
3. Texto grande y legible
4. Guardar en `public/og/`

**Páginas**:
- `/og/home.jpg` → Inicio
- `/og/alfombra-150x180.jpg` → Producto 150×180
- `/og/alfombra-180x200.jpg` → Producto 180×200

---

### 4. Actualizar Sitemap
**Acción**:
1. Cuando publiques, actualizar `lastmod` en `public/sitemap.xml`
2. Enviar a Google Search Console
3. Configurar actualización automática (opcional)

---

## 🟡 PENDIENTE - MEDIA PRIORIDAD

### 5. Rich Snippets (Productos)
**Acción**: Añadir schema Product en páginas de productos

```javascript
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Alfombra Bebé 150×180",
  "image": "https://elematt.com/products/baby-mat/shared/hero-alfombra.jpeg",
  "description": "Alfombra bebé acolchada plegable...",
  "brand": {
    "@type": "Brand",
    "name": "ELEMATT"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://elematt.com/productos/alfombra-bebe/150x180",
    "priceCurrency": "EUR",
    "price": "XX.XX",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "ELEMATT"
    }
  }
}
```

**Beneficio**: Aparecer en Google Shopping, rich results

---

### 6. Breadcrumbs
**Acción**: Añadir breadcrumbs en páginas de productos

```
Inicio > Productos > Alfombra Bebé > 150×180
```

**Beneficio**: Mejor navegación, mejor SEO

---

### 7. Velocidad de Carga
**Acción**:
1. Probar en: https://pagespeed.web.dev/
2. Optimizar imágenes (WebP, lazy loading)
3. Minimizar CSS/JS
4. Usar CDN

**Objetivo**: >90 en PageSpeed Insights

---

### 8. SSL/HTTPS
**Acción**:
1. Configurar certificado SSL en hosting
2. Forzar HTTPS
3. Actualizar todas las URLs a HTTPS

**Beneficio**: Seguridad, mejor ranking en Google

---

## 🟢 PENDIENTE - BAJA PRIORIDAD

### 9. Redes Sociales
**Acción**:
1. Crear perfiles: Instagram, Facebook, TikTok
2. Añadir links en footer
3. Actualizar Schema.org con URLs reales

---

### 10. Blog
**Acción**:
1. Crear sección `/blog/`
2. Escribir artículos SEO-optimizados:
   - "Cómo elegir alfombra para bebé"
   - "Beneficios de las alfombras plegables"
   - "Tarjetas sensoriales para bebés"
3. Actualizar sitemap

**Beneficio**: Más tráfico orgánico, autoridad

---

### 11. Internacionalización
**Acción**:
1. Añadir versión en inglés
2. Configurar hreflang
3. Traducir contenido

---

### 12. Local SEO (si aplica)
**Acción**:
1. Crear Google Business Profile
2. Añadir dirección física
3. Schema LocalBusiness

---

## 📊 Métricas a Seguir

### Google Analytics
- Usuarios
- Sesiones
- Tasa de rebote
- Tiempo en página
- Conversiones (clicks a Amazon)
- QR scans (utm_medium=qr)

### Google Search Console
- Impresiones
- Clicks
- CTR (Click-Through Rate)
- Posición media
- Errores de indexación

### PageSpeed Insights
- Performance score
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)

---

## 🎯 Objetivos SEO

### Corto Plazo (1-3 meses)
- [ ] Indexar todas las páginas en Google
- [ ] Aparecer en búsquedas de marca ("ELEMATT")
- [ ] CTR >2% en Google

### Medio Plazo (3-6 meses)
- [ ] Top 10 para "alfombra bebé plegable"
- [ ] Top 20 para "alfombra bebé"
- [ ] 100+ visitas orgánicas/mes

### Largo Plazo (6-12 meses)
- [ ] Top 5 para "alfombra bebé plegable"
- [ ] Top 10 para "alfombra bebé"
- [ ] 500+ visitas orgánicas/mes
- [ ] 5+ conversiones/mes desde QR codes

---

## 🛠️ Herramientas Recomendadas

### Gratis
- **Google Search Console**: Indexación, errores
- **Google Analytics 4**: Tráfico, conversiones
- **PageSpeed Insights**: Velocidad
- **Google Mobile-Friendly Test**: Responsive
- **Schema.org Validator**: Validar JSON-LD

### De Pago (Opcional)
- **Ahrefs**: Análisis de competencia, keywords
- **SEMrush**: SEO completo
- **Screaming Frog**: Auditoría técnica

---

## 📝 Checklist Pre-Lanzamiento

- [x] Meta tags en todas las páginas
- [x] robots.txt configurado
- [x] sitemap.xml creado
- [ ] Google Analytics instalado
- [ ] Google Search Console configurado
- [ ] Imágenes Open Graph creadas
- [ ] SSL/HTTPS configurado
- [ ] Velocidad >90 en PageSpeed
- [ ] Todas las imágenes tienen alt text
- [ ] Links internos funcionan
- [ ] Links a Amazon funcionan
- [ ] QR codes probados
- [ ] Responsive en móvil/tablet/desktop

---

**Última actualización**: 01/11/2025  
**Próxima revisión**: Después de publicar la web

