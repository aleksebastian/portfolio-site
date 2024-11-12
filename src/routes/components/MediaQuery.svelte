<script>
	import { run } from 'svelte/legacy';

	import { onMount } from 'svelte';

	let { query, children } = $props();

	let mql;
	let mqlListener;
	let mounted = $state(false);
	let matches = $state(false);

	onMount(() => {
		mounted = true;
		return () => {
			removeActiveListener();
		};
	});

	function addNewListener(query) {
		mql = window.matchMedia(query);
		mqlListener = (v) => (matches = v.matches);
		mql.addEventListener('change', mqlListener);
		matches = mql.matches;
	}

	function removeActiveListener() {
		if (mql && mqlListener) {
			mql.removeListener(mqlListener);
		}
	}

	$effect.pre() => {
		if (mounted) {
			removeActiveListener();
			addNewListener(query);
		}
	});
</script>

{@render children?.({ matches })}
