# Estructura del Proyecto ELEMATT

## 📁 Estructura de Archivos

```
elemat/
├── docs/                           # 📚 Documentación
│   ├── README.md                   # Índice de documentación
│   ├── deployment/                 # Despliegue
│   │   └── DESPLIEGUE-IONOS.md    # Guía completa de despliegue
│   ├── development/                # Desarrollo
│   │   ├── COMANDOS-RAPIDOS.md    # Comandos del día a día
│   │   └── CONFIGURACION-IDE.md   # Setup del entorno
│   ├── accessibility/              # Accesibilidad
│   │   └── ACCESIBILIDAD-COLORES.md
│   ├── seo/                        # SEO
│   │   └── SEO-CONFIG.md
│   └── ESTRUCTURA-PROYECTO.md      # Este archivo
│
├── src/                            # 💻 Código fuente
│   ├── pages/                      # Páginas (routing automático)
│   │   ├── index.astro            # Inicio
│   │   ├── historia.astro         # Historia de Elena
│   │   ├── contacto.astro         # Contacto
│   │   ├── filosofia.astro        # Filosofía
│   │   ├── sobre-nosotros.astro   # Sobre nosotros
│   │   ├── productos/             # Productos
│   │   │   └── alfombra-bebe/
│   │   │       ├── index.astro    # Página general (elige variante)
│   │   │       ├── 150x180.astro  # Variante Compacta
│   │   │       └── 180x200.astro  # Variante XL
│   │   └── colecciones/           # Colecciones
│   │       ├── hogar.astro
│   │       ├── accesorios.astro
│   │       ├── bienestar.astro
│   │       └── decoracion.astro
│   │
│   ├── components/                 # Componentes reutilizables
│   │   ├── Header.astro           # Menú de navegación (2 niveles)
│   │   ├── Footer.astro           # Pie de página + redes sociales
│   │   ├── Hero.astro             # Sección hero
│   │   ├── Section.astro          # Sección genérica
│   │   └── ProductCard.astro      # Tarjeta de producto
│   │
│   ├── layouts/                    # Plantillas
│   │   └── Layout.astro           # Layout principal (SEO, Header, Footer)
│   │
│   └── styles/                     # Estilos
│       └── global.css             # Variables CSS, botones, etc.
│
├── public/                         # 🌐 Archivos estáticos
│   ├── images/                     # Imágenes
│   │   ├── products/              # Productos
│   │   │   └── baby-mat/
│   │   │       └── shared/
│   │   └── brand/                 # Marca
│   │
│   ├── qr-codes/                   # QR Codes
│   │   ├── README.md              # Documentación de QR
│   │   ├── dev/                   # Para testing (localhost)
│   │   │   └── alfombra-bebe/
│   │   │       ├── qr_2x2cm.png
│   │   │       ├── qr_3x3cm.png
│   │   │       ├── qr_4x4cm.png
│   │   │       └── qr_5x5cm.png
│   │   └── live/                  # Para producción (elematt.com)
│   │       └── alfombra-bebe/
│   │           ├── qr_2x2cm.png
│   │           ├── qr_3x3cm.png
│   │           ├── qr_4x4cm.png
│   │           └── qr_5x5cm.png
│   │
│   ├── brand/                      # Recursos de marca
│   │   └── pep-elefante.jpg       # Logo/mascota
│   │
│   ├── robots.txt                  # SEO
│   └── sitemap.xml                 # SEO
│
├── scripts/                        # 🔧 Scripts de utilidad
│   ├── generate-qr-codes.py      # Generador de QR codes
│   └── deploy.sh                  # Script de despliegue
│
├── resources/                      # 📦 Recursos originales
│   └── originals/                 # Archivos originales (backup)
│       ├── products/
│       └── brand/
│
├── .vscode/                        # VSCode config
│   ├── settings.json
│   └── extensions.json
│
├── .idea/                          # IntelliJ IDEA config
│   └── watcherTasks.xml
│
├── .editorconfig                   # Editor config
├── .nvmrc                          # Node version (22.21.1)
├── .gitignore                      # Git ignore
├── astro.config.mjs               # Astro config
├── tailwind.config.mjs            # Tailwind config
├── vercel.json                     # Vercel config
├── package.json                    # Dependencias
├── README.md                       # README principal
└── PENDIENTE.md                    # Tareas pendientes
```

---

## 🗺️ Mapa de Navegación

### Estructura del Menú

```
┌─────────────────────────────────────────────────────────┐
│                    HEADER (Header.astro)                 │
├─────────────────────────────────────────────────────────┤
│  Logo  │  Inicio  │  Historia  │  Productos ▼  │  Contacto  │
│                                      │                   │
│                                      └─► Alfombra Bebé Plegable ►
│                                                │
│                                                ├─► Compacta 150×180 cm
│                                                └─► XL 180×200 cm
└─────────────────────────────────────────────────────────┘
```

### Flujo de Usuario

```
QR Code (packaging)
    │
    ▼
/productos/alfombra-bebe/  ◄─── Página general
    │
    ├─► Ver Detalles (Compacta) ──► /productos/alfombra-bebe/150x180
    │
    └─► Ver Detalles (XL) ──────► /productos/alfombra-bebe/180x200
```

---

## 🎨 Paleta de Colores

