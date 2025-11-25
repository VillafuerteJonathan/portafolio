<script>
    export let title;
    export let image;
    export let institution;
    export let date;
    export let open = false;

    function close() {
        open = false;
        dispatch("close");
    }

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

{#if open}
<div
    class="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[999]"
    on:click={close}
>
    <div
        class="relative bg-[#0d1117] border border-white/10 rounded-2xl p-6 max-w-4xl w-[90%]
               shadow-2xl animate-fade-in scale-100"
        on:click|stopPropagation
    >
        <!-- Botón cerrar -->
        <button
            class="absolute top-4 right-4 text-white bg-purple-600 hover:bg-purple-700 p-2 rounded-full"
            on:click={close}
        >
            ✕
        </button>

        <!-- Imagen -->
        <img
            src={image}
            alt={title}
            class="rounded-xl w-full max-h-[70vh] object-contain"
        />

        <!-- Información -->
        <div class="mt-6 text-center text-gray-200">
            <h2 class="text-2xl font-bold mb-2">{title}</h2>
            <p class="opacity-80">Emitido por: <b>{institution}</b></p>
            <p class="opacity-60">Fecha: {date}</p>
        </div>
    </div>
</div>
{/if}

<style>
    @keyframes fade-in {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    .animate-fade-in {
        animation: fade-in 0.2s ease-out forwards;
    }
</style>
