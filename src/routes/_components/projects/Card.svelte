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
		class="self-end content-end w-full h-full top-0 xl:top-3/4 xl:group-hover:-translate-y-3/4 transition-tranform duration-500 ease-in-out absolute flex flex-col justify-between motion-reduce:transition-none motion-reduce:transform-none will-change-transform"
	>
		<div
			class={`transition duration-[250ms] ease-in-out ${
				repo.topics.length ? 'xl:bg-[rgba(0,0,0,.45)]' : ''
			} group-hover:bg-transparent h-20 flex items-center px-4 gap-4`}
		>
			{#if repo.topics.length}
				{#each repo.topics as topic}
					<a title={topic} href={`https://www.google.com/search?q=${topic}`} target="_blank">
						<Icon icon={`simple-icons:${topic}`} height="35" color="white" />
					</a>
				{/each}
			{/if}
		</div>
		<div class="p-4">
			<h1 class="text-2xl text-white mb-2">
				{repo.name}
			</h1>
			<p class=" text-white mb-2 line-clamp-5">
				{repo.description}
			</p>
			<!-- <p class="text-sm text-gray-400 -mb-2">Click to go to Github repo</p> -->
			<div class="flex gap-4">
				{#if repo.homepage}
					<a
						href={repo.homepage}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Link to github repository"
						class="p-2 rounded text-black bg-white bg-opacity-85 hover:bg-opacity-80 transition ease-in-out duration-200"
						>Deployed site</a
					>
				{/if}
				<a
					href={repo.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Link to github repository"
					class="p-2 rounded text-black bg-white bg-opacity-85 hover:bg-opacity-80 transition ease-in-out duration-200"
					>Github repo</a
				>
			</div>
		</div>
	</div>
</div>
