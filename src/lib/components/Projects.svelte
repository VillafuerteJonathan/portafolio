<script>
    import { PROJECTS } from "$lib/data/projects.js";
    import { fadeInOnScroll } from "$lib/utils/fadeInOnScroll.js";
    import { onMount } from "svelte";

    let mouse = { x: 0, y: 0 };
    let currentIndex = 0;
    let itemsPerPage = 3;

    // Detectar breakpoints dinámicos
    function updateItemsPerPage() {
        const w = window.innerWidth;

        if (w < 640) {
            itemsPerPage = 1;
        } else if (w < 1024) {
            itemsPerPage = 2;
        } else {
            itemsPerPage = 3;
        }
    }

    onMount(() => {
        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    });

    $: totalPages = Math.ceil(PROJECTS.length / itemsPerPage);
    $: currentProjects = PROJECTS.slice(currentIndex, currentIndex + itemsPerPage);

    function handleMouse(e) {
        mouse = {
            x: (e.clientX / window.innerWidth - 0.5) * 8,
            y: (e.clientY / window.innerHeight - 0.5) * 8
        };
    }

    function nextSlide() {
        currentIndex = (currentIndex + itemsPerPage) % PROJECTS.length;
    }

    function prevSlide() {
        currentIndex =
            (currentIndex - itemsPerPage + PROJECTS.length) % PROJECTS.length;
    }

    function goToSlide(i) {
        currentIndex = i * itemsPerPage;
    }
</script>

<svelte:window on:mousemove={handleMouse} />

<section
    id="proyectos"
    aria-label="Sección de proyectos"
    class="pt-16 pb-16 px-4 sm:px-6 md:px-16 text-white relative overflow-hidden"
>
    <div use:fadeInOnScroll>

        <!-- TITULO -->
        <div class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-extrabold mb-3">
                <span class="text-white">Mis</span>
                <span class="text-purple-400"> Proyectos</span>
            </h1>
            <p class="text-gray-300 max-w-2xl mx-auto text-lg">
                Una selección de trabajos que muestran mis habilidades técnicas.
            </p>
        </div>

        <!-- GRID DE PROYECTOS -->
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {#each currentProjects as p}
                    <article
                        aria-label={`Proyecto: ${p.title}`}
                        class="group bg-[#141c2f] border border-white/10 rounded-xl overflow-hidden shadow-lg
                               transition-all duration-500 relative h-full flex flex-col"
                        style="transform: perspective(900px)
                               rotateX({mouse.y * 0.3}deg)
                               rotateY({mouse.x * 0.3}deg);"
                    >
                        <!-- Glow hover -->
                        <div class="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-500/10 
                                    opacity-0 group-hover:opacity-40 blur-xl transition pointer-events-none">
                        </div>

                        <!-- IMAGEN -->
                        <div class="relative overflow-hidden aspect-[16/10]">
                            <img
                                src={p.img}
                                alt={p.title}
                                loading="lazy"
                                class="absolute inset-0 w-full h-full object-cover 
                                       transition-opacity duration-500 group-hover:opacity-0"
                            />

                            {#if p.video}
                                <video
                                    src={p.video}
                                    autoplay
                                    muted
                                    loop
                                    preload="none"
                                    playsinline
                                    class="absolute inset-0 w-full h-full object-cover 
                                           opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                ></video>
                            {/if}
                        </div>

                        <!-- CONTENIDO -->
                        <div class="p-6 flex flex-col flex-1">
                            <h3 class="text-xl font-bold mb-2 text-purple-300 group-hover:text-purple-400 transition">
                                {p.title}
                            </h3>

                            <p class="text-gray-400 text-sm mb-4 flex-1 leading-relaxed">
                                {p.desc}
                            </p>

                            <!-- Tecnologías -->
                            <div class="flex flex-wrap gap-2 mb-6">
                                {#each p.tech as t}
                                    <span class="px-3 py-1 rounded-lg bg-[#1e2a3f] text-xs border border-white/10">
                                        {t}
                                    </span>
                                {/each}
                            </div>

                            <!-- Botones -->
                            <div class="flex gap-3 mt-auto">
                                <a
                                    href={p.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="flex items-center justify-center gap-2 px-4 py-2 rounded-lg
                                           bg-black/40 hover:bg-black/60 border border-white/10
                                           transition w-full text-sm hover:scale-[1.03]"
                                >
                                    <img src="/assets/icons/github.svg" class="w-5 opacity-80" />
                                    Código
                                </a>

                                {#if p.demo}
                                    <a
                                        href={p.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="flex items-center justify-center gap-2 px-4 py-2 rounded-lg
                                               bg-purple-600/80 hover:bg-purple-600 border border-purple-400/30
                                               transition w-full text-sm hover:scale-[1.03]"
                                    >
                                        Demo
                                    </a>
                                {/if}
                            </div>
                        </div>
                    </article>
                {/each}

            </div>

            <!-- CONTROLES -->
            <div class="flex justify-center items-center gap-6 mt-12">

                <button
                    on:click={prevSlide}
                    class="p-3 rounded-full bg-[#1e2a3f] hover:bg-purple-900/30 border border-white/10 
                           transition hover:scale-110 active:scale-95"
                >
                    <svg width="26" height="26" stroke="currentColor" fill="none">
                        <path d="M15 19l-7-7 7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>

                <!-- Indicadores -->
                <div class="flex gap-3">
                    {#each Array(totalPages) as _, i}
                        <button
                            on:click={() => goToSlide(i)}
                            class={`w-3 h-3 rounded-full transition-all duration-300 ${
                                Math.floor(currentIndex / itemsPerPage) === i
                                    ? 'bg-purple-500 scale-125 shadow-purple-500 shadow'
                                    : 'bg-white/30 hover:bg-white/50'
                            }`}
                        >
                        </button>
                    {/each}
                </div>

                <button
                    on:click={nextSlide}
                    class="p-3 rounded-full bg-[#1e2a3f] hover:bg-purple-900/30 border border-white/10 
                           transition hover:scale-110 active:scale-95"
                >
                    <svg width="26" height="26" stroke="currentColor" fill="none">
                        <path d="M9 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>

            </div>

        </div>
    </div>
</section>

<style>
    @keyframes float { 0% { transform: translateY(0);} 50% { transform: translateY(-8px);} 100% { transform: translateY(0);}}
</style>
