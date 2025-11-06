# 🌐 Guía de Internacionalización (i18n) - ELEMATT

**Fecha**: 2025-11-06  
**Estado**: ✅ Sistema implementado - Listo para usar

---

## 📋 RESUMEN

Sistema de internacionalización completo para 4 idiomas:
- 🇪🇸 **Español** (por defecto)
- 🇬🇧 **Inglés**
- 🇵🇹 **Portugués**
- 🇮🇹 **Italiano**

---

## 📁 ESTRUCTURA DE ARCHIVOS

```
src/
├── i18n/
│   ├── es.json          # Traducciones en español
│   ├── en.json          # Traducciones en inglés
│   ├── pt.json          # Traducciones en portugués
│   ├── it.json          # Traducciones en italiano
│   └── utils.ts         # Utilidades i18n
├── components/
│   └── LanguageSelector.astro  # Selector de idioma
└── pages/
    ├── index.astro      # Español (default)
    ├── en/
    │   └── index.astro  # Inglés
    ├── pt/
    │   └── index.astro  # Portugués
    └── it/
        └── index.astro  # Italiano
```

---

## 🚀 CÓMO USAR EN PÁGINAS

### **Ejemplo básico:**

```astro
---
import Layout from '../layouts/Layout.astro';
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<Layout title={t('home.title')}>
  <h1>{t('home.heroTitle')}</h1>
  <p>{t('home.heroDescription')}</p>
  <a href="/historia">{t('home.heroCta')}</a>
</Layout>
```

### **Acceder a traducciones anidadas:**

```astro
{t('nav.home')}           → "Inicio" (ES) / "Home" (EN)
{t('footer.copyright')}   → "Todos los derechos reservados."
{t('common.loading')}     → "Cargando..." (ES) / "Loading..." (EN)
```

---

## 🔧 CÓMO AGREGAR TRADUCCIONES

### **1. Agregar nueva clave en `src/i18n/es.json`:**

```json
{
  "products": {
    "newKey": "Nuevo texto en español"
  }
}
```

### **2. Agregar la misma clave en los otros idiomas:**

**`en.json`:**
```json
{
  "products": {
    "newKey": "New text in English"
  }
}
```

**`pt.json`:**
```json
{
  "products": {
    "newKey": "Novo texto em português"
  }
}
```

**`it.json`:**
```json
{
  "products": {
    "newKey": "Nuovo testo in italiano"
  }
}
```

### **3. Usar en tu página:**

```astro
{t('products.newKey')}
```

---

## 🌍 ESTRUCTURA DE URLs

### **URLs por idioma:**

| Idioma | URL |
|--------|-----|
| Español (default) | `https://elematt-website.vercel.app/` |
| Inglés | `https://elematt-website.vercel.app/en/` |
| Portugués | `https://elematt-website.vercel.app/pt/` |
| Italiano | `https://elematt-website.vercel.app/it/` |

### **Ejemplo de páginas:**

| Página | ES | EN | PT | IT |
|--------|----|----|----|----|
| Inicio | `/` | `/en/` | `/pt/` | `/it/` |
| Historia | `/historia` | `/en/historia` | `/pt/historia` | `/it/historia` |
| Contacto | `/contacto` | `/en/contacto` | `/pt/contacto` | `/it/contacto` |

---

## 🎨 SELECTOR DE IDIOMA

### **Agregar selector al Header:**

```astro
---
import LanguageSelector from './LanguageSelector.astro';
---

<header>
  <nav>
    <!-- Tu navegación -->
    <LanguageSelector />
  </nav>
</header>
```

El selector muestra:
- 🇪🇸 Español
- 🇬🇧 English
- 🇵🇹 Português
- 🇮🇹 Italiano

---

## 📝 CREAR PÁGINAS MULTIIDIOMA

### **Opción 1: Duplicar páginas (Recomendado para SEO)**

```
src/pages/
├── index.astro           # Español
├── en/
│   └── index.astro       # Inglés
├── pt/
│   └── index.astro       # Portugués
└── it/
    └── index.astro       # Italiano
```

**Contenido de cada página:**

```astro
---
// src/pages/en/index.astro
import Layout from '../../layouts/Layout.astro';
import { useTranslations } from '../../i18n/utils';

const t = useTranslations('en');
---

<Layout title={t('home.title')}>
  <h1>{t('home.heroTitle')}</h1>
  <!-- Resto del contenido usando t() -->
</Layout>
```

### **Opción 2: Componente compartido (Menos duplicación)**

