<script lang="ts">
	import type { PortfolioProject } from '$lib/types';

	let { projects, projectStartYear, projectEndYear } = $props<{
		projects: PortfolioProject[];
		projectStartYear: number;
		projectEndYear: number;
	}>();

	const projectAccent = ['#7ef4c6', '#9bb4ff', '#f6bf5f', '#ff8a65', '#6fd3ff', 'var(--c-text)'];
</script>

<section id="projects" class="border-b border-(--c-line-10) px-6 py-10 md:py-12 md:px-12 lg:px-24">
	<div class="mb-2 flex items-end justify-between gap-8 md:mb-4">
		<h2
			class="font-display text-[clamp(2rem,5.6vw,3.45rem)] font-bold uppercase leading-[0.82] tracking-[-0.04em] text-(--c-text)"
		>
			Recent<br />Work.
		</h2>
		<p class="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-(--c-text-45) md:block">
			[{projects.length} PROJECTS · {projectStartYear} -> {projectEndYear}]
		</p>
	</div>

	<div class="grid grid-cols-1 gap-3 md:grid-cols-3">
		{#each projects as repo, i (repo.name)}
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
