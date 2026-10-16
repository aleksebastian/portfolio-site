<script lang="ts">
	import type { Resume } from '#lib/types.js';
	import resumeData from '#lib/data/resume.json';

	const { experience } = resumeData as Resume;
</script>

<h1 class="col-start-1 mt-10 mb-2 text-3xl md:text-4xl">Experience</h1>

{#if experience.length}
	{#each experience as job (`${job.company}-${job.title}-${job.dates.start}`)}
		<div class="mb-10">
			<div class="mb-1 flex flex-col justify-between sm:flex-row">
				<span class="col-start-1 text-xl">{job.title}</span>
				<span class="pr-10">{job.dates.start} – {job.dates.end}</span>
			</div>
			<p class="col-start-1 mt-1">{job.company}</p>
			{#if job.description.length}
				<ul class="col-start-1 mt-3 list-outside list-disc pl-5">
					{#each job.description as description (`${job.company}-${description}`)}
						<li>{description}</li>
					{/each}
				</ul>
			{/if}
			{#if job.projects.length}
				{#each job.projects as project (project.name)}
					<p class="col-start-1 mt-6">{project.name}</p>
					<p class="col-start-1 mb-2 text-sm">
						{#if project.techStack.length}
							{`TECH STACK - ${project.techStack.join(' | ')}`}
						{/if}
					</p>
					{#if project.description.length}
						<ul class="col-start-1 list-outside list-disc pl-5">
							{#each project.description as description (`${project.name}-${description}`)}
								<li>{description}</li>
							{/each}
						</ul>
					{/if}
				{/each}
			{/if}
		</div>
	{/each}
{/if}
