<script lang="ts">
	import type { Resume } from '#lib/types.js';
	import resumeData from '#lib/data/resume.json';

	const { education } = resumeData as Resume;
</script>

<h1 class="col-start-1 mt-10 mb-5 text-3xl md:text-4xl">Education</h1>
{#if education.length}
	{#each education as degree (`${degree.school}-${degree.degreeName}`)}
		<div class="mb-6">
			<div class="col-start-1 flex flex-col justify-between sm:flex-row">
				<span class="col-start-1 text-xl">{degree.school}</span>
				<span class="pr-10">{degree.dates.start} – {degree.dates.end}</span>
			</div>
			<span class="col-start-1 text-sm">{degree.degreeName}</span>
			{#if degree.distinctions.length}
				<p class="text-sm">{degree.distinctions.join(' | ')}</p>
			{/if}
			{#if degree.description.length}
				{#each degree.description as description (`${degree.school}-${description}`)}
					<p>{description}</p>
				{/each}
			{/if}
		</div>
	{/each}
{/if}
