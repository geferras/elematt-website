# Despliegue en IONOS - Guía Completa

## 🎯 Objetivo

Publicar la web ELEMATT en tu dominio de IONOS y establecer un flujo de trabajo para hacer cambios locales y publicarlos.

---

## 📋 Opciones de Despliegue

### Opción 1: Vercel (RECOMENDADO) ⭐
**Ventajas:**
- ✅ **GRATIS** para proyectos personales
- ✅ **Automático** - Push a Git y se despliega solo
- ✅ **CDN global** - Velocidad máxima
- ✅ **SSL/HTTPS** automático
- ✅ **Preview** de cada cambio antes de publicar
- ✅ **Rollback** instantáneo si algo falla
- ✅ **Optimizado para Astro**

**Desventajas:**
- ⚠️ Necesitas conectar tu dominio de IONOS

### Opción 2: IONOS Deploy Now
**Ventajas:**
- ✅ Integrado con tu cuenta IONOS
- ✅ Gratis con tu hosting
- ✅ Conecta con GitHub automáticamente

**Desventajas:**
- ⚠️ Menos optimizado que Vercel
- ⚠️ Configuración más manual

### Opción 3: FTP Manual (NO RECOMENDADO)
**Ventajas:**
- ✅ Control total

**Desventajas:**
- ❌ Lento y manual
- ❌ Sin rollback
- ❌ Sin preview
- ❌ Propenso a errores

---

## 🚀 OPCIÓN 1: Vercel + IONOS (RECOMENDADO)

### Paso 1: Preparar el Proyecto

#### 1.1 Crear repositorio Git (si no existe)

```bash
# En la carpeta del proyecto
cd /media/guillermo/DATA/PERS/WebsMari/ELEMATT/proyecto/elemat

# Inicializar Git
git init

# Crear .gitignore (ya existe)
# Añadir archivos
git add .
git commit -m "Initial commit - ELEMATT website"
```

#### 1.2 Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `elematt-website`
3. Descripción: `ELEMATT - Alfombras bebé acolchadas plegables`
4. Privado o Público (tu elección)
5. **NO** marcar "Initialize with README"
6. Click "Create repository"

#### 1.3 Conectar repositorio local con GitHub

```bash
# Añadir remote (sustituye TU_USUARIO por tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/elematt-website.git

# Subir código
git branch -M main
git push -u origin main
```

---

### Paso 2: Desplegar en Vercel

#### 2.1 Crear cuenta en Vercel

1. Ve a https://vercel.com/signup
2. Click "Continue with GitHub"
3. Autoriza Vercel en GitHub

#### 2.2 Importar proyecto

1. En Vercel Dashboard: Click "Add New..." → "Project"
2. Busca `elematt-website`
3. Click "Import"

#### 2.3 Configurar proyecto

```
Framework Preset: Astro
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**Variables de entorno (si las necesitas):**
```
# Ninguna por ahora
```

4. Click "Deploy"
5. **Espera 1-2 minutos** ⏳

#### 2.4 Verificar despliegue

Vercel te dará una URL temporal:
```
https://elematt-website-xxxxx.vercel.app
```

**Prueba:**
- ✅ Abre la URL
- ✅ Verifica que todo funciona
- ✅ Prueba los QR codes (apuntan a localhost, los cambiaremos)

---

### Paso 3: Conectar Dominio de IONOS

#### 3.1 Obtener configuración DNS de Vercel

1. En Vercel: Ve a tu proyecto → "Settings" → "Domains"
2. Escribe tu dominio: `elematt.com` (o el que tengas)
3. Click "Add"
4. Vercel te mostrará los registros DNS necesarios:

```
Tipo: A
Nombre: @
Valor: 76.76.21.21

Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

#### 3.2 Configurar DNS en IONOS

1. **Login en IONOS:**
   - Ve a https://www.ionos.es/
   - Login con tu cuenta

2. **Acceder a DNS:**
   - Panel de control → "Dominios y SSL"
   - Click en tu dominio (ej: `elematt.com`)
   - Click "Gestionar DNS" o "DNS Settings"

