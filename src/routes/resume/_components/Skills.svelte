<script>
	import { skills } from '$lib/data/resume.json';
	import Download from './Download.svelte';
</script>

<div
	class="md:col-start-2 md:row-start-1 md:pl-4 md:border-light-blue-700 md:border-l-2 md:border-solid"
>
	<h1 class="text-3xl md:text-4xl mb-5">Skills</h1>
	<div class="pl-1">
		{#if skills.length}
			{#each skills as skill}
				<p class="mt-5 text-xl">{skill.category}</p>
				{#if skill.names.length}
					{#each skill.names as name}
						<p>{name}</p>
					{/each}
				{/if}
			{/each}
		{/if}
		<!-- <Download /> -->
	</div>
</div>
