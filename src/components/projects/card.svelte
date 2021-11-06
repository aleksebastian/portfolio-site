<script>
	export let repo;
</script>

<a
	class="group w-72 h-72 overflow-hidden relative rounded
		background-white shadow-card justify-self-center"
	href={repo.url}
	rel="noopener"
	target="_blank"
	aria-label="Link to github repository"
>
	<img
		src={repo.coverImage}
		alt="project mockup thumbnail"
		class="group w-72 h-72 object-cover object-mockup block transition duration-500 ease-in-out brightness-50 group-hover:brightness-50 xl:brightness-100"
		width="300"
		height="300"
	/>
	<div />
	<div
		class="self-end content-end w-full h-full top-0 xl:top-full group-hover:top-0 transition-top duration-500 ease-in-out absolute flex flex-col justify-end p-4"
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
