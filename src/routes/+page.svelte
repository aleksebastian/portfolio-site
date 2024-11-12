<script>
	import { onMount } from 'svelte';
	import Footer from './components/Projects/Footer.svelte';
	import Projects from './components/Projects/Projects.svelte';

	let { data } = $props();
	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});

	const { portfolioRepos } = data;
</script>

<svelte:head>
	<title>Alek Ortiz | Portfolio</title>
</svelte:head>

<Projects {portfolioRepos} />
{#if mounted}
	<Footer />
{/if}
