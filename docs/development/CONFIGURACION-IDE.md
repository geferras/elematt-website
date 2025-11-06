# Configuración del IDE y Entorno de Desarrollo

## 🎯 Problema Resuelto

**Antes:** Necesitabas hacer "Reload from disk" constantemente para ver los cambios.

**Ahora:** El IDE detecta automáticamente los cambios gracias a:
- ✅ **File Polling** activado en Vite
- ✅ **Hot Module Replacement (HMR)** optimizado
- ✅ **Configuración del IDE** para IntelliJ IDEA/WebStorm y VSCode

---

## 📋 Cambios Realizados

### 1. **astro.config.mjs** - Configuración de Vite Optimizada

```javascript
vite: {
  server: {
    watch: {
      usePolling: true,    // ← Detecta cambios cada 100ms
      interval: 100,
    },
    hmr: {
      overlay: true,       // ← Muestra errores en pantalla
    },
  },
}
```

**¿Qué hace?**
- **usePolling: true** - En lugar de esperar notificaciones del sistema de archivos, Vite verifica activamente cada 100ms si hay cambios
- **interval: 100** - Frecuencia de verificación (100ms = 0.1 segundos)
- **hmr.overlay** - Muestra errores de compilación directamente en el navegador

**Documentación oficial:**
- [Vite Server Options](https://vitejs.dev/config/server-options.html)
- [Vite HMR](https://vitejs.dev/guide/api-hmr.html)

---

### 2. **.nvmrc** - Versión de Node Automática

```
22.21.1
```

**¿Qué hace?**
- Cuando abres el proyecto, nvm usa automáticamente Node v22.21.1
- Evita errores por usar versiones antiguas de Node

**Cómo usarlo:**
```bash
# En la terminal del proyecto:
nvm use
# O automáticamente con plugins de shell
```

**Documentación:**
- [NVM - Node Version Manager](https://github.com/nvm-sh/nvm)

---

### 3. **.editorconfig** - Configuración Consistente

```ini
[*]
charset = utf-8
indent_style = space
indent_size = 2
```

**¿Qué hace?**
- Todos los editores (VSCode, IntelliJ, Sublime, etc.) usan la misma configuración
- Evita problemas de formato entre diferentes IDEs

**Soportado por:**
- IntelliJ IDEA / WebStorm (nativo)
- VSCode (con extensión EditorConfig)
- Sublime Text (con plugin)
- Vim/Neovim (con plugin)

**Documentación:**
- [EditorConfig](https://editorconfig.org/)

---

### 4. **.vscode/settings.json** - Configuración de VSCode

```json
{
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 500,
  "[astro]": {
    "editor.formatOnSave": true
  }
}
```

**¿Qué hace?**
- Auto-guardado cada 500ms
- Formateo automático al guardar archivos .astro
- Configuración específica para Tailwind CSS

**Extensiones recomendadas:**
- `astro-build.astro-vscode` - Soporte para Astro
- `bradlc.vscode-tailwindcss` - Autocompletado de Tailwind
- `esbenp.prettier-vscode` - Formateo de código

---

### 5. **.idea/watcherTasks.xml** - File Watchers para IntelliJ

**¿Qué hace?**
- Configura IntelliJ IDEA/WebStorm para detectar cambios en archivos .astro
- Sincronización inmediata de cambios

**Cómo verificar:**
1. Abre IntelliJ IDEA/WebStorm
2. Ve a: `Settings` → `Tools` → `File Watchers`
3. Deberías ver "Astro" en la lista

---

## 🚀 Cómo Usar

### Opción 1: Terminal Integrada del IDE

**IntelliJ IDEA / WebStorm:**
```bash
# El IDE debería usar automáticamente Node v22.21.1
npm run dev
```

**VSCode:**
```bash
# Terminal integrada (Ctrl+`)
npm run dev
```

### Opción 2: Terminal Externa

```bash
# Navega al proyecto
cd /media/guillermo/DATA/PERS/WebsMari/ELEMATT/proyecto/elemat

# Usa la versión correcta de Node
nvm use

# Inicia el servidor
npm run dev
```

---

## 🔧 Configuración del IDE

### IntelliJ IDEA / WebStorm

1. **Verificar Node.js:**
   - `Settings` → `Languages & Frameworks` → `Node.js`
   - Asegúrate de que apunta a Node v22.21.1

2. **Habilitar Auto-Reload:**
   - `Settings` → `Appearance & Behavior` → `System Settings`
   - ✅ Marcar: "Synchronize files on frame or editor tab activation"
   - ✅ Marcar: "Save files on frame deactivation"

3. **File Watchers:**
   - `Settings` → `Tools` → `File Watchers`
   - Debería aparecer "Astro" automáticamente

### VSCode

1. **Instalar extensiones recomendadas:**
   - VSCode te preguntará automáticamente al abrir el proyecto
   - O manualmente: `Ctrl+Shift+P` → "Extensions: Show Recommended Extensions"

2. **Verificar configuración:**
   - La configuración en `.vscode/settings.json` se aplica automáticamente

---

## 📊 Verificar que Funciona

### Test 1: Hot Reload
1. Abre `http://localhost:4321/` en el navegador
2. Edita `src/pages/index.astro` (cambia un texto)
3. Guarda el archivo
4. **Resultado esperado:** El navegador se actualiza automáticamente en ~1 segundo

### Test 2: Detección de Errores
1. Introduce un error de sintaxis en cualquier archivo .astro
2. Guarda el archivo
3. **Resultado esperado:** Ves un overlay rojo en el navegador con el error

### Test 3: File Polling
1. Edita un archivo desde fuera del IDE (ej: con `nano` o `vim`)
2. Guarda el archivo
3. **Resultado esperado:** El IDE detecta el cambio en ~100ms

---

## 🐛 Solución de Problemas

### Problema: "Reload from disk" sigue siendo necesario

**Solución 1:** Reinicia el servidor de desarrollo
```bash
# Ctrl+C para detener
npm run dev
```

**Solución 2:** Limpia la caché de Astro
```bash
rm -rf .astro node_modules/.vite
npm run dev
```

**Solución 3:** Verifica la versión de Node
```bash
node --version  # Debe ser v22.21.1
```

### Problema: Cambios no se reflejan en el navegador

**Solución 1:** Fuerza un hard refresh
- Chrome/Firefox: `Ctrl+Shift+R`
- Safari: `Cmd+Shift+R`

**Solución 2:** Verifica que el servidor esté corriendo
```bash
# Deberías ver:
# ┃ Local    http://localhost:4321/
```

### Problema: Error "Cannot find module 'astro'"

**Solución:** Reinstala dependencias
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 📚 Documentación Técnica

### Vite File Watching

**Polling vs. Native Watching:**

- **Native (default):** Usa notificaciones del sistema operativo (inotify en Linux)
  - ✅ Más eficiente (menos CPU)
  - ❌ Puede fallar con IDEs, Docker, WSL, sistemas de archivos en red

- **Polling (configurado):** Verifica activamente cada X ms
  - ✅ Funciona siempre, incluso con IDEs
  - ❌ Usa más CPU (mínimo con interval: 100)

**Referencia:**
- [Vite - Server Watch Options](https://vitejs.dev/config/server-options.html#server-watch)
- [Chokidar - File Watching Library](https://github.com/paulmillr/chokidar)

### Astro Hot Module Replacement

**Cómo funciona:**
1. Detecta cambio en archivo .astro
2. Recompila solo ese componente
3. Envía actualización al navegador vía WebSocket
4. Navegador actualiza sin recargar la página completa

**Limitaciones:**
- Cambios en `astro.config.mjs` requieren reinicio completo
- Cambios en variables de entorno requieren reinicio

**Referencia:**
- [Astro - Development Server](https://docs.astro.build/en/reference/cli-reference/#astro-dev)

---

## ✅ Checklist de Configuración

- [x] Node v22.21.1 instalado y activo
- [x] `.nvmrc` creado
- [x] `astro.config.mjs` con polling activado
- [x] `.editorconfig` para consistencia
- [x] `.vscode/settings.json` para VSCode
- [x] `.idea/watcherTasks.xml` para IntelliJ
- [x] Servidor corriendo en `http://localhost:4321/`
- [x] Hot reload funcionando

---

## 🎓 Mejores Prácticas

1. **Siempre usa `nvm use` al abrir el proyecto**
   - O configura auto-switch en tu shell (.bashrc/.zshrc)

2. **Mantén el servidor corriendo mientras desarrollas**
   - No lo detengas/reinicies innecesariamente

3. **Si haces cambios en `astro.config.mjs`:**
   - Reinicia el servidor manualmente

4. **Usa la terminal integrada del IDE**
   - Mejor integración con el entorno

5. **Commits limpios:**
   - `.gitignore` ya excluye archivos temporales del IDE

---

**¿Dudas?** Revisa la documentación oficial:
- [Astro Docs](https://docs.astro.build/)
- [Vite Docs](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)

