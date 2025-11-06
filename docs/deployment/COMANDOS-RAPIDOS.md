# ⚡ Comandos Rápidos - ELEMATT

**Ruta del proyecto**: `/media/guillermo/DATA/PERS/PROYECTOS/elematt/workspace`

---

## 🚀 CONFIGURACIÓN INICIAL (Una sola vez)

### **1. Configurar Git**

```bash
# Configuración personal (por defecto)
git config --global user.name "Tu Nombre"
git config --global user.email "tu_email_personal@gmail.com"

# Configuración de trabajo
git config --global includeIf.gitdir:/media/guillermo/DATA/WORK/MONETUM/WorkSpace/.path ~/.gitconfig-trabajo

cat > ~/.gitconfig-trabajo << 'EOFC'
[user]
    name = Tu Nombre Trabajo
    email = tu_email_trabajo@monetum.com
EOFC

# Configuración general
git config --global init.defaultBranch main
```

---

### **2. Generar SSH Key para GitHub**

```bash
# Generar key
ssh-keygen -t ed25519 -C "tu_email_personal@gmail.com" -f ~/.ssh/id_ed25519_github

# Añadir al agente
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_github

# Copiar clave pública
cat ~/.ssh/id_ed25519_github.pub
```

---

### **3. Configurar SSH config**

```bash
nano ~/.ssh/config
```

**Añadir**:
```
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_github
  IdentitiesOnly yes
```

---

### **4. Probar conexión GitHub**

```bash
ssh -T git@github.com
```

---

## 📦 INICIALIZAR ELEMATT EN GIT

```bash
cd /media/guillermo/DATA/PERS/PROYECTOS/elematt/workspace

git init
git add .
git commit -m "Initial commit - ELEMATT website"
git branch -M main

# Conectar con GitHub (reemplaza TU_USUARIO)
git remote add origin git@github.com:TU_USUARIO/elematt.git
git push -u origin main
```

---

## 🔄 WORKFLOW DIARIO

```bash
# Ir al proyecto
cd /media/guillermo/DATA/PERS/PROYECTOS/elematt/workspace

# Desarrollo
npm run dev

# Guardar cambios
git add .
git commit -m "Descripción de cambios"
git push
```

---

## 🌿 CREAR NUEVO PROYECTO

```bash
# Crear estructura
mkdir -p /media/guillermo/DATA/PERS/PROYECTOS/nuevo-proyecto/{workspace,recursos,notas}
cd /media/guillermo/DATA/PERS/PROYECTOS/nuevo-proyecto/workspace

# Inicializar proyecto
npm create astro@latest .

# Git
git init
git add .
git commit -m "Initial commit"
git branch -M main

# GitHub
git remote add origin git@github.com:TU_USUARIO/nuevo-proyecto.git
git push -u origin main
```

---

## ✅ VERIFICAR CONFIGURACIÓN

```bash
# Ver email del proyecto actual
git config user.email

# Ver toda la configuración
git config --list

# Ver estado
git status
```

---

## 🚨 COMANDOS DE EMERGENCIA

```bash
# Deshacer último commit (mantiene cambios)
git reset --soft HEAD~1

# Deshacer cambios en un archivo
git checkout -- archivo.astro

# Ver diferencias
git diff

# Ver historial
git log --oneline
```

---

**Creado**: 2025-11-06
