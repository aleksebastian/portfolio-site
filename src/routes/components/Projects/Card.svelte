<script lang="ts">
	import type { PortfolioProject } from '$lib/types';

	let { repo } = $props<{ repo: PortfolioProject }>();
</script>

<div
	class="group flex flex-col border-2 border-[#f0f0f0]/20 hover:border-[#F5F500] overflow-hidden transition-all duration-300"
>
	<!-- Image -->
	<div class="relative w-full aspect-video overflow-hidden border-b border-[#f0f0f0]/10">
		<img
			src={repo.coverImage}
			alt={`${repo.name} screenshot`}
			class="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
			loading="lazy"
		/>
	</div>

	<!-- Content -->
	<div
		class="flex flex-col flex-1 p-5 bg-[#0a0a0a] group-hover:bg-[#F5F500] transition-colors duration-300"
	>
		<!-- Header row -->
		<div class="flex items-start justify-between gap-2 mb-3">
			<h3
				class="font-display font-bold text-base leading-tight text-[#f0f0f0] group-hover:text-[#0a0a0a] transition-colors duration-300"
			>
				{repo.name.replace(/-/g, ' ')}
			</h3>
			<div class="flex gap-1 shrink-0 mt-0.5">
				{#if repo.homepage}
					<a
						href={repo.homepage}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="{repo.name} live demo"
						class="font-mono text-xs border border-[#f0f0f0]/30 group-hover:border-[#0a0a0a]/40 text-[#f0f0f0]/60 group-hover:text-[#0a0a0a]/70 px-2 py-0.5 hover:opacity-70 transition-all"
					>
						↗
					</a>
				{/if}
				<a
					href={repo.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="{repo.name} GitHub repository"
					class="font-mono text-xs border border-[#f0f0f0]/30 group-hover:border-[#0a0a0a]/40 text-[#f0f0f0]/60 group-hover:text-[#0a0a0a]/70 px-2 py-0.5 hover:opacity-70 transition-all"
				>
					GH
				</a>
			</div>
		</div>

		{#if repo.description}
			<p
				class="text-[#f0f0f0]/60 group-hover:text-[#0a0a0a]/70 text-sm leading-relaxed mb-4 transition-colors duration-300 flex-1"
			>
				{repo.description}
			</p>
		{/if}

		{#if repo.topics.length}
			<div class="flex flex-wrap gap-1.5 mt-auto">
				{#each repo.topics as topic}
					<span
						class="font-mono text-[10px] uppercase tracking-widest border border-[#f0f0f0]/20 group-hover:border-[#0a0a0a]/30 text-[#f0f0f0]/50 group-hover:text-[#0a0a0a]/60 px-2 py-0.5 transition-colors duration-300"
					>
						{topic}
					</span>
				{/each}
			</div>
		{/if}
	</div>
</div>