### Colores Principales (Decorativos)
```css
--color-melon: #F4C2B8;        /* Melón Empolvado */
--color-salvia: #A8B5A0;       /* Verde Salvia */
--color-lino: #E8E4D9;         /* Lino Suave */
--color-perla: #E1E3E2;        /* Gris Perla */
--color-arena: #DABF9C;        /* Arena Clara */
```

### Colores para Botones (WCAG AA)
```css
--color-melon-dark: #D4856F;   /* Ratio 4.52:1 ✅ */
--color-salvia-dark: #6C806B;  /* Ratio 4.51:1 ✅ */
--color-arena-dark: #B8935A;   /* Ratio 4.53:1 ✅ */
```

---

## 🔗 URLs del Sitio

### Páginas Principales
- `/` - Inicio
- `/historia` - Historia de Elena
- `/filosofia` - Filosofía de la marca
- `/sobre-nosotros` - Sobre nosotros
- `/contacto` - Contacto

### Productos
- `/productos/alfombra-bebe/` - **Página general** (elige variante)
- `/productos/alfombra-bebe/150x180` - Variante Compacta
- `/productos/alfombra-bebe/180x200` - Variante XL

### Colecciones
- `/colecciones` - Todas las colecciones
- `/colecciones/hogar` - Hogar
- `/colecciones/accesorios` - Accesorios
- `/colecciones/bienestar` - Bienestar
- `/colecciones/decoracion` - Decoración

---

## 📱 Redes Sociales

### Enlaces Configurados
- **Instagram**: https://instagram.com/elematt
- **Pinterest**: https://pinterest.com/elematt
- **Facebook**: https://facebook.com/elematt
- **TikTok**: https://tiktok.com/@elematt

### Ubicaciones
1. **Footer** (todas las páginas)
   - Iconos SVG con efectos hover
   - Fondo circular con gradiente

2. **Página de Contacto**
   - Sección "Síguenos"
   - Iconos más grandes con gradiente
   - Animaciones al hover

---

## 🎯 QR Codes

### Estructura
```
public/qr-codes/
├── dev/                    # Testing (localhost:4321)
│   └── alfombra-bebe/
│       ├── qr_2x2cm.png   # 472×472 px @ 600 DPI
│       ├── qr_3x3cm.png   # 708×708 px @ 600 DPI
│       ├── qr_4x4cm.png   # 944×944 px @ 600 DPI
│       └── qr_5x5cm.png   # 1181×1181 px @ 600 DPI
└── live/                   # Producción (elematt.com)
    └── alfombra-bebe/
        ├── qr_2x2cm.png
        ├── qr_3x3cm.png
        ├── qr_4x4cm.png
        └── qr_5x5cm.png
```

### Destino
- **Dev**: `http://localhost:4321/productos/alfombra-bebe?utm_source=packaging&utm_medium=qr&utm_campaign=alfombra_bebe`
- **Live**: `https://elematt.com/productos/alfombra-bebe?utm_source=packaging&utm_medium=qr&utm_campaign=alfombra_bebe`

### Características
- ✅ Color Verde Salvia (#A8B5A0)
- ✅ Logo Pep en el centro (20% del área)
- ✅ Fondo blanco circular para el logo
- ✅ 600 DPI para impresión profesional
- ✅ Alta corrección de errores (30%)
- ✅ Tracking con parámetros UTM

---

## 🛠️ Tecnologías

### Frontend
- **Astro** v5.15.3 - Framework web
- **Tailwind CSS** v3.4.17 - Estilos
- **TypeScript** v5.7.2 - Type checking

### Backend/Build
- **Node.js** v22.21.1
- **npm** v10.9.4
- **Vite** - Build tool (integrado en Astro)

### Herramientas
- **Python** 3.12+ - Generación de QR codes
- **qrcode[pil]** - Librería de QR
- **Pillow** - Procesamiento de imágenes

### Despliegue
- **Vercel** - Hosting (recomendado)
- **GitHub** - Control de versiones
- **IONOS** - DNS y dominio

---

## 📊 Métricas de Accesibilidad

### WCAG 2.1 Level AA
- ✅ Contraste de color: 4.5:1 mínimo
- ✅ Navegación por teclado
- ✅ Textos alternativos
- ✅ Estructura semántica HTML5
- ✅ ARIA labels en iconos

### Auditoría Completa
Ver: `docs/accessibility/ACCESIBILIDAD-COLORES.md`

---

## 🚀 Comandos Principales

```bash
# Desarrollo
npm run dev              # Servidor local (localhost:4321)
npm run build            # Build para producción
npm run preview          # Preview del build

# QR Codes
python3 scripts/generate-qr-codes.py

# Despliegue
./scripts/deploy.sh "mensaje del commit"
```

---

## 📚 Documentación Relacionada

- **[README.md](../README.md)** - Inicio rápido
- **[PENDIENTE.md](../PENDIENTE.md)** - Tareas pendientes
- **[docs/README.md](README.md)** - Índice de documentación
- **[docs/deployment/DESPLIEGUE-IONOS.md](deployment/DESPLIEGUE-IONOS.md)** - Despliegue
- **[docs/development/COMANDOS-RAPIDOS.md](development/COMANDOS-RAPIDOS.md)** - Comandos
- **[docs/accessibility/ACCESIBILIDAD-COLORES.md](accessibility/ACCESIBILIDAD-COLORES.md)** - Accesibilidad
- **[docs/seo/SEO-CONFIG.md](seo/SEO-CONFIG.md)** - SEO

---

**Última actualización**: 2025-11-01

