<script>
	export let bento = false;
	export let occupyAll = false;
	export let extraClasses = '';
	export let color = 'bg-neutral-600';
	let classes =
		`rounded-xl py-4 relative ${color} ${bento ? 'col-span-2' : occupyAll ? 'col-span-3' : ''} ` +
		extraClasses;
</script>

<div class={classes}><slot /></div>
