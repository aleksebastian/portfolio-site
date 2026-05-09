<script lang="ts">
	import { onMount } from 'svelte';

	let isMenuOpen = $state(false);
	let time = $state('');
	let theme = $state<'dark' | 'light'>('dark');

	const navLinks = [
		{ href: '#projects', label: 'Projects' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#contact', label: 'Contact' }
	];

	const closeMenu = () => {
		isMenuOpen = false;
	};

	const applyTheme = (nextTheme: 'dark' | 'light') => {
		const root = document.documentElement;
		root.classList.remove('dark', 'light');
		root.classList.add(nextTheme);
		root.setAttribute('data-theme', nextTheme);
		localStorage.setItem('theme', nextTheme);
		theme = nextTheme;
	};

	const toggleTheme = () => {
		applyTheme(theme === 'dark' ? 'light' : 'dark');
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

	onMount(() => {
		theme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
	});
</script>

<nav class="sticky inset-x-0 top-0 z-50 bg-(--c-bg) md:fixed md:inset-x-0 md:top-0">
	<!-- Desktop info bar -->
	<div
		class="hidden border-b border-(--c-line-15) md:grid md:h-15 md:grid-cols-[1.1fr_0.9fr_0.9fr_1fr_auto]"
	>
		<a
			href="/"
			class="flex h-full items-center border-r border-(--c-line-15) px-4 font-mono text-[11px] uppercase tracking-[0.09em] text-(--c-text) transition-colors hover:text-(--c-accent)"
		>
			ALEK ORTIZ — PORTFOLIO/2026
		</a>

		<div
			class="flex h-full items-center border-r border-(--c-line-15) px-4 font-mono text-[10px] uppercase tracking-[0.07em] text-(--c-text)"
		>
			AUSTIN/TX · 30.2672°N
		</div>

		<div
			class="flex h-full items-center border-r border-(--c-line-15) px-4 font-mono text-[10px] uppercase tracking-[0.07em] text-(--c-text)"
		>
			LOCAL TIME · <span class="tabular-nums text-(--c-text-75)">{time}</span> CT
		</div>

		<div class="flex h-full items-center px-4 font-mono text-[10px] uppercase tracking-[0.08em]">
			<span class="whitespace-nowrap text-(--c-accent)">● AVAILABLE FOR CONTRACT WORK</span>
		</div>

		<div
			class="flex h-full items-center justify-center border-l border-(--c-line-15) px-4 font-mono text-[10px] uppercase tracking-[0.08em]"
		>
			<button
				onclick={toggleTheme}
				aria-label={`Turn lights ${theme === 'dark' ? 'on' : 'off'}`}
				class="w-24 shrink-0 border border-(--c-line-20) px-2 py-1 text-center text-(--c-text-75) transition-colors hover:border-(--c-accent) hover:text-(--c-accent)"
			>
				{theme === 'dark' ? 'Lights On' : 'Lights Off'}
			</button>
		</div>
	</div>

	<!-- Mobile bar -->
	<div class="flex items-center justify-between border-b border-(--c-line-15) px-4 py-3 md:hidden">
		<a
			href="/"
			class="font-mono text-[10px] uppercase tracking-[0.16em] text-(--c-text) transition-colors hover:text-(--c-accent)"
		>
			ALEK ORTIZ
		</a>

		<div class="flex items-center gap-3">
			<button
				onclick={toggleTheme}
				aria-label={`Turn lights ${theme === 'dark' ? 'on' : 'off'}`}
				class="w-28 shrink-0 border border-(--c-line-20) px-2 py-1 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-(--c-text-70) transition-colors hover:border-(--c-accent) hover:text-(--c-accent)"
			>
				{theme === 'dark' ? 'Lights On' : 'Lights Off'}
			</button>

			<button
				class="flex w-6 flex-col justify-center gap-1 py-0.5"
				onclick={() => (isMenuOpen = !isMenuOpen)}
				aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
				aria-expanded={isMenuOpen}
				aria-controls="mobile-menu"
			>
				<span
					class={`block h-px w-full bg-(--c-text) origin-center transition-all duration-200 ${
						isMenuOpen ? 'translate-y-1.5 rotate-45' : ''
					}`}
				></span>
				<span
					class={`block h-px w-full bg-(--c-text) transition-all duration-200 ${
						isMenuOpen ? 'opacity-0' : ''
					}`}
				></span>
				<span
					class={`block h-px w-full bg-(--c-text) origin-center transition-all duration-200 ${
						isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
					}`}
				></span>
			</button>
		</div>
	</div>
</nav>

<!-- Mobile menu overlay -->
{#if isMenuOpen}
	<div
		id="mobile-menu"
		class="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-(--c-bg) md:hidden"
	>
		<div class="font-mono text-[10px] uppercase tracking-[0.16em] text-(--c-accent)">
			● AVAILABLE FOR CONTRACT WORK
		</div>

		{#each navLinks as link (link.href)}
			<a
				href={link.href}
				class="font-display text-4xl font-bold uppercase text-(--c-text) transition-colors duration-200 hover:text-(--c-accent)"
				onclick={closeMenu}
			>
				{link.label}
			</a>
		{/each}
		<div class="mt-6 font-mono text-xs uppercase tracking-widest text-(--c-text-30)">
			AUSTIN/TX · {time} CT
		</div>
	</div>
{/if}
