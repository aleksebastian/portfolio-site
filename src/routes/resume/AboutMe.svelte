<script lang="ts">
	import type { Resume } from '$lib/types';
	import resumeData from '$lib/data/resume.json';
	
	const { aboutMe } = resumeData as Resume;
</script>

<h1 class="text-3xl md:text-4xl col-start-1 mb-5">About me</h1>
<span class="col-start-1">
	{aboutMe}
</span>
