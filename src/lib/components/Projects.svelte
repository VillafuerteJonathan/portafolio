<script>
    import { PROJECTS } from "$lib/data/projects.js";
    import { fadeInOnScroll } from "$lib/utils/fadeInOnScroll.js";
    import { onMount } from "svelte";

    let mouse = { x: 0, y: 0 };
    let currentIndex = 0;
    let itemsPerPage = 3; // Variable para cambiar según el breakpoint

    // Detectar breakpoints para items por página
    let screenSize = 'desktop';
    
    onMount(() => {
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        
        return () => {
            window.removeEventListener('resize', updateItemsPerPage);
        };
    });

    function updateItemsPerPage() {
        const width = window.innerWidth;
        if (width < 640) {
            itemsPerPage = 1;
            screenSize = 'mobile';
        } else if (width < 1024) {
            itemsPerPage = 2;
            screenSize = 'tablet';
        } else {
            itemsPerPage = 3;
            screenSize = 'desktop';
        }
    }

    $: totalPages = Math.ceil(PROJECTS.length / itemsPerPage);
    $: currentProjects = PROJECTS.slice(currentIndex, currentIndex + itemsPerPage);

    function handleMove(e) {
        mouse = {
            x: (e.clientX / window.innerWidth - 0.5) * 10,
            y: (e.clientY / window.innerHeight - 0.5) * 10
        };
    }

    function nextSlide() {
        if (currentIndex + itemsPerPage >= PROJECTS.length) {
            currentIndex = 0;
        } else {
            currentIndex += itemsPerPage;
        }
    }

    function prevSlide() {
        if (currentIndex - itemsPerPage < 0) {
            currentIndex = Math.floor((PROJECTS.length - 1) / itemsPerPage) * itemsPerPage;
        } else {
            currentIndex -= itemsPerPage;
        }
    }

    function goToSlide(index) {
        currentIndex = index * itemsPerPage;
    }
</script>

<svelte:window on:mousemove={handleMove} />

<section 
    id="proyectos"
    aria-label="Sección de proyectos"
    class="pt-16 md:pt-18 pb-12 md:pb-16 px-4 sm:px-6 md:px-16 text-white relative overflow-hidden"
