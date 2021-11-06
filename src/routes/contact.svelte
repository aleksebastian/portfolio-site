<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaEnvelopeSquare from 'svelte-icons/fa/FaEnvelopeSquare.svelte';
	import FaUser from 'svelte-icons/fa/FaUser.svelte';
	import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Alek Ortiz | Contact</title>
</svelte:head>

<div class="flex flex-col gap-10 items-center h-screen">
	<h1 in:fade class="text-4xl">Get in touch</h1>
	<div
		in:fly={{ y: 200, duration: 1000 }}
		class="flex gap-6 flex-col border-2 border-black dark:border-white rounded h-96 px-5 py-9  shadow-card"
	>
		<p class="self-center text-3xl">Alek Ortíz</p>
		<p class="self-center -mt-5">Software Engineer</p>
		<p class="self-center w-11/12 border-b-2 border-black dark:border-white -mt-1 mb-4" />
		<a
			class="group flex gap-3"
			aria-label="Link to portfolio website"
			href="https://aleksebastian.dev/"
			rel="noopener"
			target="_blank"
		>
			<div class="group-hover:opacity-90 h-6 w-6">
				<FaUser />
			</div>
			<a
				class="sel text-sm text-blue-500 leading-7 group-hover:text-blue-700"
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
			<div class="group-hover:opacity-90 h-6 w-6">
				<FaGithubSquare />
			</div>
			<a
				class="self-center text-sm leading-7 text-blue-500 group-hover:text-blue-700"
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
			<div class="group-hover:opacity-90 h-6 w-6">
				<FaLinkedin />
			</div>
			<a
				class="sel text-sm text-blue-500 leading-7 group-hover:text-blue-700"
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
			<div class="group-hover:opacity-90 h-6 w-6">
				<FaEnvelopeSquare />
			</div>
			<a
				class="sel text-sm text-blue-500 leading-7 group-hover:text-blue-700"
				aria-label="Link to email"
				href="mailto:aleksebastian@outlook.com"
				rel="noopener"
				target="_blank">aleksebastian@outlook.com</a
			>
		</a>
	</div>
</div>
