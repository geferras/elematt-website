# 📱 Cómo Generar QR Codes para ELEMATT

## 🎯 URLs a Usar

### Desarrollo (Testing)
```
Variante 150×180:
http://localhost:4321/productos/alfombra-bebe/150x180?utm_source=packaging&utm_medium=qr&utm_campaign=alfombra_150x180

Variante 180×200:
http://localhost:4321/productos/alfombra-bebe/180x200?utm_source=packaging&utm_medium=qr&utm_campaign=alfombra_180x200
```

### Producción (Imprimir)
```
Variante 150×180:
https://elematt.com/productos/alfombra-bebe/150x180?utm_source=packaging&utm_medium=qr&utm_campaign=alfombra_150x180

Variante 180×200:
https://elematt.com/productos/alfombra-bebe/180x200?utm_source=packaging&utm_medium=qr&utm_campaign=alfombra_180x200
```

---

## 🛠️ Herramienta Recomendada

**https://www.qr-code-generator.com/**

### Pasos:

1. **Ir a la web**: https://www.qr-code-generator.com/
2. **Seleccionar tipo**: URL
3. **Pegar la URL** (con parámetros UTM)
4. **Personalizar**:
   - Color: `#A8B5A0` (Verde Salvia)
   - Fondo: Blanco
   - Logo: Subir `public/brand/pep-elefante.jpg`
   - Tamaño del logo: 20%
5. **Descargar**:
   - Formato: PNG
   - Resolución: 600 DPI
   - Tamaño: Ver tabla abajo

---

## 📏 Tamaños Recomendados

| Tamaño | Uso | Distancia Escaneo | Ubicación |
|--------|-----|-------------------|-----------|
| **2×2 cm** | Etiquetas pequeñas | 20 cm | Packaging compacto |
| **3×3 cm** | Cajas de producto | 30 cm | **Recomendado para packaging** |
| **4×4 cm** | Hoja A4 informativa | 40 cm | **Recomendado para hoja A4** |
| **5×5 cm** | Material promocional | 50 cm | Pósters, displays |

### Conversión a Píxeles (600 DPI):

- 2×2 cm = 472×472 px
- 3×3 cm = 709×709 px
- 4×4 cm = 945×945 px
- 5×5 cm = 1181×1181 px

---

## 🎨 Especificaciones de Diseño

### Colores ELEMATT:
- **Verde Salvia**: `#A8B5A0` (color del QR)
- **Melón Empolvado**: `#F4C2B8`
- **Lino Suave**: `#E8E4D9`
- **Fondo**: Blanco (`#FFFFFF`)

### Logo:
- **Archivo**: `public/brand/pep-elefante.jpg`
- **Tamaño**: 20% del área total del QR
- **Ubicación**: Centro
- **Fondo**: Blanco circular

### Márgenes:
- **Margen blanco**: 5mm alrededor del QR
- **Importante**: Este margen se añade AL IMPRIMIR, no al generar el código
- No colocar texto o imágenes muy cerca del QR

---

## 📦 Estructura de Archivos

Guarda los QR codes generados en:

```
public/qr-codes/
├── dev/                    → QR codes para testing (localhost)
│   ├── alfombra-150x180_2x2cm.png
│   ├── alfombra-150x180_3x3cm.png
│   ├── alfombra-150x180_4x4cm.png
│   ├── alfombra-150x180_5x5cm.png
│   ├── alfombra-180x200_2x2cm.png
│   ├── alfombra-180x200_3x3cm.png
│   ├── alfombra-180x200_4x4cm.png
│   └── alfombra-180x200_5x5cm.png
│
└── live/                   → QR codes para producción (elematt.com)
    ├── alfombra-150x180_2x2cm.png
    ├── alfombra-150x180_3x3cm.png
    ├── alfombra-150x180_4x4cm.png
    ├── alfombra-150x180_5x5cm.png
    ├── alfombra-180x200_2x2cm.png
    ├── alfombra-180x200_3x3cm.png
    ├── alfombra-180x200_4x4cm.png
    └── alfombra-180x200_5x5cm.png
```

---

## 🖨️ Para Imprimir

### Packaging (Cajas):
1. Usa: `live/alfombra-XXX_3x3cm.png` o `4x4cm`
2. Formato: PNG @ 600 DPI
3. Deja 5mm de margen blanco alrededor
4. Prueba el escaneo antes de imprimir en masa

### Hoja A4 Informativa:
1. Usa: `live/alfombra-XXX_4x4cm.png` o `5x5cm`
2. Formato: PNG @ 600 DPI
3. Coloca en un lugar visible
4. Añade texto explicativo: "Escanea para más información"

### Testing:
1. Usa: `dev/alfombra-XXX_XXcm.png`
2. Imprime en papel normal
3. Prueba el escaneo desde diferentes distancias
4. Verifica que apunta a `localhost:4321`

---

## ⚠️ Importante

### ❌ NO HACER:
- NO uses QR de `dev/` en producción (apuntan a localhost)
- NO cambies las URLs después de imprimir
- NO coloques el QR sobre fondos oscuros o con patrones
- NO reduzcas el tamaño por debajo de 2×2 cm

### ✅ SÍ HACER:
- Prueba el escaneo antes de imprimir en masa
- Deja margen blanco alrededor (5mm mínimo)
- Usa alta resolución (600 DPI)
- Verifica que las URLs funcionan
- Guarda los archivos originales

---

## 📊 Tracking

Los parámetros UTM en las URLs permiten ver en Google Analytics:

- **utm_source=packaging**: Origen del tráfico
- **utm_medium=qr**: Medio (QR code)
- **utm_campaign=alfombra_150x180**: Campaña específica

### Cómo ver las métricas:

1. Configura Google Analytics (ver `README.md` principal)
2. Ve a: Adquisición → Tráfico
3. Filtra por `utm_medium = qr`
4. Verás cuántas personas escanearon cada QR

---

## 🔒 URLs Permanentes

Las URLs **NO CAMBIARÁN**. Puedes imprimir con confianza.

- `/productos/alfombra-bebe/150x180` → Siempre será la variante 150×180
- `/productos/alfombra-bebe/180x200` → Siempre será la variante 180×200

Incluso si cambias el contenido de la página, la URL seguirá siendo la misma.

---

## 💡 Consejos

1. **Genera primero los de `dev/`** y pruébalos
2. **Cuando funcionen**, genera los de `live/`
3. **Imprime una muestra** antes de producción masiva
4. **Prueba el escaneo** desde diferentes móviles
5. **Guarda los archivos** en un lugar seguro

---

**Última actualización**: 01/11/2025  
**Versión**: 1.0

