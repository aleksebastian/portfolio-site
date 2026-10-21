<script lang="ts">
	import { tick } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { site } from '#lib/site.js';

	let isMenuOpen = $state(false);
	let time = $state('');
	let theme = $state<'dark' | 'light'>('dark');
	let menuButton = $state<HTMLButtonElement>();
	let menuEl = $state<HTMLDivElement>();

	const navLinks = [
		{ href: '#projects', label: 'Projects' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#contact', label: 'Contact' }
	];

	// Skills is just a ticker that already sits on the first mobile screen; leave it out of the drawer.
	const mobileNavLinks = navLinks.filter((link) => link.href !== '#skills');

	const closeMenu = () => {
		isMenuOpen = false;
	};

	const applyTheme = (nextTheme: 'dark' | 'light') => {
		const root = document.documentElement;
		root.classList.remove('dark', 'light');
		root.classList.add(nextTheme);
		root.setAttribute('data-theme', nextTheme);
		try {
			localStorage.setItem('theme', nextTheme);
		} catch {
			// Storage can be blocked (private mode); the theme still applies for this visit.
		}
		theme = nextTheme;
	};

	const toggleTheme = () => {
		applyTheme(theme === 'dark' ? 'light' : 'dark');
	};

	const updateTime = () => {
		time = new Date().toLocaleTimeString('en-US', {
			hour12: false,
			timeZone: site.timeZone,
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		});
	};

	$effect(() => {
		theme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
		updateTime();
		const timer = setInterval(updateTime, 1000);
		return () => clearInterval(timer);
	});

	// While the overlay is open: lock page scroll, move focus into it, close on Escape.
	// The overlay is md:hidden, so also close it if the viewport widens past md.
	$effect(() => {
		if (!isMenuOpen) return;
		const desktop = window.matchMedia('(min-width: 768px)');
		if (desktop.matches) {
			closeMenu();
			return;
		}
		const onDesktopChange = (e: MediaQueryListEvent) => {
			if (e.matches) closeMenu();
		};
		desktop.addEventListener('change', onDesktopChange);
		document.body.style.overflow = 'hidden';
		tick().then(() => menuEl?.querySelector('a')?.focus());

		const onKeydown = (e: KeyboardEvent) => {
			if (e.key !== 'Escape') return;
			closeMenu();
			menuButton?.focus();
		};
		window.addEventListener('keydown', onKeydown);

		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', onKeydown);
			desktop.removeEventListener('change', onDesktopChange);
		};
	});

	const themeLabel = $derived(theme === 'dark' ? 'Lights On' : 'Lights Off');
	const displayTime = $derived(time || '--:--:--');
</script>

