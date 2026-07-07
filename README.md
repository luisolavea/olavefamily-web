# Editorial Olave Family

Sitio web estático para Editorial Olave Family — editorial independiente dedicada a la publicación y preservación de obras literarias, formativas y culturales.

## 🚀 Tecnologías

- **Astro** — Generador de sitio estático
- **Tailwind CSS** — Estilos
- **Markdown** — Fuente de contenido
- **Cloudflare Pages** — Hosting y CDN

## 📁 Estructura

```
├── src/
│   ├── content/          # Contenido en Markdown (libros, autores, posts)
│   ├── layouts/          # Plantillas base
│   ├── pages/            # Rutas del sitio
│   └── components/       # Componentes reutilizables
├── public/images/        # Imágenes estáticas
├── build.sh             # Script de build (lee desde Obsidian Vault)
└── dist/                # Output estático (generado)
```

## 📝 Contenido desde Obsidian Vault

El contenido se edita en el Obsidian Vault compartido:

```
vault/40-Proyectos/Editorial-Olave-Family/
├── content/libros/       # Fichas de libros
├── content/autores/      # Perfiles de autores
├── content/posts/        # Blog
└── public/images/        # Portadas y fotos
```

Ver [build.sh](./build.sh) para el flujo de sincronización.

## 🛠️ Desarrollo local

```bash
npm install
npm run dev      # Servidor local: http://localhost:4321
npm run build    # Build estático
npm run preview  # Preview del build
```

## 🚀 Deploy

Automático via GitHub → Cloudflare Pages:

1. Push a `main` → Trigger build
2. Cloudflare Pages ejecuta `./build.sh`
3. Genera `dist/` y deploya

Ver [GITHUB-GUIDE.md](./GITHUB-GUIDE.md) para configuración inicial.

## 📄 Licencia

© 2026 Editorial Olave Family. Todos los derechos reservados.
