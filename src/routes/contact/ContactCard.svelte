<script lang="ts">
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaEnvelopeSquare from 'svelte-icons/fa/FaEnvelopeSquare.svelte';
	import FaUser from 'svelte-icons/fa/FaUser.svelte';
	import { fade, fly } from 'svelte/transition';

	interface ContactLink {
		href: string;
		label: string;
		text: string;
		icon: typeof FaUser | typeof FaGithubSquare | typeof FaLinkedin | typeof FaEnvelopeSquare;
	}

	const contactLinks: ContactLink[] = [
		{
			href: 'https://aleksebastian.dev/',
			label: 'Link to portfolio website',
			text: 'aleksebastian.dev',
			icon: FaUser
		},
		{
			href: 'https://github.com/aleksebastian',
			label: 'Link to github',
			text: '@aleksebastian',
			icon: FaGithubSquare
		},
		{
			href: 'https://linkedin.com/in/alek-ortiz/',
			label: 'Link to linkedin',
			text: 'LinkedIn',
			icon: FaLinkedin
		},
		{
			href: 'mailto:aleksebastian@outlook.com',
			label: 'Link to email',
			text: 'aleksebastian@outlook.com',
			icon: FaEnvelopeSquare
		}
	];
</script>

<div class="flex flex-col gap-10 items-center">
	<h1 in:fade class="text-4xl">Get in touch</h1>
	<div
		in:fly={{ y: 200, duration: 1000 }}
		class="flex gap-6 flex-col border-2 border-black dark:border-white rounded h-96 px-5 py-9 shadow-card"
	>
		<p class="self-center text-3xl">Alek Ortíz</p>
		<p class="self-center -mt-5">Software Engineer</p>
		<p class="self-center w-11/12 border-b-2 border-black dark:border-white -mt-1 mb-4"></p>
		
		{#each contactLinks as link}
			<a
				class="group flex gap-3 transition-colors duration-500 ease-in-out"
				aria-label={link.label}
				href={link.href}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div class="group-hover:opacity-90 h-6 w-6">
					<svelte:component this={link.icon} />
				</div>
				<span class="self-center text-sm leading-7 text-[#1565c0] group-hover:text-blue-700">
					{link.text}
				</span>
			</a>
		{/each}
	</div>
</div>

<style>
	@media (prefers-reduced-motion: reduce) {
		* {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			animation-delay: 0.01ms !important;
		}
	}
</style>
