<script>
	import { onMount } from 'svelte';
	import { isMobileNavOpen } from '$lib/store.js';
	import MobileNav from './_components/nav/MobileNav.svelte';
	import Nav from './_components/nav/Nav.svelte';
	import MediaQuery from './_components/MediaQuery.svelte';
	import { page } from '$app/stores';

	$: current = $page.url.pathname;
	let mounted = false;
	onMount(() => (mounted = true));
</script>

<div
	style={$isMobileNavOpen && current !== '/contact' ? 'overflow:hidden' : null}
	class="p-8 max-w-7xl mx-auto overflow-x-hidden font-body"
>
	{#if mounted}
		<MediaQuery query="(max-width: 480px)" let:matches>
			{#if matches}
				<MobileNav {current} />
			{:else}
				<Nav {current} />
			{/if}
		</MediaQuery>
		<slot />
		<p class="text-xs tracking-wider mt-12 text-center">
			Copyright © 2021 Alek Ortiz. All Rights Reserved.
		</p>
	{/if}
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:global(*) {
		-webkit-tap-highlight-color: transparent;
	}
</style>
