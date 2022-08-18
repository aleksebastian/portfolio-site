<script>
	import Footer from '../components/projects/footer.svelte';
	import Projects from '../components/projects/projects.svelte';
	export let data;
	const { portfolioRepos } = data;
</script>

<svelte:head>
	<title>Alek Ortiz | Portfolio</title>
</svelte:head>

<Projects {portfolioRepos} />
<Footer />