```astro
---
// src/components/HomePage.astro
import { useTranslations, type Language } from '../i18n/utils';

interface Props {
  lang: Language;
}

const { lang } = Astro.props;
const t = useTranslations(lang);
---

<h1>{t('home.heroTitle')}</h1>
<p>{t('home.heroDescription')}</p>
<!-- Resto del contenido -->
```

**Usar en páginas:**

```astro
---
// src/pages/en/index.astro
import Layout from '../../layouts/Layout.astro';
import HomePage from '../../components/HomePage.astro';
---

<Layout title="ELEMATT">
  <HomePage lang="en" />
</Layout>
```

---

## 🔍 SEO MULTIIDIOMA

### **Meta tags hreflang:**

```astro
---
import { getLanguages, translatePath } from '../i18n/utils';

const currentPath = Astro.url.pathname;
const languages = getLanguages();
---

<head>
  <!-- Idioma actual -->
  <html lang={lang}>
  
  <!-- Alternativas de idioma -->
  {languages.map((l) => (
    <link 
      rel="alternate" 
      hreflang={l} 
      href={`https://elematt-website.vercel.app${translatePath(currentPath, l)}`} 
    />
  ))}
  
  <!-- Default -->
  <link 
    rel="alternate" 
    hreflang="x-default" 
    href={`https://elematt-website.vercel.app${currentPath}`} 
  />
</head>
```

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

### **Fase 1: Setup (Hecho)**
- [x] Crear archivos de traducción (es, en, pt, it)
- [x] Crear utilidades i18n
- [x] Configurar Astro para i18n
- [x] Crear componente LanguageSelector

### **Fase 2: Migrar páginas existentes**
- [ ] Migrar `index.astro` a usar traducciones
- [ ] Migrar `historia.astro` a usar traducciones
- [ ] Migrar `contacto.astro` a usar traducciones
- [ ] Migrar componentes (Header, Footer, Hero)

### **Fase 3: Crear páginas en otros idiomas**
- [ ] Crear `/en/index.astro`
- [ ] Crear `/pt/index.astro`
- [ ] Crear `/it/index.astro`
- [ ] Repetir para todas las páginas

### **Fase 4: Testing**
- [ ] Probar navegación entre idiomas
- [ ] Verificar SEO (meta tags, hreflang)
- [ ] Probar en móvil
- [ ] Verificar que todas las traducciones están completas

---

## 🛠️ COMANDOS ÚTILES

### **Verificar traducciones faltantes:**

```bash
# Comparar claves entre idiomas
diff <(jq -r 'keys' src/i18n/es.json) <(jq -r 'keys' src/i18n/en.json)
```

### **Contar traducciones:**

```bash
# Contar claves en español
jq 'paths | length' src/i18n/es.json
```

---

## 📊 ESTADO ACTUAL

| Idioma | Traducciones | Estado |
|--------|--------------|--------|
| 🇪🇸 Español | 100% | ✅ Completo |
| 🇬🇧 Inglés | 100% | ✅ Completo |
| 🇵🇹 Portugués | 100% | ✅ Completo |
| 🇮🇹 Italiano | 100% | ✅ Completo |

**Total de claves traducidas:** ~150 por idioma

---

## 🚀 PRÓXIMOS PASOS

1. **Migrar página de inicio** (`index.astro`) para usar `t()`
2. **Crear páginas en inglés** (`/en/`)
3. **Agregar selector de idioma al Header**
4. **Probar navegación entre idiomas**
5. **Desplegar y verificar en Vercel**

---

## 💡 TIPS

- **Mantén las claves organizadas** por sección (nav, footer, home, etc.)
- **Usa nombres descriptivos** para las claves
- **Verifica traducciones** antes de desplegar
- **Prueba en todos los idiomas** antes de publicar
- **Usa el selector de idioma** para facilitar la navegación

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### **Problema: Traducción no aparece**
```astro
<!-- ❌ Incorrecto -->
{t('home.title')}  // Si la clave no existe

<!-- ✅ Correcto -->
{t('home.title') || 'Fallback text'}
```

### **Problema: Idioma no detectado**
```astro
---
// Siempre obtén el idioma de la URL
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---
```

### **Problema: Links rotos entre idiomas**
```astro
---
import { translatePath } from '../i18n/utils';
---

<!-- ❌ Incorrecto -->
<a href="/historia">Historia</a>

<!-- ✅ Correcto -->
<a href={translatePath('/historia', lang)}>
  {t('nav.history')}
</a>
```

