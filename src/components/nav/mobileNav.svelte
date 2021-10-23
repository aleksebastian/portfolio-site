<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaEnvelopeSquare from 'svelte-icons/fa/FaEnvelopeSquare.svelte';

	import { page } from '$app/stores';
	$: {
		current = $page.path;
	}
	let current = $page.path;
	let navIsOpen = false;
	const unselectedLinkClass = 'hover:text-blue-500';
	const selectedLinkClass = 'text-red-900 dark:text-blue-200 underline';
</script>

<div class="flex justify-end mt-8 mb-10">
	<nav role="navigation" class="w-full flex justify-between">
		<a href="/" class="w-14 h-auto">
			<img
				width="158"
				height="144"
				class="w-full h-auto dark:invert -mt-5"
				src="/logo.png"
				alt="Alek Ortiz logo"
			/>
		</a>
		<div id="menuToggle">
			<input type="checkbox" bind:checked={navIsOpen} />

			<span />
			<span />
			<span />

			<ul id="menu" style={navIsOpen ? 'position:fixed' : 'position:absolute'}>
				<li class={current === '/' ? selectedLinkClass : unselectedLinkClass}>
					<a href="/" on:click={() => (navIsOpen = !navIsOpen)}>Projects</a>
				</li>
				<li class={current === '/resume' ? selectedLinkClass : unselectedLinkClass}>
					<a href="/resume" on:click={() => (navIsOpen = !navIsOpen)}> Resume </a>
				</li>
				<li class={current === '/contact' ? selectedLinkClass : unselectedLinkClass}>
					<a href="/contact" on:click={() => (navIsOpen = !navIsOpen)}> Contact </a>
				</li>
				<li class="flex gap-10 mt-10">
					<a
						aria-label="Link to linkedin"
						href="https://linkedin.com/in/alek-ortiz/"
						rel="noopener"
						target="_blank"
						class="w-12 h-12"
						on:click={() => (navIsOpen = !navIsOpen)}
					>
						<FaLinkedin />
					</a>
					<a
						aria-label="Link to github"
						href="https://github.com/aleksebastian"
						rel="noopener"
						target="_blank"
						class="w-12 h-12"
						on:click={() => (navIsOpen = !navIsOpen)}
					>
						<FaGithubSquare />
					</a>
					<a
						aria-label="Link to email"
						href="mailto:aleksebastian@outlook.com"
						rel="noopener"
						target="_blank"
						class="w-12 h-12"
						on:click={() => (navIsOpen = !navIsOpen)}
					>
						<FaEnvelopeSquare />
					</a>
				</li>
			</ul>
		</div>
	</nav>
</div>

<style>
	#menuToggle {
		display: block;
		position: relative;
		z-index: 1;
		-webkit-user-select: none;
		user-select: none;
	}

	#menuToggle a {
		text-decoration: none;
		color: #232323;
		transition: color 0.3s ease;
	}

	#menuToggle li:hover {
		color: tomato;
	}

	#menuToggle input {
		display: block;
		width: 40px;
		height: 72px;
		position: absolute;
		top: -7px;
		left: -5px;
		cursor: pointer;
		opacity: 0;
		z-index: 2;
		-webkit-touch-callout: none;
	}

	#menuToggle span {
		display: block;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		position: relative;
		background: black;
		border-radius: 3px;
		z-index: 1;
		transform-origin: 4px 0px;
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
	}

	#menuToggle span:first-child {
		transform-origin: 0% 0%;
	}

	#menuToggle span:nth-last-child(2) {
		transform-origin: 0% 100%;
	}

	#menuToggle input:checked ~ span {
		opacity: 1;
		transform: rotate(45deg) translate(-2px, -1px);
		background: #232323;
	}

	#menuToggle input:checked ~ span:nth-last-child(3) {
		opacity: 0;
		transform: rotate(0deg) scale(0.2, 0.2);
	}

	#menuToggle input:checked ~ span:nth-last-child(2) {
		transform: rotate(-45deg) translate(0, -1px);
	}

	@media (prefers-color-scheme: dark) {
		#menu {
			--tw-bg-opacity: 1 !important;
			background-color: rgba(31, 41, 55, var(--tw-bg-opacity)) !important;
		}
		#menu li {
			--tw-text-opacity: 1 !important;
			color: rgba(255, 255, 255, var(--tw-text-opacity)) !important;
		}
		#menu a {
			--tw-text-opacity: 1 !important;
			color: rgba(255, 255, 255, var(--tw-text-opacity)) !important;
		}
		#menuToggle input:checked ~ span {
			--tw-text-opacity: 1 !important;
			background: rgba(255, 255, 255, var(--tw-text-opacity)) !important;
		}
		#menuToggle span {
			--tw-text-opacity: 1 !important;
			background: rgba(255, 255, 255, var(--tw-text-opacity)) !important;
		}
	}

	#menu {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
		height: 100vh;
		margin: -100px 0 0 -81vw;
		padding: 50px;
		padding-top: 125px;
		background: white;
		list-style-type: none;
		-webkit-font-smoothing: antialiased;
		transform-origin: 0% 0%;
		transform: translate(100%, 0);
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
	}

	#menu li {
		padding: 10px 0;
		font-size: 22px;
	}

	#menuToggle input:checked ~ ul {
		transform: none;
	}
</style>
