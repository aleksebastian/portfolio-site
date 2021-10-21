<script>
	import { fade } from 'svelte/transition';
	import Header from '../components/resume/header.svelte';
	import AboutMe from '../components/resume/aboutMe.svelte';
	import Experience from '../components/resume/experience.svelte';
	import Education from '../components/resume/education.svelte';
	import Skills from '../components/resume/skills.svelte';
</script>

<svelte:head>
	<title>Alek Ortiz | Resume</title>
</svelte:head>

<div in:fade>
	<Header />
	<div class="grid gap-10 lg:grid-cols-2 lg:mx-8">
		<div>
			<AboutMe />
			<Experience />
			<Education />
		</div>
		<Skills />
	</div>
</div>
