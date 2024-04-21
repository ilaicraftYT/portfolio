<script>
	import GridCard from '$lib/components/GridCard.svelte';

	const age = Math.abs(new Date(Date.now() - new Date('2010-10-13')).getUTCFullYear() - 1970);
</script>

<GridCard color="bg-red" extraClasses="">
	<div>
		<div class="flex flex-col items-center justify-center">
			<h3 class="text-1xl text-light">Age</h3>
			<p class="text-3xl font-black">{age}</p>
			<p class="font-medium">years old</p>
		</div>
	</div>
</GridCard>
