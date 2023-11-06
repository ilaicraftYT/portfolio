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
	<link
		rel="stylesheet"
		href="//unpkg.com/@catppuccin/highlightjs@0.1.2/css/catppuccin.variables.css"
	/>
	<meta name="twitter:widgets:theme" content={$isDark ? 'dark' : 'light'} />
	<title>Blog</title>
	<meta content="SoyIlai" property="og:site_name" />
	<meta content="Blog" property="og:title" />
	<meta
		content="Here I share my personal thoughts or test all the features implemented lol"
		property="og:description"
	/>
</svelte:head>

<main class="m-2">
	<Navbar />
	<slot />
</main>