{#snippet themeButton(className: string)}
	<button
		type="button"
		onclick={toggleTheme}
		aria-label={`Turn lights ${theme === 'dark' ? 'on' : 'off'}`}
		class={`shrink-0 border border-(--c-line-20) px-2 py-1 text-center transition-colors hover:border-(--c-accent) hover:text-(--c-accent-text) ${className}`}
	>
		{themeLabel}
	</button>
{/snippet}

<nav class="sticky inset-x-0 top-0 z-50 bg-(--c-bg) md:fixed">
	<!-- Desktop info bar -->
	<div
		class="hidden border-b border-(--c-line-15) md:grid md:h-11 md:grid-cols-[1.1fr_0.9fr_0.9fr_1fr_auto] min-[90rem]:grid-cols-[1.1fr_0.9fr_0.9fr_1fr_auto_auto]"
	>
		<a
			href="/"
			class="flex h-full items-center border-r border-(--c-line-15) px-4 font-mono text-[11px] tracking-[0.09em] text-(--c-text) uppercase transition-colors hover:text-(--c-accent-text)"
		>
			{site.name} — PORTFOLIO/{new Date().getFullYear()}
		</a>

		<div
			class="flex h-full items-center border-r border-(--c-line-15) px-4 font-mono text-[10px] tracking-[0.07em] text-(--c-text) uppercase"
		>
			{site.city} · {site.latitude}
		</div>

		<div
			class="flex h-full items-center border-r border-(--c-line-15) px-4 font-mono text-[10px] tracking-[0.07em] text-(--c-text) uppercase"
		>
			LOCAL TIME · <span class="text-(--c-text-soft) tabular-nums">{displayTime}</span> CT
		</div>

		<div class="flex h-full items-center px-4 font-mono text-[10px] tracking-[0.08em] uppercase">
			<span class="whitespace-nowrap text-(--c-accent-text)">● {site.availability}</span>
		</div>

		<ul
			class="hidden h-full items-center gap-5 border-l border-(--c-line-15) px-4 font-mono text-[10px] tracking-[0.08em] uppercase min-[90rem]:flex"
		>
			{#each navLinks as link (link.href)}
				<li>
					<a
						href={link.href}
						class="text-(--c-text-soft) transition-colors hover:text-(--c-accent-text)"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<div
			class="flex h-full items-center justify-center border-l border-(--c-line-15) px-4 font-mono text-[10px] tracking-[0.08em] uppercase"
		>
			{@render themeButton('w-24 text-(--c-text-soft)')}
		</div>
	</div>

	<!-- Mobile bar -->
	<div class="flex items-center justify-between border-b border-(--c-line-15) px-4 py-3 md:hidden">
		<a
			href="/"
			class="font-mono text-[10px] tracking-[0.16em] text-(--c-text) uppercase transition-colors hover:text-(--c-accent-text)"
		>
			{site.name}
		</a>

		<div class="flex items-center gap-3">
			{@render themeButton(
				'w-28 font-mono text-[10px] tracking-[0.16em] text-(--c-text-muted) uppercase'
			)}

			<button
				bind:this={menuButton}
				type="button"
				class="relative flex size-11 shrink-0 items-center justify-center"
				onclick={() => (isMenuOpen = !isMenuOpen)}
				aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
				aria-expanded={isMenuOpen}
				aria-controls="mobile-menu"
			>
				<span class="relative h-3.75 w-5.5">
					<span
						class={`absolute inset-x-0 h-px origin-center bg-(--c-text) transition-all duration-250 ease-in-out ${
							isMenuOpen ? 'top-1.75 rotate-45' : 'top-0'
						}`}
					></span>
					<span
						class={`absolute inset-x-0 top-1.75 h-px bg-(--c-text) transition-all duration-250 ease-in-out ${
							isMenuOpen ? 'scale-x-0 opacity-0' : ''
						}`}
					></span>
					<span
						class={`absolute inset-x-0 h-px origin-center bg-(--c-text) transition-all duration-250 ease-in-out ${
							isMenuOpen ? 'top-1.75 -rotate-45' : 'bottom-0'
						}`}
					></span>
				</span>
			</button>
		</div>
	</div>
</nav>

<!-- Mobile menu overlay -->
{#if isMenuOpen}
	<div
		bind:this={menuEl}
		id="mobile-menu"
		transition:fade={{ duration: 200 }}
		class="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-(--c-bg) md:hidden"
	>
		<div
			in:fly={{ y: 10, delay: 80, duration: 250 }}
			class="font-mono text-[10px] tracking-[0.16em] text-(--c-accent-text) uppercase"
		>
			● {site.availability}
		</div>

		{#each mobileNavLinks as link, i (link.href)}
			<a
				href={link.href}
				in:fly={{ y: 16, delay: 120 + i * 60, duration: 280 }}
				class="font-display text-4xl font-bold text-(--c-text) uppercase transition-colors duration-200 hover:text-(--c-accent-text)"
				onclick={closeMenu}
			>
				{link.label}
			</a>
		{/each}
		<div
			in:fly={{ y: 10, delay: 120 + mobileNavLinks.length * 60, duration: 250 }}
			class="mt-6 font-mono text-xs tracking-widest text-(--c-text-faint) uppercase"
		>
			{site.city} · {displayTime} CT
		</div>
	</div>
{/if}
