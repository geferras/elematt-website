#!/usr/bin/env python3
"""
Generador de QR Codes para ELEMATT
Genera QR codes en diferentes tamaños y formatos para desarrollo y producción
"""

import os
import sys

# Intentar importar qrcode
try:
    import qrcode
    from PIL import Image, ImageDraw
except ImportError:
    print("❌ Error: Necesitas instalar las dependencias:")
    print("   pip3 install qrcode[pil] pillow")
    sys.exit(1)

# Configuración
COLORS = {
    'verde_salvia': '#A8B5A0',
    'melon_empolvado': '#F4C2B8',
    'lino_suave': '#E8E4D9',
}

# URLs - Ahora apuntan a la página general del producto
URLS = {
    'dev': {
        'alfombra-bebe': 'http://localhost:4321/productos/alfombra-bebe?utm_source=packaging&utm_medium=qr&utm_campaign=alfombra_bebe',
    },
    'live': {
        'alfombra-bebe': 'https://elematt.com/productos/alfombra-bebe?utm_source=packaging&utm_medium=qr&utm_campaign=alfombra_bebe',
    }
}

# Tamaños (en cm a 600 DPI)
# 1 cm = 236.22 pixels a 600 DPI
DPI = 600
CM_TO_PX = 236.22

SIZES = {
    '2x2cm': {
        'size': int(2 * CM_TO_PX),
        'description': 'Mínimo escaneable (20cm distancia)',
        'use_case': 'Etiquetas pequeñas, packaging compacto'
    },
    '3x3cm': {
        'size': int(3 * CM_TO_PX),
        'description': 'Recomendado para packaging',
        'use_case': 'Cajas de producto, etiquetas estándar'
    },
    '4x4cm': {
        'size': int(4 * CM_TO_PX),
        'description': 'Óptimo para hoja A4',
        'use_case': 'Hoja informativa dentro del packaging'
    },
    '5x5cm': {
        'size': int(5 * CM_TO_PX),
        'description': 'Máximo para hoja A4',
        'use_case': 'Pósters, displays, material promocional'
    }
}

