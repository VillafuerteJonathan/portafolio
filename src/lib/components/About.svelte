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

    // ==== FIX PARALLAX ====
    $: parallaxLeft = `transform: translateX(${mousePosition.x * 0.15}px) translateY(${mousePosition.y * 0.15}px)`;
    $: parallaxRight = `transform: translateX(${mousePosition.x * -0.12}px) translateY(${mousePosition.y * -0.12}px)`;

    onMount(() => {
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
        selectedCategory = null;
    }

    function handleMouseMove(e) {
        mousePosition = {
            x: (e.clientX / window.innerWidth - 0.5) * 15,
            y: (e.clientY / window.innerHeight - 0.5) * 15
        };
    }

    // ====== GET ITEMS/TITLES ======
    function getModalItems() {
        if (!selectedCategory) return [];
        return TECH[selectedCategory].map(tech => ({
            name: tech.name,
            icon: tech.icon
        }));
    }

    function getModalTitle() {
        if (!selectedCategory) return '';
        return skillCategories.find(c => c.key === selectedCategory)?.name || 'Tecnologías';
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
    aria-label="Sección sobre mí y habilidades"
    class="pt-28 pb-24 px-6 md:px-20 text-white relative overflow-hidden"
>
    <!-- Glow de fondo similar a estudios -->
    <div class="pointer-events-none absolute inset-0 opacity-20">
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

    <!-- TÍTULO CON EFECTO DE SCROLL -->
    <div
        class="text-center mb-16 relative z-10"
        use:slideFrom={{ direction: "bottom", distance: 80, duration: 700 }}
    >
        <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur">
            <UserRound size={20} class="text-purple-400" />
            <span class="text-xs uppercase tracking-[0.2em] text-gray-300">
                Conóceme
            </span>
        </div>

        <h1 bind:this={titleRef} class="text-4xl md:text-5xl font-extrabold mb-3 text-white">
            {#each "Acerca de Mí".split("") as letter}
                <span class="letter inline-block animate-typing">
                    {letter === " " ? "\u00A0" : letter}
                </span>
            {/each}
        </h1>

        <p class="text-gray-300 max-w-2xl mx-auto text-sm md:text-base animate-fade-in-up">
            Te cuento quién soy, cómo trabajo y qué tecnologías domino como desarrollador Full Stack.
        </p>
    </div>

    <!-- CONTENIDO PRINCIPAL CON EFECTOS DE SCROLL -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10 max-w-6xl mx-auto">

        <!-- SOBRE MÍ -->
        <article
            aria-label="Información personal y pasatiempos"
            use:slideFrom={{ direction: "left", distance: 110, duration: 750 }}
            class="relative bg-[#0b1220]/90 border border-white/10 rounded-2xl
                   p-7 md:p-8 transform-gpu transition-all duration-500
                   hover:-translate-y-3 hover:-rotate-1 hover:shadow-2xl hover:shadow-purple-900/40
                   hover:border-purple-500/60 group"
            style={parallaxLeft}
        >
            <div class="relative z-10">
                <header class="flex items-start md:items-center gap-3 mb-6">
                    <div
                        class="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-purple-500/10 border border-purple-400/40
                               flex items-center justify-center shadow-lg shadow-purple-900/40
                               transform-gpu transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                    >
                        <UserRound size={24} class="text-purple-300" />
                    </div>

                    <div>
                        <h2 class="text-xl md:text-2xl font-bold text-purple-200">
                            Sobre Mí
                        </h2>
                        <p class="text-gray-300 font-medium text-sm md:text-base">
                            Ingeniero de Software Full Stack
                        </p>
                    </div>
                </header>

                <div class="space-y-4">
                    <p class="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                        Soy <span class="text-purple-400 font-semibold">Jonathan Villafuerte</span>,
                        un apasionado por construir soluciones modernas que realmente funcionan.
                    </p>

                    <ul class="text-gray-300 text-sm space-y-2.5">
                        <li class="flex items-start gap-3">
                            <HeartHandshake class="text-purple-300 mt-0.5" size={18}/>
                            <span>Trabajo en equipo con buena vibra</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <Code2 class="text-purple-300 mt-0.5" size={18}/>
                            <span>Soluciono problemas incluso cuando se complica</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <Cpu class="text-purple-300 mt-0.5" size={18}/>
                            <span>Desarrollo sistemas rápidos y robustos</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <Sparkles class="text-purple-300 mt-0.5" size={18}/>
                            <span>Me encantan los retos tecnológicos</span>
                        </li>
                    </ul>
                </div>

                <!-- PASATIEMPOS -->
                <div class="mt-8 pt-6 border-t border-white/10">
                    <h3 class="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-100">
                        <Sparkles size={20} class="text-yellow-300" />
                        Pasatiempos
                    </h3>

                    <ul class="space-y-3 text-gray-300 text-sm">
                        <li class="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                            <span class="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/30">⚽</span>
                            <span>Fútbol — Me encantan los partidos y más si son con amigos.</span>
                        </li>

                        <li class="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                            <span class="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/30">🎮</span>
                            <span>Videojuegos — Me apasionan los juegos de terror y aventura.</span>
                        </li>

                        <li class="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                            <span class="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/30">🎬</span>
                            <span>Cine — Si la historia me atrapa, la termino sí o sí.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </article>

        <!-- HABILIDADES -->
        <article
            aria-label="Habilidades técnicas por categorías"
            use:slideFrom={{ direction: "right", distance: 110, duration: 750 }}
            class="relative bg-[#0b1220]/90 border border-white/10 rounded-2xl
                   p-7 md:p-8 transform-gpu transition-all duration-500
                   hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl hover:shadow-blue-900/40
                   hover:border-blue-500/60 group"
            style={parallaxRight}
        >
            <div class="relative z-10">
                <header class="flex items-start md:items-center gap-3 mb-6">
                    <div
                        class="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-blue-500/10 border border-blue-400/40
                               flex items-center justify-center shadow-lg shadow-blue-900/40
                               transform-gpu transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                    >
                        <Sparkles size={24} class="text-blue-300" />
                    </div>

                    <div>
                        <h2 class="text-xl md:text-2xl font-bold text-blue-200">
                            Habilidades Técnicas
                        </h2>
                        <p class="text-gray-300 font-medium text-sm md:text-base">
                            Tecnologías que domino
                        </p>
                    </div>
                </header>

                <p class="text-gray-400 text-sm mb-6">Haz clic en una categoría para ver las tecnologías:</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {#each skillCategories as c}
                        <button
                            type="button"
                            aria-label={`Ver tecnologías de ${c.name}`}
                            class="relative bg-[#111a2d] p-5 rounded-xl border border-white/10 group/card
                                   hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-700/30 
                                   transition-all duration-300 transform-gpu hover:border-purple-500/40"
                            on:click={() => openModal(c.key)}
                        >
                            <div class="relative flex items-center gap-4">
                                <div class="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/40 
                                           flex items-center justify-center transition group-hover/card:scale-110">
                                    <svelte:component this={c.icon} size={22} class={c.accent}/>
                                </div>

                                <div class="flex-1 text-left">
                                    <p class="font-semibold text-gray-100">{c.name}</p>
                                    <p class="text-gray-400 text-xs mt-1">{TECH[c.key].length} tecnologías</p>
                                </div>
                            </div>
                        </button>
                    {/each}
                </div>
            </div>
        </article>
    </div>
</section>

{#if modalOpen && selectedCategory}
    <TechModal 
        open={modalOpen}
        title={getModalTitle()}
        items={getModalItems()}
        on:close={closeModal}
    />
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