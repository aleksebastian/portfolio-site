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

	const projectAccent = ['#7ef4c6', '#9bb4ff', '#f6bf5f', '#ff8a65', '#6fd3ff', 'var(--c-text)'];

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
<section
	id="hero"
	class="border-b border-[var(--c-line-10)] px-6 pb-6 pt-[5rem] md:px-12 md:pt-[5rem] lg:px-24"
>
	<div
		class="grid items-start gap-8 lg:h-[33.25rem] lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:gap-12"
	>
		<div>
			<div
				class="mb-6 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--c-text-45)]"
			>
				<span>[HERO_001]</span>
				<span class="text-[var(--c-accent)]">SOFTWARE_ENGINEER</span>
				<span>EST. 2019</span>
			</div>

			<h1
				class="font-display text-[clamp(4.15rem,14.2vw,11.35rem)] font-bold uppercase leading-[0.84] tracking-[-0.06em] text-[var(--c-text)]"
			>
				<span class="block">Builds</span>
				<span
					class="-ml-1 inline-block bg-[var(--c-accent)] px-2 text-[var(--c-text-inverse)] md:px-3"
					>web</span
				>
				<span class="block">things.</span>
			</h1>
		</div>

		<aside class="border border-[var(--c-line-20)] p-5 md:p-6">
			<p class="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--c-text-45)]">
				// ABOUT
			</p>
			<p class="mb-6 text-[0.93rem] leading-[1.58] text-[var(--c-text-68)]">
				{heroAbout}
			</p>

			<div class="space-y-0 border-t border-[var(--c-line-10)]">
				{#each resume.experience.slice(0, 3) as job}
					<div
						class="grid grid-cols-[5.1rem_1fr] items-start gap-x-3 border-t border-[var(--c-line-10)] py-3 first:border-t-0"
					>
						<span
							class="pt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] whitespace-nowrap text-[var(--c-text-45)]"
						>
							{compactRange(job.dates.start, job.dates.end)}
						</span>
						<div>
							<p class="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--c-text-75)]">
								{job.title}
							</p>
							<p class="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--c-accent)]">
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
<section
	id="skills"
	class="overflow-hidden border-b border-[var(--c-line-10)] bg-[var(--c-accent)] py-3 select-none"
>
	<div class="ticker-wrapper overflow-hidden" aria-hidden="true">
		<div class="ticker-track flex w-max items-center gap-7 animate-ticker">
			{#each [0, 1, 2, 3] as _}
				{#each allSkills as skill}
					<span
						class="whitespace-nowrap font-display text-[clamp(1.55rem,2vw,1.95rem)] font-semibold uppercase leading-none tracking-tight text-[var(--c-text-inverse)]"
					>
						{skill}
					</span>
					<span
						class="whitespace-nowrap inline-flex items-center justify-center font-display text-[clamp(1.55rem,2vw,1.95rem)] leading-none text-[var(--c-text-inverse-70)] translate-y-[0.1em]"
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
<section
	id="projects"
	class="border-b border-[var(--c-line-10)] px-6 pb-20 pt-4 md:px-12 md:pt-6 lg:px-24"
>
	<div class="mb-2 flex items-end justify-between gap-8 md:mb-4">
		<h2
			class="font-display text-[clamp(2rem,5.6vw,3.45rem)] font-bold uppercase leading-[0.82] tracking-[-0.04em] text-[var(--c-text)]"
		>
			Recent<br />Work.
		</h2>
		<p
			class="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--c-text-45)] md:block"
		>
			[{showcasedProjects.length} PROJECTS · {projectStartYear} -> {projectEndYear}]
		</p>
	</div>

	<div class="grid grid-cols-1 gap-3 md:grid-cols-3">
		{#each showcasedProjects as repo, i}
			{@const cardHref = repo.homepage || repo.url}
			{@const isLongCard = i === 0 || i === 5}
			{@const mockupPanelClass = isLongCard
				? 'h-40 w-full md:h-full md:w-[45%] md:min-w-[9.75rem]'
				: 'h-[34%] min-h-[6rem] w-full'}
			{@const mockupFocusClass = isLongCard ? 'bg-center' : 'bg-top'}
			<a
				href={cardHref}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`Open ${repo.name}`}
				style={`--card-color: ${projectAccent[i % projectAccent.length]};`}
				class={`group relative isolate overflow-visible border border-[color:var(--card-color)] bg-[var(--c-surface)] p-4 transition-transform duration-300 hover:-translate-y-1 md:p-5 ${
					i === 0
						? 'md:col-span-2 md:h-[26.875rem]'
						: i === 5
							? 'md:col-span-3 md:h-[20.625rem]'
							: i === 1
								? 'md:h-[26.875rem]'
								: 'md:h-[24.875rem]'
				}`}
			>
				<span
					aria-hidden="true"
					class="pointer-events-none absolute inset-0 -z-10 translate-x-1.5 translate-y-1.5 border border-[color:var(--card-color)] opacity-40 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
				></span>

				<div
					class={`relative z-10 flex h-full min-h-0 gap-4 ${isLongCard ? 'flex-col md:flex-row' : 'flex-col'}`}
				>
					<div
						class={`pointer-events-none relative overflow-hidden border border-[var(--c-line-12)] bg-[var(--c-surface-muted)] ${mockupPanelClass}`}
					>
						<div
							class={`absolute inset-0 bg-cover ${mockupFocusClass} opacity-80 grayscale-[0.6] saturate-[0.78] contrast-[0.9] transition-[opacity,filter,transform] duration-300 ease-out group-hover:opacity-94 group-hover:grayscale-[0.18] group-hover:saturate-[0.95] group-hover:contrast-100 group-hover:scale-[1.01]`}
							style={`background-image: linear-gradient(to top, rgba(var(--c-bg-rgb), 0.5), rgba(var(--c-bg-rgb), 0.12) 58%, rgba(var(--c-bg-rgb), 0.04)), url('${repo.coverImage}');`}
						></div>
					</div>

					<div class="flex min-h-0 flex-1 flex-col">
						<div
							class="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--c-text-55)]"
						>
							<span>[{String(i + 1).padStart(2, '0')}]</span>
							<span>{repo.year ?? ''}</span>
						</div>

						<div class="mt-auto">
							<h3
								class={`font-display font-bold leading-[0.94] tracking-[-0.03em] text-[var(--c-text)] ${
									i === 0
										? 'text-[clamp(2.4rem,5vw,3.7rem)]'
										: i === 5
											? 'text-[clamp(2rem,3.4vw,2.75rem)]'
											: i === 1
												? 'text-[clamp(1.75rem,3vw,2.3rem)]'
												: 'text-[clamp(1.5rem,2.35vw,1.9rem)]'
								}`}
							>
								{repo.name.replace(/-/g, ' ')}
							</h3>

							{#if repo.description}
								<p class="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--c-text-62)]">
									{repo.description}
								</p>
							{/if}

							{#if repo.topics.length}
								<p
									class="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--c-text-55)]"
								>
									{repo.topics.slice(0, isLongCard ? 4 : 3).join('   ')}
								</p>
							{/if}
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>

<!-- ─── EXPERIENCE ─────────────────────────────────────────────── -->
<section id="experience" class="border-b border-[var(--c-line-10)] px-6 py-20 md:px-12 lg:px-24">
	<div class="mb-12">
		<p class="mb-3 font-mono text-[10px] uppercase tracking-widest text-[var(--c-text-40)]">
			// EXPERIENCE
		</p>
		<h2
			class="font-display text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase leading-none text-[var(--c-text)]"
		>
			Where I've<br /><em class="not-italic text-[var(--c-accent)]">shipped.</em>
		</h2>
	</div>

	<div class="space-y-0">
		{#each resume.experience as job}
			<div class="border-t border-[var(--c-line-10)] py-8">
				<div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
					<div>
						<h3 class="font-display text-xl font-bold text-[var(--c-text)]">{job.title}</h3>
						<p class="mt-1 font-mono text-[10px] uppercase tracking-widest text-[var(--c-accent)]">
							{job.company}
						</p>
					</div>
					<span
						class="shrink-0 font-mono text-[10px] uppercase tracking-widest text-[var(--c-text-40)]"
					>
						{job.dates.start} — {job.dates.end}
					</span>
				</div>
				{#if job.description.length}
					<ul class="space-y-2 mt-4">
						{#each job.description as item}
							<li class="flex gap-3 text-sm leading-relaxed text-[var(--c-text-60)]">
								<span class="shrink-0 text-[var(--c-accent)]">—</span>
								{item}
							</li>
						{/each}
					</ul>
				{/if}
				{#if job.projects.length}
					<div class="mt-6 space-y-4">
						{#each job.projects as project}
							<div
								class="border-l-2 border-[var(--c-line-10)] pl-4 transition-colors hover:border-[var(--c-accent)]"
							>
								<p class="mb-1 text-sm font-display font-bold text-[var(--c-text-80)]">
									{project.name}
								</p>
								{#if project.techStack.length}
									<p
										class="mb-2 font-mono text-[10px] uppercase tracking-widest text-[var(--c-accent-70)]"
									>
										{project.techStack.join(' · ')}
									</p>
								{/if}
								{#if project.description.length}
									<ul class="space-y-1.5">
										{#each project.description as item}
											<li class="text-sm leading-relaxed text-[var(--c-text-50)]">{item}</li>
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
<section id="contact" class="border-b border-[var(--c-line-10)] px-6 py-20 md:px-12 lg:px-24">
	<!-- Status label -->
	<p class="mb-8 font-mono text-[10px] uppercase tracking-widest text-[var(--c-accent)]">
		// STATUS: ACCEPTING WORK Q3—Q4 {new Date().getFullYear()}
	</p>

	<!-- Big punchy headline -->
	<h2
		class="mb-12 font-display text-[clamp(3rem,10vw,8rem)] font-bold uppercase leading-none tracking-tight text-[var(--c-text)]"
	>
		Got something<br /><em class="not-italic text-[var(--c-accent)]">worth</em><br />building?
	</h2>

	<!-- CTAs -->
	<div class="flex flex-col sm:flex-row gap-3">
		<a
			href="mailto:aleksebastian@outlook.com"
			class="inline-flex items-center gap-3 border-2 border-[var(--c-line-20)] px-6 py-4 font-mono text-xs uppercase tracking-widest text-[var(--c-text)] transition-all duration-200 group hover:border-[var(--c-accent)] hover:bg-[var(--c-accent)] hover:text-[var(--c-text-inverse)]"
		>
			ALEKSEBASTIAN@OUTLOOK.COM
			<span class="group-hover:translate-x-1 transition-transform">→</span>
		</a>
		<a
			href="/Alek%20Ortiz%20resume.pdf"
			download="Alek Ortiz resume.pdf"
			class="inline-flex items-center gap-3 border-2 border-[var(--c-line-10)] px-6 py-4 font-mono text-xs uppercase tracking-widest text-[var(--c-text-40)] transition-all duration-200 hover:border-[var(--c-line-30)] hover:text-[var(--c-text-70)]"
		>
			DOWNLOAD CV [.PDF]
		</a>
	</div>
</section>

<!-- ─── FOOTER ─────────────────────────────────────────────────── -->
<footer
	class="px-6 md:px-12 lg:px-24 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
>
	<span class="font-mono text-[10px] uppercase tracking-widest text-[var(--c-text-25)]">
		© {new Date().getFullYear()} ALEK ORTÍZ
	</span>
	<div class="flex flex-col sm:flex-row gap-3 sm:gap-8">
		<span class="font-mono text-[10px] uppercase tracking-widest text-[var(--c-text-25)]">
			BUILT WITH SVELTE + 🎧
		</span>
		<span class="font-mono text-[10px] uppercase tracking-widest text-[var(--c-text-25)]">
			NO COOKIES, NO TRACKING
		</span>
		<span class="font-mono text-[10px] uppercase tracking-widest text-[var(--c-text-25)]">
			v3.0 / {new Date().getFullYear()}.04
		</span>
	</div>
</footer>
