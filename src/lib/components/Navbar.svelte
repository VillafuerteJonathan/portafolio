<script>
	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<!-- BACKGROUND GLOW -->
<div class="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-purple-900/20 to-transparent blur-3xl pointer-events-none"></div>

<!-- NAVBAR -->
<nav
	class="fixed top-0 left-0 right-0 h-[70px] z-50 px-8 md:px-14 flex items-center justify-between 
           transition-all duration-300 bg-black/25 backdrop-blur-2xl border-b border-white/10 shadow-lg"
>

	<!-- LOGO -->
	<a
		href="/"
		class="text-2xl font-bold tracking-tight select-none text-white relative group"
		aria-label="Ir al inicio"
	>
		<span class="group-hover:text-purple-400 transition">JV</span>

		<!-- Glow -->
		<div class="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition bg-purple-500 rounded-full"></div>
	</a>

	<!-- MENÚ DESKTOP -->
	<ul class="hidden md:flex gap-12 text-[15px] font-medium">
		{#each [
			['Inicio', '/'],
			['Sobre Mí', '#sobre-mi'],
			['Proyectos', '#proyectos'],
			['Certificados', '#certificados'],
			['Estudios', '/estudios'],
			['Contacto', '#contacto']
		] as item}
			<li>
				<a
					href={item[1]}
					class="relative text-gray-300 hover:text-white transition group"
				>
					{item[0]}

					<!-- SUBRAYADO -->
					<span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300"></span>
				</a>
			</li>
		{/each}
	</ul>

	<!-- BOTÓN MENÚ MOBILE -->
	<button 
		class="md:hidden text-white text-3xl" 
		on:click={toggleMenu}
		aria-label="Abrir menú móvil"
	>
		{#if isOpen} ✕ {:else} ☰ {/if}
	</button>

</nav>

<!-- MENÚ MÓVIL -->
{#if isOpen}
	<div
		class="md:hidden fixed top-[70px] left-0 right-0 bg-black/40 backdrop-blur-xl
		       border-b border-white/5 px-8 py-6 text-lg text-gray-200 flex flex-col gap-6 z-40 animate-fadeIn"
		aria-label="Menú móvil"
	>
		{#each [
			['Inicio', '/'],
			['Sobre Mí', '#sobre-mi'],
			['Proyectos', '#proyectos'],
			['Certificados', '#certificados'],
			['Estudios', '/estudios'],
			['Contacto', '#contacto']
		] as item}
			<a class="hover:text-purple-300 transition" href={item[1]} on:click={() => isOpen = false}>
				{item[0]}
			</a>
		{/each}
	</div>
{/if}

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-6px);
		}
		to {
			opacity: 1;
		}
	}

	.animate-fadeIn {
		animation: fadeIn 0.25s ease-out;
	}
</style>
