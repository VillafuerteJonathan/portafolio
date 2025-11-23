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
</script>

<div class="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50"
     on:keydown={handleKeydown}
     tabindex="0">

    <div class="bg-[#141c2f] p-6 w-full max-w-md rounded-2xl border border-purple-500/40 shadow-2xl animate-scaleIn">

        <!-- HEADER -->
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold capitalize text-purple-300">{category}</h2>
            <button class="text-2xl text-gray-400 hover:text-white" on:click={handleClose}>&times;</button>
        </div>

        <!-- LISTA DE TECNOLOGÍAS -->
        <div class="space-y-3">
            {#each tech as item}
                <div class="flex items-center gap-4 bg-[#1b263b] p-4 rounded-xl border border-white/10">
                    <img src={item.icon} alt={item.name} class="w-10 h-10" />
                    <span class="text-white font-medium">{item.name}</span>
                </div>
            {/each}
        </div>

        <!-- BOTÓN CERRAR -->
        <button 
            on:click={handleClose}
            class="w-full mt-6 bg-purple-600 hover:bg-purple-700 py-2 rounded-xl text-white font-semibold transition">
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
