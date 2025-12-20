# PRODUCT PAGE MASTER - ELEMATT
**Documento Maestro - Fuente Única de Verdad**

---

## 1) OBJETIVO DE LA WEB

### Propósito Principal
Esta web es la **cara oficial de la marca ELEMATT**, NO un e-commerce.

### Función
- **Complementa Amazon**, no compite con él
- Refuerza confianza y seguridad post-compra
- Destino del QR impreso en productos físicos
- Canal permanente de información de seguridad, uso y marca

### Tráfico Principal
1. **QR post-compra** desde el producto físico (usuario ya compró)
2. **SEO orgánico** (padres buscando información)
3. **Referencia desde Amazon** (verificación de marca)

### Función Crítica
**Información de seguridad clara, permanente y accesible**

---

## 2) PRINCIPIOS DE MARCA

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
- ✗ Catálogo de productos

### Tono de Voz
- Humano y cercano
- Informativo sin ser técnico
- Cálido sin ser infantil
- Profesional sin ser corporativo

---

## 3) ESTILO VISUAL DEFINITIVO (NO INTERPRETABLE)

### PALETA DE COLORES

```css
/* Colores Principales */
--color-lino: #F5F1E8;        /* Fondo principal - beige cálido */
--color-perla: #FEFDFB;       /* Bloques alternos - blanco roto */
--color-salvia: #8B9D83;      /* Acentos - verde suave */
--color-melon: #E8A598;       /* Detalles cálidos */
--color-texto: #4A4A4A;       /* Texto principal - gris oscuro suave */
--color-texto-claro: #6B6B6B; /* Texto secundario */

/* Nunca usar */
--negro-puro: #000000;        /* ✗ Demasiado duro */
--blanco-puro: #FFFFFF;       /* ✗ Demasiado frío */
```

### TIPOGRAFÍA

```css
/* Títulos */
font-family: 'Poppins', sans-serif;
font-weight: 500-600;
line-height: 1.3;

/* Texto */
font-family: 'Nunito', sans-serif;
font-weight: 400;
line-height: 1.7;

/* Tamaños Mobile-First */
h1: 2rem (32px)
h2: 1.75rem (28px)
h3: 1.5rem (24px)
p: 1rem (16px)

/* Tamaños Desktop */
h1: 3rem (48px)
h2: 2.25rem (36px)
h3: 1.875rem (30px)
p: 1.125rem (18px)
```

### LAYOUT

```
Mobile-first real
Anchura máxima: 1200px
Padding lateral: 1.5rem (mobile) / 2rem (desktop)
Espacio entre secciones: 4rem (mobile) / 6rem (desktop)
Ritmo vertical pausado
Secciones claramente separadas
```

### IMÁGENES

**Estilo fotográfico:**
- Bebés reales (no modelos de stock)
- Entornos reales (hogar auténtico)
- Luz natural suave
- Colores cálidos
- Imágenes grandes y protagonistas
- Ratio 16:9 o 4:3

**Nunca:**
- Stock frío o genérico
- Fondos blancos puros
- Iluminación de estudio
- Poses artificiales

### CTA (Call To Action)

**Estilo:**
- Suaves y redondeados (border-radius: 8px)
- Informativos, no agresivos
- Texto descriptivo ("Ver en Amazon" > "Comprar ahora")
- Color salvia con hover suave

**Nunca:**
- Rojos o naranjas agresivos
- Textos urgentes ("¡Compra ya!")
- Animaciones llamativas
- Múltiples CTAs compitiendo

---

## 4) ESTRUCTURA IDEAL DE PÁGINA DE PRODUCTO

### ORDEN OBLIGATORIO DE SECCIONES

#### A) BLOQUE DE SEGURIDAD INICIAL (CRÍTICO) ⚠️

**POSICIÓN**: PRIMER BLOQUE DE LA PÁGINA
**VISIBILIDAD**: Visible sin hacer scroll (above the fold)

**Texto OBLIGATORIO** (no modificar, no ocultar):

```
⚠️ INFORMACIÓN DE SEGURIDAD

Esta bolsa de PU no es un juguete. Mantener fuera del alcance de bebés y niños. 
Uso exclusivo para adultos.
```

