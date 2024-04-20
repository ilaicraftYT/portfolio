<script>
	import { isDark } from '$lib/store';

	import GridCard from '$lib/components/GridCard.svelte';
	import NightIcon from '@tabler/icons-svelte/IconMoonStars.svelte';
	import SunIcon from '@tabler/icons-svelte/IconSun.svelte';

	function toggleDarkMode() {
		isDark.update((v) => !v);
	}
</script>

<GridCard color="bg-surface0" extraClasses="flex justify-center items-center">
	<button class="text-text hover:text-green" on:click={toggleDarkMode}>
		{#if $isDark}
			<SunIcon size={48} />
		{:else}
			<NightIcon size={48} />
		{/if}
	</button>
</GridCard>
