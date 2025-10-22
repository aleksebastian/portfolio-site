<script lang="ts">
	import MdFileDownload from 'svelte-icons/md/MdFileDownload.svelte';
</script>

<a
	href="Alek Ortiz resume.pdf"
	download="Alek Ortiz resume"
	target="_blank"
	rel="noopener noreferrer"
	aria-label="Download Alek Ortiz resume as PDF"
	class="flex justify-around items-center w-10/12 md:w-full bg-black text-white p-1 border-2 border-black dark:border-white dark:bg-white dark:text-gray-800 rounded-xs min-h-[44px] hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors mx-auto"
>
	<p>Download Resume</p>
	<div class="w-5" aria-hidden="true">
		<MdFileDownload />
	</div>
</a>
