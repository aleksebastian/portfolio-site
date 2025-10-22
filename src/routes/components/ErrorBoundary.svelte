<script lang="ts">
	import { onMount } from 'svelte';
	
	let { children, fallback } = $props<{
		children: any;
		fallback?: any;
	}>();
	
	let hasError = $state(false);
	let error: Error | null = $state(null);
	
	onMount(() => {
		const handleError = (event: ErrorEvent) => {
			hasError = true;
			error = event.error;
		};
		
		const handlePromiseRejection = (event: PromiseRejectionEvent) => {
			hasError = true;
			error = new Error(event.reason);
		};
		
		window.addEventListener('error', handleError);
		window.addEventListener('unhandledrejection', handlePromiseRejection);
		
		return () => {
			window.removeEventListener('error', handleError);
			window.removeEventListener('unhandledrejection', handlePromiseRejection);
		};
	});
	
	const reset = () => {
		hasError = false;
		error = null;
	};
</script>

{#if hasError}
	{#if fallback}
		{@render fallback({ error, reset })}
	{:else}
		<div class="flex flex-col items-center justify-center min-h-[200px] p-8 text-center">
			<h2 class="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">Something went wrong</h2>
			<p class="text-gray-600 dark:text-gray-400 mb-4">
				{error?.message || 'An unexpected error occurred'}
			</p>
			<button 
				onclick={reset}
				class="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors"
			>
				Try again
			</button>
		</div>
	{/if}
{:else}
	{@render children()}
{/if}