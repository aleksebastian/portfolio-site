<script>
	import { fade } from 'svelte/transition';
	import Projects from '../components/projects/projects.svelte';
</script>

<svelte:head>
	<title>Alek Ortiz's Portfolio</title>
</svelte:head>

<h1>Hello</h1>
<h1 in:fade>Projects go here</h1>
<Projects />
