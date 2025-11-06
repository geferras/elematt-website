# 🔧 Configuración Git - Múltiples Cuentas (Trabajo + Personal)

**Fecha**: 2025-11-06  
**Objetivo**: Usar GitLab (trabajo) y GitHub (personal) sin conflictos

---

## 🎯 CONFIGURACIÓN AUTOMÁTICA POR CARPETA

### **Paso 1: Editar configuración global**

```bash
# Abrir archivo de configuración global
nano ~/.gitconfig
```

### **Paso 2: Añadir esta configuración**

```ini
# Configuración por defecto (PERSONAL - GitHub)
[user]
    name = Tu Nombre
    email = tu_email_personal@gmail.com

# Configuración para proyectos de TRABAJO (GitLab)
[includeIf "gitdir:~/trabajo/"]
    path = ~/.gitconfig-trabajo

# O si tus proyectos de trabajo están en otra ruta:
[includeIf "gitdir:/media/guillermo/DATA/TRABAJO/"]
    path = ~/.gitconfig-trabajo

# Configuración general
[init]
    defaultBranch = main

[core]
    editor = nano
    autocrlf = input

[pull]
    rebase = false

[push]
    default = simple
```

**Guardar**: `Ctrl+O`, `Enter`, `Ctrl+X`

### **Paso 3: Crear archivo de configuración de trabajo**

```bash
# Crear archivo para configuración de trabajo
nano ~/.gitconfig-trabajo
```

**Contenido**:
```ini
[user]
    name = Tu Nombre Trabajo
    email = tu_email_trabajo@empresa.com
```

**Guardar**: `Ctrl+O`, `Enter`, `Ctrl+X`

---

## ✅ VERIFICAR CONFIGURACIÓN

### **Proyecto Personal (ELEMATT)**

```bash
cd /media/guillermo/DATA/PERS/WebsMari/ELEMATT/proyecto/elemat

# Ver configuración
git config user.name
git config user.email

# Debería mostrar:
# Tu Nombre
# tu_email_personal@gmail.com
```

### **Proyecto de Trabajo**

```bash
cd ~/trabajo/proyecto-trabajo

# Ver configuración
git config user.name
git config user.email

# Debería mostrar:
# Tu Nombre Trabajo
# tu_email_trabajo@empresa.com
```

---

## 🔑 SSH KEYS - MÚLTIPLES CUENTAS

### **Paso 1: Generar SSH keys separadas**

```bash
# SSH key para GitHub (personal)
ssh-keygen -t ed25519 -C "tu_email_personal@gmail.com" -f ~/.ssh/id_ed25519_github

# SSH key para GitLab (trabajo)
ssh-keygen -t ed25519 -C "tu_email_trabajo@empresa.com" -f ~/.ssh/id_ed25519_gitlab
```

### **Paso 2: Añadir keys al SSH agent**

```bash
# Iniciar SSH agent
eval "$(ssh-agent -s)"

# Añadir keys
ssh-add ~/.ssh/id_ed25519_github
ssh-add ~/.ssh/id_ed25519_gitlab

# Verificar
ssh-add -l
```

### **Paso 3: Configurar SSH config**

```bash
# Editar/crear archivo SSH config
nano ~/.ssh/config
```

**Contenido**:
```
# GitHub Personal
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_github
  IdentitiesOnly yes

# GitLab Trabajo
Host gitlab.com
  HostName gitlab.com
  User git
  IdentityFile ~/.ssh/id_ed25519_gitlab
  IdentitiesOnly yes
```

**Guardar**: `Ctrl+O`, `Enter`, `Ctrl+X`

### **Paso 4: Añadir keys a GitHub y GitLab**

#### **GitHub (Personal)**

```bash
# Copiar clave pública
cat ~/.ssh/id_ed25519_github.pub
```

1. Ve a: https://github.com/settings/keys
2. Click "New SSH key"
3. Title: `Mi PC Personal`
4. Key: Pega la clave
5. Click "Add SSH key"

#### **GitLab (Trabajo)**

```bash
# Copiar clave pública
cat ~/.ssh/id_ed25519_gitlab.pub
```

1. Ve a: https://gitlab.com/-/profile/keys
2. Title: `Mi PC Trabajo`
3. Key: Pega la clave
4. Click "Add key"

### **Paso 5: Probar conexiones**

```bash
# Probar GitHub
ssh -T git@github.com
# Debería decir: Hi tu-usuario! You've successfully authenticated...

# Probar GitLab
ssh -T git@gitlab.com
# Debería decir: Welcome to GitLab, @tu-usuario!
```

---

## 🚀 USAR GIT CON MÚLTIPLES CUENTAS

### **Proyecto Personal (GitHub)**

```bash
cd /media/guillermo/DATA/PERS/WebsMari/ELEMATT/proyecto/elemat

# Inicializar Git
git init

# La configuración se toma automáticamente de ~/.gitconfig (personal)
git config user.email  # Verifica que sea tu email personal

# Añadir remote con SSH
git remote add origin git@github.com:tu-usuario/elematt.git

# O con HTTPS
git remote add origin https://github.com/tu-usuario/elematt.git

# Commit y push
git add .
git commit -m "Initial commit"
git push -u origin main
```

### **Proyecto de Trabajo (GitLab)**

```bash
cd ~/trabajo/proyecto-trabajo

# La configuración se toma automáticamente de ~/.gitconfig-trabajo
git config user.email  # Verifica que sea tu email de trabajo

# Añadir remote con SSH
git remote add origin git@gitlab.com:empresa/proyecto.git

# Commit y push
git add .
git commit -m "Cambios en proyecto"
git push -u origin main
```

