<script>
    import { createEventDispatcher } from "svelte";

    export let category = "";
    export let tech = [];

    const dispatch = createEventDispatcher();

    function handleClose() {
        dispatch("close");
    }

    function handleKeydown(e) {
        if (e.key === "Escape") handleClose();
    }

    // parallax icon movement
    let mouse = { x: 0, y: 0 };

    function handleMouseMove(e) {
        mouse.x = (e.clientX - window.innerWidth / 2) / 40;
        mouse.y = (e.clientY - window.innerHeight / 2) / 40;
    }
</script>

<div
    class="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50"
    tabindex="0"
    on:keydown={handleKeydown}
    on:mousemove={handleMouseMove}
>

    <div
        class="bg-[#141c2f] p-6 w-full max-w-lg rounded-2xl border border-purple-500/40 shadow-purple-900/40 shadow-xl animate-scaleIn relative overflow-hidden"
        style="transform: translateX({mouse.x * 0.2}px) translateY({mouse.y * 0.2}px)"
    >
        <!-- Glow de fondo animado -->
        <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-500/10 blur-2xl"></div>

        <!-- HEADER -->
        <div class="relative z-10 flex justify-between items-center mb-5">
            <h2 class="text-2xl font-bold capitalize text-purple-300">{category}</h2>
            <button
                class="text-2xl text-gray-400 hover:text-white hover:scale-125 transition"
                on:click={handleClose}
            >&times;</button>
        </div>

        <!-- LISTA DE TECNOLOGÍAS -->
        <div class="relative z-10 grid grid-cols-2 gap-4">
            {#each tech as item}
                <div
                    class="bg-[#1b263b] p-4 rounded-xl border border-white/10 flex flex-col items-center gap-3 cursor-pointer
                           transform transition-all duration-300 hover:scale-[1.07] hover:-translate-y-1 hover:shadow-2xl
                           hover:shadow-purple-600/40 group"
                    style="
                        transform:
                            perspective(800px)
                            rotateX({mouse.y * -0.3}deg)
                            rotateY({mouse.x * 0.3}deg);
                    "
                >

                    <!-- ICONO 3D CON BRILLO -->
                    <div
                        class="w-14 h-14 rounded-xl flex items-center justify-center bg-[#0f1627]
                               shadow-lg shadow-black/40 border border-white/5
                               transition-all duration-300 group-hover:shadow-purple-500/60
                               group-hover:rotate-6 group-hover:scale-110 group-hover:border-purple-400"
                    >
                        <img
                            src={item.icon}
                            alt={item.name}
                            class="w-10 h-10 object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]"
                        />
                    </div>

                    <!-- NOMBRE -->
                    <span class="text-white font-medium group-hover:text-purple-300 transition">
                        {item.name}
                    </span>
                </div>
            {/each}
        </div>

        <!-- BOTÓN CERRAR -->
        <button
            on:click={handleClose}
            class="mt-6 w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold text-white shadow-lg shadow-purple-700/30 transition-all hover:scale-105 relative z-10"
        >
            Cerrar
        </button>
    </div>
</div>

<style>
    @keyframes scaleIn {
        from { transform: scale(.85); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    .animate-scaleIn {
        animation: scaleIn 0.25s ease-out;
    }
</style>
