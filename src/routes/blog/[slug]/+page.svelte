<script>
	export let data;
</script>

<article class="bg-surface0 rounded-xl text-text p-3 mt-2 w-full h-full">
	<div class="prose dark:prose-invert">
		<h1>{data.title}</h1>
		{@html data.post}
	</div>
</article>
