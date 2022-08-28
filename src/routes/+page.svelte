<script>
	import Footer from '../components/projects/Footer.svelte';
	import Projects from '../components/projects/Projects.svelte';
	export let data;
	const { portfolioRepos } = data;
</script>

<svelte:head>
	<title>Alek Ortiz | Portfolio</title>
</svelte:head>

<Projects {portfolioRepos} />
<Footer />
