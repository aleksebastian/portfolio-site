<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="min-h-screen flex flex-col items-center justify-center px-6 text-center">
	<div class="border-t-2 border-[#f0f0f0]/20 pt-8 mb-6 w-full max-w-md">
		<span class="font-mono text-xs uppercase tracking-widest text-[#F5F500]">Error</span>
	</div>
	<h1
		class="font-display font-bold text-[clamp(4rem,15vw,10rem)] leading-none uppercase text-[#f0f0f0] mb-6"
	>
		{$page.status}
	</h1>
	<p class="font-mono text-xs uppercase tracking-widest text-[#f0f0f0]/60 mb-10">
		{$page.error?.message || 'Something went wrong'}
	</p>
	<a
		href="/"
		class="font-mono text-xs uppercase tracking-widest border-2 border-[#f0f0f0] text-[#f0f0f0] px-6 py-3 hover:bg-[#F5F500] hover:border-[#F5F500] hover:text-[#0a0a0a] transition-colors"
	>
		← Back Home
	</a>
</div>
