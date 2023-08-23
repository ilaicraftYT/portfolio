<script>
	import { isDark } from '$lib/themeStore';
	import '../../app.css';
	import { onMount } from 'svelte';

	function toggleDarkMode() {
		isDark.update((v) => !v);
	}

	onMount(() => {
		isDark.subscribe((value) => {
			if (value == true || (value == null && window.matchMedia('(prefers-color-scheme: dark)'))) {
				if (value == null) value.set(true);
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		});
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="//unpkg.com/@catppuccin/highlightjs/css/catppuccin.variables.css" />
	<meta name="twitter:widgets:theme" content={$isDark ? 'dark' : 'light'} />
</svelte:head>

<main class="m-2">
	<div class="bg-surface0 text-text rounded-xl flex justify-between p-3">
		<p class="font-bold">Soy<span class="text-green">Ilai</span></p>
		<label class="relative inline-flex items-center cursor-pointer">
			<input type="checkbox" on:change={toggleDarkMode} checked={$isDark} class="sr-only peer" />
			<div
				class="w-11 h-6 bg-surface1 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content_[''] after:absolute after:top-[2px] after:left_[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green"
			/>
		</label>
	</div>
	<slot />
</main>