3. **Añadir registros DNS:**

   **Registro A:**
   ```
   Tipo: A
   Host: @ (o dejar vacío)
   Apunta a: 76.76.21.21
   TTL: 3600 (o automático)
   ```

   **Registro CNAME:**
   ```
   Tipo: CNAME
   Host: www
   Apunta a: cname.vercel-dns.com
   TTL: 3600 (o automático)
   ```

4. **Guardar cambios**

#### 3.3 Esperar propagación DNS

- ⏳ **Tiempo:** 5 minutos a 48 horas (normalmente 15-30 minutos)
- 🔍 **Verificar:** https://dnschecker.org/

#### 3.4 Verificar en Vercel

1. Vuelve a Vercel → Settings → Domains
2. Espera a que aparezca ✅ junto a tu dominio
3. Vercel configurará SSL automáticamente

**Resultado:**
- ✅ `https://elematt.com` → Tu web
- ✅ `https://www.elematt.com` → Tu web
- ✅ SSL/HTTPS automático

---

### Paso 4: Actualizar QR Codes para Producción

Ahora que tienes el dominio funcionando, actualiza los QR codes:

```bash
# Editar el script
nano scripts/generate-qr-codes.py
```

Cambia la URL de producción:
```python
URLS = {
    'dev': {
        '150x180': 'http://localhost:4321/productos/alfombra-bebe/150x180',
        '180x200': 'http://localhost:4321/productos/alfombra-bebe/180x200',
    },
    'live': {
        '150x180': 'https://elematt.com/productos/alfombra-bebe/150x180',  # ← Cambiar
        '180x200': 'https://elematt.com/productos/alfombra-bebe/180x200',  # ← Cambiar
    }
}
```

Regenerar QR codes:
```bash
python3 scripts/generate-qr-codes.py
```

Subir cambios:
```bash
git add public/qr-codes/live/
git commit -m "Update QR codes with production domain"
git push
```

**Vercel desplegará automáticamente** en 1-2 minutos ✨

---

## 🔄 Flujo de Trabajo Diario

### Hacer Cambios Locales

```bash
# 1. Asegúrate de tener la última versión
git pull

# 2. Inicia el servidor de desarrollo
npm run dev

# 3. Haz tus cambios en los archivos
# Edita src/pages/index.astro, etc.

# 4. Verifica en http://localhost:4321/

# 5. Cuando estés satisfecho, guarda los cambios
git add .
git commit -m "Descripción de los cambios"

# 6. Sube a GitHub
git push

# 7. Vercel despliega automáticamente en 1-2 minutos
# Recibirás un email de confirmación
```

### Preview de Cambios (Antes de Publicar)

Vercel crea un **preview** automático para cada commit:

```bash
# Crea una rama para probar
git checkout -b nueva-funcionalidad

# Haz cambios
# ...

# Sube la rama
git add .
git commit -m "Nueva funcionalidad"
git push -u origin nueva-funcionalidad
```

**Vercel creará:**
- 🔗 URL de preview: `https://elematt-website-git-nueva-funcionalidad-xxxxx.vercel.app`
- 📧 Email con el link
- 💬 Comentario en GitHub (si tienes PR)

**Cuando estés seguro:**
```bash
# Vuelve a main
git checkout main

# Fusiona los cambios
git merge nueva-funcionalidad

# Sube a producción
git push

# Borra la rama
git branch -d nueva-funcionalidad
```

---

## 📊 Monitoreo y Analytics

### Vercel Analytics (Gratis)

1. En Vercel: Proyecto → "Analytics"
2. Click "Enable Analytics"
3. **Gratis hasta 100k pageviews/mes**

**Métricas:**
- 📈 Visitas
- ⚡ Velocidad de carga
- 🌍 Ubicación de visitantes
- 📱 Dispositivos

### Google Analytics (Pendiente)

Ya está configurado en `src/layouts/Layout.astro` (líneas 60-68):

```astro
<!-- Google Analytics -->
<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script> -->
```

**Para activar:**
1. Crea cuenta en https://analytics.google.com/
2. Obtén tu ID (G-XXXXXXXXXX)
3. Descomenta el código
4. Sustituye G-XXXXXXXXXX por tu ID real
5. Commit y push

