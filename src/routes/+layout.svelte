<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import computeTheme from '$lib/theme';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	injectSpeedInsights();
	inject({ mode: dev ? 'development' : 'production' });

	onMount(() => {
		computeTheme();
	});
</script>

<main>
	<slot />
</main>

<svelte:head>
	<title>SoyIlai</title>
	<meta content="SoyIlai" property="og:site_name" />
	<meta content="Portfolio & Blog" property="og:title" />
	<meta
		content="Here I give information about myself, what do I do, and my personal thoughts on the current tech news."
		property="og:description"
	/>
</svelte:head>
