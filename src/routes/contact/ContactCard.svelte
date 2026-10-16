<script lang="ts">
	import Icon from '#lib/components/icons/Icon.svelte';
	import {
		envelopeSquare,
		githubSquare,
		linkedin,
		type IconData
	} from '#lib/components/icons/icons.js';
	import { fly } from 'svelte/transition';
	import Download from '../resume/Download.svelte';

	interface ContactLink {
		href: string;
		label: string;
		text: string;
		icon: IconData;
	}

	const contactLinks: ContactLink[] = [
		{
			href: 'https://github.com/aleksebastian',
			label: 'Link to github',
			text: '@aleksebastian',
			icon: githubSquare
		},
		{
			href: 'https://linkedin.com/in/alek-ortiz/',
			label: 'Link to linkedin',
			text: 'LinkedIn',
			icon: linkedin
		},
		{
			href: 'mailto:aleksebastian@outlook.com',
			label: 'Link to email',
			text: 'aleksebastian@outlook.com',
			icon: envelopeSquare
		}
	];
</script>

<div class="flex flex-col items-center gap-10">
	<div
		in:fly={{ y: 200, duration: 1000 }}
		class="shadow-card flex h-96 flex-col gap-6 rounded-sm border-2 border-black px-5 py-9 dark:border-white"
	>
		<p class="self-center text-3xl">Alek Ortíz</p>
		<p class="-mt-5 self-center">Software Engineer</p>
		<p class="-mt-1 w-11/12 self-center border-b-2 border-black dark:border-white"></p>

		{#each contactLinks as link (link.href)}
			<!-- eslint-disable svelte/no-navigation-without-resolve -->
			<a
				class="group flex gap-3 transition-colors duration-500 ease-in-out"
				aria-label={link.label}
				href={link.href}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div class="h-6 w-6 group-hover:opacity-90">
					<Icon icon={link.icon} />
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
