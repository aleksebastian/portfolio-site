<script lang="ts">
	import type { Experience } from '#lib/types.js';

	let { experience, heroAbout } = $props<{ experience: Experience[]; heroAbout: string }>();

	const shortYear = (date: string) => date.split(' ').pop() ?? date;

	const compactRange = (start: string, end: string): string => {
		const s = shortYear(start);
		if (end === 'Present') return `${s} —`;
		const e = shortYear(end);
		return s === e ? s : `${s} — ${e.slice(-2)}`;
	};

	const HERO_WORDS = ['fast', 'polished', 'a11y', 'scalable', 'secure', 'tested', 'human'];

	let heroWordIndex = $state(0);
	let heroPhase = $state<'cycling' | 'collapsing' | 'done'>('cycling');
	let heroKey = $state(0);

	$effect(() => {
		if (heroPhase !== 'cycling') return;
		const total = HERO_WORDS.length;
		if (heroWordIndex >= total - 1) {
			const t = setTimeout(() => (heroPhase = 'collapsing'), 850);
			return () => clearTimeout(t);
		}
		const startMs = 1100,
			endMs = 160;
		const steps = total - 2;
		const ratio = Math.pow(endMs / startMs, 1 / Math.max(1, steps));
		const delay = Math.round(startMs * Math.pow(ratio, heroWordIndex));
		const animMs = Math.max(180, Math.min(550, Math.round(delay * 0.55)));
		document.documentElement.style.setProperty('--hero-word-anim', animMs + 'ms');
		const t = setTimeout(() => heroWordIndex++, delay);
		return () => clearTimeout(t);
	});

	$effect(() => {
		if (heroPhase !== 'collapsing') return;
		const t = setTimeout(() => (heroPhase = 'done'), 700);
		return () => clearTimeout(t);
	});

	const replayHero = () => {
		heroWordIndex = 0;
		heroPhase = 'cycling';
		heroKey++;
	};

	const heroWord = $derived(HERO_WORDS[heroWordIndex] || '');
	const heroWordCollapsing = $derived(heroPhase === 'collapsing' || heroPhase === 'done');
</script>

<!-- min-h (not h): the grid keeps the lg fold height but grows if the sidebar content runs longer. -->
<section
	id="hero"
	class="border-b border-(--c-line-10) px-6 pt-6 pb-4 md:px-12 md:pt-22 md:pb-6 lg:px-24"
