<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaEnvelopeSquare from 'svelte-icons/fa/FaEnvelopeSquare.svelte';

	import { page } from '$app/stores';
	$: {
		current = $page.path;
	}
	let current = $page.path;
	const unselectedLinkClass = 'text-lg hover:text-blue-500';
	const selectedLinkClass = 'text-lg text-red-900 dark:text-blue-200 underline';
</script>

<nav role="navigation" class="flex justify-between dark:bg-gray-800 dark:text-white w-full mb-12">
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
				class="w-6 h-6"
			>
				<FaLinkedin />
			</a>
			<a
				aria-label="Link to github"
				href="https://github.com/aleksebastian"
				rel="noopener"
				target="_blank"
				class="w-6 h-6"
			>
				<FaGithubSquare />
			</a>
			<a
				aria-label="Link to email"
				href="mailto:aleksebastian@outlook.com"
				rel="noopener"
				target="_blank"
				class="w-6 h-6"
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
