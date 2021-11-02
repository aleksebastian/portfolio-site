<script>
	import { fade } from 'svelte/transition';
	import { fly } from 'svelte/transition';
	import { preloadImage } from '../../utils.js';

	import Card from './card.svelte';
	import TempCard from './tempCard.svelte';
	export let repos;

	const tempCardCoverImgUrl =
		'https://res.cloudinary.com/blitva/image/upload/v1634794360/Project%20screenshots/comingsoon_stcck3.webp';
	let coverImagesPromises = [tempCardCoverImgUrl];
	const createAndResolvePromises = async () => {
		repos.forEach((repo) => coverImagesPromises.push(preloadImage(repo.coverImage)));
		return await Promise.all(coverImagesPromises);
	};
</script>

<div in:fade class="flex flex-col items-center">
	<h1 class="text-4xl mb-11 sm:mb-16">Projects</h1>
	{#await createAndResolvePromises() then _}
		<div
			in:fly={{ y: 200, duration: 1000 }}
			class="md:w-11/12 flex gap-14 justify-center sm:justify-evenly md:gap-8 md:gap-y-11 xl:gap-14 flex-wrap"
		>
			{#each repos as repo, i}
				<Card {repo} />
			{:else}
				<p>loading...</p>
			{/each}
			<TempCard />
		</div>
	{/await}
</div>
