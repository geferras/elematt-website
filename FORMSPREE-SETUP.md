# 📧 Configuración de Formspree para ELEMATT

## ✅ Sistema de Email Implementado

El formulario de contacto está configurado para usar **Formspree** - un servicio gratuito que maneja envíos de formularios sin necesidad de backend.

---

## 🚀 Pasos para Activar (5 minutos)

### 1. Crear Cuenta en Formspree

1. Ve a: **https://formspree.io/**
2. Click en **"Get Started"** o **"Sign Up"**
3. Regístrate con tu email (usa `soporte@elematt.com`)
4. Verifica tu email

### 2. Crear un Nuevo Formulario

1. Una vez dentro, click en **"+ New Form"**
2. Nombre del formulario: **"ELEMATT Contact Form"**
3. Email donde recibirás los mensajes: **`soporte@elematt.com`**
4. Click en **"Create Form"**

### 3. Obtener el Form ID

Después de crear el formulario, verás una URL como:

```
https://formspree.io/f/xyzabc123
```

El **Form ID** es la parte final: `xyzabc123`

### 4. Reemplazar en el Código

Busca y reemplaza en **TODOS** estos archivos:

```
src/pages/contacto.astro
src/pages/en/contacto.astro
src/pages/pt/contacto.astro
src/pages/it/contacto.astro
src/pages/fr/contacto.astro
src/pages/de/contacto.astro
```

**Buscar:**
```html
action="https://formspree.io/f/YOUR_FORM_ID"
```

**Reemplazar con:**
```html
action="https://formspree.io/f/xyzabc123"
```
(Usa tu Form ID real)

### 5. Hacer Commit y Push

```bash
git add -A
git commit -m "feat: configure Formspree for contact form"
git push origin main
```

---

## 📊 Plan Gratuito de Formspree

✅ **50 envíos/mes** - Gratis para siempre  
✅ **Protección anti-spam** incluida  
✅ **Sin límite de formularios**  
✅ **Email notifications** automáticas  
✅ **Archivo de envíos** en dashboard  

Si necesitas más de 50 envíos/mes, el plan Gold cuesta $10/mes (1000 envíos).

---

## 🎯 Cómo Funciona

1. **Usuario llena el formulario** en elematt.com/contacto
2. **Formspree recibe los datos** y los procesa
3. **Tú recibes un email** en `soporte@elematt.com` con:
   - Nombre del usuario
   - Email del usuario (puedes responder directamente)
   - Asunto seleccionado
   - Mensaje completo
4. **Usuario ve confirmación** en pantalla
5. **Puedes responder** directamente desde tu email

---

## 🔒 Seguridad Incluida

- ✅ **Honeypot field** (`_gotcha`) - Bloquea bots
- ✅ **reCAPTCHA** opcional (puedes activarlo en Formspree)
- ✅ **Rate limiting** automático
- ✅ **HTTPS** en todas las comunicaciones

---

## 📧 Campos que se Envían

- **nombre** - Nombre del usuario
- **_replyto** - Email del usuario (Formspree usa este campo especial)
- **asunto** - Tipo de consulta
- **mensaje** - Mensaje completo
- **_subject** - Asunto del email que recibes (diferente por idioma)

---

## 🌍 Emails por Idioma

Cada idioma tiene un asunto diferente para que sepas de dónde viene:

- 🇪🇸 Español: "Nuevo mensaje desde ELEMATT"
- 🇬🇧 Inglés: "New message from ELEMATT (EN)"
- 🇵🇹 Portugués: "Nova mensagem do ELEMATT (PT)"
- 🇮🇹 Italiano: "Nuovo messaggio da ELEMATT (IT)"
- 🇫🇷 Francés: "Nouveau message d'ELEMATT (FR)"
- 🇩🇪 Alemán: "Neue Nachricht von ELEMATT (DE)"

---

## ✅ Verificar que Funciona

1. Ve a tu sitio en producción: `https://elematt.com/contacto`
2. Llena el formulario con datos de prueba
3. Envía
4. Deberías recibir un email en `soporte@elematt.com`
5. Verifica también en el dashboard de Formspree

---

## 🆘 Troubleshooting

**No recibo emails:**
- Verifica que el Form ID esté correcto
- Revisa la carpeta de spam
- Confirma el email en Formspree dashboard

**Error al enviar:**
- Verifica que la URL sea exactamente: `https://formspree.io/f/TU_FORM_ID`
- Asegúrate de que `method="POST"` esté presente

**Demasiados envíos:**
- Upgrade a plan Gold ($10/mes para 1000 envíos)
- O considera implementar Resend + Vercel Functions

---

## 📞 Soporte

- Documentación: https://help.formspree.io/
- Email: support@formspree.io

