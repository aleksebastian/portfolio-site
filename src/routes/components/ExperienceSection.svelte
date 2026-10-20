<script lang="ts">
	import type { Education, Experience } from '#lib/types.js';

	let { experience, education } = $props<{ experience: Experience[]; education: Education[] }>();
</script>

<section id="experience" class="border-b border-(--c-line-10) px-6 py-10 md:p-12 lg:px-24">
	<div class="mb-6 md:mb-8">
		<p class="mb-3 font-mono text-[10px] tracking-widest text-(--c-text-40) uppercase">
			// EXPERIENCE
		</p>
		<h2
			class="font-display text-[clamp(2.5rem,7vw,5rem)] leading-none font-bold text-(--c-text) uppercase"
		>
			Where I've<br /><em class="text-(--c-accent) not-italic">shipped.</em>
		</h2>
	</div>

	<div class="space-y-0">
		{#each experience as job, i (`${job.company}-${job.title}-${job.dates.start}`)}
			<div
				class={`border-t border-(--c-line-10) pt-6 ${i < experience.length - 1 ? 'pb-6' : 'pb-0'}`}
			>
				<div class="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
					<div>
						<h3 class="font-display text-xl font-bold text-(--c-text)">{job.title}</h3>
						<p class="mt-1 font-mono text-[10px] tracking-widest text-(--c-accent) uppercase">
							{job.company}
						</p>
					</div>
					<span class="shrink-0 font-mono text-[10px] tracking-widest text-(--c-text-40) uppercase">
						{job.dates.start} — {job.dates.end}
					</span>
				</div>
				{#if job.description.length}
					<ul class="mt-4 space-y-2">
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
								<p class="font-display mb-1 text-sm font-bold text-(--c-text-80)">
									{project.name}
								</p>
								{#if project.techStack.length}
									<p
										class="mb-2 font-mono text-[10px] tracking-widest text-(--c-accent-70) uppercase"
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

	{#if education.length}
		<div class="mt-10 border-t border-(--c-line-10) pt-6">
			<p class="mb-2 font-mono text-[10px] tracking-widest text-(--c-text-40) uppercase">
				// EDUCATION
			</p>
			{#each education as degree (`${degree.school}-${degree.degreeName}`)}
				<div
					class="flex flex-col gap-1 border-t border-(--c-line-10) py-4 first-of-type:border-t-0 sm:flex-row sm:items-baseline sm:justify-between"
				>
					<div>
						<h3 class="font-display text-base font-bold text-(--c-text)">{degree.degreeName}</h3>
						<p class="mt-1 font-mono text-[10px] tracking-widest text-(--c-accent) uppercase">
							{degree.school}
						</p>
						{#if degree.distinctions.length}
							<p class="mt-1 font-mono text-[10px] tracking-widest text-(--c-text-40) uppercase">
								{degree.distinctions.join(' · ')}
							</p>
						{/if}
					</div>
					<span class="shrink-0 font-mono text-[10px] tracking-widest text-(--c-text-40) uppercase">
						{degree.dates.start} — {degree.dates.end}
					</span>
				</div>
			{/each}
		</div>
	{/if}
</section>
