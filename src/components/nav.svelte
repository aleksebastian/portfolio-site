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
	const selectedLinkClass = 'mx-4 text-lg self-end text-red-900 underline';
</script>

<div>
	<div class="flex justify-around sm:justify-end sm:gap-3 -mt-3 mb-4 mr-4">
		<div class="w-6 h-6">
			<FaLinkedin />
		</div>
		<div class="w-6 h-6">
			<FaGithubSquare />
		</div>
		<div class="w-6 h-6">
			<FaEnvelopeSquare />
		</div>
	</div>
	<nav class="flex mt-1 mb-10">
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
