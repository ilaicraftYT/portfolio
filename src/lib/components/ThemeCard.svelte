<script>
	import { isDark } from '$lib/store';

	import GridCard from '$lib/components/GridCard.svelte';

	function toggleDarkMode() {
		isDark.update((v) => !v);
	}
</script>

<GridCard color="bg-surface0" extraClasses="flex justify-center items-center">
	<label class="relative inline-flex items-center cursor-pointer">
		<input type="checkbox" on:change={toggleDarkMode} checked={$isDark} class="sr-only peer" />
		<div
			class="w-11 h-6 bg-surface1 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content_[''] after:absolute after:top-[2px] after:left_[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green"
		/>
	</label>
</GridCard>
