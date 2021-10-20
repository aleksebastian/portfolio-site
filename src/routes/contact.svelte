<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaEnvelopeSquare from 'svelte-icons/fa/FaEnvelopeSquare.svelte';
	import FaUser from 'svelte-icons/fa/FaUser.svelte';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div in:fade class="flex flex-col gap-10 items-center">
	<h1 class="text-4xl sm:-ml-5">Get in touch</h1>
	<div class="flex gap-5 flex-col">
		<a
			class="group flex gap-3"
			aria-label="Link to portfolio website"
			href="https://aleksebastian.dev/"
			rel="noopener"
			target="_blank"
		>
			<div class="transition ease-in-out group-hover:opacity-90 h-8 w-8">
				<FaUser />
			</div>
			<a
				class="self-center text-blue-500 transition ease-in-out group-hover:text-blue-700 visited:text-purple-500"
				aria-label="Link to portfolio website"
				href="https://aleksebastian.dev/"
				rel="noopener"
				target="_blank">aleksebastian.dev</a
			>
		</a>

		<a
			class="group flex gap-3"
			aria-label="Link to github"
			href="https://github.com/aleksebastian"
			rel="noopener"
			target="_blank"
		>
			<div class="transition ease-in-out group-hover:opacity-90 h-8 w-8">
				<FaGithubSquare />
			</div>
			<a
				class="self-center text-blue-500 transition ease-in-out group-hover:text-blue-700 visited:text-purple-500"
				aria-label="Link to github"
				href="https://github.com/aleksebastian"
				rel="noopener"
				target="_blank">@aleksebastian</a
			>
		</a>

		<a
			class="group flex gap-3"
			aria-label="Link to linkedin"
			href="https://linkedin.com/in/alek-ortiz/"
			rel="noopener"
			target="_blank"
		>
			<div class="transition ease-in-out group-hover:opacity-90 h-8 w-8">
				<FaLinkedin />
			</div>
			<a
				class="self-center text-blue-500 transition ease-in-out group-hover:text-blue-700 visited:text-purple-500"
				aria-label="Link to linkedin"
				href="https://linkedin.com/in/alek-ortiz/"
				rel="noopener"
				target="_blank">LinkedIn</a
			>
		</a>

		<a
			class="group flex gap-3 transition-colors duration-500 ease-in-out"
			aria-label="Link to email"
			href="mailto:aleksebastian@outlook.com"
			rel="noopener"
			target="_blank"
		>
			<div class="transition ease-in-out group-hover:opacity-90 h-8 w-8">
				<FaEnvelopeSquare />
			</div>
			<a
				class="self-center text-blue-500 transition ease-in-out group-hover:text-blue-700 visited:text-purple-500"
				aria-label="Link to email"
				href="mailto:aleksebastian@outlook.com"
				rel="noopener"
				target="_blank">aleksebastian@outlook.com</a
			>
		</a>
	</div>
</div>
