<script>
	export let data;
</script>

{#if data.ok}
	<!-- h-[calc(100vh-72px)] ugliest fix ever !-->
	<article class="bg-surface0 rounded-xl p-3 mt-2 w-full min-h-[calc(100vh-72px)]">
		<div class="mt-2 flex justify-center text-text w-full">
			<div class="mx-6">
				<h1 class="font-extrabold text-5xl leading-10 tracking-tight">{data.title}</h1>
				<h2 class="mt-4 text-2xl leading-6 text-subtext0">{data.desc}</h2>
				<div class="mt-4">
					<hr class="border-overlay0" />
					<p class="mt-2 font-bold">Written by Ilai</p>
					<p>{data.date} - {data.readTime} min read</p>
					<hr class="mt-2 border-overlay0" />
				</div>
			</div>
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
