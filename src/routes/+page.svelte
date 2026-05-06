<script lang="ts">
	import type { PortfolioProject, Resume } from '$lib/types';

	let { data } = $props();

	const projects: PortfolioProject[] = $derived(data.portfolioRepos || data.errorCard || []);
	const resume: Resume = $derived(data.resumeData);

	// Flatten all skill names for the ticker
	const allSkills = $derived(resume.skills.flatMap((s) => s.names));

	const showcasedProjects = $derived(projects.slice(0, 6));

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

	const projectAccent = ['#7ef4c6', '#9bb4ff', '#f6bf5f', '#ff8a65', '#6fd3ff', '#f0f0f0'];

	const heroAbout =
		'I build full-stack web products with TypeScript and Node.js, working across modern frontend frameworks including React, Svelte, and Next.js, focused on clean UX, solid architecture, and measurable results.';

	// Compact date helper: "May 2022" → "2022"
	const shortYear = (date: string) => date.split(' ').pop() ?? date;

	// Format experience date range compactly: "2022 — 24" or "2024 —"
	const compactRange = (start: string, end: string): string => {
		const s = shortYear(start);
		if (end === 'Present') return `${s} —`;
		const e = shortYear(end);
		return s === e ? s : `${s} — ${e.slice(-2)}`;
	};
</script>

<svelte:head>
	<title>Alek Ortiz | Portfolio</title>
	<meta name="description" content="Full Stack Software Engineer — Alek Ortiz" />
	<meta
		name="keywords"
		content="software engineer, web developer, portfolio, SvelteKit, React, JavaScript, TypeScript"
	/>
	<meta property="og:title" content="Alek Ortiz | Portfolio" />
	<meta property="og:description" content="Full Stack Software Engineer portfolio — Alek Ortiz" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://aleksebastian.dev" />
</svelte:head>

