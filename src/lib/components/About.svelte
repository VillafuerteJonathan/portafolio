<script>
	import TechModal from "$lib/components/TechModal.svelte";
	import { TECH } from "$lib/data/tech.js";
	import { onMount } from 'svelte';

	let modalOpen = false;
	let selectedCategory = null;
	let mousePosition = { x: 0, y: 0 };
	let cardRefs = [];
	let titleRef;

	// Efectos de partículas
	let particles = [];

	onMount(() => {
		// Inicializar partículas
		initializeParticles();
		
		// Animación de escritura para el título
		animateTitle();
	});

	function initializeParticles() {
		for (let i = 0; i < 20; i++) {
			particles.push({
				id: i,
				x: Math.random() * 100,
				y: Math.random() * 100,
				size: Math.random() * 2 + 1,
				speedX: (Math.random() - 0.5) * 0.5,
				speedY: (Math.random() - 0.5) * 0.5,
				opacity: Math.random() * 0.3 + 0.1
			});
		}
	}

	function animateTitle() {
		if (titleRef) {
			const letters = titleRef.querySelectorAll('.letter');
			letters.forEach((letter, index) => {
				letter.style.animationDelay = `${index * 0.1}s`;
			});
		}
	}

	function openModal(name) {
		selectedCategory = name;
		modalOpen = true;
		
		// Efecto de vibración al abrir modal
		cardRefs.forEach(card => {
			if (card) {
				card.style.transform = 'scale(0.95)';
				setTimeout(() => {
					card.style.transform = 'scale(1)';
				}, 150);
			}
		});
	}

	function closeModal() {
		modalOpen = false;
	}

	function handleMouseMove(event) {
		mousePosition.x = (event.clientX / window.innerWidth - 0.5) * 20;
		mousePosition.y = (event.clientY / window.innerHeight - 0.5) * 20;
	}

	function handleMouseEnter(card, index) {
		if (card) {
			card.style.transform = `translateY(-10px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`;
			card.style.boxShadow = `0 25px 50px -12px rgba(147, 51, 234, 0.5)`;
		}
	}

	function handleMouseLeave(card, index) {
		if (card) {
			card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
			card.style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.3)';
		}
	}

	function updateParticles() {
		particles = particles.map(particle => ({
			...particle,
			x: (particle.x + particle.speedX) % 100,
			y: (particle.y + particle.speedY) % 100
		}));
	}

	setInterval(updateParticles, 100);
</script>

<svelte:window on:mousemove={handleMouseMove} />

