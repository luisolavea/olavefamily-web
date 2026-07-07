# Estimación: Migración completa olavefamily.com

## Estado actual del POC

| Elemento | Estado |
|----------|--------|
| Home (landing) | ✅ |
| Página de libro (detalle) | ✅ |
| Página de autor (detalle) | ✅ |
| Listado libros | ✅ |
| Listado autores | ✅ |
| Listado blog | ✅ |
| Post blog (detalle) | ✅ |
| Contacto | ✅ |
| Diseño responsive | ✅ |
| Build + sitemap + robots | ✅ |
| Cloudflare Pages config | ✅ |

## Pendientes para migración completa (~11 páginas + blog)

### Páginas faltantes (estimado)

| Página | Dificultad | Tiempo estimado |
|--------|-----------|-----------------|
| Editorial (sobre nosotros) | Baja | 1h |
| Legales / Términos y condiciones | Baja | 1h |
| Política de privacidad | Baja | 30 min |
| Página 404 personalizada | Baja | 30 min |
| Segundo libro (nuevo contenido) | Media | 1h |
| Segundo autor (nuevo contenido) | Media | 1h |
| ~4-5 páginas adicionales del sitio actual | Baja | 2-3h |
| **Subtotal páginas** | | **~7-9h** |

### Mejoras técnicas

| Tarea | Dificultad | Tiempo estimado |
|-------|-----------|-----------------|
| Imágenes reales (descargar de WP + optimizar) | Media | 2h |
| Open Graph meta tags (tarjetas sociales) | Baja | 1h |
| SEO: redirects desde URLs viejas de WP | Media | 1h |
| Formulario de contacto funcional (Formspree/etc) | Baja | 1h |
| Analytics (GA4) en Astro | Baja | 30 min |
| RSS feed para blog | Baja | 1h |
| Favicon / iconos | Baja | 30 min |
| **Subtotal técnico** | | **~7h** |

### Integración Obsidian vault

| Tarea | Dificultad | Tiempo estimado |
|-------|-----------|-----------------|
| Definir flujo de trabajo vault → content/ | Media | 2h |
| Documentar flujo para Rodrigo | Baja | 1h |
| **Subtotal Obsidian** | | **~3h** |

## Estimación total

| Escenario | Horas | Días (6h/día) |
|-----------|-------|---------------|
| **Mínimo viable** (todo lo pendiente básico) | 12-14h | 2 días |
| **Completo** (incl. polish, imágenes, SEO, Obsidian) | 18-22h | 3-4 días |
| **Buffer** (imprevistos, ajustes de diseño) | +4h | +1 día |

## Recomendación

**Migración completa estimada: 3-4 días de trabajo concentrado.**

La POC ya demostró que el stack funciona. Los siguientes pasos son:

1. **Rodrigo aprueba la POC** → continuar
2. **Priorizar**: ¿quieres migrar TODO de una vez o ir página por página?
3. **Imágenes**: ¿tienes acceso a /wp-content/uploads/ o las descargamos desde el sitio actual?
4. **Obsidian**: ¿quieres que el vault sea la fuente de verdad del contenido?

## Ventajas confirmadas de esta migración

| Aspecto | WordPress actual | Astro estático |
|---------|----------------|----------------|
| Hosting | VPS pago ($) | Cloudflare Pages (gratis) |
| Mantenimiento | Plugins, updates, seguridad | Ninguno |
| Velocidad | Media (PHP + DB) | Máxima (HTML estático + CDN) |
| Seguridad | Superficie de ataque amplia | Cero (sin servidor, sin DB) |
| Escalabilidad | Limitada por VPS | Infinita (CDN global) |
| Contenido | Editor WP limitado | Markdown + Obsidian |
| Build time | ~2s (per request) | ~1s (una vez, en deploy) |
