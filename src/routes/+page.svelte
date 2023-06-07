<script>
	import Footer from './components/Projects/Footer.svelte';
	import Projects from './components/Projects/Projects.svelte';

	export let data;

	const { portfolioRepos } = data;
</script>

<svelte:head>
	<title>Alek Ortiz | Portfolio</title>
</svelte:head>

<Projects {portfolioRepos} />
<Footer />
