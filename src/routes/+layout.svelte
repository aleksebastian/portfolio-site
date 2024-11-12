<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import MobileNav from './components/Nav/MobileNav.svelte';
	import Nav from './components/Nav/Nav.svelte';
	import MediaQuery from './components/MediaQuery.svelte';
	import { page } from '$app/stores';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();

	let current = $derived($page.url.pathname);

	let mounted = $state(false);
	onMount(() => {
		mounted = true;
	});

	const children_render = $derived(children);
</script>

<main class="p-8 max-w-7xl mx-auto font-body">
	{#if mounted}
		<MediaQuery query="(max-width: 480px)" >
			{#snippet children({ matches })}
						{#if matches}
					<div class="mt-20">
						<MobileNav {current} />
					</div>
					{@render children_render?.()}
				{:else}
					<Nav {current} />
					<div class="mt-32">
						{@render children_render?.()}
					</div>
				{/if}
								{/snippet}
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
