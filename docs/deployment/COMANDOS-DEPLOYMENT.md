# 🚀 COMANDOS PARA DESPLEGAR ELEMATT EN VERCEL

**Fecha**: 2025-11-06  
**Tiempo estimado**: 10-15 minutos

---

## ✅ RESUMEN EJECUTIVO

Vas a conseguir:
- 🌐 **URL pública**: `https://elematt.vercel.app`
- 🔄 **Deploy automático**: Cada `git push` actualiza la web en 30-60s
- 🆓 **Gratis**: Plan gratuito de Vercel
- 🚀 **CDN global**: Tu web ultra rápida en todo el mundo

---

## 📋 PASO 1: INICIALIZAR GIT (5 minutos)

### **Ejecuta estos comandos en tu terminal**:

```bash
# 1. Ve a la carpeta del proyecto
cd /media/guillermo/DATA/PERS/WebsMari/ELEMATT/proyecto/elemat

# 2. Inicializar Git
git init

# 3. Añadir todos los archivos
git add .

# 4. Primer commit
git commit -m "Initial commit - ELEMATT website con sistema de notificaciones"

# 5. Renombrar branch a main
git branch -M main
```

**✅ Verificar**:
```bash
git status
# Debería decir: "On branch main, nothing to commit, working tree clean"
```

---

## 📋 PASO 2: CREAR REPOSITORIO EN GITHUB (3 minutos)

### **2.1. En el navegador**:

1. **Ve a**: https://github.com/new
2. **Completa**:
   - Repository name: `elematt`
   - Description: `ELEMATT - Descubre la belleza en lo simple`
   - Visibility: **Private** ✅ (recomendado)
   - **NO marques** "Initialize this repository with a README"
3. **Click**: "Create repository"

### **2.2. Conectar con GitHub**:

GitHub te mostrará comandos. **Copia tu usuario de GitHub** y ejecuta:

```bash
# REEMPLAZA "TU_USUARIO" con tu usuario real de GitHub
git remote add origin https://github.com/TU_USUARIO/elematt.git

# Ejemplo:
# git remote add origin https://github.com/marigarcia/elematt.git

# Subir código
git push -u origin main
```

**Si te pide usuario/contraseña**:
- Usuario: Tu usuario de GitHub
- Contraseña: **Personal Access Token** (no tu contraseña normal)

**Crear Personal Access Token**:
1. Ve a: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Marca: `repo` (Full control of private repositories)
4. Click "Generate token"
5. **Copia el token** (solo se muestra una vez)
6. Úsalo como contraseña

**✅ Verificar**:
```bash
git remote -v
# Debería mostrar:
# origin  https://github.com/TU_USUARIO/elematt.git (fetch)
# origin  https://github.com/TU_USUARIO/elematt.git (push)
```

---

## 📋 PASO 3: DESPLEGAR EN VERCEL (5 minutos)

### **3.1. Crear cuenta en Vercel**:

1. **Ve a**: https://vercel.com
2. **Click**: "Sign Up"
3. **Selecciona**: "Continue with GitHub"
4. **Autoriza** Vercel

### **3.2. Importar proyecto**:

1. En Vercel dashboard, **click**: "Add New..." → "Project"
2. **Busca**: `elematt`
3. **Click**: "Import"

### **3.3. Configurar** (Vercel lo detecta automáticamente):

```
Framework Preset: Astro ✅
Build Command: npm run build ✅
Output Directory: dist ✅
Install Command: npm install ✅
```

**NO CAMBIES NADA**

### **3.4. Deploy**:

1. **Click**: "Deploy"
2. **Espera**: 1-2 minutos
3. **✅ ¡LISTO!**

---

## 🌐 PASO 4: VER TU WEB

Vercel te dará una URL como:
```
https://elematt.vercel.app
```

O:
```
https://elematt-tu-usuario.vercel.app
```

**Prueba todas las páginas**:
- ✅ Home: `https://elematt.vercel.app/`
- ✅ Producto: `https://elematt.vercel.app/productos/alfombra-bebe/`
- ✅ Variante 150×180: `https://elematt.vercel.app/productos/alfombra-bebe/150x180`
- ✅ Variante 180×200: `https://elematt.vercel.app/productos/alfombra-bebe/180x200`
- ✅ Contacto: `https://elematt.vercel.app/contacto`

---

## 🔄 PASO 5: WORKFLOW DIARIO

### **Cuando hagas cambios en el código**:

```bash
# 1. Edita tus archivos
# (por ejemplo, modificas src/components/Hero.astro)

# 2. Prueba localmente
npm run dev
# Abre http://localhost:4321 y verifica que funciona

# 3. Guarda cambios en Git
git add .
git commit -m "Descripción de lo que cambiaste"

# Ejemplos de mensajes:
# git commit -m "Añadido botón de notificaciones en Footer"
# git commit -m "Mejorado diseño del modal de suscripción"
# git commit -m "Optimizadas imágenes de productos"

# 4. Sube a GitHub (esto despliega automáticamente)
git push
```

### **Vercel hace el resto**:
- ✅ Detecta el `git push`
- ✅ Inicia build automáticamente
- ✅ En 30-60 segundos, tu web está actualizada
- ✅ Recibes email con confirmación

---

## 🌿 PASO 6: TRABAJAR CON BRANCHES (Opcional pero recomendado)

### **Para probar features sin afectar producción**:

```bash
# 1. Crear branch para nueva feature
git checkout -b feature/nueva-funcionalidad

# 2. Hacer cambios
# ...

# 3. Commit
git add .
git commit -m "Nueva funcionalidad implementada"

# 4. Push
git push origin feature/nueva-funcionalidad
```

