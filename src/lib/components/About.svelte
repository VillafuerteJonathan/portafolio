<script>
    import TechModal from "$lib/components/TechModal.svelte";
    import { TECH } from "$lib/data/tech.js";
    import { onMount, onDestroy } from "svelte";
    import { slideFrom } from "$lib/utils/slideFrom.js";

    import {
        UserRound,
        Code2,
        Cpu,
        Sparkles,
        HeartHandshake
    } from "lucide-svelte";

    let modalOpen = false;
    let selectedCategory = null;

    let mousePosition = { x: 0, y: 0 };
    let titleRef;

    let particles = [];
    let particlesInterval;

    onMount(() => {
        // Parallax seguro en SSR
        window.addEventListener("mousemove", handleMouseMove);

        initParticles();
        animateTitle();
        particlesInterval = setInterval(updateParticles, 90);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    });

    onDestroy(() => {
        clearInterval(particlesInterval);
    });

    function initParticles() {
        particles = Array.from({ length: 90 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 1,
            speedX: (Math.random() - 0.5) * 0.4,
            speedY: (Math.random() - 0.5) * 0.4,
            opacity: Math.random() * 0.3 + 0.1
        }));
    }

    function updateParticles() {
        particles = particles.map(p => ({
            ...p,
            x: (p.x + p.speedX + 100) % 100,
            y: (p.y + p.speedY + 100) % 100
        }));
    }

    function animateTitle() {
        if (!titleRef) return;
        const letters = titleRef.querySelectorAll(".letter");
        letters.forEach((l, i) => {
            l.style.animationDelay = `${i * 0.09}s`;
        });
    }

    function openModal(key) {
        selectedCategory = key;
        modalOpen = true;
    }

    function closeModal() {
        modalOpen = false;
    }

    function handleMouseMove(e) {
        mousePosition = {
            x: (e.clientX / window.innerWidth - 0.5) * 15,
            y: (e.clientY / window.innerHeight - 0.5) * 15
        };
    }

    const skillCategories = [
        { key: "frontend", name: "Frontend", icon: Code2, accent: "text-pink-400" },
        { key: "backend", name: "Backend", icon: Cpu, accent: "text-green-400" },
        { key: "database", name: "Bases de Datos", icon: Cpu, accent: "text-yellow-400" },
        { key: "devops", name: "DevOps", icon: Sparkles, accent: "text-blue-400" },
        { key: "tools", name: "Software & Analítica", icon: Sparkles, accent: "text-purple-400" }
    ];
</script>

<section
    id="sobre-mi"
    class="pt-28 pb-24 px-6 md:px-20 text-white relative overflow-hidden"
    aria-label="Sección Sobre Mí"
