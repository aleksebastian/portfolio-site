<script lang="ts">
	import { site } from '#lib/site.js';
</script>

<footer
	class="flex flex-col items-start justify-between gap-3 p-6 sm:flex-row sm:items-center md:px-12 lg:px-24"
>
	<span class="font-mono text-[10px] tracking-widest text-(--c-text-faint) uppercase">
		© {new Date().getFullYear()}
		{site.name}
	</span>
	<div class="flex flex-col gap-3 sm:flex-row sm:gap-8">
		<span class="font-mono text-[10px] tracking-widest text-(--c-text-faint) uppercase">
			BUILT WITH SVELTE + <span role="img" aria-label="music">🎧</span>
		</span>
		<span class="font-mono text-[10px] tracking-widest text-(--c-text-faint) uppercase">
			v{site.version}
		</span>
	</div>
</footer>
