<script>
	import '../../app.css';
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

<main class="m-2">
	<slot />
</main>

<svelte:head>
	<title>My projects</title>
	<meta property="og:title" content="Ilai projects" />
	<meta property="og:description" content="Why would you share this page?" />
</svelte:head>
