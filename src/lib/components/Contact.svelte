<script>
    import { Mail, Phone, MapPin, Music2, Linkedin } from "lucide-svelte";
    import { slideFrom } from "$lib/utils/slideFrom.js";

    let mouse = { x: 0, y: 0 };

    const contactItems = [
            {
                label: "Gmail",
                value: "eduardovillaquis2@gmail.com",
                icon: Mail,
                color: "from-purple-500 to-purple-700",
                link: "https://mail.google.com/mail/?view=cm&fs=1&to=eduardovillaquis2@gmail.com&su=Contacto%20desde%20tu%20portafolio&body=Hola%20Eduardo,%0D%0A%0D%0A",
                clickable: true
            },

        {
            label: "Whatsapp",
            value: "+593 982 561 360",
            icon: Phone,
            color: "from-green-400 to-emerald-500",
            link: "https://wa.me/593982561360",
            clickable: true
        },
      {
            label: "TikTok",
            value: "@eduardo_quis1911",
            icon: Music2, // 👈 aquí usamos un icon que sí existe
            color: "from-cyan-400 to-pink-500",
            link: "https://www.tiktok.com/@eduardoquispe1",
            clickable: true
        },


        {
            label: "LinkedIn",
            value: "eduardo-quispe",
            icon: Linkedin,
            color: "from-blue-500 to-blue-700",
            link: "https://www.linkedin.com/in/eduardo-quispe-48a756381",
            clickable: true
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
    class="relative pt-8 pb-28 px-6 md:px-20 text-white overflow-hidden"
>
    <!-- FONDO GALAXIA -->
    <div class="absolute inset-0 pointer-events-none">
        <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(80,0,150,0.15),_transparent_70%)]"
        ></div>

        {#each Array.from({ length: 80 }) as _, i}
            <div
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

    <!-- GRID GENERAL -->
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        <!-- LISTA DE CONTACTO -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {#each contactItems as item}
                <article
                    class="relative group bg-[#0b1220]/90 rounded-2xl p-5 md:p-6 border border-white/10 shadow-xl 
                           transition-all duration-300
                           {item.clickable ? 'cursor-pointer hover:-translate-y-2 hover:shadow-purple-900/40' : ''}"
                    style="transform: translateX({mouse.x * 0.1}px) translateY({mouse.y * 0.1}px);"
                    on:click={() => item.clickable && window.open(item.link, '_blank')}
                >
                    <div
                        class="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r {item.color} blur-xl transition-all duration-500 rounded-2xl"
                    ></div>

                    <div class="relative z-10 flex items-start gap-4">
                        <div
                            class="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
                                   shadow-lg group-hover:scale-110 transition-all duration-300 shrink-0"
                        >
                            <item.icon size={26} aria-hidden="true" class="text-purple-300" />
                        </div>

                        <div class="min-w-0">
                            <p class="text-gray-300 text-sm md:text-base font-semibold truncate">
                                {item.label}
                            </p>
                            <p class="text-gray-400 text-xs md:text-sm break-words leading-snug">
                                {item.value}
                            </p>
                        </div>
                    </div>
                </article>
            {/each}
        </div>

        <!-- ILUSTRACIÓN -->
        <div
            use:slideFrom={{ direction: "right", distance: 110, duration: 700 }}
            class="relative flex justify-center items-center"
        >
            <img
                src="https://media.tenor.com/mQvA1VwinoYAAAAj/sseeyall-bubu-dudu.gif"
                alt="Ilustración decorativa"
                class="w-[230px] md:w-[320px] rounded-2xl shadow-2xl 
                       drop-shadow-[0_0_35px_rgba(120,80,255,0.45)]
                       border border-white/10 bg-white/5 backdrop-blur-sm
                       animate-float"
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
