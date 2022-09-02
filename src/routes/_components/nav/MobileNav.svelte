<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaEnvelopeSquare from 'svelte-icons/fa/FaEnvelopeSquare.svelte';
	import { isMobileNavOpen } from '$lib/store.js';
	import { fly } from 'svelte/transition';
	export let current;

	const handleNavToggle = () => {
		isMobileNavOpen.update((value) => !value);
	};

	const unselectedLinkClass = 'hover:text-blue-500';
	const selectedLinkClass = 'text-red-900 dark:text-blue-200 underline';
</script>

<nav class="flex w-screen justify-between items-center h-auto">
	<a href="/" class="w-14 h-auto">
		<img
			width="158"
			height="144"
			class="w-full h-auto dark:invert"
			src="/logo.png"
			alt="Alek Ortiz logo"
		/>
	</a>
	<button on:click={() => handleNavToggle()} id="menuToggle">
		<span class={$isMobileNavOpen ? 'firstToggled' : ''} />
		<span class={$isMobileNavOpen ? 'secondToggled' : ''} />
		<span class={$isMobileNavOpen ? 'thirdToggled' : ''} />
	</button>
</nav>

{#if $isMobileNavOpen}
	<div
		id="menu"
		class="bg-white dark:bg-[#1e1e1e]"
		in:fly={{ x: 1000, duration: 700 }}
		out:fly={{ x: 1000, duration: 2100 }}
	>
		<ul>
			<li class={current === '/' ? selectedLinkClass : unselectedLinkClass}>
				<a href="/" on:click={() => handleNavToggle()}>Projects</a>
			</li>
			<li class={current === '/resume' ? selectedLinkClass : unselectedLinkClass}>
				<a href="/resume" on:click={() => handleNavToggle()}> Resume </a>
			</li>
			<li class={current === '/contact' ? selectedLinkClass : unselectedLinkClass}>
				<a href="/contact" on:click={() => handleNavToggle()}> Contact </a>
			</li>
			<li class="flex gap-10 mt-10">
				<a
					aria-label="Link to linkedin"
					href="https://linkedin.com/in/alek-ortiz/"
					rel="noopener"
					target="_blank"
					class="w-12 h-12"
					on:click={() => handleNavToggle()}
				>
					<FaLinkedin />
				</a>
				<a
					aria-label="Link to github"
					href="https://github.com/aleksebastian"
					rel="noopener"
					target="_blank"
					class="w-12 h-12"
					on:click={() => handleNavToggle()}
				>
					<FaGithubSquare />
				</a>
				<a
					aria-label="Link to email"
					href="mailto:aleksebastian@outlook.com"
					rel="noopener"
					target="_blank"
					class="w-12 h-12"
					on:click={() => handleNavToggle()}
				>
					<FaEnvelopeSquare />
				</a>
			</li>
		</ul>
	</div>
{/if}

<style>
	#menuToggle span {
		display: block;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		background: black;
		border-radius: 3px;
		z-index: 1;
		transform-origin: 4px 0px;
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
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
		#menu li {
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
		/* padding: 50px; */
		padding-top: 8rem;
		list-style-type: none;
		-webkit-font-smoothing: antialiased;
		width: 100vw;
		height: 100vh;
		margin-left: -2rem;
		margin-top: -6rem;
		position: fixed;
		z-index: 5;
	}

	#menu ul {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#menu li {
		padding: 15px 0;
		font-size: 22px;
	}

	button {
		z-index: 10;
		margin-right: 4rem;
		/* position: absolute; */
	}
</style>
