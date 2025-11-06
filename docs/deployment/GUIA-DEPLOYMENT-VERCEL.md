# 🚀 Guía de Deployment - ELEMATT en Vercel

**Fecha**: 2025-11-06  
**Objetivo**: Desplegar ELEMATT en Vercel para tener un entorno de desarrollo/staging siempre disponible

---

## 🎯 ¿Qué vas a conseguir?

✅ **URL pública**: `https://elematt.vercel.app` (o personalizada)  
✅ **Deploy automático**: Cada `git push` despliega en 30-60 segundos  
✅ **Preview URLs**: Cada branch tiene su propia URL  
✅ **HTTPS gratis**: Certificado SSL automático  
✅ **CDN global**: Tu web ultra rápida en todo el mundo  
✅ **Analytics**: Estadísticas de visitas gratis  

---

## 📋 PASO 1: Inicializar Git

### **1.1. Crear `.gitignore`**

Primero, asegúrate de tener un `.gitignore` para no subir archivos innecesarios:

```bash
# Crear .gitignore
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
package-lock.json

# Build output
dist/
.astro/

# Environment variables
.env
.env.local
.env.production

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Temporary files
*.tmp
.cache/
EOF
```

### **1.2. Inicializar repositorio**

```bash
# Inicializar Git
git init

# Añadir todos los archivos
git add .

# Primer commit
git commit -m "Initial commit - ELEMATT website"
```

---

## 📋 PASO 2: Crear Repositorio en GitHub

### **2.1. Crear cuenta en GitHub** (si no tienes)

1. Ve a: https://github.com
2. Click en "Sign up"
3. Completa el registro

### **2.2. Crear nuevo repositorio**

1. **Ve a**: https://github.com/new
2. **Repository name**: `elematt`
3. **Description**: `ELEMATT - Descubre la belleza en lo simple`
4. **Visibility**: `Private` (recomendado para desarrollo)
5. **NO marques**: "Initialize this repository with a README"
6. Click en **"Create repository"**

### **2.3. Conectar tu proyecto local con GitHub**

GitHub te mostrará comandos. Usa estos:

```bash
# Añadir remote
git remote add origin https://github.com/TU_USUARIO/elematt.git

# Renombrar branch a main
git branch -M main

# Subir código
git push -u origin main
```

**Ejemplo** (reemplaza `TU_USUARIO` con tu usuario de GitHub):
```bash
git remote add origin https://github.com/marigarcia/elematt.git
git branch -M main
git push -u origin main
```

---

## 📋 PASO 3: Desplegar en Vercel

### **3.1. Crear cuenta en Vercel**

1. **Ve a**: https://vercel.com
2. Click en **"Sign Up"**
3. **Selecciona**: "Continue with GitHub"
4. **Autoriza** Vercel para acceder a tus repositorios

### **3.2. Importar proyecto**

1. En el dashboard de Vercel, click en **"Add New..."** → **"Project"**
2. **Busca** tu repositorio `elematt`
3. Click en **"Import"**

### **3.3. Configurar proyecto**

Vercel detectará automáticamente que es Astro. Verifica:

```
Framework Preset: Astro
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**No cambies nada**, Vercel ya lo detectó correctamente.

### **3.4. Variables de entorno** (opcional)

Si tienes variables de entorno (API keys, etc.), añádelas aquí:

```
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### **3.5. Deploy!**

1. Click en **"Deploy"**
2. Espera 1-2 minutos
3. ✅ **¡Listo!** Tu web está en línea

---

## 🌐 PASO 4: Ver tu Web

### **4.1. URL de producción**

Vercel te dará una URL como:
```
https://elematt.vercel.app
```

O:
```
https://elematt-tu-usuario.vercel.app
```

### **4.2. Personalizar dominio**

Si quieres cambiar el nombre:

1. En Vercel, ve a tu proyecto
2. **Settings** → **Domains**
3. Añade: `elematt-staging.vercel.app` (o el que quieras)

---

## 🔄 PASO 5: Workflow de Desarrollo

### **5.1. Hacer cambios**

```bash
# 1. Edita tus archivos
# (por ejemplo, modificas src/components/Hero.astro)

# 2. Prueba localmente
npm run dev

# 3. Cuando estés satisfecho, guarda cambios
git add .
git commit -m "Añadido sistema de notificaciones"

# 4. Sube a GitHub
git push
```

### **5.2. Deploy automático**

- Vercel detecta el `git push`
- Inicia build automáticamente
- En 30-60 segundos, tu web está actualizada
- Recibes email/notificación con el deploy

### **5.3. Ver el deploy**

1. Ve a: https://vercel.com/dashboard
2. Click en tu proyecto `elematt`
3. Verás todos los deploys
4. Click en el último para ver detalles

---

## 🌿 PASO 6: Branches y Preview URLs

### **6.1. Crear branch de desarrollo**

```bash
# Crear branch para nueva feature
git checkout -b feature/nueva-funcionalidad

# Hacer cambios
# ...

# Commit
git add .
git commit -m "Nueva funcionalidad"

# Push
git push origin feature/nueva-funcionalidad
```

### **6.2. Preview URL automática**

Vercel crea automáticamente una URL de preview:
```
https://elematt-git-feature-nueva-funcionalidad-tu-usuario.vercel.app
```

**Ventajas**:
- ✅ Puedes probar la feature sin afectar producción
- ✅ Compartir con clientes/equipo para feedback
- ✅ Cada branch tiene su propia URL

