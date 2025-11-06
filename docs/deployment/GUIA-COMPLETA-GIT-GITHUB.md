# 🚀 Guía Completa: Git + GitHub para ELEMATT

**Fecha**: 2025-11-06  
**Nueva estructura**: `/media/guillermo/DATA/PERS/PROYECTOS/elematt/`

---

## ✅ PROYECTO REORGANIZADO

### **Estructura Final**:

```
/media/guillermo/DATA/
│
├── WORK/
│   └── MONETUM/
│       └── WorkSpace/              # ⚠️ TRABAJO (GitLab)
│           └── proyectos-trabajo/
│
└── PERS/
    └── PROYECTOS/
        ├── elematt/                # ✅ Proyecto 1
        │   ├── workspace/          # Código fuente (Git repo)
        │   ├── recursos/           # Recursos (NO en Git)
        │   └── notas/             # Notas del proyecto
        │
        ├── mi-portfolio/           # Proyecto 2 (futuro)
        │   ├── workspace/
        │   ├── recursos/
        │   └── notas/
        │
        └── proyecto-3/             # Proyecto 3 (futuro)
            ├── workspace/
            ├── recursos/
            └── notas/
```

---

## 🔧 PASO 1: CONFIGURAR GIT (Una sola vez)

### **Ejecuta estos comandos**:

```bash
# 1. Configuración PERSONAL (por defecto)
git config --global user.name "Tu Nombre"
git config --global user.email "tu_email_personal@gmail.com"

# 2. Configuración para TRABAJO
git config --global includeIf.gitdir:/media/guillermo/DATA/WORK/MONETUM/WorkSpace/.path ~/.gitconfig-trabajo

# 3. Crear archivo de configuración de trabajo
cat > ~/.gitconfig-trabajo << 'EOFC'
[user]
    name = Tu Nombre Trabajo
    email = tu_email_trabajo@monetum.com
EOFC

# 4. Configuración general
git config --global init.defaultBranch main
git config --global core.editor nano
git config --global pull.rebase false
```

**⚠️ IMPORTANTE**: Reemplaza los emails y nombres con tus datos reales.

---

## 🔑 PASO 2: CONFIGURAR SSH para GitHub

```bash
# 1. Generar SSH key
ssh-keygen -t ed25519 -C "tu_email_personal@gmail.com" -f ~/.ssh/id_ed25519_github

# Presiona ENTER cuando pida passphrase (sin contraseña)

# 2. Iniciar SSH agent
eval "$(ssh-agent -s)"

# 3. Añadir key
ssh-add ~/.ssh/id_ed25519_github

# 4. Copiar clave pública
cat ~/.ssh/id_ed25519_github.pub
```

**Copia todo el texto** (desde `ssh-ed25519` hasta tu email)

---

### **Configurar SSH config**:

```bash
# Crear/editar archivo
nano ~/.ssh/config
```

**Añade esto**:

```
# GitHub Personal
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_github
  IdentitiesOnly yes
```

**Guardar**: `Ctrl+O`, `Enter`, `Ctrl+X`

---

## 🌐 PASO 3: Crear Cuenta GitHub

1. **Ve a**: https://github.com/signup
2. **Email**: `tu_email_personal@gmail.com`
3. **Username**: `tu-nombre-apellido` (profesional)
4. **Password**: [contraseña segura]
5. **Verifica email**
6. **Plan**: FREE

---

## 🔐 PASO 4: Añadir SSH Key a GitHub

1. **Ve a**: https://github.com/settings/keys
2. **Click**: "New SSH key"
3. **Title**: `Mi PC Personal`
4. **Key**: Pega la clave que copiaste
5. **Click**: "Add SSH key"

### **Probar conexión**:

```bash
ssh -T git@github.com

# Debería decir:
# Hi tu-usuario! You've successfully authenticated...
```

---

## 🚀 PASO 5: Inicializar Git en ELEMATT

```bash
# 1. Ir al workspace
cd /media/guillermo/DATA/PERS/PROYECTOS/elematt/workspace

# 2. Verificar configuración
git config user.email
# Debe mostrar: tu_email_personal@gmail.com

# 3. Inicializar Git
git init

# 4. Añadir archivos
git add .

# 5. Primer commit
git commit -m "Initial commit - ELEMATT website"

# 6. Renombrar branch
git branch -M main
```

