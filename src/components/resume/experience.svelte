<script>
	import { experience } from '../../data/data.js';
</script>

<h1 class="text-3xl md:text-4xl col-start-1 mb-2 mt-10">Experience</h1>

{#if experience.length}
	{#each experience as job}
		<div class="mb-10">
			<div class="flex justify-between flex-col sm:flex-row mb-1">
				<span class="text-xl col-start-1">{job.title}</span>
				<span class="pr-10">{job.dates.start} – {job.dates.end}</span>
			</div>
			<p class="col-start-1 mt-1">{job.company}</p>
			{#if job.description.length}
				<ul class="col-start-1 list-disc list-outside pl-5 mt-3">
					{#each job.description as description}
						<li>{description}</li>
					{/each}
				</ul>
			{/if}
			{#if job.projects.length}
				{#each job.projects as project}
					<p class="col-start-1 mt-6">{project.name}</p>
					<p class="col-start-1 text-sm mb-2">
						{#if project.techStack.length}
							{`TECH STACK - ${project.techStack.join(' | ')}`}
						{/if}
					</p>
					{#if project.description.length}
						<ul class="col-start-1 list-disc list-outside pl-5">
							{#each project.description as description}
								<li>{description}</li>
							{/each}
						</ul>
					{/if}
				{/each}
			{/if}
		</div>
	{/each}
{/if}
