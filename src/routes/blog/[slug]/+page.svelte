<script>
	export let data;
</script>

{#if data.ok}
<!-- h-[calc(100vh-72px)] ugliest fix ever !-->
<article class="bg-surface0 rounded-xl p-3 mt-2 w-full min-h-[calc(100vh-72px)]">
	<div class="text-center text-text">
		<h1 class="font-extrabold text-4xl">{data.title}</h1>
		<p class="font-light text-subtext0">{data.date}</p>
	</div>
	<div class="prose dark:prose-invert text-text">
		{@html data.post}
	</div>
</article>
{:else}
<article class="bg-surface0 rounded-xl p-3 mt-2 w-full min-h-[calc(100vh-72px)] text-text">
	<h1 class="font-extrabold text-3xl">Hope I was a teapot.</h1>
	<p>Something happened, make sure you're entering a valid blog entry.</p>
</article>
{/if}