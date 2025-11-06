# QR Codes ELEMATT

## 📋 Estructura

```
qr-codes/
├── dev/     → QR codes para desarrollo (localhost:4321)
└── live/    → QR codes para producción (elematt.com)
```

## 📏 Tamaños Disponibles

### 2x2cm
- **Descripción**: Mínimo escaneable (20cm distancia)
- **Uso**: Etiquetas pequeñas, packaging compacto
- **Tamaño**: 472×472 px @ 600 DPI

### 3x3cm
- **Descripción**: Recomendado para packaging
- **Uso**: Cajas de producto, etiquetas estándar
- **Tamaño**: 708×708 px @ 600 DPI

### 4x4cm
- **Descripción**: Óptimo para hoja A4
- **Uso**: Hoja informativa dentro del packaging
- **Tamaño**: 944×944 px @ 600 DPI

### 5x5cm
- **Descripción**: Máximo para hoja A4
- **Uso**: Pósters, displays, material promocional
- **Tamaño**: 1181×1181 px @ 600 DPI

## 🎨 Características

- **Color**: Verde Salvia (#A8B5A0)
- **Fondo**: Blanco
- **Logo**: Pep (elefante) en el centro (20% del área)
- **Margen**: 5mm alrededor del código
- **Esquinas**: Redondeadas
- **Corrección de errores**: Alta (30%)
- **Resolución**: 600 DPI (impresión profesional)

## 📱 Tracking

Todos los QR codes incluyen parámetros UTM:

- `utm_source=packaging`
- `utm_medium=qr`
- `utm_campaign=alfombra_bebe`

Esto permite ver en Google Analytics cuántas personas escanean cada QR.

## 🎯 Destino

Los QR codes apuntan a la página general del producto:

- **Dev**: `http://localhost:4321/productos/alfombra-bebe`
- **Live**: `https://elematt.com/productos/alfombra-bebe`

Desde ahí, el usuario puede elegir la variante (150×180 o 180×200).

## 🖨️ Impresión

### Para packaging (cajas):
- Usa: `3x3cm` o `4x4cm`
- Formato: PNG @ 600 DPI
- Entorno: `live/`

### Para hoja A4 informativa:
- Usa: `4x4cm` o `5x5cm`
- Formato: PNG @ 600 DPI
- Entorno: `live/`

### Para testing:
- Usa: Cualquier tamaño
- Entorno: `dev/`

## ⚠️ Importante

- **NO uses los QR de `dev/` en producción** (apuntan a localhost)
- **Deja 5mm de margen** alrededor del QR al imprimir
- **No coloques texto** muy cerca del código
- **Prueba el escaneo** antes de imprimir en masa
