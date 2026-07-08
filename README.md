# Editorial Olave Family

Sitio web estático para Editorial Olave Family — editorial independiente dedicada a la publicación y preservación de obras literarias, formativas y culturales.

🌐 **URL:** https://olavefamily.com

---

## 🚀 Stack

| Tecnología | Uso |
|-----------|-----|
| **Astro** | Generador de sitio estático |
| **Tailwind CSS** | Estilos |
| **Markdown** | Fuente de contenido |
| **Cloudflare Pages** | Hosting + CDN + SSL |
| **GitHub** | Repo + CI/CD |

---

## 📁 Estructura

```
├── src/
│   ├── content/          # Contenido en Markdown (libros, autores, posts)
│   ├── layouts/          # Plantillas base
│   ├── pages/            # Rutas del sitio
│   └── components/       # Componentes reutilizables
├── public/images/        # Imágenes estáticas
├── build.sh              # Script de build (lee desde Obsidian Vault)
└── dist/                 # Output estático (generado)
```

---

## 📝 Flujo de trabajo (contenido)

1. **Editar** en Obsidian Vault:
   ```
   vault/40-Proyectos/Editorial-Olave-Family/
   ├── content/libros/       # Fichas de libros
   ├── content/autores/      # Perfiles de autores
   ├── content/posts/        # Blog
   └── public/images/        # Portadas y fotos
   ```

2. **Build:** `./build.sh` sincroniza vault → repo

3. **Deploy:** `git push origin main` → Cloudflare Pages compila automáticamente

---

## 🛠️ Desarrollo local

```bash
npm install
npm run dev      # Servidor local: http://localhost:4321
npm run build    # Build estático
npm run preview  # Preview del build
```

---

## 🚀 Deploy

Automático vía GitHub → Cloudflare Pages:

1. Push a `main` → trigger build
2. Cloudflare Pages ejecuta `./build.sh`
3. Genera `dist/` y deploya

**Configuración Cloudflare Pages:**
- **Build command:** `./build.sh`
- **Build output:** `dist`
- **Framework preset:** Astro

---

## 📄 Licencia

© 2026 Editorial Olave Family. Todos los derechos reservados.
