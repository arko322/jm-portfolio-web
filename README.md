# JM Portfolio Web

Portfolio profesional desarrollado con Astro, Tailwind CSS y TypeScript, enfocado en performance, SEO y experiencia de usuario.

Incluye proyectos reales, lightbox interactivo, efectos visuales con canvas, formulario de contacto directo y una arquitectura modular pensada para escalar fácilmente.

---

## 🚀 Stack

- Astro  
- Tailwind CSS  
- TypeScript  
- Vercel Analytics  
- Vercel Speed Insights  
- Canvas animations  
- Lightbox custom sin librerías externas  

---

## 📁 Estructura del proyecto

```text
/
├── public/
│   ├── favicon-dark.svg
│   └── favicon-light.svg
│
├── src/
│   ├── assets/          # Imágenes, iconos y recursos
│   ├── components/     # Componentes Astro
│   │   ├── effects/    # Constellation + ScrollParticles
│   │   └── portfolio/  # Cards, Lightbox, Tags
│   │
│   ├── data/
│   │   ├── projectsData.ts
│   │   └── toolkit.ts
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   ├── scripts/
│   │   └── lightbox.ts
│   │
│   └── styles/
│       └── global.css
│
└── package.json
```

---

## ✨ Funcionalidades

- Hero animado con nodos en canvas
- Partículas dinámicas al hacer scroll
- Portfolio con lightbox animado
- Navegación del lightbox con teclado
- Precarga automática de proyectos adyacentes
- Tags con scroll horizontal
- FAQ accordion
- Botón Back To Top con IntersectionObserver
- Formulario de contacto vía mailto
- Favicon automático según modo claro / oscuro
- Responsive completo
- Sin dependencias JS pesadas

---

## 📦 Instalación

Desde la raíz del proyecto:

npm install

---

## 🧞 Comandos

| Comando           | Descripción                        |
| :---------------- | :--------------------------------- |
| `npm run dev`     | Servidor local en `localhost:4321` |
| `npm run build`   | Build de producción                |
| `npm run preview` | Preview del build generado         |
| `npm run astro`   | Acceso al CLI de Astro             |

---

## 🧠 Gestión de datos

### Proyectos

Ubicados en:

src/data/projectsData.ts

Cada proyecto contiene:

- id
- imagen principal
- galería
- categoría
- descripción corta
- descripción larga
- tags
- liveUrl

Todos los proyectos alimentan automáticamente:

- Portfolio
- Lightbox
- Precarga de imágenes

No hay duplicación de lógica.

---

### Toolkit

Centralizado en:

src/data/toolkit.ts

Define:

- label
- icon
- tipado estricto

Consumido por:

- TagList
- Tag
- ProjectCard
- Lightbox

---

## 🎨 Estilos

Tailwind + overrides personalizados en:

src/styles/global.css

Incluye:

- Scrollbars custom
- Animación del indicador scroll
- Ocultado del scrollbar horizontal en tags
- Ajustes globales

---

## ⚡ Performance

- Lazy loading de imágenes
- Preload de proyectos siguiente/anterior
- Canvas optimizado
- Lightbox sin librerías externas
- Animaciones controladas manualmente
- Vercel Analytics
- Vercel Speed Insights

Todo está orientado a mantener cargas sub-segundo.

---

## 📬 Contacto

El formulario usa mailto directo:

jaelmeire@gmail.com

No requiere backend.

---

## 🧑‍💻 Autor

Jael Meire  
Web Designer & Developer  

Diseñado y construido desde cero.