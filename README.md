# ARNOLDCODE Landing Page

Landing page para consultoría técnica boutique enfocada en arquitectura, auditoría, CTO fractional y modernización legacy.

## Páginas del sitio

- `/` — resumen ejecutivo, servicios, metodología, experiencia y contacto.
- `/servicios` — líneas de servicio, problemas que resuelve y entregables.
- `/metodologia` — proceso de intervención y principios de trabajo.
- `/casos` — ejemplos de retos, soluciones y testimonios.
- `/sobre-mi` — perfil, experiencia y forma de colaboración.
- `/contacto` — formulario, agenda y preguntas frecuentes.
- Ruta 404 con navegación de recuperación y estilo del sitio.

## Requisitos

- Node.js 20+
- npm

## Instalación

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Variables de entorno

```bash
RESEND_API_KEY=tu_api_key
CONTACT_EMAIL=hola@arnoldcode.dev
RESEND_FROM_EMAIL=hola@arnoldcode.dev
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/tu-usuario/llamada
```

El embed se habilita cuando se configura una URL HTTPS de `calendly.com` con una ruta de evento. Si se deja vacía, los botones de agenda llevan al formulario de contacto.
Configura `RESEND_FROM_EMAIL` como una dirección remitente verificada en Resend y `CONTACT_EMAIL` como la dirección que recibirá las consultas.

## Deploy

1. Conecta el repositorio a Vercel.
2. Añade las variables de entorno en el dashboard.
3. Configura el dominio `arnoldcode.dev`.
4. Activa Vercel Analytics y Speed Insights.
5. Configura `NEXT_PUBLIC_CALENDLY_URL` con la URL pública del evento de Calendly para activar el calendario integrado.

## Checklist de lanzamiento

- [ ] Dominio configurado
- [ ] Meta tags SEO y OG image verificadas
- [ ] Formulario funcionando con Resend
- [ ] Analytics activos
- [ ] Responsive verificado en mobile y desktop
- [ ] Lighthouse > 90
