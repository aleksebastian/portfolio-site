<script>
	import { fade } from 'svelte/transition';
	import Card from './card.svelte';
	import TempCard from './tempCard.svelte';
	export let repos;
</script>

<div in:fade class="flex flex-col items-center">
	<h1 class="text-4xl mb-11 sm:mb-16">Projects</h1>
	<div
		class="md:w-11/12 flex justify-center gap-14 md:justify-between md:gap-8 xl:gap-14 flex-wrap"
	>
		{#each repos as repo}
			<Card {repo} />
		{:else}
			<p>loading...</p>
		{/each}
		<TempCard />
	</div>
</div>
