<script>
	import { fade } from 'svelte/transition';
	import Header from './Header.svelte';
	import AboutMe from './AboutMe.svelte';
	import Experience from './Experience.svelte';
	import Education from './Education.svelte';
	import Skills from './Skills.svelte';
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
