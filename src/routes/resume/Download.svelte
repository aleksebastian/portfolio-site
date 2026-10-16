<script lang="ts">
	import Icon from '#lib/components/icons/Icon.svelte';
	import { fileDownload } from '#lib/components/icons/icons.js';

	let { label = 'Download', className = 'w-32 md:w-full my-8' } = $props<{
		label?: string;
		className?: string;
	}>();
</script>

<a
	href="/Alek%20Ortiz%20resume.pdf"
	download="Alek Ortiz resume.pdf"
	target="_blank"
	rel="noopener noreferrer"
	aria-label="Download Alek Ortiz resume as PDF"
	class={`flex justify-around items-center bg-black text-white p-1 border-2 border-black dark:border-white dark:bg-white dark:text-gray-800 rounded-xs min-h-11 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors ${className}`}
>
	<p>{label}</p>
	<div class="w-5" aria-hidden="true">
		<Icon icon={fileDownload} />
	</div>
</a>
