<script lang="ts">
	import type { Resume } from '#lib/types.js';
	import resumeData from '#lib/data/resume.json';

	const { aboutMe } = resumeData as Resume;
</script>

<h1 class="col-start-1 mb-5 text-3xl md:text-4xl">About me</h1>
<span class="col-start-1">
	{aboutMe}
</span>
