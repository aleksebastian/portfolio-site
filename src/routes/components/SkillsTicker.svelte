<script lang="ts">
	import type { Skill } from '#lib/types.js';

	interface Props {
		skills: Skill[];
	}

	let { skills }: Props = $props();

	const names = $derived(skills.flatMap((s) => s.names));

	// Keep a constant scroll speed as the skills list grows; one loop scrolls one copy of the list.
	const SECONDS_PER_SKILL = 1.8;
	const tickerDuration = $derived(`${names.length * SECONDS_PER_SKILL}s`);

	let isPaused = $state(false);
</script>

<section
	id="skills"
	aria-labelledby="skills-heading"
	class="relative overflow-hidden border-b border-(--c-line-10) bg-(--c-accent) py-3 select-none"
>
	<h2 id="skills-heading" class="sr-only">Skills</h2>
	<!-- The visual ticker is decorative; screen readers get the grouped list instead. -->
	<ul class="sr-only">
		{#each skills as group (group.category)}
			<li>{group.category}: {group.names.join(', ')}</li>
		{/each}
	</ul>

	<div class="ticker-wrapper overflow-hidden" aria-hidden="true">
		<div
			class="ticker-track animate-ticker flex w-max items-center gap-7"
			class:is-paused={isPaused}
			style:--ticker-duration={tickerDuration}
		>
			{#each [0, 1] as _, tickerIndex (tickerIndex)}
				{#each names as skill, skillIndex (`${tickerIndex}-${skillIndex}`)}
					<span
						class="font-display text-[clamp(1.55rem,2vw,1.95rem)] leading-none font-semibold tracking-tight whitespace-nowrap text-(--c-text-inverse) uppercase"
					>
						{skill}
					</span>
					<span
						class="font-display inline-flex translate-y-[0.1em] items-center justify-center text-[clamp(1.55rem,2vw,1.95rem)] leading-none whitespace-nowrap text-(--c-text-inverse-70)"
					>
						*
					</span>
				{/each}
			{/each}
		</div>
	</div>

	<button
		type="button"
		class="ticker-toggle absolute inset-y-0 right-0 flex items-center bg-(--c-accent) px-3 font-mono text-[10px] tracking-widest text-(--c-text-inverse) uppercase"
		aria-pressed={isPaused}
		onclick={() => (isPaused = !isPaused)}
	>
		<span aria-hidden="true">{isPaused ? '▶' : '❚❚'}</span>
		<span class="sr-only">{isPaused ? 'Play' : 'Pause'} skills ticker</span>
	</button>
</section>
