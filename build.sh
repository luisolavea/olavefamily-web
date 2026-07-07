#!/bin/bash
# Script de build para Editorial Olave Family
# Lee contenido desde Obsidian Vault

set -e

echo "🚀 Build Editorial Olave Family"

# Limpiar contenido anterior
rm -rf src/content/*
rm -rf public/images/*

# Copiar contenido desde Vault
echo "📁 Copiando contenido desde Vault..."
cp -r /root/.openclaw/vault/40-Proyectos/Editorial-Olave-Family/content/* src/content/
cp -r /root/.openclaw/vault/40-Proyectos/Editorial-Olave-Family/public/images/* public/images/

# Verificar
echo "✅ Contenido copiado:"
find src/content -name "*.md" | wc -l
echo " archivos Markdown"
find public/images -type f | wc -l
echo " imágenes"

# Build Astro
echo "🔨 Generando build estático..."
npm run build

echo "✅ Build completo en dist/"