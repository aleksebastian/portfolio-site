<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex min-h-screen flex-col items-center justify-center px-6 text-center">
	<div class="mb-6 w-full max-w-md border-t-2 border-[#f0f0f0]/20 pt-8">
		<span class="text-accent font-mono text-xs tracking-widest uppercase">Error</span>
	</div>
	<h1
		class="font-display mb-6 text-[clamp(4rem,15vw,10rem)] leading-none font-bold text-[#f0f0f0] uppercase"
	>
		{page.status}
	</h1>
	<p class="mb-10 font-mono text-xs tracking-widest text-[#f0f0f0]/60 uppercase">
		{page.error?.message || 'Something went wrong'}
	</p>
	<a
		href="/"
		class="hover:border-accent hover:bg-accent hover:text-dark-200 border-2 border-[#f0f0f0] px-6 py-3 font-mono text-xs tracking-widest text-[#f0f0f0] uppercase transition-colors"
	>
		← Back Home
	</a>
</div>
