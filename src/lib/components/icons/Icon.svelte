<script lang="ts">
	import type { IconData } from './icons.js';

	let { icon }: { icon: IconData } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox={icon.viewBox} aria-hidden="true">
	<path d={icon.d} />
</svg>

<style>
	svg {
		stroke: currentColor;
		fill: currentColor;
		stroke-width: 0;
		width: 100%;
		height: auto;
		max-height: 100%;
	}
</style>
