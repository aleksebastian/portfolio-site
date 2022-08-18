<script>
	import Footer from '../components/projects/footer.svelte';
	import Projects from '../components/projects/projects.svelte';

	export let data;
</script>

<svelte:head>
	<title>Alek Ortiz | Portfolio</title>
</svelte:head>

<Projects {data} />
<Footer />
