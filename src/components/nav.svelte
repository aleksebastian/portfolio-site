<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaEnvelopeSquare from 'svelte-icons/fa/FaEnvelopeSquare.svelte';

	import { page } from '$app/stores';
	$: {
		current = $page.path;
	}
	let current = $page.path;
	const unselectedLinkClass = 'mx-4 text-lg self-end hover:text-blue-500';
	const selectedLinkClass = 'mx-4 text-lg self-end text-red-900 dark:text-blue-200 underline';
</script>

<div class="dark:bg-gray-800 dark:text-white">
	<div class="flex justify-around sm:justify-end sm:gap-5 -mt-3 mb-4 sm:mr-4">
		<a href="https://linkedin.com/in/alek-ortiz/" target="_blank" class="w-6 h-6">
			<FaLinkedin />
		</a>
		<a href="https://github.com/aleksebastian" target="_blank" class="w-6 h-6">
			<FaGithubSquare />
		</a>
		<a href="mailto:aleksebastian@outlook.com" target="_blank" class="w-6 h-6">
			<FaEnvelopeSquare />
		</a>
	</div>
	<nav class="flex mt-1 mb-12">
		<a class="mx-4 text-lg flex-grow" href="/">Alek Ortiz</a>
		<a class={current === '/' ? selectedLinkClass : unselectedLinkClass} href="/">Projects</a>
		<a class={current === '/resume' ? selectedLinkClass : unselectedLinkClass} href="/resume"
			>Resume</a
		>
		<a class={current === '/contact' ? selectedLinkClass : unselectedLinkClass} href="/contact"
			>Contact</a
		>
	</nav>
</div>

<style>
</style>
