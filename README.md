# ELEMATT.COM - Web Oficial de Marca

**Web de marca profesional para productos de bebé**  
Diseñada para reforzar confianza, seguridad y valores de marca post-compra.

---

## 🎯 Propósito de la Web

Esta web es la **cara oficial de la marca ELEMATT**, NO un e-commerce.

### Función Principal
- Complementa Amazon (no compite con él)
- Refuerza confianza y seguridad post-compra
- Destino del QR impreso en productos físicos
- Canal permanente de información de seguridad, uso y marca

### Tráfico Principal
1. **QR post-compra** desde el producto físico (usuario ya compró)
2. **SEO orgánico** (padres buscando información)
3. **Referencia desde Amazon** (verificación de marca)

---

## 🏗️ Arquitectura

### Stack Tecnológico
- **Framework**: Astro 5
- **Estilos**: CSS nativo (sin frameworks)
- **Despliegue**: Vercel
- **i18n**: 6 idiomas (es, en, pt, it, fr, de)

### Estructura de Carpetas
```
elematt/
├── docs/                          # Documentación
│   ├── PRODUCT_PAGE_MASTER.md     # Fuente única de verdad
│   └── CHECKLIST-FINAL.md         # Verificación completa
├── public/
│   ├── products/                  # Imágenes de productos
│   ├── brand/                     # Logo y assets de marca
│   └── sitemap.xml                # Sitemap multiidioma
├── src/
│   ├── components/
│   │   ├── product/               # Componentes de producto
│   │   │   ├── ProductSafetyNotice.astro  ⚠️ CRÍTICO
│   │   │   └── BrandSignature.astro
│   │   ├── TrustBadges.astro
│   │   ├── Hero.astro
│   │   ├── Section.astro
│   │   └── Header.astro
│   ├── i18n/                      # Traducciones
│   │   ├── es.json
│   │   ├── en.json
│   │   ├── pt.json
│   │   ├── it.json
│   │   ├── fr.json
│   │   ├── de.json
│   │   └── utils.ts
│   ├── layouts/
│   │   └── Layout.astro           # Layout principal con SEO
│   └── pages/
│       ├── index.astro            # Home (español)
│       ├── historia.astro
│       ├── contacto.astro
│       ├── productos/
│       │   └── alfombra-bebe/
│       │       ├── 150x180.astro
│       │       └── 180x200.astro
│       ├── en/                    # Páginas en inglés
│       ├── pt/                    # Páginas en portugués
│       ├── it/                    # Páginas en italiano
│       ├── fr/                    # Páginas en francés
│       └── de/                    # Páginas en alemán
└── INFORME-EJECUCION.md           # Estado del proyecto
```

---

## 🎨 Principios de Diseño

### La marca ELEMATT transmite:
- ✓ Calma
- ✓ Seguridad
- ✓ Confianza
- ✓ Cuidado
- ✓ Cercanía

### La web NO debe parecer:
- ✗ Tienda online
- ✗ Landing agresiva
- ✗ Marketing ruidoso
- ✗ Página de conversión

### Paleta de Colores
```css
--color-lino: #F5F1E8;        /* Fondo principal - beige cálido */
--color-perla: #FEFDFB;       /* Bloques alternos - blanco roto */
--color-salvia: #8B9D83;      /* Acentos - verde suave */
--color-melon: #E8A598;       /* Detalles cálidos */
--color-texto: #4A4A4A;       /* Texto principal - gris oscuro suave */
```

### Tipografía
- **Títulos**: Poppins (500-600)
- **Texto**: Nunito (400)
- **Interlineado**: 1.7 (lectura relajada)

---

## ⚠️ COMPONENTE CRÍTICO: ProductSafetyNotice

**NUNCA modificar, mover o eliminar este componente.**

### Ubicación
`src/components/product/ProductSafetyNotice.astro`

### Requisitos
- ✓ Visible sin scroll (above the fold)
- ✓ No requiere interacción para verse
- ✓ Presente en TODAS las páginas de producto
- ✓ Posición: JUSTO DESPUÉS del Hero
- ✓ Traducido a 6 idiomas

### Texto Obligatorio
```
⚠️ INFORMACIÓN DE SEGURIDAD

Esta bolsa de PU no es un juguete. Mantener fuera del alcance de bebés y niños. 
Uso exclusivo para adultos.
```

**NO modificar este texto sin revisar `docs/PRODUCT_PAGE_MASTER.md`**

---

## 🚀 Desarrollo

### Instalación
```bash
npm install
```

### Desarrollo Local
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

### Despliegue
**NO ejecutar builds locales para producción.**

Flujo correcto:
1. Commit y push a GitHub
2. Vercel compila y despliega automáticamente
3. Verificar en URL de preview

---

## 📋 Checklist Pre-Lanzamiento

### Crítico
- [ ] **Añadir ID real de Google Analytics** (reemplazar G-XXXXXXXXXX en `src/layouts/Layout.astro` línea 112)

### Verificado
- [x] Información de seguridad visible en todas las páginas de producto
- [x] ASIN real de Amazon configurado (B0DPXQY7YN)
- [x] Sin placeholders ni textos de prueba
- [x] Sitemap actualizado con 35 URLs
- [x] Hreflang tags configurados
- [x] Schema.org Product en páginas de producto
- [x] Traducciones completas en 6 idiomas
- [x] Diseño responsive (mobile-first)

---

## 📚 Documentación

### Documentos Principales
- **`docs/PRODUCT_PAGE_MASTER.md`** - Fuente única de verdad (leer PRIMERO)
- **`docs/CHECKLIST-FINAL.md`** - Verificación completa del proyecto
- **`INFORME-EJECUCION.md`** - Estado detallado de ejecución
- **`README-CONTENT-SEO.md`** - Estructura para contenido futuro

### Antes de Hacer Cambios
1. Leer `docs/PRODUCT_PAGE_MASTER.md`
2. Verificar que el cambio no afecta al componente ProductSafetyNotice
3. Respetar la paleta de colores y tipografía
4. Mantener el tono cálido y cercano

---

## 🌍 Idiomas Soportados

- 🇪🇸 Español (es) - Idioma por defecto
- 🇬🇧 Inglés (en)
- 🇵🇹 Portugués (pt)
- 🇮🇹 Italiano (it)
- 🇫🇷 Francés (fr)
- 🇩🇪 Alemán (de)

---

## 📞 Contacto

**Email**: info@elematt.com  
**Web**: https://elematt.com

---

**Versión**: 1.0  
**Última actualización**: 2025-12-20  
**Estado**: ✅ Listo para producción

