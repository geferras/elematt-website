# 🔔 Sistema de Notificaciones - ELEMATT

**Fecha**: 2025-11-05  
**Estado**: ✅ **IMPLEMENTADO**  
**Componente**: `src/components/NotificationButtons.astro`

---

## 🎯 Objetivo

Permitir a los clientes suscribirse para recibir notificaciones sobre:
1. **Nuevos Productos**: Avisos cuando ELEMATT lance nuevos productos
2. **Aviso de Stock**: Notificación cuando una variante específica esté disponible

---

## 🌟 Características

### **1. Botones Flotantes**
- Posición fija en la esquina inferior derecha
- Dos botones:
  - 🔔 **Nuevos Productos** (Verde Salvia)
  - 📦 **Aviso de Stock** (Melón)
- Animaciones suaves al hover
- Responsive (se adaptan a móvil)

### **2. Modal Elegante**
- Diseño minimalista y profesional
- Formulario simple (Email + Nombre opcional)
- Checkbox de consentimiento (RGPD)
- Mensaje de éxito animado
- Cierre con ESC o click fuera

### **3. Integración Inteligente**
- **Página general** (`/productos/alfombra-bebe/`): Solo botón "Nuevos Productos"
- **Páginas de variantes** (`/150x180`, `/180x200`): Ambos botones
- **Footer**: Botón "Nuevos Productos" en todas las páginas

### **4. Datos Capturados**
```javascript
{
  type: 'new-products' | 'stock',
  productId: 'alfombra-bebe',
  productName: 'Alfombra Bebé Acolchada Plegable',
  variantId: 'compacta-150x180' | 'xl-180x200',
  variantName: 'Compacta 150×180 cm' | 'XL 180×200 cm',
  email: 'usuario@email.com',
  name: 'Nombre Usuario',
  consent: true
}
```

---

## 📍 Ubicaciones

### **1. Páginas de Producto**

#### **Página General** (`/productos/alfombra-bebe/`)
```astro
<NotificationButtons
  productId="alfombra-bebe"
  productName="Alfombra Bebé Acolchada Plegable"
  position="fixed"
/>
```
**Botones mostrados**:
- ✅ Nuevos Productos

---

#### **Variante Compacta** (`/productos/alfombra-bebe/150x180`)
```astro
<NotificationButtons
  productId="alfombra-bebe"
  productName="Alfombra Bebé Acolchada Plegable"
  variantId="compacta-150x180"
  variantName="Compacta 150×180 cm"
  position="fixed"
/>
```
**Botones mostrados**:
- ✅ Nuevos Productos
- ✅ Aviso de Stock (Compacta 150×180 cm)

---

#### **Variante XL** (`/productos/alfombra-bebe/180x200`)
```astro
<NotificationButtons
  productId="alfombra-bebe"
  productName="Alfombra Bebé Acolchada Plegable"
  variantId="xl-180x200"
  variantName="XL 180×200 cm"
  position="fixed"
/>
```
**Botones mostrados**:
- ✅ Nuevos Productos
- ✅ Aviso de Stock (XL 180×200 cm)

---

### **2. Footer (Todas las Páginas)**

Botón integrado en la columna "Mantente Informado":
```html
<button class="footer-notify-btn" data-type="new-products">
  Nuevos Productos
</button>
```

**Conectado al modal flotante** mediante JavaScript.

---

## 🎨 Diseño

### **Colores**

```css
/* Botón Nuevos Productos */
background: linear-gradient(135deg, #6C806B, #A8B5A0);
/* Verde Salvia Oscuro → Verde Salvia */

/* Botón Aviso de Stock */
background: linear-gradient(135deg, #D4856F, #F4C2B8);
/* Melón Oscuro → Melón */

/* Modal */
background: white;
overlay: rgba(0, 0, 0, 0.6) + blur(4px);
```

### **Animaciones**

1. **Botones**:
   - Hover: `translateY(-3px)` + sombra
   - Active: `translateY(-1px)`

2. **Modal**:
   - Overlay: `fadeIn` (0.3s)
   - Contenido: `slideUp` (0.4s)
   - Cierre: `rotate(90deg)` en botón X

3. **Éxito**:
   - Icono: `scaleIn` (0.5s)
   - Auto-cierre: 2.5 segundos

---

## 📱 Responsive

