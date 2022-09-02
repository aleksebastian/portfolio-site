<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaEnvelopeSquare from 'svelte-icons/fa/FaEnvelopeSquare.svelte';

	export let current;
	const unselectedLinkClass = 'transition ease-in-out text-lg hover:text-blue-500';
	const selectedLinkClass = 'text-lg text-red-900 dark:text-blue-200 underline';

	let y;
	$: y > 0
		? (navScrollClass = 'py-2 shadow-md dark:bg-[#1e1e1e] ')
		: (navScrollClass = 'dark:bg-[#121212] py-4');
	let navScrollClass;
</script>

<svelte:window bind:scrollY={y} />

<nav
	class={`ease-in-out transition-all duration-300 max-w-7xl top-0 left-0 px-8 fixed z-10 flex justify-between bg-white box-s dark:text-white w-full mb-12 ${navScrollClass}`}
>
	<a href="/" class="w-20 h-auto">
		<img
			width="158"
			height="144"
			class="w-full h-auto dark:invert"
			src="/logo.png"
			alt="Alek Ortiz logo"
		/>
	</a>
	<div class="self-end flex flex-col gap-5">
		<div class="flex justify-end gap-5">
			<a
				aria-label="Link to linkedin"
				href="https://linkedin.com/in/alek-ortiz/"
				rel="noopener"
				target="_blank"
				class="w-6 h-6 hover:scale-110 transition duration-300 ease-in-out will-change-transform hover:text-blue-500"
			>
				<FaLinkedin />
			</a>
			<a
				aria-label="Link to github"
				href="https://github.com/aleksebastian"
				rel="noopener"
				target="_blank"
				class="w-6 h-6 hover:scale-110 transition duration-300 ease-in-out will-change-transform hover:text-blue-500"
			>
				<FaGithubSquare />
			</a>
			<a
				aria-label="Link to email"
				href="mailto:aleksebastian@outlook.com"
				rel="noopener"
				target="_blank"
				class="w-6 h-6 hover:scale-110 transition duration-300 ease-in-out will-change-transform hover:text-blue-500"
			>
				<FaEnvelopeSquare />
			</a>
		</div>
		<div class="flex gap-5">
			<a class={current === '/' ? selectedLinkClass : unselectedLinkClass} href="/">Projects</a>
			<a class={current === '/resume' ? selectedLinkClass : unselectedLinkClass} href="/resume"
				>Resume</a
			>
			<a class={current === '/contact' ? selectedLinkClass : unselectedLinkClass} href="/contact"
				>Contact</a
			>
		</div>
	</div>
</nav>
