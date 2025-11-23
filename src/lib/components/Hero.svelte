<script>
    // Variables para Parallax
    let mouseX = 0;
    let mouseY = 0;

    // Hover para la imagen
    let imgHover = false;

    // Hover para el texto principal
    let titleHover = false;

    function handleMouseMove(e) {
        mouseX = (e.clientX - window.innerWidth / 2) / 40;
        mouseY = (e.clientY - window.innerHeight / 2) / 40;
    }
</script>

<section 
    on:mousemove={handleMouseMove}
    class="relative pt-24 pb-32 px-6 md:px-16 overflow-hidden"
>

    <!-- BURBUJAS ANIMADAS -->
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

    <!-- CONTENIDO -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

        <!-- TEXTOS -->
        <div 
            class="space-y-6 fade-in"
            on:mouseenter={() => titleHover = true}
            on:mouseleave={() => titleHover = false}
            style="transform: scale({titleHover ? 1.03 : 1}); transition: 0.4s ease;"
        >
            <h1 class="text-5xl md:text-7xl font-extrabold leading-tight">
                Hola, soy <br />
                <span class="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
                    Jonathan <br /> Villafuerte
                </span>
            </h1>

            <p class="text-gray-300 text-lg">
                Ingeniero de Software | Desarrollador Full Stack
            </p>

            <p class="text-gray-400 max-w-xl">
                Especializado en crear experiencias web modernas, fluidas e interactivas.
            </p>

            <!-- BOTONES -->
            <div class="flex gap-4">
                <a
                    href="#"
                    class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm
                    font-semibold shadow-lg shadow-purple-600/20 transition flex items-center gap-2"
                >
                    <i class="ri-download-line text-lg"></i>
                    Descargar CV
                </a>

                <a
                    href="#contacto"
                    class="px-6 py-3 border border-gray-600 hover:border-white text-gray-200 hover:text-white
                    rounded-xl text-sm font-semibold transition"
                >
                    Contáctame
                </a>
            </div>

            <!-- ÍCONOS -->
            <div class="flex gap-6 pt-4 text-2xl">
                <a href="#" class="hover:text-purple-400 transition"><i class="ri-github-fill"></i></a>
                <a href="#" class="hover:text-purple-400 transition"><i class="ri-linkedin-fill"></i></a>
                <a href="#" class="hover:text-purple-400 transition"><i class="ri-mail-line"></i></a>
            </div>
        </div>

        <!-- IMAGEN 3D -->
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

                <!-- Sombra -->
                <div
                    class="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[250px] h-[80px]
                           bg-purple-700 blur-3xl opacity-40 rounded-full"
                ></div>

                <!-- Marco + cambio de imagen -->
                <div
                    class="relative w-[320px] h-[320px] rounded-full overflow-hidden border-[6px]
                           border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.5)]
                           transition-all duration-300 group-hover:scale-[1.07]
                           group-hover:shadow-[0_0_60px_rgba(168,85,247,0.8)]"
                >
                    <!-- Imagen principal -->
                    <img
                        src="/img/profile.jpg"
                        alt="Foto de Jonathan"
                        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                        style="opacity: {imgHover ? 0 : 1};"
                    />

                    <!-- Avatar al hacer hover -->
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

    <!-- INDICADOR DE SCROLL (tu imagen del mouse) -->
    <div class="flex justify-center mt-5">
        <div class="w-10 h-16 border-2 border-purple-400 rounded-3xl flex justify-center items-start p-2">
            <div class="w-2 h-3 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
    </div>

</section>

<style>

    /* BURBUJAS */
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

    /* FADE-IN */
    .fade-in {
        animation: fadeInAnimation 1s ease forwards;
        opacity: 0;
    }

    @keyframes fadeInAnimation {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
</style>
