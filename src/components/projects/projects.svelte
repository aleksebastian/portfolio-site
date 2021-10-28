<script>
	import { fade } from 'svelte/transition';
	import Card from './card.svelte';
	import TempCard from './tempCard.svelte';
	export let repos;
</script>

<div in:fade class="flex flex-col items-center">
	<h1 class="text-4xl mb-11 sm:mb-16">Projects</h1>
	<div class="w-11/12 flex justify-between gap-16 flex-wrap">
		{#each repos as repo}
			<Card {repo} />
		{:else}
			<p>loading...</p>
		{/each}
		<TempCard />
	</div>
</div>
