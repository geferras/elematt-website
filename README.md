# ELEMATT - Alfombras Bebé Acolchadas Plegables

> Descubre la belleza en lo simple

[![Astro](https://img.shields.io/badge/Astro-5.15.3-FF5D01?logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![Node.js](https://img.shields.io/badge/Node.js-22.21.1-339933?logo=node.js)](https://nodejs.org)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-green)](https://www.w3.org/WAI/WCAG21/quickref/)

## 📖 Sobre el Proyecto

ELEMATT es una marca de productos para bebé inspirada en la historia de Elena y sus tres amigas del jardín de infancia (Laia, Isabela, Olivia - "las 4 fantásticas"), acompañadas por Pep el elefante.

El primer producto es una **alfombra bebé acolchada plegable** disponible en dos tamaños:
- **Compacta:** 150×180×1.5 cm
- **XL:** 180×200×1.5 cm

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js v18+ (recomendado v22.21.1)
- npm v10+
- Python 3.12+ (para generar QR codes)

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/TU_USUARIO/elematt-website.git
cd elematt-website

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre http://localhost:4321/ en tu navegador.

## 🛠️ Comandos

| Comando | Acción |
|---------|--------|
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Construye el sitio para producción en `./dist/` |
| `npm run preview` | Previsualiza el build localmente |
| `./scripts/deploy.sh "mensaje"` | Despliega cambios a producción |
| `python3 scripts/generate-qr-codes.py` | Regenera QR codes |

## 📁 Estructura del Proyecto

```
elemat/
├── src/
│   ├── pages/              # Páginas (routing automático)
│   ├── components/         # Componentes reutilizables
│   ├── layouts/            # Plantillas
│   └── styles/             # Estilos globales
├── public/                 # Archivos estáticos
│   ├── images/             # Imágenes
│   ├── qr-codes/           # QR codes (dev y live)
│   └── brand/              # Logo y recursos de marca
└── scripts/                # Scripts de utilidad
```

## 🌐 Despliegue

Ver **[DESPLIEGUE-IONOS.md](DESPLIEGUE-IONOS.md)** para guía completa.

### Resumen Rápido

1. Sube código a GitHub
2. Conecta con Vercel
3. Configura DNS en IONOS
4. ¡Listo! Despliegues automáticos con cada `git push`

## 📝 Documentación

### Documentación Principal
- **[📚 Índice de Documentación](docs/README.md)** - Toda la documentación organizada
- **[✅ Tareas Pendientes](PENDIENTE.md)** - Estado del proyecto

### Acceso Rápido
- **[⚡ Comandos Rápidos](docs/development/COMANDOS-RAPIDOS.md)** - Comandos del día a día
- **[🚀 Despliegue](docs/deployment/DESPLIEGUE-IONOS.md)** - Publicar en IONOS
- **[⚙️ Configuración IDE](docs/development/CONFIGURACION-IDE.md)** - Setup del entorno
- **[♿ Accesibilidad](docs/accessibility/ACCESIBILIDAD-COLORES.md)** - WCAG 2.1 AA
- **[📊 SEO](docs/seo/SEO-CONFIG.md)** - Optimización SEO

## 🎨 Tecnologías

- **Astro** v5.15.3 - Framework web
- **Tailwind CSS** v3.4.17 - Estilos
- **Python** 3.12+ - QR codes
- **WCAG 2.1 AA** - Accesibilidad

## 📧 Contacto

- **Web:** https://elematt.com
- **Email:** contacto@elematt.com

---

**Hecho con ❤️ para bebés y familias**

