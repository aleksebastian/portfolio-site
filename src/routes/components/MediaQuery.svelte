<script>
	import { onMount } from 'svelte';

	export let query;

	let mql;
	let mqlListener;
	let mounted = false;
	let matches = false;

	onMount(() => {
		mounted = true;
		return () => {
			removeActiveListener();
		};
	});

	$: if (mounted) {
		removeActiveListener();
		addNewListener(query);
	}

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
</script>

<slot {matches} />
