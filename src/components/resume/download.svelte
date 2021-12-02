<script>
	import MdFileDownload from 'svelte-icons/md/MdFileDownload.svelte';
</script>

<a
	href="resume.pdf"
	download="Alek Ortiz resume"
	rel="noopener"
	target="_blank"
	class="flex justify-around items-center w-full bg-gray-800 text-white dark:text-gray-800 dark:bg-white my-8 p-1 border-2 rounded-sm"
>
	<div>Download</div>
	<div class="w-5">
		<MdFileDownload />
	</div>
</a>
