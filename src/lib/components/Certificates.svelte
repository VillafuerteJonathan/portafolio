<script>
    import { CERTIFICATES } from "$lib/data/certificates.js";
    import { onMount } from "svelte";
    import CertificateModal from "$lib/components/CertificateModal.svelte";

    let selectedIndex = 0;
    let modalOpen = false;
    let currentSlide = 0;

    let swiperEl; // referencia segura

    function openModal(index) {
        selectedIndex = index;
        modalOpen = true;
    }

    function closeModal() {
        modalOpen = false;
    }

    onMount(async () => {
        const { register } = await import("swiper/element/bundle");
        register();

        swiperEl = document.querySelector("#cert-swiper");

        if (!swiperEl) return;

        swiperEl.params = {
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: true,
            pagination: { clickable: true },
            breakpoints: {
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1.2 }
            }
        };

        swiperEl.initialize();

        swiperEl.addEventListener("slidechange", (e) => {
            const idx = e.detail[0]?.activeIndex;
            if (idx !== undefined) currentSlide = idx;
        });
    });

    function goPrev() {
        swiperEl?.swiper?.slidePrev();
    }
    function goNext() {
        swiperEl?.swiper?.slideNext();
    }
    function goTo(i) {
        swiperEl?.swiper?.slideTo(i);
    }
</script>

<section id="certificados" class="pt-2 pb-8 px-6 md:px-66 text-white relative">

    <div class="text-center mb-8">
        <h1 class="text-5xl font-extrabold">
            <span>Certificados</span>
            <span class="text-purple-400"> y Participaciones</span>
        </h1>
        <p class="text-gray-400 text-xl mt-3">
            Formación continua y reconocimientos profesionales
        </p>
    </div>

    <!-- Swiper -->
    <swiper-container id="cert-swiper" class="block w-full pb-10">

        {#each CERTIFICATES as c, index}
            <swiper-slide>
                <button
                    on:click={() => openModal(index)}
                    aria-label={`Abrir certificado ${c.title}`}
                    type="button"
                    class="bg-[#141c2f] border border-white/10 rounded-2xl p-6 shadow-xl 
                           hover:shadow-purple-900/40 transition-all duration-500 
                           group relative w-full h-full text-left"
                >
                    <div class="w-full flex justify-center mb-4">
                        <img
                            src={c.image}
                            alt={c.title}
                            class="rounded-xl w-[70%] max-h-[200px] object-contain group-hover:opacity-80 transition"
                        />
                    </div>

                    <div 
                        class="absolute inset-0 flex items-center justify-center text-white text-lg 
                               font-semibold opacity-0 group-hover:opacity-100 
                               transition bg-black/40 rounded-xl pointer-events-none">
                        Click para ampliar
                    </div>

                    <div class="mt-4 text-center">
                        <h3 class="text-xl font-bold text-purple-300 mb-2">{c.title}</h3>
                        <p class="text-gray-300 text-sm">Emitido por: <b>{c.institution}</b></p>
                        <p class="text-gray-500 text-sm mt-1">Fecha: {c.date}</p>
                    </div>

                </button>
            </swiper-slide>
        {/each}

    </swiper-container>

    <!-- CONTROLES PERSONALIZADOS -->
    <div class="flex justify-center items-center gap-8 mt-2">

        <!-- Botón Anterior -->
        <button 
            on:click={goPrev}
            class="p-3 rounded-full bg-[#1e2a3f] hover:bg-purple-900/30 border border-white/10 
                   transition-all duration-300 hover:scale-110"
            aria-label="Certificado anterior"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>

        <!-- Indicadores -->
        <div class="flex gap-3">
            {#each CERTIFICATES as _, i}
                <button 
                    on:click={() => goTo(i)}
                    class={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === i ? "bg-purple-500 scale-125" : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Ir al certificado ${i + 1}`}
                    type="button"
                ></button>
            {/each}
        </div>

        <!-- Botón Siguiente -->
        <button 
            on:click={goNext}
            class="p-3 rounded-full bg-[#1e2a3f] hover:bg-purple-900/30 border border-white/10 
                   transition-all duration-300 hover:scale-110"
            aria-label="Siguiente certificado"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>

    </div>

    <!-- MODAL -->
    {#if modalOpen}
        <CertificateModal
            open={modalOpen}
            title={CERTIFICATES[selectedIndex].title}
            image={CERTIFICATES[selectedIndex].image}
            institution={CERTIFICATES[selectedIndex].institution}
            date={CERTIFICATES[selectedIndex].date}
            on:close={closeModal}
        />
    {/if}

</section>

<style>
    swiper-container {
        --swiper-navigation-color: #a855f7;
        --swiper-pagination-color: #a855f7;
        --swiper-navigation-size: 24px;
    }

    swiper-container::part(button-prev),
    swiper-container::part(button-next) {
        background: rgba(168, 85, 247, 0.1);
        border-radius: 50%;
        width: 44px;
        height: 44px;
        backdrop-filter: blur(10px);
    }

    swiper-container::part(button-prev):hover,
    swiper-container::part(button-next):hover {
        background: rgba(168, 85, 247, 0.2);
    }
</style>
