<script>
	import { Github, Linkedin, Mail } from 'lucide-svelte';

	// ✔️ IMÁGENES DESDE lib/assets (CORRECTO)
	import opc1 from '$lib/assets/img/opc1.webp';
	import avatar from '$lib/assets/img/avatar.jpg';
	import hv from '$lib/pdf/micv.pdf';

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
	<div class="absolute inset-0 pointer-events-none z-0" role="presentation">
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

	<div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
		<!-- TEXTOS -->
		<div
			class="space-y-6 fade-in text-center md:text-left"
			role="button"
			tabindex="0"
			on:mouseenter={() => (titleHover = true)}
			on:mouseleave={() => (titleHover = false)}
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

			<div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
				<a
					href={hv}
					target="_blank"
					aria-label="Ver currículum"
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

			<div class="flex gap-6 pt-4 text-2xl justify-center md:justify-start">
				<a
					href="https://github.com/VillafuerteJonathan"
					target="_blank"
					class="p-2 rounded-xl bg-white/5 hover:bg-purple-600/30 transition-all border border-white/10"
				>
					<Github size={26} class="text-gray-300 hover:text-purple-400 transition" />
				</a>

				<a
					href="https://www.linkedin.com/in/eduardo-quispe-48a756381"
					target="_blank"
					class="p-2 rounded-xl bg-white/5 hover:bg-purple-600/30 transition-all border border-white/10"
				>
					<Linkedin size={26} class="text-gray-300 hover:text-purple-400 transition" />
				</a>

				<a
					href="https://discord.com/users/740763335343210556"
					target="_blank"
					class="p-2 rounded-xl bg-white/5 hover:bg-purple-600/30 transition-all border border-white/10"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="26"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="text-gray-300 hover:text-purple-400 transition"
					>
						<path
							d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.444.865-.608 1.25a18.27 18.27 0 00-5.48 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.683 4.369a.1.1 0 00-.042.018C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.026 13.83 13.83 0 001.176-1.906.074.074 0 00-.041-.103 13.175 13.175 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.009c.12.098.246.198.373.293a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.104c.338.63.699 1.237 1.175 1.906a.074.074 0 00.084.026 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.055c.5-5.177-.838-9.673-3.548-13.67a.09.09 0 00-.041-.018zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.946 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.946 2.419-2.157 2.419z"
						/>
					</svg>
				</a>

				<a
					href="https://mail.google.com/mail/?view=cm&fs=1&to=eduardovillaquis2@gmail.com"
					target="_blank"
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
				role="presentation"
				style="
                    transform: perspective(900px)
                    rotateX({mouseY * -0.3}deg)
                    rotateY({mouseX * 0.3}deg);
                "
				on:mouseenter={() => (imgHover = true)}
				on:mouseleave={() => (imgHover = false)}
			>
				<div
					class="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[180px] sm:w-[220px]
                           h-[60px] sm:h-[80px] bg-purple-700 blur-3xl opacity-40 rounded-full"
					role="presentation"
				></div>

				<div
					class="relative w-[240px] h-[340px] sm:w-[300px] sm:h-[400px]
                           rounded-full overflow-hidden border-[5px] sm:border-[6px]
                           border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.5)]
                           transition-all duration-300 group-hover:scale-[1.05]
                           group-hover:shadow-[0_0_60px_rgba(168,85,247,0.8)]"
				>
					<img
						src={opc1}
						alt="Foto"
						class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
						style="opacity: {imgHover ? 0 : 1};"
					/>

					<img
						src={avatar}
						alt="Avatar"
						class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
						style="opacity: {imgHover ? 1 : 0};"
					/>
				</div>
			</div>
		</div>
	</div>

	<!-- SCROLL -->
	<div class="flex justify-center mt-0">
		<div
			class="w-9 h-14 border-2 border-purple-400 rounded-3xl flex justify-center items-start p-2"
		>
			<div class="w-2 h-3 bg-purple-400 rounded-full animate-bounce"></div>
		</div>
	</div>
</section>