**Requisitos técnicos:**
- ✓ Visible siempre (no en acordeón)
- ✓ No requiere interacción para verse
- ✓ Icono de atención claro
- ✓ Fondo ligeramente diferenciado (perla)
- ✓ Borde sutil (salvia claro)
- ✓ Tono informativo, no alarmista
- ✓ Accesible vía QR

**Componente**: `<ProductSafetyNotice />`

---

#### B) HERO DE PRODUCTO

**Contenido:**
- Imagen principal del producto (grande, protagonista)
- Nombre del producto
- Claim emocional corto (1 línea)
- Iconos de confianza (certificaciones, edad)
- CTA suave principal ("Ver en Amazon")
- CTA secundario ("Guía de uso")

**Layout:**
- Mobile: Imagen arriba, texto abajo
- Desktop: Imagen izquierda (60%), texto derecha (40%)

---

#### C) POR QUÉ EXISTE ESTE PRODUCTO

**Contenido:**
- Historia real de la marca
- Lenguaje humano y cercano
- Conexión emocional
- Máximo 2-3 párrafos

**Ejemplo:**
```
ELEMATT nació de una amistad y del deseo de crear productos que realmente 
necesitábamos como padres. Cada producto está pensado desde la experiencia real.
```

---

#### D) BENEFICIOS CLAVE

**Formato:**
- 3-4 beneficios principales
- Icono + título + descripción breve
- Beneficios antes que características
- Lenguaje emocional

**Ejemplo:**
```
✓ Espacio seguro para explorar
  Superficie acolchada que protege en cada movimiento

✓ Fácil de limpiar
  Porque sabemos que la vida con bebés es impredecible

✓ Crece con tu bebé
  Desde los primeros meses hasta los primeros pasos
```

---

#### E) SEGURIDAD Y MATERIALES

**Contenido obligatorio:**
- Materiales específicos
- Certificaciones (EN71, CE)
- Normativas cumplidas
- Edad recomendada (0+ meses)
- Libre de tóxicos

**Tono:** Informativo, técnico pero accesible

---

#### F) VARIANTES DEL PRODUCTO

**Contenido:**
- Tamaños disponibles
- Comparativa simple (tabla o cards)
- Cuándo elegir cada uno
- Enlaces internos a otras variantes

**Ejemplo:**
```
150×180 cm - Ideal para espacios reducidos
180×200 cm - Máximo espacio de juego
```

---

#### G) QUÉ INCLUYE / CÓMO USAR

**Contenido:**
- Contenido de la caja
- Instrucciones de primer uso
- Consejos de uso seguro
- Mantenimiento básico

---

#### H) PREGUNTAS FRECUENTES (FAQ)

**Categorías obligatorias:**
1. Seguridad
2. Limpieza y mantenimiento
3. Uso y edad
4. Garantía y devoluciones

**Formato:** Acordeón expandible

---

#### I) SOPORTE E IDIOMAS

**Contenido:**
- Formulario de contacto
- Email de soporte
- Idiomas disponibles
- Tiempo de respuesta

---

#### J) CIERRE EMOCIONAL DE MARCA

**Contenido:**
- Agradecimiento por la confianza
- Refuerzo de valores de marca
- Firma de la marca

**Ejemplo:**
```
Gracias por confiar en ELEMATT. Estamos aquí para acompañarte en cada etapa.
```

---

## 5) COMPONENTES ASTRO REUTILIZABLES

### Componentes Obligatorios

```
src/components/product/
├── ProductSafetyNotice.astro    ⚠️ CRÍTICO
├── ProductHero.astro
├── ProductStory.astro
├── ProductBenefits.astro
├── ProductMaterials.astro
├── ProductVariants.astro
├── ProductIncludes.astro
├── ProductFAQ.astro
├── ProductSupport.astro
└── BrandSignature.astro
```

### Props Estándar

Todos los componentes deben:
- Aceptar `lang` como prop
- Usar `t()` para traducciones
- Ser responsive por defecto
- Seguir la paleta de colores
- Tener padding/margin consistente

---

## 6) SEO DE PRODUCTO

### Meta Tags Obligatorios

