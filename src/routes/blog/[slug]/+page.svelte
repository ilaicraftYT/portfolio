<script>
	export let data;
</script>

<div class="bg-surface0 rounded-xl text-text prose dark:prose-invert p-3 mt-2">
	<h1>{data.title}</h1>
	{@html data.post}
</div>
