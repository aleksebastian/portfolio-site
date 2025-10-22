<script lang="ts">
	import Icon, { loadIcon } from '@iconify/svelte';
	import type { PortfolioProject } from '$lib/types';

	let { repo } = $props<{ repo: PortfolioProject }>();

	async function checkIfIconExists(iconString: string): Promise<boolean> {
		try {
			await loadIcon(iconString);
			return true;
		} catch (error) {
			return false;
		}
	}
</script>

<div
	class="group w-80 h-80 overflow-hidden relative rounded
		background-white shadow-card justify-self-center cursor-default"
>
	<img
		src={repo.coverImage}
		alt="project mockup thumbnail"
		class="group w-full h-full object-cover object-mockup block transition duration-500 ease-in-out xl:dark:brightness-75 brightness-50 group-hover:brightness-50 dark:group-hover:brightness-[.25] xl:brightness-100 rounded-sm"
		width="300"
		height="300"
	/>
	<div
		class="self-end content-end w-full h-full top-0 xl:top-[85%] xl:group-hover:-translate-y-[85%] transition-tranform duration-500 ease-in-out absolute flex flex-col justify-between motion-reduce:transition-none motion-reduce:transform-none will-change-transform bg-[rgba(0,0,0,.45)]"
	>
		<div class="transition duration-250 ease-in-out h-12 flex items-center px-4 gap-4">
			{#each repo.topics as topic}
				{@const iconString = `simple-icons:${topic}`}
				{#await checkIfIconExists(iconString) then iconExists}
					{#if iconExists}
						{@const googleSearchUrl = `https://www.google.com/search?q=${topic}`}
						<a
							title={topic}
							href={googleSearchUrl}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Learn more about ${topic} technology`}
						>
							<Icon icon={iconString} height="27.5" color="white" />
						</a>
					{/if}
				{/await}
			{/each}
		</div>
		<div class="p-4">
			<h2 class="text-2xl text-white mb-1">
				{repo.name}
			</h2>
			<p class=" text-white mb-2 line-clamp-5">
				{repo.description}
			</p>
			<!-- <p class="text-sm text-gray-400 -mb-2">Click to go to Github repo</p> -->
			<div class="flex gap-4 py-1">
				{#if repo.homepage}
					<a
						href={repo.homepage}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Visit deployed ${repo.name} project`}
						class="underline underline-offset-2 text-blue-200 text-base visited:text-blue-400"
						>Deployed project</a
					>
				{/if}
				<a
					href={repo.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`View ${repo.name} source code on GitHub`}
					class="underline underline-offset-2 text-blue-200 text-base visited:text-blue-400"
					>Github repo</a
				>
			</div>
		</div>
	</div>
</div>
