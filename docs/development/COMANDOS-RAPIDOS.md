# Comandos Rápidos - ELEMATT

## 🚀 Desarrollo Diario

### Iniciar servidor local
```bash
npm run dev
```
Abre: http://localhost:4321/

### Detener servidor
```
Ctrl + C
```

---

## 📤 Publicar Cambios

### Opción 1: Script Automático (RECOMENDADO)
```bash
./scripts/deploy.sh "Descripción de los cambios"
```

**Ejemplo:**
```bash
./scripts/deploy.sh "Actualizar precios de productos"
```

**Qué hace:**
1. ✅ Verifica que el build funciona
2. ✅ Hace commit de los cambios
3. ✅ Sube a GitHub
4. ✅ Vercel despliega automáticamente

---

### Opción 2: Manual
```bash
# 1. Ver qué cambió
git status

# 2. Añadir cambios
git add .

# 3. Guardar cambios
git commit -m "Descripción de los cambios"

# 4. Subir a GitHub
git push
```

**Vercel despliega automáticamente en 1-2 minutos** ✨

---

## 🔄 Actualizar desde GitHub

Si trabajas desde otro ordenador:

```bash
git pull
```

---

## 🧪 Probar antes de Publicar

### Build local
```bash
npm run build
```

### Preview del build
```bash
npm run preview
```
Abre: http://localhost:4321/

---

## 📊 Ver Estado

### Ver cambios pendientes
```bash
git status
```

### Ver diferencias
```bash
git diff
```

### Ver historial
```bash
git log --oneline
```

---

## 🎨 Regenerar QR Codes

```bash
python3 scripts/generate-qr-codes.py
```

**Después:**
```bash
./scripts/deploy.sh "Actualizar QR codes"
```

---

## 🐛 Solucionar Problemas

### Limpiar caché
```bash
rm -rf .astro node_modules/.vite
npm install
npm run dev
```

### Deshacer cambios (antes de commit)
```bash
git checkout -- nombre-archivo.astro
```

### Deshacer último commit (mantener cambios)
```bash
git reset --soft HEAD~1
```

---

## 📁 Estructura de Archivos

```
elemat/
├── src/
│   ├── pages/          ← Páginas de la web
│   ├── components/     ← Componentes reutilizables
│   ├── layouts/        ← Plantillas
│   └── styles/         ← Estilos CSS
├── public/
│   ├── images/         ← Imágenes
│   ├── qr-codes/       ← QR codes
│   └── brand/          ← Logo, etc.
├── scripts/            ← Scripts Python
└── package.json        ← Dependencias
```

---

## 🔗 Links Importantes

### Desarrollo
- **Local:** http://localhost:4321/
- **GitHub:** https://github.com/TU_USUARIO/elematt-website

### Producción (después de desplegar)
- **Web:** https://elematt.com
- **Vercel Dashboard:** https://vercel.com/dashboard

---

## 📝 Flujo de Trabajo Típico

### Cambiar un texto

```bash
# 1. Iniciar servidor
npm run dev

# 2. Editar archivo (ej: src/pages/index.astro)
# Guarda el archivo (Ctrl+S)

# 3. Verifica en http://localhost:4321/

# 4. Cuando esté bien, publica
./scripts/deploy.sh "Actualizar texto de inicio"

# 5. Espera 1-2 minutos
# 6. Verifica en https://elematt.com
```

### Añadir una imagen

```bash
# 1. Copia la imagen a public/images/
cp mi-imagen.jpg public/images/

# 2. Úsala en tu página
# <img src="/images/mi-imagen.jpg" alt="Descripción">

# 3. Publica
./scripts/deploy.sh "Añadir nueva imagen"
```

### Cambiar precios

```bash
# 1. Edita src/pages/productos/alfombra-bebe/150x180.astro
# Cambia el precio

# 2. Edita src/pages/productos/alfombra-bebe/180x200.astro
# Cambia el precio

# 3. Publica
./scripts/deploy.sh "Actualizar precios"
```

---

## 🎯 Comandos por Tarea

### Quiero cambiar el menú
```bash
# Editar: src/components/Header.astro
npm run dev
# Verifica cambios
./scripts/deploy.sh "Actualizar menú"
```

### Quiero cambiar el footer
```bash
# Editar: src/components/Footer.astro
npm run dev
./scripts/deploy.sh "Actualizar footer"
```

### Quiero cambiar la página de inicio
```bash
# Editar: src/pages/index.astro
npm run dev
./scripts/deploy.sh "Actualizar página de inicio"
```

### Quiero cambiar colores
```bash
# Editar: src/styles/global.css
# Busca: :root { ... }
npm run dev
./scripts/deploy.sh "Actualizar colores"
```

### Quiero añadir una nueva página
```bash
# Crear: src/pages/nueva-pagina.astro
# Copiar estructura de otra página
npm run dev
./scripts/deploy.sh "Añadir nueva página"
```

---

## ⚡ Atajos de Teclado (en el editor)

### VSCode / IntelliJ
- `Ctrl + S` - Guardar
- `Ctrl + F` - Buscar
- `Ctrl + H` - Buscar y reemplazar
- `Ctrl + /` - Comentar línea
- `Ctrl + Shift + F` - Buscar en todos los archivos
- `Ctrl + P` - Abrir archivo rápido
- `Ctrl + `` ` `` - Abrir terminal

---

## 🆘 Ayuda Rápida

### El servidor no inicia
```bash
# Verifica Node
node --version  # Debe ser v18+

# Reinstala dependencias
rm -rf node_modules
npm install
npm run dev
```

### Los cambios no se ven
```bash
# Limpia caché
rm -rf .astro
npm run dev

# O fuerza recarga en navegador
Ctrl + Shift + R
```

### Error al hacer push
```bash
# Verifica conexión a GitHub
git remote -v

# Verifica credenciales
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

---

## 📚 Documentación Completa

- **Despliegue:** `DESPLIEGUE-IONOS.md`
- **Configuración IDE:** `CONFIGURACION-IDE.md`
- **Accesibilidad:** `ACCESIBILIDAD-COLORES.md`
- **SEO:** `SEO-CONFIG.md`
- **Pendientes:** `PENDIENTE.md`

---

## 💡 Tips

1. **Siempre prueba localmente** antes de publicar
2. **Usa mensajes descriptivos** en los commits
3. **Haz commits pequeños** y frecuentes
4. **Verifica en móvil** después de publicar
5. **Guarda backups** de las imágenes originales

---

**¿Dudas?** Revisa `DESPLIEGUE-IONOS.md` para más detalles.

