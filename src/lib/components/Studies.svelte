<script>
    import { slideFrom } from "$lib/utils/slideFrom.js";
    import {
        GraduationCap,
        School,
        BriefcaseBusiness,
        MapPin,
        CalendarRange
    } from "lucide-svelte";

    const education = [
        {
            title: "Ingeniería en Software",
            institution: "Universidad Técnica de Ambato",
            location: "Ambato, Ecuador",
            date: "2020 - 2026",
            desc: "Formación sólida en desarrollo de software, arquitectura de sistemas, bases de datos, metodologías ágiles y buenas prácticas de ingeniería.",
            achievements: [
                "Proyecto de titulación con tecnologia innovadora",
                "Participación en conferencias y cursos prácticos",
                "Entusiasmo por el aprendizaje continuo y la mejora de habilidades"
            ]
        }
    ];

    const experience = [
        {
            title: "Desarrollador Full Stack",
            company: "Proyectos Freelance y Colaboraciones",
            location: "Ambato, Ecuador",
            date: "2022 - Actualidad",
            desc: "Diseño y desarrollo de aplicaciones web modernas, APIs REST, integración con servicios externos y despliegues en entornos productivos.",
            tasks: [
                "Construcción de interfaces con React",
                "Modelado de datos y consultas optimizadas",
                "Implementación de APIs REST",
                "Uso de Git, Docker y flujos CI/CD para despliegues",
                "Desarrollo de soluciones personalizadas para clientes variados"
            ]
        }
    ];
</script>

<section
    id="estudios"
    aria-label="Sección de educación y experiencia"
    class="pt-18 pb-24 px-6 md:px-20 text-white relative overflow-hidden"
