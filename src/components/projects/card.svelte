<script>
	import { fly } from 'svelte/transition';
	export let repo;
</script>

<div
	in:fly={{ y: 200, duration: 1000 }}
	class="group flex flex-col justify-end w-72 h-72 overflow-hidden relative rounded"
	style="background-image: url('https://picsum.photos/288');"
>
	<div />
	<div
		class="slider w-full h-full xl:top-full group-hover:top-0 transition-top duration-500 ease-in-out  absolute flex flex-col justify-end p-4"
	>
		<h1 class="mt-6 text-2xl text-white mb-2">
			{repo.name}
		</h1>
		<p class=" text-white">
			{repo.description}
		</p>
	</div>
</div>

<style>
	.slider {
		background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%);
		background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%);
		background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%);
	}
</style>
