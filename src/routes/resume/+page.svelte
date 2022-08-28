<script>
	import { fade } from 'svelte/transition';
	import Header from '../../components/resume/Header.svelte';
	import AboutMe from '../../components/resume/AboutMe.svelte';
	import Experience from '../../components/resume/Experience.svelte';
	import Education from '../../components/resume/Education.svelte';
	import Skills from '../../components/resume/Skills.svelte';
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