def create_qr(url, size_px, output_path, logo_path=None):
    """Crea un QR code con estilo ELEMATT y logo en el centro"""

    # Crear QR code
    qr = qrcode.QRCode(
        version=None,  # Auto-ajustar
        error_correction=qrcode.constants.ERROR_CORRECT_H,  # Alta corrección (30%) para logo
        box_size=10,
        border=4,  # Margen de 4 módulos
    )

    qr.add_data(url)
    qr.make(fit=True)

    # Generar imagen
    img = qr.make_image(
        fill_color=COLORS['verde_salvia'],
        back_color='white'
    )

    # Convertir a RGB si es necesario
    if img.mode != 'RGB':
        img = img.convert('RGB')

    # Redimensionar a tamaño exacto
    img = img.resize((size_px, size_px), Image.Resampling.LANCZOS)

    # Añadir logo en el centro si existe
    if logo_path and os.path.exists(logo_path):
        try:
            logo = Image.open(logo_path)

            # Calcular tamaño del logo (20% del QR)
            logo_size = int(size_px * 0.20)

            # Redimensionar logo manteniendo aspecto
            logo.thumbnail((logo_size, logo_size), Image.Resampling.LANCZOS)

            # Crear fondo blanco circular para el logo
            logo_bg_size = int(logo_size * 1.1)  # 10% más grande
            logo_bg = Image.new('RGB', (logo_bg_size, logo_bg_size), 'white')

            # Crear máscara circular
            from PIL import ImageDraw
            mask = Image.new('L', (logo_bg_size, logo_bg_size), 0)
            draw = ImageDraw.Draw(mask)
            draw.ellipse((0, 0, logo_bg_size, logo_bg_size), fill=255)

            # Pegar fondo blanco circular
            logo_bg_pos = ((size_px - logo_bg_size) // 2, (size_px - logo_bg_size) // 2)
            img.paste(logo_bg, logo_bg_pos, mask)

            # Pegar logo en el centro
            logo_pos = ((size_px - logo.width) // 2, (size_px - logo.height) // 2)
            if logo.mode == 'RGBA':
                img.paste(logo, logo_pos, logo)
            else:
                img.paste(logo, logo_pos)
        except Exception as e:
            print(f"  ⚠️  No se pudo añadir logo: {e}")

    # Guardar con alta resolución
    img.save(output_path, dpi=(DPI, DPI), quality=100)
    return img

def main():
    """Genera todos los QR codes"""

    # Crear directorios
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    qr_dir = os.path.join(base_dir, 'public', 'qr-codes')
    logo_path = os.path.join(base_dir, 'public', 'brand', 'pep-elefante.jpg')

    print("🎨 Generando QR Codes para ELEMATT\n")
    print(f"📁 Directorio: {qr_dir}")
    print(f"🐘 Logo: {logo_path}\n")

    if not os.path.exists(logo_path):
        print(f"⚠️  Logo no encontrado: {logo_path}")
        print("   Generando QR codes sin logo...\n")
        logo_path = None

    total = 0

    for env in ['dev', 'live']:
        print(f"\n{'='*60}")
        print(f"🌍 Entorno: {env.upper()}")
        print(f"{'='*60}\n")

        for product, url in URLS[env].items():
            # Crear carpeta para cada producto
            product_dir = os.path.join(qr_dir, env, product)
            os.makedirs(product_dir, exist_ok=True)

            print(f"\n📦 Producto: {product}")
            print(f"🔗 URL: {url}")
            print(f"📁 Carpeta: {product_dir}\n")

            for size_name, size_info in SIZES.items():
                size_px = size_info['size']
                description = size_info['description']
                use_case = size_info['use_case']

                # Nombre del archivo
                filename = f"qr_{size_name}.png"
                output_path = os.path.join(product_dir, filename)

                # Generar QR con logo
                create_qr(url, size_px, output_path, logo_path)

                # Info
                file_size = os.path.getsize(output_path) / 1024  # KB
                print(f"  ✅ {size_name:8} | {description:35} | {file_size:6.1f} KB")
                print(f"     💡 Uso: {use_case}")

                total += 1

    print(f"\n{'='*60}")
    print(f"✅ Total generados: {total} QR codes")
    print(f"📁 Estructura:")
    print(f"   public/qr-codes/")
    print(f"   ├── dev/")
    print(f"   │   └── alfombra-bebe/")
    print(f"   └── live/")
    print(f"       └── alfombra-bebe/")
    print(f"{'='*60}\n")

    # Generar README
    readme_path = os.path.join(qr_dir, 'README.md')
    with open(readme_path, 'w', encoding='utf-8') as f:
        f.write("# QR Codes ELEMATT\n\n")
        f.write("## 📋 Estructura\n\n")
        f.write("```\n")
        f.write("qr-codes/\n")
        f.write("├── dev/     → QR codes para desarrollo (localhost:4321)\n")
        f.write("└── live/    → QR codes para producción (elematt.com)\n")
        f.write("```\n\n")
        f.write("## 📏 Tamaños Disponibles\n\n")

        for size_name, size_info in SIZES.items():
            f.write(f"### {size_name}\n")
            f.write(f"- **Descripción**: {size_info['description']}\n")
            f.write(f"- **Uso**: {size_info['use_case']}\n")
            f.write(f"- **Tamaño**: {size_info['size']}×{size_info['size']} px @ 600 DPI\n\n")

        f.write("## 🎨 Características\n\n")
        f.write("- **Color**: Verde Salvia (#A8B5A0)\n")
        f.write("- **Fondo**: Blanco\n")
        f.write("- **Logo**: Pep (elefante) en el centro (20% del área)\n")
        f.write("- **Margen**: 5mm alrededor del código\n")
        f.write("- **Esquinas**: Redondeadas\n")
        f.write("- **Corrección de errores**: Alta (30%)\n")
        f.write("- **Resolución**: 600 DPI (impresión profesional)\n\n")
        f.write("## 📱 Tracking\n\n")
        f.write("Todos los QR codes incluyen parámetros UTM:\n\n")
        f.write("- `utm_source=packaging`\n")
        f.write("- `utm_medium=qr`\n")
        f.write("- `utm_campaign=alfombra_bebe`\n\n")
        f.write("Esto permite ver en Google Analytics cuántas personas escanean cada QR.\n\n")
        f.write("## 🎯 Destino\n\n")
        f.write("Los QR codes apuntan a la página general del producto:\n\n")
        f.write("- **Dev**: `http://localhost:4321/productos/alfombra-bebe`\n")
        f.write("- **Live**: `https://elematt.com/productos/alfombra-bebe`\n\n")
        f.write("Desde ahí, el usuario puede elegir la variante (150×180 o 180×200).\n\n")
        f.write("## 🖨️ Impresión\n\n")
        f.write("### Para packaging (cajas):\n")
        f.write("- Usa: `3x3cm` o `4x4cm`\n")
        f.write("- Formato: PNG @ 600 DPI\n")
        f.write("- Entorno: `live/`\n\n")
        f.write("### Para hoja A4 informativa:\n")
        f.write("- Usa: `4x4cm` o `5x5cm`\n")
        f.write("- Formato: PNG @ 600 DPI\n")
        f.write("- Entorno: `live/`\n\n")
        f.write("### Para testing:\n")
        f.write("- Usa: Cualquier tamaño\n")
        f.write("- Entorno: `dev/`\n\n")
        f.write("## ⚠️ Importante\n\n")
        f.write("- **NO uses los QR de `dev/` en producción** (apuntan a localhost)\n")
        f.write("- **Deja 5mm de margen** alrededor del QR al imprimir\n")
        f.write("- **No coloques texto** muy cerca del código\n")
        f.write("- **Prueba el escaneo** antes de imprimir en masa\n")

    print(f"📄 README generado: {readme_path}\n")

if __name__ == '__main__':
    main()