---

## 🛠️ Comandos Útiles

### Desarrollo Local

```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción (probar localmente)
npm run build

# Previsualizar build de producción
npm run preview

# Limpiar caché
rm -rf .astro node_modules/.vite
npm install
```

### Git

```bash
# Ver estado
git status

# Ver cambios
git diff

# Ver historial
git log --oneline

# Deshacer cambios (antes de commit)
git checkout -- archivo.astro

# Deshacer último commit (mantener cambios)
git reset --soft HEAD~1

# Ver ramas
git branch

# Cambiar de rama
git checkout nombre-rama
```

### Vercel CLI (Opcional)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Desplegar desde terminal
vercel

# Desplegar a producción
vercel --prod

# Ver logs
vercel logs
```

---

## 🔒 Seguridad

### Variables de Entorno

Si necesitas claves API (Amazon, Analytics, etc.):

**En Vercel:**
1. Proyecto → Settings → Environment Variables
2. Añade: `AMAZON_AFFILIATE_ID=tu-id`
3. Redeploy

**En local (.env):**
```bash
# Crear archivo .env (ya está en .gitignore)
echo "AMAZON_AFFILIATE_ID=tu-id" > .env
```

**En código:**
```astro
---
const affiliateId = import.meta.env.AMAZON_AFFILIATE_ID;
---
```

### SSL/HTTPS

- ✅ Vercel lo configura automáticamente
- ✅ Certificado renovado automáticamente
- ✅ Redirección HTTP → HTTPS automática

---

## 📱 Optimizaciones

### Imágenes

```bash
# Instalar plugin de optimización
npm install @astrojs/image
```

```javascript
// astro.config.mjs
import image from '@astrojs/image';

export default defineConfig({
  integrations: [tailwind(), image()],
});
```

### Sitemap

```bash
# Instalar plugin
npm install @astrojs/sitemap
```

```javascript
// astro.config.mjs
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://elematt.com',
  integrations: [tailwind(), sitemap()],
});
```

---

## 🐛 Solución de Problemas

### Error: "Build failed"

```bash
# Verifica que funciona localmente
npm run build

# Si falla, revisa los errores
# Normalmente: imports incorrectos, sintaxis, etc.
```

### DNS no propaga

```bash
# Verificar DNS
nslookup elematt.com

# Verificar desde múltiples ubicaciones
# https://dnschecker.org/
```

### Vercel no despliega

```bash
# Verifica que el push llegó a GitHub
git log --oneline

# Verifica en Vercel Dashboard → Deployments
# Revisa los logs de error
```

### QR codes no funcionan

```bash
# Verifica las URLs en el script
cat scripts/generate-qr-codes.py | grep "https://"

# Regenera los QR codes
python3 scripts/generate-qr-codes.py

# Verifica que se generaron
ls -lh public/qr-codes/live/alfombra-150x180/
```

---

## 📚 Recursos

### Documentación Oficial
- [Vercel Docs](https://vercel.com/docs)
- [Astro Deployment](https://docs.astro.build/en/guides/deploy/)
- [IONOS DNS](https://www.ionos.es/ayuda/dominios/configurar-dns/)

### Herramientas
- [DNS Checker](https://dnschecker.org/)
- [SSL Checker](https://www.sslshopper.com/ssl-checker.html)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

## ✅ Checklist de Despliegue

- [ ] Código en GitHub
- [ ] Proyecto importado en Vercel
- [ ] Primer despliegue exitoso
- [ ] DNS configurado en IONOS
- [ ] Dominio verificado en Vercel
- [ ] SSL/HTTPS funcionando
- [ ] QR codes actualizados con dominio real
- [ ] Google Analytics configurado
- [ ] Sitemap generado
- [ ] Robots.txt configurado
- [ ] Pruebas en móvil
- [ ] Pruebas en diferentes navegadores

---

**¿Listo para empezar?** 🚀

Sigue los pasos de la **Opción 1** y en 30 minutos tendrás tu web en producción.

