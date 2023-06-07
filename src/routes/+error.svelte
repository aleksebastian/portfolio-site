<script>
	import { page } from '$app/stores';
	import Projects from './components/Projects/Projects.svelte';
</script>

<Projects portfolioRepos={$page.error.message} />
