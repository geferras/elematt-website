# Diseño de Página Principal de Producto

## 🎯 Objetivo

Crear una página elegante, minimalista y profesional que:
1. Cuente la historia de las dos caras de la alfombra
2. Permita al usuario elegir entre las variantes de tamaño
3. Mantenga la coherencia visual con la marca ELEMATT
4. Ofrezca una experiencia de usuario excepcional

---

## 📐 Estructura de la Página

### 1. Hero Minimalista
**Propósito**: Presentar el producto de forma clara y elegante

**Elementos**:
- Título del producto (grande, bold)
- Subtítulo descriptivo
- Fondo con gradiente suave (Lino → Perla)

**Tipografía**:
- Título: `clamp(2.5rem, 5vw, 4rem)` - Responsive
- Subtítulo: `clamp(1.1rem, 2vw, 1.5rem)`
- Color: Gris Oscuro + Verde Salvia

**Decisión de diseño**:
- Sin imagen de fondo para mantener el foco en el texto
- Gradiente sutil que no compite con el contenido
- Espaciado generoso (6rem padding top)

---

### 2. Sección "Dos Caras de la Alfombra"
**Propósito**: Explicar las dos caras únicas del producto

**Layout**: Grid de 2 columnas (responsive a 1 columna en móvil)

**Elementos por card**:
- Número grande (01, 02) - Elemento decorativo
- Título de la cara (Pueblo Costero / Selva Tropical)
- Descripción narrativa

**Efectos visuales**:
```css
/* Hover suave con elevación */
transform: translateY(-8px);
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
border-color: var(--color-salvia-dark);
```

**Decisión de diseño**:
- Cards con gradiente sutil (Lino → Blanco)
- Borde que cambia de color en hover
- Número grande con opacidad baja (elemento decorativo)
- Transición suave con cubic-bezier para sensación premium

---

### 3. Selector de Variantes
**Propósito**: Permitir elegir entre Compacta y XL

**Inspiración**: E-commerce premium (Apple, Shopify)

**Layout**: Grid de 2 columnas (1 en móvil)

**Anatomía de cada card**:

```
┌─────────────────────────────────┐
│  [Badge "Más Popular"]          │ ← Solo en XL
│                                 │
│  ┌─────────────────────────┐   │
│  │                         │   │
│  │   Imagen del Producto   │   │ ← Zoom en hover
│  │                         │   │
│  └─────────────────────────┘   │
│                                 │
│  Compacta / XL                  │ ← Nombre
│  150 × 180 cm                   │ ← Dimensiones
│  Grosor: 1,5 cm                 │
│                                 │
│  Descripción breve              │
│                                 │
│  ┌─────────────────────────┐   │
│  │ 📦 Plegada: 50×60×15 cm │   │ ← Specs
│  │ ⚖️  Peso: 2,5 kg         │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ Ver Detalles        →   │   │ ← CTA
│  └─────────────────────────┘   │
└─────────────────────────────────┘
```

**Jerarquía visual**:
1. **Badge** (si es destacado) - Llama la atención
2. **Imagen** - Visual principal
3. **Nombre + Dimensiones** - Info clave
4. **Descripción** - Contexto
5. **Especificaciones** - Detalles técnicos
6. **CTA** - Acción

**Colores**:
- Card normal: Borde transparente → Verde Salvia en hover
- Card destacado: Borde Melón Oscuro permanente
- Badge: Gradiente Melón con sombra
- CTA: Gradiente Verde Salvia

**Efectos hover**:
```css
/* Card completa */
transform: translateY(-12px);
box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);

/* Imagen */
transform: scale(1.08);

/* CTA */
transform: translateX(4px);

/* Flecha */
transform: translateX(6px);
```

---

## 🎨 Paleta de Colores Utilizada

### Fondos
- **Hero**: `linear-gradient(135deg, #E8E4D9, #E1E3E2)` (Lino → Perla)
- **Caras**: `#FFFFFF` (Blanco)
- **Variantes**: `#E1E3E2` (Gris Perla)

### Cards
- **Cara**: `linear-gradient(135deg, #E8E4D9, #FFFFFF)` (Lino → Blanco)
- **Variante**: `#FFFFFF` (Blanco)
- **Specs**: `#E8E4D9` (Lino)

### Acentos
- **Badge**: `linear-gradient(135deg, #D4856F, #F4C2B8)` (Melón Oscuro → Melón)
- **CTA**: `linear-gradient(135deg, #6C806B, #A8B5A0)` (Salvia Oscuro → Salvia)
- **Borde hover**: `#6C806B` (Salvia Oscuro)

---

## 📱 Responsive Design

### Breakpoint: 768px

**Desktop (>768px)**:
- Hero: 6rem padding top
- Caras: 2 columnas
- Variantes: 2 columnas
- Imagen variante: 280px altura

