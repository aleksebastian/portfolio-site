<script>
	import { onMount } from 'svelte';
	import Footer from './components/Projects/Footer.svelte';
	import Projects from './components/Projects/Projects.svelte';

	let { data } = $props();
	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});

	const { portfolioRepos, errorCard } = data;
	const projects = portfolioRepos || errorCard || [];
</script>

<svelte:head>
	<title>Alek Ortiz | Portfolio</title>
	<meta name="description" content="Software Engineer portfolio showcasing innovative projects built with modern web technologies including SvelteKit, React, and more." />
	<meta name="keywords" content="software engineer, web developer, portfolio, SvelteKit, React, JavaScript, TypeScript" />
	<meta property="og:title" content="Alek Ortiz | Portfolio" />
	<meta property="og:description" content="Software Engineer portfolio showcasing innovative projects built with modern web technologies." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://aleksebastian.dev" />
</svelte:head>

<Projects portfolioRepos={projects} />
{#if mounted}
	<Footer />
{/if}
