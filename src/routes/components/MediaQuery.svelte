<script lang="ts">
	import { onMount } from 'svelte';

	interface MediaQueryProps {
		query: string;
		children?: (props: { matches: boolean }) => any;
	}

	let { query, children } = $props() as MediaQueryProps;

	let mql: MediaQueryList;
	let mqlListener: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | undefined;
	let mounted = $state(false);
	let matches = $state(false);

	onMount(() => {
		mounted = true;
		return () => {
			removeActiveListener();
		};
	});

	function addNewListener(query: string): void {
		mql = window.matchMedia(query);
		mqlListener = (v: MediaQueryListEvent) => (matches = v.matches);
		mql.addEventListener('change', mqlListener);
		matches = mql.matches;
	}

	function removeActiveListener(): void {
		if (mql && mqlListener) {
			mql.removeEventListener('change', mqlListener);
		}
	}

	$effect.pre(() => {
		if (mounted) {
			removeActiveListener();
			addNewListener(query);
		}
	});
</script>

{@render children?.({ matches })}
