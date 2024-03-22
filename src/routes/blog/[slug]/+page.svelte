<script>
	export let data;
</script>

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

<svelte:head>
	<title>{data.title}</title>
	<meta content="SoyIlai" property="og:site_name" />
	<meta content={data.title} property="og:title" />
	<meta content={data.desc} property="og:description" />
</svelte:head>
