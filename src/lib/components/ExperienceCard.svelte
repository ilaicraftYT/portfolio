<script>
	import GridCard from '$lib/components/GridCard.svelte';

	const started = Math.abs(new Date(Date.now() - new Date('2019')).getUTCFullYear() - 1970);
</script>

<GridCard color="bg-sky" extraClasses="flex justify-center items-center overflow-hidden p-4">
	<div>
		<div class="flex flex-col justify-center items-center">
			<p class="text-4xl font-black">+{started}</p>
			<p class="text-1xl font-medium">years of</p>
			<p class="text-1xl font-medium leading-4">experience</p>
		</div>
	</div>
</GridCard>
