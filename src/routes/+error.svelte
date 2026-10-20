<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} | Alek Ortiz</title>
</svelte:head>

<div class="flex min-h-screen flex-col items-center justify-center px-6 text-center">
	<div class="mb-6 w-full max-w-md border-t-2 border-(--c-line-20) pt-8">
		<span class="font-mono text-xs tracking-widest text-(--c-accent-text) uppercase">Error</span>
	</div>
	<h1
		class="font-display mb-6 text-[clamp(4rem,15vw,10rem)] leading-none font-bold text-(--c-text) uppercase"
	>
		{page.status}
	</h1>
	<p class="mb-10 font-mono text-xs tracking-widest text-(--c-text-dim) uppercase">
		{page.error?.message || 'Something went wrong'}
	</p>
	<a
		href="/"
		class="border-2 border-(--c-text) px-6 py-3 font-mono text-xs tracking-widest text-(--c-text) uppercase transition-colors hover:border-(--c-accent) hover:bg-(--c-accent) hover:text-(--c-text-inverse)"
	>
		← Back Home
	</a>
</div>
