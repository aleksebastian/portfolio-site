<script context="module">
	export const load = async ({ fetch }) => {
		const username = 'aleksebastian';
		const url = `https://api.github.com/users/${username}/repos`;
		const res = await fetch(url);
		const data = await res.json();
		const reposInfo = data
			.filter((repo) => repo.topics.includes('portfolio-project'))
			.map((repo) => ({
				username: username,
				name: repo.name,
				url: repo.html_url,
				homepage: repo.homepage,
				description: repo.description,
				coverImage: `https://raw.githubusercontent.com/${username}/${repo.name}/main/mockup.webp`
			}));
		return { props: { repos: reposInfo } };
	};
</script>

<script>
	import Projects from '../components/projects/projects.svelte';
	export let repos;
</script>

<svelte:head>
	<title>Alek Ortiz | Portfolio</title>
</svelte:head>

<Projects {repos} />