### **Desktop (> 768px)**
```
┌─────────────────────────────┐
│                             │
│                             │
│                             │
│                             │
│                             │
│                             │
│                   ┌─────┐   │
│                   │ 🔔  │   │ ← Nuevos Productos
│                   └─────┘   │
│                   ┌─────┐   │
│                   │ 📦  │   │ ← Aviso de Stock
│                   └─────┘   │
└─────────────────────────────┘
```

### **Mobile (< 768px)**
```
┌─────────────────┐
│                 │
│                 │
│                 │
│                 │
│                 │
│                 │
│           ┌──┐  │
│           │🔔│  │ ← Solo icono
│           └──┘  │
│           ┌──┐  │
│           │📦│  │ ← Solo icono
│           └──┘  │
└─────────────────┘
```

**Cambios en móvil**:
- Texto oculto (solo iconos)
- Botones más pequeños (48×48 px)
- Posición: `bottom: 1rem; right: 1rem`

---

## 🔧 Props del Componente

```typescript
interface Props {
  productId?: string;        // ID del producto
  productName?: string;      // Nombre del producto
  variantId?: string;        // ID de la variante (opcional)
  variantName?: string;      // Nombre de la variante (opcional)
  position?: 'fixed' | 'inline'; // Posición de los botones
}
```

### **Valores por Defecto**:
```javascript
{
  productId: 'general',
  productName: 'Nuevos Productos',
  variantId: undefined,
  variantName: undefined,
  position: 'fixed'
}
```

---

## 🚀 Flujo de Usuario

### **Caso 1: Nuevos Productos**

1. Usuario hace click en botón "Nuevos Productos" 🔔
2. Se abre modal con título "Recibe Notificaciones"
3. Subtítulo: "Te avisaremos cuando lancemos nuevos productos"
4. Usuario ingresa email (y opcionalmente nombre)
5. Acepta checkbox de consentimiento
6. Click en "Suscribirme"
7. Muestra mensaje de éxito ✅
8. Modal se cierra automáticamente en 2.5s

---

### **Caso 2: Aviso de Stock**

1. Usuario está en página de variante (ej: `/150x180`)
2. Hace click en botón "Aviso de Stock" 📦
3. Se abre modal con título "Recibe Notificaciones"
4. Subtítulo: "Te avisaremos cuando Compacta 150×180 cm esté disponible"
5. Usuario ingresa email (y opcionalmente nombre)
6. Acepta checkbox de consentimiento
7. Click en "Suscribirme"
8. Muestra mensaje de éxito ✅
9. Modal se cierra automáticamente en 2.5s

---

## 💾 Integración con Backend

### **Datos Enviados**

```javascript
// Ejemplo: Nuevos Productos
{
  type: 'new-products',
  productId: 'general',
  productName: 'Nuevos Productos',
  variantId: null,
  variantName: null,
  email: 'usuario@email.com',
  name: 'Juan Pérez',
  consent: true,
  timestamp: '2025-11-05T14:30:00Z'
}

// Ejemplo: Aviso de Stock
{
  type: 'stock',
  productId: 'alfombra-bebe',
  productName: 'Alfombra Bebé Acolchada Plegable',
  variantId: 'compacta-150x180',
  variantName: 'Compacta 150×180 cm',
  email: 'usuario@email.com',
  name: 'María García',
  consent: true,
  timestamp: '2025-11-05T14:35:00Z'
}
```

### **Endpoints Sugeridos**

```javascript
// POST /api/notifications/subscribe
{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}

// Respuesta exitosa
{
  success: true,
  message: 'Suscripción registrada correctamente',
  subscriptionId: 'sub_123456'
}

// Respuesta error
{
  success: false,
  error: 'Email ya registrado',
  code: 'DUPLICATE_EMAIL'
}
```

---

## 📊 Base de Datos Sugerida

### **Tabla: `notifications_subscriptions`**

```sql
CREATE TABLE notifications_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type VARCHAR(20) NOT NULL, -- 'new-products' | 'stock'
  product_id VARCHAR(100),
  product_name VARCHAR(255),
  variant_id VARCHAR(100),
  variant_name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  consent BOOLEAN NOT NULL DEFAULT true,
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  notified_at TIMESTAMP,
  unsubscribe_token VARCHAR(255) UNIQUE,
  
  UNIQUE(email, type, variant_id)
);

-- Índices
CREATE INDEX idx_email ON notifications_subscriptions(email);
CREATE INDEX idx_type ON notifications_subscriptions(type);
CREATE INDEX idx_variant ON notifications_subscriptions(variant_id);
CREATE INDEX idx_active ON notifications_subscriptions(active);
```

