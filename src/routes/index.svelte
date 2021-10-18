<script context="module">
	export const load = async ({ fetch }) => {
		const username = 'aleksebastian';
		const url = `https://api.github.com/users/${username}/repos`;
		const res = await fetch(url);
		const data = await res.json();
		const reposInfo = data
			.filter((repo) => repo.topics.includes('portfolio-project'))
			.map((repo) => ({
				name: repo.name,
				url: repo.html_url,
				description: repo.description
			}));
		return { props: { repos: reposInfo } };
	};
</script>

<script>
	import { fade } from 'svelte/transition';
	import Projects from '../components/projects/projects.svelte';
	export let repos;
</script>

<svelte:head>
	<title>Alek Ortiz's Portfolio</title>
</svelte:head>

<div in:fade>
	<Projects {repos} />
</div>
