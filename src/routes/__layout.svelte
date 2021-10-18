<script>
	import MobileNav from '../components/nav/mobileNav.svelte';
	import Nav from '../components/nav/nav.svelte';
	import MediaQuery from '../components/mediaQuery.svelte';
	import { onMount } from 'svelte';

	let ready = false;

	onMount(() => (ready = true));
</script>

<div class="p-8 max-w-6xl mx-auto overflow-x-hidden font-body">
	{#if ready}
		<MediaQuery query="(max-width: 480px)" let:matches>
			{#if matches}
				<MobileNav />
			{:else}
				<Nav />
			{/if}
		</MediaQuery>
		<slot />
	{/if}
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
