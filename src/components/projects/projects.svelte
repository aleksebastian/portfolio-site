<script>
	import { fade, fly } from 'svelte/transition';
	import { preloadImage } from '../../utils.js';

	import Card from './card.svelte';
	import Loader from '../loader.svelte';
	export let repos;

	// const tempCardCoverImgUrl =
	// 	'https://res.cloudinary.com/blitva/image/upload/v1634794360/Project%20screenshots/comingsoon_stcck3.webp';
	let coverImagesPromises = [];
	const createAndResolvePromises = async () => {
		repos.forEach((repo) => coverImagesPromises.push(preloadImage(repo.coverImage)));
		return await Promise.all(coverImagesPromises);
	};
</script>

<div class="flex flex-col items-center overflow-hidden">
	<h1 in:fade class="text-4xl mb-11 sm:mb-16">Projects</h1>
	{#await createAndResolvePromises()}
		<Loader />
	{:then}
		<div in:fly={{ y: 200, duration: 1000 }} class="grid grid-cols-cards w-11/12 gap-12 md:gap-14">
			{#each repos as repo, i}
				<Card {repo} />
			{/each}
		</div>
	{/await}
</div>
