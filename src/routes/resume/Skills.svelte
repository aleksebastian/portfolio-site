<script lang="ts">
	import type { Resume } from '#lib/types.js';
	import resumeData from '#lib/data/resume.json';
	import Download from './Download.svelte';

	const { skills } = resumeData as Resume;
</script>

<div
	class="md:border-light-blue-700 md:col-start-2 md:row-start-1 md:border-l-2 md:border-solid md:pl-4"
>
	<h1 class="mb-5 text-3xl md:text-4xl">Skills</h1>
	<div class="pl-1">
		{#if skills.length}
			{#each skills as skill (skill.category)}
				<p class="mt-5 text-xl">{skill.category}</p>
				{#if skill.names.length}
					{#each skill.names as name (name)}
						<p>{name}</p>
					{/each}
				{/if}
			{/each}
		{/if}
		<Download />
	</div>
</div>
