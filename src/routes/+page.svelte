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

	// ─── Animated Hero ───────────────────────────────────────────
	const HERO_WORDS = ['fast', 'polished', 'a11y', 'scalable', 'secure', 'tested', 'human'];

	let heroWordIndex = $state(0);
	let heroPhase = $state<'cycling' | 'collapsing' | 'done'>('cycling');
	let heroKey = $state(0);

	$effect(() => {
		if (heroPhase !== 'cycling') return;
		const total = HERO_WORDS.length;
		if (heroWordIndex >= total - 1) {
			const t = setTimeout(() => (heroPhase = 'collapsing'), 850);
			return () => clearTimeout(t);
		}
		const startMs = 1100,
			endMs = 160;
		const steps = total - 2;
		const ratio = Math.pow(endMs / startMs, 1 / Math.max(1, steps));
		const delay = Math.round(startMs * Math.pow(ratio, heroWordIndex));
		const animMs = Math.max(180, Math.min(550, Math.round(delay * 0.55)));
		document.documentElement.style.setProperty('--hero-word-anim', animMs + 'ms');
		const t = setTimeout(() => heroWordIndex++, delay);
		return () => clearTimeout(t);
	});

	$effect(() => {
		if (heroPhase !== 'collapsing') return;
		const t = setTimeout(() => (heroPhase = 'done'), 700);
		return () => clearTimeout(t);
	});

	const replayHero = () => {
		heroWordIndex = 0;
		heroPhase = 'cycling';
		heroKey++;
	};

	const heroWord = $derived(HERO_WORDS[heroWordIndex] || '');
	const heroWordCollapsing = $derived(heroPhase === 'collapsing' || heroPhase === 'done');
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
<section id="hero" class="border-b border-(--c-line-10) px-6 pb-6 pt-8 md:px-12 md:pt-28 lg:px-24">
	<div class="grid items-start gap-8 lg:h-133 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:gap-12">
		<div>
			<div
				class="mb-6 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.16em] text-(--c-text-45)"
			>
				<span>[HERO_001]</span>
				<span class="text-(--c-accent)">SOFTWARE_ENGINEER</span>
				<span>EST. 2019</span>
			</div>

			<h1
				class="font-display text-[clamp(4.15rem,14.2vw,11.35rem)] font-bold uppercase leading-[0.84] tracking-[-0.06em] text-(--c-text)"
				aria-label="Builds things."
			>
				<span class="block">Builds</span>
				<span class="hero-line2" class:is-collapsing={heroWordCollapsing} aria-hidden="true">
					{#key `${heroKey}:${heroWordIndex}`}
						<span class="hero-word -ml-1 bg-(--c-accent) px-2 text-(--c-text-inverse) md:px-3"
							>{heroWord}</span
						>
					{/key}
				</span>
				<span class="block">things.</span>
			</h1>
			<button
				type="button"
				class="hero-replay"
				class:is-visible={heroPhase === 'done'}
				style:pointer-events={heroPhase === 'done' ? 'auto' : 'none'}
				onclick={replayHero}
			>
				<span>↻</span> Replay
			</button>
		</div>

		<aside class="border border-(--c-line-20) p-5 md:p-6">
			<p class="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-(--c-text-45)">
				// ABOUT
			</p>
			<p class="mb-6 text-[0.93rem] leading-[1.58] text-(--c-text-68)">
				{heroAbout}
			</p>

			<div class="space-y-0 border-t border-(--c-line-10)">
				{#each resume.experience.slice(0, 3) as job (`${job.company}-${job.title}-${job.dates.start}`)}
					<div
						class="grid grid-cols-[5.1rem_1fr] items-start gap-x-3 border-t border-(--c-line-10) py-3 first:border-t-0"
					>
						<span
							class="pt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] whitespace-nowrap text-(--c-text-45)"
						>
							{compactRange(job.dates.start, job.dates.end)}
						</span>
						<div>
							<p class="font-mono text-[10px] uppercase tracking-[0.14em] text-(--c-text-75)">
								{job.title}
							</p>
							<p class="font-mono text-[10px] uppercase tracking-[0.14em] text-(--c-accent)">
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
	class="overflow-hidden border-b border-(--c-line-10) bg-(--c-accent) py-3 select-none"
>
	<div class="ticker-wrapper overflow-hidden" aria-hidden="true">
		<div class="ticker-track flex w-max items-center gap-7 animate-ticker">
			{#each [0, 1, 2, 3] as _, tickerIndex (tickerIndex)}
				{#each allSkills as skill, skillIndex (`${tickerIndex}-${skillIndex}`)}
					<span
						class="whitespace-nowrap font-display text-[clamp(1.55rem,2vw,1.95rem)] font-semibold uppercase leading-none tracking-tight text-(--c-text-inverse)"
					>
						{skill}
					</span>
					<span
						class="whitespace-nowrap inline-flex items-center justify-center font-display text-[clamp(1.55rem,2vw,1.95rem)] leading-none text-(--c-text-inverse-70) translate-y-[0.1em]"
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
	class="border-b border-(--c-line-10) px-6 pb-10 pt-6 md:pb-20 md:px-12 lg:px-24"
>
	<div class="mb-2 flex items-end justify-between gap-8 md:mb-4">
		<h2
			class="font-display text-[clamp(2rem,5.6vw,3.45rem)] font-bold uppercase leading-[0.82] tracking-[-0.04em] text-(--c-text)"
		>
			Recent<br />Work.
		</h2>
		<p class="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-(--c-text-45) md:block">
			[{showcasedProjects.length} PROJECTS · {projectStartYear} -> {projectEndYear}]
		</p>
	</div>

	<div class="grid grid-cols-1 gap-3 md:grid-cols-3">
		{#each showcasedProjects as repo, i (repo.name)}
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
				class={`group relative isolate overflow-visible border border-(--card-color) bg-(--c-surface) p-4 transition-transform duration-300 hover:-translate-y-1 md:p-5 ${
					i === 0
						? 'md:col-span-2 md:h-107.5'
						: i === 5
							? 'md:col-span-3 md:h-82.5'
							: i === 1
								? 'md:h-107.5'
								: 'md:h-99.5'
				}`}
			>
				<span
					aria-hidden="true"
					class="pointer-events-none absolute inset-0 -z-10 translate-x-1.5 translate-y-1.5 border border-(--card-color) opacity-40 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
				></span>

				<div
					class={`relative z-10 flex h-full min-h-0 gap-4 ${isLongCard ? 'flex-col md:flex-row' : 'flex-col'}`}
				>
					<div
						class={`pointer-events-none relative overflow-hidden border border-(--c-line-12) bg-(--c-surface-muted) ${mockupPanelClass}`}
					>
						<div
							class={`absolute inset-0 bg-cover ${mockupFocusClass} opacity-80 grayscale-[0.6] saturate-[0.78] contrast-[0.9] transition-[opacity,filter,transform] duration-300 ease-out group-hover:opacity-94 group-hover:grayscale-[0.18] group-hover:saturate-[0.95] group-hover:contrast-100 group-hover:scale-[1.01]`}
							style={`background-image: linear-gradient(to top, rgba(var(--c-bg-rgb), 0.5), rgba(var(--c-bg-rgb), 0.12) 58%, rgba(var(--c-bg-rgb), 0.04)), url('${repo.coverImage}');`}
						></div>
					</div>

					<div class="flex min-h-0 flex-1 flex-col">
						<div
							class="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-(--c-text-55)"
						>
							<span>[{String(i + 1).padStart(2, '0')}]</span>
							<span>{repo.year ?? ''}</span>
						</div>

						<div class="mt-auto">
							<h3
								class={`font-display font-bold leading-[0.94] tracking-[-0.03em] text-(--c-text) ${
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
								<p class="mt-3 max-w-2xl text-sm leading-relaxed text-(--c-text-62)">
									{repo.description}
								</p>
							{/if}

							{#if repo.topics.length}
								<p
									class="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-(--c-text-55)"
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
<section
	id="experience"
	class="border-b border-(--c-line-10) px-6 py-10 md:px-12 md:py-20 lg:px-24"
>
	<div class="mb-12">
		<p class="mb-3 font-mono text-[10px] uppercase tracking-widest text-(--c-text-40)">
			// EXPERIENCE
		</p>
		<h2
			class="font-display text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase leading-none text-(--c-text)"
		>
			Where I've<br /><em class="not-italic text-(--c-accent)">shipped.</em>
		</h2>
	</div>

	<div class="space-y-0">
		{#each resume.experience as job (`${job.company}-${job.title}-${job.dates.start}`)}
			<div class="border-t border-(--c-line-10) py-8">
				<div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
					<div>
						<h3 class="font-display text-xl font-bold text-(--c-text)">{job.title}</h3>
						<p class="mt-1 font-mono text-[10px] uppercase tracking-widest text-(--c-accent)">
							{job.company}
						</p>
					</div>
					<span class="shrink-0 font-mono text-[10px] uppercase tracking-widest text-(--c-text-40)">
						{job.dates.start} — {job.dates.end}
					</span>
				</div>
				{#if job.description.length}
					<ul class="space-y-2 mt-4">
						{#each job.description as item (`${job.company}-${item}`)}
							<li class="flex gap-3 text-sm leading-relaxed text-(--c-text-60)">
								<span class="shrink-0 text-(--c-accent)">—</span>
								{item}
							</li>
						{/each}
					</ul>
				{/if}
				{#if job.projects.length}
					<div class="mt-6 space-y-4">
						{#each job.projects as project (project.name)}
							<div
								class="border-l-2 border-(--c-line-10) pl-4 transition-colors hover:border-(--c-accent)"
							>
								<p class="mb-1 text-sm font-display font-bold text-(--c-text-80)">
									{project.name}
								</p>
								{#if project.techStack.length}
									<p
										class="mb-2 font-mono text-[10px] uppercase tracking-widest text-(--c-accent-70)"
									>
										{project.techStack.join(' · ')}
									</p>
								{/if}
								{#if project.description.length}
									<ul class="space-y-1.5">
										{#each project.description as item (`${project.name}-${item}`)}
											<li class="text-sm leading-relaxed text-(--c-text-50)">{item}</li>
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
<section id="contact" class="border-b border-(--c-line-10) px-6 py-10 md:px-12 md:py-20 lg:px-24">
	<!-- Status label -->
	<p class="mb-8 font-mono text-[10px] uppercase tracking-widest text-(--c-accent)">
		// STATUS: ACCEPTING WORK Q3—Q4 {new Date().getFullYear()}
	</p>

	<!-- Big punchy headline -->
	<h2
		class="mb-12 font-display text-[clamp(3rem,10vw,8rem)] font-bold uppercase leading-none tracking-tight text-(--c-text)"
	>
		Got something<br /><em class="not-italic text-(--c-accent)">worth</em><br />building?
	</h2>

	<!-- CTAs -->
	<div class="flex flex-col sm:flex-row gap-3">
		<a
			href="mailto:aleksebastian@outlook.com"
			class="inline-flex items-center gap-3 border-2 border-(--c-line-20) px-6 py-4 font-mono text-xs uppercase tracking-widest text-(--c-text) transition-all duration-200 group hover:border-(--c-accent) hover:bg-(--c-accent) hover:text-(--c-text-inverse)"
		>
			ALEKSEBASTIAN@OUTLOOK.COM
			<span class="group-hover:translate-x-1 transition-transform">→</span>
		</a>
		<a
			href="/Alek%20Ortiz%20resume.pdf"
			download="Alek Ortiz resume.pdf"
			class="inline-flex items-center gap-3 border-2 border-(--c-line-10) px-6 py-4 font-mono text-xs uppercase tracking-widest text-(--c-text-40) transition-all duration-200 hover:border-(--c-line-30) hover:text-(--c-text-70)"
		>
			DOWNLOAD CV [.PDF]
		</a>
	</div>
</section>

<!-- ─── FOOTER ─────────────────────────────────────────────────── -->
<footer
	class="px-6 md:px-12 lg:px-24 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
>
	<span class="font-mono text-[10px] uppercase tracking-widest text-(--c-text-25)">
		© {new Date().getFullYear()} ALEK ORTÍZ
	</span>
	<div class="flex flex-col sm:flex-row gap-3 sm:gap-8">
		<span class="font-mono text-[10px] uppercase tracking-widest text-(--c-text-25)">
			BUILT WITH SVELTE + 🎧
		</span>
		<span class="font-mono text-[10px] uppercase tracking-widest text-(--c-text-25)">
			v2.0 / {new Date().getFullYear()}.04
		</span>
	</div>
</footer>

<style>
	@keyframes hero-word-in {
		0% {
			opacity: 0;
			transform: translateY(0.35em) skewX(-6deg);
			filter: blur(6px);
		}
		60% {
			filter: blur(0);
		}
		100% {
			opacity: 1;
			transform: translateY(0) skewX(0);
			filter: blur(0);
		}
	}

	.hero-word {
		display: inline-block;
		animation: hero-word-in var(--hero-word-anim, 550ms) cubic-bezier(0.2, 0.8, 0.2, 1) both;
		will-change: transform, opacity, filter;
	}

	.hero-line2 {
		display: block;
		line-height: 0.85;
		height: 1em;
		width: fit-content;
		max-width: 100%;
		transform-origin: left top;
		transition:
			height 0.7s cubic-bezier(0.7, 0.05, 0.25, 1),
			opacity 0.45s ease,
			transform 0.7s cubic-bezier(0.7, 0.05, 0.25, 1),
			filter 0.45s ease;
		overflow: hidden;
		will-change: height, opacity, transform;
	}

	.hero-line2.is-collapsing {
		height: 0;
		opacity: 0;
		transform: scaleY(0.2);
		filter: blur(4px);
	}

	@media (min-width: 768px) {
		.hero-line2 {
			font-size: 0.82em;
		}
	}

	.hero-replay {
		display: block;
		margin-top: 20px;
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--c-text-45, #888);
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 6px 0;
		opacity: 0;
		transform: translateY(4px);
		transition:
			opacity 0.5s ease 0.35s,
			transform 0.5s ease 0.35s,
			color 0.2s;
	}

	.hero-replay.is-visible {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-replay:hover {
		color: var(--c-accent);
	}

	.hero-replay span {
		color: var(--c-accent);
		margin-right: 6px;
	}
</style>
