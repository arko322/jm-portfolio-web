document.addEventListener('DOMContentLoaded', () => { // Inicializa el lightbox al cargar el DOM
    const lightboxEl = document.getElementById('project-lightbox'); // Contenedor principal del lightbox
    if (!(lightboxEl instanceof HTMLElement)) return; // Salida segura si no existe

    const lightbox = lightboxEl; // Alias del overlay para uso interno
    const content = lightbox.querySelector('[data-lightbox-content]') as HTMLElement; // Panel central con escala y transición
    const gallery = lightbox.querySelector('[data-lightbox-gallery]') as HTMLElement; // Columna de galería de imágenes
    const info = lightbox.querySelector('[data-lightbox-info]') as HTMLElement; // Columna de texto y botones
    const closeBtn = lightbox.querySelector('[data-close-lightbox]') as HTMLElement; // Botón de cerrar

    const prevBtn = lightbox.querySelector('[data-lightbox-prev]'); // Botón proyecto anterior
    const nextBtn = lightbox.querySelector('[data-lightbox-next]'); // Botón proyecto siguiente

    const projects = (window as any).__PROJECTS__; // Dataset inyectado desde Astro con los proyectos
    if (!Array.isArray(projects)) return; // Validación del formato esperado

    let currentIndex = -1; // Índice actual abierto en el lightbox

    // Preload helpers

    const preloaded = new Set<string>(); // Cache simple para no pre-cargar la misma imagen dos veces

    function preloadImages(sources: string[]) { // Precarga un listado de URLs de imágenes
        sources.forEach(src => {
        if (preloaded.has(src)) return; // Evita repetir requests
        preloaded.add(src); // Marca la imagen como precargada

        const img = new Image(); // Crea un objeto imagen sin insertarlo al DOM
        img.src = src; // Dispara la descarga en background
        });
    }

    function preloadAdjacentProjects(index: number) { // Precarga galería del proyecto previo y siguiente
        const prev = projects[index - 1]; // Proyecto anterior
        const next = projects[index + 1]; // Proyecto siguiente

        if (prev?.gallery?.length) { // Precarga si existe galería previa
        preloadImages(prev.gallery);
        }

        if (next?.gallery?.length) { // Precarga si existe galería siguiente
        preloadImages(next.gallery);
        }
    }

    // Core logic

    function animateContent( // Maneja la animación al cambiar entre proyectos
    direction: 'next' | 'prev', // Dirección de navegación para calcular el offset
    onMidpoint: () => void // Callback que actualiza el contenido en el punto medio
    ) {
        const offset = direction === 'next' ? -20 : 20; // Offset horizontal para salida y entrada

        // salida
        gallery.style.transition = 'opacity 200ms ease, transform 200ms ease'; // Transición de la galería
        info.style.transition = 'opacity 200ms ease, transform 200ms ease'; // Transición del panel info

        gallery.style.opacity = '0'; // Fade out galería
        info.style.opacity = '0'; // Fade out info

        gallery.style.transform = `translateX(${offset}px)`; // Desplaza galería hacia la dirección
        info.style.transform = `translateX(${offset}px)`; // Desplaza info hacia la dirección

        setTimeout(() => { // Espera el fin de la salida antes de cambiar contenido
            onMidpoint(); // Actualiza HTML con el nuevo proyecto

            // entrada
            gallery.style.transition = 'none'; // Reset sin animar para preparar el lado opuesto
            info.style.transition = 'none'; // Reset sin animar para preparar el lado opuesto

            gallery.style.transform = `translateX(${-offset}px)`; // Posición inicial de entrada
            info.style.transform = `translateX(${-offset}px)`; // Posición inicial de entrada

            requestAnimationFrame(() => { // Aplica entrada en el siguiente frame para evitar salto
            gallery.style.transition = 'opacity 200ms ease, transform 200ms ease'; // Reactiva transición
            info.style.transition = 'opacity 200ms ease, transform 200ms ease'; // Reactiva transición

            gallery.style.opacity = '1'; // Fade in galería
            info.style.opacity = '1'; // Fade in info

            gallery.style.transform = 'translateX(0)'; // Vuelve al centro
            info.style.transform = 'translateX(0)'; // Vuelve al centro
            });
        }, 200); // Debe coincidir con la duración de salida
    }

    function openLightboxByIndex(index: number, direction?: 'next' | 'prev') { // Abre o actualiza el lightbox por índice
    const project = projects[index]; // Proyecto a renderizar
    if (!project) return; // Validación del índice

    const updateContent = () => { // Render del contenido del proyecto actual
        currentIndex = index; // Marca el proyecto como activo

        gallery.scrollTop = 0; // Reinicia scroll de la galería
        info.scrollTop = 0; // Reinicia scroll del panel info

        gallery.innerHTML = project.gallery // Render de imágenes de la galería
        .map(
            (src: string) =>
            `<img src="${src}" class="w-full rounded-xl border border-white/5" />` // Imagen con estilo y borde
        )
        .join('');

        info.innerHTML = ` // Render del bloque informativo del proyecto
        <p class="text-xs tracking-widest text-gray-500 uppercase mb-4">
            ${project.category} <!-- Categoría del proyecto -->
        </p>

        <h3 class="text-2xl font-bold mb-4">${project.title}</h3> <!-- Título -->

        ${
            project.longDescription
            ? `<p class="text-gray-400 mb-6 leading-relaxed">${project.longDescription}</p>` // Descripción larga opcional
            : ''
        }

        ${
            project.tags?.length
            ? `<ul class="flex flex-wrap gap-3 mb-8 text-sm">
                ${project.tags
                    .map(
                    (tag: any) => `
                    <li class="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition hover:scale-[1.03] px-4 py-2">
                        <img src="${tag.icon}" class="w-4 h-4 opacity-80" /> <!-- Icono del tag -->
                        ${tag.label} <!-- Label del tag -->
                    </li>`
                    )
                    .join('')}
                </ul>` // Tags opcionales del proyecto
            : ''
        }

        ${
            project.liveUrl
                ? `
                <a
                    href="${project.liveUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="
                    inline-flex items-center gap-2
                    px-5 py-2.5
                    rounded-full
                    bg-white/10 border border-white/15
                    text-sm text-gray-300
                    hover:bg-white/20 hover:text-white
                    transition
                    "
                >
                    View live <!-- Link al sitio en vivo -->
                    <span class="text-xs opacity-70">↗</span> <!-- Indicador externo -->
                </a>
                `
                : ''
        }
        `;

        preloadAdjacentProjects(index); // Precarga imágenes de proyectos vecinos
    };

    // primera apertura
    if (currentIndex === -1 || !direction) { // Primera apertura sin animación de cambio
        updateContent(); // Render inmediato
        lightbox.classList.remove('opacity-0', 'pointer-events-none'); // Muestra el overlay
        content.classList.remove('scale-95', 'opacity-0'); // Activa el panel central
        return;
    }

    animateContent(direction, updateContent); // Cambio entre proyectos con animación
    }

    function closeLightbox() { // Cierra el lightbox
        lightbox.classList.add('opacity-0', 'pointer-events-none'); // Oculta overlay y bloquea clicks
        content.classList.add('scale-95', 'opacity-0'); // Anima el panel hacia fuera
    }

    function showNext() { // Navega al siguiente proyecto
    const next = (currentIndex + 1) % projects.length; // Loop al inicio al llegar al final
    openLightboxByIndex(next, 'next'); // Abre el siguiente con animación
    }

    function showPrev() { // Navega al proyecto anterior
    const prev = (currentIndex - 1 + projects.length) % projects.length; // Loop al final al ir antes del inicio
    openLightboxByIndex(prev, 'prev'); // Abre el anterior con animación
    }

    // Events

    document.addEventListener('click', e => { // Delegación para abrir proyectos desde cards o botones
        const target = e.target as HTMLElement; // Target del click
        const trigger = target.closest('[data-open-project]'); // Elemento que declara el id del proyecto
        if (!trigger) return; // Si no hay trigger, no hacemos nada

        const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches; // Detecta desktop con hover real
        const isButton = trigger.tagName === 'BUTTON'; // Identifica si el trigger es el botón "View Project"

        // Si hay hover real, solo el botón abre
        if (hasHover && !isButton) return; // Evita abrir al clickear la card completa en desktop

        const id = trigger.getAttribute('data-open-project'); // Lee el id del proyecto
        const index = projects.findIndex((p: any) => p.id === id); // Busca el índice por id

        if (index !== -1) { // Valida índice encontrado
            openLightboxByIndex(index); // Abre el lightbox con ese proyecto
        }
    });

    closeBtn.addEventListener('click', closeLightbox); // Cierra al clickear el botón X

    lightbox.addEventListener('click', e => { // Cierra al clickear fuera del panel
        if (e.target === lightbox) closeLightbox(); // Solo si se clickea el overlay
    });

    nextBtn?.addEventListener('click', e => { // Click en siguiente
        e.stopPropagation(); // Evita que el click burbujee al overlay
        showNext(); // Navega al siguiente
    });

    prevBtn?.addEventListener('click', e => { // Click en anterior
        e.stopPropagation(); // Evita que el click burbujee al overlay
        showPrev(); // Navega al anterior
    });

    document.addEventListener('keydown', e => { // Controles por teclado cuando el lightbox está abierto
        if (lightbox.classList.contains('opacity-0')) return; // Si está cerrado, ignorar teclas

        if (e.key === 'Escape') closeLightbox(); // Escape cierra
        if (e.key === 'ArrowRight') showNext(); // Flecha derecha avanza
        if (e.key === 'ArrowLeft') showPrev(); // Flecha izquierda retrocede
    });
});

// Tag list horizontal scroll
document.addEventListener('DOMContentLoaded', () => { // Activa scroll horizontal con rueda en las listas de tags
  const tagLists = document.querySelectorAll<HTMLElement>('.project-card-tags'); // Contenedores con overflow horizontal

  tagLists.forEach(list => { // Aplica a cada lista encontrada
    list.addEventListener(
      'wheel',
      e => {
        // Si no hay overflow horizontal, no hacemos nada
        if (list.scrollWidth <= list.clientWidth) return; // Evita bloquear el scroll normal

        e.preventDefault(); // Bloquea el scroll vertical del documento

        // Convierte scroll vertical en horizontal
        list.scrollLeft += e.deltaY; // Mueve la lista horizontalmente
      },
      { passive: false } // Requerido para poder usar preventDefault
    );
  });
});