<script lang="ts">
	import { page } from '$app/stores';
	import Projects from './components/Projects/Projects.svelte';
	import type { PortfolioProject } from '$lib/types';

	const errorRepos = $derived(
		Array.isArray($page.error?.message) 
			? ($page.error.message as PortfolioProject[])
			: [] as PortfolioProject[]
	);
</script>

<Projects portfolioRepos={errorRepos} />