>
    <!-- Background Glow -->
    <div class="pointer-events-none absolute inset-0 opacity-40">
        <div class="absolute -top-40 left-10 w-72 h-72 bg-purple-700/30 blur-[90px] rounded-full"></div>
        <div class="absolute bottom-0 right-10 w-80 h-80 bg-blue-500/25 blur-[95px] rounded-full"></div>
    </div>

    <!-- Partículas -->
    <div class="absolute inset-0 pointer-events-none z-0">
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
            ></div>
        {/each}
    </div>

    <!-- TÍTULO -->
    <div class="text-center mb-16 relative z-10">
        <h1 bind:this={titleRef} class="text-5xl font-extrabold mb-5 text-white">
            {#each "Acerca de Mí".split("") as letter}
                <span class="letter inline-block animate-typing">
                    {letter === " " ? "\u00A0" : letter}
                </span>
            {/each}
        </h1>

        <p class="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in-up">
            Te cuento quién soy, cómo trabajo y qué tecnologías domino como desarrollador Full Stack.
        </p>
    </div>

    <!-- GRID -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">

        <!-- SOBRE MÍ -->
        <article
            use:slideFrom={{ direction: "left", distance: 140, duration: 800 }}
            class="relative bg-[#0b1220]/90 rounded-2xl p-8 border border-white/10 shadow-xl
                   group transition-all duration-500 hover:-translate-y-3 hover:shadow-purple-900/40"
            style={`transform: translateX(${mousePosition.x * 0.15}px) translateY(${mousePosition.y * 0.15}px);`}
        >
            <div class="absolute inset-0 opacity-0 group-hover:opacity-40 bg-gradient-to-r from-purple-600/30 to-blue-600/20 blur-2xl transition"></div>

            <div class="relative z-10">
                <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
                    <UserRound size={38} class="text-purple-400" />
                    Sobre Mí
                </h2>

                <p class="text-gray-300 leading-relaxed mb-4">
                    Soy <span class="text-purple-400 font-semibold">Jonathan Villafuerte</span>,
                    un <b>Ingeniero de Software Full Stack</b> apasionado por construir soluciones modernas que realmente funcionan.
                </p>

                <ul class="mt-2 text-gray-300 space-y-2 leading-relaxed">
                    <li class="flex items-start gap-3">
                        <HeartHandshake class="text-purple-300" size={18}/> Trabajo en equipo con buena vibra
                    </li>
                    <li class="flex items-start gap-3">
                        <Code2 class="text-purple-300" size={18}/> Soluciono problemas incluso cuando se complica
                    </li>
                    <li class="flex items-start gap-3">
                        <Cpu class="text-purple-300" size={18}/> Desarrollo sistemas rápidos y robustos
                    </li>
                    <li class="flex items-start gap-3">
                        <Sparkles class="text-purple-300" size={18}/> Me encantan los retos tecnológicos
                    </li>
                </ul>

                <!-- PASATIEMPOS -->
                <div class="mt-8">
                    <h3 class="text-xl font-semibold mb-3 flex items-center gap-2">
                        <Sparkles size={20} class="text-yellow-300" />
                        Pasatiempos
                    </h3>

                    <ul class="space-y-3 text-gray-300">
                        <li class="flex items-center gap-3">
                            <span class="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/30">⚽</span>
                            Fútbol — Me encantan los partidos y más si son con amigos.
                        </li>

                        <li class="flex items-center gap-3">
                            <span class="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/30">🎮</span>
                            Videojuegos — Me apasionan los juegos de terror y aventura.
                        </li>

                        <li class="flex items-center gap-3">
                            <span class="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/30">🎬</span>
                            Cine — Si la historia me atrapa, la termino sí o sí.
                        </li>
                    </ul>
                </div>

                <!-- Botón contacto -->
                <a
                    href="#contacto"
                    aria-label="Ir a la sección de contacto"
                    class="mt-8 inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 
                           px-6 py-3 rounded-xl font-semibold shadow-lg transition relative overflow-hidden"
                >
                    <span class="relative z-10">📩 Contáctame</span>
                </a>
            </div>
        </article>

        <!-- HABILIDADES -->
        <article
            use:slideFrom={{ direction: "right", distance: 140, duration: 800 }}
            class="relative bg-[#0b1220]/90 rounded-2xl p-8 border border-white/10 shadow-xl 
                   group transition-all duration-500 hover:-translate-y-3 hover:shadow-blue-900/40"
            style={`transform: translateX(${mousePosition.x * -0.12}px) translateY(${mousePosition.y * -0.12}px);`}
        >
            <div class="absolute inset-0 opacity-0 group-hover:opacity-40 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-2xl transition"></div>

            <div class="relative z-10">
                <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
                    <Sparkles size={36} class="text-purple-400" />
                    Habilidades Técnicas
                </h2>

                <p class="text-gray-400 mb-4">Haz clic en una categoría para ver las tecnologías:</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {#each skillCategories as c}
                        <button
                            type="button"
                            class="relative bg-[#111a2d] p-5 rounded-xl border border-white/10 group/card
                                   hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-700/30 transition-all"
                            on:click={() => openModal(c.key)}
                            aria-label={"Mostrar tecnologías de " + c.name}
                        >
                            <div class="relative flex items-center gap-4">
                                <div class="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/40 flex items-center justify-center transition group-hover/card:scale-110 group-hover/card:-rotate-6">
                                    <svelte:component this={c.icon} size={22} class={c.accent}/>
                                </div>

                                <div class="flex-1 text-left">
                                    <p class="font-semibold">{c.name}</p>
                                    <p class="text-gray-400 text-xs mt-1">{TECH[c.key].length} tecnologías</p>
                                </div>
                            </div>

                            <div class="mt-3 h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500/70 to-transparent 
                                        scale-x-0 group-hover/card:scale-x-100 transition-transform duration-300"></div>
                        </button>
                    {/each}
                </div>
            </div>
        </article>
    </div>
</section>

{#if modalOpen}
    <TechModal category={selectedCategory} tech={TECH[selectedCategory]} on:close={closeModal} />
{/if}

<style>
    @keyframes typing {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(25px); }
        to   { opacity: 1; transform: translateY(0); }
    }

    .animate-typing {
        animation: typing 0.45s ease-out forwards;
        opacity: 0;
    }
    .animate-fade-in-up {
        animation: fade-in-up 1s ease-out 0.4s forwards;
        opacity: 0;
    }
</style>
