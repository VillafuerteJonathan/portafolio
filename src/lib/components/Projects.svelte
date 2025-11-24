<script>
    import { PROJECTS } from "$lib/data/projects.js";

    let mouse = { x: 0, y: 0 };

    function handleMove(e) {
        mouse = {
            x: (e.clientX / window.innerWidth - 0.5) * 10,
            y: (e.clientY / window.innerHeight - 0.5) * 10
        };
    }
</script>

<svelte:window on:mousemove={handleMove} />

<section id="proyectos" class="pt-32 pb-28 px-6 md:px-16 text-white relative">

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

    <!-- =================== GRID =================== -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {#each PROJECTS as p}
            <div
                class="group bg-[#141c2f] border border-white/10 rounded-2xl overflow-hidden 
                       shadow-xl hover:shadow-purple-900/40 transition-all duration-500 relative"
                style={`transform: perspective(900px) rotateX(${mouse.y * 0.6}deg) rotateY(${mouse.x * 0.6}deg);`}
            >

                <!-- Glow -->
                <div class="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-blue-500/30 
                            opacity-0 group-hover:opacity-40 blur-2xl transition pointer-events-none" />

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
</section>

