<script>
	import { onMount } from 'svelte';
	import { isMobileNavOpen } from '../store.js';
	import MobileNav from '../components/nav/mobileNav.svelte';
	import Nav from '../components/nav/nav.svelte';
	import MediaQuery from '../components/mediaQuery.svelte';
	import { page } from '$app/stores';
	$: {
		current = $page.path;
	}
	let current = $page.path;
	let ready = false;
	onMount(() => (ready = true));
</script>

<div
	style={$isMobileNavOpen && current !== '/contact' ? 'overflow:hidden' : null}
	class="p-8 max-w-6xl mx-auto overflow-x-hidden font-body"
>
	{#if ready}
		<MediaQuery query="(max-width: 480px)" let:matches>
			{#if matches}
				<MobileNav />
			{:else}
				<Nav />
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
