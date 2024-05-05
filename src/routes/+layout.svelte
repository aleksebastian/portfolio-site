<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import MobileNav from './components/Nav/MobileNav.svelte';
	import Nav from './components/Nav/Nav.svelte';
	import MediaQuery from './components/MediaQuery.svelte';
	import { page } from '$app/stores';

	$: current = $page.url.pathname;

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<main class="p-8 max-w-7xl mx-auto font-body">
	{#if mounted}
		<MediaQuery query="(max-width: 480px)" let:matches>
			{#if matches}
				<div class="mt-20">
					<MobileNav {current} />
				</div>
				<slot />
			{:else}
				<Nav {current} />
				<div class="mt-32">
					<slot />
				</div>
			{/if}
		</MediaQuery>

		<p class="text-xs tracking-wider mt-12 text-center">
			© {new Date().getFullYear()} — All rights reserved.
		</p>
	{/if}
</main>

<style>
	:global(*) {
		-webkit-tap-highlight-color: transparent;
	}
</style>