<!-- ─── HERO ───────────────────────────────────────────────────── -->
<section id="hero" class="border-b border-[#f0f0f0]/10 px-6 pb-6 pt-[3.8rem] md:px-12 md:pt-[3.8rem] lg:px-24">
	<div class="grid items-start gap-8 lg:h-[33.25rem] lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:gap-12">
		<div>
			<div
				class="mb-6 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.16em] text-[#f0f0f0]/45"
			>
				<span>[INDEX_001]</span>
				<span class="text-[#F5F500]">SOFTWARE_ENGINEER</span>
				<span>EST. 2019</span>
			</div>

			<h1
				class="font-display text-[clamp(4.15rem,14.2vw,11.35rem)] font-bold uppercase leading-[0.84] tracking-[-0.06em] text-[#f0f0f0]"
			>
				<span class="block">Builds</span>
				<span class="-ml-1 inline-block bg-[#F5F500] px-2 text-[#0a0a0a] md:px-3">web</span>
				<span class="block">things.</span>
			</h1>
		</div>

		<aside class="border border-[#f0f0f0]/20 p-5 md:p-6">
			<p class="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#f0f0f0]/45">// ABOUT</p>
			<p class="mb-6 text-[0.93rem] leading-[1.58] text-[#f0f0f0]/68">
				{heroAbout}
			</p>

			<div class="space-y-0 border-t border-[#f0f0f0]/10">
				{#each resume.experience.slice(0, 3) as job}
					<div class="grid grid-cols-[5.1rem_1fr] items-start gap-x-3 border-t border-[#f0f0f0]/10 py-3 first:border-t-0">
						<span class="pt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] whitespace-nowrap text-[#f0f0f0]/45">
							{compactRange(job.dates.start, job.dates.end)}
						</span>
						<div>
							<p class="font-mono text-[10px] uppercase tracking-[0.14em] text-[#f0f0f0]/75">
								{job.title}
							</p>
							<p class="font-mono text-[10px] uppercase tracking-[0.14em] text-[#F5F500]">
								{job.company}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</aside>
	</div>
</section>

<!-- ─── SKILLS TICKER ─────────────────────────────────────────── -->
<section id="skills" class="overflow-hidden border-b border-[#f0f0f0]/10 bg-[#F5F500] py-3 select-none">
	<div class="ticker-wrapper overflow-hidden" aria-hidden="true">
		<div class="ticker-track flex w-max items-center gap-7 animate-ticker">
			{#each [0, 1, 2, 3] as _}
				{#each allSkills as skill}
					<span
						class="whitespace-nowrap font-display text-[clamp(1.55rem,2vw,1.95rem)] font-semibold uppercase leading-none tracking-tight text-[#0a0a0a]"
					>
						{skill}
					</span>
					<span
						class="whitespace-nowrap inline-flex items-center justify-center font-display text-[clamp(1.55rem,2vw,1.95rem)] leading-none text-[#0a0a0a]/70 translate-y-[0.1em]"
						aria-hidden="true"
					>
						*
					</span>
				{/each}
			{/each}
		</div>
	</div>
</section>

<!-- ─── PROJECTS ───────────────────────────────────────────────── -->
<section id="projects" class="border-b border-[#f0f0f0]/10 px-6 pb-20 pt-4 md:px-12 md:pt-6 lg:px-24">
	<div class="mb-2 flex items-end justify-between gap-8 md:mb-4">
		<h2
			class="font-display text-[clamp(2rem,5.6vw,3.45rem)] font-bold uppercase leading-[0.82] tracking-[-0.04em] text-[#f0f0f0]"
		>
			Recent.<br />Work.
		</h2>
		<p class="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-[#f0f0f0]/45 md:block">
			[{showcasedProjects.length} PROJECTS · {projectStartYear} -> {projectEndYear}]
		</p>
	</div>

	<div class="grid grid-cols-1 gap-3 md:grid-cols-3">
		{#each showcasedProjects as repo, i}
			{@const cardHref = repo.homepage || repo.url}
			<a
				href={cardHref}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`Open ${repo.name}`}
				style={`--card-color: ${projectAccent[i % projectAccent.length]};`}
				class={`group relative isolate overflow-visible border border-[color:var(--card-color)] bg-[#161616] p-4 transition-transform duration-300 hover:-translate-y-1 md:p-5 ${
					i === 0
						? 'md:col-span-2 md:h-[26.875rem]'
						: i === 5
							? 'md:col-span-3 md:h-[20.625rem]'
							: i === 1
								? 'md:h-[26.875rem]'
								: 'md:h-[23.125rem]'
				}`}
			>
				<span
					aria-hidden="true"
					class="pointer-events-none absolute inset-0 -z-10 translate-x-1.5 translate-y-1.5 border border-[color:var(--card-color)] opacity-40 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
				></span>

				<div class="relative z-10 flex h-full flex-col">
					<div class="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#f0f0f0]/55">
						<span>[{String(i + 1).padStart(2, '0')}]</span>
						<span>{repo.year ?? ''}</span>
					</div>

					<div class="mt-auto">
						<h3
							class={`font-display font-bold leading-[0.94] tracking-[-0.03em] text-[#f0f0f0] ${
								i === 0
									? 'text-[clamp(2.4rem,5vw,3.7rem)]'
									: i === 1
										? 'text-[clamp(2.1rem,3.8vw,2.9rem)]'
										: 'text-[clamp(1.95rem,3.2vw,2.45rem)]'
							}`}
						>
							{repo.name.replace(/-/g, ' ')}
						</h3>

						{#if repo.description}
							<p class="mt-3 max-w-2xl text-sm leading-relaxed text-[#f0f0f0]/62">
								{repo.description}
							</p>
						{/if}

						{#if repo.topics.length}
							<p class="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#f0f0f0]/55">
								{repo.topics.slice(0, 4).join('   ')}
							</p>
						{/if}
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>

<!-- ─── EXPERIENCE ─────────────────────────────────────────────── -->
<section id="experience" class="px-6 md:px-12 lg:px-24 py-20 border-b border-[#f0f0f0]/10">
	<div class="mb-12">
		<p class="font-mono text-[10px] uppercase tracking-widest text-[#f0f0f0]/40 mb-3">
			// EXPERIENCE
		</p>
		<h2
			class="font-display font-bold text-[clamp(2.5rem,7vw,5rem)] leading-none uppercase text-[#f0f0f0]"
		>
			Where I've<br /><em class="not-italic text-[#F5F500]">shipped.</em>
		</h2>
	</div>

	<div class="space-y-0">
		{#each resume.experience as job}
			<div class="py-8 border-t border-[#f0f0f0]/10">
				<div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
					<div>
						<h3 class="font-display font-bold text-xl text-[#f0f0f0]">{job.title}</h3>
						<p class="font-mono text-[10px] uppercase tracking-widest text-[#F5F500] mt-1">
							{job.company}
						</p>
					</div>
					<span class="font-mono text-[10px] uppercase tracking-widest text-[#f0f0f0]/40 shrink-0">
						{job.dates.start} — {job.dates.end}
					</span>
				</div>
				{#if job.description.length}
					<ul class="space-y-2 mt-4">
						{#each job.description as item}
							<li class="text-[#f0f0f0]/60 leading-relaxed text-sm flex gap-3">
								<span class="text-[#F5F500] shrink-0">—</span>
								{item}
							</li>
						{/each}
					</ul>
				{/if}
				{#if job.projects.length}
					<div class="mt-6 space-y-4">
						{#each job.projects as project}
							<div class="border-l-2 border-[#f0f0f0]/10 hover:border-[#F5F500] pl-4 transition-colors">
								<p class="font-display font-bold text-[#f0f0f0]/80 text-sm mb-1">{project.name}</p>
								{#if project.techStack.length}
									<p class="font-mono text-[10px] uppercase tracking-widest text-[#F5F500]/70 mb-2">
										{project.techStack.join(' · ')}
									</p>
								{/if}
								{#if project.description.length}
									<ul class="space-y-1.5">
										{#each project.description as item}
											<li class="text-[#f0f0f0]/50 text-sm leading-relaxed">{item}</li>
										{/each}
									</ul>
								{/if}
							</div>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>

<!-- ─── CONTACT ────────────────────────────────────────────────── -->
<section id="contact" class="px-6 md:px-12 lg:px-24 py-20 border-b border-[#f0f0f0]/10">
	<!-- Status label -->
	<p class="font-mono text-[10px] uppercase tracking-widest text-[#F5F500] mb-8">
		// STATUS: ACCEPTING WORK Q3—Q4 {new Date().getFullYear()}
	</p>

	<!-- Big punchy headline -->
	<h2
		class="font-display font-bold leading-none tracking-tight text-[#f0f0f0] text-[clamp(3rem,10vw,8rem)] uppercase mb-12"
	>
		Got something<br /><em class="not-italic text-[#F5F500]">worth</em><br />building?
	</h2>

	<!-- CTAs -->
	<div class="flex flex-col sm:flex-row gap-3">
		<a
			href="mailto:hello@alekortiz.dev"
			class="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest border-2 border-[#f0f0f0]/20 hover:border-[#F5F500] hover:bg-[#F5F500] hover:text-[#0a0a0a] text-[#f0f0f0] px-6 py-4 transition-all duration-200 group"
		>
			HELLO@ALEKORTIZ.DEV
			<span class="group-hover:translate-x-1 transition-transform">→</span>
		</a>
		<a
			href="/resume"
			class="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest border-2 border-[#f0f0f0]/10 hover:border-[#f0f0f0]/30 text-[#f0f0f0]/40 hover:text-[#f0f0f0]/70 px-6 py-4 transition-all duration-200"
		>
			DOWNLOAD CV [.PDF]
		</a>
	</div>
</section>

<!-- ─── FOOTER ─────────────────────────────────────────────────── -->
<footer class="px-6 md:px-12 lg:px-24 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
	<span class="font-mono text-[10px] uppercase tracking-widest text-[#f0f0f0]/25">
		© {new Date().getFullYear()} ALEK ORTÍZ
	</span>
	<div class="flex flex-col sm:flex-row gap-3 sm:gap-8">
		<span class="font-mono text-[10px] uppercase tracking-widest text-[#f0f0f0]/25">
			BUILT WITH SVELTE + 🎧
		</span>
		<span class="font-mono text-[10px] uppercase tracking-widest text-[#f0f0f0]/25">
			NO COOKIES, NO TRACKING
		</span>
		<span class="font-mono text-[10px] uppercase tracking-widest text-[#f0f0f0]/25">
			v3.0 / {new Date().getFullYear()}.04
		</span>
	</div>
</footer>
