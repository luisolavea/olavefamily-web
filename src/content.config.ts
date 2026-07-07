import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const libros = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/libros' }),
  schema: z.object({
    titulo: z.string(),
    subtitulo: z.string().optional(),
    slug: z.string(),
    autor: z.string(),
    autorSlug: z.string(),
    genero: z.string(),
    anio: z.number(),
    paginas: z.number().optional(),
    isbn: z.string().optional(),
    sinopsis: z.string(),
    descripcionLarga: z.string().optional(),
    portada: z.string(),
    portadaAlt: z.string(),
    amazonUrl: z.string().optional(),
    destacado: z.boolean().default(false),
    orden: z.number().default(0),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const autores = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/autores' }),
  schema: z.object({
    nombre: z.string(),
    slug: z.string(),
    foto: z.string(),
    fotoAlt: z.string(),
    bioCorta: z.string(),
    bioLarga: z.string().optional(),
    profesion: z.string().optional(),
    ubicacion: z.string().optional(),
    email: z.string().optional(),
    website: z.string().optional(),
    orden: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    titulo: z.string(),
    slug: z.string(),
    fecha: z.date(),
    autor: z.string(),
    autorSlug: z.string().optional(),
    resumen: z.string(),
    imagen: z.string().optional(),
    imagenAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { libros, autores, posts };
