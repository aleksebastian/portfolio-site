<script>
	import Footer from './_components/projects/Footer.svelte';
	import Projects from './_components/projects/Projects.svelte';

	export let data;
	const { portfolioRepos } = data;
</script>

<svelte:head>
	<title>Alek Ortiz | Portfolio</title>
</svelte:head>

<Projects {portfolioRepos} />
<Footer />
