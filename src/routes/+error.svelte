<script>
	import { page } from '$app/stores';
	import Projects from './_components/projects/Projects.svelte';
</script>

<Projects portfolioRepos={$page.error.message} />
