<script>
	import { fly } from 'svelte/transition';
	export let repo;
</script>

<a
	in:fly={{ y: 200, duration: 1000 }}
	class="group w-72 h-72 overflow-hidden relative rounded
		background-white bg-mockup bg-cover bg-no-repeat"
	style="background-image: url({repo.coverImage});"
	href={repo.url}
	rel="noopener"
	target="_blank"
	aria-label="Link to github repository"
>
	<div />
	<div
		class="self-end content-end bg-gradient-to-t from-black w-full h-full xl:top-full group-hover:top-0 transition-top duration-500 ease-in-out absolute flex flex-col justify-end p-4"
	>
		<h1 class="text-2xl text-white mb-2">
			{repo.name}
		</h1>
		<p class=" text-white mb-2">
			{repo.description}
		</p>
		<p class="text-sm text-gray-400 -mb-2">Click to go to Github repo</p>
	</div>
</a>
