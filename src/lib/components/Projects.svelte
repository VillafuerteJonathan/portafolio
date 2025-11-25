<script>
    import { PROJECTS } from "$lib/data/projects.js";
     import { fadeInOnScroll } from "$lib/utils/fadeInOnScroll.js";

    let mouse = { x: 0, y: 0 };
    let currentIndex = 0;
    
    // Calcular cuántos grupos de 3 proyectos tenemos
    const itemsPerPage = 3;
    const totalPages = Math.ceil(PROJECTS.length / itemsPerPage);
    
    // Partículas de fondo
    let particles = [];
    let particlesInterval;

    
    // Obtener los proyectos actuales para mostrar
    $: currentProjects = PROJECTS.slice(currentIndex, currentIndex + itemsPerPage);
    
    function handleMove(e) {
        mouse = {
            x: (e.clientX / window.innerWidth - 0.5) * 10,
            y: (e.clientY / window.innerHeight - 0.5) * 10
        };
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + itemsPerPage) % PROJECTS.length;
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - itemsPerPage + PROJECTS.length) % PROJECTS.length;
    }
    
    function goToSlide(index) {
        currentIndex = index * itemsPerPage;
    }
</script>

<svelte:window on:mousemove={handleMove} />

<section id="proyectos" class="pt-4 pb-28 px-6 md:px-16 text-white relative">
    <div use:fadeInOnScroll class="my-section">
       <!-- ================= PARTICULAS ================= -->
    <div class="absolute inset-0 pointer-events-none">
        {#each particles as p}
            <div
                class="absolute rounded-full bg-purple-400"
                style="
                    left: {p.x}%;
                    top: {p.y}%;
                    width: {p.size}px;
                    height: {p.size}px;
                    opacity: {p.opacity};
                "
            />
        {/each}
    </div>

    <!-- =================== TÍTULO =================== -->
    <div class="text-center mb-20">
        <h1 class="text-5xl font-extrabold">
            <span class="text-white">Mis</span>
            <span class="text-purple-400">Proyectos</span>
        </h1>

        <p class="text-gray-300 text-lg mt-3 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y experiencia
        </p>
    </div>

    <!-- =================== CARRUSEL =================== -->
    <div class="relative max-w-7xl mx-auto">
        
        <!-- Contenedor del carrusel -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
            {#each currentProjects as p}
                <div
                    class="group bg-[#141c2f] border border-white/10 rounded-2xl overflow-hidden 
                           shadow-xl hover:shadow-purple-900/40 transition-all duration-500 relative"
                    style={`transform: perspective(900px) rotateX(${mouse.y * 0.6}deg) rotateY(${mouse.x * 0.6}deg);`}
                >

                    <!-- Glow -->
                    <div class="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-blue-500/30 
            opacity-0 group-hover:opacity-40 blur-2xl transition pointer-events-none"></div>


                    <!-- =================== MEDIA (Imagen + Video en Hover) =================== -->
                    <div class="relative overflow-hidden rounded-t-2xl aspect-[16/9]">

                        <!-- Imagen -->
                        <img
                            src={p.img}
                            alt={p.title}
                            class="absolute inset-0 w-full h-full object-cover object-center
                                   transition-opacity duration-500 group-hover:opacity-0"
                        />

                        <!-- Video en hover -->
                        {#if p.video}
                            <video
                                src={p.video}
                                autoplay
                                muted
                                loop
                                playsinline
                                class="absolute inset-0 w-full h-full object-cover object-center
                                       opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                            ></video>
                        {/if}
                    </div>

                    <!-- =================== CONTENIDO =================== -->
                    <div class="p-7 relative z-10">
                        <h3 class="text-2xl font-bold mb-2 text-purple-300 group-hover:text-purple-400 transition">
                            {p.title}
                        </h3>

                        <p class="text-gray-400 text-sm leading-relaxed mb-4">
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

                        <!-- Botón GitHub -->
                        <div class="flex gap-4">
                            <a
                                href={p.code}
                                target="_blank"
                                class="flex items-center justify-center gap-2 px-5 py-2 rounded-xl
                                       bg-black/40 hover:bg-black/60 border border-white/10
                                       transition w-full"
                            >
                                <img src="/assets/icons/github.svg" alt="GitHub" class="w-5 h-5 opacity-80 group-hover:opacity-100" />
                                <span>Código</span>
                            </a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <!-- =================== CONTROLES =================== -->
        <div class="flex justify-center items-center gap-8">
            
            <!-- Botón Anterior -->
            <button 
                on:click={prevSlide}
                class="p-3 rounded-full bg-[#1e2a3f] hover:bg-purple-900/30 border border-white/10 
                       transition-all duration-300 hover:scale-110"
                aria-label="Proyectos anteriores"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <!-- Indicadores -->
            <div class="flex gap-3">
                {#each Array(totalPages) as _, i}
                    <button 
                        on:click={() => goToSlide(i)}
                        class={`w-3 h-3 rounded-full transition-all duration-300 ${
                            Math.floor(currentIndex / itemsPerPage) === i 
                                ? 'bg-purple-500 scale-125' 
                                : 'bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`Ir a página ${i + 1}`}
                    ></button>
                {/each}
            </div>

            <!-- Botón Siguiente -->
            <button 
                on:click={nextSlide}
                class="p-3 rounded-full bg-[#1e2a3f] hover:bg-purple-900/30 border border-white/10 
                       transition-all duration-300 hover:scale-110"
                aria-label="Próximos proyectos"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
    </div>
</section>