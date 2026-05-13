<script lang="ts">
	let { skills } = $props<{ skills: string[] }>();
</script>

<section
	id="skills"
	class="overflow-hidden border-b border-(--c-line-10) bg-(--c-accent) py-3 select-none"
>
	<div class="ticker-wrapper overflow-hidden" aria-hidden="true">
		<div class="ticker-track flex w-max items-center gap-7 animate-ticker">
			{#each [0, 1, 2, 3] as _, tickerIndex (tickerIndex)}
				{#each skills as skill, skillIndex (`${tickerIndex}-${skillIndex}`)}
					<span
						class="whitespace-nowrap font-display text-[clamp(1.55rem,2vw,1.95rem)] font-semibold uppercase leading-none tracking-tight text-(--c-text-inverse)"
					>
						{skill}
					</span>
					<span
						class="whitespace-nowrap inline-flex items-center justify-center font-display text-[clamp(1.55rem,2vw,1.95rem)] leading-none text-(--c-text-inverse-70) translate-y-[0.1em]"
						aria-hidden="true"
					>
						*
					</span>
				{/each}
			{/each}
		</div>
	</div>
</section>
