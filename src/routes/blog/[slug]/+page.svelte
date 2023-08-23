<script>
	export let data;
</script>

<article class="bg-surface0 rounded-xl p-3 mt-2 w-full h-full">
	<div class="text-center text-text">
		<h1 class="font-extrabold text-4xl">{data.title}</h1>
		<p class="font-light text-subtext0">{data.date}</p>
	</div>
	<div class="prose dark:prose-invert text-text">
		{@html data.post}
	</div>
</article>
