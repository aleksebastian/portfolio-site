<script>
	import { fade, fly } from 'svelte/transition';
	import Card from './Card.svelte';
	import Loader from '../Loader.svelte';
	export let portfolioRepos;

	const preloadImage = (src) => {
		return new Promise((resolve) => {
			let img = new Image();
			img.onload = resolve();
			img.src = src;
		});
	};

	// const tempCardCoverImgUrl =
	// 	'https://res.cloudinary.com/blitva/image/upload/v1634794360/Project%20screenshots/comingsoon_stcck3.webp';
	let coverImagesPromises = [];
	const createAndResolvePromises = async () => {
		portfolioRepos.forEach((repo) => coverImagesPromises.push(preloadImage(repo.coverImage)));
		return await Promise.all(coverImagesPromises);
	};
</script>

<div class="flex flex-col items-center overflow-hidden">
	<h1 in:fade class="text-4xl mb-11 sm:mb-16">Projects</h1>
	{#await createAndResolvePromises()}
		<Loader />
	{:then}
		<div in:fly={{ y: 200, duration: 1000 }} class="grid grid-cols-cards w-11/12 gap-12 md:gap-14">
			{#each portfolioRepos as repo, i}
				<Card {repo} />
			{/each}
		</div>
	{/await}
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
