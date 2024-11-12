<script>
	import { run } from 'svelte/legacy';

	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaEnvelopeSquare from 'svelte-icons/fa/FaEnvelopeSquare.svelte';
	import { page } from '$app/stores';
	import { fade, slide } from 'svelte/transition';

	let { current } = $props();

	let isMobileNavOpen = $state(false);

	const handleNavToggle = () => {
		isMobileNavOpen = !isMobileNavOpen;
	};

	let y = $state();
	let navScrollClass = $state();
	let openMenuNavBackground = $state();

	$effect.pre() => {
		y > 5
			? (navScrollClass = 'py-2 shadow-md dark:bg-[#1e1e1e] ')
			: (navScrollClass = 'py-4 dark:bg-[#121212]');
	});

	$effect.pre() => {
		if (isMobileNavOpen && y === 0) {
			openMenuNavBackground = 'dark:bg-[#1e1e1e]';
		} else if (isMobileNavOpen && y > 0) {
			openMenuNavBackground = 'shadow-none';
		} else {
			openMenuNavBackground = 'dark:bg-[#121212]';
		}
	});

	const pageNames = {
		'/': 'Projects',
		'/resume': 'Resume',
		'/contact': 'Get in touch'
	};
</script>

<svelte:window bind:scrollY={y} />

<nav
	transition:fade={{ duration: 450 }}
	class={`ease-in-out transition-all duration-300 fixed p-8 top-0 left-0 z-20 flex w-full justify-between items-center h-auto bg-white rounded-b-lg  ${openMenuNavBackground} ${navScrollClass}`}
>
	<a href="/" class="w-14 h-auto" onclick={() => (isMobileNavOpen = false)}>
		<img
			width="56"
			height="56"
			class="w-[56px] h-auto dark:invert"
			src="/logo.png"
			alt="Alek Ortiz logo"
		/>
	</a>

	{#if y >= 84}
		<div transition:fade class="pageName absolute">{pageNames[$page.url.pathname]}</div>
	{/if}

	<button onclick={handleNavToggle} id="menuToggle">
		<span class={isMobileNavOpen ? 'firstToggled' : ''}></span>
		<span class={isMobileNavOpen ? 'secondToggled' : ''}></span>
		<span class={isMobileNavOpen ? 'thirdToggled' : ''}></span>
	</button>
</nav>

{#if isMobileNavOpen}
	<div
		in:fade={{ duration: 250 }}
		out:fade={{ duration: 250 }}
		id="menu"
		class="dark:bg-[#1e1e1e]/90 backdrop-blur bg-white/90 h-[100lvh]"
	>
		<div in:slide={{ delay: 175 }} class={current === '/' ? 'activeLink' : 'inactiveLink'}>
			<a href="/" onclick={handleNavToggle}>Projects</a>
		</div>
		<div in:slide={{ delay: 350 }} class={current === '/resume' ? 'activeLink' : 'inactiveLink'}>
			<a href="/resume" onclick={handleNavToggle}> Resume </a>
		</div>
		<div in:slide={{ delay: 525 }} class={current === '/contact' ? 'activeLink' : 'inactiveLink'}>
			<a href="/contact" onclick={handleNavToggle}> Contact </a>
		</div>
		<div in:slide={{ delay: 700, duration: 750 }} class="flex gap-10">
			<a
				aria-label="Link to linkedin"
				href="https://linkedin.com/in/alek-ortiz/"
				target="_blank"
				rel="noopener noreferrer"
				class="w-12 h-12"
				onclick={handleNavToggle}
			>
				<FaLinkedin />
			</a>
			<a
				aria-label="Link to github"
				href="https://github.com/aleksebastian"
				target="_blank"
				rel="noopener noreferrer"
				class="w-12 h-12"
				onclick={handleNavToggle}
			>
				<FaGithubSquare />
			</a>
			<a
				aria-label="Link to email"
				href="mailto:aleksebastian@outlook.com"
				target="_blank"
				rel="noopener noreferrer"
				class="w-12 h-12"
				onclick={handleNavToggle}
			>
				<FaEnvelopeSquare />
			</a>
		</div>
	</div>
{/if}

<style>
	.pageName {
		left: calc(50% - 2rem);
		z-index: -1;
	}

	#menuToggle {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	#menuToggle span {
		display: block;
		width: 33px;
		height: 4px;
		background: black;
		border-radius: 3px;
		z-index: 20;
		transform-origin: 4px 0px;
		transition:
			transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			opacity 0.55s ease;
	}

	.firstToggled {
		transform: rotate(45deg) translate(0px, -2.25px);
	}

	.secondToggled {
		opacity: 0;
		transform: rotate(0deg) scale(0.2, 0.2);
	}

	.thirdToggled {
		transform: rotate(-45deg) translate(0, -2.25px);
	}

	@media (prefers-color-scheme: dark) {
		#menu div {
			--tw-text-opacity: 1 !important;
			color: rgba(255, 255, 255, var(--tw-text-opacity)) !important;
		}
		#menu a {
			--tw-text-opacity: 1 !important;
			color: rgba(255, 255, 255, var(--tw-text-opacity)) !important;
		}

		#menuToggle span {
			--tw-text-opacity: 1 !important;
			background: rgba(255, 255, 255, var(--tw-text-opacity)) !important;
		}
	}

	#menu {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 8rem;
		list-style-type: none;
		-webkit-font-smoothing: antialiased;
		width: 100vw;
		height: 100vh;
		margin-left: -2rem;
		margin-top: -7rem;
		position: fixed;
		z-index: 15;
	}

	#menu {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#menu > div {
		padding: 15px 0;
		font-size: 22px;
	}

	#menu > div:last-child {
		padding: 30px 0;
	}

	button {
		z-index: 10;
	}
</style>
