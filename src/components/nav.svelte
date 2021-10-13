<script>
	import { page } from '$app/stores';
	$: {
		current = $page.path;
	}
	let current = $page.path;
	const unselectedLinkClass = 'mx-4 text-lg self-end';
	const selectedLinkClass = 'mx-4 text-lg self-end text-red-900';
</script>

<nav class="flex mt-1 mb-10">
	<a class="mx-4 text-lg flex-grow" href="/">Alek Ortiz</a>
	<a class={current === '/' ? selectedLinkClass : unselectedLinkClass} href="/">Projects</a>
	<a class={current === '/resume' ? selectedLinkClass : unselectedLinkClass} href="/resume"
		>Resume</a
	>
	<a class={current === '/contact' ? selectedLinkClass : unselectedLinkClass} href="/contact"
		>Contact</a
	>
</nav>

<style>
	.selected {
		color: red;
	}
</style>
