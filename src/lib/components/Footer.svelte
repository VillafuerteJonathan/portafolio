<script>
    import { Github, Linkedin, Mail } from "lucide-svelte";
</script>

<footer 
    class="w-full overflow-hidden py-10 px-6 md:px-20 text-gray-300 bg-gradient-to-b from-[#0b0f19] to-[#05060c]"
>

    <!-- NOMBRE -->
    <div class="text-center mb-8">
        <h2 class="text-3xl md:text-4xl font-extrabold tracking-widest text-purple-400">
            JV
        </h2>
    </div>

    <!-- ICONOS -->
    <div class="flex justify-center gap-4 md:gap-6 mb-8">
        <a 
            href="https://github.com/VillafuerteJonathan"
            target="_blank"
            class="footer-icon"
        >
            <Github class="size-6 md:size-7" />
        </a>

        <a 
            href="https://www.linkedin.com/in/eduardo-quispe-48a756381"
            target="_blank"
            class="footer-icon"
        >
            <Linkedin class="size-6 md:size-7" />
        </a>

        <a 
            href="mailto:eduardovillaquis2@gmail.com"
            class="footer-icon"
        >
            <Mail class="size-6 md:size-7" />
        </a>
    </div>

    <!-- MENÚ -->
    <nav class="flex flex-wrap justify-center gap-4 md:gap-8 text-sm opacity-90 mb-8">
        <a href="/" class="footer-link">Inicio</a>
        <a href="#sobre-mi" class="footer-link">Sobre Mí</a>
        <a href="#proyectos" class="footer-link">Proyectos</a>
        <a href="#certificados" class="footer-link">Certificados</a>
        <a href="#contacto" class="footer-link">Contacto</a>
    </nav>

    <!-- LEMA -->
    <p class="text-center text-gray-400 max-w-xl mx-auto text-sm md:text-base italic mb-6">
        “Me encanta aprender, mejorar y programar hasta que las cosas salgan como quiero…
        o hasta conseguir lo que quiero.”
    </p>

    <!-- COPYRIGHT -->
    <p class="text-center text-gray-500 text-xs">
        © 2025 Jonathan Villafuerte — Hecho con 
        <span class="text-red-500">❤️</span> y mucho código.
    </p>

</footer>

<style>
    .footer-icon {
        padding: 10px;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer-icon:hover {
        background: rgba(168, 85, 247, 0.25);
        border-color: rgba(168, 85, 247, 0.5);
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(168, 85, 247, 0.3);
    }

    .footer-link {
        color: #aaa;
        transition: 0.3s;
        white-space: nowrap;
    }

    .footer-link:hover {
        color: #c084fc;
    }
</style>
