<script>
	import { isDark } from '$lib/store';
	import '../../app.css';
	import { onMount } from 'svelte';
	import Navbar from '$lib/Navbar.svelte';
	import computeTheme from '$lib/theme.js';

	onMount(() => {
		computeTheme();
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="//unpkg.com/@catppuccin/highlightjs/css/catppuccin.variables.css" />
	<meta name="twitter:widgets:theme" content={$isDark ? 'dark' : 'light'} />
</svelte:head>

<main class="m-2">
	<Navbar />
	<slot />
</main>
