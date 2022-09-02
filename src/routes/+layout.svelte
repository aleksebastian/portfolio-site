<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { isMobileNavOpen } from '$lib/store.js';
	import MobileNav from './_components/nav/MobileNav.svelte';
	import Nav from './_components/nav/Nav.svelte';
	import MediaQuery from './_components/MediaQuery.svelte';
	import { page } from '$app/stores';

	$: current = $page.url.pathname;

	$: $isMobileNavOpen && mounted
		? (document.body.style.overflow = 'hidden')
		: (document.body.style.overflow = 'auto');

	let mounted = false;
	onMount(() => (mounted = true));
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
			Copyright © 2021 Alek Ortiz. All Rights Reserved.
		</p>
	{/if}
</main>

<style>
	:global(*) {
		-webkit-tap-highlight-color: transparent;
	}
</style>
