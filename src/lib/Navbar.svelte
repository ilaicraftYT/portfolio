<script>
	import { isDark } from '$lib/store';
	import NightIcon from '@tabler/icons-svelte/dist/svelte/icons/IconMoonStars.svelte';
	import SunIcon from '@tabler/icons-svelte/dist/svelte/icons/IconSun.svelte';

	function toggleDarkMode() {
		isDark.update((v) => !v);
	}
</script>

<nav class="bg-surface0 text-text rounded-xl flex justify-between p-3">
	<a class="font-bold cursor-pointer" href="/">Soy<span class="text-green">Ilai</span></a>
	<button class="text-text hover:text-green" on:click={toggleDarkMode}>
		{#if $isDark}
			<SunIcon />
		{:else}
			<NightIcon />
		{/if}
	</button>
</nav>
