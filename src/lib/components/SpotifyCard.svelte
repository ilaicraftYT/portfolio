<script>
	import GridCard from '$lib/components/GridCard.svelte';
	import IconBrandSpotify from '@tabler/icons-svelte/icons/brand-spotify';
</script>

<GridCard bento={true} color="bg-[#1db954]" extraClasses="dark:text-text p-4 overflow-hidden">
	<div class="inline-flex">
		<IconBrandSpotify /> <span class="pl-1 font-medium">Favorite songs</span>
	</div>
	<div class="grid text-xs sm:grid-cols-2 sm:text-base/6">
		<p>
			<span><b>Al Despertar</b> - Rayito Colombiano</span>
		</p>
		<p>
			<span><b>El Afilador</b> - Grupo Carabo</span>
		</p>
		<p>
			<span><b>Hola</b> - Miranda!</span>
		</p>
		<p>
			<span><b>Por Amarte Así</b> - Cristian Castro</span>
		</p>
	</div>
</GridCard>