**Mobile (≤768px)**:
- Hero: 4rem padding top
- Caras: 1 columna, gap reducido
- Variantes: 1 columna
- Imagen variante: 220px altura
- Badge: Tamaño reducido

**Técnica**: `clamp()` para tipografía fluida
```css
font-size: clamp(2.5rem, 5vw, 4rem);
```

---

## ✨ Animaciones y Transiciones

### Timing Functions
```css
/* Suave y natural */
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

/* Rápida para hover */
transition: transform 0.3s ease;

/* Lenta para imagen */
transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
```

### Efectos Aplicados
1. **Cards**: Elevación en hover (-8px a -12px)
2. **Imágenes**: Zoom sutil (scale 1.08)
3. **CTA**: Deslizamiento horizontal (4px)
4. **Flecha**: Deslizamiento adicional (6px)
5. **Bordes**: Cambio de color suave

---

## 🔤 Tipografía

### Jerarquía
```
Hero Título:        4rem (desktop) → 2.5rem (mobile)
Variantes Título:   3rem (desktop) → 2rem (mobile)
Cara Título:        2rem
Variante Nombre:    1.75rem
Dimensiones:        1.3rem
Descripción:        1.05rem
Specs:              0.95rem
```

### Familias
- **Títulos**: `var(--font-primary)` - Fredoka (bold, redondeada)
- **Cuerpo**: `var(--font-secondary)` - Inter (legible, moderna)

---

## 🎯 UX Best Practices Aplicadas

### 1. Jerarquía Visual Clara
- Tamaños de fuente progresivos
- Espaciado consistente
- Colores que guían la atención

### 2. Feedback Inmediato
- Hover states en todos los elementos interactivos
- Transiciones suaves (no bruscas)
- Cambios visuales claros

### 3. Accesibilidad
- Contraste WCAG AA en todos los textos
- Tamaños de fuente legibles (mínimo 0.95rem)
- Áreas de click generosas (cards completas)

### 4. Performance
- `loading="lazy"` en imágenes
- Transiciones con `transform` (GPU accelerated)
- Sin JavaScript innecesario

### 5. Mobile-First
- Grid responsive automático
- Tipografía fluida con `clamp()`
- Touch targets de 44×44px mínimo

---

## 📊 Comparación con Competencia

### Antes (Diseño Genérico)
- ❌ Lista simple de variantes
- ❌ Sin historia del producto
- ❌ Información técnica oculta
- ❌ Diseño poco memorable

### Ahora (Diseño Premium)
- ✅ Storytelling visual (dos caras)
- ✅ Cards elegantes con hover effects
- ✅ Información técnica visible
- ✅ Badge "Más Popular" guía decisión
- ✅ Diseño memorable y profesional

---

## 🚀 Próximas Mejoras Posibles

### Fase 2 (Futuro)
1. **Galería de imágenes** para cada cara
2. **Comparador** lado a lado de variantes
3. **Reviews** de clientes
4. **Video** mostrando el producto
5. **Selector de color** (si hay variantes de color)
6. **Calculadora de espacio** (ayuda a elegir tamaño)

### Optimizaciones
1. Lazy loading de imágenes
2. WebP con fallback a JPEG
3. Preload de fuentes críticas
4. Intersection Observer para animaciones

---

## 📚 Referencias de Diseño

### Inspiración
- **Apple**: Minimalismo, espaciado generoso
- **Shopify**: Cards de producto elegantes
- **Stripe**: Gradientes sutiles, tipografía clara
- **Airbnb**: Hover effects suaves

### Principios Aplicados
1. **Less is More**: Solo elementos esenciales
2. **White Space**: Respiración visual
3. **Consistency**: Patrones repetidos
4. **Hierarchy**: Guiar la mirada del usuario
5. **Delight**: Micro-interacciones placenteras

---

## 🎨 Código de Ejemplo

### Card de Variante (Estructura)
```astro
<a href={variante.url} class="variante-card destacado">
  <div class="badge-destacado">Más Popular</div>
  <div class="variante-imagen">
    <img src={variante.imagen} alt="..." loading="lazy" />
  </div>
  <div class="variante-contenido">
    <div class="variante-header">
      <h3>{variante.nombre}</h3>
      <div class="variante-dimensiones">
        <span>{variante.dimensiones}</span>
        <span>Grosor: {variante.grosor}</span>
      </div>
    </div>
    <p>{variante.descripcion}</p>
    <div class="variante-specs">...</div>
    <div class="variante-cta">
      <span>Ver Detalles</span>
      <svg>→</svg>
    </div>
  </div>
</a>
```

---

**Última actualización**: 2025-11-01  
**Diseñador**: Augment Agent  
**Versión**: 1.0

