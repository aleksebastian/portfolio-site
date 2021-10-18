<script>
	// import { onMount } from 'svelte';
	// import { writable } from 'svelte/store';
	// import { fade } from 'svelte/transition';
	// import fetchRepos from '../../stores/repos';
	import Card from './card.svelte';
	export let repos;
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl mb-20">Projects</h1>
	<div class="flex gap-16 justify-center flex-wrap ">
		{#each repos as repo}
			<Card {repo} />
		{:else}
			<p>loading...</p>
		{/each}
	</div>
</div>
