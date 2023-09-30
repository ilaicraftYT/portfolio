<script>
	import '../../app.css';
	import { onMount } from 'svelte';
	import computeTheme from '$lib/theme';

	onMount(() => {
		computeTheme();
	});
</script>

<main class="m-2">
	<slot />
</main>
