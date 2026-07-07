# Guía: Subir a GitHub + Configurar Cloudflare Pages

## Paso 1: Crear repositorio en GitHub

1. Ir a https://github.com/new
2. Nombre del repositorio: `olavefamily-web`
3. Visibilidad: **Public** (o Private si prefieres)
4. ✅ Initialize with README (opcional)
5. Click **Create repository**

## Paso 2: Subir código desde local

```bash
# En la carpeta del proyecto
cd /root/.openclaw/workspaces/lugh/poc-olavefamily

# Inicializar git
git init
git add .
git commit -m "Initial commit: Editorial Olave Family en Astro"

# Conectar con GitHub (reemplaza TU_USUARIO con tu username)
git remote add origin https://github.com/TU_USUARIO/olavefamily-web.git
git branch -M main
git push -u origin main
```

## Paso 3: Configurar Cloudflare Pages

1. Ir a https://dash.cloudflare.com
2. En el sidebar, ir a **Pages**
3. Click **Create a project**
4. Seleccionar **Connect to Git**
5. Autorizar Cloudflare a acceder a GitHub
6. Seleccionar el repositorio `olavefamily-web`
7. Click **Begin setup**

## Paso 4: Configurar build

| Campo | Valor |
|-------|-------|
| **Project name** | olavefamily (o el que prefieras) |
| **Production branch** | main |
| **Framework preset** | Astro |
| **Build command** | `./build.sh` |
| **Build output directory** | `dist` |

Variables de entorno (opcional):
- `NODE_VERSION`: `22`

Click **Save and Deploy**

## Paso 5: Dominio personalizado

1. En el proyecto de Cloudflare Pages, ir a **Custom domains**
2. Click **Set up a custom domain**
3. Ingresar: `olavefamily.com`
4. Seguir instrucciones de DNS

## Deploy automático

A partir de ahora, cada push a `main` hará deploy automático.

## Workflow de trabajo

### Para editar contenido (desde Obsidian):
1. Editar archivos `.md` en `/root/.openclaw/vault/40-Proyectos/Editorial-Olave-Family/`
2. Guardar en Obsidian
3. Ejecutar build y push:

```bash
cd /root/.openclaw/workspaces/lugh/poc-olavefamily
./build.sh
git add .
git commit -m "Actualización contenido"
git push origin main
```

Cloudflare Pages hará deploy automático.
