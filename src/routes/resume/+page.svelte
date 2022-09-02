<script>
	import { fade } from 'svelte/transition';
	import Header from './_components/Header.svelte';
	import AboutMe from './_components/AboutMe.svelte';
	import Experience from './_components/Experience.svelte';
	import Education from './_components/Education.svelte';
	import Skills from './_components/Skills.svelte';
</script>

<svelte:head>
	<title>Alek Ortiz | Resume</title>
</svelte:head>

<div in:fade>
	<Header />
	<div class="grid gap-10 lg:grid-cols-resume lg:mx-8">
		<div>
			<AboutMe />
			<Experience />
			<Education />
		</div>
		<Skills />
	</div>
</div>