### **6.3. Merge a main**

Cuando estés listo:

```bash
# Volver a main
git checkout main

# Merge
git merge feature/nueva-funcionalidad

# Push (esto despliega a producción)
git push
```

---

## 📊 PASO 7: Monitorear tu Web

### **7.1. Analytics**

Vercel ofrece analytics gratis:

1. En tu proyecto, ve a **"Analytics"**
2. Verás:
   - Visitas
   - Páginas más vistas
   - Países
   - Dispositivos

### **7.2. Logs**

Para ver errores:

1. Ve a **"Deployments"**
2. Click en un deploy
3. **"View Function Logs"**

---

## 🔧 CONFIGURACIÓN AVANZADA

### **Archivo `vercel.json`** (ya lo tienes)

Tu `vercel.json` actual está perfecto:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro",
  "headers": [...],
  "redirects": [...]
}
```

### **Optimizaciones adicionales**

Si quieres añadir más optimizaciones:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro",
  
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ],
  
  "redirects": [
    {
      "source": "/index.html",
      "destination": "/",
      "permanent": true
    }
  ],
  
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🎨 PASO 8: Dominio Personalizado (Futuro)

Cuando quieras usar tu dominio real (`elematt.com`):

### **8.1. En Vercel**

1. **Settings** → **Domains**
2. **Add**: `elematt.com`
3. Vercel te dará registros DNS

### **8.2. En tu proveedor de dominio**

Añade estos registros DNS:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### **8.3. Espera propagación**

- DNS tarda 1-48 horas en propagarse
- Vercel emitirá certificado SSL automáticamente

---

## 🚨 TROUBLESHOOTING

### **Error: Build failed**

**Solución**:
1. Revisa los logs en Vercel
2. Asegúrate de que `npm run build` funciona localmente
3. Verifica que todas las dependencias estén en `package.json`

### **Error: 404 en rutas**

**Solución**:
Añade a `vercel.json`:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### **Error: Imágenes no cargan**

**Solución**:
- Verifica que las imágenes estén en `public/`
- Usa rutas absolutas: `/images/foto.jpg` (no `./images/foto.jpg`)

### **Error: Git push rechazado**

**Solución**:
```bash
# Pull primero
git pull origin main

# Luego push
git push origin main
```

---

## 📱 PASO 9: Compartir con Clientes

### **9.1. URL de staging**

Comparte la URL de Vercel:
```
https://elematt.vercel.app
```

### **9.2. Proteger con contraseña** (opcional)

Vercel Pro permite proteger con contraseña, pero para gratis:

**Opción A**: Usar Vercel Password Protection (requiere plan Pro)

**Opción B**: Añadir autenticación básica en Astro:

```astro
---
// src/middleware/auth.ts
const STAGING_PASSWORD = 'elematt2025';

export function onRequest({ request, redirect }, next) {
  const url = new URL(request.url);
  const password = url.searchParams.get('password');
  
  if (password !== STAGING_PASSWORD) {
    return new Response('Unauthorized', { status: 401 });
  }
  
  return next();
}
---
```

Luego comparte:
```
https://elematt.vercel.app?password=elematt2025
```

---

## ✅ CHECKLIST FINAL

### **Antes del primer deploy**
- [ ] `.gitignore` creado
- [ ] Git inicializado
- [ ] Repositorio GitHub creado
- [ ] Código subido a GitHub
- [ ] Cuenta Vercel creada
- [ ] Proyecto importado en Vercel

### **Después del primer deploy**
- [ ] URL funciona correctamente
- [ ] Todas las páginas cargan
- [ ] Imágenes se ven
- [ ] Estilos aplicados
- [ ] Animaciones funcionan
- [ ] Botones de notificación visibles
- [ ] Modal funciona

### **Workflow establecido**
- [ ] `git add . && git commit -m "mensaje"`
- [ ] `git push`
- [ ] Vercel despliega automáticamente
- [ ] Verificar deploy en Vercel dashboard

---

## 🎯 COMANDOS RÁPIDOS

### **Desarrollo local**
```bash
npm run dev
```

### **Build local (probar antes de deploy)**
```bash
npm run build
npm run preview
```

### **Deploy a Vercel**
```bash
git add .
git commit -m "Descripción de cambios"
git push
```

### **Ver logs de Vercel**
```bash
# Instalar Vercel CLI (opcional)
npm i -g vercel

# Ver logs
vercel logs
```

---

## 📚 RECURSOS

### **Documentación**
- **Vercel**: https://vercel.com/docs
- **Astro en Vercel**: https://docs.astro.build/en/guides/deploy/vercel/
- **Git**: https://git-scm.com/doc

### **Soporte**
- **Vercel Discord**: https://vercel.com/discord
- **Astro Discord**: https://astro.build/chat

---

## 🎉 RESULTADO FINAL

### **Antes**
```
❌ Solo disponible en localhost:4321
❌ No se puede compartir con clientes
❌ Cambios solo visibles localmente
```

### **Después**
```
✅ Disponible 24/7 en https://elematt.vercel.app
✅ Compartible con clientes/equipo
✅ Deploy automático en cada push
✅ Preview URLs para cada branch
✅ HTTPS y CDN gratis
✅ Analytics incluido
```

---

**Creado**: 2025-11-06  
**Versión**: 1.0  
**Próximo paso**: Ejecutar comandos del PASO 1

