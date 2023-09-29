<script>
	import { isDark } from '$lib/store';

	function toggleDarkMode() {
		isDark.update((v) => !v);
	}
</script>

<nav class="bg-surface0 text-text rounded-xl flex justify-between p-3">
	<a class="font-bold cursor-pointer" href="/">Soy<span class="text-green">Ilai</span></a>
	<label class="relative inline-flex items-center cursor-pointer">
		<input type="checkbox" on:change={toggleDarkMode} checked={$isDark} class="sr-only peer" />
		<div
			class="w-11 h-6 bg-surface1 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content_[''] after:absolute after:top-[2px] after:left_[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green"
		/>
	</label>
</nav>
