// Tipos de datos para productos
export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  amazonLink: string;
  category: string;
  collection: 'hogar' | 'bienestar' | 'accesorios' | 'decoracion' | 'cocina' | 'textiles';
  featured?: boolean;
  tags?: string[];
}

// Productos de ejemplo - Reemplazar con productos reales
export const products: Product[] = [
  // HOGAR
  {
    id: 'hogar-vela-1',
    title: 'Vela Aromática de Soja',
    description: 'Vela artesanal de soja con aromas naturales. Perfecta para crear ambientes acogedores.',
    image: '/images/products/hogar/vela-1.jpg',
    price: '€24.99',
    amazonLink: 'https://amazon.es/...',
    category: 'Aromas',
    collection: 'hogar',
    featured: true,
    tags: ['velas', 'aromas', 'natural', 'soja'],
  },
  {
    id: 'hogar-cojin-1',
    title: 'Cojín de Lino Natural',
    description: 'Cojín decorativo de lino 100% natural con diseño minimalista.',
    image: '/images/products/hogar/cojin-1.jpg',
    price: '€34.99',
    amazonLink: 'https://amazon.es/...',
    category: 'Textiles',
    collection: 'hogar',
    tags: ['cojines', 'lino', 'textiles', 'decoracion'],
  },
  {
    id: 'hogar-difusor-1',
    title: 'Difusor de Aromas',
    description: 'Difusor de aceites esenciales con diseño elegante y moderno.',
    image: '/images/products/hogar/difusor-1.jpg',
    price: '€45.99',
    amazonLink: 'https://amazon.es/...',
    category: 'Aromas',
    collection: 'hogar',
    tags: ['difusor', 'aromas', 'aceites-esenciales'],
  },

  // BIENESTAR
  {
    id: 'bienestar-aceites-1',
    title: 'Set de Aceites Esenciales',
    description: 'Colección de aceites esenciales puros para aromaterapia y bienestar.',
    image: '/images/products/bienestar/aceites-1.jpg',
    price: '€39.99',
    amazonLink: 'https://amazon.es/...',
    category: 'Aromaterapia',
    collection: 'bienestar',
    featured: true,
    tags: ['aceites', 'aromaterapia', 'natural', 'bienestar'],
  },
  {
    id: 'bienestar-yoga-1',
    title: 'Esterilla de Yoga Premium',
    description: 'Esterilla antideslizante de caucho natural, perfecta para yoga y meditación.',
    image: '/images/products/bienestar/yoga-1.jpg',
    price: '€54.99',
    amazonLink: 'https://amazon.es/...',
    category: 'Yoga',
    collection: 'bienestar',
    tags: ['yoga', 'meditacion', 'ejercicio', 'natural'],
  },

  // ACCESORIOS
  {
    id: 'accesorios-bolso-1',
    title: 'Bolso de Cuero Artesanal',
    description: 'Bolso de cuero genuino hecho a mano con detalles únicos y acabados premium.',
    image: '/images/products/accesorios/bolso-1.jpg',
    price: '€89.99',
    amazonLink: 'https://amazon.es/...',
    category: 'Bolsos',
    collection: 'accesorios',
    featured: true,
    tags: ['bolso', 'cuero', 'artesanal', 'premium'],
  },

  // DECORACIÓN
  {
    id: 'decoracion-espejo-1',
    title: 'Espejo de Pared Minimalista',
    description: 'Espejo redondo con marco de madera natural, diseño atemporal y elegante.',
    image: '/images/products/decoracion/espejo-1.jpg',
    price: '€64.99',
    amazonLink: 'https://amazon.es/...',
    category: 'Espejos',
    collection: 'decoracion',
    featured: true,
    tags: ['espejo', 'madera', 'minimalista', 'decoracion'],
  },
  {
    id: 'decoracion-maceta-1',
    title: 'Maceta de Cerámica',
    description: 'Maceta artesanal de cerámica con acabado mate, perfecta para plantas de interior.',
    image: '/images/products/decoracion/maceta-1.jpg',
    price: '€29.99',
    amazonLink: 'https://amazon.es/...',
    category: 'Plantas',
    collection: 'decoracion',
    tags: ['maceta', 'ceramica', 'plantas', 'artesanal'],
  },
];

// Funciones helper para filtrar productos
export const getProductsByCollection = (collection: Product['collection']) => {
  return products.filter(p => p.collection === collection);
};

export const getFeaturedProducts = () => {
  return products.filter(p => p.featured === true);
};

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(p => p.category === category);
};

export const searchProducts = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.title.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

