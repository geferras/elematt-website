# 📋 Estrategia de Ramas y Viabilidad de Internacionalización

**Fecha**: 2025-11-06

---

## 🌿 ESTRATEGIA DE RAMAS GIT

### **Situación Actual**
- ✅ Rama `main` está en GitHub
- ✅ Despliegues automáticos desde `main` a Vercel
- ✅ Cada push a `main` despliega a producción

### **Recomendación: Estrategia Simple (Para Proyectos Pequeños)**

```
main (producción)
  ↑
  └── develop (desarrollo)
       ↑
       └── feature/nueva-funcionalidad (temporal)
```

#### **Flujo de Trabajo Recomendado:**

**1. Rama `main` (Producción)**
- ✅ Siempre estable y funcionando
- ✅ Solo código probado y listo para usuarios
- ✅ Despliega automáticamente a Vercel
- ⚠️ **NO hacer commits directos aquí**

**2. Rama `develop` (Desarrollo)**
- ✅ Donde haces cambios día a día
- ✅ Puedes romper cosas sin afectar producción
- ✅ Cuando esté listo, merge a `main`

**3. Ramas `feature/*` (Funcionalidades)**
- ✅ Para cambios grandes (ej: `feature/i18n`, `feature/carrito-compras`)
- ✅ Se crean desde `develop`
- ✅ Se eliminan después del merge

---

### **Comandos para Implementar Estrategia**

#### **Setup Inicial (Una sola vez)**

```bash
# Crear rama develop desde main
git checkout -b develop
git push -u origin develop

# Configurar Vercel para NO desplegar develop automáticamente
# (Se hace desde el dashboard de Vercel)
```

#### **Flujo de Trabajo Diario**

```bash
# 1. Trabajar en develop
git checkout develop
# Haces cambios...
git add .
git commit -m "✨ Nueva funcionalidad"
git push

# 2. Cuando esté listo para producción
git checkout main
git merge develop
git push  # ← Esto despliega a Vercel automáticamente

# 3. Volver a develop
git checkout develop
```

#### **Para Funcionalidades Grandes**

```bash
# 1. Crear rama feature
git checkout develop
git checkout -b feature/i18n

# 2. Trabajar en la feature
git add .
git commit -m "🌐 Agregar soporte i18n"
git push -u origin feature/i18n

# 3. Cuando esté lista
git checkout develop
git merge feature/i18n
git branch -d feature/i18n  # Eliminar rama local
git push origin --delete feature/i18n  # Eliminar rama remota

# 4. Desplegar a producción
git checkout main
git merge develop
git push
```

---

### **Alternativa: Estrategia Ultra-Simple (Actual)**

Si prefieres mantenerlo simple por ahora:

```
main (producción)
```

**Ventajas:**
- ✅ Muy simple
- ✅ No hay confusión
- ✅ Ideal para proyectos pequeños con 1 desarrollador

**Desventajas:**
- ⚠️ Cada push va directo a producción
- ⚠️ No hay espacio para experimentar sin afectar el sitio público

**Recomendación:** Usa esta estrategia SOLO si:
- Siempre pruebas localmente antes de hacer push
- El sitio aún no tiene usuarios reales
- Eres el único desarrollador

---

## 🌐 VIABILIDAD DE INTERNACIONALIZACIÓN (i18n)

### **Análisis de Contenido a Traducir**

#### **Cantidad de Texto**
- 📄 **14 páginas** con contenido
- 🧩 **5 componentes** con texto (Header, Footer, Hero, Section, NotificationModal)
- 📝 **~500-700 strings** a traducir (estimado)

#### **Tipos de Contenido**

| Tipo | Cantidad | Complejidad |
|------|----------|-------------|
| Navegación | ~20 items | ⭐ Baja |
| Títulos/Subtítulos | ~50 | ⭐ Baja |
| Descripciones de productos | ~30 | ⭐⭐ Media |
| Textos largos (historia, filosofía) | ~15 párrafos | ⭐⭐⭐ Alta |
| Botones/CTAs | ~40 | ⭐ Baja |
| SEO (meta tags) | ~14 páginas | ⭐⭐ Media |
| Formularios | ~10 campos | ⭐ Baja |

---

### **Viabilidad por Idioma**

#### **🇪🇸 Español (Actual)**
- ✅ Ya implementado
- ✅ 100% completo

#### **🇬🇧 Inglés**
- ✅ **MUY FACTIBLE**
- Mercado: USA, UK, Australia, Canadá
- Esfuerzo: ~8-12 horas de traducción
- ROI: ⭐⭐⭐⭐⭐ (Muy alto - mercado enorme)