<section class="pt-32 pb-20 px-6 md:px-20 text-white relative overflow-hidden">

	<!-- Fondo de partículas -->
	<div class="absolute inset-0 pointer-events-none">
		{#each particles as particle}
			<div 
				class="absolute rounded-full bg-purple-400"
				style="
					left: {particle.x}%;
					top: {particle.y}%;
					width: {particle.size}px;
					height: {particle.size}px;
					opacity: {particle.opacity};
				"
			/>
		{/each}
	</div>

	<!-- ====================== TÍTULO PRINCIPAL ====================== -->
	<div class="text-center mb-14 relative z-10">
		<h1 
			bind:this={titleRef}
			class="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 text-transparent bg-clip-text mb-4"
		>
			{#each "Acerca de Mí".split('') as letter, i}
				<span class="letter inline-block animate-typing">{letter}</span>
			{/each}
		</h1>

		<p class="text-gray-300 mt-4 text-lg max-w-2xl mx-auto animate-fade-in-up">
			Descubre mi pasión por el desarrollo, mis habilidades técnicas y mi trayectoria dentro del mundo de la tecnología.
		</p>

		<!-- Efecto de brillo animado -->
		<div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
	</div>

	<!-- ====================== GRID PRINCIPAL ====================== -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">

		<!-- ---------------- TARJETA CONÓCEME ---------------- -->
		<div 
			class="bg-[#141c2f] rounded-2xl p-8 border border-white/5 shadow-xl relative group cursor-pointer transform-style-3d transition-all duration-500 hover:scale-105"
			style="transform: perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)"
			on:mouseenter={(e) => handleMouseEnter(e.currentTarget)}
			on:mouseleave={(e) => handleMouseLeave(e.currentTarget)}
		>
			<!-- Efecto de borde animado -->
			<div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur group-hover:blur-sm"></div>
			<div class="absolute inset-0 bg-[#141c2f] rounded-2xl"></div>
			
			<div class="relative z-10">
				<h2 class="text-2xl font-bold mb-3 flex items-center gap-2 animate-bounce-gentle">
					<span class="text-purple-400 text-3xl">{"</>"}</span>
					¡Conóceme!
				</h2>

				<p class="text-gray-300 leading-relaxed mb-3 transform transition-transform duration-300 group-hover:translate-x-2">
					Soy un <span class="text-purple-400 font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text animate-pulse">desarrollador fullstack apasionado</span> con enfoque en la creación de experiencias web modernas.
				</p>

				<p class="text-gray-400 transform transition-transform duration-300 group-hover:translate-x-2">
					Me encanta diseñar interfaces intuitivas, desarrollar APIs robustas y construir soluciones escalables con buenas prácticas de ingeniería.
				</p>

				<a href="#contacto"
				   class="mt-6 inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:skew-x-2 relative overflow-hidden group">
					<span class="relative z-10">Contáctame →</span>
					<div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
				</a>
			</div>
		</div>

		<!-- ---------------- TARJETA HABILIDADES ---------------- -->
		<div 
			class="bg-[#141c2f] rounded-2xl p-8 border border-white/5 shadow-xl relative group transform-style-3d transition-all duration-500"
			style="transform: perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)"
			on:mouseenter={(e) => handleMouseEnter(e.currentTarget)}
			on:mouseleave={(e) => handleMouseLeave(e.currentTarget)}
		>
			<!-- Efecto de borde animado -->
			<div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur group-hover:blur-sm"></div>
			<div class="absolute inset-0 bg-[#141c2f] rounded-2xl"></div>

			<div class="relative z-10">
				<h2 class="text-2xl font-bold mb-3 flex items-center gap-2">
					<span class="text-purple-400 text-3xl animate-spin-slow">🧩</span>
					Habilidades Técnicas
				</h2>

				<p class="text-gray-400 mb-4 transform transition-transform duration-300 group-hover:translate-x-2">
					Haz clic en una categoría para ver detalles:
				</p>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">

					{#each [
						{ key: "frontend", name: "Frontend", emoji: "🎨", color: "text-pink-400" },
						{ key: "backend", name: "Backend", emoji: "🛠️", color: "text-green-400" },
						{ key: "database", name: "Base de Datos", emoji: "🗄️", color: "text-yellow-400" },
						{ key: "devops", name: "DevOps", emoji: "⚙️", color: "text-blue-400" }
					] as category, index}
						<div 
							bind:this={cardRefs[index]}
							class="bg-[#1b263b] p-5 rounded-xl border border-white/5 cursor-pointer relative overflow-hidden group transform-style-3d transition-all duration-300 hover:scale-105"
							style="transform: perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)"
							on:click={() => openModal(category.key)}
							on:mouseenter={(e) => handleMouseEnter(e.currentTarget, index)}
							on:mouseleave={(e) => handleMouseLeave(e.currentTarget, index)}
						>
							<!-- Efecto de brillo al hover -->
							<div class="absolute inset-0 bg-gradient-to-br from-{category.color.replace('text-', '')}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							
							<!-- Partículas flotantes -->
							<div class="absolute inset-0 overflow-hidden">
								<div class="absolute w-2 h-2 bg-current rounded-full opacity-20 group-hover:opacity-40 transition-all duration-1000"
									style="top: 20%; left: 20%; animation: float 3s ease-in-out infinite;"></div>
								<div class="absolute w-1 h-1 bg-current rounded-full opacity-20 group-hover:opacity-40 transition-all duration-1000 delay-300"
									style="top: 60%; left: 70%; animation: float 4s ease-in-out infinite;"></div>
							</div>

							<span class="{category.color} text-3xl block transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">{category.emoji}</span>
							<p class="font-semibold mt-2 transform transition-transform duration-300 group-hover:translate-y-1">{category.name}</p>
							<p class="text-gray-400 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								{TECH[category.key].length} tecnologías
							</p>
						</div>
					{/each}

				</div>
			</div>
		</div>

	</div>

	<!-- ====================== HOBBIES ====================== -->
	<div 
		class="bg-[#141c2f] rounded-2xl p-8 border border-white/5 shadow-xl mt-10 relative group transform-style-3d transition-all duration-500"
		style="transform: perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)"
		on:mouseenter={(e) => handleMouseEnter(e.currentTarget)}
		on:mouseleave={(e) => handleMouseLeave(e.currentTarget)}
	>
		<!-- Efecto de borde animado -->
		<div class="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur group-hover:blur-sm"></div>
		<div class="absolute inset-0 bg-[#141c2f] rounded-2xl"></div>

		<div class="relative z-10">
			<h2 class="text-2xl font-bold mb-3 flex items-center gap-2">
				<span class="text-purple-400 text-3xl animate-bounce-gentle">⭐</span>
				Hobbies e Intereses
			</h2>

			<div class="space-y-4 mt-4">

				{#each [
					{ emoji: "⚽", title: "Fútbol", desc: "Jugar, entrenar y ver partidos" },
					{ emoji: "🎮", title: "Videojuegos", desc: "Shooter, estrategia y mundo abierto" },
					{ emoji: "🎬", title: "Cine", desc: "Terror, romance, acción y guerra" }
				] as hobby, index}
					<div 
						class="flex items-center gap-4 bg-[#1b263b] p-4 rounded-xl hover:bg-[#22314f] transition-all duration-300 border border-white/5 group/hobby transform hover:scale-105 hover:-translate-y-1 cursor-pointer"
						on:mouseenter={(e) => e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)'}
						on:mouseleave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
					>
						<span class="text-3xl transform transition-transform duration-300 group-hover/hobby:scale-125 group-hover/hobby:rotate-12">{hobby.emoji}</span>
						<div class="flex-1">
							<p class="font-semibold transform transition-transform duration-300 group-hover/hobby:translate-x-2">{hobby.title}</p>
							<p class="text-gray-400 text-sm transform transition-transform duration-300 group-hover/hobby:translate-x-2">{hobby.desc}</p>
						</div>
						<div class="w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover/hobby:opacity-100 transition-opacity duration-300 animate-ping"></div>
					</div>
				{/each}

			</div>
		</div>
	</div>