>
    <div use:fadeInOnScroll class="my-section">

        <!-- TITULO MEJORADO -->
        <div class="text-center mb-12 md:mb-20 px-4">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
                <span class="text-white">Mis</span>
                <span class="text-purple-400">Proyectos</span>
            </h1>

            <p class="text-gray-300 text-sm sm:text-base md:text-lg mt-2 max-w-2xl mx-auto leading-relaxed">
                Una selección de proyectos que demuestran mis habilidades y experiencia
            </p>
        </div>

        <!-- CARRUSEL MEJORADO -->
        <div class="relative max-w-7xl mx-auto px-2 sm:px-4">

            <!-- CONTENEDOR DE PROYECTOS -->
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 md:mb-12">
                {#each currentProjects as p}
                    <article
                        aria-label={`Proyecto: ${p.title}`}
                        class="group bg-[#141c2f] border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden 
                               shadow-lg hover:shadow-purple-900/30 transition-all duration-500 relative
                               h-full flex flex-col"
                        style="transform: perspective(900px) rotateX({screenSize === 'desktop' ? mouse.y * 0.6 : 0}deg) 
                               rotateY({screenSize === 'desktop' ? mouse.x * 0.6 : 0}deg);"
                    >
                        <!-- Glow -->
                        <div 
                            role="presentation"
                            class="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-purple-600/20 to-blue-500/20 
                                   opacity-0 group-hover:opacity-40 blur-xl sm:blur-2xl transition pointer-events-none"
                        ></div>

                        <!-- MEDIA RESPONSIVE -->
                        <div class="relative overflow-hidden rounded-t-xl sm:rounded-t-2xl aspect-[4/3] sm:aspect-[16/9]">
                            <img
                                src={p.img}
                                alt={p.title}
                                class="absolute inset-0 w-full h-full object-cover object-center
                                       transition-opacity duration-500 group-hover:opacity-0"
                                loading="lazy"
                            />

                            {#if p.video}
                                <video
                                    src={p.video}
                                    autoplay
                                    muted
                                    loop
                                    playsinline
                                    aria-label={"Video demostración de " + p.title}
                                    class="absolute inset-0 w-full h-full object-cover object-center
                                           opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                ></video>
                            {/if}
                        </div>

                        <!-- CONTENIDO RESPONSIVE -->
                        <div class="p-4 sm:p-5 md:p-7 relative z-10 flex-1 flex flex-col">
                            <h3 class="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-purple-300 group-hover:text-purple-400 transition-colors">
                                {p.title}
                            </h3>

                            <p class="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1">
                                {p.desc}
                            </p>

                            <!-- TECNOLOGÍAS MEJORADAS -->
                            <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                                {#each p.tech as t}
                                    <span class="px-2 sm:px-3 py-1 rounded-md sm:rounded-lg bg-[#1e2a3f] text-xs border border-white/10 whitespace-nowrap">
                                        {t}
                                    </span>
                                {/each}
                            </div>

                            <!-- BOTÓN RESPONSIVE -->
                            <div class="flex gap-3 sm:gap-4 mt-auto">
                                <a
                                    href={p.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="flex items-center justify-center gap-2 px-3 sm:px-4 md:px-5 py-2 rounded-lg sm:rounded-xl
                                           bg-black/40 hover:bg-black/60 border border-white/10
                                           transition-all duration-300 w-full text-sm sm:text-base
                                           hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <img 
                                        src="/assets/icons/github.svg" 
                                        alt="Repositorio GitHub" 
                                        class="w-4 h-4 sm:w-5 sm:h-5 opacity-80 group-hover:opacity-100" 
                                    />
                                    <span class="whitespace-nowrap">Código</span>
                                </a>
                                
                                {#if p.demo}
                                <a
                                    href={p.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="flex items-center justify-center gap-2 px-3 sm:px-4 md:px-5 py-2 rounded-lg sm:rounded-xl
                                           bg-purple-600/80 hover:bg-purple-600 border border-purple-400/30
                                           transition-all duration-300 w-full text-sm sm:text-base
                                           hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                    </svg>
                                    <span class="whitespace-nowrap">Demo</span>
                                </a>
                                {/if}
                            </div>
                        </div>
                    </article>
                {/each}
            </div>

            <!-- CONTROLES MEJORADOS -->
            <div class="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 px-4">

                <!-- Botón Anterior -->
                <button 
                    on:click={prevSlide}
                    class="p-2 sm:p-3 rounded-full bg-[#1e2a3f] hover:bg-purple-900/30 border border-white/10 
                           transition-all duration-300 hover:scale-110 active:scale-95
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    aria-label="Proyectos anteriores"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <!-- Indicadores MEJORADOS -->
                <div class="flex gap-2 sm:gap-3 flex-wrap justify-center">
                    {#each Array(totalPages) as _, i}
                        <button 
                            on:click={() => goToSlide(i)}
                            class={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                                Math.floor(currentIndex / itemsPerPage) === i 
                                    ? 'bg-purple-500 scale-125 shadow-lg shadow-purple-500/50' 
                                    : 'bg-white/30 hover:bg-white/50'
                            }`}
                            aria-label={`Ir a página ${i + 1} de proyectos`}
                            aria-current="{Math.floor(currentIndex / itemsPerPage) === i ? 'true' : 'false'}"
                        ></button>
                    {/each}
                </div>

                <!-- Botón Siguiente -->
                <button 
                    on:click={nextSlide}
                    class="p-2 sm:p-3 rounded-full bg-[#1e2a3f] hover:bg-purple-900/30 border border-white/10 
                           transition-all duration-300 hover:scale-110 active:scale-95
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    aria-label="Próximos proyectos"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

            </div>

            <!-- CONTADOR DE PROYECTOS (OPCIONAL) -->
            <div class="text-center mt-4 sm:mt-6">
                <p class="text-gray-400 text-xs sm:text-sm">
                    Proyecto {Math.floor(currentIndex / itemsPerPage) + 1} de {totalPages} 
                    <span class="mx-2">•</span>
                    Total: {PROJECTS.length} proyectos
                </p>
            </div>
        </div>
    </div>
</section>

<style>
    /* Mejoras de rendimiento para móviles */
    @media (max-width: 640px) {
        .my-section {
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
            perspective: 1000;
        }
    }
    
    /* Smooth scrolling para navegación táctil */
    html {
        scroll-behavior: smooth;
    }
</style>