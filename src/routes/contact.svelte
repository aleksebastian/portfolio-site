<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaEnvelopeSquare from 'svelte-icons/fa/FaEnvelopeSquare.svelte';
	import FaUser from 'svelte-icons/fa/FaUser.svelte';
	import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div in:fade class="flex flex-col gap-10 items-center">
	<h1 class="text-5xl sm:-ml-5">Get in touch</h1>
	<div class="flex gap-5 flex-col">
		<div class="flex gap-3">
			<a href="https://github.com/aleksebastian" target="_blank" class="h-6 w-6">
				<FaUser />
			</a>
			<a
				class="underline text-blue-500 hover:text-blue-700 visited:text-purple-500"
				href="https://aleksebastian.dev/"
				target="_blank">aleksebastian.dev</a
			>
		</div>
		<div class="flex gap-3">
			<a href="https://github.com/aleksebastian" target="_blank" class="h-6 w-6">
				<FaGithubSquare />
			</a>
			<a
				class="underline text-blue-500 hover:text-blue-700 visited:text-purple-500"
				href="https://github.com/aleksebastian"
				target="_blank">@aleksebastian</a
			>
		</div>
		<div class="flex gap-3">
			<a href="https://linkedin.com/in/alek-ortiz/" target="_blank" class="h-6 w-6">
				<FaLinkedin />
			</a>
			<a
				class="underline text-blue-500 hover:text-blue-700 visited:text-purple-500"
				href="https://linkedin.com/in/alek-ortiz/"
				target="_blank">LinkedIn</a
			>
		</div>
		<div class="flex gap-3">
			<a href="mailto:aleksebastian@outlook.com" target="_blank" class="h-6 w-6">
				<FaEnvelopeSquare />
			</a>
			<a
				class="underline text-blue-500 hover:text-blue-700 visited:text-purple-500"
				href="mailto:aleksebastian@outlook.com"
				target="_blank">aleksebastian@outlook.com</a
			>
		</div>
	</div>
</div>
