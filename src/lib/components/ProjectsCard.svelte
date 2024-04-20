<script>
	import GridCard from '$lib/components/GridCard.svelte';
	import IconBoxMultiple from '@tabler/icons-svelte/IconBoxMultiple.svelte';
	import IconChevronRight from '@tabler/icons-svelte/IconChevronRight.svelte';
</script>

<GridCard bento={true} color="bg-surface0" extraClasses="text-text p-4 overflow-">
	<div class="inline-flex text-l">
		<IconBoxMultiple /> <span class="pl-1 font-medium">Projects</span>
	</div>
	<p class="text-sm">Some of my publicly available or open-source projects.</p>
	<a class="absolute right-2 bottom-2" href="/my-projects">
		<IconChevronRight />
	</a>
</GridCard>
