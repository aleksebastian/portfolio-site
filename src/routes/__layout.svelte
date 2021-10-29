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
	style={$isMobileNavOpen && current !== '/contact' ? 'position:fixed' : 'position:unset'}
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
