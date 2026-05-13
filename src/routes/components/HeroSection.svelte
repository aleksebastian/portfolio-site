<script lang="ts">
import type { Experience } from '$lib/types';

let { experience } = $props<{ experience: Experience[] }>();

const heroAbout =
	'I build full-stack web products with TypeScript and Node.js, working across modern frontend frameworks including React, Svelte, and Next.js, focused on clean UX, solid architecture, and measurable results.';

const shortYear = (date: string) => date.split(' ').pop() ?? date;

const compactRange = (start: string, end: string): string => {
	const s = shortYear(start);
	if (end === 'Present') return `${s} —`;
	const e = shortYear(end);
	return s === e ? s : `${s} — ${e.slice(-2)}`;
};

const HERO_WORDS = ['fast', 'polished', 'a11y', 'scalable', 'secure', 'tested', 'human'];

let heroWordIndex = $state(0);
let heroPhase = $state<'cycling' | 'done'>('cycling');
let heroKey = $state(0);

$effect(() => {
	if (heroPhase !== 'cycling') return;
	const total = HERO_WORDS.length;
	if (heroWordIndex >= total - 1) {
		const t = setTimeout(() => (heroPhase = 'done'), 850);
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

const replayHero = () => {
	heroWordIndex = 0;
	heroPhase = 'cycling';
	heroKey++;
};

const heroWord = $derived(HERO_WORDS[heroWordIndex] || '');
</script>

<section id="hero" class="border-b border-(--c-line-10) px-6 pt-8 pb-6 md:px-12 md:pt-22 lg:px-24">
	<div class="grid items-start gap-8 lg:h-133 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:gap-12">
		<div>
			<div
				class="mb-6 flex items-center gap-6 font-mono text-[10px] tracking-[0.16em] text-(--c-text-45) uppercase"
			>
				<span>[HERO_001]</span>
				<span class="text-(--c-accent)">SOFTWARE_ENGINEER</span>
				<span>EST. 2019</span>
			</div>

			<h1
				class="font-display text-[clamp(4.15rem,14.2vw,11.35rem)] leading-[0.84] font-bold tracking-[-0.06em] text-(--c-text) uppercase"
				aria-label="Builds things."
			>
				<span class="block">Builds</span>
				<span class="hero-line2" aria-hidden="true">
					{#key `${heroKey}:${heroWordIndex}`}
						<span class="hero-word -ml-1 bg-(--c-accent) px-2 text-(--c-text-inverse) md:px-3"
							>{heroWord}</span
						>
					{/key}
				</span>
				<span class="block">things.</span>
			</h1>
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

		<aside class="border border-(--c-line-20) p-5 md:p-6">
			<p class="mb-4 font-mono text-[10px] tracking-[0.16em] text-(--c-text-45) uppercase">
				// ABOUT
			</p>
			<p class="mb-6 text-[0.93rem] leading-[1.58] text-(--c-text-68)">
				{heroAbout}
			</p>

			<div class="space-y-0 border-t border-(--c-line-10)">
				{#each experience.slice(0, 3) as job (`${job.company}-${job.title}-${job.dates.start}`)}
					<div
						class="grid grid-cols-[5.1rem_1fr] items-start gap-x-3 border-t border-(--c-line-10) py-3 first:border-t-0"
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
	min-height: 1em;
	width: fit-content;
	max-width: 100%;
	overflow: hidden;
}

@media (min-width: 768px) {
	.hero-line2 {
		font-size: 0.82em;
	}
}

.hero-replay {
	display: block;
	margin-top: 20px;
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
