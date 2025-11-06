#!/bin/bash

# Script de despliegue para ELEMATT
# Uso: ./scripts/deploy.sh "mensaje del commit"

set -e  # Salir si hay error

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   ELEMATT - Script de Despliegue      ║${NC}"
echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo ""

# Verificar que estamos en la raíz del proyecto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: Ejecuta este script desde la raíz del proyecto${NC}"
    exit 1
fi

# Verificar que Node está instalado
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Error: Node.js no está instalado${NC}"
    exit 1
fi

# Verificar versión de Node
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${YELLOW}⚠️  Advertencia: Node.js v18+ recomendado (tienes v$NODE_VERSION)${NC}"
fi

# Mensaje de commit
COMMIT_MSG="${1:-Update website}"

echo -e "${BLUE}📝 Mensaje del commit:${NC} $COMMIT_MSG"
echo ""

# Paso 1: Verificar cambios
echo -e "${BLUE}🔍 Verificando cambios...${NC}"
if [ -z "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}⚠️  No hay cambios para desplegar${NC}"
    exit 0
fi

git status --short
echo ""

# Paso 2: Ejecutar tests (build local)
echo -e "${BLUE}🧪 Ejecutando build local...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Error en el build. Corrige los errores antes de desplegar.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build exitoso${NC}"
echo ""

# Paso 3: Añadir archivos
echo -e "${BLUE}📦 Añadiendo archivos...${NC}"
git add .

# Paso 4: Commit
echo -e "${BLUE}💾 Creando commit...${NC}"
git commit -m "$COMMIT_MSG"

if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠️  No hay cambios para commitear${NC}"
    exit 0
fi

echo -e "${GREEN}✅ Commit creado${NC}"
echo ""

# Paso 5: Push a GitHub
echo -e "${BLUE}🚀 Subiendo a GitHub...${NC}"
git push

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Error al hacer push. Verifica tu conexión y permisos.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Código subido a GitHub${NC}"
echo ""

# Paso 6: Información de despliegue
echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║   ✅ DESPLIEGUE INICIADO               ║${NC}"
echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo ""
echo -e "${BLUE}📊 Vercel desplegará automáticamente en 1-2 minutos${NC}"
echo ""
echo -e "${BLUE}🔗 Links útiles:${NC}"
echo -e "   • Vercel Dashboard: ${YELLOW}https://vercel.com/dashboard${NC}"
echo -e "   • GitHub Repo: ${YELLOW}https://github.com/$(git config --get remote.origin.url | sed 's/.*github.com[:/]\(.*\)\.git/\1/')${NC}"
echo ""
echo -e "${BLUE}📧 Recibirás un email cuando el despliegue esté completo${NC}"
echo ""

