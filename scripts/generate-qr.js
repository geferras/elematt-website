// Script para generar QR codes para productos ELEMATT
// Usar en: https://www.qr-code-generator.com/ o similar

const productos = {
  'alfombra-150x180': {
    url: 'https://elematt.com/productos/alfombra-bebe/150x180',
    nombre: 'Alfombra Bebé 150×180×1,5 cm',
    descripcion: 'QR para packaging - Variante Compacta'
  },
  'alfombra-180x200': {
    url: 'https://elematt.com/productos/alfombra-bebe/180x200',
    nombre: 'Alfombra Bebé 180×200×1,5 cm',
    descripcion: 'QR para packaging - Variante XL'
  }
};

console.log('='.repeat(60));
console.log('CÓDIGOS QR PARA PRODUCTOS ELEMATT');
console.log('='.repeat(60));
console.log('\nIMPORTANTE: Estas URLs son PERMANENTES y no cambiarán.');
console.log('Puedes imprimir estos QR en el packaging sin preocuparte.\n');

Object.entries(productos).forEach(([key, data]) => {
  console.log(`\n${data.nombre}`);
  console.log('-'.repeat(60));
  console.log(`URL: ${data.url}`);
  console.log(`Descripción: ${data.descripcion}`);
  console.log(`\nGenerar QR en: https://www.qr-code-generator.com/`);
  console.log(`Pegar esta URL: ${data.url}`);
  console.log(`Guardar como: public/qr-codes/${key}.png`);
});

console.log('\n' + '='.repeat(60));
console.log('ESTRUCTURA DE RUTAS PERMANENTES:');
console.log('='.repeat(60));
console.log(`
elematt.com/                          → Página principal de la marca
elematt.com/productos                 → Catálogo de productos
elematt.com/productos/alfombra-bebe   → Página del producto alfombra
elematt.com/productos/alfombra-bebe/150x180  → Variante 150×180
elematt.com/productos/alfombra-bebe/180x200  → Variante XL 180×200
elematt.com/historia                  → Historia de ELEMATT
`);

console.log('\n' + '='.repeat(60));
console.log('NOTAS TÉCNICAS:');
console.log('='.repeat(60));
console.log(`
1. Las URLs usan rutas limpias (sin .html)
2. Son permanentes y SEO-friendly
3. Cada variante tiene su propia página con:
   - Historia del producto
   - Especificaciones técnicas
   - Galería de imágenes
   - Link directo a Amazon
4. El QR redirige a la página del producto, NO directamente a Amazon
5. Esto permite:
   - Tracking de escaneos
   - Actualizar el link de Amazon sin reimprimir
   - Mostrar contenido adicional (historia, cuidados, etc.)
`);

