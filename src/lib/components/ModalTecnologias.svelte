<script>
    export let open = false;
    export let title = "";
    export let items = []; // { name, icon }

    import { createEventDispatcher, onMount, onDestroy } from "svelte";
    const dispatch = createEventDispatcher();

    function close() {
        dispatch("close"); // El padre debe cambiar "open"
    }

    // Cerrar con ESC
    function handleKey(e) {
        if (e.key === "Escape") close();
    }

    onMount(() => window.addEventListener("keydown", handleKey));
    onDestroy(() => window.removeEventListener("keydown", handleKey));
</script>

{#if open}
<div 
    class="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-[100] animate-fade"
    tabindex="0"
    on:click={close}
    role="dialog"
    aria-modal="true"
    aria-label={title}
>
    <div 
        class="bg-[#0f1424] rounded-2xl p-10 w-[90%] max-w-2xl shadow-2xl border border-white/10
               animate-zoom"
        on:click|stopPropagation
    >
        <h2 class="text-3xl font-bold text-purple-300 mb-6 text-center">
            {title}
        </h2>

        <div class="grid grid-cols-3 md:grid-cols-4 gap-6">
            {#each items as item}
                <div 
                    class="flex flex-col items-center text-center" 
                    role="group" 
                    aria-label={item.name}
                >
                    <img 
                        src={item.icon} 
                        alt={item.name} 
                        class="w-12 h-12 mb-2"
                    />
                    <span class="text-gray-300 text-sm">{item.name}</span>
                </div>
            {/each}
        </div>

        <div class="flex justify-center mt-8">
            <button 
                class="px-6 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white
                       font-semibold shadow-lg shadow-purple-600/30 transition"
                on:click={close}
                aria-label="Cerrar modal"
            >
                Cerrar
            </button>
        </div>
    </div>
</div>
{/if}

<style>
    @keyframes fade {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    .animate-fade {
        animation: fade .25s ease;
    }

    @keyframes zoom {
        from { transform: scale(.85); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    .animate-zoom {
        animation: zoom .3s ease;
    }
</style>
