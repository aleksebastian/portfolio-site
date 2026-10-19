<script lang="ts">
	let { skills } = $props<{ skills: string[] }>();

	// Keep a constant scroll speed as the skills list grows (tuned at 90s for 25 skills).
	const SECONDS_PER_SKILL = 3.6;
	const tickerDuration = $derived(`${skills.length * SECONDS_PER_SKILL}s`);
</script>

<section
	id="skills"
	class="overflow-hidden border-b border-(--c-line-10) bg-(--c-accent) py-3 select-none"
>
	<div class="ticker-wrapper overflow-hidden" aria-hidden="true">
		<div
			class="ticker-track animate-ticker flex w-max items-center gap-7"
			style:--ticker-duration={tickerDuration}
		>
			{#each [0, 1, 2, 3] as _, tickerIndex (tickerIndex)}
				{#each skills as skill, skillIndex (`${tickerIndex}-${skillIndex}`)}
					<span
						class="font-display text-[clamp(1.55rem,2vw,1.95rem)] leading-none font-semibold tracking-tight whitespace-nowrap text-(--c-text-inverse) uppercase"
					>
						{skill}
					</span>
					<span
						class="font-display inline-flex translate-y-[0.1em] items-center justify-center text-[clamp(1.55rem,2vw,1.95rem)] leading-none whitespace-nowrap text-(--c-text-inverse-70)"
						aria-hidden="true"
					>
						*
					</span>
				{/each}
			{/each}
		</div>
	</div>
</section>
