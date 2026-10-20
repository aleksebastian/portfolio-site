<script lang="ts">
	import HeroSection from './components/HeroSection.svelte';
	import SkillsTicker from './components/SkillsTicker.svelte';
	import ProjectsSection from './components/ProjectsSection.svelte';
	import ExperienceSection from './components/ExperienceSection.svelte';
	import ContactSection from './components/ContactSection.svelte';
	import SiteFooter from './components/SiteFooter.svelte';

	let { data } = $props();

	const resume = $derived(data.resume);
	const showcasedProjects = $derived(data.projects.slice(0, 6));

	const numericProjectYears = $derived(
		showcasedProjects
			.map((repo) => Number.parseInt(repo.year ?? '', 10))
			.filter((year): year is number => Number.isFinite(year))
	);

	const projectStartYear = $derived(
		numericProjectYears.length ? Math.min(...numericProjectYears) : new Date().getFullYear() - 4
	);

	const projectEndYear = $derived(
		numericProjectYears.length ? Math.max(...numericProjectYears) : new Date().getFullYear()
	);
</script>

<svelte:head>
	<title>Alek Ortiz | Portfolio</title>
	<meta name="description" content="Software Engineer — Alek Ortiz" />
	<meta
		name="keywords"
		content="software engineer, web developer, portfolio, SvelteKit, React, JavaScript, TypeScript"
	/>
	<meta property="og:title" content="Alek Ortiz | Portfolio" />
	<meta property="og:description" content="Software Engineer portfolio — Alek Ortiz" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://aleksebastian.dev" />
</svelte:head>

<HeroSection experience={resume.experience} heroAbout={resume.heroAbout} />
<SkillsTicker skills={resume.skills} />
<ProjectsSection
	projects={showcasedProjects}
	projectsError={data.projectsError}
	{projectStartYear}
	{projectEndYear}
/>
<ExperienceSection experience={resume.experience} education={resume.education} />
<ContactSection />
<SiteFooter />
