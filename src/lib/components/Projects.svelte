<script>
    import { PROJECTS } from "$lib/data/projects.js";
    import { fadeInOnScroll } from "$lib/utils/fadeInOnScroll.js";

    let mouse = { x: 0, y: 0 };

    function handleMouse(e) {
        mouse = {
            x: (e.clientX / window.innerWidth - 0.5) * 8,
            y: (e.clientY / window.innerHeight - 0.5) * 8
        };
    }
</script>

<svelte:window on:mousemove={handleMouse} />

<svelte:head>
    {#each PROJECTS as p}
        <link rel="preload" as="image" href={p.img} />
        {#if p.video}
            <link rel="preload" as="video" href={p.video} />
        {/if}
    {/each}
</svelte:head>

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

        <!-- TODAS LAS TARJETAS -->
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-12">

                {#each PROJECTS as p}
                    <article
                        class="card group bg-[#141c2f] border border-white/10 rounded-xl overflow-hidden shadow-lg
                               transition-all duration-500 relative h-full flex flex-col"
                        style="
                            transform:
                                perspective(900px)
                                rotateX({mouse.y * 0.15}deg)
                                rotateY({mouse.x * 0.15}deg);
                        "
                    >
                        <!-- Glow -->
                        <div class="glow absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-500/10 
                                    opacity-0 group-hover:opacity-40 blur-xl transition duration-500 pointer-events-none">
                        </div>

                        <!-- IMAGEN -->
                        <div class="relative overflow-hidden aspect-[16/10]">
                            <img
                                src={p.img}
                                alt={p.title}
                                loading="lazy"
                                class="img absolute inset-0 w-full h-full object-cover 
                                       transition-all duration-500 group-hover:scale-110 group-hover:opacity-80"
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
                                           transition w-full text-sm hover:scale-[1.05]"
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
                                               transition w-full text-sm hover:scale-[1.05]"
                                    >
                                        Demo
                                    </a>
                                {/if}
                            </div>
                        </div>
                    </article>
                {/each}

            </div>
        </div>
    </div>
</section>

<style>
    /* Tarjeta flotando */
    .card:hover {
        transform: translateY(-10px) scale(1.03);
        box-shadow: 0 0 35px rgba(168, 85, 247, 0.5);
        border-color: rgba(168, 85, 247, 0.4);
    }

    /* Imagen zoom suave */
    .img {
        transform: scale(1);
    }
    .card:hover .img {
        transform: scale(1.12);
        opacity: 0.85;
    }

    /* Glow extra */
    .card:hover .glow {
        filter: blur(28px);
        opacity: 0.55;
    }
</style>
