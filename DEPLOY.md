# Deploy en Cloudflare Pages

## Requisitos previos

1. Cuenta en Cloudflare (gratis)
2. Repositorio Git (GitHub/GitLab)

## Paso a paso

### 1. Crear proyecto en Cloudflare Pages

1. Ir a [dash.cloudflare.com](https://dash.cloudflare.com) → Pages
2. Click "Create a project"
3. Conectar cuenta de GitHub/GitLab
4. Seleccionar repositorio `olavefamily`

### 2. Configurar build

| Campo | Valor |
|-------|-------|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |

### 3. Configurar variables de entorno (opcional)

Si se necesita alguna variable durante el build:
- `NODE_VERSION`: `22`

### 4. Deploy

- Primer deploy manual: click "Save and Deploy"
- Deploys automáticos: en cada push a `main`

### 5. Dominio personalizado

1. En Settings → Custom domains
2. Agregar `olavefamily.com`
3. Seguir instrucciones de DNS

## CI/CD con GitHub Actions

El archivo `.github/workflows/deploy.yml` configura deploy automático.

Necesitas agregar estos secrets en GitHub:
- `CLOUDFLARE_ACCOUNT_ID`: ID de tu cuenta Cloudflare

Para obtener el Account ID:
- En Cloudflare Dashboard → sidebar derecha → Account ID

## DNS recomendado para olavefamily.com

```
A     @       192.0.2.1    (Cloudflare Pages IP — se asigna automáticamente)
CNAME www     olavefamily.pages.dev
```

O usar Cloudflare como DNS completo para aprovechar CDN + SSL automático.

## Rollback

Si algo falla, en Cloudflare Pages →Deployments → seleccionar commit anterior → "Rollback to this deployment".
