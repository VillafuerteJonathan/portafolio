<script>
    export let open = false;
    export let title = "";
    export let items = [];

    import { createEventDispatcher, onMount } from "svelte";
    const dispatch = createEventDispatcher();

    // === PRELOAD IMAGES (instantáneo en móvil) ===
    onMount(() => {
        items.forEach(tech => {
            const img = new Image();
            img.src = tech.icon;
        });
    });

    function close() {
        dispatch("close");
    }
</script>

{#if open}
<div class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]">
    
    <div class="bg-[#0d1220] w-[95%] max-w-lg rounded-2xl p-6 border border-white/10 shadow-2xl animate-modal">
        
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold text-white">{title}</h2>

            <button
                class="text-gray-300 hover:text-white text-2xl"
                on:click={close}
            >
                ✖
            </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2">
            {#each items as tech}
                <div class="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition">
                    
                    <img
                        src={tech.icon}
                        alt={tech.name}
                        class="w-10 h-10 opacity-0 transition-opacity duration-300"
                        loading="lazy"
                        on:load={(e) => e.target.classList.add("opacity-100")}
                    />

                    <span class="text-white">{tech.name}</span>
                </div>
            {/each}
        </div>

        <div class="mt-5 text-right">
            <button
                on:click={close}
                class="px-4 py-2 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition"
            >
                Cerrar
            </button>
        </div>
    </div>
</div>
{/if}

<style>
    .animate-modal {
        animation: zoomIn 0.25s ease-out;
    }

    @keyframes zoomIn {
        from { transform: scale(0.85); opacity: 0; }
        to   { transform: scale(1); opacity: 1; }
    }
</style>
