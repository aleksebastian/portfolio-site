<script>
	import MdFileDownload from 'svelte-icons/md/MdFileDownload.svelte';
</script>

<a
	href="Alek Ortiz resume.pdf"
	download="Alek Ortiz resume"
	rel="noopener"
	target="_blank"
	class="flex justify-around items-center w-32 md:w-full bg-black text-white my-8 p-1 border-2 border-black dark:border-white dark:bg-white dark:text-gray-800 rounded-sm"
>
	<p>Download</p>
	<div class="w-5">
		<MdFileDownload />
	</div>
</a>