```html
<title>{productName} - {variant} | ELEMATT</title>
<meta name="description" content="{seoDescription}" />
<meta name="keywords" content="{seoKeywords}" />

<!-- Open Graph -->
<meta property="og:type" content="product" />
<meta property="og:title" content="{productName} - {variant}" />
<meta property="og:description" content="{seoDescription}" />
<meta property="og:image" content="{productImage}" />
<meta property="og:url" content="{canonicalUrl}" />

<!-- Schema.org Product -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "{productName} - {variant}",
  "description": "{seoDescription}",
  "image": "{productImage}",
  "brand": {
    "@type": "Brand",
    "name": "ELEMATT"
  },
  "offers": {
    "@type": "Offer",
    "url": "{amazonLink}",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  }
}
</script>
```

### i18n

- Hreflang tags en todas las páginas
- Canonical correcto por idioma
- og:locale dinámico
- Traducciones completas

---

## 7) CHECKLIST DE TAREAS

### SEGURIDAD (CRÍTICO)
- [ ] ProductSafetyNotice componente creado
- [ ] Texto de seguridad obligatorio incluido
- [ ] Visible sin scroll en mobile
- [ ] Visible sin scroll en desktop
- [ ] No requiere interacción para verse
- [ ] Presente en TODAS las páginas de producto
- [ ] Traducido a los 6 idiomas
- [ ] Accesible vía QR

### UX
- [ ] Orden de secciones respetado
- [ ] Mobile-first real
- [ ] Navegación clara
- [ ] CTAs suaves y descriptivos
- [ ] Sin elementos agresivos
- [ ] Ritmo visual pausado

### DISEÑO
- [ ] Paleta de colores aplicada
- [ ] Tipografía Poppins + Nunito
- [ ] Espaciado consistente
- [ ] Imágenes reales (no stock)
- [ ] Fondos cálidos
- [ ] Sin negro/blanco puros

### COMPONENTES
- [ ] ProductSafetyNotice.astro
- [ ] ProductHero.astro
- [ ] ProductStory.astro
- [ ] ProductBenefits.astro
- [ ] ProductMaterials.astro
- [ ] ProductVariants.astro
- [ ] ProductIncludes.astro
- [ ] ProductFAQ.astro
- [ ] ProductSupport.astro
- [ ] BrandSignature.astro

### SEO
- [ ] Meta tags completos
- [ ] Schema.org Product
- [ ] Open Graph específico
- [ ] Canonical URLs
- [ ] Hreflang tags
- [ ] Sitemap actualizado

### i18n
- [ ] Traducciones de seguridad (6 idiomas)
- [ ] Traducciones de producto (6 idiomas)
- [ ] Páginas creadas en 6 idiomas
- [ ] Selector de idioma funcional

### ACCESIBILIDAD
- [ ] Contraste WCAG AA
- [ ] Alt text en imágenes
- [ ] Headings jerárquicos
- [ ] Focus visible
- [ ] Navegación por teclado

### PERFORMANCE
- [ ] Imágenes optimizadas
- [ ] Lazy loading
- [ ] Preload de hero
- [ ] CSS crítico inline
- [ ] Fonts optimizados

### CONTENIDO
- [ ] Sin placeholders
- [ ] Sin Lorem ipsum
- [ ] ASIN real de Amazon
- [ ] Google Analytics ID real
- [ ] Textos revisados

---

## NOTAS FINALES

### Principio Fundamental
**La seguridad es lo primero. Siempre.**

El bloque de seguridad no es negociable. No puede:
- Ocultarse en un acordeón
- Moverse al final de la página
- Requerir scroll para verse
- Eliminarse "por diseño"

### Flujo de Trabajo
1. Crear/modificar PRODUCT_PAGE_MASTER.md
2. Implementar en código
3. Verificar checklist
4. Push a GitHub
5. Vercel despliega automáticamente

### NO hacer
- ✗ Compilar en local
- ✗ Ejecutar npm run build
- ✗ Improvisar diseño
- ✗ Omitir información de seguridad
- ✗ Alterar texto obligatorio

---

**Versión**: 1.0  
**Fecha**: 2025-12-20  
**Autor**: Diseño de Marca Digital ELEMATT

