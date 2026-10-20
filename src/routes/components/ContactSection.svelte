<script lang="ts">
	import { site } from '#lib/site.js';

	const elsewhereLinks = [
		{ href: site.links.github, text: 'GITHUB' },
		{ href: site.links.linkedin, text: 'LINKEDIN' }
	];
</script>

<section id="contact" class="border-b border-(--c-line-10) px-6 py-10 md:p-12 lg:px-24">
	<p class="mb-8 font-mono text-[10px] tracking-widest text-(--c-accent-text) uppercase">
		// STATUS: {site.availability}
	</p>

	<h2
		class="font-display mb-12 text-[clamp(3rem,10vw,8rem)] leading-none font-bold tracking-tight text-(--c-text) uppercase"
	>
		Got something<br /><em class="text-(--c-accent-text) not-italic">worth</em><br />building?
	</h2>

	<div class="flex flex-col gap-3 sm:flex-row">
		<a
			href={`mailto:${site.email}`}
			class="group inline-flex items-center gap-3 border-2 border-(--c-line-20) px-6 py-4 font-mono text-xs tracking-widest text-(--c-text) uppercase transition-all duration-200 hover:border-(--c-accent) hover:bg-(--c-accent) hover:text-(--c-text-inverse)"
		>
			{site.email}
			<span class="transition-transform group-hover:translate-x-1">→</span>
		</a>
		<a
			href="/Alek%20Ortiz%20resume.pdf"
			download="Alek Ortiz resume.pdf"
			class="inline-flex items-center gap-3 border-2 border-(--c-line-10) px-6 py-4 font-mono text-xs tracking-widest text-(--c-text-faint) uppercase transition-all duration-200 hover:border-(--c-line-30) hover:text-(--c-text-muted)"
		>
			DOWNLOAD CV [.PDF]
		</a>
	</div>

	<div
		class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] tracking-widest uppercase"
	>
		<span class="text-(--c-text-faint)">ELSEWHERE —</span>
		{#each elsewhereLinks as link (link.href)}
			<a
				href={link.href}
				target="_blank"
				rel="noopener noreferrer"
				class="group inline-flex items-center gap-1.5 text-(--c-text-muted) transition-colors hover:text-(--c-accent-text)"
			>
				{link.text}
				<span class="sr-only">(opens in new tab)</span>
				<span
					aria-hidden="true"
					class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
					>↗</span
				>
			</a>
		{/each}
	</div>
</section>