#### **🇵🇹 Portugués**
- ✅ **FACTIBLE**
- Mercado: Brasil, Portugal
- Esfuerzo: ~8-12 horas de traducción
- ROI: ⭐⭐⭐⭐ (Alto - Brasil es mercado grande)
- Nota: Considerar PT-BR vs PT-PT

#### **🇮🇹 Italiano**
- ✅ **FACTIBLE**
- Mercado: Italia
- Esfuerzo: ~8-12 horas de traducción
- ROI: ⭐⭐⭐ (Medio - mercado más pequeño)

---

### **Esfuerzo Total Estimado**

| Tarea | Tiempo | Dificultad |
|-------|--------|------------|
| **Setup técnico** (Astro i18n) | 4-6 horas | ⭐⭐⭐ |
| **Traducción ES → EN** | 8-12 horas | ⭐⭐ |
| **Traducción ES → PT** | 8-12 horas | ⭐⭐ |
| **Traducción ES → IT** | 8-12 horas | ⭐⭐ |
| **Testing y ajustes** | 4-6 horas | ⭐⭐ |
| **SEO multiidioma** | 2-4 horas | ⭐⭐ |
| **TOTAL (4 idiomas)** | **34-52 horas** | ⭐⭐⭐ |

---

### **Implementación Técnica**

#### **Opción 1: Astro i18n Routing (Recomendado)**

**Estructura de URLs:**
```
https://elematt-website.vercel.app/          → Español (default)
https://elematt-website.vercel.app/en/       → Inglés
https://elematt-website.vercel.app/pt/       → Portugués
https://elematt-website.vercel.app/it/       → Italiano
```

**Estructura de archivos:**
```
src/
├── i18n/
│   ├── es.json          # Español
│   ├── en.json          # Inglés
│   ├── pt.json          # Portugués
│   └── it.json          # Italiano
├── pages/
│   ├── index.astro      # Español (default)
│   ├── en/
│   │   └── index.astro  # Inglés
│   ├── pt/
│   │   └── index.astro  # Portugués
│   └── it/
│       └── index.astro  # Italiano
```

**Ventajas:**
- ✅ SEO óptimo (URLs separadas por idioma)
- ✅ Fácil de mantener
- ✅ Astro tiene soporte nativo

**Desventajas:**
- ⚠️ Duplicación de páginas (pero con contenido compartido)

---

#### **Opción 2: Astro i18n con Middleware**

**Estructura de URLs:**
```
https://elematt-website.vercel.app/          → Detecta idioma del navegador
https://elematt-website.vercel.app/?lang=en  → Forzar inglés
```

**Ventajas:**
- ✅ Menos archivos
- ✅ Detección automática de idioma

**Desventajas:**
- ⚠️ SEO menos óptimo
- ⚠️ Más complejo de implementar

---

### **Recomendación Final**

#### **Fase 1: Ahora (Sin i18n)**
- ✅ Mantener solo español
- ✅ Enfocarse en contenido y ventas
- ✅ Validar el producto primero

#### **Fase 2: Cuando tengas ventas (Agregar Inglés)**
- 🌐 Implementar ES + EN
- 🌐 Usar Opción 1 (Astro i18n Routing)
- 🌐 Esfuerzo: ~12-18 horas

#### **Fase 3: Expansión (Agregar PT + IT)**
- 🌐 Agregar portugués e italiano
- 🌐 Esfuerzo adicional: ~16-24 horas

---

### **Prioridad de Idiomas**

1. **🇪🇸 Español** (Actual) - ✅ Hecho
2. **🇬🇧 Inglés** (Siguiente) - Mercado más grande
3. **🇵🇹 Portugués** (Después) - Brasil es mercado emergente
4. **🇮🇹 Italiano** (Último) - Mercado más pequeño

---

## ✅ RESPUESTAS DIRECTAS

### **¿Todos los commits en `main`?**
- ⚠️ **NO recomendado** para largo plazo
- ✅ **Crear rama `develop`** para trabajar
- ✅ **Merge a `main`** solo cuando esté listo para producción

### **¿`main` ya está en GitHub?**
- ✅ **SÍ**, está en GitHub
- ✅ **SÍ**, está sincronizado con Vercel
- ✅ Cada push a `main` despliega automáticamente

### **¿Es necesario hacer push?**
- ✅ **SÍ**, siempre que quieras:
  - Guardar cambios en GitHub (backup)
  - Desplegar a Vercel (publicar)
  - Compartir código con otros

### **¿Qué tan factible es i18n?**
- ✅ **MUY FACTIBLE** técnicamente
- ⏱️ **34-52 horas** para 4 idiomas completos
- 💰 **ROI alto** si vendes internacionalmente
- 📅 **Recomendación:** Hacerlo DESPUÉS de validar el producto en español