>
	<div
		class="grid items-start gap-6 md:gap-8 lg:min-h-133 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:gap-12"
	>
		<div>
			<div
				class="mb-4 flex items-center gap-6 font-mono text-[10px] tracking-[0.16em] text-(--c-text-45) uppercase md:mb-6"
			>
				<span>[HERO_001]</span>
				<span class="text-(--c-accent)">SOFTWARE_ENGINEER</span>
				<span>EST. 2019</span>
			</div>

			<!-- eslint-disable tailwindcss/no-unnecessary-arbitrary-value -- the suggested v3 values (leading-0.84 etc.) mean something else in Tailwind 4 -->
			<h1
				class="font-display text-[clamp(4.15rem,14.2vw,11.35rem)] leading-[0.84] font-bold tracking-[-0.06em] text-(--c-text) uppercase"
				aria-label="Builds things."
			>
				<span class="block">Builds</span>
				<span class="hero-line2" class:is-collapsing={heroWordCollapsing} aria-hidden="true">
					{#key `${heroKey}:${heroWordIndex}`}
						<span class="hero-word -ml-1 bg-(--c-accent) px-2 text-(--c-text-inverse) md:px-3"
							>{heroWord}</span
						>
					{/key}
				</span>
				<span class="block">things.</span>
			</h1>
			<!-- eslint-enable tailwindcss/no-unnecessary-arbitrary-value -->
			<button
				type="button"
				class="hero-replay"
				class:is-visible={heroPhase === 'done'}
				style:pointer-events={heroPhase === 'done' ? 'auto' : 'none'}
				onclick={replayHero}
			>
				<span>↻</span> Replay
			</button>
		</div>

		<aside class="border border-(--c-line-20) p-4 md:p-6">
			<p class="mb-3 font-mono text-[10px] tracking-[0.16em] text-(--c-text-45) uppercase md:mb-4">
				// ABOUT
			</p>
			<!-- eslint-disable tailwindcss/no-unnecessary-arbitrary-value -- the suggested v3 values (leading-0.84 etc.) mean something else in Tailwind 4 -->
			<p class="mb-4 text-[0.93rem] leading-[1.58] text-(--c-text-68) md:mb-6">
				{heroAbout}
			</p>
			<!-- eslint-enable tailwindcss/no-unnecessary-arbitrary-value -->

			<div class="space-y-0 border-t border-(--c-line-10)">
				{#each experience.slice(0, 3) as job, i (`${job.company}-${job.title}-${job.dates.start}`)}
					<!-- Mobile shows only the current role so the skills ticker stays on the first screen. -->
					<div
						class={`${i > 0 ? 'hidden md:grid' : 'grid'} grid-cols-[5.1rem_1fr] items-start gap-x-3 border-t border-(--c-line-10) py-3 first:border-t-0`}
					>
						<span
							class="pt-0.5 font-mono text-[10px] tracking-[0.16em] whitespace-nowrap text-(--c-text-45) uppercase"
						>
							{compactRange(job.dates.start, job.dates.end)}
						</span>
						<div>
							<p class="font-mono text-[10px] tracking-[0.14em] text-(--c-text-75) uppercase">
								{job.title}
							</p>
							<p class="font-mono text-[10px] tracking-[0.14em] text-(--c-accent) uppercase">
								{job.company}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</aside>
	</div>
</section>

<style>
	@keyframes hero-word-in {
		0% {
			opacity: 0;
			transform: translateY(0.35em) skewX(-6deg);
			filter: blur(6px);
		}
		60% {
			filter: blur(0);
		}
		100% {
			opacity: 1;
			transform: translateY(0) skewX(0);
			filter: blur(0);
		}
	}

	.hero-word {
		display: inline-block;
		animation: hero-word-in var(--hero-word-anim, 550ms) cubic-bezier(0.2, 0.8, 0.2, 1) both;
		will-change: transform, opacity, filter;
	}

	.hero-line2 {
		display: block;
		line-height: 0.85;
		height: 1em;
		width: fit-content;
		max-width: 100%;
		transform-origin: left top;
		transition:
			height 0.7s cubic-bezier(0.7, 0.05, 0.25, 1),
			opacity 0.45s ease,
			transform 0.7s cubic-bezier(0.7, 0.05, 0.25, 1),
			filter 0.45s ease;
		overflow: hidden;
		will-change: height, opacity, transform;
	}

	@media (min-width: 768px) {
		.hero-line2 {
			font-size: 0.82em;
		}

		/* Mobile keeps the last word: the ticker sits on the first screen there, and
		   collapsing the line would shift it up mid-view. */
		.hero-line2.is-collapsing {
			height: 0;
			opacity: 0;
			transform: scaleY(0.2);
			filter: blur(4px);
		}
	}

	.hero-replay {
		display: block;
		margin-top: 12px;
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--c-text-45, #888);
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 6px 0;
		opacity: 0;
		transform: translateY(4px);
		transition:
			opacity 0.5s ease 0.35s,
			transform 0.5s ease 0.35s,
			color 0.2s;
	}

	@media (min-width: 768px) {
		.hero-replay {
			margin-top: 20px;
		}
	}

	.hero-replay.is-visible {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-replay:hover {
		color: var(--c-accent);
	}

	.hero-replay span {
		color: var(--c-accent);
		margin-right: 6px;
	}
</style>
