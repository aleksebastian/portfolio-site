<script>
	import Icon from '@iconify/svelte';
	export let repo;
</script>

<div
	class="group w-80 h-80 overflow-hidden relative rounded
		background-white shadow-card justify-self-center cursor-default"
>
	<img
		src={repo.coverImage}
		alt="project mockup thumbnail"
		class="group w-full h-full object-cover object-mockup block transition duration-500 ease-in-out xl:dark:brightness-75 brightness-50 group-hover:brightness-50 dark:group-hover:brightness-[.25] xl:brightness-100 rounded"
		width="300"
		height="300"
	/>
	<div />
	<div
		class="self-end content-end w-full h-full top-0 xl:top-[85%] xl:group-hover:-translate-y-[85%] transition-tranform duration-500 ease-in-out absolute flex flex-col justify-between motion-reduce:transition-none motion-reduce:transform-none will-change-transform bg-[rgba(0,0,0,.45)]"
	>
		<div class="transition duration-[250ms] ease-in-out h-12 flex items-center px-4 gap-4">
			{#if repo.topics.length}
				{#each repo.topics as topic}
					<a title={topic} href={`https://www.google.com/search?q=${topic}`} target="_blank">
						<Icon icon={`simple-icons:${topic}`} height="27.5" color="white" />
					</a>
				{/each}
			{/if}
		</div>
		<div class="p-4">
			<h1 class="text-2xl text-white mb-1">
				{repo.name}
			</h1>
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
						aria-label="Link to github repository"
						class="underline underline-offset-2 text-blue-200 text-base visited:text-blue-400"
						>Deployed site</a
					>
				{/if}
				<a
					href={repo.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Link to github repository"
					class="underline underline-offset-2 text-blue-200 text-base visited:text-blue-400"
					>Github repo</a
				>
			</div>
		</div>
	</div>
</div>
