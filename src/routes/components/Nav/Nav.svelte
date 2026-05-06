<script lang="ts">
	let isMenuOpen = $state(false);
	let time = $state('');

	const navLinks = [
		{ href: '#projects', label: 'Projects' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#contact', label: 'Contact' }
	];

	const closeMenu = () => {
		isMenuOpen = false;
	};

	const updateTime = () => {
		const now = new Date();
		time = now.toLocaleTimeString('en-US', {
			hour12: false,
			timeZone: 'America/Chicago',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		});
	};

	$effect(() => {
		updateTime();
		const timer = setInterval(updateTime, 1000);
		return () => clearInterval(timer);
	});
</script>

<nav class="fixed left-0 right-0 top-0 z-50 bg-[#0a0a0a]">
	<!-- Desktop info bar -->
	<div class="hidden border-b border-[#f0f0f0]/15 md:grid md:grid-cols-4">
		<a
			href="/"
			class="border-r border-[#f0f0f0]/15 px-6 py-[0.875rem] font-mono text-[11px] uppercase tracking-[0.09em] text-[#f0f0f0] transition-colors hover:text-[#F5F500]"
		>
			ALEK ORTIZ — PORTFOLIO/2026
		</a>

		<div class="border-r border-[#f0f0f0]/15 px-6 py-[0.875rem] font-mono text-[11px] uppercase tracking-[0.09em] text-[#f0f0f0]">
			AUSTIN/TX · 30.2672°N
		</div>

		<div class="border-r border-[#f0f0f0]/15 px-6 py-[0.875rem] font-mono text-[11px] uppercase tracking-[0.09em] text-[#f0f0f0]">
			LOCAL TIME · <span class="tabular-nums text-[#f0f0f0]/75">{time}</span> CT
		</div>

		<div class="px-6 py-[0.875rem] font-mono text-[11px] uppercase tracking-[0.09em] text-[#F5F500]">
			● AVAILABLE FOR CONTRACT WORK
		</div>
	</div>

	<!-- Mobile bar -->
	<div class="flex items-center justify-between border-b border-[#f0f0f0]/15 px-4 py-3 md:hidden">
		<a
			href="/"
			class="font-mono text-[10px] uppercase tracking-[0.16em] text-[#f0f0f0] transition-colors hover:text-[#F5F500]"
		>
			ALEK ORTIZ
		</a>

		<button
			class="flex w-6 flex-col justify-center gap-1 py-0.5"
			onclick={() => (isMenuOpen = !isMenuOpen)}
			aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
			aria-expanded={isMenuOpen}
			aria-controls="mobile-menu"
		>
			<span
				class={`block h-px w-full bg-[#f0f0f0] origin-center transition-all duration-200 ${
					isMenuOpen ? 'translate-y-1.5 rotate-45' : ''
				}`}
			></span>
			<span
				class={`block h-px w-full bg-[#f0f0f0] transition-all duration-200 ${
					isMenuOpen ? 'opacity-0' : ''
				}`}
			></span>
			<span
				class={`block h-px w-full bg-[#f0f0f0] origin-center transition-all duration-200 ${
					isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
				}`}
			></span>
		</button>
	</div>
</nav>

<!-- Mobile menu overlay -->
{#if isMenuOpen}
	<div
		id="mobile-menu"
		class="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col justify-center items-center gap-10 md:hidden"
	>
		<div class="font-mono text-[10px] uppercase tracking-[0.16em] text-[#F5F500]">
			● AVAILABLE FOR CONTRACT WORK
		</div>

		{#each navLinks as link}
			<a
				href={link.href}
				class="font-display font-bold text-4xl text-[#f0f0f0] hover:text-[#F5F500] transition-colors duration-200 uppercase"
				onclick={closeMenu}
			>
				{link.label}
			</a>
		{/each}
		<div class="mt-6 font-mono text-xs text-[#f0f0f0]/30 uppercase tracking-widest">
			AUSTIN/TX · {time} CT
		</div>
	</div>
{/if}

