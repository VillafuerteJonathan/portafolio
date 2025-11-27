<script>
    import { Github, Linkedin, Mail } from "lucide-svelte";

    let mouseX = 0;
    let mouseY = 0;

    let imgHover = false;
    let titleHover = false;

    function handleMouseMove(e) {
        mouseX = (e.clientX - window.innerWidth / 2) / 40;
        mouseY = (e.clientY - window.innerHeight / 2) / 40;
    }
</script>

<section
    on:mousemove={handleMouseMove}
    aria-label="Presentación principal"
    class="relative pt-20 pb-10 px-6 md:px-16 overflow-hidden"
>

    <!-- BURBUJAS -->
    <div class="absolute inset-0 pointer-events-none z-0">
        {#each Array(20) as _, i}
            <div 
                class="bubble"
                style="
                    --size: {3 + Math.random() * 4}rem;
                    --left: {Math.random() * 100}%;
                    --delay: {-Math.random() * 10}s;
                    --duration: {8 + Math.random() * 6}s;
                "
            ></div>
        {/each}
    </div>

    <!-- GRID -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">

        <!-- TEXTOS -->
        <div
            class="space-y-6 fade-in text-center md:text-left"
            on:mouseenter={() => titleHover = true}
            on:mouseleave={() => titleHover = false}
            style="transform: scale({titleHover ? 1.03 : 1}); transition: 0.4s ease;"
        >
            <h1 class="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
                Hola, soy <br />
                <span class="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
                    Jonathan <br class="hidden md:block" /> Villafuerte
                </span>
            </h1>

            <p class="text-gray-300 text-lg sm:text-xl max-w-md mx-auto md:mx-0">
                Ingeniero de Software | Desarrollador Full Stack
            </p>

            <p class="text-gray-400 max-w-xl mx-auto md:mx-0 text-base sm:text-lg">
                Especializado en crear experiencias web modernas, fluidas e interactivas.
            </p>

            <!-- BOTONES -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                    href="/assets/pdf/micv.pdf"
                    download="CV_Jonathan_Villafuerte.pdf"
                    aria-label="Descargar currículum"
                    class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm
                           font-semibold shadow-lg shadow-purple-600/20 transition flex items-center gap-2 justify-center"
                >
                    <i class="ri-download-line text-lg"></i>
                    Descargar CV
                </a>

                <a
                    href="#contacto"
                    aria-label="Ir a contacto"
                    class="px-6 py-3 border border-gray-600 hover:border-white text-gray-200 hover:text-white
                           rounded-xl text-sm font-semibold transition text-center"
                >
                    Contáctame
                </a>
            </div>

            <!-- REDES -->
            <div class="flex gap-6 pt-4 text-2xl justify-center md:justify-start">

                <a 
                    href="https://github.com/VillafuerteJonathan"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 rounded-xl bg-white/5 hover:bg-purple-600/30 transition-all border border-white/10"
                >
                    <Github size={26} class="text-gray-300 hover:text-purple-400 transition" />
                </a>

                <a 
                    href="https://www.linkedin.com/in/eduardo-quispe-48a756381"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 rounded-xl bg-white/5 hover:bg-purple-600/30 transition-all border border-white/10"
                >
                    <Linkedin size={26} class="text-gray-300 hover:text-purple-400 transition" />
                </a>

                <!-- Discord -->
                <a 
                    href="https://discord.com/users/740763335343210556"
                    aria-label="Perfil de Discord"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 rounded-xl bg-white/5 hover:bg-purple-600/30 transition-all border border-white/10"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        width="26" height="26"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="text-gray-300 hover:text-purple-400 transition"
                    >
                        <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.249a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.249.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.027c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.108 13.108 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 01.077-.01c3.927 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.009c.12.099.246.198.372.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.893.076.076 0 00-.04.105c.36.698.771 1.364 1.225 1.994a.076.076 0 00.084.027 19.876 19.876 0 005.995-3.03.077.077 0 00.03-.056c.5-5.177-.838-9.673-3.548-13.662a.061.061 0 00-.031-.028zM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.213 0 2.178 1.096 2.157 2.419 0 1.334-.955 2.419-2.157 2.419zm7.975 0c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.213 0 2.178 1.096 2.157 2.419 0 1.334-.944 2.419-2.157 2.419z"> </path>

                    </svg>
                </a>

                <a
                    href="mailto:eduardovillaquis2@gmail.com"
                    aria-label="Correo"
                    class="p-2 rounded-xl bg-white/5 hover:bg-purple-600/30 transition-all border border-white/10"
                >
                    <Mail size={26} class="text-gray-300 hover:text-purple-400 transition" />
                </a>

            </div>
        </div>

        <!-- IMAGEN -->
        <div
            class="flex justify-center md:justify-end relative fade-in"
            style="transform: translate(calc({mouseX}px), calc({mouseY}px));"
        >
            <div
                class="relative group"
                style="
                    transform: perspective(900px)
                    rotateX({mouseY * -0.3}deg)
                    rotateY({mouseX * 0.3}deg);
                "
                on:mouseenter={() => imgHover = true}
                on:mouseleave={() => imgHover = false}
            >
                <div
                    class="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[180px] sm:w-[220px] h-[60px] sm:h-[80px]
                           bg-purple-700 blur-3xl opacity-40 rounded-full"
                ></div>

                <div
                    class="relative w-[240px] h-[340px] sm:w-[300px] sm:h-[400px]
                           rounded-full overflow-hidden border-[5px] sm:border-[6px]
                           border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.5)]
                           transition-all duration-300 group-hover:scale-[1.05]
                           group-hover:shadow-[0_0_60px_rgba(168,85,247,0.8)]"
                >
                    <img
                        src="/img/opc1.png"
                        alt="Foto"
                        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                        style="opacity: {imgHover ? 0 : 1};"
                    />
                    <img
                        src="/img/avatar.png"
                        alt="Avatar"
                        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                        style="opacity: {imgHover ? 1 : 0};"
                    />
                </div>
            </div>
        </div>
    </div>

    <!-- SCROLL -->
    <div class="flex justify-center mt-6">
        <div class="w-9 h-14 border-2 border-purple-400 rounded-3xl flex justify-center items-start p-2">
            <div class="w-2 h-3 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
    </div>

</section>

<style>
    .bubble {
        position: absolute;
        bottom: 10rem;
        width: var(--size);
        height: var(--size);
        left: var(--left);
        background: rgba(255, 255, 255, 0.08);
        border-radius: 50%;
        animation: floatUp var(--duration) infinite ease-in-out;
        animation-delay: var(--delay);
        filter: blur(4px);
    }

    @keyframes floatUp {
        0% { transform: translateY(0) scale(1); opacity: 0.2; }
        40% { opacity: 0.5; }
        100% { transform: translateY(-520px) scale(1.3); opacity: 0; }
    }

    .fade-in {
        animation: fadeInAnimation 1s ease forwards;
        opacity: 0;
    }

    @keyframes fadeInAnimation {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
</style>

 