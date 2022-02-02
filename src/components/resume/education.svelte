<script>
	import { education } from '../../data/data.json';
</script>

<h1 class="text-3xl md:text-4xl col-start-1 mb-5 mt-10">Education</h1>
{#if education.length}
	{#each education as degree}
		<div class="mb-6">
			<div class="col-start-1 flex justify-between flex-col sm:flex-row">
				<span class="text-xl col-start-1">{degree.school}</span>
				<span class="pr-10">{degree.dates.start} – {degree.dates.end}</span>
			</div>
			<span class="col-start-1 text-sm">{degree.degreeName}</span>
			{#if degree.distinctions.length}
				<p class="text-sm">{degree.distinctions.join(' | ')}</p>
			{/if}
			{#if degree.description.length}
				{#each degree.description as description}
					<p>{description}</p>
				{/each}
			{/if}
		</div>
	{/each}
{/if}
