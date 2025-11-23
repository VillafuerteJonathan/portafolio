<script>
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import Hero from "$lib/components/Hero.svelte";
    export let data;
</script>

<div class="min-h-screen bg-[#0b0f19] text-white">
    <Navbar />

    <main class="pt-[10px] max-w-7xl mx-auto">

        <slot />
    </main>
</div>