---

## 🔍 VERIFICAR QUÉ CONFIGURACIÓN USA CADA PROYECTO

```bash
# Ver configuración local del proyecto
git config --local --list

# Ver configuración global
git config --global --list

# Ver configuración efectiva (local + global)
git config --list

# Ver solo email
git config user.email

# Ver solo nombre
git config user.name
```

---

## 🛠️ COMANDOS ÚTILES

### **Cambiar configuración de un proyecto específico**

```bash
# Si te equivocaste y quieres cambiar la configuración
cd /ruta/proyecto

# Cambiar email
git config user.email "nuevo_email@ejemplo.com"

# Cambiar nombre
git config user.name "Nuevo Nombre"

# Ver configuración actual
git config --list --show-origin
```

### **Eliminar configuración local**

```bash
# Eliminar configuración local (usará la global)
git config --unset user.email
git config --unset user.name
```

---

## 📊 RESUMEN VISUAL

```
┌─────────────────────────────────────────────────────────┐
│                    TU CONFIGURACIÓN                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ~/.gitconfig (GLOBAL - Por defecto)                   │
│  ├── user.name = "Tu Nombre"                           │
│  ├── user.email = "tu_email_personal@gmail.com"        │
│  └── includeIf "gitdir:~/trabajo/"                     │
│      └── path = ~/.gitconfig-trabajo                   │
│                                                         │
│  ~/.gitconfig-trabajo (TRABAJO)                        │
│  ├── user.name = "Tu Nombre Trabajo"                   │
│  └── user.email = "tu_email_trabajo@empresa.com"       │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  PROYECTOS PERSONALES (GitHub)                         │
│  /media/guillermo/DATA/PERS/WebsMari/                  │
│  ├── ELEMATT/                                          │
│  │   └── proyecto/elemat/                              │
│  │       └── usa: tu_email_personal@gmail.com ✅       │
│  └── otros-proyectos/                                  │
│      └── usa: tu_email_personal@gmail.com ✅           │
│                                                         │
│  PROYECTOS DE TRABAJO (GitLab)                         │
│  ~/trabajo/                                            │
│  ├── proyecto-1/                                       │
│  │   └── usa: tu_email_trabajo@empresa.com ✅          │
│  └── proyecto-2/                                       │
│      └── usa: tu_email_trabajo@empresa.com ✅          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## ✅ CHECKLIST

### **Configuración inicial**
- [ ] Editar `~/.gitconfig` con configuración personal por defecto
- [ ] Crear `~/.gitconfig-trabajo` con configuración de trabajo
- [ ] Generar SSH key para GitHub (`id_ed25519_github`)
- [ ] Generar SSH key para GitLab (`id_ed25519_gitlab`)
- [ ] Configurar `~/.ssh/config`
- [ ] Añadir SSH key a GitHub
- [ ] Añadir SSH key a GitLab
- [ ] Probar conexión SSH a GitHub
- [ ] Probar conexión SSH a GitLab

### **Cada proyecto nuevo**
- [ ] Verificar `git config user.email` antes del primer commit
- [ ] Usar SSH para remote (`git@github.com:...` o `git@gitlab.com:...`)

---

## 🚨 SOLUCIÓN DE PROBLEMAS

### **Problema: Commits con email incorrecto**

```bash
# Ver último commit
git log -1

# Si el email es incorrecto, cambiar configuración
git config user.email "email_correcto@ejemplo.com"

# Modificar último commit (si no has hecho push)
git commit --amend --reset-author --no-edit
```

### **Problema: SSH no funciona**

```bash
# Ver qué keys están cargadas
ssh-add -l

# Si no hay keys, añadirlas
ssh-add ~/.ssh/id_ed25519_github
ssh-add ~/.ssh/id_ed25519_gitlab

# Probar conexión con verbose
ssh -vT git@github.com
ssh -vT git@gitlab.com
```

### **Problema: Git usa email incorrecto automáticamente**

```bash
# Ver de dónde viene la configuración
git config --show-origin user.email

# Si viene de global y quieres usar otra:
git config user.email "email_correcto@ejemplo.com"
```

---

## 💡 TIPS PRO

### **1. Alias útiles**

Añade a `~/.gitconfig`:

```ini
[alias]
    # Ver configuración actual
    whoami = !git config user.name && git config user.email
    
    # Ver último commit
    last = log -1 HEAD --stat
    
    # Ver historial bonito
    lg = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
```

**Uso**:
```bash
git whoami  # Ver qué usuario estás usando
git last    # Ver último commit
git lg      # Ver historial bonito
```

### **2. Verificar antes de commit**

```bash
# Siempre verifica antes del primer commit en un proyecto nuevo
git config user.email

# Si es incorrecto, cámbialo
git config user.email "email_correcto@ejemplo.com"
```

### **3. Script de verificación**

Crea un script para verificar configuración:

```bash
# Crear script
nano ~/bin/git-check-config.sh
```

**Contenido**:
```bash
#!/bin/bash
echo "📧 Email: $(git config user.email)"
echo "👤 Nombre: $(git config user.name)"
echo "📁 Proyecto: $(basename $(git rev-parse --show-toplevel))"
echo "🌐 Remote: $(git remote get-url origin 2>/dev/null || echo 'No configurado')"
```

**Hacer ejecutable**:
```bash
chmod +x ~/bin/git-check-config.sh
```

**Uso**:
```bash
cd /ruta/proyecto
~/bin/git-check-config.sh
```

---

**Creado**: 2025-11-06  
**Versión**: 1.0  
**Estado**: ✅ Configuración completa para múltiples cuentas

