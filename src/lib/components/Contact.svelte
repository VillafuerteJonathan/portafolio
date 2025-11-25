<script>
    import { Mail, Phone, MapPin } from "lucide-svelte";
    import { slideFrom } from "$lib/utils/slideFrom.js";
    import { onMount } from "svelte";

    let mouse = { x: 0, y: 0 };

    const contactItems = [
        {
            label: "Gmail",
            value: "eduardovillaquis2.com",
            icon: Mail,
            color: "from-purple-500 to-purple-700"
        },
        {
            label: "Whatsapp",
            value: "+593 982 561 360",
            icon: Phone,
            color: "from-green-400 to-emerald-500"
        },
        {
            label: "Ubicación",
            value: "Ambato, Ecuador",
            icon: MapPin,
            color: "from-pink-500 to-red-500"
        }
    ];

    function handleMouse(e) {
        mouse = {
            x: (e.clientX / window.innerWidth - 0.5) * 10,
            y: (e.clientY / window.innerHeight - 0.5) * 10
        };
    }
</script>

<svelte:window on:mousemove={handleMouse} />

<section
    id="contacto"
    role="region"
    aria-label="Sección de contacto"
    class="relative pt-8 pb-28 px-6 md:px-20 text-white overflow-hidden"
>

    <!-- FONDO GALAXIA -->
    <div class="absolute inset-0 pointer-events-none" role="presentation">
        <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(80,0,150,0.15),_transparent_70%)]"
            role="presentation"
        ></div>

        {#each Array.from({ length: 80 }) as _, i}
            <div
                role="presentation"
                class="absolute rounded-full bg-white"
                style="
                    left: {Math.random() * 100}%;
                    top: {Math.random() * 100}%;
                    width: 2px;
                    height: 2px;
                    opacity: {Math.random() * 0.5};
                "
            ></div>
        {/each}
    </div>

    <!-- TITULO -->
    <div
        class="relative z-10 text-center mb-20"
        use:slideFrom={{ direction: "bottom", distance: 80, duration: 700 }}
    >
        <div
            class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm"
            role="presentation"
        >
            <span class="text-3xl">📨</span>
            <span class="text-xs uppercase tracking-[0.2em] text-gray-300">
                Contáctame
            </span>
        </div>

        <h1 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="text-purple-400">¿Hablamos?</span>
        </h1>

        <p class="text-gray-300 max-w-2xl mx-auto md:text-lg">
            ¿Tienes un proyecto en mente? Estoy listo para trabajar contigo.
        </p>
    </div>

    <!-- GRID -->
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        <!-- LISTA DE CONTACTO -->
        <div class="space-y-8">
            {#each contactItems as item}
                <article
                    aria-label={`Información de ${item.label}`}
                    use:slideFrom={{ direction: "left", distance: 100, duration: 700 }}
                    class="relative group bg-[#0b1220]/90 rounded-2xl p-6 border border-white/10 shadow-xl 
                           hover:-translate-y-2 hover:shadow-purple-900/40 transition-all duration-300"
                    role="article"
                    style="transform: translateX({mouse.x * 0.1}px) translateY({mouse.y * 0.1}px);"
                >
                    <div
                        class="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r {item.color} blur-xl transition-all duration-500 rounded-2xl"
                        role="presentation"
                    ></div>

                    <div class="relative z-10 flex items-center gap-5">
                        <div
                            class="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
                                   shadow-lg group-hover:scale-110 transition-all duration-300"
                            role="presentation"
                        >
                            <item.icon size={30} aria-hidden="true" class="text-purple-300" />
                        </div>

                        <div>
                            <p class="text-gray-300 text-lg font-semibold">{item.label}</p>
                            <p class="text-gray-400 text-sm">{item.value}</p>
                        </div>
                    </div>
                </article>
            {/each}
        </div>

        <!-- ILUSTRACIÓN (lado derecho) -->
        <div
            use:slideFrom={{ direction: "right", distance: 110, duration: 700 }}
            class="relative flex justify-center items-center"
            role="presentation"
        >
            <img
                src="https://media.tenor.com/mQvA1VwinoYAAAAj/sseeyall-bubu-dudu.gif"
                alt="Ilustración decorativa"
                class="w-[260px] md:w-[350px] rounded-2xl shadow-2xl 
                       drop-shadow-[0_0_35px_rgba(120,80,255,0.45)]
                       border border-white/10 bg-white/5 backdrop-blur-sm
                       transition-transform duration-500 animate-float"
                style="transform: translateX({mouse.x * -0.2}px) translateY({mouse.y * -0.2}px);"
            />
        </div>

    </div>

</section>

<style>
    @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
        100% { transform: translateY(0); }
    }
</style>
