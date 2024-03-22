<script>
	import GridCard from '$lib/components/GridCard.svelte';
	import IconBrandSpotify from '@tabler/icons-svelte/dist/svelte/icons/IconBrandSpotify.svelte';
</script>

<GridCard bento={true} color="bg-[#1db954]" extraClasses="dark:text-text p-4">
	<div class="inline-flex">
		<IconBrandSpotify /> <span class="pl-1 font-medium">Favorite song</span>
	</div>
	<p><b>Llorar</b> - Los Socios Del Ritmo</p>
</GridCard>