</section>

{#if modalOpen}
	<TechModal 
		category={selectedCategory} 
		tech={TECH[selectedCategory]} 
		on:close={closeModal} 
	/>
{/if}

<style>
	/* Animaciones personalizadas */
	@keyframes typing {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: translateY(0); }
	}

	@keyframes float {
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		50% { transform: translateY(-10px) rotate(180deg); }
	}

	@keyframes bounce-gentle {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-5px); }
	}

	@keyframes pulse-slow {
		0%, 100% { opacity: 0.3; }
		50% { opacity: 0.6; }
	}

	@keyframes spin-slow {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}

	@keyframes fade-in-up {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-typing {
		animation: typing 0.6s ease-out forwards;
		opacity: 0;
	}

	.animate-fade-in-up {
		animation: fade-in-up 1s ease-out 0.5s forwards;
		opacity: 0;
	}

	.animate-bounce-gentle {
		animation: bounce-gentle 2s ease-in-out infinite;
	}

	.animate-pulse-slow {
		animation: pulse-slow 3s ease-in-out infinite;
	}

	.animate-spin-slow {
		animation: spin-slow 8s linear infinite;
	}

	.transform-style-3d {
		transform-style: preserve-3d;
	}

	/* Mejoras de rendimiento para transformaciones 3D */
	.perspective-1000 {
		perspective: 1000px;
	}

	/* Suavizar las animaciones */
	* {
		transform-style: preserve-3d;
		backface-visibility: hidden;
	}
</style>