---

## 🔐 Seguridad y Privacidad

### **RGPD Compliance**

1. ✅ **Consentimiento explícito**: Checkbox obligatorio
2. ✅ **Transparencia**: Texto claro sobre el uso de datos
3. ✅ **Derecho a darse de baja**: Token de unsubscribe
4. ✅ **Minimización de datos**: Solo email y nombre opcional
5. ✅ **Seguridad**: HTTPS, validación de email

### **Texto de Consentimiento**

```
"Acepto recibir notificaciones de ELEMATT y entiendo que 
puedo darme de baja en cualquier momento."
```

### **Email de Confirmación**

Incluir en cada email:
```
Para darte de baja, haz click aquí:
https://elematt.com/unsubscribe?token=abc123xyz
```

---

## ✅ Checklist de Implementación

### **Frontend** ✅
- [x] Componente `NotificationButtons.astro` creado
- [x] Modal con formulario
- [x] Validación de email
- [x] Mensaje de éxito
- [x] Responsive design
- [x] Animaciones suaves
- [x] Accesibilidad (ARIA labels)
- [x] Integración en páginas de producto
- [x] Integración en Footer

### **Backend** ⏳ (Pendiente)
- [ ] Endpoint `/api/notifications/subscribe`
- [ ] Validación de datos
- [ ] Almacenamiento en base de datos
- [ ] Generación de token de unsubscribe
- [ ] Email de confirmación
- [ ] Sistema de envío de notificaciones
- [ ] Panel de administración

---

## 🎯 Próximos Pasos

### **Fase 1: Backend Básico** (1-2 días)
1. Crear endpoint `/api/notifications/subscribe`
2. Conectar con base de datos
3. Validar y almacenar suscripciones
4. Enviar email de confirmación

### **Fase 2: Sistema de Envío** (2-3 días)
1. Crear endpoint `/api/notifications/send`
2. Filtrar suscriptores por tipo
3. Enviar emails masivos
4. Tracking de emails enviados

### **Fase 3: Panel Admin** (3-5 días)
1. Dashboard de suscriptores
2. Filtros por tipo/producto/variante
3. Exportar a CSV
4. Envío manual de notificaciones
5. Estadísticas

---

## 📧 Plantillas de Email

### **Email: Confirmación de Suscripción**

```html
Asunto: ✅ Suscripción Confirmada - ELEMATT

Hola {{name}},

¡Gracias por suscribirte a las notificaciones de ELEMATT!

{{#if type == 'new-products'}}
Te avisaremos cuando lancemos nuevos productos.
{{else}}
Te avisaremos cuando {{variantName}} esté disponible.
{{/if}}

---
Para darte de baja: https://elematt.com/unsubscribe?token={{token}}
```

### **Email: Nuevo Producto Disponible**

```html
Asunto: 🎉 Nuevo Producto Disponible - ELEMATT

Hola {{name}},

¡Tenemos novedades! Acabamos de lanzar un nuevo producto:

{{productName}}

Ver ahora: https://elematt.com/productos/{{productId}}

---
Para darte de baja: https://elematt.com/unsubscribe?token={{token}}
```

### **Email: Stock Disponible**

```html
Asunto: 📦 {{variantName}} Ya Disponible - ELEMATT

Hola {{name}},

¡Buenas noticias! El producto que esperabas ya está disponible:

{{productName}} - {{variantName}}

Comprar ahora: https://elematt.com/productos/{{productId}}/{{variantId}}

---
Para darte de baja: https://elematt.com/unsubscribe?token={{token}}
```

---

## 📚 Recursos

### **Servicios de Email**
- **SendGrid**: https://sendgrid.com (12,000 emails/mes gratis)
- **Mailgun**: https://mailgun.com (5,000 emails/mes gratis)
- **Amazon SES**: https://aws.amazon.com/ses (62,000 emails/mes gratis)
- **Resend**: https://resend.com (3,000 emails/mes gratis)

### **Validación de Email**
- **Email Validator**: https://www.npmjs.com/package/email-validator
- **Validator.js**: https://www.npmjs.com/package/validator

### **RGPD**
- **Guía RGPD**: https://gdpr.eu/
- **Consentimiento**: https://gdpr.eu/article-7-conditions-for-consent/

---

**Creado**: 2025-11-05  
**Autor**: ELEMATT Dev Team  
**Versión**: 1.0  
**Estado**: ✅ Frontend Completo | ⏳ Backend Pendiente

