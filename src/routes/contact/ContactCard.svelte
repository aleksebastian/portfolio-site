<script lang="ts">
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaEnvelopeSquare from 'svelte-icons/fa/FaEnvelopeSquare.svelte';
	import { fly } from 'svelte/transition';
	import Download from '../resume/Download.svelte';

	interface ContactLink {
		href: string;
		label: string;
		text: string;
		icon: typeof FaGithubSquare | typeof FaLinkedin | typeof FaEnvelopeSquare;
	}

	const contactLinks: ContactLink[] = [
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
	<div
		in:fly={{ y: 200, duration: 1000 }}
		class="flex gap-6 flex-col border-2 border-black dark:border-white rounded-sm h-96 px-5 py-9 shadow-card"
	>
		<p class="self-center text-3xl">Alek Ortíz</p>
		<p class="self-center -mt-5">Software Engineer</p>
		<p class="self-center w-11/12 border-b-2 border-black dark:border-white -mt-1"></p>

		{#each contactLinks as link (link.href)}
			<!-- eslint-disable svelte/no-navigation-without-resolve -->
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
			<!-- eslint-enable svelte/no-navigation-without-resolve -->
		{/each}

		<div class="w-full">
			<Download label="Download Resume" className="w-10/12 md:w-full mx-auto my-0" />
		</div>
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
