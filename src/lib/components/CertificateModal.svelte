<script>
    export let title;
    export let image;
    export let institution;
    export let date;
    export let open = false;

    import { createEventDispatcher, onMount, onDestroy } from "svelte";
    const dispatch = createEventDispatcher();

    function close() {
        open = false;
        dispatch("close");
    }

    function handleKey(e) {
        if (e.key === "Escape") close();
    }

    onMount(() => window.addEventListener("keydown", handleKey));
    onDestroy(() => window.removeEventListener("keydown", handleKey));
</script>

{#if open}
<div
    class="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[999]"
    role="dialog"
    aria-modal="true"
    aria-label="Ventana de certificado"
    tabindex="0"
    on:click={close}
>
    <div
        class="relative bg-[#0d1117] border border-white/10 rounded-2xl p-6 max-w-4xl w-[90%]
               shadow-2xl animate-fade-in scale-100"
        role="document"
        on:click|stopPropagation
    >
        <button
            class="absolute top-4 right-4 text-white bg-purple-600 hover:bg-purple-700 p-2 rounded-full"
            on:click={close}
            aria-label="Cerrar ventana"
        >
            ✕
        </button>

        <img
            src={image}
            alt={`Certificado ${title}`}
            class="rounded-xl w-full max-h-[70vh] object-contain"
        />

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
        from { opacity: 0; transform: scale(0.9); }
        to   { opacity: 1; transform: scale(1); }
    }

    .animate-fade-in {
        animation: fade-in 0.2s ease-out forwards;
    }
</style>
