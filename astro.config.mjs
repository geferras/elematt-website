import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://elematt.com',
  output: 'static',

  // i18n configuration
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt', 'it', 'fr', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  build: {
    assets: 'assets',
  },

  // Configuración optimizada de Vite para desarrollo
  vite: {
    // Configuración del servidor de desarrollo
    server: {
      watch: {
        // Usar polling para detectar cambios en sistemas de archivos lentos
        // o cuando el IDE no notifica cambios correctamente
        usePolling: true,
        interval: 100, // Verificar cada 100ms
      },
      // Hot Module Replacement (HMR) optimizado
      hmr: {
        overlay: true, // Mostrar errores en overlay
      },
    },

    // Optimizaciones de build
    build: {
      cssMinify: true,
      minify: true,
      // Generar sourcemaps para debugging
      sourcemap: false,
    },

    // Optimizar dependencias
    optimizeDeps: {
      exclude: ['astro'],
    },
  },
});