>

    <!-- Glow de fondo -->
    <div class="pointer-events-none absolute inset-0 opacity-20">
        <div class="absolute -top-40 left-10 w-72 h-72 bg-purple-700/30 blur-[90px] rounded-full"></div>
        <div class="absolute bottom-0 right-10 w-80 h-80 bg-blue-500/25 blur-[95px] rounded-full"></div>
    </div>

    <!-- TÍTULO -->
    <div
        class="relative z-10 text-center mb-16"
        use:slideFrom={{ direction: "bottom", distance: 80, duration: 700 }}
    >
        <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur">
            <GraduationCap size={20} class="text-purple-400" />
            <span class="text-xs uppercase tracking-[0.2em] text-gray-300">
                Trayectoria
            </span>
        </div>

        <h1 class="text-4xl md:text-5xl font-extrabold mb-3">
            <span class="text-white">Educación</span>
            <span class="text-purple-400"> & Experiencia</span>
        </h1>

        <p class="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Un resumen de mi formación académica y experiencia profesional construyendo soluciones reales.
        </p>
    </div>

    <!-- TIMELINE GRID -->
    <div class="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 z-10">

        <!-- Línea central -->
        <div
            class="hidden md:block absolute left-1/2 top-2 bottom-2 w-[3px] rounded-full overflow-hidden"
            role="presentation"
        >
            <div class="w-full h-full bg-slate-800"></div>
            <div class="timeline-gradient"></div>
        </div>

        <!-- EDUCACIÓN -->
        <div class="space-y-10 relative">
            {#each education as edu}
                <article
                    aria-label={`Educación: ${edu.title}`}
                    use:slideFrom={{ direction: "left", distance: 110, duration: 750 }}
                    class="relative group bg-[#0b1220]/90 border border-white/10 rounded-2xl
                           p-7 md:p-8 transform-gpu transition-all duration-500
                           hover:-translate-y-3 hover:-rotate-1 hover:shadow-2xl hover:shadow-purple-900/40
                           hover:border-purple-500/60"
                >
                    <!-- Punto -->
                    <div
                        class="hidden md:flex absolute -right-[38px] top-10 items-center justify-center"
                        role="presentation"
                    >
                        <div class="w-4 h-4 rounded-full bg-slate-900 border border-purple-400 shadow-lg shadow-purple-500/60 relative">
                            <div class="absolute inset-0 rounded-full border border-purple-400/60 animate-ping-slow"></div>
                        </div>
                    </div>

                    <!-- Header -->
                    <header class="flex items-start md:items-center gap-3 mb-4">
                        <div
                            class="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-purple-500/10 border border-purple-400/40
                                   flex items-center justify-center shadow-lg shadow-purple-900/40
                                   transform-gpu transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                        >
                            <School size={22} class="text-purple-300" />
                        </div>

                        <div>
                            <h2 class="text-xl md:text-2xl font-bold text-purple-200">
                                {edu.title}
                            </h2>
                            <p class="text-gray-300 font-medium text-sm md:text-base">
                                {edu.institution}
                            </p>
                        </div>
                    </header>

                    <!-- Meta -->
                    <div class="flex flex-wrap items-center gap-3 text-gray-400 text-xs md:text-sm mb-3">
                        <span class="inline-flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full">
                            <MapPin size={14} class="text-purple-300" />
                            <span>{edu.location}</span>
                        </span>

                        <span class="inline-flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full">
                            <CalendarRange size={14} class="text-purple-300" />
                            <span>{edu.date}</span>
                        </span>
                    </div>

                    <p class="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-4">
                        {edu.desc}
                    </p>

                    <h3 class="text-sm font-semibold text-gray-100 mb-2 flex items-center gap-2">
                        
                        Logros destacados
                    </h3>

                    <ul class="text-gray-300 text-sm space-y-1.5">
                        {#each edu.achievements as ach}
                            <li class="flex gap-2">
                                <span class="mt-[6px] w-1.5 h-1.5 rounded-full bg-purple-400/80 shrink-0"></span>
                                <span>{ach}</span>
                            </li>
                        {/each}
                    </ul>
                </article>
            {/each}
        </div>

        <!-- EXPERIENCIA -->
        <div class="space-y-10 relative">
            {#each experience as exp}
                <article
                    aria-label={`Experiencia: ${exp.title}`}
                    use:slideFrom={{ direction: "right", distance: 110, duration: 750 }}
                    class="relative group bg-[#0b1220]/90 border border-white/10 rounded-2xl
                           p-7 md:p-8 transform-gpu transition-all duration-500
                           hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl hover:shadow-blue-900/40
                           hover:border-blue-500/60"
                >
                    <!-- Punto -->
                    <div
                        class="hidden md:flex absolute -left-[38px] top-10 items-center justify-center"
                        role="presentation"
                    >
                        <div class="w-4 h-4 rounded-full bg-slate-900 border border-blue-400 shadow-lg shadow-blue-500/60 relative">
                            <div class="absolute inset-0 rounded-full border border-blue-400/60 animate-ping-slow"></div>
                        </div>
                    </div>

                    <!-- Header -->
                    <header class="flex items-start md:items-center gap-3 mb-4">
                        <div
                            class="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-blue-500/10 border border-blue-400/40
                                   flex items-center justify-center shadow-lg shadow-blue-900/40
                                   transform-gpu transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                        >
                            <BriefcaseBusiness size={22} class="text-blue-300" />
                        </div>

                        <div>
                            <h2 class="text-xl md:text-2xl font-bold text-blue-200">
                                {exp.title}
                            </h2>
                            <p class="text-gray-300 font-medium text-sm md:text-base">
                                {exp.company}
                            </p>
                        </div>
                    </header>

                    <!-- Meta -->
                    <div class="flex flex-wrap items-center gap-3 text-gray-400 text-xs md:text-sm mb-3">
                        <span class="inline-flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full">
                            <MapPin size={14} class="text-blue-300" />
                            <span>{exp.location}</span>
                        </span>

                        <span class="inline-flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full">
                            <CalendarRange size={14} class="text-blue-300" />
                            <span>{exp.date}</span>
                        </span>
                    </div>

                    <p class="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-4">
                        {exp.desc}
                    </p>

                    <h3 class="text-sm font-semibold text-gray-100 mb-2 flex items-center gap-2">
                       
                        Responsabilidades
                    </h3>

                    <ul class="text-gray-300 text-sm space-y-1.5">
                        {#each exp.tasks as task}
                            <li class="flex gap-2">
                                <span class="mt-[6px] w-1.5 h-1.5 rounded-full bg-blue-400/80 shrink-0"></span>
                                <span>{task}</span>
                            </li>
                        {/each}
                    </ul>
                </article>
            {/each}
        </div>
    </div>
</section>

<style>
    .timeline-gradient {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to bottom,
            rgba(168, 85, 247, 0),
            rgba(168, 85, 247, 0.7),
            rgba(59, 130, 246, 0.8),
            rgba(168, 85, 247, 0.7),
            rgba(168, 85, 247, 0)
        );
        animation: timeline-flow 5s linear infinite;
        opacity: 0.9;
    }

    @keyframes timeline-flow {
        0% { transform: translateY(-100%); }
        50% { transform: translateY(0%); }
        100% { transform: translateY(100%); }
    }

    .animate-ping-slow {
        animation: ping-slow 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    @keyframes ping-slow {
        0% { transform: scale(1); opacity: 0.8; }
        80% { transform: scale(1.7); opacity: 0; }
        100% { transform: scale(1.9); opacity: 0; }
    }
</style>
