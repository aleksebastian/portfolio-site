<script lang="ts">
	import type { PortfolioProject } from '#lib/types.js';

	interface Props {
		projects: PortfolioProject[];
		projectsError: boolean;
		projectStartYear: number;
		projectEndYear: number;
	}

	let { projects, projectsError, projectStartYear, projectEndYear }: Props = $props();

	const projectAccent = ['#7ef4c6', '#9bb4ff', '#f6bf5f', '#ff8a65', '#6fd3ff', 'var(--c-text)'];

	interface CardLayout {
		card: string;
		heading: string;
		long: boolean;
	}

	const WIDE: CardLayout = {
		card: 'md:col-span-3 md:h-82.5',
		heading: 'text-[clamp(2rem,3.4vw,2.75rem)]',
		long: true
	};
	const REGULAR: CardLayout = {
		card: 'md:h-99.5',
		heading: 'text-[clamp(1.5rem,2.35vw,1.9rem)]',
		long: false
	};

	// Bento layout for a full set of six projects.
	const BENTO: CardLayout[] = [
		{ card: 'md:col-span-2 md:h-107.5', heading: 'text-[clamp(2.4rem,5vw,3.7rem)]', long: true },
		{ card: 'md:h-107.5', heading: 'text-[clamp(1.75rem,3vw,2.3rem)]', long: false },
		REGULAR,
		REGULAR,
		REGULAR,
		WIDE
	];

	// With fewer projects, use regular cards and let a lone card on the last row span it.
	const layoutFor = (i: number, count: number): CardLayout => {
		if (count === BENTO.length) return BENTO[i];
		return i === count - 1 && count % 3 === 1 ? WIDE : REGULAR;
	};
</script>

<section id="projects" class="border-b border-(--c-line-10) px-6 py-10 md:p-12 lg:px-24">
	<div class="mb-2 flex items-end justify-between gap-8 md:mb-4">
		<!-- eslint-disable tailwindcss/no-unnecessary-arbitrary-value -- the suggested v3 values (leading-0.84 etc.) mean something else in Tailwind 4 -->
		<h2
			class="font-display text-[clamp(2rem,5.6vw,3.45rem)] leading-[0.82] font-bold tracking-[-0.04em] text-(--c-text) uppercase"
		>
			Recent<br />Work.
		</h2>
		<!-- eslint-enable tailwindcss/no-unnecessary-arbitrary-value -->
		{#if !projectsError}
			<p
				class="hidden font-mono text-[10px] tracking-[0.2em] text-(--c-text-50) uppercase md:block"
			>
				[{projects.length}
				{projects.length === 1 ? 'PROJECT' : 'PROJECTS'} · {projectStartYear} -> {projectEndYear}]
			</p>
		{/if}
	</div>

	<div class="grid grid-cols-1 gap-3 md:grid-cols-3">
		{#each projects as repo, i (repo.name)}
			{@const cardHref = repo.homepage || repo.url}
			{@const layout = layoutFor(i, projects.length)}
			{@const isLongCard = layout.long}
			{@const mockupPanelClass = isLongCard
				? 'h-40 w-full md:h-full md:w-[45%] md:min-w-[9.75rem]'
				: 'h-[34%] min-h-[6rem] w-full'}
			{@const mockupFocusClass = isLongCard ? 'bg-center' : 'bg-top'}
			<a
				href={cardHref}
				target="_blank"
				rel="noopener noreferrer"
				style={`--card-color: ${projectAccent[i % projectAccent.length]};`}
				class={`group relative isolate overflow-visible border border-(--card-color) bg-(--c-surface) p-4 transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-5 ${layout.card}`}
			>
				<span
					aria-hidden="true"
					class="pointer-events-none absolute inset-0 -z-10 translate-1.5 border border-(--card-color) opacity-40 transition-transform duration-300 group-hover:translate-2"
				></span>

				<div
					class={`relative z-10 flex h-full min-h-0 gap-4 ${isLongCard ? 'flex-col md:flex-row' : 'flex-col'}`}
				>
					<div
						class={`pointer-events-none relative overflow-hidden border border-(--c-line-12) bg-(--c-surface-muted) ${mockupPanelClass}`}
					>
						<!-- eslint-disable tailwindcss/no-unnecessary-arbitrary-value -- the suggested v3 values (leading-0.84 etc.) mean something else in Tailwind 4 -->
						<div
							class={`absolute inset-0 bg-cover ${mockupFocusClass} opacity-80 contrast-[0.9] grayscale-[0.6] saturate-[0.78] transition-[opacity,filter,transform] duration-300 ease-out group-hover:scale-[1.01] group-hover:opacity-94 group-hover:contrast-100 group-hover:grayscale-[0.18] group-hover:saturate-[0.95]`}
							style={`background-image: linear-gradient(to top, rgba(var(--c-bg-rgb), 0.5), rgba(var(--c-bg-rgb), 0.12) 58%, rgba(var(--c-bg-rgb), 0.04)), url('${repo.coverImage}');`}
						></div>
						<!-- eslint-enable tailwindcss/no-unnecessary-arbitrary-value -->
					</div>

					<div class="flex min-h-0 flex-1 flex-col">
						<div
							class="flex items-center justify-between font-mono text-[10px] tracking-[0.14em] text-(--c-text-60) uppercase"
						>
							<span>[{String(i + 1).padStart(2, '0')}]</span>
							<span>{repo.year ?? ''}</span>
						</div>

						<div class="mt-auto">
							<!-- eslint-disable tailwindcss/no-unnecessary-arbitrary-value -- the suggested v3 values (leading-0.84 etc.) mean something else in Tailwind 4 -->
							<h3
								class={`font-display leading-[0.94] font-bold tracking-[-0.03em] text-(--c-text) ${layout.heading}`}
							>
								{repo.name.replace(/-/g, ' ')}
								<span class="sr-only">(opens in new tab)</span>
							</h3>
							<!-- eslint-enable tailwindcss/no-unnecessary-arbitrary-value -->

							{#if repo.description}
								<p class="mt-3 max-w-2xl text-sm leading-relaxed text-(--c-text-60)">
									{repo.description}
								</p>
							{/if}

							{#if repo.topics.length}
								<p
									class="mt-3 font-mono text-[10px] tracking-[0.15em] text-(--c-text-60) uppercase"
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
