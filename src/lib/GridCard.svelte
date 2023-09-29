<script>
	export let bento = false;
	export let occupyAll = false;
	export let extraClasses = '';
	export let color = 'bg-neutral-600';
	export let href = '';
	let classes =
		`rounded-xl py-4 relative ${color} ${bento ? 'col-span-2' : occupyAll ? 'col-span-3' : ''} ` +
		extraClasses;
</script>

<div class={classes}>
	{#if href}
		<a {href} class="cursor-pointer w-full h-full flex justify-center items-center" target="_blank">
			<slot />
		</a>
	{:else}
		<slot />
	{/if}
</div>
