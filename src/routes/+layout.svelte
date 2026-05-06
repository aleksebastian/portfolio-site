<script lang="ts">
	import '../app.css';
	import Nav from './components/Nav/Nav.svelte';

	let { children } = $props();
</script>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:bg-[#0a0a0a] focus:text-[#F5F500] focus:border-2 focus:border-[#F5F500] focus:px-4 focus:py-2"
>
	Skip to main content
</a>

<Nav />

<main id="main">
	{@render children()}
</main>

<style>
	:global(*) {
		-webkit-tap-highlight-color: transparent;
	}
</style>
