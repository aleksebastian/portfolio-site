<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Card from './Card.svelte';
	import Loader from '../Loader.svelte';
	import type { PortfolioProject } from '$lib/types';

	let { portfolioRepos } = $props<{ portfolioRepos: PortfolioProject[] }>();

	const preloadImage = (src: string): Promise<HTMLImageElement> => {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.onload = () => resolve(img);
			img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
			img.src = src;
		});
	};

	const fallbackCardCoverImgUrl =
		'https://res.cloudinary.com/blitva/image/upload/v1738696942/Project%20screenshots/missing.gif';
	let coverImagesPromises: Promise<HTMLImageElement>[] = [];
	
	const createAndResolvePromises = async () => {
		portfolioRepos.forEach((repo: PortfolioProject) => coverImagesPromises.push(preloadImage(repo.coverImage)));

		const res = await Promise.allSettled(coverImagesPromises);
		portfolioRepos.forEach((repo: PortfolioProject, i: number) => {
			if (res[i].status !== 'fulfilled') {
				repo.coverImage = fallbackCardCoverImgUrl;
			}
		});

		return res;
	};
</script>

<div class="flex flex-col items-center overflow-hidden">
	<h1 in:fade class="text-4xl mb-11 sm:mb-16">Projects</h1>
	{#await createAndResolvePromises()}
		<Loader />
	{:then}
		<div in:fly={{ y: 200, duration: 1000 }} class="grid grid-cols-cards w-11/12 gap-12 md:gap-14">
			{#each portfolioRepos as repo}
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