**Vercel crea automáticamente una Preview URL**:
```
https://elematt-git-feature-nueva-funcionalidad-tu-usuario.vercel.app
```

**Ventajas**:
- ✅ Pruebas sin afectar producción
- ✅ Compartir con clientes para feedback
- ✅ Cada branch tiene su URL

### **Cuando estés listo para producción**:

```bash
# 1. Volver a main
git checkout main

# 2. Merge
git merge feature/nueva-funcionalidad

# 3. Push (esto despliega a producción)
git push
```

---

## 🚨 COMANDOS DE EMERGENCIA

### **Si algo sale mal**:

```bash
# Ver estado de Git
git status

# Ver historial de commits
git log --oneline

# Deshacer último commit (mantiene cambios)
git reset --soft HEAD~1

# Deshacer cambios en un archivo
git checkout -- nombre-archivo.astro

# Ver diferencias antes de commit
git diff

# Ver qué archivos cambiaron
git status
```

### **Si el push falla**:

```bash
# Pull primero (traer cambios remotos)
git pull origin main

# Resolver conflictos si hay
# (edita archivos, luego:)
git add .
git commit -m "Resueltos conflictos"

# Push de nuevo
git push origin main
```

---

## 📊 VERIFICAR DEPLOYMENT

### **En Vercel Dashboard**:

1. **Ve a**: https://vercel.com/dashboard
2. **Click** en tu proyecto `elematt`
3. **Verás**:
   - ✅ Último deployment
   - ✅ Estado (Building / Ready)
   - ✅ URL de producción
   - ✅ Preview URLs

### **Ver logs de build**:

1. Click en un deployment
2. **"View Function Logs"**
3. Verás todo el proceso de build

---

## 🎯 CHECKLIST RÁPIDO

### **Primera vez**:
- [ ] `git init`
- [ ] `git add .`
- [ ] `git commit -m "Initial commit"`
- [ ] `git branch -M main`
- [ ] Crear repo en GitHub
- [ ] `git remote add origin https://github.com/TU_USUARIO/elematt.git`
- [ ] `git push -u origin main`
- [ ] Crear cuenta en Vercel
- [ ] Importar proyecto en Vercel
- [ ] Deploy
- [ ] Verificar URL funciona

### **Cada vez que hagas cambios**:
- [ ] `npm run dev` (probar localmente)
- [ ] `git add .`
- [ ] `git commit -m "Mensaje descriptivo"`
- [ ] `git push`
- [ ] Esperar 30-60s
- [ ] Verificar en Vercel que el deploy fue exitoso
- [ ] Abrir URL y verificar cambios

---

## 🎨 PERSONALIZAR DOMINIO (Futuro)

### **Cambiar nombre en Vercel**:

1. En Vercel, ve a tu proyecto
2. **Settings** → **Domains**
3. **Add**: `elematt-staging.vercel.app`
4. Vercel lo asignará si está disponible

### **Usar dominio propio** (cuando lo compres):

1. **Settings** → **Domains**
2. **Add**: `elematt.com`
3. Vercel te dará registros DNS:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Añade estos registros en tu proveedor de dominio
5. Espera 1-48 horas para propagación DNS
6. ✅ Vercel emitirá certificado SSL automáticamente

---

## 💡 TIPS PRO

### **1. Commits descriptivos**:
```bash
# ❌ Mal
git commit -m "cambios"
git commit -m "fix"

# ✅ Bien
git commit -m "Añadido sistema de notificaciones con modal"
git commit -m "Optimizadas imágenes de productos (reducido 40% peso)"
git commit -m "Corregido bug en selector de variantes"
```

### **2. Push frecuente**:
```bash
# Haz push varias veces al día
# No acumules muchos cambios
```

### **3. Probar antes de push**:
```bash
# SIEMPRE prueba localmente antes de push
npm run dev

# Y también prueba el build
npm run build
npm run preview
```

### **4. Ver preview antes de merge**:
```bash
# Usa branches para features grandes
# Verifica la Preview URL
# Solo merge a main cuando esté perfecto
```

---

## 📱 COMPARTIR CON CLIENTES

### **URL de staging**:
```
https://elematt.vercel.app
```

### **URL de feature específica**:
```
https://elematt-git-feature-nombre-tu-usuario.vercel.app
```

### **Mensaje para clientes**:
```
Hola,

Puedes ver la web de ELEMATT en:
https://elematt.vercel.app

Esta es la versión de desarrollo/staging.
Se actualiza automáticamente cuando hago cambios.

Cualquier feedback es bienvenido.

Saludos,
[Tu nombre]
```

---

## 🎉 RESULTADO FINAL

### **Antes**:
```
❌ Solo en localhost:4321
❌ No compartible
❌ Cambios solo locales
```

### **Después**:
```
✅ https://elematt.vercel.app (24/7)
✅ Compartible con clientes
✅ Deploy automático en cada push
✅ Preview URLs para branches
✅ HTTPS + CDN gratis
✅ Analytics incluido
```

---

## 📞 AYUDA

Si tienes problemas:

1. **Revisa logs en Vercel**: Dashboard → Deployments → Click en deploy → View Logs
2. **Verifica que build funciona localmente**: `npm run build`
3. **Consulta documentación**: https://vercel.com/docs
4. **Pregúntame**: ¡Estoy aquí para ayudar! 🚀

---

**Creado**: 2025-11-06  
**Versión**: 1.0  
**Próximo paso**: Ejecutar comandos del PASO 1 ⬆️