---

## 📦 PASO 6: Crear Repositorio en GitHub

### **En el navegador**:

1. **Ve a**: https://github.com/new
2. **Repository name**: `elematt`
3. **Description**: `ELEMATT - Descubre la belleza en lo simple`
4. **Visibility**: ✅ **Private**
5. **Click**: "Create repository"

### **En la terminal**:

```bash
# Conectar con GitHub (reemplaza TU_USUARIO)
git remote add origin git@github.com:TU_USUARIO/elematt.git

# Subir código
git push -u origin main
```

---

## 🔄 WORKFLOW DIARIO

```bash
# 1. Ir al workspace
cd /media/guillermo/DATA/PERS/PROYECTOS/elematt/workspace

# 2. Hacer cambios, probar
npm run dev

# 3. Guardar cambios
git add .
git commit -m "Descripción de cambios"
git push
```

---

## 🌿 CREAR NUEVO PROYECTO

```bash
# 1. Crear estructura
mkdir -p /media/guillermo/DATA/PERS/PROYECTOS/mi-portfolio/{workspace,recursos,notas}

# 2. Ir al workspace
cd /media/guillermo/DATA/PERS/PROYECTOS/mi-portfolio/workspace

# 3. Inicializar proyecto (ejemplo con Astro)
npm create astro@latest .

# 4. Verificar configuración Git (automática)
git config user.email
# Debe mostrar: tu_email_personal@gmail.com ✅

# 5. Inicializar Git
git init
git add .
git commit -m "Initial commit"
git branch -M main

# 6. Crear repo en GitHub
# https://github.com/new

# 7. Conectar y subir
git remote add origin git@github.com:TU_USUARIO/mi-portfolio.git
git push -u origin main
```

---

## ✅ VERIFICAR CONFIGURACIÓN

### **Proyecto Personal (ELEMATT)**:

```bash
cd /media/guillermo/DATA/PERS/PROYECTOS/elematt/workspace
git config user.email
# ✅ Debe mostrar: tu_email_personal@gmail.com
```

### **Proyecto de Trabajo**:

```bash
cd /media/guillermo/DATA/WORK/MONETUM/WorkSpace/proyecto-trabajo
git config user.email
# ✅ Debe mostrar: tu_email_trabajo@monetum.com
```

---

## 📋 RESUMEN VISUAL

```
┌─────────────────────────────────────────────────────────┐
│              CONFIGURACIÓN AUTOMÁTICA                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  TRABAJO (GitLab)                                      │
│  /media/guillermo/DATA/WORK/MONETUM/WorkSpace/         │
│  └── Email: tu_email_trabajo@monetum.com ✅            │
│                                                         │
│  PERSONAL (GitHub)                                     │
│  /media/guillermo/DATA/PERS/PROYECTOS/                 │
│  ├── elematt/workspace/                                │
│  │   └── Email: tu_email_personal@gmail.com ✅         │
│  ├── mi-portfolio/workspace/                           │
│  │   └── Email: tu_email_personal@gmail.com ✅         │
│  └── proyecto-3/workspace/                             │
│      └── Email: tu_email_personal@gmail.com ✅         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 💡 COMANDOS ÚTILES

```bash
# Ver configuración actual
git config user.email
git config user.name

# Ver toda la configuración
git config --list

# Ver de dónde viene cada configuración
git config --list --show-origin

# Ver estado de Git
git status

# Ver historial
git log --oneline

# Ver diferencias
git diff
```

---

## 🎯 CHECKLIST

- [ ] `git config --global` configurado
- [ ] `~/.gitconfig-trabajo` creado
- [ ] SSH key generada
- [ ] `~/.ssh/config` configurado
- [ ] Cuenta GitHub creada
- [ ] SSH key añadida a GitHub
- [ ] Conexión SSH probada
- [ ] ELEMATT: `git init` + `git commit`
- [ ] Repo GitHub creado (privado)
- [ ] Código subido: `git push`

---

**Ruta del proyecto**: `/media/guillermo/DATA/PERS/PROYECTOS/elematt/workspace`  
**Creado**: 2025-11-06
