<script>
    import TechModal from "$lib/components/TechModal.svelte";
    import { TECH } from "$lib/data/tech.js";
    import { onMount, onDestroy } from "svelte";

    let modalOpen = false;
    let selectedCategory = null;

    let mousePosition = { x: 0, y: 0 };
    let titleRef;

    // Partículas de fondo
    let particles = [];
    let particlesInterval;

    onMount(() => {
        initParticles();
        animateTitle();

        particlesInterval = setInterval(updateParticles, 90);
    });

    onDestroy(() => {
        if (particlesInterval) clearInterval(particlesInterval);
    });

    function initParticles() {
        const arr = [];
        for (let i = 0; i < 100; i++) {
            arr.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.4,
                speedY: (Math.random() - 0.5) * 0.4,
                opacity: Math.random() * 0.3 + 0.1
            });
        }
        particles = arr;
    }

    function animateTitle() {
        if (!titleRef) return;
        const letters = titleRef.querySelectorAll(".letter");
        letters.forEach((l, i) => {
            l.style.animationDelay = `${i * 0.08}s`;
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

    function updateParticles() {
        particles = particles.map((p) => ({
            ...p,
            x: (p.x + p.speedX + 100) % 100,
            y: (p.y + p.speedY + 100) % 100
        }));
    }

    const skillCategories = [
        { key: "frontend", name: "Frontend", emoji: "🎨", accentClass: "text-pink-400" },
        { key: "backend", name: "Backend", emoji: "🛠️", accentClass: "text-green-400" },
        { key: "database", name: "Bases de Datos", emoji: "🗄️", accentClass: "text-yellow-400" },
        { key: "devops", name: "DevOps & Tools", emoji: "⚙️", accentClass: "text-blue-400" },
        { key: "tools", name: "Software & Analítica", emoji: "🧠", accentClass: "text-purple-400" }
    ];
</script>

<svelte:window on:mousemove={handleMouseMove} />

<section id="sobre-mi"  class="pt-32 pb-24 px-6 md:px-20 text-white relative overflow-hidden">

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

<!-- ================= TITULO ================= -->
<div class="text-center mb-16 relative z-10">

    <h1
        bind:this={titleRef}
        class="text-5xl font-extrabold mb-5 text-white"
    >
        {#each "Acerca de Mí".split("") as letter, i}
            <span class="letter inline-block animate-typing">
                {letter === " " ? '\u00A0' : letter}
            </span>
        {/each}
    </h1>

    <p class="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in-up">
        Te cuento quién soy, cómo trabajo y qué tecnologías domino como desarrollador Full Stack.
    </p>
</div>

    <!-- ================= GRID SOBRE MÍ / HABILIDADES ================= -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">

        <!-- ========== TARJETA: SOBRE MÍ ========== -->
        <div
            class="bg-[#141c2f] rounded-2xl p-8 border border-white/10 shadow-xl relative group transition-all duration-500 hover:scale-[1.03]"
            style={`transform: translateX(${mousePosition.x * 0.2}px) translateY(${mousePosition.y * 0.2}px);`}
        >
            <!-- glow suave -->
          <div class="pointer-events-none absolute -inset-0.5 rounded-2xl 
            bg-gradient-to-r from-gray-500/20 to-purple-500/20 
            opacity-0 group-hover:opacity-100 blur-lg transition" />

            <div class="relative z-10">
                <h2 class="text-3xl font-bold mb-4 flex items-center gap-2">
                    <span class="text-purple-400 text-4xl">👨‍💻</span>
                    Sobre Mí
                </h2>

                <p class="text-gray-300 leading-relaxed">
                    Soy <span class="text-purple-400 font-semibold">Jonathan Villafuerte</span>,
                    un <b>Ingeniero de Software Full Stack</b> con actitud positiva y orientación total a soluciones.
                </p>

                <ul class="mt-4 text-gray-300 space-y-2 leading-relaxed">
                    <li>🤝 Me encanta colaborar y crear espacios donde todos podamos aprender y crecer.</li>
                    <li>💡 Siempre busco una solución, incluso cuando el camino se complica.</li>
                    <li>⚙️ Disfruto construir sistemas rápidos, robustos y pensados para ayudar a las personas.</li>
                    <li>🚀 La tecnología es mi pasión y siempre estoy buscando el siguiente desafío.</li>
                    <li>😄 Soy sociable, curioso y me gusta dejar una buena impresión donde voy.</li>
                </ul>

                <a
                    href="#contacto"
                    class="mt-6 inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold shadow-lg transition relative overflow-hidden"
                >
                    <span class="relative z-10">Contáctame</span>
                    <span class="relative z-10 text-lg">→</span>
                    <span class="absolute inset-0 bg-gradient-to-r from-purple-400/40 to-purple-700/40 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                </a>
            </div>
        </div>

        <!-- ========== TARJETA: HABILIDADES ========== -->
        <div
            class="bg-[#141c2f] rounded-2xl p-8 border border-white/10 shadow-xl relative group transition-all duration-500 hover:scale-[1.03]"
            style={`transform: translateX(${mousePosition.x * -0.15}px) translateY(${mousePosition.y * -0.15}px);`}
        >
            <div class="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500/40 to-emerald-500/40 opacity-0 group-hover:opacity-100 blur-xl transition" />

            <div class="relative z-10">
                <h2 class="text-3xl font-bold mb-4 flex items-center gap-2">
                    <span class="text-purple-400 text-4xl animate-spin-slow">🧩</span>
                    Habilidades Técnicas
                </h2>

                <p class="text-gray-400 mb-4">
                    Haz clic en una categoría para ver las tecnologías que utilizo:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {#each skillCategories as c}
                        <button
                            type="button"
                            class="bg-[#1b263b] p-5 rounded-xl border border-white/10 cursor-pointer group/card
                                   relative overflow-hidden transition-all duration-300
                                   hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-700/40"
                            on:click={() => openModal(c.key)}
                        >
                            <!-- Halo detrás del icono -->
                            <div class="absolute -top-6 -left-8 w-24 h-24 rounded-full bg-purple-500/20 blur-2xl opacity-0 group-hover/card:opacity-100 transition" />

                            <div class="relative flex items-center gap-4">
                                <!-- Icono grande con 3D / rotación -->
                                <div
                                    class="relative w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center
                                           transition-transform duration-300
                                           group-hover/card:-translate-y-1 group-hover/card:rotate-6 group-hover/card:scale-110"
                                >
                                    <span class={`text-2xl ${c.accentClass}`}>{c.emoji}</span>

                                    <!-- mini glow -->
                                    <div class="absolute inset-0 rounded-2xl border border-purple-500/40 opacity-0 group-hover/card:opacity-100 transition" />
                                </div>

                                <div class="flex-1 text-left">
                                    <p class="font-semibold text-sm md:text-base">
                                        {c.name}
                                    </p>
                                    <p class="text-gray-400 text-xs md:text-sm mt-1">
                                        {TECH[c.key].length} tecnologías
                                    </p>
                                </div>
                            </div>

                            <!-- Línea inferior animada -->
                            <div class="mt-3 h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500/70 to-transparent scale-x-0 origin-center group-hover/card:scale-x-100 transition-transform duration-300" />
                        </button>
                    {/each}
                </div>
            </div>
        </div>
    </div>

    <!-- ================= HOBBIES ================= -->
  <!-- ================= HOBBIES (VERSIÓN PREMIUM) ================= -->
<div
    class="group relative bg-[#101727]/80 backdrop-blur-xl border border-white/10 
           rounded-2xl p-10 mt-20 shadow-2xl transition-all duration-500 
           hover:shadow-purple-900/40 hover:scale-[1.015]"
    style={`transform: translateX(${mousePosition.x * 0.1}px) translateY(${mousePosition.y * 0.1}px);`}
>

    <!-- Glow exterior -->
    <div
        class="absolute inset-0 -z-10 rounded-3xl opacity-0 group-hover:opacity-40
               bg-gradient-to-r from-purple-600/40 to-orange-500/40 blur-3xl 
               transition-all duration-700"
    ></div>

    <h2 class="text-4xl font-bold mb-8 flex items-center gap-3">
        <span class="text-yellow-400 text-5xl drop-shadow animate-bounce">⭐</span>
        Hobbies e Intereses
    </h2>

    <div class="space-y-6">

        <!-- CARD REUSABLE -->
        {#each [
            {
                emoji: "⚽",
                title: "Fútbol",
                desc: "Jugar, entrenar y disfrutar buenos partidos con amigos y familia.",
                rotation: "-rotate-6"
            },
            {
                emoji: "🎮",
                title: "Videojuegos",
                desc: "Shooters, estrategia, cooperativos o mundo abierto… mientras haya diversión, ahí estoy.",
                rotation: "rotate-3"
            },
            {
                emoji: "🎬",
                title: "Cine",
                desc: "Acción, terror, romance o guerra… si la historia engancha, me la termino.",
                rotation: "-rotate-3"
            }
        ] as hobbie}
            <div
                class="relative flex items-center gap-5 bg-[#151f32]/90 backdrop-blur-lg 
                       p-5 rounded-xl border border-white/5
                       hover:bg-[#1b2940] transition-all duration-300
                       hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-700/30"
            >
                <!-- Icono -->
                <div
                    class={`w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center
                            text-3xl transition-all duration-300 
                            group-hover:scale-110 group-hover:${hobbie.rotation}`}
                >
                    {hobbie.emoji}
                </div>

                <!-- Texto -->
                <div>
                    <p class="font-semibold text-lg">{hobbie.title}</p>
                    <p class="text-gray-400 text-sm">{hobbie.desc}</p>
                </div>

                <!-- Glow al pasar -->
                <div
                    class="absolute inset-0 opacity-0 group-hover:opacity-20 rounded-xl
                           bg-gradient-to-r from-purple-500/40 to-indigo-500/40 blur-xl
                           transition-all duration-500 pointer-events-none"
                ></div>
            </div>
        {/each}
    </div>
</div>


</section>

{#if modalOpen}
    <TechModal
        category={selectedCategory}
        tech={TECH[selectedCategory]}
        on:close={closeModal}
    />
{/if}

<style>
    @keyframes typing {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fade-in-up {
        from {
            opacity: 0;
            transform: translateY(25px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes spin-slow {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes bounce-soft {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-6px);
        }
    }

    .animate-typing {
        animation: typing 0.45s ease-out forwards;
        opacity: 0;
    }

    .animate-fade-in-up {
        animation: fade-in-up 1s ease-out 0.4s forwards;
        opacity: 0;
    }

    .animate-spin-slow {
        animation: spin-slow 8s linear infinite;
    }

    .animate-bounce-soft {
        animation: bounce-soft 2.4s ease-in-out infinite;
    }
</style>