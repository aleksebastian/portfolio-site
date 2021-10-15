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
		<a class="flex gap-3" href="https://aleksebastian.dev/" target="_blank">
			<div class="hover:opacity-90 h-6 w-6">
				<FaUser />
			</div>
			<a
				class=" text-blue-500 hover:text-blue-700 visited:text-purple-500"
				href="https://aleksebastian.dev/"
				target="_blank">aleksebastian.dev</a
			>
		</a>

		<a class="flex gap-3" href="https://github.com/aleksebastian" target="_blank">
			<div class="hover:opacity-90 h-6 w-6">
				<FaGithubSquare />
			</div>
			<a
				class=" text-blue-500 hover:text-blue-700 visited:text-purple-500"
				href="https://github.com/aleksebastian"
				target="_blank">@aleksebastian</a
			>
		</a>

		<a class="flex gap-3" href="https://linkedin.com/in/alek-ortiz/" target="_blank">
			<div class="hover:opacity-90 h-6 w-6">
				<FaLinkedin />
			</div>
			<a
				class=" text-blue-500 hover:text-blue-700 visited:text-purple-500"
				href="https://linkedin.com/in/alek-ortiz/"
				target="_blank">LinkedIn</a
			>
		</a>

		<a class="flex gap-3" href="mailto:aleksebastian@outlook.com" target="_blank">
			<div class="hover:opacity-90 h-6 w-6">
				<FaEnvelopeSquare />
			</div>
			<a
				class=" text-blue-500 hover:text-blue-700 visited:text-purple-500"
				href="mailto:aleksebastian@outlook.com"
				target="_blank">aleksebastian@outlook.com</a
			>
		</a>
	</div>
</div>
